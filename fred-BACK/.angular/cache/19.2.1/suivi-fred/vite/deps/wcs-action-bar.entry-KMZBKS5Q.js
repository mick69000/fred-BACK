import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-action-bar.entry.js
var actionBarCss = ":host{--wcs-action-bar-background-color:var(--wcs-semantic-color-background-surface-primary);--wcs-action-bar-gap:var(--wcs-semantic-spacing-small);--wcs-action-bar-gap-actions:calc(4 * var(--wcs-semantic-spacing-base));--wcs-action-bar-min-height:calc(10 * var(--wcs-semantic-size-base));--wcs-action-bar-padding-horizontal:var(--wcs-semantic-spacing-large);--wcs-action-bar-padding-vertical:var(--wcs-semantic-spacing-base);--wcs-action-bar-tabs-margin-top:calc(1.5 * var(--wcs-semantic-spacing-base));--wcs-action-bar-title-font-size:var(--wcs-semantic-font-size-heading-4);--wcs-action-bar-title-font-weight:var(--wcs-semantic-font-weight-heavy);--wcs-action-bar-title-color:var(--wcs-semantic-color-text-primary);--wcs-tabs-gutter-border-width:var(--wcs-semantic-border-width-default);--wcs-tabs-gutter-background-color:var(--wcs-semantic-color-border-secondary);padding:0 var(--wcs-action-bar-padding-horizontal);min-height:var(--wcs-action-bar-min-height);background-color:var(--wcs-action-bar-background-color);box-sizing:border-box;display:flex;flex-direction:column;gap:var(--wcs-action-bar-gap)}:host .title-actions{padding-top:var(--wcs-action-bar-padding-vertical);padding-bottom:var(--wcs-action-bar-padding-vertical);gap:var(--wcs-action-bar-gap-actions);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;flex-grow:1}:host .title-actions[data-has-tabs]{padding-bottom:0}:host h1{font-size:var(--wcs-action-bar-title-font-size);font-weight:var(--wcs-action-bar-title-font-weight);line-height:1.25;margin:0;color:var(--wcs-action-bar-title-color)}:host([gutter]){border-bottom:solid var(--wcs-tabs-gutter-border-width) var(--wcs-tabs-gutter-background-color)}::slotted([slot=actions]){display:flex}::slotted([slot=tabs]){margin-top:var(--wcs-action-bar-tabs-margin-top)}";
var WcsActionBarStyle0 = actionBarCss;
var ActionBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.gutter = void 0;
    this.hasTabs = false;
  }
  componentWillLoad() {
    this.hasTabs = !!this.el.querySelector('[slot="tabs"]');
  }
  render() {
    return h(Host, {
      key: "d67394521e0f511ce6c4632ff2ac177920cee7f6"
    }, h("div", {
      key: "15e01e65524923776ff1e9a793a84ca395fc9cb6",
      class: "title-actions",
      "data-has-tabs": this.hasTabs
    }, h("h1", {
      key: "9b260476e27f3702402fccd690f1481cd2b6937a"
    }, h("slot", {
      key: "8610b80130c93f2f3b1bbd987d9c3eb8044389ae"
    })), h("div", {
      key: "4b8b05c7331d1de0ac889c475de8a675cb4ab96d",
      class: "actions"
    }, h("slot", {
      key: "129ffb87ce43f64a6793606ae5fbca423270bc9f",
      name: "actions"
    }))), h("div", {
      key: "21f236bd1e8cce919d2410f2865531dc85973079",
      class: "tabs-container"
    }, h("slot", {
      key: "4d137643a6576ee3d34d32dd38e63952ecb9171e",
      name: "tabs"
    })));
  }
  get el() {
    return getElement(this);
  }
};
ActionBar.style = WcsActionBarStyle0;
export {
  ActionBar as wcs_action_bar
};
//# sourceMappingURL=wcs-action-bar.entry-KMZBKS5Q.js.map
