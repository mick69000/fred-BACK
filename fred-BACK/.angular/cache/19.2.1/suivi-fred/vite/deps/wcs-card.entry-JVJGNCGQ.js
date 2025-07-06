import {
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-card.entry.js
var cardCss = ":host{--wcs-card-border-color:var(--wcs-semantic-color-border-secondary);--wcs-card-border-radius:var(--wcs-semantic-border-radius-base);--wcs-card-border-width:var(--wcs-semantic-border-width-default);--wcs-card-background-color:var(--wcs-semantic-color-background-surface-primary);--wcs-card-text-color:var(--wcs-semantic-color-text-primary);position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box;border-radius:var(--wcs-card-border-radius);background-color:var(--wcs-card-background-color);color:var(--wcs-card-text-color)}:host([mode=raised]){box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)}:host([mode=flat]){border:solid var(--wcs-card-border-width) var(--wcs-card-border-color)}";
var WcsCardStyle0 = cardCss;
var Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mode = "flat";
  }
  render() {
    return h("slot", {
      key: "da921d2df1dcee64b8e8edd17805e37a15544f05"
    });
  }
};
Card.style = WcsCardStyle0;
export {
  Card as wcs_card
};
//# sourceMappingURL=wcs-card.entry-JVJGNCGQ.js.map
