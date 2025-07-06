import {
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-skeleton-text.entry.js
var skeletonTextCss = ":host{--wcs-skeleton-width:100%;--wcs-skeleton-height:100%;--wcs-skeleton-min-height:1rem;--wcs-skeleton-background-color:linear-gradient(90deg, rgba(0, 0, 0, 0.06) 25%, rgba(0, 0, 0, 0.15) 37%, rgba(0, 0, 0, 0.06) 63%);--wcs-skeleton-animation-duration:var(--wcs-semantic-motion-duration-animation-base);display:block;position:relative;overflow:hidden}:host span{display:flex;flex:1 1 auto;height:var(--wcs-skeleton-height);width:var(--wcs-skeleton-width);min-height:var(--wcs-skeleton-min-height);background:var(--wcs-skeleton-background-color);background-size:400% 100%}:host([animation=glide]) span{animation:glide var(--wcs-skeleton-animation-duration) ease-in-out infinite}:host([animation=pulse]){animation:pulse var(--wcs-skeleton-animation-duration) ease-in-out infinite}@keyframes glide{from{background-position:100% 50%}to{background-position:0 50%}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}:host{--wcs-skeleton-text-height:var(--wcs-semantic-font-size-base);--wcs-skeleton-text-height-h1:var(--wcs-semantic-font-size-heading-1);--wcs-skeleton-text-height-h2:var(--wcs-semantic-font-size-heading-2);--wcs-skeleton-text-height-h3:var(--wcs-semantic-font-size-heading-3);--wcs-skeleton-text-height-body:var(--wcs-semantic-font-size-body-3);--wcs-skeleton-text-height-caption:var(--wcs-semantic-font-size-caption-1)}:host([height=h1]){height:var(--wcs-skeleton-text-height-h1)}:host([height=h2]){height:var(--wcs-skeleton-text-height-h2)}:host([height=h3]){height:var(--wcs-skeleton-text-height-h3)}:host([height=body]){height:var(--wcs-skeleton-text-height-body)}:host([height=caption]){height:var(--wcs-skeleton-text-height-caption)}";
var WcsSkeletonTextStyle0 = skeletonTextCss;
var SkeletonText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.animation = "glide";
    this.height = "body";
  }
  render() {
    return h("span", {
      key: "9f7fd22e258db1be4ca8aef533e548fe14fc24ea",
      "aria-hidden": "true"
    });
  }
};
SkeletonText.style = WcsSkeletonTextStyle0;
export {
  SkeletonText as wcs_skeleton_text
};
//# sourceMappingURL=wcs-skeleton-text.entry-MO33ZOK4.js.map
