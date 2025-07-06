// ../node_modules/wcs-core/dist/esm/mutable-aria-attribute-e225edc1.js
function isMutableAriaAttribute(el) {
  if (typeof el !== "object" || el === null || el === void 0) return false;
  return "setAriaAttribute" in el;
}

export {
  isMutableAriaAttribute
};
//# sourceMappingURL=chunk-E6CE7AQ4.js.map
