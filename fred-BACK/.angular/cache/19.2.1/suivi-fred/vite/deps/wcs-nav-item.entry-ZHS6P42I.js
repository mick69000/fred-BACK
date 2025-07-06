import {
  isEnterKey
} from "./chunk-NAIC4MMY.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-nav-item.entry.js
var navItemCss = 'wcs-nav-item{--wcs-nav-item-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-nav-item-height-desktop:calc(10 * var(--wcs-semantic-size-base));--wcs-nav-item-height-mobile:calc(6 * var(--wcs-semantic-size-base));--wcs-nav-item-gap-desktop:var(--wcs-semantic-spacing-base);--wcs-nav-item-gap-mobile:0;--wcs-nav-item-font-size-desktop:var(--wcs-semantic-font-size-label-3);--wcs-nav-item-font-size-mobile:calc(var(--wcs-semantic-font-size-body-1) / 2);--wcs-nav-item-background-color-default:var(--wcs-semantic-color-background-action-primary-default);--wcs-nav-item-background-color-hover:var(--wcs-semantic-color-background-action-primary-hover);--wcs-nav-item-background-color-press:var(--wcs-semantic-color-background-action-primary-press);--wcs-nav-item-background-color-active:var(--wcs-semantic-color-background-action-primary-selected-default);--wcs-nav-item-color-default:var(--wcs-semantic-color-foreground-action-primary-default);--wcs-nav-item-color-active:var(--wcs-semantic-color-foreground-action-primary-default);--wcs-nav-item-color-hover:var(--wcs-semantic-color-foreground-action-primary-default);--wcs-nav-item-color-press:var(--wcs-semantic-color-foreground-action-primary-default);--wcs-nav-item-border-color-focus:var(--wcs-semantic-color-border-focus-base-on-secondary);--wcs-nav-item-border-width-focus:var(--wcs-semantic-border-width-large);--wcs-nav-item-indicator-background-color:var(--wcs-semantic-color-background-surface-accent-light);--wcs-nav-item-indicator-width-desktop:calc(0.5 * var(--wcs-semantic-size-base));--wcs-nav-item-indicator-width-mobile:calc(3 * var(--wcs-semantic-size-base));--wcs-nav-item-indicator-height-desktop:calc(3 * var(--wcs-semantic-size-base));--wcs-nav-item-indicator-height-mobile:calc(0.5 * var(--wcs-semantic-size-base));--wcs-nav-item-indicator-border-radius-desktop:var(--wcs-semantic-border-radius-base) 0 0 var(--wcs-semantic-border-radius-base);--wcs-nav-item-indicator-border-radius-mobile:var(--wcs-semantic-border-radius-base) var(--wcs-semantic-border-radius-base) 0 0;--wcs-nav-item-transition-duration:var(--wcs-semantic-motion-duration-feedback-base);display:block;cursor:pointer;font-weight:var(--wcs-nav-item-font-weight);transition-property:color, background-color, border-color, box-shadow, backdrop-filter;transition-duration:var(--wcs-nav-item-transition-duration);transition-timing-function:ease-in-out;background-color:var(--wcs-nav-item-background-color-default)}wcs-nav-item a,wcs-nav-item button{display:flex;position:relative;flex-direction:column;align-items:center;justify-content:center;text-align:center;background-color:transparent;border:none;text-decoration:none;height:var(--wcs-nav-item-height-desktop);gap:var(--wcs-nav-item-gap-desktop);font-size:var(--wcs-nav-item-font-size-desktop);color:var(--wcs-nav-item-color-default)}@media (max-width: 1199px){wcs-nav-item a,wcs-nav-item button{display:flex;flex:1;height:var(--wcs-nav-item-height-mobile);gap:var(--wcs-nav-item-gap-mobile);font-size:var(--wcs-nav-item-font-size-mobile)}}wcs-nav-item button{width:100%;cursor:inherit}wcs-nav-item a:focus,wcs-nav-item button:focus{outline:none}@media (max-width: 1199px){wcs-nav-item:has(a:focus-visible),wcs-nav-item:has(button:focus-visible){outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-nav-item-border-color-focus);outline-offset:-2px;border-radius:var(--wcs-nav-item-border-width-focus)}@supports not selector(&:has(a:focus-visible)){wcs-nav-item:focus-within{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-nav-item-border-color-focus);outline-offset:-2px;border-radius:var(--wcs-nav-item-border-width-focus)}}@supports not selector(&:has(button:focus-visible)){wcs-nav-item:focus-within{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-nav-item-border-color-focus);outline-offset:-2px;border-radius:var(--wcs-nav-item-border-width-focus)}}}@media (min-width: 1200px){wcs-nav-item:has(a:focus-visible),wcs-nav-item:has(button:focus-visible){outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-nav-item-border-color-focus);outline-offset:-2px;border-radius:var(--wcs-nav-item-border-width-focus)}@supports not selector(&:has(a:focus-visible)){wcs-nav-item:focus-within{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-nav-item-border-color-focus);outline-offset:-2px;border-radius:var(--wcs-nav-item-border-width-focus)}}@supports not selector(&:has(button:focus-visible)){wcs-nav-item:focus-within{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-nav-item-border-color-focus);outline-offset:-2px;border-radius:var(--wcs-nav-item-border-width-focus)}}}wcs-nav-item i{margin-bottom:0.5rem;display:inline-block}@media (max-width: 1199px){wcs-nav-item i{margin-bottom:0.25rem;display:inline-block}}@media (min-width: 1200px){wcs-nav-item[slot=bottom] a{border-top:var(--wcs-nav-item-border-horizontal-width) solid var(--wcs-nav-item-border-horizontal-color);border-bottom:none !important}}wcs-nav-item:hover{background-color:var(--wcs-nav-item-background-color-hover)}wcs-nav-item:hover a{color:var(--wcs-nav-item-color-hover)}wcs-nav-item:active{background-color:var(--wcs-nav-item-background-color-press)}wcs-nav-item:active a{color:var(--wcs-nav-item-color-press)}wcs-nav-item.active,wcs-nav-item:has(>.active){background-color:var(--wcs-nav-item-background-color-active)}wcs-nav-item.active a,wcs-nav-item:has(>.active) a{color:var(--wcs-nav-item-color-active)}wcs-nav-item.active a::after,wcs-nav-item:has(>.active) a::after{position:absolute;right:0;width:var(--wcs-nav-item-indicator-width-desktop);height:var(--wcs-nav-item-indicator-height-desktop);content:"";background-color:var(--wcs-nav-item-indicator-background-color);border-radius:var(--wcs-nav-item-indicator-border-radius-desktop)}@media (max-width: 1199px){wcs-nav-item.active a::after,wcs-nav-item:has(>.active) a::after{right:auto;bottom:0;width:var(--wcs-nav-item-indicator-width-mobile);height:var(--wcs-nav-item-indicator-height-mobile);border-radius:var(--wcs-nav-item-indicator-border-radius-mobile)}}';
var WcsNavItemStyle0 = navItemCss;
var NavItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  onKeyDown(_event) {
    if (isEnterKey(_event)) {
      this.el.click();
    }
  }
  render() {
    return h(Host, {
      key: "8a21ba03aacff1aa94ae552a0f76f0e551df6e67",
      role: "listitem"
    }, h("slot", {
      key: "75d250a220a1eaba9cb8dd68adbe267379afb915"
    }));
  }
  get el() {
    return getElement(this);
  }
};
NavItem.style = WcsNavItemStyle0;
export {
  NavItem as wcs_nav_item
};
//# sourceMappingURL=wcs-nav-item.entry-ZHS6P42I.js.map
