import {
  Host,
  createEvent,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-tab.entry.js
var tabCss = ":host{display:block}:host([hidden]){display:none}";
var WcsTabStyle0 = tabCss;
var Tab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tabLoaded = createEvent(this, "tabLoaded", 7);
    this.header = void 0;
    this.itemKey = void 0;
  }
  componentDidLoad() {
    this.tabLoaded.emit();
  }
  render() {
    return h(Host, {
      key: "805ddbb0eafcce267e7f102f8d7c19712d5b04be",
      slot: "wcs-tab",
      role: "tabpanel"
    }, h("slot", {
      key: "ec2afee10cefdf575df100582e769e3bf93d2412"
    }));
  }
};
Tab.style = WcsTabStyle0;
export {
  Tab as wcs_tab
};
//# sourceMappingURL=wcs-tab.entry-ZRQRS75H.js.map
