import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-accordion.entry.js
var accordionCss = ":host{--wcs-accordion-gap:var(--wcs-semantic-spacing-base);display:flex;flex-direction:column;gap:var(--wcs-accordion-gap)}";
var WcsAccordionStyle0 = accordionCss;
var Accordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.accordionPanels = [];
    this.hideActionText = true;
    this.highlight = false;
    this.groupContentWithHeader = false;
  }
  componentWillLoad() {
    this.accordionPanels = this.getAllAccordionPanelsFromHostElement();
    this.updateHideActiontextOnPanel();
    this.updateHighlightOnPanel();
    this.updateGroupContentWithHeader();
  }
  wcsOpenChangeHandler(event) {
    if (event.detail) {
      this.closeAllAccordionsExcept(event.target);
    }
  }
  updateHideActiontextOnPanel() {
    this.accordionPanels.forEach((opt) => {
      opt.hideActionText = this.hideActionText;
    });
  }
  updateHighlightOnPanel() {
    this.accordionPanels.forEach((opt) => {
      opt.highlight = this.highlight;
    });
  }
  updateGroupContentWithHeader() {
    this.accordionPanels.forEach((opt) => {
      opt.groupContentWithHeader = this.groupContentWithHeader;
    });
  }
  render() {
    return h(Host, {
      key: "b99f05f446c6848298b51f2360cdca1b4d253de3"
    }, h("slot", {
      key: "f8f12b1ae5e2a43d64fbc14c15980109031b8ad0"
    }));
  }
  getAllAccordionPanelsFromHostElement() {
    return Array.from(this.el.children).filter((el) => el.tagName === "WCS-ACCORDION-PANEL");
  }
  /**
   * Close all accordion panels except the one that match the eventTarget reference
   */
  closeAllAccordionsExcept(eventTarget) {
    this.accordionPanels.filter((a) => a !== eventTarget).forEach((a) => a.close());
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "hideActionText": ["updateHideActiontextOnPanel"],
      "highlight": ["updateHighlightOnPanel"],
      "groupContentWithHeader": ["updateGroupContentWithHeader"]
    };
  }
};
Accordion.style = WcsAccordionStyle0;
export {
  Accordion as wcs_accordion
};
//# sourceMappingURL=wcs-accordion.entry-QNFBFV24.js.map
