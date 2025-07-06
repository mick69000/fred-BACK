import {
  WcsButtonSizeValues,
  isWcsButtonSize
} from "./chunk-57WEIDCW.js";
import {
  hasShadowDom,
  inheritAriaAttributes,
  inheritAttributes,
  setOrRemoveAttribute
} from "./chunk-NAIC4MMY.js";
import {
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import {
  __async
} from "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-button_2.entry.js
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
  if (forceRefresh === void 0) {
    forceRefresh = false;
  }
  var CSS = windowObj.CSS;
  var supportsCssVars = supportsCssVariables_;
  if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
    return supportsCssVariables_;
  }
  var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
  if (!supportsFunctionPresent) {
    return false;
  }
  var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
  var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }
  return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
  if (!evt) {
    return {
      x: 0,
      y: 0
    };
  }
  var x = pageOffset.x, y = pageOffset.y;
  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;
  var normalizedX;
  var normalizedY;
  if (evt.type === "touchstart") {
    var touchEvent = evt;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    var mouseEvent = evt;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }
  return {
    x: normalizedX,
    y: normalizedY
  };
}
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var MDCFoundation = (
  /** @class */
  function() {
    function MDCFoundation2(adapter) {
      if (adapter === void 0) {
        adapter = {};
      }
      this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation2, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCFoundation2, "strings", {
      get: function() {
        return {};
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCFoundation2, "numbers", {
      get: function() {
        return {};
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCFoundation2, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: false,
      configurable: true
    });
    MDCFoundation2.prototype.init = function() {
    };
    MDCFoundation2.prototype.destroy = function() {
    };
    return MDCFoundation2;
  }()
);
var MDCComponent = (
  /** @class */
  function() {
    function MDCComponent2(root, foundation) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      this.root = root;
      this.initialize.apply(this, __spreadArray([], __read(args)));
      this.foundation = foundation === void 0 ? this.getDefaultFoundation() : foundation;
      this.foundation.init();
      this.initialSyncWithDOM();
    }
    MDCComponent2.attachTo = function(root) {
      return new MDCComponent2(root, new MDCFoundation({}));
    };
    MDCComponent2.prototype.initialize = function() {
      var _args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
      }
    };
    MDCComponent2.prototype.getDefaultFoundation = function() {
      throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class");
    };
    MDCComponent2.prototype.initialSyncWithDOM = function() {
    };
    MDCComponent2.prototype.destroy = function() {
      this.foundation.destroy();
    };
    MDCComponent2.prototype.listen = function(evtType, handler, options) {
      this.root.addEventListener(evtType, handler, options);
    };
    MDCComponent2.prototype.unlisten = function(evtType, handler, options) {
      this.root.removeEventListener(evtType, handler, options);
    };
    MDCComponent2.prototype.emit = function(evtType, evtData, shouldBubble) {
      if (shouldBubble === void 0) {
        shouldBubble = false;
      }
      var evt;
      if (typeof CustomEvent === "function") {
        evt = new CustomEvent(evtType, {
          bubbles: shouldBubble,
          detail: evtData
        });
      } else {
        evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }
      this.root.dispatchEvent(evt);
    };
    return MDCComponent2;
  }()
);
function applyPassive(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  return supportsPassiveOption(globalObj) ? {
    passive: true
  } : false;
}
function supportsPassiveOption(globalObj) {
  if (globalObj === void 0) {
    globalObj = window;
  }
  var passiveSupported = false;
  try {
    var options = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    var handler = function() {
    };
    globalObj.document.addEventListener("test", handler, options);
    globalObj.document.removeEventListener("test", handler, options);
  } catch (err) {
    passiveSupported = false;
  }
  return passiveSupported;
}
function matches(element, selector) {
  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
};
var strings = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
};
var numbers = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
var ACTIVATION_EVENT_TYPES = ["touchstart", "pointerdown", "mousedown", "keydown"];
var POINTER_DEACTIVATION_EVENT_TYPES = ["touchend", "pointerup", "mouseup", "contextmenu"];
var activatedTargets = [];
var MDCRippleFoundation = (
  /** @class */
  function(_super) {
    __extends(MDCRippleFoundation2, _super);
    function MDCRippleFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
      _this.activationAnimationHasEnded = false;
      _this.activationTimer = 0;
      _this.fgDeactivationRemovalTimer = 0;
      _this.fgScale = "0";
      _this.frame = {
        width: 0,
        height: 0
      };
      _this.initialSize = 0;
      _this.layoutFrame = 0;
      _this.maxRadius = 0;
      _this.unboundedCoords = {
        left: 0,
        top: 0
      };
      _this.activationState = _this.defaultActivationState();
      _this.activationTimerCallback = function() {
        _this.activationAnimationHasEnded = true;
        _this.runDeactivationUXLogicIfReady();
      };
      _this.activateHandler = function(e) {
        _this.activateImpl(e);
      };
      _this.deactivateHandler = function() {
        _this.deactivateImpl();
      };
      _this.focusHandler = function() {
        _this.handleFocus();
      };
      _this.blurHandler = function() {
        _this.handleBlur();
      };
      _this.resizeHandler = function() {
        _this.layout();
      };
      return _this;
    }
    Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
      get: function() {
        return cssClasses;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "strings", {
      get: function() {
        return strings;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "numbers", {
      get: function() {
        return numbers;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          browserSupportsCssVars: function() {
            return true;
          },
          computeBoundingRect: function() {
            return {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: 0,
              height: 0
            };
          },
          containsEventTarget: function() {
            return true;
          },
          deregisterDocumentInteractionHandler: function() {
            return void 0;
          },
          deregisterInteractionHandler: function() {
            return void 0;
          },
          deregisterResizeHandler: function() {
            return void 0;
          },
          getWindowPageOffset: function() {
            return {
              x: 0,
              y: 0
            };
          },
          isSurfaceActive: function() {
            return true;
          },
          isSurfaceDisabled: function() {
            return true;
          },
          isUnbounded: function() {
            return true;
          },
          registerDocumentInteractionHandler: function() {
            return void 0;
          },
          registerInteractionHandler: function() {
            return void 0;
          },
          registerResizeHandler: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          updateCssVariable: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCRippleFoundation2.prototype.init = function() {
      var _this = this;
      var supportsPressRipple = this.supportsPressRipple();
      this.registerRootHandlers(supportsPressRipple);
      if (supportsPressRipple) {
        var _a = MDCRippleFoundation2.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
        requestAnimationFrame(function() {
          _this.adapter.addClass(ROOT_1);
          if (_this.adapter.isUnbounded()) {
            _this.adapter.addClass(UNBOUNDED_1);
            _this.layoutInternal();
          }
        });
      }
    };
    MDCRippleFoundation2.prototype.destroy = function() {
      var _this = this;
      if (this.supportsPressRipple()) {
        if (this.activationTimer) {
          clearTimeout(this.activationTimer);
          this.activationTimer = 0;
          this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
        }
        if (this.fgDeactivationRemovalTimer) {
          clearTimeout(this.fgDeactivationRemovalTimer);
          this.fgDeactivationRemovalTimer = 0;
          this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
        }
        var _a = MDCRippleFoundation2.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
        requestAnimationFrame(function() {
          _this.adapter.removeClass(ROOT_2);
          _this.adapter.removeClass(UNBOUNDED_2);
          _this.removeCssVars();
        });
      }
      this.deregisterRootHandlers();
      this.deregisterDeactivationHandlers();
    };
    MDCRippleFoundation2.prototype.activate = function(evt) {
      this.activateImpl(evt);
    };
    MDCRippleFoundation2.prototype.deactivate = function() {
      this.deactivateImpl();
    };
    MDCRippleFoundation2.prototype.layout = function() {
      var _this = this;
      if (this.layoutFrame) {
        cancelAnimationFrame(this.layoutFrame);
      }
      this.layoutFrame = requestAnimationFrame(function() {
        _this.layoutInternal();
        _this.layoutFrame = 0;
      });
    };
    MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
      var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
      if (unbounded) {
        this.adapter.addClass(UNBOUNDED);
      } else {
        this.adapter.removeClass(UNBOUNDED);
      }
    };
    MDCRippleFoundation2.prototype.handleFocus = function() {
      var _this = this;
      requestAnimationFrame(function() {
        return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
      });
    };
    MDCRippleFoundation2.prototype.handleBlur = function() {
      var _this = this;
      requestAnimationFrame(function() {
        return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
      });
    };
    MDCRippleFoundation2.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation2.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: false,
        isActivated: false,
        isProgrammatic: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false
      };
    };
    MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
      var e_1, _a;
      if (supportsPressRipple) {
        try {
          for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
            var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
            this.adapter.registerInteractionHandler(evtType, this.activateHandler);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a = ACTIVATION_EVENT_TYPES_1.return)) _a.call(ACTIVATION_EVENT_TYPES_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        if (this.adapter.isUnbounded()) {
          this.adapter.registerResizeHandler(this.resizeHandler);
        }
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler);
      this.adapter.registerInteractionHandler("blur", this.blurHandler);
    };
    MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
      var e_2, _a;
      if (evt.type === "keydown") {
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      } else {
        try {
          for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
            var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
            this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_1.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
    };
    MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
      var e_3, _a;
      try {
        for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
          this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a = ACTIVATION_EVENT_TYPES_2.return)) _a.call(ACTIVATION_EVENT_TYPES_2);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
      this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
      if (this.adapter.isUnbounded()) {
        this.adapter.deregisterResizeHandler(this.resizeHandler);
      }
    };
    MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
      var e_4, _a;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
          this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a = POINTER_DEACTIVATION_EVENT_TYPES_2.return)) _a.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
    };
    MDCRippleFoundation2.prototype.removeCssVars = function() {
      var _this = this;
      var rippleStrings = MDCRippleFoundation2.strings;
      var keys = Object.keys(rippleStrings);
      keys.forEach(function(key) {
        if (key.indexOf("VAR_") === 0) {
          _this.adapter.updateCssVariable(rippleStrings[key], null);
        }
      });
    };
    MDCRippleFoundation2.prototype.activateImpl = function(evt) {
      var _this = this;
      if (this.adapter.isSurfaceDisabled()) {
        return;
      }
      var activationState = this.activationState;
      if (activationState.isActivated) {
        return;
      }
      var previousActivationEvent = this.previousActivationEvent;
      var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
      if (isSameInteraction) {
        return;
      }
      activationState.isActivated = true;
      activationState.isProgrammatic = evt === void 0;
      activationState.activationEvent = evt;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
      var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
        return _this.adapter.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        this.resetActivationState();
        return;
      }
      if (evt !== void 0) {
        activatedTargets.push(evt.target);
        this.registerDeactivationHandlers(evt);
      }
      activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
      if (activationState.wasElementMadeActive) {
        this.animateActivation();
      }
      requestAnimationFrame(function() {
        activatedTargets = [];
        if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
          activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
          if (activationState.wasElementMadeActive) {
            _this.animateActivation();
          }
        }
        if (!activationState.wasElementMadeActive) {
          _this.activationState = _this.defaultActivationState();
        }
      });
    };
    MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
      return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
    };
    MDCRippleFoundation2.prototype.animateActivation = function() {
      var _this = this;
      var _a = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
      var _b = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var translateStart = "";
      var translateEnd = "";
      if (!this.adapter.isUnbounded()) {
        var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
        translateStart = startPoint.x + "px, " + startPoint.y + "px";
        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
      }
      this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      clearTimeout(this.activationTimer);
      clearTimeout(this.fgDeactivationRemovalTimer);
      this.rmBoundedActivationClasses();
      this.adapter.removeClass(FG_DEACTIVATION);
      this.adapter.computeBoundingRect();
      this.adapter.addClass(FG_ACTIVATION);
      this.activationTimer = setTimeout(function() {
        _this.activationTimerCallback();
      }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
      var _a = this.activationState, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
      var startPoint;
      if (wasActivatedByPointer) {
        startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame.width / 2,
          y: this.frame.height / 2
        };
      }
      startPoint = {
        x: startPoint.x - this.initialSize / 2,
        y: startPoint.y - this.initialSize / 2
      };
      var endPoint = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return {
        startPoint,
        endPoint
      };
    };
    MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
      var _this = this;
      var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
      var _a = this.activationState, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
      var activationHasEnded = hasDeactivationUXRun || !isActivated;
      if (activationHasEnded && this.activationAnimationHasEnded) {
        this.rmBoundedActivationClasses();
        this.adapter.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer = setTimeout(function() {
          _this.adapter.removeClass(FG_DEACTIVATION);
        }, numbers.FG_DEACTIVATION_MS);
      }
    };
    MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
      var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded = false;
      this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation2.prototype.resetActivationState = function() {
      var _this = this;
      this.previousActivationEvent = this.activationState.activationEvent;
      this.activationState = this.defaultActivationState();
      setTimeout(function() {
        return _this.previousActivationEvent = void 0;
      }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation2.prototype.deactivateImpl = function() {
      var _this = this;
      var activationState = this.activationState;
      if (!activationState.isActivated) {
        return;
      }
      var state = __assign({}, activationState);
      if (activationState.isProgrammatic) {
        requestAnimationFrame(function() {
          _this.animateDeactivation(state);
        });
        this.resetActivationState();
      } else {
        this.deregisterDeactivationHandlers();
        requestAnimationFrame(function() {
          _this.activationState.hasDeactivationUXRun = true;
          _this.animateDeactivation(state);
          _this.resetActivationState();
        });
      }
    };
    MDCRippleFoundation2.prototype.animateDeactivation = function(_a) {
      var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady();
      }
    };
    MDCRippleFoundation2.prototype.layoutInternal = function() {
      var _this = this;
      this.frame = this.adapter.computeBoundingRect();
      var maxDim = Math.max(this.frame.height, this.frame.width);
      var getBoundedRadius = function() {
        var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
        return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
      var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
      if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
        this.initialSize = initialSize - 1;
      } else {
        this.initialSize = initialSize;
      }
      this.fgScale = "" + this.maxRadius / this.initialSize;
      this.updateLayoutCssVars();
    };
    MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
      var _a = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
      this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
      this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
      if (this.adapter.isUnbounded()) {
        this.unboundedCoords = {
          left: Math.round(this.frame.width / 2 - this.initialSize / 2),
          top: Math.round(this.frame.height / 2 - this.initialSize / 2)
        };
        this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
        this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
      }
    };
    return MDCRippleFoundation2;
  }(MDCFoundation)
);
var MDCRipple = (
  /** @class */
  function(_super) {
    __extends(MDCRipple2, _super);
    function MDCRipple2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.disabled = false;
      return _this;
    }
    MDCRipple2.attachTo = function(root, opts) {
      if (opts === void 0) {
        opts = {
          isUnbounded: void 0
        };
      }
      var ripple = new MDCRipple2(root);
      if (opts.isUnbounded !== void 0) {
        ripple.unbounded = opts.isUnbounded;
      }
      return ripple;
    };
    MDCRipple2.createAdapter = function(instance) {
      return {
        addClass: function(className) {
          return instance.root.classList.add(className);
        },
        browserSupportsCssVars: function() {
          return supportsCssVariables(window);
        },
        computeBoundingRect: function() {
          return instance.root.getBoundingClientRect();
        },
        containsEventTarget: function(target) {
          return instance.root.contains(target);
        },
        deregisterDocumentInteractionHandler: function(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, applyPassive());
        },
        deregisterInteractionHandler: function(evtType, handler) {
          return instance.root.removeEventListener(evtType, handler, applyPassive());
        },
        deregisterResizeHandler: function(handler) {
          return window.removeEventListener("resize", handler);
        },
        getWindowPageOffset: function() {
          return {
            x: window.pageXOffset,
            y: window.pageYOffset
          };
        },
        isSurfaceActive: function() {
          return matches(instance.root, ":active");
        },
        isSurfaceDisabled: function() {
          return Boolean(instance.disabled);
        },
        isUnbounded: function() {
          return Boolean(instance.unbounded);
        },
        registerDocumentInteractionHandler: function(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, applyPassive());
        },
        registerInteractionHandler: function(evtType, handler) {
          return instance.root.addEventListener(evtType, handler, applyPassive());
        },
        registerResizeHandler: function(handler) {
          return window.addEventListener("resize", handler);
        },
        removeClass: function(className) {
          return instance.root.classList.remove(className);
        },
        updateCssVariable: function(varName, value) {
          return instance.root.style.setProperty(varName, value);
        }
      };
    };
    Object.defineProperty(MDCRipple2.prototype, "unbounded", {
      get: function() {
        return Boolean(this.isUnbounded);
      },
      set: function(unbounded) {
        this.isUnbounded = Boolean(unbounded);
        this.setUnbounded();
      },
      enumerable: false,
      configurable: true
    });
    MDCRipple2.prototype.activate = function() {
      this.foundation.activate();
    };
    MDCRipple2.prototype.deactivate = function() {
      this.foundation.deactivate();
    };
    MDCRipple2.prototype.layout = function() {
      this.foundation.layout();
    };
    MDCRipple2.prototype.getDefaultFoundation = function() {
      return new MDCRippleFoundation(MDCRipple2.createAdapter(this));
    };
    MDCRipple2.prototype.initialSyncWithDOM = function() {
      var root = this.root;
      this.isUnbounded = "mdcRippleIsUnbounded" in root.dataset;
    };
    MDCRipple2.prototype.setUnbounded = function() {
      this.foundation.setUnbounded(Boolean(this.isUnbounded));
    };
    return MDCRipple2;
  }(MDCComponent)
);
var buttonCss = '@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}:host{display:inline-block;--wcs-button-color:var(--wcs-button-plain-color-default);--wcs-button-plain-color-default:var(--wcs-semantic-color-foreground-action-primary-default);--wcs-button-color-disabled:var(--wcs-semantic-color-text-disabled);--wcs-button-stroked-color-default:var(--wcs-semantic-color-foreground-action-secondary-default);--wcs-button-clear-color-default:var(--wcs-semantic-color-foreground-action-tertiary-default);--wcs-button-focus-outline-color:var(--wcs-semantic-color-border-focus-base);--wcs-button-focus-outline-border-width:var(--wcs-semantic-border-width-large);--wcs-button-background-color:var(--wcs-button-plain-background-color-default);--wcs-button-plain-background-color-default:var(--wcs-semantic-color-background-action-primary-default);--wcs-button-plain-background-color-disabled:var(--wcs-semantic-color-background-action-primary-disabled);--wcs-button-stroked-background-color-default:var(--wcs-semantic-color-background-action-secondary-default);--wcs-button-stroked-background-color-disabled:var(--wcs-semantic-color-background-action-secondary-disabled);--wcs-button-clear-background-color-default:var(--wcs-semantic-color-background-action-tertiary-default);--wcs-button-clear-background-color-disabled:var(--wcs-semantic-color-background-action-tertiary-disabled);--wcs-button-ripple-color:var(--wcs-button-plain-ripple-color-default);--wcs-button-plain-ripple-color-default:var(--wcs-semantic-color-ripple-action-primary);--wcs-button-stroked-ripple-color-default:var(--wcs-semantic-color-ripple-action-secondary);--wcs-button-clear-ripple-color-default:var(--wcs-semantic-color-ripple-action-tertiary);--wcs-button-border-radius:var(--wcs-button-border-radius-default);--wcs-button-border-radius-default:var(--wcs-semantic-border-radius-base);--wcs-button-border-radius-rounded:var(--wcs-semantic-border-radius-full);--wcs-button-stroked-border-color:var(--wcs-button-stroked-border-color-default);--wcs-button-stroked-border-width:var(--wcs-semantic-border-width-default);--wcs-button-stroked-border-color-default:var(--wcs-semantic-color-border-action-secondary-default);--wcs-button-stroked-border-color-disabled:var(--wcs-semantic-color-border-action-secondary-disabled);--wcs-button-height-s:var(--wcs-semantic-size-s);--wcs-button-font-size-s:var(--wcs-semantic-font-size-label-2);--wcs-button-padding-size-s:calc(1.5 * var(--wcs-semantic-spacing-base));--wcs-button-height-m:var(--wcs-semantic-size-m);--wcs-button-font-size-m:var(--wcs-semantic-font-size-label-1);--wcs-button-padding-size-m:calc(2 * var(--wcs-semantic-spacing-base));--wcs-button-height-l:var(--wcs-semantic-size-l);--wcs-button-font-size-l:var(--wcs-semantic-font-size-label-1);--wcs-button-padding-size-l:calc(3 * var(--wcs-semantic-spacing-base));--wcs-button-font-weight:var(--wcs-semantic-font-weight-medium)}.wcs-inner-button:focus-visible{outline:var(--wcs-button-focus-outline-border-width) dashed var(--wcs-button-focus-outline-color);outline-offset:var(--wcs-semantic-spacing-small);border-radius:var(--wcs-button-border-radius)}:host([mode=clear]){--wcs-button-stroked-border-color:transparent}:host([mode=clear]) .wcs-inner-button{box-shadow:none}:host([mode=stroked]){--wcs-button-color:var(--wcs-button-stroked-color-default);--wcs-button-background-color:transparent}:host([mode=stroked]) .wcs-inner-button::before,:host([mode=stroked]) .wcs-inner-button::after{--wcs-button-ripple-color:var(--wcs-button-stroked-ripple-color-default)}:host([mode=clear]){--wcs-button-color:var(--wcs-button-clear-color-default);--wcs-button-background-color:transparent}:host([mode=clear]) .wcs-inner-button::before,:host([mode=clear]) .wcs-inner-button::after{--wcs-button-ripple-color:var(--wcs-button-clear-ripple-color-default)}:host([size=l]){--wcs-button-padding:0 var(--wcs-button-padding-size-l);--wcs-button-height:var(--wcs-button-height-l);--wcs-button-min-width:var(--wcs-button-height-l);--wcs-button-font-size:var(--wcs-button-font-size-l)}:host([size=l]):host([shape=round]) ::slotted(wcs-mat-icon),:host([size=l]):host([shape=square]) ::slotted(wcs-mat-icon){margin:calc(-1 * var(--wcs-button-padding-size-l))}:host([size=m]){--wcs-button-padding:0 var(--wcs-button-padding-size-m);--wcs-button-height:var(--wcs-button-height-m);--wcs-button-min-width:var(--wcs-button-height-m);--wcs-button-font-size:var(--wcs-button-font-size-m)}:host([size=m]):host([shape=round]) ::slotted(wcs-mat-icon),:host([size=m]):host([shape=square]) ::slotted(wcs-mat-icon){margin:calc(-1 * var(--wcs-button-padding-size-m))}:host([size=s]){--wcs-button-padding:0 var(--wcs-button-padding-size-s);--wcs-button-height:var(--wcs-button-height-s);--wcs-button-min-width:var(--wcs-button-height-s);--wcs-button-font-size:var(--wcs-button-font-size-s)}:host([size=s]):host([shape=round]) ::slotted(wcs-mat-icon),:host([size=s]):host([shape=square]) ::slotted(wcs-mat-icon){margin:calc(-1 * var(--wcs-button-padding-size-s))}:host([shape=round]){--wcs-button-border-radius:var(--wcs-button-border-radius-rounded)}:host([shape=square]){--wcs-button-padding:0}:host([shape=normal]) .wcs-inner-button{min-width:var(--wcs-button-min-width, unset);min-height:var(--wcs-button-height, unset)}:host([mode=stroked]) .wcs-inner-button{box-shadow:inset 0 0 0 var(--wcs-button-stroked-border-width) var(--wcs-button-stroked-border-color)}:host([loading]){position:relative}:host([loading]) .wcs-inner-button>*:not(wcs-spinner){visibility:hidden;opacity:0}:host([loading]) wcs-spinner{--wcs-spinner-dashed-background-circle:var(--wcs-button-color);--wcs-spinner-rotating-circle-color:var(--wcs-button-color);height:calc(var(--wcs-button-height) / 2);width:calc(var(--wcs-button-min-width) / 2);position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}:host([disabled]),:host([loading]){cursor:not-allowed}:host([disabled]) .wcs-inner-button,:host([loading]) .wcs-inner-button{opacity:1;cursor:default;pointer-events:none}:host([disabled]){--wcs-button-color:var(--wcs-button-color-disabled);--wcs-button-background-color:var(--wcs-button-plain-background-color-disabled)}:host([mode=stroked][disabled]){--wcs-button-stroked-border-color:var(--wcs-button-stroked-border-color-disabled);--wcs-button-background-color:var(--wcs-button-stroked-background-color-disabled)}:host([mode=clear][disabled]){--wcs-button-background-color:var(--wcs-button-clear-background-color-disabled)}.wcs-inner-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity;--mdc-ripple-focus-opacity:0;display:flex;align-items:center;justify-content:center;width:100%;font-family:var(--wcs-font-sans-serif);background-color:var(--wcs-button-background-color);color:var(--wcs-button-color);padding:var(--wcs-button-padding);border-radius:var(--wcs-button-border-radius);border:none;overflow:hidden;outline:0;text-transform:none;margin:0;cursor:pointer;font-weight:var(--wcs-button-font-weight);text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;font-size:var(--wcs-button-font-size);line-height:1.5;height:var(--wcs-button-height);min-width:var(--wcs-button-min-width);transition:color 175ms ease-in-out, background-color 175ms ease-in-out}.wcs-inner-button::before,.wcs-inner-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.wcs-inner-button::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.wcs-inner-button::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.wcs-inner-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.wcs-inner-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.wcs-inner-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.wcs-inner-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.wcs-inner-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.wcs-inner-button::before,.wcs-inner-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.wcs-inner-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.wcs-inner-button:hover::before,.wcs-inner-button.mdc-ripple-surface--hover::before{opacity:0.1;opacity:var(--mdc-ripple-hover-opacity, 0.1)}.wcs-inner-button.mdc-ripple-upgraded--background-focused::before,.wcs-inner-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.wcs-inner-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.wcs-inner-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.3;opacity:var(--mdc-ripple-press-opacity, 0.3)}.wcs-inner-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.3)}.wcs-inner-button::before,.wcs-inner-button::after{background-color:white;background-color:var(--mdc-ripple-color, white)}.wcs-inner-button::before,.wcs-inner-button::after{background-color:var(--wcs-button-ripple-color)}a{text-decoration:none;box-sizing:border-box}button::-moz-focus-inner,a::-moz-focus-inner{border:0}';
var WcsButtonStyle0 = buttonCss;
var BUTTON_INHERITED_ATTRS = ["tabindex", "title"];
var Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inheritedAttributes = {};
    this.type = "button";
    this.href = void 0;
    this.target = void 0;
    this.disabled = false;
    this.ripple = true;
    this.size = "m";
    this.shape = "normal";
    this.mode = "plain";
    this.loading = false;
  }
  /**
   * Native event click is emit event if we decide to stop propagation of it
   * @param ev
   */
  onClick(ev) {
    if (this.disabled || this.loading) {
      ev.stopImmediatePropagation();
    }
    if (this.type !== "button" && hasShadowDom(this.el)) {
      const form = this.el.closest("form");
      if (form) {
        ev.preventDefault();
        const fakeButton = window.document.createElement("button");
        fakeButton.type = this.type;
        fakeButton.style.display = "none";
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }
  componentWillLoad() {
    if (!isWcsButtonSize(this.size)) {
      console.warn(`Invalid size value for wcs-button : "${this.size}". Must be one of "${WcsButtonSizeValues.join(", ")}"`);
      this.size = "m";
    }
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, BUTTON_INHERITED_ATTRS));
  }
  componentDidLoad() {
    this.mdcRipple = new MDCRipple(this.el.shadowRoot.querySelector(".wcs-inner-button"));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeButton, attr, value);
    });
  }
  enabledRippleEffect() {
    this.mdcRipple.disabled = false;
  }
  disabledRippleEffect() {
    this.mdcRipple.disabled = true;
  }
  getTagName() {
    return this.href !== void 0 ? "a" : "button";
  }
  onRippleChange() {
    if (this.ripple) {
      this.enabledRippleEffect();
    } else {
      this.disabledRippleEffect();
    }
  }
  render() {
    const TagType = this.getTagName();
    const attrs = this.href !== void 0 ? {
      href: this.href,
      role: "button",
      target: this.target
    } : {
      type: this.type
    };
    return h(TagType, Object.assign({
      key: "228586d374a478c0e23a697ddd0bef43fb4011ed"
    }, attrs, {
      class: "wcs-inner-button",
      disabled: this.disabled || this.loading,
      ref: (el) => this.nativeButton = el
    }, this.inheritedAttributes), this.loading && h("wcs-spinner", {
      key: "1fdef7efc8d2d1febb2e9a83aa48a44426015b89"
    }), h("slot", {
      key: "63cedaddd96fe4e20f0ca9ff0f3ea1e373ebd3f0"
    }));
  }
  static get delegatesFocus() {
    return true;
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "ripple": ["onRippleChange"]
    };
  }
};
Button.style = WcsButtonStyle0;
var spinnerCss = "@keyframes wcs-spinner-grow{0%{opacity:0;transform:scale(0)}25%{opacity:1}75%{opacity:0;transform:scale(1)}}@keyframes wcs-spinner-rotate{0%{transform:rotate(0deg);transform-origin:center}100%{transform:rotate(360deg);transform-origin:center}}@keyframes wcs-spinner-dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-131}}:host{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border-radius:50%;--wcs-spinner-dashed-background-circle:var(--wcs-semantic-color-background-surface-tertiary);--wcs-spinner-rotating-circle-color:var(--wcs-semantic-color-background-surface-brand);--wcs-spinner-rotate-animation-duration:var(--wcs-semantic-motion-duration-animation-base);--wcs-spinner-dashed-animation-duration:var(--wcs-semantic-motion-duration-animation-base);--wcs-spinner-growing-animation-duration:var(--wcs-semantic-motion-duration-animation-fast)}:host([mode=border]) svg .dashed-background-circle{stroke:var(--wcs-spinner-dashed-background-circle);stroke-width:7px;stroke-dasharray:3, 3;stroke-dashoffset:1;stroke-linecap:butt}:host([mode=border]) svg .infinite-rotation-container{animation:wcs-spinner-rotate var(--wcs-spinner-rotate-animation-duration) linear infinite}:host([mode=border]) svg .dash-rotating-circle{stroke:var(--wcs-spinner-rotating-circle-color);stroke-width:8px;stroke-linecap:round;animation:wcs-spinner-dash var(--wcs-spinner-dashed-animation-duration) ease-in-out infinite}:host([mode=growing]){background-color:var(--wcs-spinner-rotating-circle-color);opacity:0;animation:wcs-spinner-grow var(--wcs-spinner-growing-animation-duration) ease-out infinite}";
var WcsSpinnerStyle0 = spinnerCss;
var Spinner = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mode = "border";
  }
  render() {
    return h("svg", {
      key: "fe7a0a2d8c6edfb8103437eafd15e20e43309612",
      viewBox: "0 0 50 50"
    }, h("circle", {
      key: "b4ddca0273d8a4b3fe272511857533edf5d35d04",
      class: "dashed-background-circle",
      cx: "25",
      cy: "25",
      r: "21",
      fill: "none"
    }), h("g", {
      key: "4e4848295c4332095884324bde661c885f88ef47",
      class: "infinite-rotation-container"
    }, h("circle", {
      key: "a1c9d1e90621799279810161180b8c2deb5e04a1",
      class: "dash-rotating-circle",
      cx: "25",
      cy: "25",
      r: "21",
      fill: "none"
    })));
  }
};
Spinner.style = WcsSpinnerStyle0;
export {
  Button as wcs_button,
  Spinner as wcs_spinner
};
/*! Bundled license information:

wcs-core/dist/esm/wcs-button_2.entry.js:
  (**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)
  (**
   * @license
   * Copyright 2019 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)
  (**
   * @license
   * Copyright 2018 Google Inc.
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
   * THE SOFTWARE.
   *)
*/
//# sourceMappingURL=wcs-button_2.entry-T6FHRBPM.js.map
