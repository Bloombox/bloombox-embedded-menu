
goog.provide("embed.component.dialog");
goog.require("common.logging");


/**
 * `<bloombox-item-dialog>`
 */
Polymer({
  is: 'bloombox-item-dialog',

  properties: {
    /**
     * Specifies the product item to display.
     */
    selectedItem: {
      type: Object,
      notify: true,
      reflectToAttribute: true,
      value: null
    },

    /**
     * Specifies the section of the menu we're displaying from.
     */
    section: {
      type: String,
      notify: true,
      reflectToAttribute: true
    }
  }
});
