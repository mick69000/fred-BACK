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

// ../node_modules/wcs-core/dist/esm/wcs-mat-icon.entry.js
var matIconCss = ':host{display:flex;flex-direction:column;justify-content:center}:host .size-s{font-size:18px !important}:host .size-m{font-size:24px !important}:host .size-l{font-size:36px !important}:host .size-xl{font-size:48px !important}:host .material-icons{font-family:"Material Icons";font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host .material-icons-outlined{font-family:"Material Icons Outlined";font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host .material-icons-two-tone{--google-font-color-materialiconstwotone:none;font-family:"Material Icons Two Tone";font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host .material-icons-round{font-family:"Material Icons Round";font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host .material-icons-sharp{font-family:"Material Icons Sharp";font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}';
var WcsMatIconStyle0 = matIconCss;
var ICON_FAMILY_CLASS_NAME = {
  filled: "material-icons",
  outlined: "material-icons-outlined",
  twotone: "material-icons-two-tone",
  rounded: "material-icons-round",
  sharp: "material-icons-sharp"
};
var MAT_ICON_INHERITED_ATTRS = ["title"];
var MatIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.icon = void 0;
    this.size = "m";
    this.family = "filled";
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, MAT_ICON_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeIcon, attr, value);
    });
  }
  render() {
    return h(Host, {
      key: "1e0c8f28a59f398d0981007401cda39bf9e089d8"
    }, h("i", Object.assign({
      key: "caa5e118dfeb306aef87a9b10514247d45cc2f9f",
      "aria-hidden": "true",
      class: ICON_FAMILY_CLASS_NAME[this.family] + " size-" + this.size,
      ref: (el) => this.nativeIcon = el
    }, this.inheritedAttributes), this.icon));
  }
  get el() {
    return getElement(this);
  }
};
MatIcon.style = WcsMatIconStyle0;
export {
  MatIcon as wcs_mat_icon
};
//# sourceMappingURL=wcs-mat-icon.entry-RLDDAMM2.js.map
