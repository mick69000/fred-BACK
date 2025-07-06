import {
  isDownArrowKey,
  isEnterKey,
  isLeftArrowKey,
  isRightArrowKey,
  isSpaceKey,
  isTabKey,
  isUpArrowKey,
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

// ../node_modules/wcs-core/dist/esm/wcs-radio-group.entry.js
var radioGroupCss = ":host{display:flex;--wcs-radio-group-gap:var(--wcs-semantic-spacing-base);--wcs-radio-group-option-height:var(--wcs-semantic-size-m);--wcs-radio-group-option-gap:var(--wcs-semantic-spacing-small);--wcs-radio-group-option-padding:var(--wcs-semantic-spacing-small) var(--wcs-semantic-spacing-small);--wcs-radio-group-option-border-radius:var(--wcs-semantic-border-radius-base);--wcs-radio-group-option-background-color:var(--wcs-semantic-color-background-surface-accent-lightest)}:host([mode=radio]){flex-direction:column;gap:var(--wcs-radio-group-gap)}:host([mode=option]){box-sizing:border-box;height:var(--wcs-radio-group-option-height);display:inline-flex;flex-direction:row;align-items:center;gap:var(--wcs-radio-group-option-gap);padding:var(--wcs-radio-group-option-padding);background-color:var(--wcs-radio-group-option-background-color);border-radius:var(--wcs-radio-group-option-border-radius)}:host([mode=horizontal]){justify-content:space-between}";
var WcsRadioGroupStyle0 = radioGroupCss;
var RadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsChange = createEvent(this, "wcsChange", 7);
    this.value = void 0;
    this.name = void 0;
    this.mode = "radio";
  }
  onValueChangeHandler(value) {
    this.updateRadioTabIndex(value);
    this.updateAllRadioState();
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.el, attr, value);
    });
  }
  componentDidLoad() {
    this.onValueChangeHandler(this.value);
    this.updateAllRadioModeAndName();
  }
  onSlotChange() {
    this.updateRadioTabIndex(this.value);
    this.updateAllRadioModeAndName();
  }
  updateAllRadioState() {
    this.getSlottedRadios().forEach((r) => r.updateState());
  }
  updateAllRadioModeAndName() {
    this.getSlottedRadios().forEach((r) => {
      r.mode = this.mode;
      r.name = this.name;
    });
  }
  updateRadioTabIndex(value) {
    const radios = this.getSlottedRadios();
    const first = radios.find((radio) => !radio.disabled);
    const checked = radios.find((radio) => radio.value === value && !radio.disabled);
    if (!first && !checked) {
      return;
    }
    const focusable = checked || first;
    for (const radio of radios) {
      const tabindex = radio === focusable ? 0 : -1;
      radio.setTabIndex(tabindex);
    }
  }
  getSlottedRadios() {
    return Array.from(this.el.querySelectorAll("wcs-radio"));
  }
  getSlottedRadiosNotDisabled() {
    return Array.from(this.getSlottedRadios().filter((radio) => !radio.disabled));
  }
  handleRadioClick(event) {
    this.value = event.detail.value;
    this.wcsChange.emit({
      value: event.detail.value
    });
  }
  handleKeyDown(ev) {
    return __async(this, null, function* () {
      const radiosNotDisabled = this.getSlottedRadiosNotDisabled();
      const previousSelected = radiosNotDisabled.findIndex((r) => r === ev.target);
      let indexToSelect;
      if (isSpaceKey(ev) || isEnterKey(ev)) {
        ev.preventDefault();
        indexToSelect = previousSelected;
      } else if (isDownArrowKey(ev) || isRightArrowKey(ev)) {
        ev.preventDefault();
        indexToSelect = (previousSelected + 1) % radiosNotDisabled.length;
      } else if (isUpArrowKey(ev) || isLeftArrowKey(ev)) {
        ev.preventDefault();
        indexToSelect = (previousSelected - 1 + radiosNotDisabled.length) % radiosNotDisabled.length;
      } else if (isTabKey(ev)) {
        return;
      }
      const radioToSelect = radiosNotDisabled[indexToSelect];
      if (radioToSelect) {
        radioToSelect.focus();
        if (this.value !== radioToSelect.value) {
          this.wcsChange.emit({
            value: radioToSelect.value
          });
        }
        this.value = radioToSelect.value;
      }
    });
  }
  render() {
    return h(Host, {
      key: "7e9a6c9412d6ababef068d5766d79a790c3e531f",
      role: "radiogroup"
    }, h("slot", {
      key: "6163831fbd131047a6f3556c76b1628f41453b6b",
      name: "option",
      onSlotchange: this.onSlotChange.bind(this)
    }));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["onValueChangeHandler"],
      "name": ["updateAllRadioModeAndName"],
      "mode": ["updateAllRadioModeAndName"]
    };
  }
};
RadioGroup.style = WcsRadioGroupStyle0;
export {
  RadioGroup as wcs_radio_group
};
//# sourceMappingURL=wcs-radio-group.entry-OSOOFSET.js.map
