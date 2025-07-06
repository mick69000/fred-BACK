import {
  inheritAriaAttributes,
  inheritAttributes,
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

// ../node_modules/wcs-core/dist/esm/wcs-header.entry.js
var headerCss = ":host{--wcs-header-background-color:var(--wcs-semantic-color-background-surface-primary);--wcs-header-gap:var(--wcs-semantic-spacing-large);--wcs-header-height:calc(8 * var(--wcs-semantic-size-base));--wcs-header-logo-height:calc(4 * var(--wcs-semantic-size-base));--wcs-header-padding-horizontal:var(--wcs-semantic-spacing-large);--wcs-header-border-bottom:solid var(--wcs-semantic-border-width-default) var(--wcs-semantic-color-border-secondary);--wcs-header-title-color:var(--wcs-semantic-color-text-primary);--wcs-header-title-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-header-title-font-size:var(--wcs-semantic-font-size-label-1)}header{border-bottom:var(--wcs-header-border-bottom);display:flex;align-items:center;box-sizing:border-box;z-index:1;background:var(--wcs-header-background-color);padding:0 var(--wcs-header-padding-horizontal);height:var(--wcs-header-height);gap:var(--wcs-header-gap)}::slotted(img){height:var(--wcs-header-logo-height)}::slotted(h1){color:var(--wcs-header-title-color);margin:0;font-weight:var(--wcs-header-title-font-weight);font-size:var(--wcs-header-title-font-size)}::slotted([slot=actions]){margin-left:auto}";
var WcsHeaderStyle0 = headerCss;
var HEADER_INHERITED_ATTRS = [];
var Header = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, HEADER_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeHeader, attr, value);
    });
  }
  hostData() {
    return {
      "slot": "header"
    };
  }
  __stencil_render() {
    return h("header", Object.assign({
      key: "85663b1ee1555d9886c677ca05862ab447590c98",
      role: "banner",
      ref: (el) => this.nativeHeader = el
    }, this.inheritedAttributes), h("slot", {
      key: "7572b52b683fa171efd2c526c652865b003fd13e",
      name: "logo"
    }), h("slot", {
      key: "81646d012a254ea076c0490c96c4389ecf996dfb",
      name: "title"
    }), h("slot", {
      key: "1f13134c1a214106e747f887969edff2412fe7e7",
      name: "actions"
    }));
  }
  get el() {
    return getElement(this);
  }
  render() {
    return h(Host, this.hostData(), this.__stencil_render());
  }
};
Header.style = WcsHeaderStyle0;
export {
  Header as wcs_header
};
//# sourceMappingURL=wcs-header.entry-BK6TZQWL.js.map
