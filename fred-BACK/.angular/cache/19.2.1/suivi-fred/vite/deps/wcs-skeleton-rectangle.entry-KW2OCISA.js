import {
  Host,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-skeleton-rectangle.entry.js
var skeletonRectangleCss = ":host{--wcs-skeleton-width:100%;--wcs-skeleton-height:100%;--wcs-skeleton-min-height:1rem;--wcs-skeleton-background-color:linear-gradient(90deg, rgba(0, 0, 0, 0.06) 25%, rgba(0, 0, 0, 0.15) 37%, rgba(0, 0, 0, 0.06) 63%);--wcs-skeleton-animation-duration:var(--wcs-semantic-motion-duration-animation-base);display:block;position:relative;overflow:hidden}:host span{display:flex;flex:1 1 auto;height:var(--wcs-skeleton-height);width:var(--wcs-skeleton-width);min-height:var(--wcs-skeleton-min-height);background:var(--wcs-skeleton-background-color);background-size:400% 100%}:host([animation=glide]) span{animation:glide var(--wcs-skeleton-animation-duration) ease-in-out infinite}:host([animation=pulse]){animation:pulse var(--wcs-skeleton-animation-duration) ease-in-out infinite}@keyframes glide{from{background-position:100% 50%}to{background-position:0 50%}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}:host{--wcs-skeleton-border-radius:0rem}:host span{border-radius:var(--wcs-skeleton-border-radius)}:host([rounded]){--wcs-skeleton-border-radius:var(--wcs-semantic-border-radius-base)}";
var WcsSkeletonRectangleStyle0 = skeletonRectangleCss;
var SkeletonRectangle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.animation = "glide";
    this.rounded = false;
    this.height = "auto";
    this.width = "auto";
  }
  render() {
    return h(Host, {
      key: "79da527f4afa1c4b972d8a91cf97aadf90c207f8",
      style: {
        height: this.height,
        width: this.width
      }
    }, h("span", {
      key: "53c1ad5daec31199e59326a2fd7e1730c895c2f6",
      "aria-hidden": "true"
    }));
  }
};
SkeletonRectangle.style = WcsSkeletonRectangleStyle0;
export {
  SkeletonRectangle as wcs_skeleton_rectangle
};
//# sourceMappingURL=wcs-skeleton-rectangle.entry-KW2OCISA.js.map
