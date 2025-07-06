import {
  comNavDidLoadWithResizeObserver
} from "./chunk-ZSTPLX2F.js";
import {
  inheritAriaAttributes,
  inheritAttributes,
  isEnterKey,
  isSpaceKey,
  setOrRemoveAttribute
} from "./chunk-NAIC4MMY.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import {
  __async
} from "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-com-nav-category.entry.js
var comNavCategoryCss = ':host{--wcs-com-nav-category-label-mobile-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-com-nav-category-label-mobile-color:var(--wcs-semantic-color-text-primary);--wcs-com-nav-category-label-font-size:var(--wcs-semantic-font-size-label-1);--wcs-com-nav-category-label-desktop-font-weight:var(--wcs-semantic-font-weight-roman);--wcs-com-nav-category-label-desktop-color:var(--wcs-semantic-color-text-primary);--wcs-com-nav-category-label-desktop-gap:var(--wcs-semantic-spacing-base);--wcs-com-nav-category-label-desktop-focus-outline-color:var(--wcs-semantic-color-border-focus-base);--wcs-com-nav-category-item-mobile-color:var(--wcs-semantic-color-text-primary);--wcs-com-nav-category-item-mobile-font-weight:var(--wcs-semantic-font-weight-roman);--wcs-com-nav-category-item-mobile-spacing-top:var(--wcs-semantic-spacing-large);--wcs-com-nav-category-item-mobile-spacing-left:calc(var(--wcs-semantic-spacing-base) * 3);--wcs-com-nav-category-item-mobile-gap:calc(var(--wcs-semantic-spacing-base) * 1.5);--wcs-com-nav-category-desktop-menu-background-color:transparent;--wcs-com-nav-category-desktop-menu-border-left-width:var(--wcs-semantic-border-width-default);--wcs-com-nav-category-desktop-menu-border-left-color:var(--wcs-semantic-color-border-secondary);--wcs-com-nav-category-desktop-menu-background-indicator-color:transparent;--wcs-com-nav-category-desktop-menu-gap:calc(var(--wcs-semantic-spacing-base) * 3);--wcs-com-nav-category-item-desktop-color:var(--wcs-semantic-color-text-primary);--wcs-com-nav-category-item-desktop-font-weight:var(--wcs-semantic-font-weight-roman);--wcs-com-nav-category-desktop-menu-padding-top:50px;--wcs-com-nav-category-desktop-menu-padding-bottom:50px;--wcs-com-nav-category-desktop-menu-padding-left:50px;--wcs-com-nav-category-desktop-menu-padding-right:0;display:block;height:fit-content}:host button{background:none;border:none;padding:0;margin:0;font:inherit;color:inherit;cursor:initial}:host .label-container{margin:0;font-size:var(--wcs-com-nav-category-label-font-size);font-weight:var(--wcs-com-nav-category-label-mobile-font-weight);display:block;color:var(--wcs-com-nav-category-label-mobile-color)}:host .label-container .arrow-container{display:none}:host .label-container .arrow-icon{display:none}:host .item-container{display:flex;flex-direction:column;gap:var(--wcs-com-nav-category-item-mobile-gap);margin-left:var(--wcs-com-nav-category-item-mobile-spacing-left);margin-top:var(--wcs-com-nav-category-item-mobile-spacing-top)}:host .item-container ::slotted(wcs-com-nav-item){color:var(--wcs-com-nav-category-item-mobile-color);font-weight:var(--wcs-com-nav-category-item-mobile-font-weight)}@media (min-width: 576px){:host{padding-bottom:unset}:host .item-container:not([data-open]){display:none}:host button{cursor:pointer}:host .label-container{display:flex;align-items:center;gap:var(--wcs-com-nav-category-label-desktop-gap);font-weight:var(--wcs-com-nav-category-label-desktop-font-weight);cursor:pointer;user-select:none;padding-left:unset;color:var(--wcs-com-nav-category-label-desktop-color)}:host .label-container .arrow-icon{display:inline-block;font-family:icons;font-size:0.6rem;line-height:1;box-sizing:border-box}:host .label-container .arrow-container{display:unset}:host .label-container:focus-visible{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-com-nav-category-label-desktop-focus-outline-color);outline-offset:0.1rem;border-radius:5px}@supports not selector(.label-container:focus-visible){:host .label-container:focus-within{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-com-nav-category-label-desktop-focus-outline-color);outline-offset:0.1rem;border-radius:5px}}:host button.label-container[aria-expanded=true]:after{position:absolute;left:calc(50% + var(--wcs-com-content-max-width) / 8 - 0.5625rem);z-index:2;display:block;width:1.125rem;height:1.125rem;content:"";background-color:var(--wcs-com-nav-category-desktop-menu-background-indicator-color);transform:rotate(45deg)}:host .item-container[data-open]{position:absolute;border-left:solid var(--wcs-com-nav-category-desktop-menu-border-left-width) var(--wcs-com-nav-category-desktop-menu-border-left-color);left:calc(50% + var(--wcs-com-content-max-width) / 8);top:0;right:0;padding:var(--wcs-com-nav-category-desktop-menu-padding-top) var(--wcs-com-nav-category-desktop-menu-padding-right) var(--wcs-com-nav-category-desktop-menu-padding-bottom) var(--wcs-com-nav-category-desktop-menu-padding-left);background-blend-mode:multiply;background-color:var(--wcs-com-nav-category-desktop-menu-background-color);box-sizing:border-box;height:100%;margin-left:unset;margin-top:unset;display:flex;flex-direction:column;gap:var(--wcs-com-nav-category-desktop-menu-gap);align-items:start}:host .item-container[data-open] ::slotted(wcs-com-nav-item){color:var(--wcs-com-nav-category-item-desktop-color);font-weight:var(--wcs-com-nav-category-item-desktop-font-weight)}:host .item-container[data-open] ::slotted(wcs-com-nav-item:focus-within){outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-com-nav-category-item-desktop-color);outline-offset:0.1rem;border-radius:2px}}';
var WcsComNavCategoryStyle0 = comNavCategoryCss;
var COM_NAV_CATEGORY_INHERITED_ATTRS = ["title"];
var ComNavCategory = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsCategoryOpened = createEvent(this, "wcsCategoryOpened", 7);
    this.inheritedAttributes = {};
    this.categoryItemsId = `wcs-com-nav-category-items`;
    this.label = void 0;
    this.categoryOpen = false;
    this.currentActiveSizing = "desktop";
  }
  onWindowClickEvent(_) {
    if (this.categoryOpen) this.categoryOpen = false;
  }
  onSubmenuOpened(event) {
    if (event.detail.categoryElement !== this.el) {
      this.categoryOpen = false;
    }
  }
  componentDidLoad() {
    if (!this.resizeObserver) {
      this.resizeObserver = comNavDidLoadWithResizeObserver(this);
      this.resizeObserver.observe(document.body);
    }
  }
  /**
   * Handle key down on category items
   * @param _event the keyboard event
   * @private
   */
  handleCategoryItemsKeyDown(_event) {
    if (isSpaceKey(_event) || isEnterKey(_event)) {
      this.handleItemClick(_event);
    }
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, COM_NAV_CATEGORY_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeButton, attr, value);
    });
  }
  /**
   * Close the category
   */
  close() {
    return __async(this, null, function* () {
      this.categoryOpen = false;
    });
  }
  /**
   * Opens the category
   */
  open() {
    return __async(this, null, function* () {
      this.categoryOpen = true;
    });
  }
  /**
   * When the user clicks on the menu, we do not propagate the native event and we launch a custom event to manage
   * the closing of the menu correctly
   */
  onClick(evt) {
    evt.stopPropagation();
    this.wcsCategoryOpened.emit({
      categoryElement: this.el
    });
  }
  /**
   * Close the category and fire item click if we detect a mouse click on a slotted `a` element.
   * @param evt
   * @private
   */
  handleItemClick(evt) {
    if (evt.target.tagName === "A") {
      this.close();
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  render() {
    return h(Host, {
      key: "f94c0352af2387f55d0d86905c492c14a8bdbc8d",
      role: "listitem",
      onClick: (evt) => this.onClick(evt)
    }, this.currentActiveSizing === "mobile" ? h("h3", {
      role: "presentation",
      class: "label-container"
    }, h("span", {
      class: "label"
    }, this.label)) : h("button", Object.assign({
      class: "label-container",
      "aria-controls": this.categoryItemsId,
      "aria-expanded": this.categoryOpen ? "true" : "false",
      ref: (el) => this.nativeButton = el,
      onClick: (_) => this.categoryOpen = !this.categoryOpen
    }, this.inheritedAttributes), h("span", {
      class: "label"
    }, this.label), h("span", {
      class: "arrow-container"
    }, h("span", {
      "aria-hidden": "true",
      class: "arrow-icon"
    }, ""))), h("div", {
      key: "d87c57a169663daa987d2031b94f973d88ae82c1",
      class: "item-container",
      role: "list",
      "aria-label": this.label,
      id: this.categoryItemsId,
      tabIndex: -1,
      "data-open": this.categoryOpen,
      onKeyDown: (evt) => this.handleCategoryItemsKeyDown(evt),
      onClick: (evt) => this.handleItemClick(evt)
    }, h("slot", {
      key: "27089cf41dfcdc7bd0e5364d41d02e33ba43f731"
    })));
  }
  get el() {
    return getElement(this);
  }
};
ComNavCategory.style = WcsComNavCategoryStyle0;
export {
  ComNavCategory as wcs_com_nav_category
};
//# sourceMappingURL=wcs-com-nav-category.entry-ZFJZUWL3.js.map
