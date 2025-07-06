import {
  inheritAriaAttributes,
  inheritAttributes,
  setOrRemoveAttribute
} from "./chunk-NAIC4MMY.js";
import {
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import {
  __async
} from "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-nav.entry.js
var navCss = ":host{--wcs-nav-background-color:var(--wcs-semantic-color-background-surface-brand);--wcs-nav-width-desktop:calc(12 * var(--wcs-semantic-size-base));--wcs-nav-height-mobile:calc(6 * var(--wcs-semantic-size-base))}nav{background-color:var(--wcs-nav-background-color);display:flex;z-index:1055;flex-direction:column;width:var(--wcs-nav-width-desktop);height:100%}nav div[role=list]{list-style-type:none;display:flex;flex-direction:column;flex-grow:1}@media (max-width: 1199px){nav div[role=list]{flex-direction:row}}@media (max-width: 1199px){nav{flex-direction:row;width:100%;height:var(--wcs-nav-height-mobile)}}@media (max-width: 1199px){::slotted(wcs-nav-item){flex:1}}@media (min-width: 1200px){slot[name=bottom],wcs-nav-item:not([slot=bottom])+wcs-nav-item[slot=bottom]{display:block;margin-top:auto}}";
var WcsNavStyle0 = navCss;
var NAV_ARIA_INHERITED_ATTRS = ["title"];
var Nav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, NAV_ARIA_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeNav, attr, value);
    });
  }
  render() {
    return h("nav", Object.assign({
      key: "010b8847c02ed7e6c9f3112f486279709f75fbb0",
      role: "navigation",
      class: "wcs-nav-container",
      ref: (el) => this.nativeNav = el
    }, this.inheritedAttributes), h("div", {
      key: "35117f4736ebeedc66db2c883eeb6a9b570fcc25",
      role: "list"
    }, h("slot", {
      key: "a08aa2b168519ce86b6bfbabe501f38bfc55c62b"
    }), h("slot", {
      key: "0f2f00d3bf339128d64cb2b61eb7029d3a0ce035",
      name: "bottom"
    })));
  }
  get el() {
    return getElement(this);
  }
};
Nav.style = WcsNavStyle0;
export {
  Nav as wcs_nav
};
//# sourceMappingURL=wcs-nav.entry-BWOABULI.js.map
