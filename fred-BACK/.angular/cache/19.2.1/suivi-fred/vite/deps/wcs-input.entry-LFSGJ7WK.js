import {
  debounceEvent,
  findItemLabel,
  inheritAriaAttributes,
  inheritAttributes,
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

// ../node_modules/wcs-core/dist/esm/wcs-input.entry.js
var WcsInputSizeValues = ["s", "m", "l"];
function isWcsInputSize(size) {
  return WcsInputSizeValues.includes(size);
}
var inputCss = ":host{--wcs-input-icon-color-default:var(--wcs-semantic-color-foreground-brand);--wcs-input-icon-color-focus:var(--wcs-semantic-color-foreground-brand);--wcs-input-icon-color-disabled:var(--wcs-semantic-color-foreground-disabled);--wcs-input-background-color:var(--wcs-semantic-color-background-control-default);--wcs-input-border-radius-left:var(--wcs-semantic-border-radius-base);--wcs-input-border-radius-right:var(--wcs-semantic-border-radius-base);--wcs-input-border-width:var(--wcs-semantic-border-width-default);--wcs-input-border-width-focus:var(--wcs-semantic-border-width-large);--wcs-input-height-l:var(--wcs-semantic-size-l);--wcs-input-height-m:var(--wcs-semantic-size-m);--wcs-input-height-s:var(--wcs-semantic-size-s);--wcs-input-font-size-l:var(--wcs-semantic-font-size-l);--wcs-input-font-size-m:var(--wcs-semantic-font-size-m);--wcs-input-font-size-s:var(--wcs-semantic-font-size-s);--wcs-input-prefix-suffix-background-color:var(--wcs-semantic-color-background-surface-accent-lighter);--wcs-input-prefix-suffix-color:var(--wcs-semantic-color-foreground-on-accent);--wcs-input-prefix-suffix-color-disabled:var(--wcs-semantic-color-text-disabled);--wcs-input-prefix-suffix-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-input-border-style-default:solid;--wcs-input-border-style-focus:var(--wcs-semantic-border-style-focus-control);--wcs-input-border-color-default:var(--wcs-semantic-color-border-primary);--wcs-input-border-color-disabled:var(--wcs-semantic-color-border-disabled);--wcs-input-border-color-focus:var(--wcs-semantic-color-border-control-focus);--wcs-input-reveal-password-button-border-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-input-border-color-error:var(--wcs-semantic-color-border-critical);--wcs-input-value-color:var(--wcs-semantic-color-text-primary);--wcs-input-value-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-input-placeholder-color:var(--wcs-semantic-color-text-tertiary);--wcs-input-placeholder-font-weight:var(--wcs-semantic-font-weight-roman);--wcs-input-placeholder-font-style:var(--wcs-semantic-font-style-control-placeholder);--wcs-input-text-color-disabled:var(--wcs-semantic-color-text-disabled);--wcs-input-min-height:var(--wcs-semantic-size-s);--wcs-input-padding-horizontal-s:calc(1.5 * var(--wcs-semantic-spacing-base));--wcs-input-padding-horizontal-m:var(--wcs-semantic-spacing-large);--wcs-input-padding-horizontal-l:var(--wcs-semantic-spacing-large);--wcs-input-gap:var(--wcs-semantic-spacing-base);display:flex;width:100%;height:var(--wcs-input-host-height);box-sizing:border-box;border-radius:var(--wcs-input-border-radius-left) var(--wcs-input-border-radius-right) var(--wcs-input-border-radius-right) var(--wcs-input-border-radius-left);background-color:var(--wcs-input-background-color);outline:var(--wcs-input-border-style-default) var(--wcs-input-border-width) var(--wcs-input-border-color-default);outline-offset:calc(var(--wcs-input-border-width) * -1);background-clip:padding-box;gap:var(--wcs-input-gap)}:host input{overflow:hidden;height:var(--wcs-input-host-height);width:100%;padding:0;background-color:transparent;font-family:var(--wcs-font-sans-serif);color:var(--wcs-input-value-color);font-weight:var(--wcs-input-value-font-weight) !important;border:none;font-size:var(--wcs-input-font-size, 1rem);line-height:1.5}:host input::placeholder{color:var(--wcs-input-placeholder-color);opacity:1;font-weight:var(--wcs-input-placeholder-font-weight);font-style:var(--wcs-input-placeholder-font-style)}:host input:focus{box-shadow:none;outline:0}:host button.toggle_password{background:transparent;border:none;color:inherit;cursor:pointer}:host button.toggle_password:focus-visible{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-input-reveal-password-button-border-color-focus);outline-offset:calc(-2 * var(--wcs-input-border-width-focus));border-radius:0.1rem}:host .prefix,:host .suffix{color:var(--wcs-input-prefix-suffix-color);display:flex;white-space:nowrap;align-items:center;font-size:var(--wcs-input-font-size, 1rem);padding:0 calc(var(--wcs-input-padding-horizontal-m) / 2);font-weight:var(--wcs-input-prefix-suffix-font-weight) !important;background-color:var(--wcs-input-prefix-suffix-background-color)}:host .prefix{border-radius:var(--wcs-internal-input-border-radius-left) 0 0 var(--wcs-internal-input-border-radius-left)}:host .suffix{border-radius:0 var(--wcs-internal-input-border-radius-right) var(--wcs-internal-input-border-radius-right) 0}:host wcs-mat-icon{color:var(--wcs-input-icon-color-default)}:host([size=l]){--wcs-input-host-height:var(--wcs-input-height-l);--wcs-input-font-size:var(--wcs-input-font-size-l);padding-left:calc(var(--wcs-input-padding-horizontal-l));padding-right:calc(var(--wcs-input-padding-horizontal-l))}:host([size=m]){--wcs-input-host-height:var(--wcs-input-height-m);--wcs-input-font-size:var(--wcs-input-font-size-m);padding-left:calc(var(--wcs-input-padding-horizontal-m));padding-right:calc(var(--wcs-input-padding-horizontal-m))}:host([size=s]){--wcs-input-host-height:var(--wcs-input-height-s);--wcs-input-font-size:var(--wcs-input-font-size-s);padding-left:calc(var(--wcs-input-padding-horizontal-s));padding-right:calc(var(--wcs-input-padding-horizontal-s))}:host([state=error]){outline-color:var(--wcs-input-border-color-error) !important}:host([data-has-prefix]){padding-left:0}:host([data-has-suffix]){padding-right:0}:host([disabled]){cursor:not-allowed;outline:var(--wcs-input-border-style-default) var(--wcs-input-border-width) var(--wcs-input-border-color-disabled);--wcs-input-background-color:var(--wcs-semantic-color-background-control-disabled)}:host([disabled]) input{cursor:not-allowed;color:var(--wcs-input-text-color-disabled)}:host([disabled]) input::placeholder{color:var(--wcs-input-text-color-disabled)}:host([disabled]) .prefix,:host([disabled]) .suffix{color:var(--wcs-input-prefix-suffix-color-disabled);cursor:text}:host([disabled]) wcs-mat-icon{color:var(--wcs-input-icon-color-disabled);cursor:not-allowed}:host([readonly]){--wcs-input-background-color:var(--wcs-semantic-color-background-control-readonly);--wcs-input-border-width:0}:host(:focus-within){outline:var(--wcs-input-border-style-focus) var(--wcs-input-border-width-focus) var(--wcs-input-border-color-focus);outline-offset:calc(var(--wcs-input-border-width-focus) * -1)}:host(:focus-within) wcs-mat-icon{color:var(--wcs-input-icon-color-focus)}";
var WcsInputStyle0 = inputCss;
var INPUT_INHERITED_ATTRS = ["tabindex", "title"];
var Input = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsInput = createEvent(this, "wcsInput", 7);
    this.wcsChange = createEvent(this, "wcsChange", 7);
    this.wcsBlur = createEvent(this, "wcsBlur", 7);
    this.wcsFocus = createEvent(this, "wcsFocus", 7);
    this.inputId = `wcs-input-${inputIds++}`;
    this.inheritedAttributes = {};
    this.iconPassword = "visibility";
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || "";
      }
      this.wcsInput.emit(ev);
    };
    this.onChange = (_) => {
      this.wcsChange.emit({
        value: this.nativeInput.value
      });
    };
    this.onBlur = (ev) => {
      if (this.fireFocusEvents) {
        this.wcsBlur.emit(ev);
      }
    };
    this.onFocus = (ev) => {
      if (this.fireFocusEvents) {
        this.wcsFocus.emit(ev);
      }
    };
    this.fireFocusEvents = true;
    this.passwordReveal = false;
    this.accept = void 0;
    this.autocapitalize = "off";
    this.autocomplete = "off";
    this.autocorrect = "off";
    this.autofocus = false;
    this.debounce = 0;
    this.prefixLabel = void 0;
    this.suffixLabel = void 0;
    this.disabled = false;
    this.enterkeyhint = void 0;
    this.size = "m";
    this.icon = void 0;
    this.inputmode = void 0;
    this.max = void 0;
    this.maxlength = void 0;
    this.min = void 0;
    this.minlength = void 0;
    this.multiple = void 0;
    this.name = this.inputId;
    this.hidePasswordButtonAriaLabel = "Cacher le mot de passe";
    this.showPasswordButtonAriaLabel = "Afficher le mot de passe";
    this.pattern = void 0;
    this.placeholder = void 0;
    this.readonly = false;
    this.required = false;
    this.spellcheck = false;
    this.state = "initial";
    this.step = void 0;
    this.type = "text";
    this.value = "";
  }
  debounceChanged() {
    this.wcsInput = debounceEvent(this.wcsInput, this.debounce);
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, INPUT_INHERITED_ATTRS));
    if (!isWcsInputSize(this.size)) {
      console.warn(`Invalid size value for wcs-input : "${this.size}". Must be one of "${WcsInputSizeValues.join(", ")}"`);
      this.size = "m";
    }
  }
  connectedCallback() {
    this.debounceChanged();
    {
      document.dispatchEvent(new CustomEvent("wcsInputDidLoad", {
        detail: this.el
      }));
    }
  }
  disconnectedCallback() {
    {
      document.dispatchEvent(new CustomEvent("wcsInputDidUnload", {
        detail: this.el
      }));
    }
  }
  /**
   * Sets blur on the native `input` in `wcs-input`. Use this method instead of the global
   * `input.blur()`.
   * @internal
   */
  setBlur() {
    return __async(this, null, function* () {
      if (this.nativeInput) {
        this.nativeInput.blur();
      }
    });
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeInput, attr, value);
    });
  }
  getValueAsString() {
    return typeof this.value === "number" ? this.value.toString() : (this.value || "").toString();
  }
  passwordRevealIconClick() {
    this.passwordReveal = !this.passwordReveal;
  }
  onPasswordRevealChange() {
    this.iconPassword = this.passwordReveal ? "visibility_off" : "visibility";
  }
  render() {
    const value = this.getValueAsString();
    const labelId = this.inputId + "-lbl";
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
    }
    return h(Host, {
      key: "987bb9b2e0f16edc255e3cd33a92fad04a99369f",
      "aria-disabled": this.disabled ? "true" : null,
      "data-has-prefix": !!this.prefixLabel,
      "data-has-suffix": !!this.suffixLabel
    }, this.prefixLabel ? h("span", {
      class: "prefix",
      part: "prefix"
    }, this.prefixLabel) : null, this.icon ? h("wcs-mat-icon", {
      icon: this.icon,
      size: "m"
    }) : null, h("input", Object.assign({
      key: "395351bfae844314151d7cbdd12f9b4047294b6a",
      class: "native-input",
      ref: (input) => this.nativeInput = input,
      "aria-labelledby": label ? labelId : null,
      disabled: this.disabled,
      accept: this.accept,
      autoCapitalize: this.autocapitalize,
      autoComplete: this.autocomplete,
      autoCorrect: this.autocorrect,
      autoFocus: this.autofocus,
      enterKeyHint: this.enterkeyhint,
      inputMode: this.inputmode,
      min: this.min,
      max: this.max,
      minLength: this.minlength,
      maxLength: this.maxlength,
      multiple: this.multiple,
      name: this.name,
      pattern: this.pattern,
      placeholder: this.placeholder || "",
      readOnly: this.readonly,
      required: this.required,
      spellcheck: this.spellcheck,
      step: this.step,
      type: this.passwordReveal ? "text" : this.type,
      value,
      onInput: this.onInput,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.onFocus
    }, this.inheritedAttributes)), this.type === "password" ? h("button", {
      title: this.passwordReveal ? this.hidePasswordButtonAriaLabel : this.showPasswordButtonAriaLabel,
      class: "toggle_password",
      onClick: () => this.passwordRevealIconClick()
    }, h("wcs-mat-icon", {
      icon: this.iconPassword,
      size: "m"
    })) : null, this.suffixLabel ? h("span", {
      class: "suffix",
      part: "suffix"
    }, this.suffixLabel) : null);
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "debounce": ["debounceChanged"],
      "passwordReveal": ["onPasswordRevealChange"]
    };
  }
};
var inputIds = 0;
Input.style = WcsInputStyle0;
export {
  Input as wcs_input
};
//# sourceMappingURL=wcs-input.entry-LFSGJ7WK.js.map
