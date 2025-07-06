import {
  Host,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-list-item-properties.entry.js
var listItemPropertiesCss = ':host{--wcs-list-item-properties-margin-bottom:var(--wcs-semantic-spacing-small);--wcs-list-item-properties-gap:calc(4 * var(--wcs-semantic-spacing-base));--wcs-list-item-properties-separator-width:var(--wcs-semantic-border-width-large);--wcs-list-item-properties-separator-color:var(--wcs-semantic-color-border-secondary);display:flex;margin-bottom:var(--wcs-list-item-properties-margin-bottom);gap:var(--wcs-list-item-properties-gap)}::slotted(*:not(:last-of-type)){position:relative}::slotted(*:not(:last-of-type))::after{position:absolute;content:"";top:0;height:100%;width:var(--wcs-list-item-properties-separator-width);background-color:var(--wcs-list-item-properties-separator-color);right:calc(-0.5 * var(--wcs-list-item-properties-gap) - 0.5 * var(--wcs-list-item-properties-separator-width))}';
var WcsListItemPropertiesStyle0 = listItemPropertiesCss;
var ListItemProperties = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, {
      key: "7bc379354b0bdab45108f2c1d500f224ed99ca1e",
      slot: "properties"
    }, h("slot", {
      key: "cda45f2972400764901621d4332ae2ef00e29fe0",
      name: "property"
    }));
  }
};
ListItemProperties.style = WcsListItemPropertiesStyle0;
export {
  ListItemProperties as wcs_list_item_properties
};
//# sourceMappingURL=wcs-list-item-properties.entry-6TTBODOT.js.map
