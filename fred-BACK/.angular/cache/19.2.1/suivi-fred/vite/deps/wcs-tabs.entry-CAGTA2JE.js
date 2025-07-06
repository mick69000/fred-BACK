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

// ../node_modules/wcs-core/dist/esm/wcs-tabs.entry.js
var tabsCss = ':host{--wcs-tabs-indicator-height:calc(var(--wcs-semantic-size-base) / 2);--wcs-tabs-indicator-background-color:var(--wcs-semantic-color-foreground-action-secondary-default);--wcs-tabs-indicator-border-radius:var(--wcs-semantic-border-radius-full);--wcs-tabs-color-default:var(--wcs-semantic-color-foreground-action-secondary-default);--wcs-tabs-color-hover:var(--wcs-semantic-color-foreground-action-secondary-hover);--wcs-tabs-color-press:var(--wcs-semantic-color-foreground-action-secondary-press);--wcs-tabs-color-selected:var(--wcs-semantic-color-foreground-action-secondary-default);--wcs-tabs-background-color-focus:var(--wcs-semantic-color-background-action-secondary-focus);--wcs-tabs-background-color-hover:var(--wcs-semantic-color-background-action-secondary-hover);--wcs-tabs-background-color-press:var(--wcs-semantic-color-background-action-secondary-press);--wcs-tabs-border-radius:var(--wcs-semantic-border-radius-base);--wcs-tabs-border-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-tabs-font-weight-default:var(--wcs-semantic-font-weight-roman);--wcs-tabs-font-weight-selected:var(--wcs-semantic-font-weight-roman);--wcs-tabs-padding-top:var(--wcs-semantic-spacing-base);--wcs-tabs-padding-right:var(--wcs-semantic-spacing-large);--wcs-tabs-padding-bottom:calc(var(--wcs-semantic-spacing-base) + var(--wcs-tabs-indicator-height));--wcs-tabs-padding-left:var(--wcs-semantic-spacing-large);--wcs-tabs-gutter-border-width:var(--wcs-semantic-border-width-default);--wcs-tabs-gutter-background-color:var(--wcs-semantic-color-border-secondary);--wcs-tabs-headers-border-bottom:var(--wcs-tabs-gutter-border-width) solid var(--wcs-tabs-gutter-background-color);--wcs-tabs-transition-duration:var(--wcs-semantic-motion-duration-feedback-base);display:block}:host([align=start]) .wcs-tabs-headers{justify-content:start}:host([align=end]) .wcs-tabs-headers{justify-content:end}:host([align=center]) .wcs-tabs-headers{justify-content:center}.wcs-tabs-headers{overflow-x:auto;display:flex;flex-direction:row;position:relative}:host([gutter]) .wcs-tabs-headers{border-bottom:var(--wcs-tabs-headers-border-bottom)}.wcs-tab-header{position:relative;padding:var(--wcs-tabs-padding-top) var(--wcs-tabs-padding-right) var(--wcs-tabs-padding-bottom) var(--wcs-tabs-padding-left);border-radius:var(--wcs-tabs-border-radius) var(--wcs-tabs-border-radius) 0 0;display:flex;flex-shrink:0;align-items:center;justify-content:center;cursor:pointer;outline:none;transition:all var(--wcs-tabs-transition-duration) ease-out}.wcs-tab-header span{text-align:center;color:var(--wcs-tabs-color-default);font-size:1rem;font-weight:var(--wcs-tabs-font-weight-default)}.wcs-tab-header:hover{background-color:var(--wcs-tabs-background-color-hover)}.wcs-tab-header:hover span{color:var(--wcs-tabs-color-hover)}.wcs-tab-header:focus-visible>span{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-tabs-border-color-focus);outline-offset:var(--wcs-semantic-spacing-small);border-radius:0.1rem}.wcs-tab-header:active{background-color:var(--wcs-tabs-background-color-press)}.wcs-tab-header:active span{color:var(--wcs-tabs-color-press)}.active span{font-weight:var(--wcs-tabs-font-weight-selected);color:var(--wcs-tabs-color-selected)}.active::after{position:absolute;bottom:0;left:0;width:100%;content:"";height:var(--wcs-tabs-indicator-height);background-color:var(--wcs-tabs-indicator-background-color);border-radius:var(--wcs-tabs-indicator-border-radius)}';
var WcsTabsStyle0 = tabsCss;
var TABS_INHERITED_ATTRS = [];
var Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tabChange = createEvent(this, "tabChange", 7);
    this.inheritedAttributes = {};
    this.tabsId = tabsId++;
    this.align = "start";
    this.selectedIndex = 0;
    this.selectedKey = void 0;
    this.headersOnly = false;
    this.gutter = void 0;
    this.description = void 0;
    this.headers = [];
    this.currentActiveTabIndex = 0;
  }
  selectedIndexChanged(newValue) {
    this.currentActiveTabIndex = newValue;
  }
  selectedTabkeyChanged(newValue) {
    this.updateCurrentActiveIndexByTabKey(newValue);
  }
  emitActiveTabChange() {
    this.tabChange.emit({
      tabName: this.headers[this.currentActiveTabIndex],
      tabIndex: this.currentActiveTabIndex,
      selectedKey: this.tabs[this.currentActiveTabIndex].itemKey
    });
  }
  updateCurrentActiveIndexByTabKey(newValue) {
    for (let i = 0; i < this.tabs.length; i++) {
      const tab = this.tabs[i];
      if (tab.itemKey === newValue) {
        this.currentActiveTabIndex = i;
      }
    }
  }
  onTabLoaded() {
    this.refreshHeaders();
  }
  componentDidLoad() {
    this.putTabsInCorrectDivIfTheyAreNot();
    this.refreshHeaders();
    if (this.selectedIndex) {
      this.currentActiveTabIndex = this.selectedIndex;
    }
    if (this.selectedKey) {
      this.updateCurrentActiveIndexByTabKey(this.selectedKey);
    }
  }
  // XXX: Firefox < 63
  putTabsInCorrectDivIfTheyAreNot() {
    const tabDiv = this.el.shadowRoot.querySelector(".wcs-tabs");
    if (tabDiv.querySelector("slot") === null) {
      Array.from(this.el.querySelectorAll("wcs-tab")).filter((node) => node.parentNode !== tabDiv).forEach((tab) => {
        if (tab.parentElement.isEqualNode(this.el)) {
          this.el.removeChild(tab);
          tabDiv.appendChild(tab);
        }
      });
    }
  }
  handleKeyDown(ev, tabIndex) {
    var _a, _b;
    const target = ev.target;
    switch (ev.key) {
      case " ":
      case "Enter": {
        this.currentActiveTabIndex = tabIndex;
        this.emitActiveTabChange();
        ev.preventDefault();
        break;
      }
      case "ArrowLeft": {
        if ((_a = target.previousElementSibling) === null || _a === void 0 ? void 0 : _a.classList.contains("wcs-tab-header")) {
          target.previousElementSibling.focus();
          ev.preventDefault();
        }
        break;
      }
      case "ArrowRight": {
        if ((_b = target.nextElementSibling) === null || _b === void 0 ? void 0 : _b.classList.contains("wcs-tab-header")) {
          target.nextElementSibling.focus();
          ev.preventDefault();
        }
        break;
      }
      case "Home": {
        const firstTab = this.el.shadowRoot.querySelector(".wcs-tab-header:first-child");
        if (firstTab) {
          firstTab.focus();
          ev.preventDefault();
        }
        break;
      }
      case "End": {
        const lastTab = this.el.shadowRoot.querySelector(".wcs-tab-header:last-child");
        if (lastTab) {
          lastTab.focus();
          ev.preventDefault();
        }
        break;
      }
    }
  }
  refreshHeaders() {
    this.headers = [];
    this.tabs.forEach((x) => {
      this.headers.push(x.getAttribute("header"));
    });
  }
  get tabs() {
    var _a;
    const tabsEl = this.el.shadowRoot.querySelector(".wcs-tabs");
    const tabs = this.el.shadowRoot.querySelectorAll(".wcs-tabs > wcs-tab");
    return tabs.length !== 0 ? tabs : (tabsEl === null || tabsEl === void 0 ? void 0 : tabsEl.querySelector("slot")) ? (_a = tabsEl === null || tabsEl === void 0 ? void 0 : tabsEl.querySelector("slot")) === null || _a === void 0 ? void 0 : _a.assignedElements() : [];
  }
  selectTabAndEmitChangeEvent(index) {
    this.currentActiveTabIndex = index;
    this.emitActiveTabChange();
  }
  componentWillUpdate() {
    if (!this.headersOnly) {
      this.updateTabVisibility();
    } else {
      this.hideAllTabsContent();
    }
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, TABS_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeTablist, attr, value);
    });
  }
  updateTabVisibility() {
    this.tabs.forEach((el, idx) => {
      if (idx !== this.currentActiveTabIndex) {
        el.hidden = true;
      } else {
        el.hidden = false;
      }
    });
  }
  hideAllTabsContent() {
    this.tabs.forEach((el) => el.hidden = true);
  }
  render() {
    return h(Host, {
      key: "22e579eee0adc18107ae55e85efc5b9b6eb2f537"
    }, h("div", Object.assign({
      key: "f4571687ee9f7832b7a8286d21c815a300b4b201",
      class: "wcs-tabs-headers",
      role: "tablist",
      ref: (el) => this.nativeTablist = el,
      "aria-label": this.description
    }, this.inheritedAttributes), this.headers.map((header, idx) => h("div", {
      class: "wcs-tab-header " + (this.currentActiveTabIndex === idx ? "active" : ""),
      onClick: () => this.selectTabAndEmitChangeEvent(idx),
      onKeyDown: (evt) => this.handleKeyDown(evt, idx),
      tabIndex: this.currentActiveTabIndex === idx ? 0 : -1,
      role: "tab",
      id: `tabs-id-${this.tabsId}-tab-id-${idx}`,
      "aria-controls": `tabs-id-${this.tabsId}-tab-panel-${idx}`,
      "aria-label": header,
      "aria-selected": this.currentActiveTabIndex === idx ? "true" : "false"
    }, h("span", null, header)))), h("div", {
      key: "cf1db062352a270f5458f316bc6549a93f5703be",
      class: "wcs-tabs"
    }, h("slot", {
      key: "d8f0fad9ab978d34dd76f83f2bdce98a24277371",
      onSlotchange: () => this.onTabsSlotChange(),
      name: "wcs-tab"
    })));
  }
  /**
   * Observe when a new tab panel is added to the slot to let's handle accessibility properties for tabs panel:
   * - id: to let header tab refers it proper panel
   * - aria-label: take the same name as it's referenced header name
   *
   * @private
   */
  onTabsSlotChange() {
    let tabId = 0;
    this.tabs.forEach((tab) => {
      tab.setAttribute("aria-label", this.headers.at(tabId));
      tab.setAttribute("id", `tabs-id-${this.tabsId}-tab-panel-${tabId}`);
      tabId++;
    });
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "selectedIndex": ["selectedIndexChanged"],
      "selectedKey": ["selectedTabkeyChanged"]
    };
  }
};
var tabsId = 0;
Tabs.style = WcsTabsStyle0;
export {
  Tabs as wcs_tabs
};
//# sourceMappingURL=wcs-tabs.entry-CAGTA2JE.js.map
