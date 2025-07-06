import {
  Host,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-list-item.entry.js
var listItemCss = ":host{--wcs-list-item-padding:var(--wcs-semantic-spacing-large);--wcs-list-item-border-width:var(--wcs-semantic-border-width-default);--wcs-list-item-border-color:var(--wcs-semantic-color-border-secondary);--wcs-list-item-background-color-default:var(--wcs-semantic-color-background-action-secondary-default);--wcs-list-item-background-color-hover:var(--wcs-semantic-color-background-action-secondary-hover);--wcs-list-item-background-color-active:var(--wcs-semantic-color-background-action-secondary-selected-default);--wcs-list-item-transition-duration:var(--wcs-semantic-motion-duration-feedback-base);--wcs-list-item-title-color:var(--wcs-semantic-color-text-primary);--wcs-list-item-title-font-weight:var(--wcs-semantic-font-weight-heavy);--wcs-list-item-title-line-height:var(--wcs-semantic-font-line-height-medium);--wcs-list-item-title-margin-bottom:var(--wcs-semantic-spacing-base);--wcs-list-item-icon-color:var(--wcs-semantic-color-text-secondary);--wcs-list-item-icon-margin-right:var(--wcs-semantic-spacing-large);--wcs-list-item-actions-margin-left:var(--wcs-semantic-spacing-base);display:flex;padding:var(--wcs-list-item-padding);border:solid var(--wcs-list-item-border-width) var(--wcs-list-item-border-color);margin-bottom:calc(-1 * var(--wcs-list-item-border-width));background-color:var(--wcs-list-item-background-color-default)}:host(:hover){background-color:var(--wcs-list-item-background-color-hover);transition:var(--wcs-list-item-transition-duration)}:host([activated]){background-color:var(--wcs-list-item-background-color-active)}::slotted([slot=title]){color:var(--wcs-list-item-title-color);margin-bottom:var(--wcs-list-item-title-margin-bottom);line-height:var(--wcs-list-item-title-line-height);font-weight:var(--wcs-list-item-title-font-weight);font-family:inherit}::slotted([slot=icon]){color:var(--wcs-list-item-icon-color);margin-right:var(--wcs-list-item-icon-margin-right)}::slotted([slot=actions]){margin-left:var(--wcs-list-item-actions-margin-left)}.content{display:flex;flex-direction:column;flex-grow:1}.header{display:flex;justify-content:space-between}";
var WcsListItemStyle0 = listItemCss;
var ListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.activated = false;
  }
  render() {
    return h(Host, {
      key: "fc01923b2eb3b33d6258718a81455ab790e2dcf4"
    }, h("slot", {
      key: "6748668e355f3aec9245110299def03ac8783f1e",
      name: "icon"
    }), h("div", {
      key: "46a944966bd87168ad909d7ff9046362a4adf2e2",
      class: "content"
    }, h("div", {
      key: "d9d9e1d7bdcc5c1eb947e088b86a7308fd21f9af",
      class: "header"
    }, h("div", {
      key: "5dfb072ab048e89a4afe42e2e94b5299f455d889"
    }, h("slot", {
      key: "ed261613330757d84b1f5f252b32ddf58270b4e8",
      name: "title"
    }), h("slot", {
      key: "ed9f95eaddf982a4aaa07e7b41ae3b9e091c4c85",
      name: "properties"
    })), h("slot", {
      key: "c0aae152b37a42ffb57fcd7fb70f44f83ddf8d3e",
      name: "actions"
    })), h("slot", {
      key: "c7a6b166b7c6e0c160a758640e38feeb5dfcd55d",
      name: "description"
    })));
  }
};
ListItem.style = WcsListItemStyle0;
export {
  ListItem as wcs_list_item
};
//# sourceMappingURL=wcs-list-item.entry-R27XH6VX.js.map
