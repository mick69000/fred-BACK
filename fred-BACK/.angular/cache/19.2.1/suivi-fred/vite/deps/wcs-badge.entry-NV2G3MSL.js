import {
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-badge.entry.js
var badgeCss = ":host{--wcs-badge-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-badge-height-l:calc(4 * var(--wcs-semantic-size-base));--wcs-badge-font-size-l:var(--wcs-semantic-font-size-label-1);--wcs-badge-height-m:calc(3 * var(--wcs-semantic-size-base));--wcs-badge-font-size-m:var(--wcs-semantic-font-size-label-2);--wcs-badge-height-s:calc(2.5 * var(--wcs-semantic-size-base));--wcs-badge-font-size-s:var(--wcs-semantic-font-size-label-3);--wcs-badge-border-radius-default:var(--wcs-semantic-border-radius-base);--wcs-badge-border-radius-circular:var(--wcs-semantic-border-radius-full);--wcs-badge-background-color:var(--wcs-semantic-color-background-surface-brand);--wcs-badge-background-color-lighter:var(--wcs-semantic-color-background-surface-accent-lighter);--wcs-badge-color:var(--wcs-semantic-color-foreground-primary);--wcs-badge-color-lighter:var(--wcs-semantic-color-foreground-inverse);--wcs-badge-gap:var(--wcs-semantic-spacing-base);--wcs-badge-padding-horizontal-l:var(--wcs-semantic-spacing-base);--wcs-badge-padding-horizontal-m:var(--wcs-semantic-spacing-base);--wcs-badge-padding-horizontal-s:calc(0.75 * var(--wcs-semantic-spacing-base));display:inline-flex;gap:var(--wcs-badge-gap);padding:0 var(--wcs-badge-padding-horizontal);height:var(--wcs-badge-height);inline-size:fit-content;font-size:var(--wcs-badge-font-size);box-sizing:border-box;font-weight:var(--wcs-badge-font-weight);line-height:1;text-align:center;align-content:center;align-items:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--wcs-badge-border-radius-default);color:var(--wcs-badge-color);background-color:var(--wcs-badge-background-color)}:host([color=lighter]){--wcs-badge-color:var(--wcs-badge-color-lighter) !important;--wcs-badge-background-color:var(--wcs-badge-background-color-lighter) !important}:host([shape=rounded]){border-radius:var(--wcs-badge-border-radius-circular)}:host([size=l]){--wcs-badge-height:var(--wcs-badge-height-l);--wcs-badge-gap:calc(var(--wcs-semantic-spacing-large) / 2);--wcs-badge-font-size:var(--wcs-badge-font-size-l);--wcs-badge-padding-horizontal:var(--wcs-badge-padding-horizontal-l)}:host([size=m]){--wcs-badge-height:var(--wcs-badge-height-m);--wcs-badge-gap:calc(var(--wcs-semantic-spacing-base) / 2);--wcs-badge-font-size:var(--wcs-badge-font-size-m);--wcs-badge-padding-horizontal:var(--wcs-badge-padding-horizontal-m)}:host([size=s]){--wcs-badge-height:var(--wcs-badge-height-s);--wcs-badge-gap:calc(var(--wcs-semantic-spacing-small) / 2);--wcs-badge-font-size:var(--wcs-badge-font-size-s);--wcs-badge-padding-horizontal:var(--wcs-badge-padding-horizontal-s)}:host(.wcs-secondary){--wcs-badge-background-color:var(--wcs-semantic-color-background-surface-inverse);--wcs-badge-background-color-lighter:var(--wcs-semantic-color-background-surface-secondary);--wcs-badge-color:var(--wcs-semantic-color-foreground-primary);--wcs-badge-color-lighter:var(--wcs-semantic-color-foreground-inverse)}:host(.wcs-success){--wcs-badge-background-color:var(--wcs-semantic-color-background-surface-success-default);--wcs-badge-background-color-lighter:var(--wcs-semantic-color-background-surface-success-lighter);--wcs-badge-color:var(--wcs-semantic-color-foreground-primary);--wcs-badge-color-lighter:var(--wcs-semantic-color-foreground-inverse)}:host(.wcs-info){--wcs-badge-background-color:var(--wcs-semantic-color-background-surface-information-default);--wcs-badge-background-color-lighter:var(--wcs-semantic-color-background-surface-information-lighter);--wcs-badge-color:var(--wcs-semantic-color-foreground-primary);--wcs-badge-color-lighter:var(--wcs-semantic-color-foreground-inverse)}:host(.wcs-warning){--wcs-badge-background-color:var(--wcs-semantic-color-background-surface-warning-default);--wcs-badge-background-color-lighter:var(--wcs-semantic-color-background-surface-warning-lighter);--wcs-badge-color:var(--wcs-semantic-color-foreground-inverse);--wcs-badge-color-lighter:var(--wcs-semantic-color-foreground-inverse)}:host(.wcs-critical),:host(.wcs-danger){--wcs-badge-background-color:var(--wcs-semantic-color-background-surface-critical-default);--wcs-badge-background-color-lighter:var(--wcs-semantic-color-background-surface-critical-lightest);--wcs-badge-color:var(--wcs-semantic-color-foreground-primary);--wcs-badge-color-lighter:var(--wcs-semantic-color-foreground-critical)}";
var WcsBadgeStyle0 = badgeCss;
var Badge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.shape = "normal";
    this.color = "initial";
    this.size = "m";
  }
  render() {
    return h("slot", {
      key: "03ddc8c170819c33674104a70697291ef5e56a9d"
    });
  }
};
Badge.style = WcsBadgeStyle0;
export {
  Badge as wcs_badge
};
//# sourceMappingURL=wcs-badge.entry-NV2G3MSL.js.map
