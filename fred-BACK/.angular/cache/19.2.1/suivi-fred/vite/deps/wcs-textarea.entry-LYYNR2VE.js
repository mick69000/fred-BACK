import {
  debounceEvent,
  inheritAriaAttributes,
  inheritAttributes,
  raf,
  setOrRemoveAttribute
} from "./chunk-NAIC4MMY.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  readTask,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import {
  __async
} from "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-textarea.entry.js
var textareaCss = ":host{--wcs-textarea-text-color-disabled:var(--wcs-semantic-color-text-disabled);--wcs-textarea-value-color:var(--wcs-semantic-color-text-primary);--wcs-textarea-value-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-textarea-placeholder-color:var(--wcs-semantic-color-text-tertiary);--wcs-textarea-placeholder-font-weight:var(--wcs-semantic-font-weight-roman);--wcs-textarea-placeholder-font-style:var(--wcs-semantic-font-style-control-placeholder);--wcs-textarea-icon-color-default:var(--wcs-semantic-color-foreground-brand);--wcs-textarea-icon-color-disabled:var(--wcs-semantic-color-foreground-disabled);--wcs-textarea-icon-color-focus:var(--wcs-semantic-color-foreground-brand);--wcs-textarea-border-color-default:var(--wcs-semantic-color-border-primary);--wcs-textarea-border-color-disabled:var(--wcs-semantic-color-border-disabled);--wcs-textarea-border-color-error:var(--wcs-semantic-color-border-critical);--wcs-textarea-border-color-focus:var(--wcs-semantic-color-border-control-focus);--wcs-textarea-border-style-default:solid;--wcs-textarea-border-style-error:solid;--wcs-textarea-border-style-focus:var(--wcs-semantic-border-style-focus-control);--wcs-internal-textarea-border-radius-left:var(--wcs-textarea-border-radius-left, var(--wcs-semantic-border-radius-base));--wcs-internal-textarea-border-radius-right:var(--wcs-textarea-border-radius-right, var(--wcs-semantic-border-radius-base));--wcs-textarea-border-width:var(--wcs-semantic-border-width-default);--wcs-textarea-border-width-focus:var(--wcs-semantic-border-width-large);--wcs-textarea-gap:var(--wcs-semantic-spacing-base);--wcs-textarea-padding-top:var(--wcs-semantic-spacing-base);--wcs-textarea-padding-bottom:var(--wcs-semantic-spacing-base);--wcs-internal-textarea-padding-left:var(--wcs-textarea-padding-left, var(--wcs-semantic-spacing-large));--wcs-internal-textarea-padding-right:var(--wcs-textarea-padding-right, var(--wcs-semantic-spacing-large));--wcs-textarea-min-height:var(--wcs-semantic-size-m);--wcs-internal-textarea-max-height:var(--wcs-textarea-max-height, unset);--wcs-textarea-background-color:var(--wcs-semantic-color-background-control-default);display:flex;flex-direction:row;align-items:center;gap:var(--wcs-textarea-gap);width:100%;border-radius:var(--wcs-internal-textarea-border-radius-left) var(--wcs-internal-textarea-border-radius-right) var(--wcs-internal-textarea-border-radius-right) var(--wcs-internal-textarea-border-radius-left);background-color:var(--wcs-textarea-background-color);outline:var(--wcs-textarea-border-style-default) var(--wcs-textarea-border-width) var(--wcs-textarea-border-color-default);outline-offset:calc(-1 * var(--wcs-textarea-border-width));background-clip:padding-box;box-sizing:border-box}:host textarea{box-sizing:border-box;font-family:inherit;overflow:auto;flex:1;width:100%;min-height:var(--wcs-textarea-min-height);max-height:var(--wcs-internal-textarea-max-height);background-color:transparent;color:var(--wcs-textarea-value-color);font-weight:var(--wcs-textarea-value-font-weight) !important;border:none;padding-top:var(--wcs-textarea-padding-top);padding-bottom:var(--wcs-textarea-padding-bottom);padding-left:var(--wcs-internal-textarea-padding-left);padding-right:var(--wcs-internal-textarea-padding-right);font-size:1rem;line-height:1.5}:host textarea::placeholder{color:var(--wcs-textarea-placeholder-color);opacity:1;font-weight:var(--wcs-textarea-placeholder-font-weight);font-style:var(--wcs-textarea-placeholder-font-style)}:host textarea:focus{box-shadow:none;outline:0}:host wcs-mat-icon{margin-left:var(--wcs-internal-textarea-padding-left);color:var(--wcs-textarea-icon-color-default)}:host([disabled]){--wcs-textarea-background-color:var(--wcs-semantic-color-background-control-disabled);outline:var(--wcs-textarea-border-style-default) var(--wcs-textarea-border-width) var(--wcs-textarea-border-color-disabled)}:host([disabled]) textarea{color:var(--wcs-textarea-text-color-disabled);cursor:not-allowed}:host([disabled]) textarea::placeholder{color:var(--wcs-textarea-text-color-disabled)}:host([disabled]) wcs-mat-icon{color:var(--wcs-textarea-icon-color-disabled)}:host([icon]) textarea{padding-left:0}:host([state=error]){outline-color:var(--wcs-textarea-border-color-error) !important}:host(:focus-within){outline:var(--wcs-textarea-border-style-focus) var(--wcs-textarea-border-width-focus) var(--wcs-textarea-border-color-focus);outline-offset:calc(var(--wcs-textarea-border-width-focus) * -1)}:host(:focus-within) wcs-mat-icon{color:var(--wcs-textarea-icon-color-focus)}";
var WcsTextareaStyle0 = textareaCss;
var TEXTAREA_INHERITED_ATTRS = ["tabindex", "title"];
var Textarea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsChange = createEvent(this, "wcsChange", 7);
    this.wcsInput = createEvent(this, "wcsInput", 7);
    this.wcsBlur = createEvent(this, "wcsBlur", 7);
    this.wcsFocus = createEvent(this, "wcsFocus", 7);
    this.inputId = `wcs-textarea-${textareaIds++}`;
    this.inheritedAttributes = {};
    this.onInput = (ev) => {
      if (this.nativeInput) {
        this.value = this.nativeInput.value;
      }
      this.wcsInput.emit(ev);
    };
    this.onChange = (_) => {
      this.wcsChange.emit({
        value: this.nativeInput.value
      });
    };
    this.onFocus = (ev) => {
      if (this.fireFocusEvents) {
        this.wcsFocus.emit(ev);
      }
    };
    this.onBlur = (ev) => {
      if (this.fireFocusEvents) {
        this.wcsBlur.emit(ev);
      }
    };
    this.fireFocusEvents = true;
    this.autocapitalize = "none";
    this.autofocus = false;
    this.debounce = 0;
    this.disabled = false;
    this.icon = void 0;
    this.inputmode = void 0;
    this.enterkeyhint = void 0;
    this.maxlength = void 0;
    this.minlength = void 0;
    this.name = this.inputId;
    this.placeholder = void 0;
    this.readonly = false;
    this.required = false;
    this.spellcheck = false;
    this.state = "initial";
    this.cols = void 0;
    this.rows = void 0;
    this.wrap = void 0;
    this.autoGrow = false;
    this.value = "";
    this.resize = void 0;
  }
  debounceChanged() {
    this.wcsInput = debounceEvent(this.wcsInput, this.debounce);
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value) {
      nativeInput.value = value;
    }
    this.runAutoGrow();
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
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, TEXTAREA_INHERITED_ATTRS));
  }
  componentDidLoad() {
    raf(() => this.runAutoGrow());
  }
  runAutoGrow() {
    const nativeInput = this.nativeInput;
    if (nativeInput && this.autoGrow) {
      readTask(() => {
        nativeInput.style.height = "auto";
        nativeInput.style.height = nativeInput.scrollHeight + "px";
      });
    }
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeInput, attr, value);
    });
  }
  /**
   * This method make the textarea automatically adopt the size of the content without a scroll bar
   */
  fitContent() {
    return __async(this, null, function* () {
      raf(() => this.runAutoGrow());
    });
  }
  /**
   * Sets blur on the native `textarea` in `wcs-textarea`. Use this method instead of the global
   * `textarea.blur()`.
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
   * Returns the native `<textarea>` element used under the hood.
   */
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  getValue() {
    return this.value || "";
  }
  render() {
    const value = this.getValue();
    const style = Object.assign({}, this.resize && {
      "resize": this.resize
    });
    return h(Host, {
      key: "d2f0cea260f9745f49f4aa259004b704af492c33",
      "aria-disabled": this.disabled ? "true" : null
    }, this.icon ? h("wcs-mat-icon", {
      icon: this.icon,
      size: "m"
    }) : null, h("textarea", Object.assign({
      key: "a5c87bbb2888132fd62f26df0f36e5d4e003ad84",
      class: "native-textarea",
      ref: (el) => this.nativeInput = el,
      autoCapitalize: this.autocapitalize,
      autoFocus: this.autofocus,
      enterKeyHint: this.enterkeyhint,
      inputMode: this.inputmode,
      disabled: this.disabled,
      maxLength: this.maxlength,
      minLength: this.minlength,
      name: this.name,
      placeholder: this.placeholder || "",
      readOnly: this.readonly,
      required: this.required,
      spellcheck: this.spellcheck,
      cols: this.cols,
      rows: this.rows,
      wrap: this.wrap,
      onInput: this.onInput,
      onChange: this.onChange,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      style
    }, this.inheritedAttributes), value));
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
      "value": ["valueChanged"]
    };
  }
};
var textareaIds = 0;
Textarea.style = WcsTextareaStyle0;
export {
  Textarea as wcs_textarea
};
//# sourceMappingURL=wcs-textarea.entry-LYYNR2VE.js.map
