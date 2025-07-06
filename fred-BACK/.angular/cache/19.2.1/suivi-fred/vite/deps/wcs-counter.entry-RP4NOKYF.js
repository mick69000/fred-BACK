import {
  inheritAriaAttributes,
  inheritAttributes,
  isEndKey,
  isHomeKey,
  isKeydown,
  isKeyup,
  parseCssTimeValueToMilliseconds,
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

// ../node_modules/wcs-core/dist/esm/wcs-counter.entry.js
var WcsCounterSizeValues = ["m", "l"];
function isWcsCounterSize(size) {
  return WcsCounterSizeValues.includes(size);
}
var counterCss = "@keyframes spin-animation-up{0%{transform:translateY(0);transform-origin:center;opacity:1}50%{opacity:0.5}100%{transform:translateY(30px);transform-origin:center;opacity:1}}@keyframes spin-animation-down{0%{transform:translateY(0);transform-origin:center;opacity:1}50%{opacity:0.5}100%{transform:translateY(-30px);transform-origin:center;opacity:1}}:host{--wcs-counter-border-radius:var(--wcs-semantic-border-radius-full);--wcs-counter-value-color-default:var(--wcs-semantic-color-text-primary);--wcs-counter-value-color-disabled:var(--wcs-semantic-color-text-tertiary);--wcs-counter-font-weight:var(--wcs-semantic-font-weight-heavy);--wcs-counter-height-m:var(--wcs-semantic-size-m);--wcs-counter-height-l:var(--wcs-semantic-size-l);--wcs-counter-font-size-m:var(--wcs-semantic-font-size-m);--wcs-counter-font-size-l:var(--wcs-semantic-font-size-l);--wcs-counter-padding-m:var(--wcs-semantic-spacing-small);--wcs-counter-padding-l:var(--wcs-semantic-spacing-base);--wcs-counter-background-color:var(--wcs-semantic-color-background-surface-secondary);--wcs-counter-gap:var(--wcs-counter-gap-size-m);--wcs-counter-gap-size-m:calc(1.5 * var(--wcs-semantic-spacing-base));--wcs-counter-gap-size-l:calc(2 * var(--wcs-semantic-spacing-base));--wcs-counter-outline-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-counter-transition-duration:var(--wcs-semantic-motion-duration-feedback-base);display:flex}:host .counter{box-sizing:border-box;height:var(--wcs-counter-height);font-family:var(--wcs-font-sans-serif);font-size:var(--wcs-counter-font-size);font-weight:var(--wcs-counter-font-weight);color:var(--wcs-counter-value-color-default);display:flex;align-items:center;padding:var(--wcs-counter-padding);width:fit-content;overflow:hidden;border-radius:var(--wcs-counter-border-radius);background-color:var(--wcs-counter-background-color);background-clip:padding-box;gap:var(--wcs-counter-gap)}:host .counter:focus-within{outline:none}:host .counter:has(.current-value:focus-visible){outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-counter-outline-color-focus);outline-offset:0;border-radius:var(--wcs-counter-border-radius)}@supports not selector(&:has(.current-value:focus-visible)){:host .counter:focus-within{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-counter-outline-color-focus);outline-offset:0;border-radius:var(--wcs-counter-border-radius)}}:host .counter-container{height:var(--wcs-counter-height);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative}:host .outliers{position:absolute}:host #outlier-down{top:calc(var(--wcs-counter-height) / 2 * -1)}:host #outlier-up{bottom:calc(var(--wcs-counter-height) / 2 * -1)}:host .current-value{outline:none}:host .animate-up{animation:spin-animation-up var(--wcs-counter-transition-duration) ease-in-out}:host .animate-down{animation:spin-animation-down var(--wcs-counter-transition-duration) ease-in-out}:host [hidden]{opacity:0}:host([size=m]){--wcs-counter-padding:var(--wcs-counter-padding-m);--wcs-counter-height:var(--wcs-counter-height-m);--wcs-counter-font-size:var(--wcs-counter-font-size-m);--wcs-counter-gap:var(--wcs-counter-gap-size-m)}:host([size=l]){--wcs-counter-padding:var(--wcs-counter-padding-l);--wcs-counter-height:var(--wcs-counter-height-l);--wcs-counter-font-size:var(--wcs-counter-font-size-l);--wcs-counter-gap:var(--wcs-counter-gap-size-l)}:host([disabled]){cursor:not-allowed}:host([disabled]) .counter{color:var(--wcs-counter-value-color-disabled)}";
var WcsCounterStyle0 = counterCss;
var COUNTER_INHERITED_ATTRS = ["tabindex", "title"];
var Counter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsChange = createEvent(this, "wcsChange", 7);
    this.wcsBlur = createEvent(this, "wcsBlur", 7);
    this.inheritedAttributes = {};
    this.ANIMATION_DURATION = 150;
    this.animateRunning = false;
    this.handleDecrement = () => {
      if (this.disabled) return;
      if (this.min === void 0 || this.value > this.min) {
        this.animateRunning = true;
        this.value -= this.step;
        this.notifyChange();
        this.animate("up");
      }
    };
    this.handleIncrement = () => {
      if (this.disabled) return;
      if (this.max === void 0 || this.value < this.max) {
        this.animateRunning = true;
        this.value += this.step;
        this.notifyChange();
        this.animate("down");
      }
    };
    this.animate = (direction) => {
      this.animateRunning = true;
      const outliers = Array.from(this.counterContainer.children).filter((span) => span.classList.contains("outliers"));
      this.counterContainer.classList.add("animate-" + direction);
      outliers.forEach((span) => {
        span.hidden = false;
      });
      setTimeout(() => {
        this.counterContainer.classList.remove("animate-" + direction);
        outliers.forEach((span) => {
          span.hidden = true;
        });
        this.displayedValue = this.value;
        this.animateRunning = false;
      }, this.ANIMATION_DURATION - 20);
    };
    this.size = "m";
    this.label = void 0;
    this.disabled = false;
    this.min = void 0;
    this.max = void 0;
    this.step = 1;
    this.value = void 0;
    this.displayedValue = void 0;
  }
  componentWillLoad() {
    this.handleValueChange();
    if (!isWcsCounterSize(this.size)) {
      console.warn(`Invalid size value for wcs-counter : "${this.size}". Must be one of "${WcsCounterSizeValues.join(", ")}"`);
      this.size = "m";
    }
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, COUNTER_INHERITED_ATTRS));
  }
  componentDidRender() {
    var _a, _b;
    this.ANIMATION_DURATION = (_b = parseCssTimeValueToMilliseconds((_a = window.getComputedStyle(this.el).getPropertyValue("--wcs-counter-transition-duration")) !== null && _a !== void 0 ? _a : "150ms")) !== null && _b !== void 0 ? _b : 150;
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.spinButton, attr, value);
    });
  }
  /**
   * Current value change => handle event and interval
   */
  valueChange(newVal, oldVal) {
    if (oldVal === newVal) return;
    this.handleValueChange();
  }
  handleValueChange() {
    this.setMinimumIfValueIsUndefinedOrNull();
    this.ensureValueIsNotOutOfMinMax();
    this.updateDisplayValueIfNoAnimationRunning();
  }
  updateDisplayValueIfNoAnimationRunning() {
    if (!this.animateRunning) {
      this.displayedValue = this.value;
    }
  }
  ensureValueIsNotOutOfMinMax() {
    if (this.max !== void 0 && this.value > this.max) {
      this.value = this.max;
    } else if (this.min !== void 0 && this.value < this.min) {
      this.value = this.min;
    }
  }
  setMinimumIfValueIsUndefinedOrNull() {
    var _a;
    if (this.value === void 0 || this.value === null) {
      this.value = (_a = this.min) !== null && _a !== void 0 ? _a : 0;
    }
  }
  onKeyDown(_event) {
    if (this.disabled) return;
    if (isKeyup(_event)) {
      _event.preventDefault();
      this.handleIncrement();
    }
    if (isKeydown(_event)) {
      _event.preventDefault();
      this.handleDecrement();
    }
    if (isHomeKey(_event)) {
      _event.preventDefault();
      if (this.min != null) {
        this.value = this.min;
        this.displayedValue = this.value;
        this.notifyChange();
      }
    }
    if (isEndKey(_event)) {
      _event.preventDefault();
      if (this.max != null) {
        this.value = this.max;
        this.displayedValue = this.value;
        this.notifyChange();
      }
    }
  }
  notifyChange() {
    this.wcsChange.emit({
      value: this.value
    });
  }
  render() {
    return h(Host, {
      key: "a957d407947a81ebdc48dde3977ab2b2a19006ad"
    }, h("div", {
      key: "dbc569a37c06b78b6e2dabb87731db62590b347f",
      class: "counter"
    }, h("wcs-button", {
      key: "c7a9f3e34ac9907789a4218fc44b34698a5897e9",
      class: "wcs-primary",
      shape: "round",
      size: "s",
      tabindex: -1,
      onClick: () => this.handleDecrement(),
      onBlur: (event) => this.wcsBlur.emit(event),
      disabled: this.disabled || this.value === this.min
    }, h("wcs-mat-icon", {
      key: "d6467a23f871a6beab70aff5d7c333c544eb9913",
      icon: "remove",
      size: "s"
    })), h("div", {
      key: "2a1fd878363e0667b2f14a5d767a0367aa6b7149",
      class: "counter-container",
      ref: (input) => this.counterContainer = input
    }, h("span", {
      key: "7741dec6872c3c1ba72b0191cb081b41cb43e303",
      id: "outlier-down",
      class: "outliers",
      hidden: true,
      "aria-hidden": "true"
    }, this.displayedValue - this.step), h("span", Object.assign({
      key: "20e00232af8397a0fc042f6570d4c1d74fd14bb5",
      tabindex: this.disabled ? -1 : 0,
      role: "spinbutton",
      ref: (el) => this.spinButton = el,
      class: "current-value",
      onBlur: (event) => this.wcsBlur.emit(event),
      onKeyDown: (event) => this.onKeyDown(event),
      "aria-disabled": this.disabled ? "true" : null,
      "aria-valuenow": this.value,
      "aria-valuetext": this.value,
      "aria-valuemin": this.min,
      "aria-valuemax": this.max,
      "aria-label": this.label
    }, this.inheritedAttributes), this.displayedValue), h("span", {
      key: "2794cbc223820ec7bd6fa055aed3ba6fe92fc319",
      id: "outlier-up",
      class: "outliers",
      hidden: true,
      "aria-hidden": "true"
    }, this.displayedValue + this.step)), h("wcs-button", {
      key: "cbce7b7dba69d9c0546152e6b283fd85f389e7fc",
      class: "wcs-primary",
      shape: "round",
      size: "s",
      tabindex: -1,
      onClick: () => this.handleIncrement(),
      onBlur: (event) => this.wcsBlur.emit(event),
      disabled: this.disabled || this.value === this.max
    }, h("wcs-mat-icon", {
      key: "af515fae89b19516f9706f1582a77b9daababb3b",
      icon: "add",
      size: "s"
    }))));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["valueChange"]
    };
  }
};
Counter.style = WcsCounterStyle0;
export {
  Counter as wcs_counter
};
//# sourceMappingURL=wcs-counter.entry-RP4NOKYF.js.map
