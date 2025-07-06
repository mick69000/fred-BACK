import {
  isEnterKey,
  isSpaceKey
} from "./chunk-NAIC4MMY.js";
import {
  Host,
  createEvent,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-dropdown-item.entry.js
var dropdownItemCss = "wcs-dropdown-item{--wcs-dropdown-item-height:var(--wcs-semantic-size-m);--wcs-dropdown-item-padding-horizontal:var(--wcs-semantic-spacing-base);--wcs-dropdown-item-padding-vertical:0;--wcs-dropdown-item-text-font-weight:var(--wcs-semantic-font-weight-roman);--wcs-dropdown-item-text-color-default:var(--wcs-semantic-color-foreground-action-neutral-default);--wcs-dropdown-item-text-color-hover:var(--wcs-semantic-color-foreground-action-neutral-hover);--wcs-dropdown-item-text-color-press:var(--wcs-semantic-color-foreground-action-neutral-press);--wcs-dropdown-item-background-color-default:var(--wcs-semantic-color-background-action-neutral-default);--wcs-dropdown-item-background-color-hover:var(--wcs-semantic-color-background-action-neutral-hover);--wcs-dropdown-item-background-color-press:var(--wcs-semantic-color-background-action-neutral-press);--wcs-dropdown-item-border-width-focus:var(--wcs-semantic-border-width-large);--wcs-dropdown-item-border-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-dropdown-item-border-radius:var(--wcs-semantic-border-radius-base);--wcs-dropdown-item-transition-duration:var(--wcs-semantic-motion-duration-feedback-base);padding:0 var(--wcs-dropdown-item-padding-horizontal);font-weight:var(--wcs-dropdown-item-text-font-weight);cursor:pointer;color:var(--wcs-dropdown-item-text-color-default);height:var(--wcs-dropdown-item-height);display:flex;flex-direction:row;align-items:center;border-radius:var(--wcs-dropdown-item-border-radius);transition:background-color var(--wcs-dropdown-item-transition-duration) ease-in-out}wcs-dropdown-item:hover{color:var(--wcs-dropdown-item-text-color-hover);background-color:var(--wcs-dropdown-item-background-color-hover)}wcs-dropdown-item:active{color:var(--wcs-dropdown-item-text-color-press);background-color:var(--wcs-dropdown-item-background-color-press)}wcs-dropdown-item:focus-visible{outline:dashed var(--wcs-dropdown-item-border-width-focus) var(--wcs-dropdown-item-border-color-focus);outline-offset:calc(-1 * var(--wcs-dropdown-item-border-width-focus))}@supports not selector(wcs-dropdown-item:focus-visible){wcs-dropdown-item:focus-within{outline:dashed var(--wcs-dropdown-item-border-width-focus) var(--wcs-dropdown-item-border-color-focus);outline-offset:calc(-1 * var(--wcs-dropdown-item-border-width-focus))}}";
var WcsDropdownItemStyle0 = dropdownItemCss;
var DropdownItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsDropdownItemClick = createEvent(this, "wcsDropdownItemClick", 7);
  }
  onMouseUp(_) {
    this.wcsDropdownItemClick.emit();
  }
  onKeyDown(evt) {
    if (isSpaceKey(evt) || isEnterKey(evt)) {
      evt.preventDefault();
      evt.stopImmediatePropagation();
      this.wcsDropdownItemClick.emit();
    }
  }
  render() {
    return h(Host, {
      key: "42948ba23a57e020d496f17bf667e976ce7768d2",
      slot: "item",
      role: "menuitem",
      tabindex: "-1"
    }, h("slot", {
      key: "6f5ac6bf76bc964f5a28ca5d6ee3bd43c3213e50"
    }));
  }
};
DropdownItem.style = WcsDropdownItemStyle0;
export {
  DropdownItem as wcs_dropdown_item
};
//# sourceMappingURL=wcs-dropdown-item.entry-Q3XPSO7B.js.map
