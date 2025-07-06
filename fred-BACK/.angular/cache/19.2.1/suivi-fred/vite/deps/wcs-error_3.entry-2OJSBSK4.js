import {
  isMutableAriaAttribute
} from "./chunk-E6CE7AQ4.js";
import {
  isControlComponentWithLabel
} from "./chunk-W4J5QVIS.js";
import {
  inheritAriaAttributes,
  inheritAttributes,
  normalizeWhitespace,
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

// ../node_modules/wcs-core/dist/esm/wcs-error_3.entry.js
var errorCss = ":host{--wcs-error-color:var(--wcs-semantic-color-text-critical);--wcs-error-font-size:var(--wcs-semantic-font-size-caption-2);--wcs-error-font-weight:var(--wcs-semantic-font-weight-book);color:var(--wcs-error-color);font-size:var(--wcs-error-font-size);font-weight:var(--wcs-error-font-weight)}";
var WcsErrorStyle0 = errorCss;
var Label$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, {
      key: "b6443e62088347631e56dcf0c503ab77c0f16ffb",
      "aria-live": "polite",
      "aria-atomic": "true",
      slot: "error"
    }, h("slot", {
      key: "73821911a5e02463baa056786c62e386d0ebb18d"
    }));
  }
};
Label$1.style = WcsErrorStyle0;
var formFieldCss = ":host{--wcs-form-field-gap:var(--wcs-semantic-spacing-small);--wcs-form-field-prefix-suffix-border-radius:var(--wcs-semantic-border-radius-base);--wcs-form-field-prefix-icon-color:var(--wcs-semantic-color-foreground-primary);--wcs-form-field-prefix-value-color:var(--wcs-semantic-color-text-inverse);--wcs-form-field-prefix-placeholder-color:var(--wcs-semantic-color-text-inverse);display:flex;flex-direction:column;gap:var(--wcs-form-field-gap);}:host .input-container{display:flex}:host ::slotted([slot=prefix]){--wcs-select-value-color:var(--wcs-semantic-color-text-inverse);--wcs-select-placeholder-color:var(--wcs-semantic-color-text-inverse);--wcs-select-control-background-color:var(--wcs-semantic-color-background-action-primary-default);--wcs-select-control-arrow-color:var(--wcs-form-field-prefix-icon-color);--wcs-select-control-border-radius:var(--wcs-form-field-prefix-suffix-border-radius) 0 0 var(--wcs-form-field-prefix-suffix-border-radius);--wcs-select-control-border-width-default:0;--wcs-select-control-border-style-focus:dashed;--wcs-select-control-border-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-native-select-value-color:var(--wcs-semantic-color-text-inverse);--wcs-native-select-placeholder-color:var(--wcs-semantic-color-text-inverse);--wcs-native-select-arrow-color:var(--wcs-form-field-prefix-icon-color);--wcs-native-select-background-color:var(--wcs-semantic-color-background-action-primary-default);--wcs-native-select-border-width:0;--wcs-native-select-border-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-native-select-border-style-focus:dashed;--wcs-native-select-border-radius:var(--wcs-form-field-prefix-suffix-border-radius) 0 0 var(--wcs-form-field-prefix-suffix-border-radius);--wcs-native-select-option-color:var(--wcs-semantic-color-text-inverse);--wcs-button-border-radius:var(--wcs-form-field-prefix-suffix-border-radius) 0 0 var(--wcs-form-field-prefix-suffix-border-radius)}:host ::slotted([slot=suffix]){--wcs-button-border-radius:0 var(--wcs-form-field-prefix-suffix-border-radius) var(--wcs-form-field-prefix-suffix-border-radius) 0;--wcs-select-control-border-radius:0 var(--wcs-form-field-prefix-suffix-border-radius) var(--wcs-form-field-prefix-suffix-border-radius) 0;--wcs-native-select-border-radius:0 var(--wcs-form-field-prefix-suffix-border-radius) var(--wcs-form-field-prefix-suffix-border-radius) 0}::slotted([slot=prefix][disabled]),::slotted([slot=prefix]:disabled),::slotted([slot=prefix][aria-disabled=true]),::slotted([slot=prefix][data-disabled]){--wcs-semantic-color-background-control-disabled:var(--wcs-semantic-color-background-action-primary-disabled);--wcs-semantic-color-text-disabled:var(--wcs-semantic-color-foreground-disabled);--wcs-select-control-background-color:var(--wcs-semantic-color-background-action-primary-disabled);--wcs-select-value-color:var(--wcs-semantic-color-text-disabled);--wcs-select-placeholder-color:var(--wcs-semantic-color-text-disabled);--wcs-native-select-background-color:var(--wcs-semantic-color-background-action-primary-disabled);--wcs-native-select-placeholder-color:var(--wcs-semantic-color-text-disabled);--wcs-native-select-value-color:var(--wcs-semantic-color-text-disabled)}::slotted([slot=prefix]:hover:not([disabled]):not([data-disabled])){--wcs-select-control-background-color:var(--wcs-semantic-color-background-action-primary-hover);--wcs-native-select-background-color:var(--wcs-semantic-color-background-action-primary-hover)}::slotted([slot=prefix]:active:not([disabled]):not([data-disabled])){--wcs-select-control-background-color:var(--wcs-semantic-color-background-action-primary-press);--wcs-native-select-background-color:var(--wcs-semantic-color-background-action-primary-press)}.input-container{display:flex}::slotted(wcs-select:not([slot=prefix])){width:100%}::slotted(wcs-native-select:not([slot=prefix])){width:100%}:host(.has-prefix) ::slotted(:not([slot=prefix])){--wcs-input-border-radius-left:0;--wcs-select-control-border-radius:0 var(--wcs-form-field-prefix-suffix-border-radius) var(--wcs-form-field-prefix-suffix-border-radius) 0;--wcs-native-select-border-radius:0 var(--wcs-form-field-prefix-suffix-border-radius) var(--wcs-form-field-prefix-suffix-border-radius) 0}:host(.has-suffix) ::slotted(:not([slot=suffix])){--wcs-input-border-radius-right:0;--wcs-select-control-border-radius:var(--wcs-form-field-prefix-suffix-border-radius) 0 0 var(--wcs-form-field-prefix-suffix-border-radius);--wcs-native-select-border-radius:var(--wcs-form-field-prefix-suffix-border-radius) 0 0 var(--wcs-form-field-prefix-suffix-border-radius)}:host(.has-prefix.has-suffix) ::slotted(:not([slot=prefix]):not([slot=suffix])){--wcs-input-border-radius-left:0;--wcs-input-border-radius-right:0;--wcs-select-control-border-radius:0;--wcs-native-select-border-radius:0}";
var WcsFormFieldStyle0 = formFieldCss;
var FormField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isError = false;
    this.hasPrefix = false;
    this.hasSuffix = false;
    this.spiedElement = void 0;
  }
  componentWillLoad() {
    this.hasSuffix = this.el.querySelector("[slot=suffix]") !== null;
    this.hasPrefix = this.el.querySelector("[slot=prefix]") !== null;
  }
  componentDidLoad() {
    this.initSpiedElement();
    this.addRequiredMarkerToLabel();
    this.updateErrorStateOnInput(this.isError);
  }
  isErrorChange(newValue) {
    this.updateErrorStateOnInput(newValue);
    this.updateAriaAttributes();
  }
  updateErrorStateOnInput(newValue) {
    if (this.spiedElementIsOfType("wcs-input", "wcs-textarea")) {
      if (newValue) {
        this.spiedElement.setAttribute("state", "error");
      } else {
        this.spiedElement.setAttribute("state", "initial");
      }
    }
  }
  /**
   * This function return true if the form field contains an element with tagName matches a value of the types param
   * @param types
   * @private
   */
  spiedElementIsOfType(...types) {
    var _a;
    for (const type of types) {
      if (((_a = this.spiedElement) === null || _a === void 0 ? void 0 : _a.tagName) === type.toUpperCase()) return true;
    }
    return false;
  }
  addRequiredMarkerToLabel() {
    var _a;
    const label = this.el.querySelector("wcs-label");
    this.observer = new MutationObserver((mutations) => {
      var _a2;
      const requiredAttMutation = mutations.filter((m) => m.attributeName === "required")[0];
      if (requiredAttMutation) {
        this.updateLabelRequiredFlag((_a2 = this.spiedElement) === null || _a2 === void 0 ? void 0 : _a2.hasAttribute("required"), label);
      }
    });
    if (this.spiedElement) {
      this.observer.observe(this.spiedElement, {
        attributes: true
      });
    }
    const isRequired = (_a = this.spiedElement) === null || _a === void 0 ? void 0 : _a.hasAttribute("required");
    this.updateLabelRequiredFlag(isRequired, label);
  }
  initSpiedElement() {
    var _a, _b;
    const SUPPORTED_COMPONENTS = ["wcs-input", "wcs-select", "wcs-native-select", "wcs-textarea", "wcs-radio-group", "wcs-switch", "wcs-checkbox", "wcs-native-select", "wcs-counter"];
    this.spiedElement = (_a = this.el.shadowRoot.querySelector("slot:not([name])")) === null || _a === void 0 ? void 0 : _a.assignedElements().filter((n) => [...SUPPORTED_COMPONENTS, "SLOT"].map((x) => x.toUpperCase()).indexOf(n.nodeName) !== -1)[0];
    if (((_b = this.spiedElement) === null || _b === void 0 ? void 0 : _b.tagName) === "SLOT") {
      this.spiedElement = this.spiedElement.assignedElements().filter((n) => SUPPORTED_COMPONENTS.map((x) => x.toUpperCase()).indexOf(n.nodeName) !== -1)[0];
    }
    if (!this.spiedElement) {
      console.warn("Form-field component support only " + SUPPORTED_COMPONENTS.toString() + ". Some features may not work with the provided component.");
      return;
    }
  }
  updateAriaAttributes() {
    return __async(this, null, function* () {
      if (isMutableAriaAttribute(this.spiedElement)) {
        const ariaLabelParts = [];
        if (isControlComponentWithLabel(this.spiedElement)) {
          const innerLabel = yield this.spiedElement.getLabel();
          const combinedLabel = `${this.label || ""} ${innerLabel || ""}`.trim();
          if (combinedLabel) {
            ariaLabelParts.push(normalizeWhitespace(combinedLabel));
          }
        } else {
          if (this.label) {
            ariaLabelParts.push(normalizeWhitespace(this.label));
          }
        }
        if (this.description) {
          ariaLabelParts.push(normalizeWhitespace(this.description));
        }
        if (this.isError) {
          this.spiedElement.setAriaAttribute("aria-invalid", "true");
          if (this.error) {
            ariaLabelParts.push(normalizeWhitespace(this.error));
          }
        } else {
          this.spiedElement.setAriaAttribute("aria-invalid", "false");
        }
        this.spiedElement.setAriaAttribute("aria-label", ariaLabelParts.length > 0 ? ariaLabelParts.join(" ") : null);
      }
    });
  }
  get label() {
    var _a;
    return ((_a = this.el.querySelector("wcs-label")) === null || _a === void 0 ? void 0 : _a.textContent) || null;
  }
  get description() {
    var _a;
    return ((_a = this.el.querySelector("wcs-hint")) === null || _a === void 0 ? void 0 : _a.textContent) || null;
  }
  get error() {
    var _a;
    return ((_a = this.el.querySelector("wcs-error")) === null || _a === void 0 ? void 0 : _a.textContent) || null;
  }
  updateLabelRequiredFlag(isRequired, label) {
    if (isRequired && label) {
      label.setAttribute("required", "true");
    } else if (!isRequired && label) {
      label.removeAttribute("required");
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  render() {
    let classes = "";
    const isError = this.isError;
    if (this.hasSuffix) {
      classes += " has-suffix";
    }
    if (this.hasPrefix) {
      classes += " has-prefix";
    }
    return h(Host, {
      key: "401976638f0eee23e5bf2faf49b2c065e08242ae",
      class: classes
    }, h("slot", {
      key: "47730da34957feea1da07abce0235f1deaebb1db",
      name: "label"
    }), h("div", {
      key: "ea12a8196369b1a1b254c8ac0a1230ad88d378cc",
      class: "input-container"
    }, h("slot", {
      key: "27c32a6ae85030b3bcbef032eb185e5e424a64ff",
      name: "prefix"
    }), h("slot", {
      key: "caf42f2f0c9fe6a8d082e50e22afca8303a7486b",
      onSlotchange: () => this.onFormInputSlotChange()
    }), h("slot", {
      key: "11bc3a58667ef09116fada427389a9e958d06c02",
      name: "suffix"
    })), isError ? h("slot", {
      name: "error"
    }) : "", h("slot", {
      key: "8d8e6cd24167731fee1c49ddc33bd8e07c38e522",
      name: "messages"
    }));
  }
  onFormInputSlotChange() {
    this.initSpiedElement();
    this.updateAriaAttributes();
    this.addRequiredMarkerToLabel();
    this.updateErrorStateOnInput(this.isError);
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isError": ["isErrorChange"]
    };
  }
};
FormField.style = WcsFormFieldStyle0;
var labelCss = ':host{--wcs-label-font-weight:var(--wcs-semantic-font-weight-book);--wcs-label-color:var(--wcs-semantic-color-text-primary);--wcs-label-required-marker-color:var(--wcs-semantic-color-text-critical);--wcs-label-gap:var(--wcs-semantic-spacing-small);font-weight:var(--wcs-label-font-weight)}:host([required])>label::after{font-weight:var(--wcs-label-font-weight);color:var(--wcs-label-required-marker-color);content:" *"}label{display:inline-block;color:var(--wcs-label-color);font-weight:var(--wcs-label-font-weight)}label ::slotted(wcs-mat-icon){display:inline;vertical-align:middle;margin-left:var(--wcs-label-gap)}';
var WcsLabelStyle0 = labelCss;
var LABEL_INHERITED_ATTRS = ["title"];
var Label = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.required = false;
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, LABEL_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeLabel, attr, value);
    });
  }
  render() {
    return h(Host, {
      key: "b606456b6cff950276c8a79b24d0375d4990f0e8",
      slot: "label"
    }, h("label", Object.assign({
      key: "52143cd88677e7927e18c8425f72884b38700a06",
      ref: (el) => this.nativeLabel = el
    }, this.inheritedAttributes), h("slot", {
      key: "7299df56be0d8f10d40a40e5e9534d2dc45da712"
    })));
  }
  get el() {
    return getElement(this);
  }
};
Label.style = WcsLabelStyle0;
export {
  Label$1 as wcs_error,
  FormField as wcs_form_field,
  Label as wcs_label
};
//# sourceMappingURL=wcs-error_3.entry-2OJSBSK4.js.map
