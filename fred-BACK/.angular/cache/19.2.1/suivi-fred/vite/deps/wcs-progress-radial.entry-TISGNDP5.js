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

// ../node_modules/wcs-core/dist/esm/wcs-progress-radial.entry.js
var progressRadialCss = ":host{display:inline-flex;--wcs-progress-radial-rail-width:calc(var(--wcs-semantic-spacing-base) / 4);--wcs-progress-radial-rail-spacing:calc(var(--wcs-semantic-spacing-base) / 4);--wcs-progress-radial-rail-color:var(--wcs-semantic-color-background-surface-tertiary);--wcs-progress-radial-value-background-color:var(--wcs-semantic-color-background-surface-brand);--wcs-progress-radial-label-color:var(--wcs-semantic-color-text-primary);--wcs-progress-radial-label-font-size:calc(1.5 * var(--wcs-semantic-font-size-m));--wcs-progress-radial-label-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-progress-radial-label-percentage-font-size:calc(var(--wcs-semantic-font-size-m) * 0.7);--wcs-progress-radial-animation-duration:var(--wcs-semantic-motion-duration-feedback-slower)}.progress-circle{position:relative;display:inline-block}.circle-rail{position:absolute;z-index:0;stroke:var(--wcs-progress-radial-rail-color);stroke-dasharray:var(--wcs-progress-radial-rail-width) var(--wcs-progress-radial-rail-spacing);fill:none}.progress-circle-figure{position:absolute;top:0;z-index:1;transform:rotate(-90deg);transition:stroke-dashoffset var(--wcs-progress-radial-animation-duration) ease-out}.progress-circle-label{top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:var(--wcs-progress-radial-label-font-size);font-weight:var(--wcs-progress-radial-label-font-weight);color:var(--wcs-progress-radial-label-color)}.progress-circle-label sup{font-size:var(--wcs-progress-radial-label-percentage-font-size);top:-0.85em;position:relative;line-height:0;vertical-align:baseline}.progress-circle-value{stroke:var(--wcs-progress-radial-value-background-color);stroke-linecap:round}.progress-circle-value,.progress-circle-meter{fill:none}";
var WcsProgressRadialStyle0 = progressRadialCss;
var PROGRESS_RADIAL_ARIA_INHERITED_ATTRS = ["title"];
var ProgressRadial = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.backgroundImageSize = 120;
    this.size = 120;
    this.showLabel = false;
    this.value = 0;
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, PROGRESS_RADIAL_ARIA_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeProgress, attr, value);
    });
  }
  render() {
    const {
      backgroundImageSize,
      halfSize
    } = {
      backgroundImageSize: this.backgroundImageSize,
      halfSize: this.backgroundImageSize / 2
    };
    return h("div", Object.assign({
      key: "c98910d8a132eacbf780f3d9e5a23553c14297a6",
      class: "progress-circle",
      "data-component": "radial-progress",
      style: this.getSize(),
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": this.value,
      "aria-valuetext": this.value + "%",
      ref: (el) => this.nativeProgress = el
    }, this.inheritedAttributes), h("svg", {
      key: "d8f0282d2b7332c29ed10936ca2cfc5c00c03e3d",
      "data-role": "figure",
      class: "circle-rail",
      viewBox: `0 0 ${backgroundImageSize} ${backgroundImageSize}`
    }, h("circle", {
      key: "4534f4ac6749d59a8a1bd4189f3f998bc0aae416",
      cx: halfSize,
      cy: halfSize,
      r: 54,
      "stroke-width": 12
    })), h("svg", {
      key: "daf5358b0148443292ce3ac84d55d849e48033bc",
      class: "progress-circle-figure",
      "data-role": "figure",
      viewBox: `0 0 ${backgroundImageSize} ${backgroundImageSize}`,
      style: this.getSvgStyle()
    }, h("circle", {
      key: "3df0779e14354a9084b5f9132660ac2e1d446028",
      class: "progress-circle-value",
      cx: halfSize,
      cy: halfSize,
      r: "54",
      "stroke-width": "12"
    })), this.showLabel && h("div", {
      key: "28212403f92e2a2f1b7515847e8e7cab95851413",
      class: "progress-circle-label",
      "data-role": "label"
    }, h("span", {
      key: "93b4d94b47b8289f113d717392824d3bca9f9ec9"
    }, h("span", {
      key: "e7093e3a2d3accdbc81ced41d8a02afa167483f6",
      "data-role": "labelvalue"
    }, this.value), h("sup", {
      key: "f9e66ca420de366cab09cc835d39e849030c4c8b"
    }, "%"))));
  }
  getSvgStyle() {
    return {
      "stroke-dasharray": "339.292",
      "stroke-dashoffset": `${339.292 - this.value / 100 * 339.292}`
    };
  }
  getSize() {
    return {
      "width": `${this.size}px`,
      "height": `${this.size}px`
    };
  }
  get el() {
    return getElement(this);
  }
};
ProgressRadial.style = WcsProgressRadialStyle0;
export {
  ProgressRadial as wcs_progress_radial
};
//# sourceMappingURL=wcs-progress-radial.entry-TISGNDP5.js.map
