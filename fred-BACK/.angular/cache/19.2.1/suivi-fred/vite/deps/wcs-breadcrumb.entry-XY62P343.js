import {
  EXPAND_BTN_ARIA_LABEL_DEFAULT,
  ICONS_FONT_CHEVRON_UNICODE,
  NAV_ARIA_LABEL_DEFAULT
} from "./chunk-L3EPD4QC.js";
import {
  inheritAriaAttributes,
  inheritAttributes,
  setOrRemoveAttribute
} from "./chunk-NAIC4MMY.js";
import {
  Host,
  forceUpdate,
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import {
  __async
} from "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-breadcrumb.entry.js
var breadcrumbCss = ':host{--wcs-breadcrumb-icon-color:var(--wcs-semantic-color-foreground-brand);--wcs-breadcrumb-icon-font-size:0.5rem;--wcs-breadcrumb-gap:var(--wcs-semantic-spacing-base)}nav.wcs-breadcrumb-container slot[name=hidden-items]{display:none}nav.wcs-breadcrumb-container.show-hidden-items slot[name=hidden-items]{display:contents}nav.wcs-breadcrumb-container div[role=list]{display:flex;flex-wrap:wrap;align-items:center;margin:0;padding:0;list-style:none}nav.wcs-breadcrumb-container div[role=list] ::slotted(wcs-breadcrumb-item){margin-right:var(--wcs-breadcrumb-gap)}nav.wcs-breadcrumb-container div[role=list] ::slotted(wcs-breadcrumb-item:last-child){margin-right:0}nav.wcs-breadcrumb-container div[role=list] .item-not-slotted{display:flex;align-items:center;margin-right:var(--wcs-breadcrumb-gap)}nav.wcs-breadcrumb-container div[role=list] .item-not-slotted wcs-button[size=s]{--wcs-button-min-width:24px;--wcs-button-height:20px;--wcs-button-border-radius:2px;transform:translateY(2px)}nav.wcs-breadcrumb-container div[role=list] .item-not-slotted .item-icon{margin-left:calc(var(--wcs-breadcrumb-gap) - 1px);font-family:"icons";font-size:var(--wcs-breadcrumb-icon-font-size);color:var(--wcs-breadcrumb-icon-color);transform:translateY(1px)}';
var WcsBreadcrumbStyle0 = breadcrumbCss;
var BREADCRUMB_INHERITED_ATTRS = [];
var Breadcrumb = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.maxItems = void 0;
    this.itemsBeforeCollapse = 1;
    this.itemsAfterCollapse = 2;
    this.ariaLabelExpandButton = EXPAND_BTN_ARIA_LABEL_DEFAULT;
    this.showHiddenItems = false;
  }
  handleCollapsePropsChange() {
    this.updateCollapsedViewMode();
  }
  handleAriaLabelExpandBtnChange(newValue) {
    var _a;
    (_a = this.expandBtnEl) === null || _a === void 0 ? void 0 : _a.setAriaAttribute("aria-label", newValue);
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, BREADCRUMB_INHERITED_ATTRS));
    this.updateCollapsedViewMode();
  }
  componentDidLoad() {
    var _a;
    (_a = this.expandBtnEl) === null || _a === void 0 ? void 0 : _a.setAriaAttribute("aria-label", this.ariaLabelExpandButton);
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.navEl, attr, value);
    });
  }
  getBreadcrumbItems() {
    return Array.from(this.el.querySelectorAll("wcs-breadcrumb-item"));
  }
  shouldCollapseItems() {
    return !!this.maxItems && this.getBreadcrumbItems().length > this.maxItems && this.itemsBeforeCollapse + this.itemsAfterCollapse <= this.maxItems;
  }
  updateCollapsedViewMode() {
    if (this.shouldCollapseItems()) {
      this.assignSlotNamesForCollapsedViewMode();
    } else {
      this.assignSlotNamesForNonCollapsedViewMode();
    }
  }
  /**
   * Setting slot names on breadcrumb items allows to leverage JSX in the render method.
   */
  assignSlotNamesForCollapsedViewMode() {
    const breadcrumbItems = this.getBreadcrumbItems();
    const itemBeforeExpandBtnIndex = this.itemsBeforeCollapse - 1;
    const itemAfterExpandBtnIndex = breadcrumbItems.length - this.itemsAfterCollapse;
    breadcrumbItems.forEach((breadcrumbItem, index) => {
      if (index <= itemBeforeExpandBtnIndex) {
        breadcrumbItem.slot = "items-before-expand-btn";
        breadcrumbItem.last = false;
      } else if (index > itemBeforeExpandBtnIndex && index < itemAfterExpandBtnIndex) {
        breadcrumbItem.slot = "hidden-items";
        breadcrumbItem.last = false;
      } else {
        breadcrumbItem.slot = "items-after-expand-btn";
        breadcrumbItem.last = index === breadcrumbItems.length - 1;
      }
    });
  }
  assignSlotNamesForNonCollapsedViewMode() {
    const breadcrumbItems = this.getBreadcrumbItems();
    breadcrumbItems.forEach((breadcrumbItem, index) => {
      breadcrumbItem.slot = "non-collapsed";
      breadcrumbItem.last = index === breadcrumbItems.length - 1;
    });
  }
  handleSlotChange() {
    this.updateCollapsedViewMode();
    this.showHiddenItems = false;
    forceUpdate(this);
  }
  handleOnExpandBtnClick() {
    this.showHiddenItems = true;
    requestAnimationFrame(() => this.setFocusToFirstHiddenItem());
  }
  /**
   * Avoid losing focus after clicking the expand button.
   * We need to give focus back to the first breadcrumb item link that was hidden before.
   */
  setFocusToFirstHiddenItem() {
    const breadcrumbItems = this.getBreadcrumbItems();
    const firstHiddenItemIndex = this.itemsBeforeCollapse;
    const firstHiddenItem = breadcrumbItems[firstHiddenItemIndex];
    const firstHiddenItemSlot = firstHiddenItem.shadowRoot.querySelector("slot");
    const breadcrumbItemLinkToFocus = firstHiddenItemSlot.assignedElements()[0];
    breadcrumbItemLinkToFocus === null || breadcrumbItemLinkToFocus === void 0 ? void 0 : breadcrumbItemLinkToFocus.focus();
  }
  renderExpandAllButton() {
    const expandBtnIsLastItem = this.itemsAfterCollapse === 0;
    return h("div", {
      role: "listitem",
      class: "item-not-slotted"
    }, h("wcs-button", {
      mode: "clear",
      shape: "square",
      size: "s",
      onClick: this.handleOnExpandBtnClick.bind(this),
      ref: (el) => this.expandBtnEl = el
    }, h("wcs-mat-icon", {
      icon: "more_horiz"
    })), !expandBtnIsLastItem && h("span", {
      class: "item-icon",
      "aria-hidden": "true"
    }, ICONS_FONT_CHEVRON_UNICODE));
  }
  render() {
    const showExpandBtn = this.shouldCollapseItems() && !this.showHiddenItems;
    return h(Host, {
      key: "944e877808887ad3933072e35d0760df00e5ab68"
    }, h("nav", Object.assign({
      key: "210476d38cf668330fa9ce0f6ab009499d6afe8d",
      class: `wcs-breadcrumb-container${this.showHiddenItems ? " show-hidden-items" : ""}`,
      "aria-label": NAV_ARIA_LABEL_DEFAULT
    }, this.inheritedAttributes, {
      ref: (el) => this.navEl = el
    }), h("div", {
      key: "882146b18d16c9fe5033a6677a6a3281696af183",
      role: "list"
    }, h("slot", {
      key: "14491fd9df9d3901ae3c5f4473ddf2ebfe36a1fb",
      onSlotchange: this.handleSlotChange.bind(this)
    }), h("slot", {
      key: "b077183b3a4abec4f40cd87974dac248b743fa13",
      name: "non-collapsed"
    }), h("slot", {
      key: "fb3cb5779492c275cb47619766df150da71f4daa",
      name: "items-before-expand-btn"
    }), h("slot", {
      key: "86889f6be0e843b55cc8868df6abd9d7af4cf7d9",
      name: "hidden-items"
    }), showExpandBtn && this.renderExpandAllButton(), h("slot", {
      key: "b5c680f8c61d7491ab5f180d566b2718d1fd684a",
      name: "items-after-expand-btn"
    }))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "maxItems": ["handleCollapsePropsChange"],
      "itemsBeforeCollapse": ["handleCollapsePropsChange"],
      "itemsAfterCollapse": ["handleCollapsePropsChange"],
      "ariaLabelExpandButton": ["handleAriaLabelExpandBtnChange"]
    };
  }
};
Breadcrumb.style = WcsBreadcrumbStyle0;
export {
  Breadcrumb as wcs_breadcrumb
};
//# sourceMappingURL=wcs-breadcrumb.entry-XY62P343.js.map
