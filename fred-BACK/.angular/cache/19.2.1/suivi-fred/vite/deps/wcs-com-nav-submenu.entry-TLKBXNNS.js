import {
  comNavDidLoadWithResizeObserver,
  registerCloseHandlerForFocusOutEventOn
} from "./chunk-ZSTPLX2F.js";
import {
  inheritAriaAttributes,
  inheritAttributes,
  isEnterKey,
  isEscapeKey,
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

// ../node_modules/wcs-core/dist/esm/wcs-com-nav-submenu.entry.js
var comNavSubmenuCss = ":host{--wcs-com-nav-submenu-button-color:var(--wcs-semantic-color-text-primary);--wcs-com-nav-submenu-button-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-com-nav-submenu-button-focus-outline-color:var(--wcs-semantic-color-border-focus-base);--wcs-com-nav-submenu-button-gap:var(--wcs-semantic-spacing-base);--wcs-com-nav-submenu-desktop-menu-background-color:var(--wcs-semantic-color-background-surface-primary);--wcs-com-nav-submenu-desktop-menu-text-color:var(--wcs-semantic-color-text-primary);--wcs-com-nav-submenu-desktop-menu-link-font-weight:var(--wcs-semantic-font-weight-roman);--wcs-com-nav-submenu-desktop-menu-heading-font-weight:var(--wcs-semantic-font-weight-heavy);--wcs-com-nav-submenu-desktop-menu-description-font-weight:var(--wcs-semantic-font-weight-roman);--wcs-com-nav-submenu-desktop-menu-description-gap:var(--wcs-semantic-spacing-base);--wcs-com-nav-submenu-desktop-menu-padding:50px;--wcs-com-nav-submenu-desktop-menu-items-padding-left:50px;--wcs-com-nav-submenu-desktop-menu-items-padding-right:80px;--wcs-com-nav-submenu-mobile-text-color:var(--wcs-semantic-color-text-primary);--wcs-com-nav-submenu-mobile-link-font-weight:var(--wcs-semantic-font-weight-roman);--wcs-com-nav-submenu-mobile-spacing-top:var(--wcs-semantic-spacing-large);--wcs-com-nav-submenu-mobile-spacing-bottom:var(--wcs-semantic-spacing-large);--wcs-com-nav-submenu-mobile-spacing-left:calc(var(--wcs-semantic-spacing-base) * 3);--wcs-com-nav-submenu-mobile-gap:calc(var(--wcs-semantic-spacing-base) * 3);display:block;padding-bottom:var(--wcs-com-nav-submenu-mobile-spacing-bottom)}:host button{display:block;background:none;border:none;padding:0;margin:0;font:inherit;color:inherit;cursor:pointer}:host .arrow-icon{display:none}:host .arrow-container{display:none}:host .label{text-transform:uppercase;font-size:16px;cursor:unset;font-weight:var(--wcs-com-nav-submenu-button-font-weight);color:var(--wcs-com-nav-submenu-button-color);text-decoration:none}:host .drawer{display:contents}:host .drawer-container{display:contents}:host .drawer-description{display:none}:host .menu-items{display:flex;flex-direction:column;gap:var(--wcs-com-nav-submenu-mobile-gap)}:host .menu-items ::slotted(wcs-com-nav-item){color:var(--wcs-com-nav-submenu-mobile-text-color);font-weight:var(--wcs-com-nav-submenu-mobile-link-font-weight)}@media (max-width: 575px){:host .menu-button{margin:0}:host .menu-items{margin-top:var(--wcs-com-nav-submenu-mobile-spacing-top);margin-left:var(--wcs-com-nav-submenu-mobile-spacing-left)}}@media (min-width: 576px){:host{height:100%;padding-bottom:unset}:host .menu-button{display:flex;align-items:center;height:100%;cursor:pointer;user-select:none;font-weight:unset;padding-left:unset}:host .menu-button:focus-visible{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-com-nav-submenu-button-focus-outline-color);outline-offset:0.1rem;border-radius:2px}@supports not selector(.menu-button:focus-visible){:host{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-com-nav-submenu-button-focus-outline-color);outline-offset:0.1rem;border-radius:2px}}:host .label{text-transform:unset;cursor:pointer}:host .arrow-icon{display:inline-block;font-family:icons;font-size:0.6rem;line-height:1;box-sizing:border-box}:host .arrow-container{display:unset;margin-left:var(--wcs-com-nav-submenu-button-gap)}:host .arrow-icon:not([data-open]){transform:rotate(90deg)}:host .arrow-icon[data-open]{transform:rotate(-90deg)}:host .drawer{display:none;position:absolute;top:calc(var(--wcs-com-nav-menu-bar-height) + var(--wcs-com-nav-border-width));z-index:8888;left:0;width:100%;box-sizing:border-box;padding:var(--wcs-com-nav-submenu-desktop-menu-padding);background-color:var(--wcs-com-nav-submenu-desktop-menu-background-color);color:var(--wcs-com-nav-submenu-desktop-menu-text-color);box-shadow:0 4px 10px 0 rgba(0, 0, 0, 0.08)}:host .drawer-content{display:flex;justify-content:space-between;max-width:62.5%;flex:1}:host .drawer-content div:first-child{flex:0.8}:host .drawer-content div{max-width:260px}:host .menu-items{padding:0 var(--wcs-com-nav-submenu-desktop-menu-items-padding-right) 0 var(--wcs-com-nav-submenu-desktop-menu-items-padding-left);display:flex;flex-direction:column;align-items:flex-end}:host .menu-items ::slotted(wcs-com-nav-item){color:var(--wcs-com-nav-submenu-desktop-menu-text-color);font-weight:var(--wcs-com-nav-submenu-desktop-menu-link-font-weight)}:host .menu-items ::slotted(wcs-com-nav-item:focus-within){outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-com-nav-submenu-desktop-menu-text-color);outline-offset:0.1rem;border-radius:2px}:host .drawer-container{display:flex;max-width:var(--wcs-com-content-max-width);margin:0 auto}:host .drawer-container h3{margin:0 0 var(--wcs-com-nav-submenu-desktop-menu-description-gap) 0;font-size:1.5rem;line-height:1.25;font-weight:var(--wcs-com-nav-submenu-desktop-menu-heading-font-weight)}:host .drawer-container p{margin-top:0;margin-bottom:1rem;font-weight:var(--wcs-com-nav-submenu-desktop-menu-description-font-weight);font-size:1rem;line-height:1.375}:host .drawer[data-open]{display:block}:host .drawer-description{display:block}}";
var WcsComNavSubmenuStyle0 = comNavSubmenuCss;
var COM_NAV_SUBMENU_INHERITED_ATTRS = ["title"];
var WCS_COM_NAV_CATEGORY = "WCS-COM-NAV-CATEGORY";
var ComNavSubmenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsSubmenuOpened = createEvent(this, "wcsSubmenuOpened", 7);
    this.inheritedAttributes = {};
    this.menuItemsId = `wcs-com-nav-submenu-items`;
    this.label = void 0;
    this.panelTitle = void 0;
    this.panelDescription = void 0;
    this.menuOpen = false;
    this.currentActiveSizing = "desktop";
  }
  componentWillLoad() {
    const slottedCategoryItems = this.el.querySelectorAll(":scope > wcs-com-nav-category:not([slot])");
    registerCloseHandlerForFocusOutEventOn(slottedCategoryItems, WCS_COM_NAV_CATEGORY);
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, COM_NAV_SUBMENU_INHERITED_ATTRS));
  }
  componentDidLoad() {
    if (!this.resizeObserver) {
      this.resizeObserver = comNavDidLoadWithResizeObserver(this);
      this.resizeObserver.observe(document.body);
    }
  }
  /**
   * If the user clicks outside the menu, we close it
   */
  onWindowClickEvent(_) {
    if (this.menuOpen) this.menuOpen = false;
  }
  onSubmenuOpened(event) {
    if (event.detail.menuElement !== this.el) {
      this.menuOpen = false;
    }
  }
  /**
   * Close the menu when escape is pressed
   * @param _event keydown event
   */
  onEscapeKeyDown(_event) {
    if (isEscapeKey(_event) && this.menuOpen) {
      this.menuOpen = false;
    }
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeButton, attr, value);
    });
  }
  /**
   * Close the menu
   */
  close() {
    return __async(this, null, function* () {
      this.menuOpen = false;
    });
  }
  /**
   * Opens the menu
   */
  open() {
    return __async(this, null, function* () {
      this.menuOpen = true;
    });
  }
  /**
   * When the user clicks on the menu, we do not propagate the native event and we launch a custom event to manage
   * the closing of the menu correctly
   */
  onClick(evt) {
    evt.stopPropagation();
    this.wcsSubmenuOpened.emit({
      menuElement: this.el
    });
  }
  /**
   * Handle key down on menu items
   * @param _event the keyboard event
   * @private
   */
  handleMenuItemsKeyDown(_event) {
    if (isSpaceKey(_event) || isEnterKey(_event)) {
      this.handleMenuItemsClick(_event);
    }
  }
  handleMenuItemsClick(evt) {
    if (evt.target.tagName === "A") {
      this.close();
    }
  }
  /**
   * handle category item click to close the submenu
   * @param _
   * @private
   */
  wcsCategoryItemClickedHandler(_) {
    this.close();
  }
  disconnectedCallback() {
    var _a;
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  render() {
    return h(Host, {
      key: "0da088c42404db11beb214d4a16c8526771e3e2a",
      onClick: (evt) => this.onClick(evt),
      role: "listitem",
      "data-open": this.menuOpen
    }, this.currentActiveSizing === "mobile" ? h("h2", {
      role: "presentation",
      class: "menu-button"
    }, h("span", {
      class: "label"
    }, this.label), h("span", {
      class: "arrow-container"
    }, h("span", {
      class: "arrow-icon",
      "data-open": this.menuOpen
    }, ""))) : h("button", Object.assign({
      onClick: (_) => this.menuOpen = !this.menuOpen,
      "aria-expanded": this.menuOpen ? "true" : "false",
      "aria-controls": this.menuItemsId,
      class: "menu-button",
      ref: (el) => this.nativeButton = el
    }, this.inheritedAttributes), h("span", {
      class: "label"
    }, this.label), h("span", {
      class: "arrow-container"
    }, h("span", {
      "aria-hidden": "true",
      class: "arrow-icon",
      "data-open": this.menuOpen
    }, ""))), h("div", {
      key: "de27fc80404612471d359ff1eafd4958f78679c7",
      class: "drawer",
      "data-open": this.menuOpen,
      tabIndex: -1
    }, h("div", {
      key: "7d90bef599ee51aa5af9d4bd1a6dc9a62a959b2f",
      class: "drawer-container"
    }, h("div", {
      key: "4a8896393732017a6084be1df1af5e4d938326d7",
      class: "drawer-content"
    }, h("div", {
      key: "92559e9ba3f21ddce21aa4c5d84de33aa8c7b59c",
      class: "drawer-description"
    }, h("h3", {
      key: "a8b4f0865ab5ac5396669372c32020feea08c37a"
    }, this.panelTitle), h("p", {
      key: "f2f778c761bf171204eb4fda3b376bdd92724b73"
    }, this.panelDescription)), h("div", {
      key: "640e6d45453c46469116a0f2d34e9bdaa2d9372f",
      role: "list",
      "aria-label": this.label,
      id: this.menuItemsId,
      class: "menu-items",
      onClick: (evt) => this.handleMenuItemsClick(evt),
      onKeyDown: (evt) => this.handleMenuItemsKeyDown(evt)
    }, h("slot", {
      key: "92e67731f2da01db2852a49b7ff255d384881157"
    }))))));
  }
  get el() {
    return getElement(this);
  }
};
ComNavSubmenu.style = WcsComNavSubmenuStyle0;
export {
  ComNavSubmenu as wcs_com_nav_submenu
};
//# sourceMappingURL=wcs-com-nav-submenu.entry-TLKBXNNS.js.map
