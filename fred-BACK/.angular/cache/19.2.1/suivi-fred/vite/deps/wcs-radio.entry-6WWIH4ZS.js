import {
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

// ../node_modules/wcs-core/dist/esm/wcs-radio.entry.js
var radioCss = ':host{width:fit-content;--wcs-radio-transition-duration:var(--wcs-semantic-motion-duration-feedback-base);--wcs-radio-text-color-default:var(--wcs-semantic-color-text-secondary);--wcs-radio-text-font-weight-default:var(--wcs-semantic-font-weight-medium);--wcs-radio-text-color-selected:var(--wcs-semantic-color-text-primary);--wcs-radio-text-font-weight-selected:var(--wcs-semantic-font-weight-medium);--wcs-radio-text-color-disabled:var(--wcs-semantic-color-text-disabled);--wcs-radio-text-color-hover:var(--wcs-semantic-color-text-primary);--wcs-radio-checkmark-size:1rem;--wcs-radio-gap:var(--wcs-semantic-spacing-base);--wcs-radio-outline-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-radio-checkmark-border-width:var(--wcs-semantic-border-width-large);--wcs-radio-checkmark-border-color-default:var(--wcs-semantic-color-border-control-indicator-default);--wcs-radio-checkmark-border-color-selected:var(--wcs-semantic-color-border-control-indicator-selected);--wcs-radio-checkmark-border-color-hover:var(--wcs-semantic-color-border-control-indicator-hover);--wcs-radio-checkmark-border-color-disabled:var(--wcs-semantic-color-border-control-indicator-disabled);--wcs-radio-checkmark-background-color-default:transparent;--wcs-radio-checkmark-background-color-selected:var(--wcs-semantic-color-background-control-indicator-selected);--wcs-radio-checkmark-background-color-selected-disabled:var(--wcs-semantic-color-background-control-indicator-disabled);--wcs-radio-checkmark-background-color-selected-hover:var(--wcs-semantic-color-background-control-indicator-hover);--wcs-radio-checkmark-outline-distance-with-checkmark-circle:var(--wcs-semantic-spacing-small);--wcs-radio-checkmark-outline-width:var(--wcs-semantic-border-width-large);--wcs-radio-checkmark-outline-color:var(--wcs-semantic-color-foreground-control-indicator-selected);--wcs-radio-checkmark-border-radius:var(--wcs-semantic-border-radius-full);--wcs-radio-border-radius:var(--wcs-semantic-border-radius-base);--wcs-radio-option-background-color-default:var(--wcs-semantic-color-background-action-secondary-default);--wcs-radio-option-background-color-hover:var(--wcs-semantic-color-background-action-secondary-default);--wcs-radio-option-background-color-press:var(--wcs-semantic-color-background-action-secondary-default);--wcs-radio-option-background-color-disabled:var(--wcs-semantic-color-background-action-secondary-default);--wcs-radio-option-background-color-selected-default:var(--wcs-semantic-color-background-action-primary-default);--wcs-radio-option-background-color-selected-hover:var(--wcs-semantic-color-background-action-primary-hover);--wcs-radio-option-background-color-selected-press:var(--wcs-semantic-color-background-action-primary-press);--wcs-radio-option-background-color-selected-disabled:var(--wcs-semantic-color-background-action-primary-disabled);--wcs-radio-option-text-color-default:var(--wcs-semantic-color-foreground-action-secondary-default);--wcs-radio-option-text-color-hover:var(--wcs-semantic-color-foreground-action-secondary-default);--wcs-radio-option-text-color-press:var(--wcs-semantic-color-foreground-action-secondary-press);--wcs-radio-option-text-color-selected-default:var(--wcs-semantic-color-foreground-action-primary-default);--wcs-radio-option-text-color-selected-hover:var(--wcs-semantic-color-foreground-action-primary-hover);--wcs-radio-option-text-color-selected-press:var(--wcs-semantic-color-foreground-action-primary-press);--wcs-radio-option-text-color-disabled:var(--wcs-semantic-color-text-disabled);--wcs-radio-option-text-font-weight-default:var(--wcs-semantic-font-weight-roman);--wcs-radio-option-text-font-weight-selected:var(--wcs-semantic-font-weight-roman);--wcs-radio-option-border-radius:var(--wcs-semantic-border-radius-base);--wcs-radio-option-border-width:var(--wcs-semantic-border-width-default);--wcs-radio-option-border-color-hover:var(--wcs-semantic-color-border-action-secondary-hover);--wcs-radio-option-border-color-press:var(--wcs-semantic-color-border-action-secondary-press);--wcs-radio-option-padding-top:var(--wcs-semantic-spacing-base);--wcs-radio-option-padding-right:var(--wcs-semantic-spacing-large);--wcs-radio-option-padding-bottom:var(--wcs-semantic-spacing-base);--wcs-radio-option-padding-left:var(--wcs-semantic-spacing-large)}:host([mode=radio]) input,:host([mode=horizontal]) input{position:absolute;opacity:0;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}:host([mode=radio]) label,:host([mode=horizontal]) label{margin-bottom:0;color:var(--wcs-radio-text-color-default);font-weight:var(--wcs-radio-text-font-weight-default) !important;display:inline-block}:host([mode=radio]) label:before,:host([mode=horizontal]) label:before{border-radius:var(--wcs-radio-checkmark-border-radius);border:var(--wcs-radio-checkmark-border-width) solid var(--wcs-radio-checkmark-border-color-default);position:relative;width:var(--wcs-radio-checkmark-size);height:var(--wcs-radio-checkmark-size);pointer-events:none;content:"";background-color:var(--wcs-radio-checkmark-background-color-default)}:host([mode=radio]) input:focus-visible+label,:host([mode=horizontal]) input:focus-visible+label{transition:none;outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-radio-outline-color-focus);outline-offset:var(--wcs-semantic-spacing-small);border-radius:var(--wcs-radio-border-radius)}:host([disabled]) label{color:var(--wcs-radio-text-color-disabled);cursor:not-allowed}:host([disabled]) label:before{border-color:var(--wcs-radio-checkmark-border-color-disabled)}:host(:not([disabled])) label{cursor:pointer}:host([mode=radio].checked) label,:host([mode=horizontal].checked) label{color:var(--wcs-radio-text-color-selected);font-weight:var(--wcs-radio-text-font-weight-selected) !important}:host([mode=radio].checked) label:before,:host([mode=horizontal].checked) label:before{border-color:var(--wcs-radio-checkmark-border-color-selected);background-color:var(--wcs-radio-checkmark-background-color-selected);outline:solid var(--wcs-radio-checkmark-outline-width) var(--wcs-radio-checkmark-outline-color);outline-offset:calc(-1 * var(--wcs-radio-checkmark-outline-distance-with-checkmark-circle))}:host([mode=radio][disabled].checked) label,:host([mode=horizontal][disabled].checked) label{color:var(--wcs-radio-text-color-disabled)}:host([mode=radio][disabled].checked) label:before,:host([mode=horizontal][disabled].checked) label:before{border-color:var(--wcs-radio-checkmark-border-color-disabled);background-color:var(--wcs-radio-checkmark-background-color-selected-disabled)}:host([mode=radio]:hover:not([disabled])) label,:host([mode=horizontal]:hover:not([disabled])) label{color:var(--wcs-radio-text-color-hover)}:host([mode=radio]:hover:not([disabled])) label:before,:host([mode=horizontal]:hover:not([disabled])) label:before{border-color:var(--wcs-radio-checkmark-border-color-hover);background-color:var(--wcs-radio-checkmark-background-color-selected-hover)}:host([mode=radio]:hover:not([disabled]):not(.checked)) label:before,:host([mode=horizontal]:hover:not([disabled]):not(.checked)) label:before{background-color:var(--wcs-radio-checkmark-background-color-default)}:host([mode=radio]) label{border:none}:host([mode=radio]) label:before{transition:background-color var(--wcs-radio-transition-duration) ease-in-out;margin-right:var(--wcs-radio-gap);display:inline-block;top:3px;box-sizing:border-box}:host([mode=radio]) label:empty::before{margin-right:0}:host([mode=horizontal]){height:fit-content}:host([mode=horizontal]) label:before{transition:background-color var(--wcs-radio-transition-duration) ease-in-out;margin:auto auto var(--wcs-radio-gap);display:block}:host([mode=horizontal]) label:empty::before{margin-bottom:0}:host([mode=option]){font-weight:var(--wcs-radio-option-text-font-weight-default) !important}:host([mode=option]) input{position:absolute;z-index:-1;opacity:0;box-sizing:border-box;padding:0}:host([mode=option]) label{padding:var(--wcs-radio-option-padding-top) var(--wcs-radio-option-padding-right) var(--wcs-radio-option-padding-bottom) var(--wcs-radio-option-padding-left);margin-bottom:0;color:var(--wcs-radio-option-text-color-default);white-space:nowrap;border-radius:var(--wcs-radio-option-border-radius);transition:background-color var(--wcs-radio-transition-duration) ease-in-out;background-color:var(--wcs-radio-option-background-color-default)}:host([mode=option]) input:focus-visible+label{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-radio-outline-color-focus);outline-offset:0;border-radius:var(--wcs-radio-border-radius)}:host([mode=option][disabled]) label{color:var(--wcs-radio-option-text-color-disabled);background-color:var(--wcs-radio-option-background-color-disabled)}:host([mode=option][disabled].checked) label{color:var(--wcs-radio-option-text-color-disabled);background-color:var(--wcs-radio-option-background-color-selected-disabled)}:host([mode=option].checked) label{font-weight:var(--wcs-radio-option-text-font-weight-selected) !important;color:var(--wcs-radio-option-text-color-selected-default);background-color:var(--wcs-radio-option-background-color-selected-default)}:host([mode=option]:hover.checked:not([disabled])) label{color:var(--wcs-radio-option-text-color-selected-hover);background-color:var(--wcs-radio-option-background-color-selected-hover)}:host([mode=option]:active.checked:not([disabled])) label{color:var(--wcs-radio-option-text-color-selected-press);background-color:var(--wcs-radio-option-background-color-selected-press)}:host([mode=option]:hover:not(.checked):not([disabled])) label{color:var(--wcs-radio-option-text-color-hover);background-color:var(--wcs-radio-option-background-color-hover);outline:var(--wcs-radio-option-border-width) solid var(--wcs-radio-option-border-color-hover)}:host([mode=option]:active:not(.checked):not([disabled])) label{color:var(--wcs-radio-option-text-color-press);background-color:var(--wcs-radio-option-background-color-press);outline:var(--wcs-radio-option-border-width) solid var(--wcs-radio-option-border-color-press)}';
var WcsRadioStyle0 = radioCss;
var RADIO_INHERITED_ATTRS = ["title"];
var Radio = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsRadioClick = createEvent(this, "wcsRadioClick", 7);
    this.wcsBlur = createEvent(this, "wcsBlur", 7);
    this.wcsFocus = createEvent(this, "wcsFocus", 7);
    this.inputId = `wcs-rb-${radioButtonIds++}`;
    this.inheritedAttributes = {};
    this.checked = false;
    this.radioTabIndex = -1;
    this.value = void 0;
    this.label = void 0;
    this.disabled = false;
    this.name = void 0;
    this.mode = "radio";
  }
  /**
   * @internal
   * Checks of unchecks the radio according to it's radio-group value
   */
  updateState() {
    return __async(this, null, function* () {
      const radioGroup = this.getClosestRadioGroup();
      if (radioGroup) {
        this.checked = radioGroup.name === this.name && radioGroup.value === this.value;
      }
    });
  }
  /** @internal */
  setTabIndex(value) {
    return __async(this, null, function* () {
      this.radioTabIndex = value;
    });
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeRadio, attr, value);
    });
  }
  onFocus(ev) {
    this.wcsFocus.emit(ev);
  }
  onBlur(ev) {
    this.wcsBlur.emit(ev);
  }
  getClosestRadioGroup() {
    return this.el.closest("wcs-radio-group");
  }
  componentWillLoad() {
    if (this.value === void 0) {
      this.value = this.el.innerText || "";
    }
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, RADIO_INHERITED_ATTRS));
  }
  onChange(_) {
    if (this.disabled) return;
    if (!this.checked) {
      this.checked = true;
      this.emitRadioChangeEvent();
    }
  }
  emitRadioChangeEvent() {
    this.wcsRadioClick.emit({
      label: this.label,
      source: this.el,
      value: this.value
    });
  }
  render() {
    return h(Host, {
      key: "07ab36a8de3f5503b21792d29fd384a9412f9c35",
      slot: "option",
      tabIndex: this.disabled ? -1 : this.radioTabIndex,
      class: this.checked ? "checked" : ""
    }, h("input", Object.assign({
      key: "a977994ac12b09f5dac114b923cbeea2de437757",
      id: this.inputId,
      type: "radio",
      name: this.name,
      value: this.value,
      checked: this.checked,
      disabled: this.disabled,
      onChange: this.onChange.bind(this),
      onFocus: this.onFocus.bind(this),
      onBlur: this.onBlur.bind(this),
      "aria-disabled": this.disabled ? "true" : null,
      "aria-checked": `${this.checked}`,
      ref: (el) => this.nativeRadio = el
    }, this.inheritedAttributes)), h("label", {
      key: "709e74930fd42435b6ad2ad12e1ab0b3653572d4",
      htmlFor: `${this.inputId}`
    }, this.label));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return getElement(this);
  }
};
var radioButtonIds = 0;
Radio.style = WcsRadioStyle0;
export {
  Radio as wcs_radio
};
//# sourceMappingURL=wcs-radio.entry-6WWIH4ZS.js.map
