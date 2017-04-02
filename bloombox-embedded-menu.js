
/**
 * `<bloombox-embedded-menu>`
 */
var BloomboxEmbeddedMenu = Polymer["BloomboxEmbeddedMenu"] = Polymer({
  is: 'bloombox-embedded-menu',

  properties: {
    /**
     * API key to authorize communications with the Bloombox APIs.
     *
     * @type {string}
     */
    apikey: {
      type: String,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * Partner account ID we are displaying the menu for.
     *
     * @type {string}
     */
    partner: {
      type: String,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * Location account ID we are displaying the menu for.
     *
     * @type {string}
     */
    location: {
      type: String,
      notify: true,
      reflectToAttribute: true
    }
  },

  observers: [
    "_widgetReady(apikey, partner, location)"
  ],

  /**
   * Dispatched once this component has all requisite configuration
   * to proceed and load data/render.
   *
   * @param {string} apikey API key to use for underlying public auth.
   * @param {string} partner Partner account ID.
   * @param {string} location Location ID to load menu for.
   */
  _widgetReady: function(apikey, partner, location) {
    console.info("[Embed:Component]: Loaded entrypoint configuration.", {
      "apikey": apikey,
      "partner": partner,
      "location": location
    });
  }
});
