import {
  Host,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-hint.entry.js
var hintCss = ":host{--wcs-hint-font-size-default:var(--wcs-semantic-font-size-caption-2);--wcs-hint-font-size-small:var(--wcs-semantic-font-size-caption-3);--wcs-hint-font-weight:var(--wcs-semantic-font-weight-book);--wcs-hint-color:var(--wcs-semantic-color-text-secondary);font-size:var(--wcs-hint-font-size-default);font-weight:var(--wcs-hint-font-weight);color:var(--wcs-hint-color)}:host([small]){font-size:var(--wcs-hint-font-size-small);font-weight:var(--wcs-hint-font-weight)}";
var WcsHintStyle0 = hintCss;
var Hint = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.small = false;
  }
  render() {
    return h(Host, {
      key: "e143c56dcc628774eecfc09ce5d0151703cffa89",
      slot: "messages"
    }, h("slot", {
      key: "da1cf4e019f6dd0416402a77abd360806c5892e4"
    }));
  }
};
Hint.style = WcsHintStyle0;
export {
  Hint as wcs_hint
};
//# sourceMappingURL=wcs-hint.entry-IPURQ3XM.js.map
