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

// ../node_modules/wcs-core/dist/esm/wcs-horizontal-stepper.entry.js
var HorizontalStep = ({
  step,
  checkOnComplete,
  complete,
  passed,
  active,
  first,
  disable,
  onClick
}) => {
  return (
    /*
    When using list-style: none in CSS, it removes the semantic of the list in Safari.
    So we add role="list" manually to provide semantic to screen readers
    https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html
    https://css-tricks.com/snippets/css/remove-list-markers-without-affecting-semantics/
     */
    h("li", {
      role: "listitem",
      class: "graphic-step",
      "data-first": first
    }, first ? null : h("wcs-progress-bar", {
      value: passed ? 100 : 0,
      "aria-hidden": "true"
    }), h("wcs-button", {
      style: {
        "backgroundColor": "white"
      },
      "aria-label": step.text,
      onClick: (_) => onClick(step),
      ref: (el) => {
        active ? el.setAriaAttribute("aria-current", "step") : el.setAriaAttribute("aria-current", null);
      },
      shape: "round",
      mode: (active || complete) && !step.disable ? "plain" : "stroked",
      disabled: disable
    }, getButtonContent(step.button, checkOnComplete, complete, active)))
  );
};
var getButtonContent = (stepButton, checkOnComplete, complete, active) => {
  if (checkOnComplete && complete && !active) {
    return h("wcs-mat-icon", {
      size: "m",
      icon: "done",
      family: "outlined"
    });
  }
  switch (stepButton.kind) {
    case "Icon":
      return h("wcs-mat-icon", {
        size: "m",
        icon: stepButton.iconName,
        family: stepButton.family ? stepButton.family : "outlined"
      });
    case "Text":
      return stepButton.text;
  }
};
var horizontalStepperCss = ":host{--wcs-horizontal-step-text-color-default:var(--wcs-semantic-color-text-secondary);--wcs-horizontal-step-text-color-active:var(--wcs-semantic-color-foreground-brand);--wcs-horizontal-step-text-color-disabled:var(--wcs-semantic-color-text-disabled);display:block}:host .steps{list-style:none;margin:0;padding:0;display:flex;flex-direction:row;flex:1}:host .graphic-step{display:flex;position:relative;flex-direction:row;flex:1;align-items:center}:host .graphic-step wcs-button{z-index:1;mix-blend-mode:darken}:host .graphic-step[data-first]{flex:0}:host wcs-progress-bar{--wcs-progress-bar-border-radius:0;flex:1;margin:0 -1px}:host .label-container{justify-content:space-between;display:flex;flex-direction:row;margin-top:var(--wcs-semantic-spacing-base)}:host .label-container>*{width:100%;text-align:center;flex:1;color:var(--wcs-horizontal-step-text-color-default);font-weight:500}:host .label-container>*[data-disable]{color:var(--wcs-horizontal-step-text-color-disabled)}:host .label-container>*[data-current]{color:var(--wcs-horizontal-step-text-color-active)}:host .label-container>div[data-first]{margin-right:calc(var(--wcs-semantic-size-m, 40px) / 2);text-align:left;flex:0.5}:host .label-container>div[data-last]{margin-left:calc(var(--wcs-semantic-size-m, 40px) / 2);text-align:right;flex:0.5}";
var WcsHorizontalStepperStyle0 = horizontalStepperCss;
var HorizontalStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsHorizontalStepClick = createEvent(this, "wcsHorizontalStepClick", 7);
    this.currentStep = 0;
    this.steps = void 0;
    this.mode = "nonLinear";
    this.checkOnComplete = void 0;
    this.internalCurrentStepIndex = void 0;
  }
  componentWillLoad() {
    this.internalCurrentStepIndex = this.currentStep;
    if (this.steps.length < 1) {
      throw new Error("You must add at least one step");
    }
  }
  onCurrentStepChange(newValue, oldValue) {
    if (this.internalCurrentStepIndex !== void 0) {
      const stepInterval = Math.abs(oldValue - newValue);
      this.el.style.setProperty("--wcs-progress-bar-animation-duration", 350 / stepInterval + "ms");
      if (newValue !== oldValue) {
        for (let i = 0; i < stepInterval; i++) {
          setTimeout(() => {
            this.internalCurrentStepIndex -= oldValue - newValue > 0 ? 1 : -1;
            if (i === stepInterval - 1) {
              this.el.style.removeProperty("--wcs-progress-bar-animation-duration");
            }
          }, i * (375 / stepInterval));
        }
      }
    }
  }
  previous() {
    return __async(this, null, function* () {
      this.navigateToIndex(this.internalCurrentStepIndex - 1, "backward");
    });
  }
  next() {
    return __async(this, null, function* () {
      this.navigateToIndex(this.internalCurrentStepIndex + 1, "forward");
    });
  }
  navigateToIndex(index, direction) {
    var _a, _b;
    if (index >= 0 && index <= this.steps.length - 1) {
      if (((_a = this.steps[index]) === null || _a === void 0 ? void 0 : _a.complete) || ((_b = this.steps[index]) === null || _b === void 0 ? void 0 : _b.disable)) {
        this.navigateToIndex(index + (direction === "forward" ? 1 : -1), direction);
      } else {
        this.currentStep = index;
      }
    }
  }
  render() {
    return h(Host, {
      key: "a46e297897314208c54f827c46abe3d3dccaeec3"
    }, h("ul", {
      key: "4ff21517c120a746fe2d7891f6bbe81e588107ad",
      role: "list",
      class: "steps"
    }, this.steps.map((step, index) => h(HorizontalStep, {
      step,
      passed: index <= this.internalCurrentStepIndex,
      checkOnComplete: this.checkOnComplete,
      complete: this.isComplete(step, index),
      active: index === this.internalCurrentStepIndex,
      first: index === 0,
      disable: this.isDisable(step, index),
      onClick: (step2) => this.wcsHorizontalStepClick.emit({
        step: step2,
        index
      })
    }))), this.renderLabels());
  }
  isComplete(step, index) {
    return index <= this.internalCurrentStepIndex || step.complete;
  }
  renderLabels() {
    if (this.steps.map((s) => s.text).every((s) => !s)) {
      return null;
    } else {
      return h("div", {
        class: "label-container",
        "aria-hidden": "true"
      }, this.steps.map((step, index) => h("div", {
        "data-first": index === 0,
        "data-current": index === this.internalCurrentStepIndex && !step.disable,
        "data-disable": this.isDisable(step, index),
        "data-last": index === this.steps.length - 1
      }, h("span", null, step.text))));
    }
  }
  isDisable(step, index) {
    return step.disable || this.mode === "linear" && !this.isNextPossibleStep(index) && this.internalCurrentStepIndex < index;
  }
  isNextPossibleStep(index) {
    var _a;
    if (index === 0) return true;
    if (((_a = this.steps[index - 1]) === null || _a === void 0 ? void 0 : _a.disable) || this.previousStepIsCompleteAndNotActive(index)) return this.isNextPossibleStep(index - 1);
    return this.internalCurrentStepIndex === index - 1;
  }
  previousStepIsCompleteAndNotActive(index) {
    var _a;
    return ((_a = this.steps[index - 1]) === null || _a === void 0 ? void 0 : _a.complete) && index - 1 !== this.internalCurrentStepIndex;
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "currentStep": ["onCurrentStepChange"]
    };
  }
};
HorizontalStepper.style = WcsHorizontalStepperStyle0;
export {
  HorizontalStepper as wcs_horizontal_stepper
};
//# sourceMappingURL=wcs-horizontal-stepper.entry-J2BZIZSI.js.map
