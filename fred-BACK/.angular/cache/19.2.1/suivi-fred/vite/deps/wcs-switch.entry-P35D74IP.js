import {
  getSlottedContentText
} from "./chunk-W4J5QVIS.js";
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

// ../node_modules/wcs-core/dist/esm/wcs-switch.entry.js
var switchCss = ':host{--wcs-switch-background-color-initial:var(--wcs-semantic-color-background-control-indicator-default);--wcs-switch-background-color-final:var(--wcs-semantic-color-background-control-indicator-selected);--wcs-switch-background-color-disabled:var(--wcs-semantic-color-background-control-indicator-disabled);--wcs-switch-background-color-disabled-selected:var(--wcs-semantic-color-background-control-indicator-disabled);--wcs-switch-background-color-hover-selected:var(--wcs-semantic-color-background-control-indicator-hover);--wcs-switch-padding-horizontal:var(--wcs-semantic-spacing-small);--wcs-switch-padding-vertical:calc((var(--wcs-switch-height) - var(--wcs-switch-dot-size)) / 2);--wcs-switch-dot-color-default:var(--wcs-semantic-color-foreground-brand);--wcs-switch-dot-color-selected:var(--wcs-semantic-color-foreground-control-indicator-selected);--wcs-switch-dot-color-disabled:var(--wcs-semantic-color-foreground-control-indicator-disabled);--wcs-switch-text-color-default:var(--wcs-semantic-color-text-secondary);--wcs-switch-text-color-selected:var(--wcs-semantic-color-text-primary);--wcs-switch-text-color-disabled:var(--wcs-semantic-color-text-disabled);--wcs-switch-text-font-weight-default:var(--wcs-semantic-font-weight-medium);--wcs-switch-text-font-weight-selected:var(--wcs-semantic-font-weight-medium);--wcs-switch-outline-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-switch-dot-translate-x:calc(var(--wcs-switch-width) - var(--wcs-switch-dot-size) - (2 * var(--wcs-switch-padding-horizontal)));--wcs-switch-transition-duration:var(--wcs-semantic-motion-duration-feedback-base);--wcs-switch-dot-size:0.875rem;--wcs-switch-height:var(--wcs-semantic-size-xs);--wcs-switch-width:var(--wcs-semantic-size-l);--wcs-switch-border-radius:var(--wcs-semantic-border-radius-full);--wcs-switch-gap:var(--wcs-semantic-spacing-base);display:inline-flex}:host([disabled]) .text{color:var(--wcs-switch-text-color-disabled)}:host([disabled]) .wcs-container{cursor:not-allowed}.wcs-container{position:relative;display:flex;user-select:none;margin-bottom:0;gap:var(--wcs-switch-gap)}.wcs-container:has(input:focus-visible){outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-switch-outline-color-focus);outline-offset:var(--wcs-semantic-spacing-small);border-radius:var(--wcs-switch-border-radius)}@supports not selector(.wcs-container:has(input:focus-visible)){.wcs-container:focus-within{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-switch-outline-color-focus);outline-offset:var(--wcs-semantic-spacing-small);border-radius:var(--wcs-switch-border-radius)}}:host([label-alignment=top]) .wcs-container{align-items:start}:host([label-alignment=center]) .wcs-container{align-items:center}:host([label-alignment=bottom]) .wcs-container{align-items:flex-end}.wcs-container input{position:absolute;opacity:0;height:0;width:0}.text{color:var(--wcs-switch-text-color-default);font-weight:var(--wcs-switch-text-font-weight-default);line-height:1.375}.wcs-container:not([aria-disabled]) input:checked~.text{font-weight:var(--wcs-switch-text-font-weight-selected);color:var(--wcs-switch-text-color-selected)}.wcs-checkmark::before{position:absolute;transition:all var(--wcs-switch-transition-duration) ease-out}.wcs-checkmark::before{bottom:var(--wcs-switch-padding-vertical);left:var(--wcs-switch-padding-horizontal);width:var(--wcs-switch-dot-size);height:var(--wcs-switch-dot-size);content:"";border-radius:50%;background-color:var(--wcs-switch-dot-color-default)}:host([disabled]:not([checked])) .wcs-checkmark::before{background-color:var(--wcs-switch-dot-color-disabled)}:host([disabled]:not([checked])) .wcs-checkmark{background-color:var(--wcs-switch-background-color-disabled)}:host([disabled][checked]) .wcs-checkmark{background-color:var(--wcs-switch-background-color-disabled-selected)}:host([disabled]) .text{color:var(--wcs-switch-text-color-disabled)}.wcs-checkmark{top:0;right:0;bottom:0;left:0;width:var(--wcs-switch-width);height:var(--wcs-switch-height);border-radius:var(--wcs-switch-border-radius);background-color:var(--wcs-switch-background-color-initial);min-width:3rem;position:relative}.wcs-container:not([aria-disabled]){cursor:pointer}input:not([disabled]):checked+.wcs-checkmark::before,.wcs-container:focus input:not([disabled])+.wcs-checkmark::before{background-color:var(--wcs-switch-dot-color-selected)}input:checked+.wcs-checkmark::before{transform:translateX(var(--wcs-switch-dot-translate-x))}input:not([disabled]):checked+.wcs-checkmark{background-color:var(--wcs-switch-background-color-final)}.wcs-container:hover input:not([disabled]):checked+.wcs-checkmark{background-color:var(--wcs-switch-background-color-hover-selected)}';
var WcsSwitchStyle0 = switchCss;
var SWITCH_INHERITED_ATTRS = ["tabindex"];
var Switch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsChange = createEvent(this, "wcsChange", 7);
    this.wcsFocus = createEvent(this, "wcsFocus", 7);
    this.wcsBlur = createEvent(this, "wcsBlur", 7);
    this.switchId = `wcs-switch-${switchIds++}`;
    this.inheritedAttributes = {};
    this.name = this.switchId;
    this.checked = false;
    this.labelAlignment = "center";
    this.disabled = false;
  }
  handleChange(ev) {
    ev.stopImmediatePropagation();
    ev.preventDefault();
    this.toggleSwitchState();
  }
  handleHostClick(e) {
    return __async(this, null, function* () {
      e.preventDefault();
      e.stopPropagation();
      this.toggleSwitchState();
    });
  }
  handleInputClick(ev) {
    if (ev.detail) {
      ev.stopImmediatePropagation();
      ev.preventDefault();
    }
  }
  toggleSwitchState() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.wcsChange.emit({
      checked: this.checked
    });
  }
  handleFocus(event) {
    this.wcsFocus.emit(event);
  }
  handleBlur(event) {
    this.wcsBlur.emit(event);
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, SWITCH_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeInput, attr, value);
    });
  }
  getLabel() {
    return __async(this, null, function* () {
      return getSlottedContentText(this.el);
    });
  }
  render() {
    return h(Host, {
      key: "7583a10f5f7f2dbad7b31fcab1864d950b7a773c"
    }, h("label", {
      key: "93dcf06138949976d600935058f82dc7c0fd44cb",
      htmlFor: this.name,
      class: "wcs-container",
      "aria-disabled": this.disabled
    }, h("input", Object.assign({
      key: "274e8126f833188a2e60f8ed62f1fbc63efa7970",
      onBlur: this.handleBlur.bind(this),
      onChange: this.handleChange.bind(this),
      onClick: this.handleInputClick.bind(this),
      onFocus: this.handleFocus.bind(this),
      checked: this.checked,
      id: this.name,
      class: "wcs-switch",
      type: "checkbox",
      name: this.name,
      disabled: this.disabled,
      ref: (el) => {
        this.nativeInput = el;
      }
    }, this.inheritedAttributes)), h("span", {
      key: "57e6bcc1b48d4765ec081736e7bc13000dbaa665",
      class: "wcs-checkmark"
    }), h("span", {
      key: "f03e632e387bb25030ab0cd0f4e5aa451c17d042",
      class: "text"
    }, h("slot", {
      key: "ab9340d1fa032ab2da0318387c5332def8b757dd"
    }))));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return getElement(this);
  }
};
var switchIds = 0;
Switch.style = WcsSwitchStyle0;
export {
  Switch as wcs_switch
};
//# sourceMappingURL=wcs-switch.entry-P35D74IP.js.map
