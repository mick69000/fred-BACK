import {
  Host,
  createEvent,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-com-nav-item.entry.js
var comNavItemCss = ":host{--wcs-com-nav-item-gap:var(--wcs-semantic-spacing-base);--wcs-com-nav-item-font-size:var(--wcs-semantic-font-size-label-1);--wcs-com-nav-item-arrow-icon-color:var(--wcs-semantic-color-foreground-action-neutral-default);--wcs-com-nav-item-arrow-icon-font-size:0.6rem;--wcs-com-nav-item-arrow-icon-font-family:icons;--wcs-com-nav-item-arrow-icon-line-height:1;--wcs-com-nav-item-focus-outline-color:var(--wcs-semantic-color-border-focus-base);position:relative;display:inline-flex;align-items:center;gap:var(--wcs-com-nav-item-gap);height:fit-content;padding:0 8px;font:inherit;}:host ::slotted(a){user-select:none;cursor:pointer;text-decoration:none;font-size:var(--wcs-com-nav-item-font-size);color:inherit;font-weight:inherit;display:flex;align-items:center}:host .arrow-icon{display:inline-block;font-family:icons;color:var(--wcs-com-nav-item-arrow-icon-color);font-size:var(--wcs-com-nav-item-arrow-icon-font-size);line-height:var(--wcs-com-nav-item-arrow-icon-line-height);box-sizing:border-box}:host .arrow-container{display:unset}:host ::slotted(a:focus-visible){outline:none}:host(:focus-within){outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-com-nav-item-focus-outline-color);outline-offset:0.5rem;border-radius:2px}@media screen and (min-width: 576px){:host ::slotted(a){display:flex;align-items:center;height:100%;padding-top:unset;padding-bottom:unset;padding-left:unset}}";
var WcsComNavItemStyle0 = comNavItemCss;
var ComNavItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsClickOnFinalAction = createEvent(this, "wcsClickOnFinalAction", 7);
  }
  onClick() {
    this.wcsClickOnFinalAction.emit();
  }
  render() {
    return h(Host, {
      key: "ebafe8ee7fa4dfb839095a00119b1fb60ec9f61f",
      role: "listitem"
    }, h("slot", {
      key: "4dd33801a76cd03665c107afb6a1640f2843d3cd"
    }), h("span", {
      key: "a9fe68e0e7b0e4221ba6b1a6b3e6802876082ce4",
      class: "arrow-container"
    }, h("span", {
      key: "b0d3aa7fbfb967e7910ea6f446e1dd0489d39265",
      "aria-hidden": "true",
      class: "arrow-icon"
    }, "")));
  }
};
ComNavItem.style = WcsComNavItemStyle0;
export {
  ComNavItem as wcs_com_nav_item
};
//# sourceMappingURL=wcs-com-nav-item.entry-KE7FKWWT.js.map
