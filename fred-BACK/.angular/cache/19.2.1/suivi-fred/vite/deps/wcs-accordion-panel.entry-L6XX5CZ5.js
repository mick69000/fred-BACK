import {
  SelectArrow
} from "./chunk-6SHTIXBY.js";
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

// ../node_modules/wcs-core/dist/esm/wcs-accordion-panel.entry.js
var accordionPanelCss = ":host{display:flex;flex-direction:column;cursor:pointer;--wcs-accordion-panel-color-default:var(--wcs-semantic-color-text-primary);--wcs-accordion-panel-color-highlight:var(--wcs-semantic-color-text-primary);--wcs-accordion-panel-color-hover:var(--wcs-semantic-color-text-primary);--wcs-accordion-panel-color-press:var(--wcs-semantic-color-text-primary);--wcs-accordion-panel-action-color-default:var(--wcs-semantic-color-foreground-action-secondary-default);--wcs-accordion-panel-action-color-highlight:var(--wcs-semantic-color-foreground-action-secondary-press);--wcs-accordion-panel-action-color-hover:var(--wcs-semantic-color-foreground-action-secondary-hover);--wcs-accordion-panel-action-color-press:var(--wcs-semantic-color-foreground-action-secondary-press);--wcs-accordion-panel-background-color-default:var(--wcs-semantic-color-background-action-secondary-default);--wcs-accordion-panel-background-color-highlight:var(--wcs-semantic-color-background-action-secondary-press);--wcs-accordion-panel-background-color-hover:var(--wcs-semantic-color-background-action-secondary-hover);--wcs-accordion-panel-background-color-press:var(--wcs-semantic-color-background-action-secondary-press);--wcs-accordion-panel-header-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-accordion-panel-header-font-size:var(--wcs-semantic-font-size-heading-6);--wcs-accordion-panel-header-gap:calc(3 * var(--wcs-semantic-spacing-base));--wcs-accordion-panel-border-radius:var(--wcs-semantic-border-radius-base);--wcs-accordion-panel-border-radius-open:var(--wcs-accordion-panel-border-radius) var(--wcs-accordion-panel-border-radius) 0 0;--wcs-accordion-panel-padding-vertical:var(--wcs-semantic-spacing-large);--wcs-accordion-panel-padding-horizontal:calc(var(--wcs-semantic-spacing-base) * 3);--wcs-accordion-panel-header-border-width:var(--wcs-semantic-border-width-default);--wcs-accordion-panel-border-width:var(--wcs-semantic-border-width-default);--wcs-accordion-panel-border-width-focus:var(--wcs-semantic-border-width-large);--wcs-accordion-panel-border-color:var(--wcs-semantic-color-border-secondary);--wcs-accordion-panel-border-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-accordion-panel-border-style-focus:var(--wcs-semantic-border-style-focus-base);--wcs-accordion-transition-duration:var(--wcs-semantic-motion-duration-feedback-base);border:var(--wcs-accordion-panel-border-width) solid var(--wcs-accordion-panel-border-color);border-radius:var(--wcs-accordion-panel-border-radius)}:host .header{display:flex;align-items:center;justify-content:space-between;gap:var(--wcs-accordion-panel-header-gap);padding:var(--wcs-accordion-panel-padding-vertical) var(--wcs-accordion-panel-padding-horizontal);border-radius:var(--wcs-accordion-panel-border-radius);font-weight:var(--wcs-accordion-panel-header-font-weight);font-size:var(--wcs-accordion-panel-header-font-size);font-family:var(--wcs-font-sans-serif);color:var(--wcs-accordion-panel-color-default);background-color:var(--wcs-accordion-panel-background-color-default);border:none;transition:background-color var(--wcs-accordion-transition-duration)}@media (forced-colors: active){:host .header{border:var(--wcs-accordion-panel-header-border-width) solid ButtonBorder}}:host .header:focus-visible{outline:var(--wcs-accordion-panel-border-width-focus) var(--wcs-accordion-panel-border-style-focus) var(--wcs-accordion-panel-border-color-focus)}:host .header:hover{cursor:pointer;color:var(--wcs-accordion-panel-color-hover);background-color:var(--wcs-accordion-panel-background-color-hover)}:host .header:hover .header-action{color:var(--wcs-accordion-panel-action-color-hover)}:host .header:hover .header-action .arrow{fill:var(--wcs-accordion-panel-action-color-hover)}:host .header:active{background-color:var(--wcs-accordion-panel-background-color-press)}:host .header-action{display:flex;align-items:center;user-select:none;color:var(--wcs-accordion-panel-action-color-default)}:host .header-action .arrow{fill:var(--wcs-accordion-panel-action-color-default)}:host .content{display:none}:host([open]){margin-bottom:0;}:host([open]) .header{border-radius:var(--wcs-accordion-panel-border-radius-open)}:host([open]) .content{display:block}:host([open]):host([highlight]){}:host([open]):host([highlight]) .header{background-color:var(--wcs-accordion-panel-background-color-highlight);color:var(--wcs-accordion-panel-color-highlight)}:host([open]):host([highlight]) .header-action{color:var(--wcs-accordion-panel-action-color-highlight)}:host([open]):host([highlight]) .header-action .arrow{fill:var(--wcs-accordion-panel-action-color-highlight)}";
var WcsAccordionPanelStyle0 = accordionPanelCss;
var ACCORDION_INHERITED_ATTRS = ["tabindex", "title"];
var AccordionPanel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsOpenChange = createEvent(this, "wcsOpenChange", 7);
    this.inheritedAttributes = {};
    this.open = false;
    this.hideActionText = false;
    this.highlight = false;
    this.groupContentWithHeader = false;
  }
  openChange(newValue) {
    this.wcsOpenChange.emit(newValue);
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, ACCORDION_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeButton, attr, value);
    });
  }
  close() {
    return __async(this, null, function* () {
      this.open = false;
    });
  }
  render() {
    return h(Host, {
      key: "c13006bc732e84e6b20ae5c8fd8592f8d7519563"
    }, h("button", Object.assign({
      key: "ccd0ad94f0ee440c57493b0036395ca6c8f94d10",
      "aria-expanded": this.open ? "true" : "false",
      "aria-controls": "content",
      class: "header",
      ref: (el) => this.nativeButton = el,
      onClick: () => this.open = !this.open
    }, this.inheritedAttributes), h("slot", {
      key: "0654ba3be0d8d3236b80e5fe0faddcd02650ad11",
      name: "header"
    }), h("span", {
      key: "a9701540c7fc9ed4f4646f01fb2543137404258a",
      class: "header-action"
    }, !this.hideActionText && h("span", {
      key: "a4a6d0c7cdcda803708f32f0439c877f4bc1d80b"
    }, this.open ? "Fermez" : "Ouvrez"), h(SelectArrow, {
      key: "1e936a6b0baeefaffda7f6666321ee744a8432e5",
      up: this.open
    }))), h("div", {
      key: "ac89508a85be3321b32ec45d178ab5219982fea0",
      class: "content",
      id: "content"
    }, h("slot", {
      key: "9f949b45312bfe203ce69f1bbcc288de4fe0a94e",
      name: "content"
    })));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "open": ["openChange"]
    };
  }
};
AccordionPanel.style = WcsAccordionPanelStyle0;
export {
  AccordionPanel as wcs_accordion_panel
};
//# sourceMappingURL=wcs-accordion-panel.entry-L6XX5CZ5.js.map
