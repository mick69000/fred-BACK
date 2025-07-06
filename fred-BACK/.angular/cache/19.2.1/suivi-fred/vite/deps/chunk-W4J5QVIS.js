// ../node_modules/wcs-core/dist/esm/control-component-interface-9f09e520.js
function isControlComponentWithLabel(el) {
  if (typeof el !== "object" || el === null || el === void 0) return false;
  return "getLabel" in el;
}
function getSlottedContentText(element, slotName) {
  if (!element.shadowRoot) {
    return "";
  }
  const slotSelector = typeof slotName === "string" ? `slot[name="${slotName}"]` : "slot:not([name])";
  const slotElement = element.shadowRoot.querySelector(slotSelector);
  if (!slotElement) {
    return "";
  }
  const assignedNodes = slotElement.assignedNodes({
    flatten: true
  });
  if (!assignedNodes.length) {
    return "";
  }
  return assignedNodes.map((node) => node.textContent || "").filter((text) => text.trim() !== "").join(" ").replace(/\s+/g, " ").trim();
}

export {
  isControlComponentWithLabel,
  getSlottedContentText
};
//# sourceMappingURL=chunk-W4J5QVIS.js.map
