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

// ../node_modules/wcs-core/dist/esm/wcs-checkbox.entry.js
var checkboxCss = ':host{--wcs-checkbox-border-color:var(--wcs-checkbox-border-color-default);--wcs-checkbox-border-color-default:var(--wcs-semantic-color-border-control-indicator-default);--wcs-checkbox-border-color-hover:var(--wcs-semantic-color-border-control-indicator-hover);--wcs-checkbox-border-color-disabled:var(--wcs-semantic-color-background-control-indicator-disabled);--wcs-checkbox-border-color-selected:var(--wcs-semantic-color-border-control-indicator-selected);--wcs-checkbox-border-color-indeterminate:var(--wcs-semantic-color-border-control-indicator-selected);--wcs-checkbox-border-radius:calc(0.5 * var(--wcs-semantic-size-base));--wcs-checkbox-border-width:var(--wcs-semantic-border-width-large);--wcs-checkbox-size:calc(2 * var(--wcs-semantic-size-base));--wcs-checkbox-text-color-default:var(--wcs-semantic-color-text-secondary);--wcs-checkbox-text-color-disabled:var(--wcs-semantic-color-text-tertiary);--wcs-checkbox-text-color-hover:var(--wcs-semantic-color-text-secondary);--wcs-checkbox-text-color-selected:var(--wcs-semantic-color-text-primary);--wcs-checkbox-text-font-size:var(--wcs-semantic-font-size-label-1);--wcs-checkbox-text-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-checkbox-background-color-default:transparent;--wcs-checkbox-background-color-hover:var(--wcs-semantic-color-background-control-indicator-hover);--wcs-checkbox-background-color-disabled:var(--wcs-semantic-color-background-control-indicator-disabled);--wcs-checkbox-background-color-selected:var(--wcs-semantic-color-background-control-indicator-selected);--wcs-checkbox-background-color-indeterminate:var(--wcs-semantic-color-background-control-indicator-selected);--wcs-checkbox-outline-radius-focus:var(--wcs-semantic-border-radius-base);--wcs-checkbox-outline-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-checkbox-gap:var(--wcs-semantic-spacing-base);--wcs-checkmark-color:var(--wcs-semantic-color-foreground-control-indicator-selected);--wcs-checkmark-height:0.5rem;--wcs-checkmark-width:0.1875rem;--wcs-checkmark-border-width:0.125rem;--wcs-indeterminate-bar-width:0.625rem;--wcs-indeterminate-bar-height:0.125rem;--wcs-indeterminate-bar-border-radius:0.0625rem;--wcs-indeterminate-bar-background-color:var(--wcs-semantic-color-foreground-control-indicator-selected);--wcs-checkbox-transition-duration:var(--wcs-semantic-motion-duration-feedback-base);display:inline-flex}:host([disabled]) .text{color:var(--wcs-checkbox-text-color-disabled)}:host([disabled]) .wcs-checkmark{border-color:var(--wcs-checkbox-border-color-disabled)}:host([disabled]) .wcs-container{cursor:not-allowed}:host([checked]:not([indeterminate][disabled])){--wcs-checkbox-border-color:var(--wcs-checkbox-border-color-selected)}.wcs-checkmark{transition-property:border-color, background-color, color;transition:var(--wcs-checkbox-transition-duration) ease-in-out}.wcs-container{position:relative;font-size:var(--wcs-checkbox-text-font-size);font-weight:var(--wcs-checkbox-text-font-weight);user-select:none;display:flex;gap:var(--wcs-checkbox-gap)}.wcs-container:not([aria-disabled]){cursor:pointer}:host([label-alignment=top]) .wcs-container{align-items:start}:host([label-alignment=center]) .wcs-container{align-items:center}:host([label-alignment=bottom]) .wcs-container{align-items:flex-end}.wcs-container input{position:absolute;opacity:0;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.wcs-container:hover:not([aria-disabled]) .text,input:focus .text{color:var(--wcs-checkbox-text-color-hover)}.wcs-container:hover:not([aria-disabled]) .wcs-checkmark,input:focus .wcs-checkmark{border-color:var(--wcs-checkbox-border-color-hover)}.wcs-container:has(input:focus-visible){outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-checkbox-outline-color-focus);outline-offset:var(--wcs-semantic-spacing-small);border-radius:var(--wcs-checkbox-outline-radius-focus)}@supports not selector(.wcs-container:has(input:focus-visible)){.wcs-container:focus-within{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-checkbox-outline-color-focus);outline-offset:var(--wcs-semantic-spacing-small);border-radius:var(--wcs-checkbox-outline-radius-focus)}}.wcs-checkmark{flex:0 0 var(--wcs-checkbox-size);width:var(--wcs-checkbox-size);height:var(--wcs-checkbox-size);background-color:var(--wcs-checkbox-background-color-default);border:var(--wcs-checkbox-border-width) solid var(--wcs-checkbox-border-color);border-radius:var(--wcs-checkbox-border-radius);box-sizing:border-box}:host([indeterminate]) .wcs-checkmark{border-color:var(--wcs-checkbox-border-color-indeterminate);background:var(--wcs-checkbox-background-color-indeterminate)}:host([indeterminate][disabled]) .wcs-checkmark{border-color:var(--wcs-checkbox-border-color-disabled);background:var(--wcs-checkbox-background-color-disabled)}.wcs-container:not([aria-disabled]) input:checked~.wcs-checkmark{background-color:var(--wcs-checkbox-background-color-selected)}.wcs-container[aria-disabled] input:checked~.wcs-checkmark{background-color:var(--wcs-checkbox-background-color-disabled)}.wcs-checkmark:after{content:"";position:absolute;display:none}.wcs-checkmark{position:relative}:host([checked]),:host([indeterminate]){}:host([checked]) .wcs-container input~.wcs-checkmark:after,:host([indeterminate]) .wcs-container input~.wcs-checkmark:after{display:flex}:host([checked]) .wcs-container:not([aria-disabled]):hover .wcs-checkmark,:host([indeterminate]) .wcs-container:not([aria-disabled]):hover .wcs-checkmark{background-color:var(--wcs-checkbox-background-color-hover)}:host(:not([indeterminate])){}:host(:not([indeterminate])) .wcs-container .wcs-checkmark:after{left:0.25rem;width:var(--wcs-checkmark-width);height:var(--wcs-checkmark-height);border:solid var(--wcs-checkmark-color, white);border-width:0 var(--wcs-checkmark-border-width) var(--wcs-checkmark-border-width) 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}:host([indeterminate]) .wcs-container .wcs-checkmark:after{position:absolute;background-color:var(--wcs-indeterminate-bar-background-color);left:calc(50% - var(--wcs-indeterminate-bar-width) / 2);top:calc(50% - var(--wcs-indeterminate-bar-height) / 2);width:var(--wcs-indeterminate-bar-width);height:var(--wcs-indeterminate-bar-height);border-radius:var(--wcs-indeterminate-bar-border-radius)}.wcs-container:not([aria-disabled]) input:not(:checked)~.text{color:var(--wcs-checkbox-text-color-default);font-weight:var(--wcs-checkbox-text-font-weight)}.wcs-container:not([aria-disabled]) input:checked~.text{color:var(--wcs-checkbox-text-color-selected);font-weight:var(--wcs-checkbox-text-font-weight)}.hidden{display:none}';
var WcsCheckboxStyle0 = checkboxCss;
var CHECKBOX_INHERITED_ATTRS = ["tabindex", "title"];
var Checkbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsChange = createEvent(this, "wcsChange", 7);
    this.wcsFocus = createEvent(this, "wcsFocus", 7);
    this.wcsBlur = createEvent(this, "wcsBlur", 7);
    this.inheritedAttributes = {};
    this.checkboxId = `wcs-checkbox-${checkboxIds++}`;
    this.name = this.checkboxId;
    this.indeterminate = false;
    this.checked = false;
    this.labelAlignment = "center";
    this.disabled = false;
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, CHECKBOX_INHERITED_ATTRS));
  }
  componentDidLoad() {
    this.onSlotChange();
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
  handleChange(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    this.toggleCheckboxState();
  }
  handleHostClick(e) {
    return __async(this, null, function* () {
      e.preventDefault();
      e.stopPropagation();
      this.toggleCheckboxState();
    });
  }
  handleInputClick(ev) {
    if (ev.detail) {
      ev.stopImmediatePropagation();
      ev.preventDefault();
    }
  }
  toggleCheckboxState() {
    if (this.disabled) return;
    this.indeterminate = false;
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
  onSlotChange() {
    const slot = this.el.shadowRoot.querySelector("slot");
    if (slot) {
      const assignedNodes = slot.assignedNodes();
      if (assignedNodes.length > 0) {
        this.el.shadowRoot.querySelector(".text").classList.remove("hidden");
      } else {
        this.el.shadowRoot.querySelector(".text").classList.add("hidden");
      }
    }
  }
  render() {
    return h(Host, {
      key: "a20390ff38ab6bf7ec5a0868d396857edd93daa1"
    }, h("label", {
      key: "ab9d5f22c1f48f84dbd75ad4d4699f403cbfb059",
      htmlFor: this.name,
      class: "wcs-container",
      "aria-disabled": this.disabled
    }, h("input", Object.assign({
      key: "05afab86b77b327fe9e4f3c9e1e44d67d3c7678d",
      onBlur: this.handleBlur.bind(this),
      onChange: this.handleChange.bind(this),
      onFocus: this.handleFocus.bind(this),
      onClick: this.handleInputClick.bind(this),
      checked: this.checked,
      class: "wcs-checkbox",
      type: "checkbox",
      ref: (el) => this.nativeInput = el,
      name: this.name,
      disabled: this.disabled,
      id: this.name
    }, this.inheritedAttributes)), h("span", {
      key: "f864ab3331ce992ea6b769b06cb29485485300e8",
      class: "wcs-checkmark"
    }), h("span", {
      key: "5709887a3b90454c7a2f711f553f3d95a6f98326",
      class: "text"
    }, h("slot", {
      key: "ed2dc70d43b7915962c531e901a7abb84b1d34b6",
      onSlotchange: (_) => this.onSlotChange()
    }))));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return getElement(this);
  }
};
var checkboxIds = 0;
Checkbox.style = WcsCheckboxStyle0;
export {
  Checkbox as wcs_checkbox
};
//# sourceMappingURL=wcs-checkbox.entry-RIMKIFDZ.js.map
