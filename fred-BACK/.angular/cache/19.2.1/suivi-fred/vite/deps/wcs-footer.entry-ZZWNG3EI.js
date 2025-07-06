import {
  Host,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-footer.entry.js
var footerCss = ":host{--wcs-footer-background-color:var(--wcs-semantic-color-background-surface-inverse);--wcs-footer-text-color:var(--wcs-semantic-color-text-inverse);--wcs-footer-link-text-color:var(--wcs-semantic-color-text-inverse);--wcs-footer-link-text-color-hover:var(--wcs-semantic-color-text-inverse);--wcs-footer-link-font-size:var(--wcs-semantic-font-size-label-2);--wcs-footer-link-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-footer-link-gap:calc(4 * var(--wcs-semantic-spacing-base));--wcs-footer-gap:var(--wcs-semantic-spacing-large);--wcs-footer-end-gap:var(--wcs-semantic-spacing-large);--wcs-footer-max-width:var(--wcs-semantic-breakpoint-desktop, var(--wcs-com-content-max-width));--wcs-footer-padding:calc(3 * var(--wcs-semantic-spacing-base));display:block;width:100%;background-color:var(--wcs-footer-background-color);color:var(--wcs-footer-text-color)}:host .end{margin-top:var(--wcs-footer-gap);gap:var(--wcs-footer-end-gap);width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline}:host .end .end-left,:host .end .end-right{display:flex;flex-wrap:wrap;column-gap:var(--wcs-footer-link-gap)}@media only screen and (max-width: 1024px){:host .end .end-left,:host .end .end-right{flex-direction:column}}:host .end slot[name=end-left]::slotted(a){color:var(--wcs-footer-link-text-color, var(--wcs-footer-text-color));font-size:14px;font-weight:500;text-decoration:none}:host .end slot[name=end-left]::slotted(a:hover){color:var(--wcs-footer-link-text-color-hover)}:host .container{margin:0 auto;display:flex;flex-direction:column;max-width:var(--wcs-footer-max-width);padding:var(--wcs-footer-padding)}";
var WcsFooterStyle0 = footerCss;
var Footer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, {
      key: "98c10026067800d6d448f8f294f17b94d3f47bff"
    }, h("footer", {
      key: "6cba4d564d2febebb9a86489f664fa11f15a915a",
      role: "contentinfo"
    }, h("div", {
      key: "435b4010ba33fd6426dc9b55f2d38ad35883cc8d",
      class: "container"
    }, h("div", {
      key: "a3a5f625ac9d40d3550d43f1be880f53995cdca1"
    }, h("slot", {
      key: "720270631183615417cf4436bb8977e54e167d70"
    })), h("div", {
      key: "48bc00852f3ef7703153dfc185e2dab24a47b921",
      class: "end"
    }, h("div", {
      key: "591e2769df499367ff23948ba1960c67bf068e0c",
      class: "end-left"
    }, h("slot", {
      key: "edcfaa3ef55a895a975fe0571e0346a86ac784d6",
      name: "end-left"
    })), h("div", {
      key: "0ef66c2342f680b5ebd6ff6bfdd90b67b7675d47",
      class: "end-right"
    }, h("slot", {
      key: "8a58b3a68a545e1cb7941784e2d437dd9099b9ab",
      name: "end-right"
    }))))));
  }
};
Footer.style = WcsFooterStyle0;
export {
  Footer as wcs_footer
};
//# sourceMappingURL=wcs-footer.entry-ZZWNG3EI.js.map
