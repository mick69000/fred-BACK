import {
  comNavDidLoadWithResizeObserver,
  registerCloseHandlerForFocusOutEventOn
} from "./chunk-ZSTPLX2F.js";
import {
  inheritAriaAttributes,
  inheritAttributes,
  isEscapeKey
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

// ../node_modules/wcs-core/dist/esm/wcs-com-nav.entry.js
var comNavCss = ':host{--wcs-com-nav-menu-bar-height:calc(var(--wcs-semantic-size-base) * 8);--wcs-com-nav-border-color:var(--wcs-semantic-color-border-secondary);--wcs-com-nav-border-width:var(--wcs-semantic-border-width-default);--wcs-com-nav-background-color:var(--wcs-semantic-color-background-surface-primary);--wcs-com-nav-app-name-color:var(--wcs-semantic-color-text-primary);--wcs-com-nav-app-name-font-weight:var(--wcs-semantic-font-weight-heavy);--wcs-com-nav-app-name-font-size:var(--wcs-semantic-font-size-heading-5);--wcs-com-nav-app-name-line-height:var(--wcs-semantic-font-line-height-large);--wcs-com-nav-item-color:var(--wcs-semantic-color-foreground-action-neutral-default);--wcs-com-nav-item-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-com-nav-focus-outline-color:var(--wcs-semantic-color-border-focus-base);--wcs-com-nav-vertical-padding:0;--wcs-com-nav-horizontal-padding:var(--wcs-semantic-spacing-large);--wcs-com-nav-mobile-overlay-gap:var(--wcs-semantic-spacing-large);--wcs-com-nav-mobile-overlay-padding:var(--wcs-semantic-spacing-large);--wcs-com-nav-mobile-menu-icon-border-color:var(--wcs-semantic-color-border-secondary);--wcs-com-nav-mobile-menu-icon-gap:calc(var(--wcs-semantic-spacing-base) * 2);--wcs-com-nav-mobile-menu-icon-margin-left:var(--wcs-semantic-spacing-base);--wcs-com-nav-mobile-menu-icon-color:var(--wcs-semantic-color-foreground-action-secondary-default);--wcs-com-nav-menu-bar-gap:calc(var(--wcs-semantic-spacing-base) * 5);--wcs-com-nav-menu-bar-margin-left:calc(var(--wcs-semantic-spacing-base) * 6.25);display:block;position:relative;height:var(--wcs-com-nav-menu-bar-height);border-bottom:var(--wcs-com-nav-border-width) solid var(--wcs-com-nav-border-color)}:host .container{padding:var(--wcs-com-nav-vertical-padding) var(--wcs-com-nav-horizontal-padding);height:100%;display:flex;align-items:center;flex-direction:row;justify-content:space-between}:host .container nav{display:flex;align-items:center}:host .container-left{display:flex;height:100%;align-items:center;flex-direction:row}:host .container-right{display:flex;align-items:center}:host .app-name{font-weight:var(--wcs-com-nav-app-name-font-weight);font-size:var(--wcs-com-nav-app-name-font-size);line-height:var(--wcs-com-nav-app-name-line-height);color:var(--wcs-com-nav-app-name-color)}:host .menu-bar{display:none}:host #mobile-menu-icon{display:flex;align-items:center;flex-wrap:nowrap;color:var(--wcs-com-nav-mobile-menu-icon-color);padding-left:var(--wcs-com-nav-mobile-menu-icon-gap);margin-left:var(--wcs-com-nav-mobile-menu-icon-margin-left);border-left:solid 1px var(--wcs-com-nav-mobile-menu-icon-border-color)}:host #mobile-menu-icon:focus{outline:none}:host #mobile-menu-icon:focus-visible::after{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-com-nav-focus-outline-color);outline-offset:var(--wcs-semantic-spacing-small);border-radius:0.1rem}@supports not selector(#mobile-menu-icon:focus-visible::after){:host #mobile-menu-icon:focus::after{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-com-nav-focus-outline-color);outline-offset:var(--wcs-semantic-spacing-small);border-radius:0.1rem}}:host button{background:none;border:none;padding:0;margin:0;font:inherit;color:inherit;cursor:pointer}:host #mobile-menu-icon:after{font-family:icons;font-size:18px;cursor:pointer;content:"\\f198";line-height:1;box-sizing:border-box}:host #mobile-menu-icon[aria-expanded=true]:after{content:"\\f129"}:host .mobile-overlay{display:none}:host .mobile-overlay[data-mobile-open]{padding:var(--wcs-com-nav-mobile-overlay-padding);position:absolute;top:var(--wcs-com-nav-menu-bar-height);left:0;right:0;display:flex;flex-direction:column;gap:var(--wcs-com-nav-mobile-overlay-gap);z-index:9999;background-color:var(--wcs-com-nav-background-color)}:host .mobile-overlay[data-mobile-open] ::slotted(wcs-com-nav-item){color:var(--wcs-com-nav-item-color);font-weight:var(--wcs-com-nav-item-font-weight)}@media (min-width: 576px){:host .container{margin:0 auto;max-width:var(--wcs-com-content-max-width)}:host nav{height:100%}:host .menu-bar{display:flex;align-items:center;height:100%;margin-left:var(--wcs-com-nav-menu-bar-margin-left)}:host .menu-bar ::slotted(*:not(:first-child)){margin-left:var(--wcs-com-nav-menu-bar-gap)}:host .menu-bar ::slotted(wcs-com-nav-item){height:100%;color:var(--wcs-com-nav-item-color);font-weight:var(--wcs-com-nav-item-font-weight)}:host .menu-bar ::slotted(wcs-com-nav-item:focus-within){outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-com-nav-focus-outline-color);outline-offset:0.1rem;border-radius:2px}:host #mobile-menu-icon{display:none}:host .mobile-overlay{display:none !important}}';
var WcsComNavStyle0 = comNavCss;
var COM_NAV_INHERITED_ATTRS = ["title"];
var WCS_COM_NAV_SUBMENU_TAG_NAME = "WCS-COM-NAV-SUBMENU";
var ComNav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.appName = void 0;
    this.mobileMenuOpen = false;
    this.currentActiveSizing = void 0;
  }
  mobileMenuIconClick() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  disconnectedCallback() {
    var _a;
    (_a = this.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, COM_NAV_INHERITED_ATTRS));
    const slottedNavigableItems = this.el.querySelectorAll(":scope > wcs-com-nav-submenu:not([slot]), :scope > a:not([slot])");
    registerCloseHandlerForFocusOutEventOn(slottedNavigableItems, WCS_COM_NAV_SUBMENU_TAG_NAME);
  }
  componentDidLoad() {
    if (!this.resizeObserver) {
      this.resizeObserver = comNavDidLoadWithResizeObserver(this);
      this.resizeObserver.observe(document.body);
    }
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      this.inheritedAttributes[attr] = value;
      forceUpdate(this);
    });
  }
  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
  // In mobile mode, we have only one global drawer to display the menu, that why we have to listen the clicks events
  // in the root component (this component). In desktop mode, all submenus and categories manage their drawer its
  // opening state.
  //
  // We listen to the click events fired by the submenu component and we close the mobile menu.
  // In desktop mode, the submenu itself manages the closing of the menu.
  onClickOnFinalAction() {
    this.closeMobileMenu();
  }
  render() {
    const menuAriaLabel = this.inheritedAttributes["aria-label"] || void 0;
    return h(Host, {
      key: "85451701261dc64faebd405a0186b857d1881655"
    }, h("div", {
      key: "84e33d688f36901ee1608b765c3c20c26d099f83",
      class: "container"
    }, h("div", {
      key: "f8fe43fcf24ce46ad57d010a46bb19ebbea8175c",
      class: "container-left"
    }, h("div", {
      key: "246da8710a8b10e52753a865b1345ce8a9d6f0e9",
      class: "app-name"
    }, this.appName, h("slot", {
      key: "0c6ad2ea30db8cc6ae51ec44d4f6e253b7cca850",
      name: "app-name"
    })), this.currentActiveSizing === "desktop" ? h("nav", Object.assign({
      role: "navigation"
    }, this.inheritedAttributes), h("div", {
      class: "menu-bar",
      role: "list"
    }, this.currentActiveSizing === "desktop" ? h("slot", null) : null)) : null), h("div", {
      key: "34e2eb03491479f033a891d1f2bf46814e45057c",
      class: "container-right"
    }, h("slot", {
      key: "18bd4464e1ce6725f63d152dba5ddff4a73e48cf",
      name: "actions"
    }), this.currentActiveSizing === "mobile" ? h("nav", Object.assign({
      id: "wcs-com-nav-mobile-menu",
      role: "navigation"
    }, this.inheritedAttributes), h("button", {
      id: "mobile-menu-icon",
      "aria-label": menuAriaLabel,
      "aria-expanded": this.mobileMenuOpen ? "true" : "false",
      "aria-controls": "wcs-com-nav-mobile-menu",
      onClick: () => this.mobileMenuIconClick()
    }), this.currentActiveSizing === "mobile" ? h("div", {
      class: "mobile-overlay",
      "data-mobile-open": this.mobileMenuOpen,
      role: "list"
    }, h("slot", null)) : null) : null)));
  }
  /**
   * Close the mobile menu if the user press escape.
   * @param evt keydown event on window target.
   */
  exitMobileMenuOnKeyDown(evt) {
    if (isEscapeKey(evt)) {
      this.closeMobileMenu();
    }
  }
  get el() {
    return getElement(this);
  }
};
ComNav.style = WcsComNavStyle0;
export {
  ComNav as wcs_com_nav
};
//# sourceMappingURL=wcs-com-nav.entry-XFKVUZBT.js.map
