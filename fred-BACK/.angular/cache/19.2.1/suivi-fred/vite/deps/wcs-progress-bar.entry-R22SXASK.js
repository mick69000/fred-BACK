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

// ../node_modules/wcs-core/dist/esm/wcs-progress-bar.entry.js
var progressBarCss = ":host{--wcs-progress-bar-border-radius:var(--wcs-semantic-border-radius-full);--wcs-progress-bar-border-radius-small:var(--wcs-semantic-border-radius-small);--wcs-progress-bar-animation-duration:var(--wcs-semantic-motion-duration-feedback-slower);--wcs-progress-bar-height-m:calc(var(--wcs-semantic-size-m) / 4);--wcs-progress-bar-height-s:calc(var(--wcs-semantic-size-s) / 6);--wcs-progress-bar-background-color:transparent;--wcs-progress-bar-rail-color:var(--wcs-semantic-color-background-surface-tertiary);--wcs-progress-bar-rail-spacing:var(--wcs-semantic-spacing-small);--wcs-progress-bar-gap-s:var(--wcs-semantic-spacing-small);--wcs-progress-bar-gap-m:var(--wcs-semantic-spacing-base);--wcs-progress-bar-indicator-color:var(--wcs-semantic-color-background-surface-brand);--wcs-progress-bar-label-color:var(--wcs-semantic-color-text-primary);--wcs-progress-bar-label-font-size-s:var(--wcs-semantic-font-size-s);--wcs-progress-bar-label-font-size-m:calc(1.5 * var(--wcs-semantic-font-size-m));--wcs-progress-bar-label-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-progress-bar-label-percentage-font-size-s:calc(var(--wcs-semantic-font-size-s) * 0.7);--wcs-progress-bar-label-percentage-font-size-m:calc(var(--wcs-semantic-font-size-m) * 0.7);--wcs-progress-bar-label-top-space:var(--wcs-semantic-spacing-large)}:host([size=s]) .progress{height:var(--wcs-progress-bar-height-s);background-color:var(--wcs-progress-bar-background-color);background-image:none;background-size:auto;border-radius:var(--wcs-progress-bar-border-radius-small)}:host([size=s]) .progress .progress-label{font-size:var(--wcs-progress-bar-label-font-size-s);bottom:calc(100% + var(--wcs-progress-bar-gap-s))}:host([size=s]) .progress .progress-label sup{font-size:var(--wcs-progress-bar-label-percentage-font-size-s)}.progress{display:flex;height:var(--wcs-progress-bar-height-m);color:var(--wcs-progress-bar-label-color);background-color:var(--wcs-progress-bar-background-color);background-image:linear-gradient(90deg, var(--wcs-progress-bar-rail-color), 50%, transparent 50%);background-size:var(--wcs-progress-bar-rail-spacing) var(--wcs-progress-bar-height-m);border-radius:var(--wcs-progress-bar-border-radius)}.progress.has-label{margin-top:var(--wcs-progress-bar-label-top-space)}.progress.value-zero>.progress-bar>.progress-label{right:unset}.progress-bar{position:relative;display:flex;flex-direction:column;justify-content:center;color:var(--wcs-progress-bar-label-color);text-align:center;background-color:var(--wcs-progress-bar-indicator-color);border-radius:var(--wcs-progress-bar-border-radius);transition:width var(--wcs-progress-bar-animation-duration) ease-out}.progress-label{line-height:1;position:absolute;right:0;bottom:calc(100% + var(--wcs-progress-bar-gap-m));display:flex;flex-direction:row;align-items:flex-start;font-size:var(--wcs-progress-bar-label-font-size-m);font-weight:var(--wcs-progress-bar-label-font-weight)}.progress-label sup{font-size:var(--wcs-progress-bar-label-percentage-font-size-m)}";
var WcsProgressBarStyle0 = progressBarCss;
var PROGRESS_BAR_ARIA_INHERITED_ATTRS = ["title"];
var ProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.size = "m";
    this.showLabel = false;
    this.value = 0;
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, PROGRESS_BAR_ARIA_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeProgress, attr, value);
    });
  }
  render() {
    const style = {
      width: this.value + "%"
    };
    return h("div", Object.assign({
      key: "9339cb3c4ef89618cb45119495d3601ce2110d3d",
      class: this.rootClasses(),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": this.value,
      "aria-valuetext": this.value + "%",
      ref: (el) => this.nativeProgress = el
    }, this.inheritedAttributes), h("div", {
      key: "8b54ef388bcd4e2bff826a18374c4732f7d0e384",
      class: "progress-bar",
      style
    }, this.showLabel && h("span", {
      key: "f50f5879441f22db9552f6bbaaca3ede6f23a678",
      class: "progress-label"
    }, this.value, h("sup", {
      key: "b10471901b5d3efc0ae95d3a1de822ead1720b87"
    }, "%"))));
  }
  rootClasses() {
    let classes = "progress";
    if (this.showLabel) classes += " has-label";
    if (this.value === 0) classes += " value-zero";
    return classes;
  }
  get el() {
    return getElement(this);
  }
};
ProgressBar.style = WcsProgressBarStyle0;
export {
  ProgressBar as wcs_progress_bar
};
//# sourceMappingURL=wcs-progress-bar.entry-R22SXASK.js.map
