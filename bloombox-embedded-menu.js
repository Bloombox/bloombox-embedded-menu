
goog.provide("embed.component");
goog.require("common.logging");
goog.require("common.api");


let MenuSectionLabels = {
  "flowers": ["Flower", "Flowers", "Flowers"],
  "edibles": ["Edible", "Edibles", "Edibles"],
  "prerolls": ["Pre-Roll", "Pre-Rolls", "Pre-Rolls"],
  "apothecary": ["Item", "Items", "Apothecary"],
  "concentrates": ["Extract", "Extracts", "Extracts"],
  "cartridges": ["Item", "Items", "Cartridges & Batteries"],
  "plants": ["Item", "Items", "Seeds & Clones"],
  "freebies": ["Freebie", "Freebies", "Freebies"]
};

let MenuSectionOrder = [
  "flowers", "concentrates", "edibles", "prerolls", "apothecary", "cartridges", "plants", "freebies"
];

let EmbeddedMenuSortMode = {
  "PRICE": "PRICE",
  "POTENCY": "POTENCY"
};

let CBDSelectionThreshold = 1.0;
let PriceEvaluationOrder = ['gram', 'halfgram', 'unit', 'eighth'];

let _defaultSortMode = EmbeddedMenuSortMode.PRICE;
let _defaultShowOutOfStock = false;

let _lastSeenSortMode = _defaultSortMode;
let _lastSeenShowOutOfStock = _defaultShowOutOfStock;

window["MenuSectionLabels"] = MenuSectionLabels;
window["MenuSectionOrder"] = MenuSectionOrder;
window["EmbeddedMenuSortMode"] = EmbeddedMenuSortMode;


/**
 * Sort two objects by price, resolving mutually-specified price blocks to compare
 * by, or defer to `nextSort`, if defined.
 *
 * @private
 * @param {string} section Name of the section we're in.
 * @param {Object} left Left-side product to sort.
 * @param {Object} right Right-side product to sort.
 * @param {?function(string, Object, Object)} nextSort Optional next sort function.
 */
function _sortProductsByPrice(section, left, right, nextSort) {
  let leftPricing = left["value"]["pricing"] || left["value"]["pricelist"];
  let rightPricing = right["value"]["pricing"] || right["value"]["pricelist"];

  if (leftPricing && rightPricing) {
    let leftPriceBlock;
    let rightPriceBlock;
    let leftPrice;
    let rightPrice;

    for (let i in PriceEvaluationOrder) {
      leftPriceBlock = leftPricing[PriceEvaluationOrder[i]];
      rightPriceBlock = rightPricing[PriceEvaluationOrder[i]];

      if (leftPriceBlock && rightPriceBlock) {
        leftPrice = leftPriceBlock["value"] || leftPriceBlock["price"];
        rightPrice = rightPriceBlock["value"] || rightPriceBlock["price"];

        if (leftPrice === rightPrice) {
          // price values for mutual blocks are equal
          if (nextSort)
            return nextSort(section, left, right);
          return 0;
        } else if (leftPrice < rightPrice) {
          // left price is less than right price
          return 1;
        } else {
          // right price is less than left price
          return -1;
        }
      }
    }
  } else {
    // no pricing for one of left or right, or both
    if (nextSort)
      return nextSort(section, left, right);
    return 0;
  }

  // no mutual price blocks found
  if (nextSort)
    return nextSort(section, left, right);
  return 0;
}

/**
 * Sort two objects by premium status, resolving mutually-specified test results
 * to compare by, or defer to `nextSort`, if defined.
 *
 * @private
 * @param {string} section Name of the section we're in.
 * @param {Object} left Left-side product to sort.
 * @param {Object} right Right-side product to sort.
 * @param {?function(string, Object, Object)} nextSort Optional next sort function.
 */
function _sortProductsByPremium(section, left, right, nextSort) {
  let leftFlags = left["value"]["flags"] || null;
  let rightFlags = right["value"]["flags"] || null;

  if (leftFlags && rightFlags) {
    if (leftFlags["premium"] === true && rightFlags["premium"] === true) {
      // they're both premium: defer to next sort, or they're equal
      if (nextSort)
        return nextSort(section, left, right);
      return 0;
    } else if (leftFlags["premium"] === true && !rightFlags["premium"]) {
      return 1;
    } else if (rightFlags["premium"] === true && !leftFlags["premium"]) {
      return -1;
    }
  } else {
    // one of the two, or both, does not even have flags
    if (!leftFlags && rightFlags) {
      // right side has flags
      if (rightFlags["premium"] === true) {
        // right side happens to be premium, left side is not
        return -1;
      }
      return 0;  // no way of knowing: both are not premium
    } else if (!rightFlags && leftFlags) {
      // left side has flags
      if (leftFlags["premium"] === true) {
        // left side happens to be premium, right side is not
        return 1;
      }
      return 0;  // no way of knowing: both are not premium
    } else {
      // neither side has flags: defer to next sort, or they're equal
      if (nextSort)
        return nextSort(section, left, right);
      return 0;
    }
  }
}

/**
 * Sort two objects by THC potency, resolving mutually-specified test results to
 * compare by, or defer to `nextSort`, if defined.
 *
 * @private
 * @param {string} section Name of the section we're in.
 * @param {Object} left Left-side product to sort.
 * @param {Object} right Right-side product to sort.
 * @param {?function(string, Object, Object)} nextSort Optional next sort function.
 * @param {?string} potencySortMode Property to sort by in potency tests. Usually
 *                  either `thc` or `cbd`.
 */
function _sortProductsByPotency(section, left, right, nextSort, potencySortMode) {
  let leftTests = left["value"]["tests"];
  let rightTests = right["value"]["tests"];
  let propToSort = potencySortMode ? potencySortMode : "thc";

  if (leftTests && rightTests) {
    // both sides have tests: we can compare
    if (leftTests[propToSort] < rightTests[propToSort]) {
      // right side wins
      return -1;
    } else if (leftTests[propToSort] > rightTests[propToSort]) {
      // left side wins
      return 1;
    } else {
      // they are equal somehow
      if (nextSort)
        return nextSort(section, left, right);
      return 0;
    }
  } else if (!leftTests && rightTests) {
    // right side has tests: promote it
    return -1;
  } else if (rightTests && !leftTests) {
    // left side has tests: promote it
    return 1;
  } else {
    // neither have tests
    if (nextSort)
      return nextSort(section, left, right);
    return 0;
  }
}

/**
 * Sort two objects by product name.
 *
 * @private
 * @param {string} section Name of the section we're in.
 * @param {Object} left Left-side product to sort.
 * @param {Object} right Right-side product to sort.
 * @param {?function(string, Object, Object)} nextSort Optional next sort function.
 */
function _sortProductsByName(section, left, right, nextSort) {
  let leftName = left["value"]["name"];
  let rightName = right["value"]["name"];

  if (left === right) {
    if (nextSort)
      return nextSort(section, left, right);
    return 0;
  } else if (left < right) {
    return -1;
  } else {
    return 1;
  }
}


/**
 * `<bloombox-embedded-menu>`
 */
Polymer({
  is: 'bloombox-embedded-menu',

  properties: {
    /**
     * Calculated menu data endpoint.
     */
    _dataEndpoint: {
      type: String,
      notify: true,
      readOnly: true
    },

    /**
     * Original menu data, as it was provided by the server.
     */
    _rawMenuData: {
      type: Object,
      notify: true,
      readOnly: true
    },

    /**
     * Search UI visibility status.
     */
    _searchActive: {
      type: Boolean,
      notify: true,
      value: false,
      readOnly: true
    },

    /**
     * Computed final array of products we will be displaying.
     */
    _products: {
      type: Array,
      notify: true,
      computed: '_computeProducts(section, showNotInStock, menuData, sortMode)'
    },

    /**
     * Computed set of menu sections for which we have data.
     */
    sections: {
      type: Array,
      notify: true,
      readOnly: true,
    },

    /**
     * Loading status for this widget.
     */
    loading: {
      type: Boolean,
      notify: true,
      value: true,
      readOnly: true
    },

    /**
     * API key to authorize communications with the Bloombox APIs.
     */
    apikey: {
      type: String,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * Partner account ID we are displaying the menu for.
     */
    partner: {
      type: String,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * Location account ID we are displaying the menu for.
     */
    location: {
      type: String,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * Specifies the display style of the menu.
     */
    menuStyle: {
      type: String,
      notify: true,
      reflectToAttribute: true,
      value: "MASTER_ONLY"
    },

    /**
     * Loaded menu data.
     */
    menuData: {
      type: Object,
      notify: true,
      readOnly: true
    },

    /**
     * Specifies the active sort mode for displayed products.
     */
    sortMode: {
      type: String,
      notify: true,
      reflectToAttribute: true,
      value: _defaultSortMode
    },

    /**
     * Whether to show tabs for menu sections in the UI.
     */
    showTabs: {
      type: Boolean,
      notify: true,
      reflectToAttribute: true,
      value: false
    },

    /**
     * Whether to show the top header or not.
     */
    showHeader: {
      type: Boolean,
      notify: true,
      reflectToAttribute: true,
      value: false
    },

    /**
     * Widget top-level title.
     */
    title: {
      type: String,
      notify: true,
      reflectToAttribute: true,
      value: "Menu"
    },

    /**
     * Partner account ID we are displaying the menu for.
     */
    showNotInStock: {
      type: Boolean,
      notify: true,
      reflectToAttribute: true,
      value: _defaultShowOutOfStock
    },

    /**
     * Specifies the section of the menu to display.
     */
    section: {
      type: String,
      notify: true,
      reflectToAttribute: true,
      value: "flowers"
    }
  },

  /**
   * Fired when `element` changes its awesomeness level.
   *
   * @event product-detail
   * @param {number} newAwesome New level of awesomeness.
   */

  observers: [
    "_widgetReady(loading, apikey, partner, location, menuStyle)",
    "_dataReady(loading, apikey, partner, location, menuStyle, _rawMenuData)"
  ],

  /**
   * Small utility function for converting an object and its keys into an array
   * of `{key: k, value: v}` objects, suitable for iteration.
   *
   * @param {Object} object Thing we are converting to an array.
   * @return {Array} Converted array.
   */
  _toArray: function(obj, showNotInStock) {
    return Array.isArray(obj) ? obj : Object.keys(obj).map(function(key) {
      return {
        key: key,
        value: obj[key]
      };
    });
  },

  /**
   * Sort the set of visible products by the desired `sortMode`, which is
   * enumerated in `EmbeddedMenuSortMode`.
   *
   * @param {string} section Section of the menu to display.
   * @param {Object} products Array of products to sort.
   * @param {string} sortMode Desired sort mode, either `PRICE` or `POTENCY`.
   * @return {Object} Array of sorted producs, according to `sortMode`.
   */
  _sortProducts: function(section, products, sortMode) {
    _lastSeenSortMode = sortMode;
    return products.sort(function(leftItem, rightItem) {
      if (sortMode === "PRICE") {
        // sort by price...
        return _sortProductsByPrice(section, leftItem, rightItem, function(section, left, right) {
          // then premium...
          return _sortProductsByPremium(section, left, right, function(section, left, right) {
            // then potency...
            return _sortProductsByPotency(section, left, right, function(section, left, right) {
              // then name.
              return _sortProductsByName(section, left, right);
            });
          });
        });
      } else if (sortMode === "POTENCY") {
        // sort by potency...
        return _sortProductsByPotency(section, leftItem, rightItem, function(section, left, right) {
          // then premium...
          return _sortProductsByPremium(section, left, right, function(section, left, right) {
            // then price...
            return _sortProductsByPrice(section, left, right, function(section, left, right) {
              // then name.
              return _sortProductsByName(section, left, right);
            });
          }); 
        });
      } else {
        throw "Invalid sort mode: " + sortMode;
      }
    });
  },

  /**
   * Filter visible products according to the widget's current settings.
   *
   * @param {string} section Currently-visible menu section.
   * @param {boolean} showNotInStock Whether to show items that are not in stock.
   * @param {Object} productSet Set of products to filter.
   * @return {Array} Set of filtered products to be shown.
   */
  _filterProducts: function(section, showNotInStock, productSet) {
    _lastSeenShowOutOfStock = showNotInStock;
    return this._toArray(productSet).filter(function(item) {
      if ("flags" in item["value"] && "visible" in item["value"]["flags"] && item["value"]["flags"]["visible"] === false) {
        return showNotInStock;
      }
      return true;
    });
  },

  /**
   * Compute the products that we should be showing right now
   * on the embedded menu.
   *
   * @private
   * @param {string} section Section of the menu to display.
   * @param {boolean} showNotInStock Whether to show items that are not-in-stock.
   * @param {Object} menuData Full set of menu data.
   * @param {string} sortMode Selected sort mode - either `PRICE` or `POTENCY`.
   * @return {Array} Set of products on the menu.
   */
  _computeProducts: function(section, showNotInStock, menuData, sortMode) {
    if (!(section in menuData))
      throw "Invalid section: " + section;

    let productSet = menuData[section];
    if (_lastSeenSortMode != sortMode || _lastSeenShowOutOfStock !== showNotInStock) {
      return this._sortProducts(
        section,
        this._filterProducts(section, showNotInStock, productSet),
        sortMode);
    } else {
      return productSet;  // it's already sorted/filtered how we want
    }
  },

  /**
   * Presort menu data for product categories specified in our newly-acquired
   * menu payload.
   *
   * @param {string} section Visible section of the current menu.
   * @param {boolean} showNotInStock Whether to show items that are not-in-stock.
   * @param {Object} menuData Payload data for the current menu.
   * @param {string} sortMode Sort by either `PRICE` or `POTENCY`.
   */
  _presortMenuData: function(section, showNotInStock, menuData, sortMode) {
    let sections = {};
    let sectionKey;

    // process menu data by section
    let label;
    let sectionData;
    let processedData;
    let processedMenu = {};

    for (sectionKey in menuData["payload"]) {
      if (menuData["payload"].hasOwnProperty(sectionKey)) {
        // specify section info
        label = MenuSectionLabels[sectionKey][2];
        sectionData = menuData["payload"][sectionKey];

        sections[sectionKey] = {
          "heading": label,
          "key": sectionKey
        };

        // sort + filter products according to settings
        processedData = this._sortProducts(
          sectionKey,
          this._filterProducts(section, showNotInStock, sectionData),
          sortMode);

        processedMenu[sectionKey] = processedData;
      }
    }

    // make sure sections are ordered how we want them to be
    let sectionList = [];
    let sectionOrderItemKey;
    let dataForSection;
    for (sectionOrderItemKey in MenuSectionOrder) {
      dataForSection = sections[MenuSectionOrder[sectionOrderItemKey]];
      if (dataForSection) {
        sectionList.push(dataForSection);
      }
    }
    
    // setup our section list and return our data
    this._setSections(sectionList);
    return processedMenu;
  },

  /**
   * Dispatched once this component has all requisite configuration
   * to proceed and load data/render.
   *
   * @param {boolean} loading Whether the widget is first-loading or not.
   * @param {string} apikey API key to use for underlying public auth.
   * @param {string} partner Partner account ID.
   * @param {string} location Location ID to load menu for.
   * @param {string} menuStyle Style of the menu being rendered.
   */
  _widgetReady: function(loading, apikey, partner, location, menuStyle) {
    if (loading) {
      let sortMode = this.sortMode;
      let section = this.section;
      let showNotInStock = this.showNotInStock;

      let RPC = window["RPC"];
      Logging["info"]("Embed:Component", "Loaded entrypoint configuration.", this);

      let that = this;

      new RPC("embed", "view", {
        "partner": partner,
        "location": location,
        "style": menuStyle,
        "key": apikey
      }).then(function(response) {
        if (response["status"] === 200) {
          // we should have a menu data link now
          let menuDataLink = response["result"]["payload"]["link"];
          Logging["say"]("Embed:Component", "Embed RPC: ", menuDataLink, response);

          let xhr = new XMLHttpRequest();
          xhr.open('GET', menuDataLink, true);
          xhr.responseType = 'text';

          xhr.onload = function(e) {
            if (this.status === 200) {
              let menuData = JSON.parse(this.response);
              that._set_rawMenuData(menuData);
            } else {
              Logging["error"]("Embed:Component", "Failed to load menu data.", this.status);
            }
          };

          xhr.send();
        } else {
          Logging["error"]("Embed:Component", "Failed to embed Bloombox menu: ", response["status"], response["result"]);
        }
      }, function(err) {
        Logging["error"]("Embed:Component", "Failed to embed Bloombox menu: ", err);
      });
    } else {
      Logging["warn"]("Embed:Component", "Widget already ready.");
    }
  },

  /**
   * Dispatched once both the widget UI and backing menu data are loaded,
   * and we are ready to render.
   *
   * @param {boolean} loading Whether the widget is first-loading or not.
   * @param {string} apikey API key to use for underlying public auth.
   * @param {string} partner Partner account ID.
   * @param {string} location Location ID to load menu for.
   * @param {string} menuStyle Style of the menu being rendered.
   * @param {Object} menuData Menu data.
   * @param {boolean} showNotInStock Whether to show not-in-stock products.
   */
  _dataReady: function(loading, apikey, partner, location, menuStyle, menuData) {
    if (loading)
      Logging["say"]("Embed:Component", "Loaded menu data. Performing prep work...", menuData);
    else
      Logging["say"]("Embed:Component", "Widget config changed - reprocessing data.");

    let showNotInStock = this.showNotInStock;
    let processedMenu = this._presortMenuData(this.section, showNotInStock, menuData, this.sortMode);
    this._setMenuData(processedMenu);

    Logging["say"]("Embed:Component", "Pre-sorted and filtered menu data. Ready to render...", processedMenu);
    this._setLoading(false);
  },

  /**
   * Trigger search UI.
   *
   * @param {Object} event Event object, provided by the runtime.
   * @param {Object} detail Event detail information.
   */
  _openSearch: function(event, detail) {
    debugger;
  },

  /**
   * Open filters dialog.
   *
   * @param {Object} event Event object, provided by the runtime.
   * @param {Object} detail Event detail information.
   */
  _openFilters: function(event, detail) {
    debugger;
  },


  /**
   * Tap handler for individual master product entries, responsible for
   * rendering and displaying the detail dialog.
   *
   * @param {Object} event Event object, generated by runtime.
   * @param {Object} detail Detailed data about the event.
   */
  showProductDetail: function(event, detail) {
    debugger;
    Logging["say"]("Embed:Component", "User selected a product to view.", event, detail);
    this.fire("product-detail", {});
  }
});
