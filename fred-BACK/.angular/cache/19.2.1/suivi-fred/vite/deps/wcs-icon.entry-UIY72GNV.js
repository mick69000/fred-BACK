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

// ../node_modules/wcs-core/dist/esm/wcs-icon.entry.js
var ICON_INHERITED_ATTRS = ["title"];
var Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.icon = void 0;
    this.size = void 0;
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, ICON_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeIcon, attr, value);
    });
  }
  render() {
    const cssClass = {
      class: {
        [`icons-${this.icon}`]: true,
        [`icons-size-${this.size}`]: true
      }
    };
    return h("i", Object.assign({
      key: "e21a9bc955698494dd9835e2022182aa20a306e5"
    }, cssClass, {
      ref: (el) => this.nativeIcon = el
    }, this.inheritedAttributes));
  }
  get el() {
    return getElement(this);
  }
};
export {
  Icon as wcs_icon
};
//# sourceMappingURL=wcs-icon.entry-UIY72GNV.js.map
