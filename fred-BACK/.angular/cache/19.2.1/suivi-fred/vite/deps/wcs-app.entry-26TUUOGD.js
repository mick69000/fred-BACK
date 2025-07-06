import {
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-app.entry.js
var appCss = ':host{background-color:var(--wcs-semantic-color-background-surface-secondary);margin:0;display:grid;grid-template-areas:"header header" "sidebar content";grid-template-columns:min-content auto;overflow-y:hidden}::slotted(main){padding:8px;grid-area:content;overflow-y:scroll;height:calc(100vh - 64px)}::slotted(wcs-header){grid-area:header}@media screen and (max-width: 768px){:host{grid-template-areas:"header" "sidebar" "content";grid-template-columns:auto}::slotted(header){position:relative}::slotted(main){overflow-y:visible;height:initial}}';
var WcsAppStyle0 = appCss;
var App = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return [h("slot", {
      key: "5655ce9854ae1038dac8b4402eb8ac5d9da440bf",
      name: "header"
    }), h("slot", {
      key: "613126c7ae2b38cf7704dcef94e67c638027bcee",
      name: "sidebar"
    }), h("slot", {
      key: "e845a127c56be76787b6902a4ad11aebc1d3fc87",
      name: "content"
    })];
  }
};
App.style = WcsAppStyle0;
export {
  App as wcs_app
};
//# sourceMappingURL=wcs-app.entry-26TUUOGD.js.map
