import {
  SelectArrow
} from "./chunk-6SHTIXBY.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import {
  __async
} from "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-native-select.entry.js
var nativeSelectCss = ":host{--wcs-native-select-line-height:var(--wcs-semantic-font-line-height-large);--wcs-native-select-size-m:var(--wcs-semantic-size-m);--wcs-native-select-font-size-m:var(--wcs-semantic-font-size-m);--wcs-native-select-size-l:var(--wcs-semantic-size-l);--wcs-native-select-font-size-l:var(--wcs-semantic-font-size-l);--wcs-native-select-border-radius:var(--wcs-semantic-border-radius-base);--wcs-native-select-background-color:var(--wcs-semantic-color-background-control-default);--wcs-native-select-border-color-default:var(--wcs-semantic-color-border-primary);--wcs-native-select-border-color-disabled:var(--wcs-semantic-color-border-disabled);--wcs-native-select-border-color-focus:var(--wcs-semantic-color-border-control-focus);--wcs-native-select-border-color-error:var(--wcs-semantic-color-border-critical);--wcs-native-select-border-style-default:solid;--wcs-native-select-border-style-focus:var(--wcs-semantic-border-style-focus-control);--wcs-native-select-border-width:var(--wcs-semantic-border-width-default);--wcs-native-select-border-width-focus:var(--wcs-semantic-border-width-large);--wcs-native-select-value-color:var(--wcs-semantic-color-text-primary);--wcs-native-select-value-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-native-select-value-font-style:normal;--wcs-native-select-internal-padding-horizontal:var(--wcs-native-select-padding-horizontal-m);--wcs-native-select-padding-horizontal-m:var(--wcs-semantic-spacing-large);--wcs-native-select-padding-horizontal-l:var(--wcs-semantic-spacing-large);--wcs-native-select-arrow-color:var(--wcs-semantic-color-foreground-brand);--wcs-native-select-arrow-color-disabled:var(--wcs-semantic-color-foreground-disabled);--wcs-native-select-text-color-disabled:var(--wcs-semantic-color-text-disabled);--wcs-native-select-placeholder-color:var(--wcs-semantic-color-text-tertiary);--wcs-native-select-placeholder-font-weight:var(--wcs-semantic-font-weight-roman);--wcs-native-select-placeholder-font-style:var(--wcs-semantic-font-style-control-placeholder);--wcs-native-select-option-color:var(--wcs-semantic-color-text-primary);--wcs-native-select-option-font-style:normal;--wcs-native-select-option-selected-color:var(--wcs-semantic-color-text-primary)}::slotted(select){box-sizing:border-box;-moz-appearance:none !important;-webkit-appearance:none !important;appearance:none !important;background-color:var(--wcs-native-select-background-color);color:var(--wcs-native-select-value-color);border-radius:var(--wcs-native-select-border-radius);border:none;outline:var(--wcs-native-select-border-style-default) var(--wcs-native-select-border-width) var(--wcs-native-select-border-color-default);outline-offset:calc(var(--wcs-native-select-border-width) * -1);user-select:none;cursor:pointer;line-height:var(--wcs-native-select-line-height);font-size:inherit;opacity:1;max-width:100%;flex-grow:1;padding-right:calc(var(--wcs-native-select-internal-padding-horizontal) + 24px);padding-left:var(--wcs-native-select-internal-padding-horizontal)}::slotted(select:disabled){cursor:not-allowed;color:var(--wcs-native-select-text-color-disabled);outline:var(--wcs-native-select-border-style-default) var(--wcs-native-select-border-width) var(--wcs-native-select-border-color-disabled);--wcs-native-select-background-color:var(--wcs-semantic-color-background-control-disabled);--wcs-native-select-value-color:var(--wcs-native-select-text-color-disabled)}::slotted(select[aria-invalid=true]){outline-style:var(--wcs-native-select-border-style-default);outline-color:var(--wcs-native-select-border-color-error) !important;outline-offset:calc(var(--wcs-native-select-border-width) * -1)}:host([data-disabled]) .select-wrapper .arrow-container .arrow{fill:var(--wcs-native-select-arrow-color-disabled)}:host([data-size=m]){font-size:var(--wcs-native-select-font-size-m);--wcs-native-select-internal-padding-horizontal:var(--wcs-native-select-padding-horizontal-m)}:host([data-size=m]) ::slotted(select){height:var(--wcs-native-select-size-m)}:host([data-size=l]){font-size:var(--wcs-native-select-font-size-l);--wcs-native-select-internal-padding-horizontal:var(--wcs-native-select-padding-horizontal-l)}:host([data-size=l]) ::slotted(select){height:var(--wcs-native-select-size-l)}::slotted(select:focus-visible){outline:var(--wcs-native-select-border-style-focus) var(--wcs-native-select-border-width-focus) var(--wcs-native-select-border-color-focus);outline-offset:calc(var(--wcs-native-select-border-width-focus) * -1)}.select-wrapper{position:relative;display:flex;flex-wrap:nowrap}svg{flex-shrink:0}.arrow{fill:var(--wcs-native-select-arrow-color)}.arrow-container{pointer-events:none;display:flex;align-items:center;vertical-align:center;position:absolute;top:0;bottom:0;right:calc(var(--wcs-native-select-internal-padding-horizontal) - 4px);margin:auto 0}";
var WcsNativeSelectStyle0 = nativeSelectCss;
var NativeSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.SLOTTED_SELECT_TRACKED_ATTRIBUTES_LIST = ["disabled"];
    this.size = "m";
    this.required = false;
    this.expanded = false;
    this.disabled = void 0;
  }
  requiredChanged(newValue, oldValue) {
    if (newValue !== oldValue) {
      if (!this.selectElement) return;
      this.selectElement.required = this.required;
    }
  }
  componentWillLoad() {
    this.selectElement = this.el.querySelector("select");
    if (!this.selectElement) throw new Error("wcs-native-select must be used with a native slotted select, please refer to the documentation.");
    this.onSelectedOptionChange();
    this.selectElement.addEventListener("change", () => {
      this.onSelectedOptionChange();
    });
    this.observer = new MutationObserver((mutations) => {
      const hasSpiedAttrMutation = mutations.filter((m) => this.SLOTTED_SELECT_TRACKED_ATTRIBUTES_LIST.includes(m.attributeName)).length > 0;
      if (hasSpiedAttrMutation) {
        this.updateHostAttributeWithSlottedSelect();
      }
      if (mutations.filter((m) => m.attributeName === "class").length > 0) {
        this._updateStyles();
      }
    });
    this.updateHostAttributeWithSlottedSelect();
    this.observer.observe(this.selectElement, {
      attributes: true
    });
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      if (!this.selectElement) return;
      this.selectElement.setAttribute(attr, value);
    });
  }
  onSelectedOptionChange() {
    this._updateStyles();
  }
  _updateStyles() {
    if (this.isPlaceholderOptionSelected()) {
      this.applyPlaceholderStylesOnNativeSlottedSelectElement();
    } else {
      this.applySelectedOptionStylesOnNativeSlottedSelectElement();
    }
  }
  isPlaceholderOptionSelected() {
    var _a;
    return ((_a = Array.from(this.selectElement.options).filter((o) => o.selected)[0]) === null || _a === void 0 ? void 0 : _a.disabled) == true;
  }
  /**
   * This method should always unset all styles modified by the `applyPlaceholderStylesOnNativeSlottedSelectElement()`
   * @private
   */
  applySelectedOptionStylesOnNativeSlottedSelectElement() {
    this.selectElement.style.color = "var(--wcs-native-select-value-color)";
    this.selectElement.style.fontStyle = "var(--wcs-native-select-value-font-style)";
    this.selectElement.style.fontWeight = "var(--wcs-native-select-value-font-weight)";
    Array.from(this.selectElement.options).forEach((option) => {
      option.style.fontStyle = "var(--wcs-native-select-option-font-style)";
      if (!option.disabled) {
        option.style.color = "var(--wcs-native-select-option-color)";
      }
    });
  }
  /**
   * This method apply styles when the placeholder is shown.
   *
   * We use javascript because we cannot achieve that behaviour in pure css when the native select is not required
   * @private
   */
  applyPlaceholderStylesOnNativeSlottedSelectElement() {
    this.selectElement.style.color = "var(--wcs-native-select-placeholder-color)";
    this.selectElement.style.fontWeight = "var(--wcs-native-select-placeholder-font-weight)";
    this.selectElement.style.fontStyle = "var(--wcs-native-select-placeholder-font-style)";
    Array.from(this.selectElement.options).forEach((option) => {
      option.style.fontStyle = "var(--wcs-native-select-option-font-style)";
      if (!option.disabled) {
        option.style.color = "var(--wcs-native-select-option-color)";
      }
    });
  }
  updateHostAttributeWithSlottedSelect() {
    var _a;
    this.disabled = (_a = this.selectElement) === null || _a === void 0 ? void 0 : _a.hasAttribute("disabled");
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this.selectElement) === null || _b === void 0 ? void 0 : _b.removeEventListener("change", () => {
      this.onSelectedOptionChange();
    });
  }
  /**
   * Use this method to force the component to update its styles. It can be useful when the select is reset (with a placeholder).
   */
  updateStyles() {
    return __async(this, null, function* () {
      this._updateStyles();
    });
  }
  render() {
    return h(Host, {
      key: "73d21d77f3b725f2867f447f9b891a16a26c842f",
      class: `${this.expanded ? "expanded" : ""}`,
      "data-disabled": this.disabled,
      "data-size": this.size
    }, h("div", {
      key: "1d138a4f201b3772dd2f985e01941d2ad60536ee",
      class: "select-wrapper"
    }, h("slot", {
      key: "3b420677784de42d79acd852af58d577de12834e"
    }), h("div", {
      key: "e4562159d84b7d94d942be2f7e5b716ed3e4f23f",
      class: "arrow-container"
    }, h(SelectArrow, {
      key: "7cf362081f043af30f8f62ba8615e821ac3c6511",
      up: this.expanded
    }))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "required": ["requiredChanged"]
    };
  }
};
NativeSelect.style = WcsNativeSelectStyle0;
export {
  NativeSelect as wcs_native_select
};
//# sourceMappingURL=wcs-native-select.entry-R2IPIEH6.js.map
