import {
  createPopper
} from "./chunk-7LPDYKUJ.js";
import {
  clickInsideElement,
  inheritAriaAttributes,
  inheritAttributes,
  isEscapeKey,
  setOrRemoveAttribute
} from "./chunk-NAIC4MMY.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import {
  __async
} from "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-galactic-menu.entry.js
var galacticMenuCss = ':host{--wcs-galactic-menu-background-color:var(--wcs-semantic-color-background-surface-brand);--wcs-galactic-menu-padding-horizontal:var(--wcs-semantic-spacing-large);--wcs-galactic-menu-gap:var(--wcs-semantic-spacing-large);--wcs-galactic-menu-height:var(--wcs-semantic-size-s);--wcs-galactic-menu-icon-focus-outline-color:var(--wcs-galactic-text-color, white);--wcs-galactic-menu-overlay-color:var(--wcs-semantic-color-text-inverse);--wcs-galactic-menu-overlay-background-color:var(--wcs-semantic-color-background-surface-inverse);--wcs-galactic-menu-overlay-padding:var(--wcs-semantic-spacing-large);display:flex;align-items:center;box-sizing:border-box;height:var(--wcs-galactic-menu-height);gap:var(--wcs-galactic-menu-gap);padding:0 var(--wcs-galactic-menu-padding-horizontal);background-color:var(--wcs-galactic-menu-background-color)}#menu{display:none;background-color:var(--wcs-galactic-menu-overlay-background-color);color:var(--wcs-galactic-menu-overlay-color);padding:var(--wcs-galactic-menu-overlay-padding);--wcs-semantic-color-border-focus-base:var(--wcs-semantic-color-text-inverse, white)}#menu[data-show]{display:block;z-index:9999}#menu[data-popper-placement^=top]>#arrow{bottom:-4px}#menu[data-popper-placement^=bottom]>#arrow{top:-4px}#menu[data-popper-placement^=left]>#arrow{right:-4px}#menu[data-popper-placement^=right]>#arrow{left:-4px}#arrow,#arrow::before{position:absolute;width:8px;height:8px;background:inherit}#arrow{visibility:hidden}#arrow::before{visibility:visible;content:"";transform:rotate(45deg)}button{background:transparent;border:none;color:inherit;cursor:pointer;user-select:none}button:focus-visible{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-galactic-menu-icon-focus-outline-color);outline-offset:0;border-radius:0.1rem}';
var WcsGalacticMenuStyle0 = galacticMenuCss;
var GALACTIC_MENU_INHERITED_ATTRS = ["tabindex", "title"];
var Galactic = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.showPopoverMenu = false;
    this.text = void 0;
  }
  componentDidLoad() {
    this.menu = this.el.shadowRoot.getElementById("toggle-menu-icon");
    this.tooltip = this.el.shadowRoot.getElementById("menu");
    this.popper = createPopper(this.menu, this.tooltip, {
      placement: "bottom-end",
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, 8]
        }
      }]
    });
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, GALACTIC_MENU_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.menuButton, attr, value);
    });
  }
  onWindowClickEvent(event) {
    if (clickInsideElement(event, this.tooltip) || clickInsideElement(event, this.menu)) {
      return;
    } else {
      if (this.showPopoverMenu) {
        this.toggleMenu();
      }
    }
  }
  onKeyDown(_event) {
    var _a;
    if (isEscapeKey(_event)) {
      _event.preventDefault();
      this.showPopoverMenu = false;
      (_a = this.menuButton) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }
  toggleMenu() {
    this.showPopoverMenu = !this.showPopoverMenu;
  }
  componentDidRender() {
    if (this.popper) {
      this.popper.update();
    }
  }
  render() {
    return h(Host, {
      key: "57fa555ec72e13761295e18aa779d5ac5be81111"
    }, h("span", {
      key: "91b4fe9a2f6ee303c3ba00c2ba1a1ded0ac7a761"
    }, this.text), h("button", Object.assign({
      key: "324d0c458e500ba5d47187bdd59297f67e067374",
      "aria-haspopup": "true",
      "aria-controls": "menu",
      ref: (el) => {
        this.menuButton = el;
      },
      "aria-expanded": this.showPopoverMenu ? "true" : "false"
    }, this.inheritedAttributes, {
      onClick: (_) => this.toggleMenu()
    }), h("wcs-mat-icon", {
      key: "accf07fb4f5d737f30f16c5cd96b96a5b66ba1d0",
      id: "toggle-menu-icon",
      icon: "more_horiz",
      size: "m"
    })), h("span", {
      key: "f9ae129e58d7911a7a88d8b2449a8b2e19be516f",
      id: "menu",
      role: "menu",
      "data-show": this.showPopoverMenu
    }, h("div", {
      key: "f4b78cf4631a7fa1b6ca1e68a7eb633d52c7b994",
      id: "arrow",
      "data-popper-arrow": true
    }), h("slot", {
      key: "c9eb687e1b82f075a5ef1b84d09b69bdbf9c292f"
    })));
  }
  get el() {
    return getElement(this);
  }
};
Galactic.style = WcsGalacticMenuStyle0;
export {
  Galactic as wcs_galactic_menu
};
//# sourceMappingURL=wcs-galactic-menu.entry-TP5XY5UF.js.map
