import {
  getCssRootPropertyValue
} from "./chunk-NAIC4MMY.js";

// ../node_modules/wcs-core/dist/esm/com-nav-utils-ee7bf77c.js
function registerCloseHandlerForFocusOutEventOn(navigableItems, nodeNameToClose) {
  navigableItems.forEach((navigableItem) => {
    navigableItem.addEventListener("focusout", (evt) => {
      const relatedTargetElement = evt.relatedTarget;
      if (!isElementChildOfNavigableItem(navigableItem, relatedTargetElement)) {
        const eventComposedPath = evt.composedPath();
        if (isEventThrownFromChildOfNodeNameToClose(eventComposedPath, nodeNameToClose)) {
          eventComposedPath.filter(eventTargetNodeNameEquals(nodeNameToClose))[0].close();
        }
      }
    });
  });
}
function isElementChildOfNavigableItem(navigableItem, element) {
  return navigableItem.contains(element);
}
function eventTargetNodeNameEquals(nodeName) {
  return (x) => x.nodeName === nodeName;
}
function isEventThrownFromChildOfNodeNameToClose(eventComposedPath, nodeName) {
  return eventComposedPath.map((x) => x.nodeName).indexOf(nodeName) !== -1;
}
function comNavDidLoadWithResizeObserver(comNavElement) {
  const smallBreakpoint = getCssRootPropertyValue("--wcs-phone-breakpoint-max-width") || "575px";
  const smallBreakpointValue = parseInt(smallBreakpoint, 10);
  return new ResizeObserver((entry) => {
    const cr = entry[0].contentRect;
    const paddingRight = cr.right - cr.width;
    const paddingLeft = cr.left;
    if (cr.width <= smallBreakpointValue - (paddingLeft + paddingRight)) {
      comNavElement.currentActiveSizing = "mobile";
    } else {
      comNavElement.currentActiveSizing = "desktop";
    }
  });
}

export {
  registerCloseHandlerForFocusOutEventOn,
  comNavDidLoadWithResizeObserver
};
//# sourceMappingURL=chunk-ZSTPLX2F.js.map
