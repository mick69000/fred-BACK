import {
  createPopper
} from "./chunk-7LPDYKUJ.js";
import {
  keyboardShortcutFromKeyboardEvent
} from "./chunk-TPUHIW5M.js";
import {
  WcsButtonSizeValues,
  isWcsButtonSize
} from "./chunk-57WEIDCW.js";
import {
  SelectArrow
} from "./chunk-6SHTIXBY.js";
import {
  clickTargetIsElementOrChildren,
  inheritAriaAttributes,
  inheritAttributes,
  setOrRemoveAttribute
} from "./chunk-NAIC4MMY.js";
import {
  Host,
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import {
  __async
} from "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-dropdown.entry.js
function getActionForKeyboardEvent(event, currentState) {
  const keyboardShortcut = keyboardShortcutFromKeyboardEvent(event);
  if (keyboardShortcut === "UNKNOWN") {
    return [];
  }
  switch (currentState) {
    case "closed":
      switch (keyboardShortcut) {
        case "UP_ARROW":
          return [{
            kind: "OpenMenu"
          }, {
            kind: "FocusItem",
            target: "last"
          }];
        case "DOWN_ARROW":
          return [{
            kind: "OpenMenu"
          }, {
            kind: "FocusItem",
            target: "first"
          }];
        case "SPACE":
        case "ENTER":
          return [{
            kind: "OpenMenu"
          }, {
            kind: "FocusItem",
            target: "first"
          }];
      }
      break;
    case "opened":
      switch (keyboardShortcut) {
        case "UP_ARROW":
          return [{
            kind: "FocusItem",
            target: "previous"
          }];
        case "DOWN_ARROW":
          return [{
            kind: "FocusItem",
            target: "next"
          }];
        case "HOME":
          return [{
            kind: "FocusItem",
            target: "first"
          }];
        case "END":
          return [{
            kind: "FocusItem",
            target: "last"
          }];
        case "ESCAPE":
        case "MAJ+TAB":
        case "TAB":
          return [{
            kind: "CloseMenu"
          }];
      }
      break;
    default:
      throw Error("Unknown error");
  }
  return [];
}
var dropdownCss = ':host{display:flex;--wcs-dropdown-outline-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-dropdown-padding-empty:var(--wcs-semantic-spacing-large);--wcs-dropdown-plain-arrow-color:var(--wcs-semantic-color-foreground-action-primary-default);--wcs-dropdown-stroked-arrow-color:var(--wcs-semantic-color-foreground-action-secondary-default);--wcs-dropdown-clear-arrow-color:var(--wcs-semantic-color-foreground-action-tertiary-default);--wcs-dropdown-arrow-color-disabled:var(--wcs-semantic-color-text-disabled);--wcs-dropdown-overlay-max-height:360px;--wcs-dropdown-overlay-padding:var(--wcs-semantic-spacing-base);--wcs-dropdown-overlay-background-color:var(--wcs-semantic-color-background-surface-primary);--wcs-dropdown-overlay-border-width:var(--wcs-semantic-border-width-default);--wcs-dropdown-overlay-border-radius:var(--wcs-semantic-border-radius-base);--wcs-dropdown-overlay-border-color:var(--wcs-semantic-color-border-secondary)}:host wcs-button{height:fit-content}:host svg{margin-right:-0.25rem}button{position:absolute;opacity:0;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;outline:0;outline-offset:0}button:focus-visible+wcs-button{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-dropdown-outline-color-focus);outline-offset:var(--wcs-semantic-spacing-small);border-radius:var(--wcs-button-border-radius)}@supports not selector(button:focus-visible + wcs-button){button:focus-within+wcs-button{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-dropdown-outline-color-focus);outline-offset:var(--wcs-semantic-spacing-small);border-radius:var(--wcs-button-border-radius)}}.wcs-button-content-wrapper{display:flex;align-items:center}.popover{display:none;border:var(--wcs-dropdown-overlay-border-width) solid var(--wcs-dropdown-overlay-border-color);border-radius:var(--wcs-dropdown-overlay-border-radius);background-color:var(--wcs-dropdown-overlay-background-color);z-index:9999}.show{display:block}.container{min-width:calc(10 * var(--wcs-semantic-size-base));border-radius:inherit;overflow:hidden;padding:var(--wcs-dropdown-overlay-padding);background-color:var(--wcs-dropdown-overlay-background-color)}:host([mode=clear]) .arrow{fill:var(--wcs-dropdown-clear-arrow-color)}:host([mode=stroked]) .arrow{fill:var(--wcs-dropdown-stroked-arrow-color)}:host([mode=plain]) .arrow{fill:var(--wcs-dropdown-plain-arrow-color)}:host([disabled]) .arrow{fill:var(--wcs-dropdown-arrow-color-disabled)}#arrow,#arrow::before{position:absolute;width:8px;height:8px;background:inherit;border:var(--wcs-dropdown-overlay-border-width) solid var(--wcs-dropdown-overlay-border-color)}#arrow{visibility:hidden;z-index:-1}#arrow::before{visibility:visible;content:"";transform:rotate(45deg)}#is-empty{display:block;width:20ch;padding:0 var(--wcs-dropdown-padding-empty)}.popover[data-popper-placement^=top]>#arrow{bottom:-5px}.popover[data-popper-placement^=bottom]>#arrow{top:-6px}.popover[data-popper-placement^=left]>#arrow{right:-4px}.popover[data-popper-placement^=right]>#arrow{left:-6px}';
var WcsDropdownStyle0 = dropdownCss;
var DROPDOWN_INHERITED_ATTRS = ["tabindex"];
var Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.noArrow = false;
    this.mode = "stroked";
    this.shape = "normal";
    this.size = "m";
    this.disabled = false;
    this.placement = "bottom-end";
    this.expanded = false;
  }
  get items() {
    return Array.from(this.el.querySelectorAll("wcs-dropdown-item"));
  }
  placementChange() {
    this.popper.setOptions(Object.assign(Object.assign({}, this.popper.state.options), {
      placement: this.placement
    })).then((_) => this.popper.update());
  }
  onBlur() {
    this.clearLastFocusedItem();
    this.expanded = false;
  }
  componentDidLoad() {
    if (!isWcsButtonSize(this.size)) {
      console.warn(`Invalid size value for wcs-dropdown : "${this.size}". Must be one of "${WcsButtonSizeValues.join(", ")}"`);
      this.size = "m";
    }
    this.popper = createPopper(this.wcsButton, this.popoverDiv, {
      placement: this.placement,
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, 8]
        }
      }]
    });
    this.fixForFirefoxBelow63();
  }
  fixForFirefoxBelow63() {
    const items = this.el.querySelectorAll("wcs-dropdown-item");
    const container = this.el.querySelector(".container");
    if (items.length > 0 && container) {
      items.forEach((i) => {
        this.el.removeChild(i);
        container.appendChild(i);
      });
    }
  }
  onButtonClick(_) {
    this.clearLastFocusedItem();
    this.expanded = !this.expanded;
    if (this.expanded) {
      this.focusItem(0);
    }
  }
  onWindowClickEvent(event) {
    const clickedOnDropdownOrChildren = clickTargetIsElementOrChildren(event, this.el);
    if (this.expanded && !clickedOnDropdownOrChildren) {
      this.expanded = false;
    }
  }
  dropdownItemClick(_) {
    this.expanded = false;
    this.nativeButton.focus();
  }
  onKeyDown(_event) {
    const currentState = this.expanded ? "opened" : "closed";
    const actionsFromKeyboardEvents = getActionForKeyboardEvent(_event, currentState);
    if (actionsFromKeyboardEvents.length != 0) {
      _event.preventDefault();
    }
    for (const actionFromKeyboardEvent of actionsFromKeyboardEvents) {
      this.doActionFromKeyboardEventAssociatedAction(actionFromKeyboardEvent);
    }
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeButton, attr, value);
    });
  }
  doActionFromKeyboardEventAssociatedAction(actionFromKeyboardEvent) {
    switch (actionFromKeyboardEvent.kind) {
      case "OpenMenu":
        this.expanded = true;
        this.focusItem(0);
        break;
      case "CloseMenu":
        this.expanded = false;
        this.nativeButton.focus();
        break;
      case "ClearFocus":
        this.clearLastFocusedItem();
        break;
      case "FocusItem":
        switch (actionFromKeyboardEvent.target) {
          case "previous":
            this.focusClosestItem("previous");
            break;
          case "next":
            this.focusClosestItem("next");
            break;
          case "first":
            this.focusItem(0);
            break;
          case "last":
            this.focusItem(this.items.length - 1);
            break;
        }
        break;
    }
  }
  /**
   * Removes the focus and tabindex 0 of the last focused item if any.
   * @private
   */
  clearLastFocusedItem() {
    if (this.lastFocusedItemElement) {
      this.lastFocusedItemElement.tabIndex = -1;
      this.lastFocusedItemElement = null;
    }
  }
  focusItem(indexToFocus) {
    this.clearLastFocusedItem();
    this.lastFocusedItemElement = this.items[indexToFocus];
    if (this.lastFocusedItemElement) {
      this.lastFocusedItemElement.tabIndex = 0;
      requestAnimationFrame(() => {
        var _a;
        (_a = this.lastFocusedItemElement) === null || _a === void 0 ? void 0 : _a.focus();
      });
    }
  }
  focusClosestItem(direction) {
    const indexToFocus = this.getClosestActiveItemIndexForDirection(direction);
    if (indexToFocus === -1) return;
    this.focusItem(indexToFocus);
  }
  getClosestActiveItemIndexForDirection(direction) {
    const items = this.items;
    let currentIndex = Array.from(items).indexOf(this.lastFocusedItemElement);
    const MIN_INDEX = 0;
    const MAX_INDEX = items.length - 1;
    if (direction === "next" && currentIndex < MAX_INDEX) {
      currentIndex++;
    } else if (direction === "previous" && currentIndex > MIN_INDEX) {
      currentIndex--;
    } else {
      if (direction === "next" && currentIndex >= MAX_INDEX) {
        currentIndex = 0;
      }
      if (direction === "previous" && currentIndex === MIN_INDEX) {
        currentIndex = MAX_INDEX;
      }
    }
    return currentIndex;
  }
  componentDidRender() {
    if (this.popper) {
      this.popper.update();
    }
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, DROPDOWN_INHERITED_ATTRS));
  }
  render() {
    return h(Host, {
      key: "1480819d88a274e16ebb4544de646c47748d8223"
    }, h("button", Object.assign({
      key: "f5695efc0671635050c8a72a22894ec68691ae18",
      id: "dropdown-button",
      "aria-controls": "menu",
      disabled: this.disabled,
      "aria-haspopup": "true",
      role: "button",
      "aria-expanded": this.expanded ? "true" : "false",
      ref: (el) => this.nativeButton = el,
      onClick: ($event) => this.onButtonClick($event),
      onBlur: ($event) => $event.stopImmediatePropagation()
    }, this.inheritedAttributes), "Dropdown"), h("wcs-button", {
      key: "6a6f447e212cebee7af2e73fe03cfe862c820c27",
      mode: this.mode,
      shape: this.shape,
      disabled: this.disabled,
      size: this.size,
      ref: (el) => this.wcsButton = el,
      "aria-hidden": "true",
      tabindex: -1,
      onClick: ($event) => this.onButtonClick($event),
      onBlur: (e) => e.stopImmediatePropagation()
    }, h("div", {
      key: "e2342ef539cfd88f61a5970f33c9cbce8dc29fa6",
      class: "wcs-button-content-wrapper"
    }, h("slot", {
      key: "1ce22f6b985d763763e4738d188e2e4f9540d8af",
      name: "placeholder"
    }), this.noArrow ? null : h(SelectArrow, {
      up: this.expanded
    }))), h("div", {
      key: "2e62c382bf097f6c85f2c590f8b98feb9d0f2993",
      class: (this.expanded ? "show " : "") + "popover",
      id: "menu",
      role: "menu",
      "aria-labelledby": "dropdown-button",
      tabindex: -1,
      ref: (el) => this.popoverDiv = el
    }, h("div", {
      key: "0556f15d918b936198d4ab61844ffada916bf328",
      role: "presentation",
      id: "arrow",
      "data-popper-arrow": true
    }), h("div", {
      key: "27129e6faa2a8921154b547e219e93543a72ac52",
      role: "presentation",
      class: "container"
    }, h("slot", {
      key: "484b677521290251daf185f50bbfc288538cb5ef",
      name: "item"
    }, h("span", {
      key: "6bdff4146ffe5a503fd024c6a0f89239c031daef",
      id: "is-empty"
    })))));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "placement": ["placementChange"]
    };
  }
};
Dropdown.style = WcsDropdownStyle0;
export {
  Dropdown as wcs_dropdown
};
//# sourceMappingURL=wcs-dropdown.entry-ZPMPUIJS.js.map
