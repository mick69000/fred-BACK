import {
  isElementFocused,
  isFocusable
} from "./chunk-BM6XL573.js";
import {
  inheritAriaAttributes,
  inheritAttributes,
  isTabKey,
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

// ../node_modules/wcs-core/dist/esm/wcs-modal.entry.js
var modalCss = "wcs-modal{--wcs-modal-backdrop-color:var(--wcs-semantic-color-background-backdrop);--wcs-modal-max-height:80%;--wcs-modal-background-color:var(--wcs-semantic-color-background-surface-primary);--wcs-modal-border-radius:var(--wcs-semantic-border-radius-base);--wcs-modal-padding:calc(3 * var(--wcs-semantic-spacing-base));--wcs-modal-border-width:var(--wcs-semantic-border-width-default);--wcs-modal-border-color:var(--wcs-semantic-color-border-secondary);--wcs-modal-title-margin-bottom:var(--wcs-semantic-spacing-large);--wcs-modal-title-font-size:var(--wcs-semantic-font-size-heading-4);--wcs-modal-title-font-weight:var(--wcs-semantic-font-weight-heavy);--wcs-modal-title-line-height:var(--wcs-semantic-font-line-height-medium);--wcs-modal-actions-margin-top:var(--wcs-semantic-spacing-large);--wcs-modal-width-s:288px;--wcs-modal-width-m:480px;--wcs-modal-width-l:864px;--wcs-modal-width-xl:1200px;z-index:999;position:fixed;top:0;bottom:0;left:0;right:0;display:none;background:var(--wcs-modal-backdrop-color)}wcs-modal[show]{display:flex;height:100vh;width:100vw;align-items:center;justify-content:center}wcs-modal[without-backdrop]{background-color:unset}wcs-modal[without-backdrop] .wcs-modal-container{border:solid var(--wcs-modal-border-width) var(--wcs-modal-border-color)}.wcs-modal-container{max-height:var(--wcs-modal-max-height, 80%);background-color:var(--wcs-modal-background-color);display:grid;grid-template-columns:100%;grid-template-rows:auto 1fr auto;box-sizing:border-box;pointer-events:auto;background-clip:padding-box;border-radius:var(--wcs-modal-border-radius);z-index:20000;padding:var(--wcs-modal-padding)}.wcs-modal-container[data-size=s]{width:var(--wcs-modal-width-s)}.wcs-modal-container[data-size=m]{width:var(--wcs-modal-width-m)}.wcs-modal-container[data-size=l]{width:var(--wcs-modal-width-l)}.wcs-modal-container[data-size=xl]{width:var(--wcs-modal-width-xl)}.wcs-modal-header{margin-bottom:var(--wcs-modal-title-margin-bottom);display:flex;align-items:center;justify-content:space-between}.wcs-modal-header h1{font-size:var(--wcs-modal-title-font-size);font-weight:var(--wcs-modal-title-font-weight);line-height:var(--wcs-modal-title-line-height);margin:0}.wcs-modal-content{overflow-y:var(--wcs-modal-overflow-y, auto)}.wcs-modal-actions{margin-top:var(--wcs-modal-actions-margin-top);display:flex;justify-content:flex-end}";
var WcsModalStyle0 = modalCss;
var MODAL_INHERITED_ATTRS = [];
var Modal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsDialogClosed = createEvent(this, "wcsDialogClosed", 7);
    this.inheritedAttributes = {};
    this.modalId = modalIds++;
    this.showAttributeChangedMarker = false;
    this.hasBeenClosedBefore = false;
    this.withoutBackdrop = false;
    this.show = false;
    this.showCloseButton = false;
    this.closeButtonAriaLabel = "Fermer";
    this.size = "m";
    this.hideActions = false;
    this.modalTriggerControlsId = void 0;
    this.initialFocusElementId = void 0;
    this.disableAutoFocus = false;
  }
  componentWillLoad() {
    if (!this.modalTriggerControlsId) {
      console.warn("wcs-modal: You must provide the modal-trigger-controls-id attribute to the modal to make it to work properly");
    }
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, MODAL_INHERITED_ATTRS));
  }
  componentDidLoad() {
    this.updateFocusableElements();
  }
  componentDidRender() {
    var _a;
    this.updateFocusableElements();
    if (this.showAttributeChangedMarker) {
      this.showAttributeChangedMarker = false;
      if (this.disableAutoFocus) {
        return;
      }
      if (!this.initialFocusElementId) {
        (_a = this.firstFocusableElement) === null || _a === void 0 ? void 0 : _a.focus();
      } else {
        const modalElementToFocusOnOpening = document.getElementById(this.initialFocusElementId);
        if (!modalElementToFocusOnOpening) {
          console.warn(`wcs-modal: Unable to focus element - ID '${this.initialFocusElementId}' not found in DOM`);
        }
        modalElementToFocusOnOpening === null || modalElementToFocusOnOpening === void 0 ? void 0 : modalElementToFocusOnOpening.focus();
      }
    }
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeDivDialog, attr, value);
    });
  }
  onShowChange() {
    if (this.show) {
      this.hasBeenClosedBefore = false;
      this.showAttributeChangedMarker = true;
    } else {
      if (this.hasBeenClosedBefore) {
        return;
      }
      this.hasBeenClosedBefore = true;
      if (this.modalTriggerControlsId) {
        const modalTriggerControlsHtmlElement = document.getElementById(this.modalTriggerControlsId);
        if (!modalTriggerControlsHtmlElement) {
          console.warn(`wcs-modal: Element with id '${this.modalTriggerControlsId}' could not be found`);
        }
        modalTriggerControlsHtmlElement === null || modalTriggerControlsHtmlElement === void 0 ? void 0 : modalTriggerControlsHtmlElement.focus();
      }
    }
  }
  updateFocusableElements() {
    const focusableElements = Array.from(this.el.querySelectorAll("*")).filter((element) => isFocusable(element));
    this.firstFocusableElement = focusableElements.length > 0 && focusableElements[0];
    this.lastFocusableElement = focusableElements.length > 0 && focusableElements[focusableElements.length - 1];
  }
  close() {
    if (this.show) {
      this.show = false;
      this.wcsDialogClosed.emit();
    }
  }
  onKeyDown(event) {
    if (this.show && this.showCloseButton && event.key === "Escape") {
      this.close();
    }
    if (this.show) {
      if (isTabKey(event)) {
        this.updateFocusableElements();
        const firstElement = this.firstFocusableElement;
        const lastElement = this.lastFocusableElement;
        if (event.shiftKey && isElementFocused(firstElement)) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && isElementFocused(lastElement)) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  }
  onCloseButtonClick(_) {
    this.close();
  }
  handleSlotContentChange() {
    this.updateFocusableElements();
  }
  render() {
    const modalTitleId = `wcs-modal-title-${this.modalId}`;
    return h(Host, {
      key: "1b9a4d86bf1e97ef7ef988b7355b75eb5f344ca8"
    }, h("div", Object.assign({
      key: "ab5e3938796e950e9e3aa81cd35a723d6429a8e6",
      class: "wcs-modal-container",
      "data-size": this.size,
      "aria-modal": true,
      role: "dialog",
      "aria-labelledby": modalTitleId,
      ref: (el) => this.nativeDivDialog = el
    }, this.inheritedAttributes), h("div", {
      key: "80fe453c1ffd3453832c799f131d50c97d37954f",
      class: "wcs-modal-header"
    }, h("h1", {
      key: "632853fdbc254e92167fafd022b7f0d392b861bc",
      id: modalTitleId
    }, h("slot", {
      key: "b84db0d064adae8e50a013315fd3c593a39a6f99",
      name: "header"
    })), this.showCloseButton && h("wcs-button", {
      key: "27bf915ff1ccebab3de363d8dae6914de112aa7b",
      shape: "round",
      mode: "clear",
      id: "wcs-modal-close-button",
      "aria-label": this.closeButtonAriaLabel,
      onClick: ($event) => this.onCloseButtonClick($event)
    }, h("wcs-mat-icon", {
      key: "adacfb9e0b2c435d97f35e8423dd21f4bb534212",
      icon: "close"
    }))), h("div", {
      key: "33757197132d566f2ade4ea1c1cf36bc914702b2",
      class: "wcs-modal-content"
    }, h("slot", {
      key: "c742e77c50cccc69435c40cf845fa6280a1a7063",
      onSlotchange: () => this.handleSlotContentChange()
    })), !this.hideActions && h("div", {
      key: "e98977493e4fc5461fbab1b67d609a1a956b7fbf",
      class: "wcs-modal-actions"
    }, h("slot", {
      key: "56168022f0de471106a15b03f7b16c3c6d3cbc1b",
      name: "actions"
    }))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "show": ["onShowChange"]
    };
  }
};
var modalIds = 0;
Modal.style = WcsModalStyle0;
export {
  Modal as wcs_modal
};
//# sourceMappingURL=wcs-modal.entry-SHC7K7GS.js.map
