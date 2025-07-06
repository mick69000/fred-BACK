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

// ../node_modules/wcs-core/dist/esm/grid-pagination-976a86e9.js
var getAccessibleName = (order, double) => {
  switch (order) {
    case "next":
      return double ? "Last page" : "Next page";
    case "previous":
    default:
      return double ? "First page" : "Previous page";
  }
};
var GridPaginationArrow = ({
  active,
  order,
  double = false
}) => h("wcs-button", {
  mode: "clear",
  shape: "square",
  size: "s",
  disabled: !active,
  title: getAccessibleName(order, double)
}, h("svg", {
  style: {
    cursor: "pointer"
  },
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "20",
  viewBox: "0 0 24 20"
}, h("style", {
  type: "text/css"
}, `
              .arrow-group {
                  transform-origin: 50% 51%;
                  transition: transform 175ms ease-in-out;
              }
              .arrow {
                  transition: fill 175ms ease-in-out;
                  fill: var(--wcs-grid-pagination-arrow-color-inactive, var(--wcs-button-color));
              }
              .second-arrow {
                  transform: translateY(-8px);
              }
              .next {
                  transform: rotate(90deg);
              }
              .previous {
                  transform: rotate(-90deg);
              }
              .active {
                  fill: var(--wcs-grid-pagination-arrow-color-active, var(--wcs-button-color));
              }
          `), h("g", {
  fill: "none",
  class: order + " arrow-group"
}, h("path", {
  class: (active ? "active" : "") + " arrow",
  d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), h("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
})), double ? h("g", {
  fill: "none",
  class: order + " arrow-group"
}, h("path", {
  class: (active ? "active" : "") + " arrow second-arrow",
  d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), h("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
})) : ""));
var gridPaginationCss = ":host{display:block;margin-top:var(--wcs-grid-pagination-margin-top);--wcs-grid-pagination-color:var(--wcs-semantic-color-text-primary);--wcs-grid-pagination-font-size:var(--wcs-semantic-font-size-label-2);--wcs-grid-pagination-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-grid-pagination-gap:var(--wcs-semantic-spacing-base);--wcs-grid-pagination-page-size-gap:var(--wcs-semantic-spacing-base);--wcs-grid-pagination-counter-gap:var(--wcs-semantic-spacing-small);--wcs-grid-pagination-margin-top:var(--wcs-semantic-spacing-large);--wcs-grid-pagination-arrow-color-inactive:unset;--wcs-grid-pagination-arrow-color-active:unset;}.container{display:grid;gap:var(--wcs-grid-pagination-gap);grid-template-columns:auto auto auto;justify-content:space-between;align-items:center;color:var(--wcs-grid-pagination-color);font-size:var(--wcs-grid-pagination-font-size);font-weight:var(--wcs-grid-pagination-font-weight)}.available-page-sizes{width:auto}.page-management,.page-size,.items-count{display:flex;align-items:center}.page-size{gap:var(--wcs-grid-pagination-page-size-gap)}.page-management{margin:0;padding:0;list-style-type:none}.pagination-arrow{display:flex}.pagination-counter{padding:0 var(--wcs-grid-pagination-counter-gap)}.pagination-counter span{white-space:nowrap}wcs-select.available-page-sizes{--wcs-select-control-height:var(--wcs-semantic-size-s)}";
var WcsGridPaginationStyle0 = gridPaginationCss;
var GRID_PAGINATION_INHERITED_ATTRS = ["tabindex", "title"];
var GridPagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsGridPaginationChange = createEvent(this, "wcsGridPaginationChange", 7);
    this.inheritedAttributes = {};
    this.availablePageSizes = [10, 20, 50];
    this.currentPage = GridPagination.INDEX_FIRST_PAGE;
    this.pageSize = this.availablePageSizes[0];
    this.itemsCount = 0;
    this.pageCount = 1;
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, GRID_PAGINATION_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeNav, attr, value);
    });
  }
  lastPage() {
    this.currentPage = this.pageCount - 1;
    this.emitPaginationChange();
  }
  nextPage() {
    if (this.canGoToNextPage()) {
      this.currentPage++;
      this.emitPaginationChange();
    }
  }
  canGoToNextPage() {
    return this.currentPage + 1 < this.pageCount;
  }
  previousPage() {
    if (this.canGoToPreviousPage()) {
      this.currentPage--;
      this.emitPaginationChange();
    }
  }
  canGoToPreviousPage() {
    return this.currentPage > 0;
  }
  firstPage() {
    this.currentPage = 0;
    this.emitPaginationChange();
  }
  onChangePagesize(event) {
    this.pageSize = event.detail.value;
    if (this.currentPage + 1 > this.pageSize) {
      this.currentPage = 0;
    }
    this.emitPaginationChange();
  }
  emitPaginationChange() {
    this.wcsGridPaginationChange.emit({
      pagination: {
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        itemsCount: this.itemsCount,
        pageCount: this.pageCount
      }
    });
  }
  render() {
    return h(Host, {
      key: "bee1c9832792c3385d522f9382de8636139d6161",
      slot: "grid-pagination"
    }, h("div", {
      key: "24a7aec2ad62883a7818b59f32f2965de3988f3e",
      class: "container"
    }, h("div", {
      key: "3abc3e73332eb167448133ad28a65a41c5e93e18",
      class: "page-size"
    }, h("wcs-select", {
      key: "8ed583efa8d183dff2ddeb776e650019a759f038",
      placeholder: "Eléments par page",
      class: "available-page-sizes",
      "aria-labelledby": "elements-per-page-number elements-per-page-text",
      value: this.pageSize,
      onWcsChange: this.onChangePagesize.bind(this)
    }, this.availablePageSizes.map((pageSize) => h("wcs-select-option", {
      value: pageSize
    }, pageSize))), h("span", {
      key: "ef0447a2215071dac316f9d037c34b408734c0ef",
      id: "elements-per-page-number",
      hidden: true
    }, this.pageSize), h("span", {
      key: "6420b20cd2edde465e28933b803c5dbbb3c44047",
      id: "elements-per-page-text"
    }, "éléments par page")), h("div", {
      key: "fbc0b228a34659ebdc91d31def44854fc99d1fc8",
      class: "items-count"
    }, h("span", {
      key: "5ab2756b28332b2a1851d3da15796b12306d5413"
    }, this.itemsCount, " éléments")), h("nav", Object.assign({
      key: "cd05b9352046ba7dc430e9bbd0e79032ce0ce6c3",
      "aria-label": "pagination",
      ref: (el) => this.nativeNav = el
    }, this.inheritedAttributes), h("ul", {
      key: "f9277ef66a0e6a3a25509acb9eb8e57e40952586",
      class: "page-management"
    }, h("li", {
      key: "eb412a9c0f1bac4a448aa544d83eefb64be3823b",
      class: "pagination-arrow",
      onClick: this.firstPage.bind(this)
    }, h(GridPaginationArrow, {
      key: "97efc725465d7bb97a228c653473726391bd250f",
      active: this.canGoToPreviousPage(),
      order: "previous",
      double: true
    })), h("li", {
      key: "d615cf6062d352803448a1a5195c6186e143dc6b",
      class: "pagination-arrow",
      onClick: this.previousPage.bind(this)
    }, h(GridPaginationArrow, {
      key: "1da29a9f802f71f0c699d9a438cf4a38c15d93c0",
      active: this.canGoToPreviousPage(),
      order: "previous"
    })), h("li", {
      key: "433186a63982aa5273ce804131383ef889dca97a",
      class: "pagination-counter"
    }, h("span", {
      key: "591352b4f4b95d56c3a20536ada90d42f67065f9",
      "aria-label": `Page ${this.currentPage + 1} sur ${this.pageCount}`,
      "aria-current": "page"
    }, this.currentPage + 1, " / ", this.pageCount)), h("li", {
      key: "e318556a6c650763afe8c005cfa751443a8da05d",
      class: "pagination-arrow",
      onClick: this.nextPage.bind(this)
    }, h(GridPaginationArrow, {
      key: "0598f1a9ace662c6aab71c2e3756c9b972145521",
      active: this.canGoToNextPage(),
      order: "next"
    })), h("li", {
      key: "a8caa45cc06ea000283e3acf3762bbfd2b8a41f4",
      class: "pagination-arrow",
      onClick: this.lastPage.bind(this)
    }, h(GridPaginationArrow, {
      key: "5c030a25a38832669d6c353b994a3269aee38ad9",
      active: this.canGoToNextPage(),
      order: "next",
      double: true
    }))))));
  }
  get el() {
    return getElement(this);
  }
};
GridPagination.INDEX_FIRST_PAGE = 0;
GridPagination.style = WcsGridPaginationStyle0;

export {
  GridPagination
};
//# sourceMappingURL=chunk-MABYRSGE.js.map
