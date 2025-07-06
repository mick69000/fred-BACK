import {
  Host,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-skeleton-circle.entry.js
var skeletonCircleCss = ":host{--wcs-skeleton-width:100%;--wcs-skeleton-height:100%;--wcs-skeleton-min-height:1rem;--wcs-skeleton-background-color:linear-gradient(90deg, rgba(0, 0, 0, 0.06) 25%, rgba(0, 0, 0, 0.15) 37%, rgba(0, 0, 0, 0.06) 63%);--wcs-skeleton-animation-duration:var(--wcs-semantic-motion-duration-animation-base);display:block;position:relative;overflow:hidden}:host span{display:flex;flex:1 1 auto;height:var(--wcs-skeleton-height);width:var(--wcs-skeleton-width);min-height:var(--wcs-skeleton-min-height);background:var(--wcs-skeleton-background-color);background-size:400% 100%}:host([animation=glide]) span{animation:glide var(--wcs-skeleton-animation-duration) ease-in-out infinite}:host([animation=pulse]){animation:pulse var(--wcs-skeleton-animation-duration) ease-in-out infinite}@keyframes glide{from{background-position:100% 50%}to{background-position:0 50%}}@keyframes pulse{0%{opacity:1}50%{opacity:0.4}100%{opacity:1}}:host{--wcs-skeleton-circle-border-radius:var(--wcs-semantic-border-radius-full);aspect-ratio:1/1;border-radius:var(--wcs-skeleton-circle-border-radius)}";
var WcsSkeletonCircleStyle0 = skeletonCircleCss;
var SkeletonCircle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.animation = "glide";
    this.radius = 50;
  }
  render() {
    return h(Host, {
      key: "35693d9a55aa03effb704c51234571cd9ebbbeac",
      style: {
        width: `${this.radius}px`,
        height: `${this.radius}px`
      }
    }, h("span", {
      key: "b1e806d2d016647626956aeb2962681d13083762",
      "aria-hidden": "true"
    }));
  }
};
SkeletonCircle.style = WcsSkeletonCircleStyle0;
export {
  SkeletonCircle as wcs_skeleton_circle
};
//# sourceMappingURL=wcs-skeleton-circle.entry-DCSSH7RC.js.map
