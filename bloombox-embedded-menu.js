
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
    }
  },

  observers: [
    "_widgetReady(apikey, partner, location, menuStyle)"
  ],

  /**
   * Dispatched once this component has all requisite configuration
   * to proceed and load data/render.
   *
   * @param {string} apikey API key to use for underlying public auth.
   * @param {string} partner Partner account ID.
   * @param {string} location Location ID to load menu for.
   * @param {string} menuStyle Style of the menu being rendered.
   */
  _widgetReady: function(apikey, partner, location, menuStyle) {
    let RPC = window["RPC"];
    console.info("[Embed:Component]: Loaded entrypoint configuration.", this);

    new RPC("embed", "view", {
      "partner": partner,
      "location": location,
      "style": menuStyle,
      "key": apikey
    }).then(function(response) {
      console.info("Embed RPC: ", response);
    }, function(err) {
      console.error("Embed RPC: ", err);
    });
  }
});
