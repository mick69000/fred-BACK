// ../node_modules/wcs-core/dist/esm/accessibility-069640cf.js
function isElementFocused(element) {
  return element === document.activeElement;
}
var wcsFocusableElements = ["wcs-select", "wcs-select-option", "wcs-dropdown", "wcs-dropdown-item", "wcs-nav-item", "wcs-button", "wcs-input", "wcs-textarea", "wcs-checkbox", "wcs-radio", "wcs-switch", "wcs-tab", "wcs-counter"];
function isWcsFocusableElement(element) {
  return wcsFocusableElements.includes(element.tagName.toLowerCase());
}
function isFocusable(element) {
  if (parseInt(element.getAttribute("tabindex")) < 0) {
    return false;
  }
  if (element.disabled) {
    return false;
  }
  const boundingRect = element.getBoundingClientRect();
  if (boundingRect.bottom === 0 && boundingRect.top === 0 && boundingRect.left === 0 && boundingRect.right === 0 && boundingRect.height === 0 && boundingRect.width === 0 && boundingRect.x === 0 && boundingRect.y === 0) {
    return false;
  }
  if (element.style.display === "none" || element.style.visibility === "hidden" || element.style.opacity === 0) {
    return false;
  }
  if (element.getAttribute("role") === "button") {
    return true;
  }
  if (isWcsFocusableElement(element)) {
    return true;
  }
  switch (element.nodeName) {
    case "A":
      return !!element.href && element.rel !== "ignore";
    case "INPUT":
      return element.type !== "hidden";
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return true;
    default:
      return false;
  }
}

export {
  isElementFocused,
  isFocusable
};
//# sourceMappingURL=chunk-BM6XL573.js.map
