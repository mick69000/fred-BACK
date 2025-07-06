// ../node_modules/wcs-core/dist/esm/helpers-ece6a2d3.js
function isElement(element) {
  return "clientWidth" in element && "clientHeight" in element;
}
function hasShadowDom(el) {
  return !!el.shadowRoot && !!el.attachShadow;
}
var debounceEvent = (event, wait) => {
  const original = event._original || event;
  return {
    _original: event,
    emit: debounce(original.emit.bind(original), wait)
  };
};
var debounce = (func, wait = 0) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(func, wait, ...args);
  };
};
var inheritAttributes = (el, attributes = []) => {
  const attributeObject = {};
  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = el.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });
  return attributeObject;
};
var ariaAttributes = ["role", "aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-braillelabel", "aria-brailleroledescription", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colindextext", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-description", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowindextext", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"];
var inheritAriaAttributes = (el, ignoreList) => {
  let attributesToInherit = ariaAttributes;
  if (ignoreList && ignoreList.length > 0) {
    attributesToInherit = attributesToInherit.filter((attr) => !ignoreList.includes(attr));
  }
  return inheritAttributes(el, attributesToInherit);
};
function setOrRemoveAttribute(el, attr, value) {
  if (el) {
    if (value === void 0 || value === null) {
      el.removeAttribute(attr);
    } else {
      el.setAttribute(attr, value);
    }
  }
}
var findItemLabel = (componentEl) => {
  const itemEl = componentEl.closest("wcs-form-field");
  if (itemEl) {
    return itemEl.querySelector("wcs-label");
  }
  return null;
};
var compareLists = (sourceList, newList, compareFn) => {
  const removed = sourceList.filter((val) => !newList.some((newVal) => compareFn(val, newVal)));
  const kept = sourceList.filter((val) => newList.some((newVal) => compareFn(val, newVal)));
  const added = newList.filter((val) => !sourceList.some((sourceVal) => compareFn(val, sourceVal)));
  return {
    removed,
    kept,
    added
  };
};
function normalizeWhitespace(content) {
  var _a, _b;
  return (_b = (_a = content === null || content === void 0 ? void 0 : content.replace(/\s+/g, " ")) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "";
}
var raf = (h) => {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(h);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(h);
  }
  return setTimeout(h);
};
var clickInsideElement = (event, element) => {
  return event.x >= element.getBoundingClientRect().x && event.x <= element.getBoundingClientRect().x + element.getBoundingClientRect().width && event.y >= element.getBoundingClientRect().y && event.y <= element.getBoundingClientRect().y + element.getBoundingClientRect().height;
};
var clickTargetIsElementOrChildren = (mouseEvent, element) => {
  return mouseEvent.target instanceof Node && element.contains(mouseEvent.target);
};
function generateUniqueId(componentName) {
  return componentName + "-" + Math.random().toString(36);
}
function isMouseEvent(event) {
  return "clientX" in event;
}
function isKeyup(evt) {
  return evt.code === "ArrowUp";
}
function isKeydown(evt) {
  return evt.code === "ArrowDown";
}
function isEscapeKey(evt) {
  return evt.code === "Escape";
}
function isSpaceKey(evt) {
  return evt.code === "Space";
}
function isEnterKey(evt) {
  return evt.key === "Enter";
}
function isHomeKey(evt) {
  return evt.code === "Home";
}
function isEndKey(evt) {
  return evt.code === "End";
}
function isUpArrowKey(evt) {
  return evt.key === "ArrowUp";
}
function isDownArrowKey(evt) {
  return evt.key === "ArrowDown";
}
function isLeftArrowKey(evt) {
  return evt.key === "ArrowLeft";
}
function isRightArrowKey(evt) {
  return evt.key === "ArrowRight";
}
function isPageDownKey(evt) {
  return evt.key === "PageDown";
}
function isPageUpKey(evt) {
  return evt.key === "PageUp";
}
function isTabKey(evt) {
  return evt.key === "Tab";
}
function getCssRootPropertyValue(name) {
  return window.getComputedStyle(document.body).getPropertyValue(name) || null;
}
function parseCssTimeValueToMilliseconds(timeValue) {
  if (!timeValue) return 0;
  const TIME_REGEX = /^([\d.]+)(?:(ms|s))?$/;
  const trimmedValue = timeValue.trim();
  if (!/^\d/.test(trimmedValue)) return 0;
  const match = TIME_REGEX.exec(trimmedValue);
  if (!match) return 0;
  const value = Number(match[1]);
  if (!Number.isFinite(value)) return 0;
  return match[2] === "s" ? value * 1e3 : value;
}

export {
  isElement,
  hasShadowDom,
  debounceEvent,
  inheritAttributes,
  inheritAriaAttributes,
  setOrRemoveAttribute,
  findItemLabel,
  compareLists,
  normalizeWhitespace,
  raf,
  clickInsideElement,
  clickTargetIsElementOrChildren,
  generateUniqueId,
  isMouseEvent,
  isKeyup,
  isKeydown,
  isEscapeKey,
  isSpaceKey,
  isEnterKey,
  isHomeKey,
  isEndKey,
  isUpArrowKey,
  isDownArrowKey,
  isLeftArrowKey,
  isRightArrowKey,
  isPageDownKey,
  isPageUpKey,
  isTabKey,
  getCssRootPropertyValue,
  parseCssTimeValueToMilliseconds
};
//# sourceMappingURL=chunk-NAIC4MMY.js.map
