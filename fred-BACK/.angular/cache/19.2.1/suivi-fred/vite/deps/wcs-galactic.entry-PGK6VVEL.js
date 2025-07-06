import {
  Host,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-galactic.entry.js
var galacticCss = ":host{--wcs-galactic-background-color:var(--wcs-semantic-color-background-surface-inverse);--wcs-galactic-text-color:var(--wcs-semantic-color-text-inverse);--wcs-galactic-height:var(--wcs-semantic-size-s);--wcs-galactic-font-size:var(--wcs-semantic-font-size-label-2);--wcs-galactic-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-galactic-max-width:var(--wcs-com-content-max-width);--wcs-galactic-padding-horizontal:calc(2 * var(--wcs-semantic-spacing-base));--wcs-galactic-logo-height:var(--wcs-semantic-size-s);--wcs-galactic-logo-margin-right:calc(2 * var(--wcs-semantic-spacing-base));--wcs-semantic-color-foreground-action-tertiary-default:var(--wcs-galactic-text-color);display:block;background-color:var(--wcs-galactic-background-color)}.container{height:var(--wcs-galactic-height);align-items:center;justify-content:space-between;color:var(--wcs-galactic-text-color);font-size:var(--wcs-galactic-font-size);font-weight:var(--wcs-galactic-font-weight);display:flex;max-width:var(--wcs-galactic-max-width);padding:0 var(--wcs-galactic-padding-horizontal);margin:0 auto}.container #sncf-logo{height:var(--wcs-galactic-logo-height);margin-right:var(--wcs-galactic-logo-margin-right)}.container .logo-container{display:flex;align-items:center}.actions-container{display:flex;align-items:center}";
var WcsGalacticStyle0 = galacticCss;
var Galactic = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = void 0;
    this.show = false;
  }
  render() {
    return h(Host, {
      key: "650d312b2d662bb9e900d330d9e89a279af10160"
    }, h("div", {
      key: "eee212ebe7bc3031b700cbcd959133ba3ab05457",
      class: "container"
    }, h("div", {
      key: "ee49e9c2e3cf1ed93c93812747374f4b2fb3c5aa",
      class: "logo-container"
    }, h("img", {
      key: "d40d693d547591e088e7b2d9e45a39db0152a166",
      src: SNCF_BASE64_SVG_LOGO,
      id: "sncf-logo",
      alt: "SNCF"
    }), h("span", {
      key: "e8e1ab2521b54b73ad3a9b27b82e19cc9a534b70"
    }, this.text)), h("div", {
      key: "2be508619dad9c082a129e2ec20fa298ebc4b0b5",
      class: "actions-container"
    }, h("slot", {
      key: "4df31395f1507d942e86971c041c41b17442c3a7"
    }))));
  }
};
var SNCF_BASE64_SVG_LOGO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHX0dSQURJRU5UIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAiIHkxPSIxNiIgeDI9IjMxLjk1OTMiIHkyPSIxNiI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiM4MzJGNzAiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4yNDcyIiBzdHlsZT0ic3RvcC1jb2xvcjojQUMyODdDIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuODE0NiIgc3R5bGU9InN0b3AtY29sb3I6I0RGMjUzMCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojREYyNTMwIi8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBmaWxsPSJ1cmwoI1NWR19HUkFESUVOVCkiIGQ9Ik0wLjYsNy43QzAuMiw3LjcsMCw3LjgsMCw4LjJ2MTUuN2MwLDAuMywwLjIsMC41LDAuNSwwLjVoMjhjMC4zLDAsMC41LDAsMC42LTAuNGMwLDAsMi44LTguOSwyLjktOSBjMC4xLTAuMywwLTAuNS0wLjMtMC43QzIyLjYsOC41LDguOSw3LjYsMi44LDcuNkMxLjksNy42LDEuMSw3LjYsMC42LDcuN3oiLz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNi40LDE3LjdjLTEtMC41LTEuNy0wLjgtMS42LTEuM0M1LDE1LjgsNi4xLDE1LjYsNywxNS42YzAuNSwwLDAuOCwwLjEsMS4yLDAuMmwwLjMtMS4xIGMtMC41LTAuMS0wLjgtMC4xLTEuNC0wLjFjLTEuOSwwLTMuNiwwLjUtNCwxLjZjLTAuNSwxLjMsMC45LDIsMi4yLDIuNmMxLDAuNSwxLjgsMC45LDEuNSwxLjVjLTAuMiwwLjUtMC45LDAuNy0yLDAuNyBjLTAuOSwwLTItMC4zLTIuOS0wLjdsLTAuNSwxLjFjMC42LDAuMywyLDAuNywzLjEsMC43YzIuMSwwLDMuNS0wLjUsNC4xLTEuN0M5LjMsMTkuMSw3LjcsMTguMyw2LjQsMTcuN3oiLz4NCgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNOS4zLDE5LjZDOS4zLDE5LjcsOS4zLDE5LjcsOS4zLDE5LjZjMC4xLDAsMC4xLDAsMC4xLDBjMCwwLDEtMy4yLDEtMy4yYzEuMSwxLjUsMi4xLDMuNSwyLjcsNS42aDEuNyBsMC45LTIuN2MwLDAsMCwwLDAuMSwwYzAsMCwwLDAsMC4xLDBjMC4zLDEuNywxLjksMi44LDQuMywyLjhjMS41LDAsMi45LTAuNCwzLjItMC42bDAuOS0yLjhoMy40bDAuMy0xLjFoLTMuNGwwLjYtMS44aDQuMSBsMC40LTEuMWgtNS43bC0xLjksNi4xYy0wLjQsMC4xLTAuOSwwLjItMS41LDAuMmMtMS4xLDAtMi4xLTAuMy0yLjYtMC45Yy0wLjQtMC41LTAuNS0xLTAuNC0xLjdjMC4yLTEuNiwxLjgtMi42LDMuOC0yLjYgYzAuNCwwLDAuOSwwLDEuMywwLjFsMC40LTEuMmMtMC41LTAuMS0xLjEtMC4xLTEuNy0wLjFjLTEuOCwwLTMuNCwwLjYtNC40LDEuN2MwLDAtMC4xLDAtMC4xLDBjMCwwLTAuMSwwLDAsMGwwLjUtMS42aC0xLjUgTDE0LDE5LjhjLTAuNS0xLjUtMS42LTMuNS0yLjktNS4xSDkuNWwtMS4yLDMuN0M4LjksMTguOCw5LjEsMTkuMiw5LjMsMTkuNnoiLz4NCjwvc3ZnPg0K";
Galactic.style = WcsGalacticStyle0;
export {
  Galactic as wcs_galactic
};
//# sourceMappingURL=wcs-galactic.entry-PGK6VVEL.js.map
