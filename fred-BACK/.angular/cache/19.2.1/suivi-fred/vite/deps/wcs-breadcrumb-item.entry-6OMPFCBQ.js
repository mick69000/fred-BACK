import {
  ICONS_FONT_CHEVRON_UNICODE
} from "./chunk-L3EPD4QC.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-breadcrumb-item.entry.js
var breadcrumbItemCss = ':host{--wcs-breadcrumb-item-max-height:var(--wcs-semantic-size-s);--wcs-breadcrumb-item-line-height:var(--wcs-semantic-font-line-height-large);--wcs-breadcrumb-item-font-size:var(--wcs-semantic-font-size-body-3);--wcs-breadcrumb-item-icon-color:var(--wcs-semantic-color-foreground-brand);--wcs-breadcrumb-item-icon-font-size:0.5rem;--wcs-breadcrumb-item-gap:var(--wcs-semantic-spacing-base);--wcs-breadcrumb-item-link-color:var(--wcs-semantic-color-text-link-default);--wcs-breadcrumb-item-link-color-hover:var(--wcs-semantic-color-text-link-hover);--wcs-breadcrumb-item-link-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-breadcrumb-item-border-width-focus:var(--wcs-semantic-border-width-large);--wcs-breadcrumb-item-border-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-breadcrumb-item-active-color:var(--wcs-semantic-color-text-primary);display:flex;align-items:baseline;max-height:var(--wcs-breadcrumb-item-max-height);font-size:var(--wcs-breadcrumb-item-font-size);color:var(--wcs-breadcrumb-item-active-color);line-height:var(--wcs-breadcrumb-item-line-height)}:host ::slotted(a){display:block;height:100%;padding:1px 2px;font-weight:var(--wcs-breadcrumb-item-link-font-weight);color:var(--wcs-breadcrumb-item-link-color);text-decoration:none;border-radius:var(--wcs-breadcrumb-item-border-width-focus)}:host ::slotted(a:focus-visible){outline:var(--wcs-breadcrumb-item-border-width-focus) dashed var(--wcs-breadcrumb-item-border-color-focus);outline-offset:0;border-radius:0.1rem}:host ::slotted(a:hover){text-decoration:underline;color:var(--wcs-breadcrumb-item-link-color-hover)}:host .item-icon{margin-left:calc(var(--wcs-breadcrumb-item-gap) - 2px);font-family:"icons";font-size:var(--wcs-breadcrumb-item-icon-font-size);color:var(--wcs-breadcrumb-item-icon-color)}';
var WcsBreadcrumbItemStyle0 = breadcrumbItemCss;
var BreadcrumbItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.last = false;
  }
  render() {
    return h(Host, {
      key: "6effffe4ccde341f04d1d84563fedfe1132266b1",
      role: "listitem"
    }, h("slot", {
      key: "812a6c9525e402c42242727e6ab5d82a790262d2"
    }), !this.last && h("span", {
      key: "c63d5dd46647a36bc57f1bc84379119b95bfde79",
      class: "item-icon",
      "aria-hidden": "true"
    }, ICONS_FONT_CHEVRON_UNICODE));
  }
};
BreadcrumbItem.style = WcsBreadcrumbItemStyle0;
export {
  BreadcrumbItem as wcs_breadcrumb_item
};
//# sourceMappingURL=wcs-breadcrumb-item.entry-6OMPFCBQ.js.map
