import {
  inheritAriaAttributes,
  inheritAttributes,
  isEnterKey,
  isSpaceKey,
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

// ../node_modules/wcs-core/dist/esm/wcs-grid-column.entry.js
var GridSortArrow = ({
  state
}) => h("svg", {
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none"
}, h("g", {
  class: (state === "none" ? "" : state) + " arrow-group"
}, h("path", {
  class: "arrow",
  fill: "#333333",
  d: "M10.0973 5.34619C9.79269 5.67941 9.29832 5.67941 8.99348 5.34619L6.78316 2.92128L6.78316 11.144C6.78316 11.6168 6.43368 12 6.00289 12C5.57187 12 5.22261 11.6168 5.22261 11.144L5.22261 2.92128L3.01219 5.34619C2.70802 5.67941 2.21341 5.67941 1.90881 5.34619C1.75655 5.17859 1.68005 4.95932 1.68005 4.73997C1.68005 4.52061 1.75655 4.30192 1.90881 4.13433L5.45122 0.250846C5.75597 -0.0836145 6.24977 -0.0836145 6.55454 0.250846L10.0973 4.13433C10.4017 4.46883 10.4017 5.01168 10.0973 5.34619Z"
})));
var gridColumnCss = ":host{display:contents}:host th{color:var(--wcs-grid-header-text-color);background-color:var(--wcs-grid-header-background-color-default);border-bottom:var(--wcs-grid-header-border-bottom);border-left:var(--wcs-grid-header-border-left);border-radius:var(--wcs-grid-header-border-radius);padding:var(--wcs-grid-header-padding-vertical) var(--wcs-grid-header-padding-horizontal);text-align:left;align-content:center;transition:background-color var(--wcs-grid-header-transition-duration) ease-in-out;}:host th .grid-column-th-content{-webkit-appearance:none;appearance:none;background:none;border:none;outline:none;margin:0;padding:0;font-size:var(--wcs-grid-header-font-size);line-height:var(--wcs-grid-header-line-height);color:var(--wcs-grid-header-text-color);cursor:inherit;display:inline-flex;border-collapse:separate;font-family:inherit;text-align:left;align-items:center;gap:var(--wcs-semantic-spacing-base)}:host th .grid-column-th-content span{font-weight:var(--wcs-grid-header-font-weight)}:host th[aria-sort]:hover{background-color:var(--wcs-grid-header-background-color-hover)}:host th[aria-sort]:active{background-color:var(--wcs-grid-header-background-color-press)}:host th[aria-sort=ascending],:host th[aria-sort=descending]{--wcs-grid-header-sort-arrow-color:var(--wcs-grid-header-sort-arrow-color-default)}:host th[aria-sort=none]:hover{--wcs-grid-header-sort-arrow-color:var(--wcs-grid-header-sort-arrow-color-hover)}:host th:focus-visible,:host th:has(:focus-visible){outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-grid-outline-color);outline-offset:0;border-radius:0.1rem}@supports not selector(&:has(:focus-visible)){:host th:focus-within{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-grid-outline-color);outline-offset:0;border-radius:0.1rem}}:host .pointer{cursor:pointer}:host([hidden]){display:none !important}";
var WcsGridColumnStyle0 = gridColumnCss;
var gridSortArrowCss = ".arrow-group{transform-origin:50% 50%;transition:transform var(--wcs-semantic-motion-duration-feedback-base, 150ms) ease-in-out}.arrow{fill:var(--wcs-grid-header-sort-arrow-color, transparent)}.desc{transform:rotate(180deg)}";
var WcsGridColumnStyle1 = gridSortArrowCss;
var GRID_COLUMN_INHERITED_ATTRS = ["tabindex", "title"];
var GridColumn = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsSortChange = createEvent(this, "wcsSortChange", 7);
    this.wcsHiddenChange = createEvent(this, "wcsHiddenChange", 7);
    this.inheritedAttributes = {};
    this.path = void 0;
    this.name = void 0;
    this.sort = false;
    this.sortFn = void 0;
    this.formatter = void 0;
    this.sortOrder = "none";
    this.width = void 0;
    this.customCells = false;
    this.hidden = false;
    this.cursorPosition = void 0;
    this.columnPosition = void 0;
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, GRID_COLUMN_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeTh, attr, value);
    });
  }
  parseMyObjectProp(newValue) {
    this.wcsHiddenChange.emit(newValue);
  }
  sortOrderChange(_) {
    this.emitSortConfig();
  }
  emitSortConfig() {
    if (!this.sort) return;
    this.wcsSortChange.emit({
      column: this.el,
      order: this.sortOrder,
      sortFn: this.sortFn
    });
  }
  getSortOrderForAriaSort(sortOrder) {
    switch (sortOrder) {
      case "asc":
        return "ascending";
      case "desc":
        return "descending";
      case "none":
      default:
        return "none";
    }
  }
  getTabIndex() {
    var _a, _b;
    return ((_a = this.cursorPosition) === null || _a === void 0 ? void 0 : _a.col) === this.columnPosition && ((_b = this.cursorPosition) === null || _b === void 0 ? void 0 : _b.row) === 0 ? 0 : -1;
  }
  getTagName() {
    return this.sort ? "button" : "div";
  }
  delegateFocusToButton() {
    if (this.sort) {
      this.buttonOrDiv.focus();
    }
  }
  render() {
    const ButtonOrDiv = this.getTagName();
    return h(Host, {
      key: "46989c38681747daf1a458eeda881657aa5acdfb",
      slot: "grid-column"
    }, h("th", Object.assign({
      key: "3e6fdcb1db342dc6b974fc709fb1adea92b0d731",
      style: {
        width: this.width
      },
      class: this.sort ? "pointer" : "",
      tabIndex: this.sort ? -1 : this.getTabIndex(),
      scope: "col",
      onClick: this.onSortClick.bind(this),
      onKeyDown: this.handleSortKeyDown.bind(this),
      onFocus: this.delegateFocusToButton.bind(this),
      "aria-sort": this.sort ? this.getSortOrderForAriaSort(this.sortOrder) : null,
      ref: (el) => this.nativeTh = el
    }, this.inheritedAttributes), h(ButtonOrDiv, {
      key: "cb49f504363332cb9c586bc906804cc4295d6ec5",
      class: "grid-column-th-content",
      ref: (el) => this.buttonOrDiv = el,
      tabIndex: this.sort ? this.getTabIndex() : -1
    }, h("span", {
      key: "801194d92757db834561dd11396223a939b1c6cb"
    }, this.name), this.sort ? h("div", {
      class: "sort-arrow-container"
    }, h(GridSortArrow, {
      state: this.sortOrder
    })) : "")));
  }
  onSortClick() {
    if (!this.sort) return;
    this.sortOrder = this.sortOrder === "none" || this.sortOrder === "desc" ? "asc" : "desc";
  }
  handleSortKeyDown(_event) {
    if (isSpaceKey(_event) || isEnterKey(_event)) {
      _event.preventDefault();
      this.onSortClick();
    }
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "hidden": ["parseMyObjectProp"],
      "sortOrder": ["sortOrderChange"]
    };
  }
};
GridColumn.style = WcsGridColumnStyle0 + WcsGridColumnStyle1;
export {
  GridColumn as wcs_grid_column
};
//# sourceMappingURL=wcs-grid-column.entry-VQVKJKQ2.js.map
