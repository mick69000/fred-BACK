import {
  clickInsideElement,
  isEnterKey,
  isEscapeKey,
  isMouseEvent
} from "./chunk-NAIC4MMY.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-editable-field.entry.js
var WcsEditableFieldSizeValues = ["m", "l"];
function isWcsEditableFieldSize(size) {
  return WcsEditableFieldSizeValues.includes(size);
}
var editableFieldCss = ":host{--wcs-editable-field-label-color:var(--wcs-semantic-color-text-primary);--wcs-editable-field-label-font-weight:var(--wcs-semantic-font-weight-book);--wcs-editable-field-label-gap:var(--wcs-semantic-spacing-base);--wcs-editable-field-label-font-size:var(--wcs-semantic-font-size-m);--wcs-editable-field-background-color:var(--wcs-semantic-color-background-control-default);--wcs-editable-field-value-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-editable-field-value-color-default:var(--wcs-semantic-color-text-primary);--wcs-editable-field-value-color-hover:var(--wcs-semantic-color-text-primary);--wcs-editable-field-value-color-readonly:var(--wcs-semantic-color-text-tertiary);--wcs-editable-field-height-m:var(--wcs-semantic-size-m);--wcs-editable-field-height-l:var(--wcs-semantic-size-l);--wcs-editable-field-font-size-m:var(--wcs-semantic-font-size-m);--wcs-editable-field-font-size-l:var(--wcs-semantic-font-size-l);--wcs-editable-field-border-radius:var(--wcs-semantic-border-radius-base);--wcs-editable-field-border-width:var(--wcs-semantic-border-width-default);--wcs-editable-field-border-width-focus:var(--wcs-semantic-border-width-large);--wcs-editable-field-border-width-hover:var(--wcs-semantic-border-width-default);--wcs-editable-field-border-color-default:var(--wcs-semantic-color-border-primary);--wcs-editable-field-border-color-hover:var(--wcs-semantic-color-border-control-focus);--wcs-editable-field-border-color-focus:var(--wcs-semantic-color-border-control-focus);--wcs-editable-field-border-style:var(--wcs-semantic-border-style-focus-control);--wcs-editable-field-padding-vertical-m:0;--wcs-editable-field-padding-vertical-l:0;--wcs-editable-field-padding-horizontal-m:var(--wcs-semantic-spacing-large);--wcs-editable-field-padding-horizontal-l:var(--wcs-semantic-spacing-large);--wcs-editable-field-icon-color-readonly:var(--wcs-semantic-color-text-tertiary);display:block}:host .display-none{display:none !important}:host .label{margin-bottom:var(--wcs-editable-field-label-gap);font-weight:var(--wcs-editable-field-label-font-weight);font-size:var(--wcs-editable-field-label-font-size);color:var(--wcs-editable-field-label-color)}:host .edit-container{display:flex;width:100%}:host .edit-container .visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0, 0, 0, 0);clip-path:inset(50%);white-space:nowrap;outline:0;outline-offset:0}:host button.display-container{width:100%;border:none;font-family:inherit;text-align:start;box-sizing:border-box;min-height:var(--wcs-editable-field-host-height);white-space:break-spaces;display:flex;justify-content:space-between;align-items:center;background-color:var(--wcs-editable-field-background-color);border-radius:var(--wcs-editable-field-border-radius);font-size:var(--wcs-editable-field-font-size);line-height:1.5;font-weight:var(--wcs-editable-field-value-font-weight);color:var(--wcs-editable-field-value-color-default);padding:var(--wcs-editable-field-host-padding);outline:var(--wcs-editable-field-border-style) var(--wcs-editable-field-border-width) var(--wcs-editable-field-border-color-default)}:host button.display-container wcs-mat-icon{display:none}:host .load-container{box-sizing:border-box;min-height:var(--wcs-editable-field-host-height);white-space:pre;display:flex;justify-content:space-between;background-color:var(--wcs-editable-field-background-color);border-radius:var(--wcs-editable-field-border-radius);font-size:var(--wcs-editable-field-font-size);line-height:1.5;font-weight:var(--wcs-editable-field-value-font-weight);color:var(--wcs-editable-field-value-color-default);padding:var(--wcs-editable-field-host-padding);outline:var(--wcs-editable-field-border-style) var(--wcs-editable-field-border-width) var(--wcs-editable-field-border-color-default);align-items:center}:host wcs-spinner{height:24px;width:24px}:host .readonly-icon{fill:var(--wcs-editable-field-icon-color-readonly)}:host([readonly]){--wcs-editable-field-background-color:var(--wcs-semantic-color-background-control-readonly)}:host([readonly]) .display-container{color:var(--wcs-editable-field-value-color-readonly)}:host([readonly]) .display-container:focus-visible{outline:var(--wcs-editable-field-border-style) var(--wcs-editable-field-border-width-focus) var(--wcs-editable-field-border-color-default)}:host(:not([readonly])) .display-container:hover wcs-mat-icon,:host(:not([readonly])) .display-container:focus-visible wcs-mat-icon{display:flex;align-items:center}:host(:not([readonly])) .display-container:hover{color:var(--wcs-editable-field-value-color-hover);cursor:pointer;outline:var(--wcs-editable-field-border-style) var(--wcs-editable-field-border-width-hover) var(--wcs-editable-field-border-color-hover)}:host(:not([readonly])) .display-container:focus-visible{outline:var(--wcs-editable-field-border-style) var(--wcs-editable-field-border-width-focus) var(--wcs-editable-field-border-color-focus)}:host([size=l]){--wcs-editable-field-host-padding:var(--wcs-editable-field-padding-vertical-l) var(--wcs-editable-field-padding-horizontal-l);--wcs-editable-field-host-height:var(--wcs-editable-field-height-l);--wcs-editable-field-font-size:var(--wcs-editable-field-font-size-l)}:host([size=m]){--wcs-editable-field-host-padding:var(--wcs-editable-field-padding-vertical-m) var(--wcs-editable-field-padding-horizontal-m);--wcs-editable-field-host-height:var(--wcs-editable-field-height-m);--wcs-editable-field-font-size:var(--wcs-editable-field-font-size-m)}";
var WcsEditableFieldStyle0 = editableFieldCss;
var EditableComponentState;
(function(EditableComponentState2) {
  EditableComponentState2[EditableComponentState2["DISPLAY"] = 0] = "DISPLAY";
  EditableComponentState2[EditableComponentState2["EDIT"] = 1] = "EDIT";
  EditableComponentState2[EditableComponentState2["LOAD"] = 2] = "LOAD";
})(EditableComponentState || (EditableComponentState = {}));
var EDIT_ARIA_LABEL = "Éditer";
var DELAY_BEFORE_FOCUS = 20;
var EditableField = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsChange = createEvent(this, "wcsChange", 7);
    this.spiedElement = null;
    this.currentValue = null;
    this.currentState = EditableComponentState.DISPLAY;
    this.type = "input";
    this.label = void 0;
    this.readonly = false;
    this.value = void 0;
    this.validateFn = void 0;
    this.formatFn = void 0;
    this.errorMsg = null;
    this.size = "m";
    this.isError = false;
  }
  componentWillLoad() {
    if (!isWcsEditableFieldSize(this.size)) {
      console.warn(`Invalid size value for wcs-editable-field : "${this.size}". Must be one of "${WcsEditableFieldSizeValues.join(", ")}"`);
      this.size = "m";
    }
    this.currentValue = this.value;
  }
  componentDidLoad() {
    const assignedElements = this.el.shadowRoot.querySelector("slot").assignedElements();
    switch (this.type) {
      case "input":
        this.initWithInput(assignedElements);
        break;
      case "textarea":
        this.initWithTextArea(assignedElements);
        break;
      case "select":
        this.initWithSelect(assignedElements);
        break;
    }
  }
  disconnectedCallback() {
    this.cleanUpSpiedElementEventListeners();
  }
  keyboardSubmitHandler(event) {
    const shouldValidateOnEnterKey = this.type === "textarea" || this.type === "select" ? isEnterKey(event) && event.ctrlKey : isEnterKey(event);
    if (shouldValidateOnEnterKey) {
      this.sendCurrentValue();
    }
    if (isEscapeKey(event)) {
      this.discardChanges();
    }
  }
  onWcsInputOrChange(event) {
    event.stopImmediatePropagation();
    const value = this.type === "select" ? event.detail.value : event.detail.target.value;
    this.currentValue = value;
    if (this.validateFn) {
      this.isError = !this.validateFn(this.currentValue);
    }
  }
  cleanUpSpiedElementEventListeners() {
    var _a, _b, _c;
    (_a = this.spiedElement) === null || _a === void 0 ? void 0 : _a.removeEventListener("keydown", this.onInputKeydownCallback);
    (_b = this.spiedElement) === null || _b === void 0 ? void 0 : _b.removeEventListener("wcsInput", this.onWcsInputOrChangeCallback);
    (_c = this.spiedElement) === null || _c === void 0 ? void 0 : _c.removeEventListener("wcsChange", this.onWcsInputOrChangeCallback);
  }
  initWithInput(assignedElements) {
    const element = assignedElements.filter((x) => {
      return x.tagName === "WCS-INPUT";
    })[0];
    if (!element) throw new Error("You must provide a slotted input element to handle edition");
    this.spiedElement = element;
    this.addWcsInputEventHandler(this.spiedElement);
    this.addKeyDownHandler(this.spiedElement);
  }
  initWithTextArea(assignedElements) {
    const element = assignedElements.filter((x) => {
      return x.tagName === "WCS-TEXTAREA";
    })[0];
    if (!element) throw new Error("You must provide a slotted textarea element to handle edition");
    this.spiedElement = element;
    this.addWcsInputEventHandler(this.spiedElement);
    this.addKeyDownHandler(this.spiedElement);
  }
  initWithSelect(assignedElements) {
    const element = assignedElements.filter((x) => {
      return x.tagName === "WCS-SELECT";
    })[0];
    if (!element) throw new Error("You must provide a slotted select element to handle edition");
    this.spiedElement = element;
    this.addWcsChangeEventHandler(this.spiedElement);
    this.addKeyDownHandler(this.spiedElement);
  }
  /**
   * This method subscribes the component to the change events produced by the other WCS components
   * (provided by the user in slot)
   * @param elt the element to subscribe to
   * @private
   */
  addWcsChangeEventHandler(elt) {
    this.onWcsInputOrChangeCallback = this.onWcsInputOrChange.bind(this);
    elt.addEventListener("wcsChange", this.onWcsInputOrChangeCallback);
  }
  /**
   * This method subscribes the component to the input events produced by the other WCS components
   * @param elt the element to subscribe to
   * @private
   */
  addWcsInputEventHandler(elt) {
    this.onWcsInputOrChangeCallback = this.onWcsInputOrChange.bind(this);
    elt.addEventListener("wcsInput", this.onWcsInputOrChangeCallback);
  }
  /**
   * This method subscribes the component to the keydown events produced by the other WCS components
   * @param elt the element to subscribe to
   * @private
   */
  addKeyDownHandler(elt) {
    this.onInputKeydownCallback = this.keyboardSubmitHandler.bind(this);
    elt.addEventListener("keydown", this.onInputKeydownCallback);
  }
  focusEditModeBtn() {
    setTimeout(() => {
      var _a;
      (_a = this.editModeBtn) === null || _a === void 0 ? void 0 : _a.focus();
    }, DELAY_BEFORE_FOCUS);
  }
  sendCurrentValue() {
    if (this.currentState === EditableComponentState.EDIT) {
      if (this.value === this.currentValue) {
        this.currentState = EditableComponentState.DISPLAY;
        this.focusEditModeBtn();
      } else {
        this.isError = this.validateFn ? !this.validateFn(this.currentValue) : false;
        if (!this.isError) {
          this.currentState = EditableComponentState.LOAD;
          this.wcsChange.emit({
            newValue: this.currentValue,
            successHandler: () => this.forceDisplayStateAndValidate(),
            errorHandler: () => this.errorHandler()
          });
        }
      }
    }
  }
  discardChanges() {
    this.currentValue = this.value;
    this.currentState = EditableComponentState.DISPLAY;
    this.isError = false;
    this.focusEditModeBtn();
  }
  forceDisplayStateAndValidate() {
    if (this.currentState === EditableComponentState.LOAD) {
      this.value = this.currentValue;
      this.currentState = EditableComponentState.DISPLAY;
      this.focusEditModeBtn();
    } else {
      throw new Error("You cannot set display state from " + EditableComponentState[this.currentState] + " state");
    }
  }
  // Process only mouse clicks, to avoid interfering with keyboard triggered button clicks. 
  // In some browsers, pressing "Enter" or "Space" while focused on a button generates a click event
  // with `event.detail` set to 0. It's a keyboard triggered click, not a real mouse click. 
  onWindowClickEvent(event) {
    if (isMouseEvent(event) && event.detail !== 0 && !clickInsideElement(event, this.el)) {
      if (this.currentState === EditableComponentState.EDIT) {
        if (this.isError) {
          this.discardChanges();
        } else {
          this.sendCurrentValue();
        }
      }
    }
  }
  /**
   * discard changes and force component state to DISPLAY
   * <br/>
   * This method must be call when component is in LOAD state
   */
  errorHandler() {
    this.discardChanges();
  }
  onValueChange() {
    this.currentState = EditableComponentState.DISPLAY;
  }
  onDisplayContainerClick() {
    if (this.currentState === EditableComponentState.DISPLAY && this.readonly === false) {
      this.currentState = EditableComponentState.EDIT;
      this.spiedElement["value"] = this.currentValue;
      if (this.validateFn) {
        this.isError = !this.validateFn(this.currentValue);
      }
      setTimeout(() => {
        if (this.type === "input") {
          this.spiedElement.focus();
        } else if (this.type === "textarea") {
          this.spiedElement.fitContent();
          this.spiedElement.focus();
        }
      }, DELAY_BEFORE_FOCUS);
    }
  }
  getReadonlySvgIcon() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "26",
      height: "24",
      viewBox: "0 0 27 25",
      class: "readonly-icon"
    }, h("path", {
      d: "M26.79,25.05H1.21a.73.73,0,0,0,0,1.45H26.79a.73.73,0,0,0,0-1.45Z",
      transform: "translate(-0.5 -1.5)"
    }), h("path", {
      d: "M19.8,8.87h-.61V6.73a5.23,5.23,0,0,0-10.46,0V8.87H8.2a1.63,1.63,0,0,0-1.63,1.62V21.32A1.62,1.62,0,0,0,8.2,22.94H19.8a1.62,1.62,0,0,0,1.63-1.62V10.49A1.63,1.63,0,0,0,19.8,8.87ZM10.93,6.73a3,3,0,1,1,6.06,0V8.87H10.93Zm3,14.15a5,5,0,1,1,5-5A5,5,0,0,1,14,20.88Z",
      transform: "translate(-0.5 -1.5)"
    }), h("path", {
      d: "M14,12.62a3.29,3.29,0,1,0,3.29,3.29A3.29,3.29,0,0,0,14,12.62Zm0,4.75a1.47,1.47,0,1,1,1.47-1.46A1.46,1.46,0,0,1,14,17.37Z",
      transform: "translate(-0.5 -1.5)"
    }));
  }
  formatValues() {
    let formattedValue = this.value;
    let formattedCurrentValue = this.currentValue;
    if (this.formatFn) {
      formattedValue = this.formatFn(this.value);
      formattedCurrentValue = this.formatFn(this.currentValue);
    }
    if (Array.isArray(this.value)) {
      formattedValue = this.value.join(", ");
    }
    if (Array.isArray(this.currentValue)) {
      formattedCurrentValue = this.currentValue.join(", ");
    }
    return {
      formattedValue: formattedValue ? h("span", null, formattedValue) : h("span", null),
      formattedValueText: formattedValue,
      formattedCurrentValue: formattedCurrentValue ? h("span", null, formattedCurrentValue) : h("span", null)
    };
  }
  render() {
    const {
      formattedValue,
      formattedValueText,
      formattedCurrentValue
    } = this.formatValues();
    return h(Host, {
      key: "69142544bd835d3f7f161ca5174f78b957e9c65e"
    }, h("div", {
      key: "b0d2d5fca3fb3297ea9a66cfd715d987714b60c1",
      class: "label"
    }, this.label), h("button", {
      key: "cc69601762a0f05bcfb626730ee9ac210a052c13",
      type: "button",
      class: "display-container " + (this.currentState !== EditableComponentState.DISPLAY ? "display-none" : ""),
      onClick: () => this.onDisplayContainerClick(),
      ref: (el) => this.editModeBtn = el,
      "aria-label": `${EDIT_ARIA_LABEL} ${this.label} ${formattedValueText}`
    }, formattedValue, h("wcs-mat-icon", {
      key: "eda7d88109e0b5b55d913eae61861a5c63cc79d3",
      icon: "edit",
      size: "s"
    }), this.readonly ? this.getReadonlySvgIcon() : null), h("div", {
      key: "37aa4ca56e3e52bb28b559e11738b79d0b0b7164",
      class: "load-container " + (this.currentState !== EditableComponentState.LOAD ? "display-none" : "")
    }, formattedCurrentValue, h("wcs-spinner", {
      key: "b2015422620aae0c7101c06d3693cf6356eba419"
    })), h("wcs-form-field", {
      key: "391ef6b73c942817994a133b191a1c81e7565fe7",
      "is-error": this.isError,
      class: "edit-container " + (this.currentState !== EditableComponentState.EDIT ? "display-none" : "")
    }, h("wcs-label", {
      key: "816e06561d96bdb9ca19c27d1329a0fe8f4d581f",
      class: "visually-hidden"
    }, this.label), h("slot", {
      key: "a7855da5f41a873d01298218a32991010e589e34"
    }), this.isError && this.errorMsg ? h("wcs-error", null, this.errorMsg) : null));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["onValueChange"]
    };
  }
};
EditableField.style = WcsEditableFieldStyle0;
export {
  EditableField as wcs_editable_field
};
//# sourceMappingURL=wcs-editable-field.entry-QTPHREFO.js.map
