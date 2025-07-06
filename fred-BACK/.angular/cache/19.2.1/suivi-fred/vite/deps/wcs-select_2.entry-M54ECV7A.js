import {
  isFocusable
} from "./chunk-BM6XL573.js";
import {
  isEqual
} from "./chunk-SHDBFGS4.js";
import {
  createPopper
} from "./chunk-7LPDYKUJ.js";
import {
  keyboardShortcutFromKeyboardEvent
} from "./chunk-TPUHIW5M.js";
import {
  SelectArrow
} from "./chunk-6SHTIXBY.js";
import {
  compareLists,
  findItemLabel,
  generateUniqueId,
  inheritAriaAttributes,
  inheritAttributes,
  isElement,
  isEnterKey,
  isSpaceKey,
  setOrRemoveAttribute
} from "./chunk-NAIC4MMY.js";
import {
  Host,
  createEvent,
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import {
  __async
} from "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-select_2.entry.js
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
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
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
  } catch (error2) {
    e = {
      error: error2
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
var ActionTypes;
(function(ActionTypes2) {
  ActionTypes2["Start"] = "xstate.start";
  ActionTypes2["Stop"] = "xstate.stop";
  ActionTypes2["Raise"] = "xstate.raise";
  ActionTypes2["Send"] = "xstate.send";
  ActionTypes2["Cancel"] = "xstate.cancel";
  ActionTypes2["NullEvent"] = "";
  ActionTypes2["Assign"] = "xstate.assign";
  ActionTypes2["After"] = "xstate.after";
  ActionTypes2["DoneState"] = "done.state";
  ActionTypes2["DoneInvoke"] = "done.invoke";
  ActionTypes2["Log"] = "xstate.log";
  ActionTypes2["Init"] = "xstate.init";
  ActionTypes2["Invoke"] = "xstate.invoke";
  ActionTypes2["ErrorExecution"] = "error.execution";
  ActionTypes2["ErrorCommunication"] = "error.communication";
  ActionTypes2["ErrorPlatform"] = "error.platform";
  ActionTypes2["ErrorCustom"] = "xstate.error";
  ActionTypes2["Update"] = "xstate.update";
  ActionTypes2["Pure"] = "xstate.pure";
  ActionTypes2["Choose"] = "xstate.choose";
})(ActionTypes || (ActionTypes = {}));
var SpecialTargets;
(function(SpecialTargets2) {
  SpecialTargets2["Parent"] = "#_parent";
  SpecialTargets2["Internal"] = "#_internal";
})(SpecialTargets || (SpecialTargets = {}));
var start$1 = ActionTypes.Start;
var stop$1 = ActionTypes.Stop;
var raise$1 = ActionTypes.Raise;
var send$1 = ActionTypes.Send;
var cancel$1 = ActionTypes.Cancel;
var nullEvent = ActionTypes.NullEvent;
var assign = ActionTypes.Assign;
var log = ActionTypes.Log;
var init = ActionTypes.Init;
var invoke = ActionTypes.Invoke;
var errorPlatform = ActionTypes.ErrorPlatform;
var error$1 = ActionTypes.ErrorCustom;
var update = ActionTypes.Update;
var choose = ActionTypes.Choose;
var pure = ActionTypes.Pure;
var STATE_DELIMITER = ".";
var EMPTY_ACTIVITY_MAP = {};
var DEFAULT_GUARD_TYPE = "xstate.guard";
var TARGETLESS_KEY = "";
var IS_PRODUCTION = true;
var _a;
function matchesState(parentStateId, childStateId, delimiter) {
  if (delimiter === void 0) {
    delimiter = STATE_DELIMITER;
  }
  var parentStateValue = toStateValue(parentStateId, delimiter);
  var childStateValue = toStateValue(childStateId, delimiter);
  if (isString(childStateValue)) {
    if (isString(parentStateValue)) {
      return childStateValue === parentStateValue;
    }
    return false;
  }
  if (isString(parentStateValue)) {
    return parentStateValue in childStateValue;
  }
  return Object.keys(parentStateValue).every(function(key) {
    if (!(key in childStateValue)) {
      return false;
    }
    return matchesState(parentStateValue[key], childStateValue[key]);
  });
}
function getEventType(event) {
  try {
    return isString(event) || typeof event === "number" ? "".concat(event) : event.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
function toStatePath(stateId, delimiter) {
  try {
    if (isArray(stateId)) {
      return stateId;
    }
    return stateId.toString().split(delimiter);
  } catch (e) {
    throw new Error("'".concat(stateId, "' is not a valid state path."));
  }
}
function isStateLike(state) {
  return typeof state === "object" && "value" in state && "context" in state && "event" in state && "_event" in state;
}
function toStateValue(stateValue, delimiter) {
  if (isStateLike(stateValue)) {
    return stateValue.value;
  }
  if (isArray(stateValue)) {
    return pathToStateValue(stateValue);
  }
  if (typeof stateValue !== "string") {
    return stateValue;
  }
  var statePath = toStatePath(stateValue, delimiter);
  return pathToStateValue(statePath);
}
function pathToStateValue(statePath) {
  if (statePath.length === 1) {
    return statePath[0];
  }
  var value = {};
  var marker = value;
  for (var i = 0; i < statePath.length - 1; i++) {
    if (i === statePath.length - 2) {
      marker[statePath[i]] = statePath[i + 1];
    } else {
      marker[statePath[i]] = {};
      marker = marker[statePath[i]];
    }
  }
  return value;
}
function mapValues(collection, iteratee) {
  var result = {};
  var collectionKeys = Object.keys(collection);
  for (var i = 0; i < collectionKeys.length; i++) {
    var key = collectionKeys[i];
    result[key] = iteratee(collection[key], key, collection, i);
  }
  return result;
}
function mapFilterValues(collection, iteratee, predicate) {
  var e_1, _a2;
  var result = {};
  try {
    for (var _b = __values(Object.keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var item = collection[key];
      if (!predicate(item)) {
        continue;
      }
      result[key] = iteratee(item, key, collection);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return result;
}
var path = function(props) {
  return function(object) {
    var e_2, _a2;
    var result = object;
    try {
      for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        result = result[prop];
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a2 = props_1.return)) _a2.call(props_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    return result;
  };
};
function nestedPath(props, accessorProp) {
  return function(object) {
    var e_3, _a2;
    var result = object;
    try {
      for (var props_2 = __values(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
        var prop = props_2_1.value;
        result = result[accessorProp][prop];
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (props_2_1 && !props_2_1.done && (_a2 = props_2.return)) _a2.call(props_2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
    return result;
  };
}
function toStatePaths(stateValue) {
  if (!stateValue) {
    return [[]];
  }
  if (isString(stateValue)) {
    return [[stateValue]];
  }
  var result = flatten(Object.keys(stateValue).map(function(key) {
    var subStateValue = stateValue[key];
    if (typeof subStateValue !== "string" && (!subStateValue || !Object.keys(subStateValue).length)) {
      return [[key]];
    }
    return toStatePaths(stateValue[key]).map(function(subPath) {
      return [key].concat(subPath);
    });
  }));
  return result;
}
function flatten(array) {
  var _a2;
  return (_a2 = []).concat.apply(_a2, __spreadArray([], __read(array), false));
}
function toArrayStrict(value) {
  if (isArray(value)) {
    return value;
  }
  return [value];
}
function toArray(value) {
  if (value === void 0) {
    return [];
  }
  return toArrayStrict(value);
}
function mapContext(mapper, context, _event) {
  var e_5, _a2;
  if (isFunction(mapper)) {
    return mapper(context, _event.data);
  }
  var result = {};
  try {
    for (var _b = __values(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var subMapper = mapper[key];
      if (isFunction(subMapper)) {
        result[key] = subMapper(context, _event.data);
      } else {
        result[key] = subMapper;
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
    } finally {
      if (e_5) throw e_5.error;
    }
  }
  return result;
}
function isBuiltInEvent(eventType) {
  return /^(done|error)\./.test(eventType);
}
function isPromiseLike(value) {
  if (value instanceof Promise) {
    return true;
  }
  if (value !== null && (isFunction(value) || typeof value === "object") && isFunction(value.then)) {
    return true;
  }
  return false;
}
function isBehavior(value) {
  return value !== null && typeof value === "object" && "transition" in value && typeof value.transition === "function";
}
function partition(items, predicate) {
  var e_6, _a2;
  var _b = __read([[], []], 2), truthy = _b[0], falsy = _b[1];
  try {
    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
      var item = items_1_1.value;
      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }
  } catch (e_6_1) {
    e_6 = {
      error: e_6_1
    };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a2 = items_1.return)) _a2.call(items_1);
    } finally {
      if (e_6) throw e_6.error;
    }
  }
  return [truthy, falsy];
}
function updateHistoryStates(hist, stateValue) {
  return mapValues(hist.states, function(subHist, key) {
    if (!subHist) {
      return void 0;
    }
    var subStateValue = (isString(stateValue) ? void 0 : stateValue[key]) || (subHist ? subHist.current : void 0);
    if (!subStateValue) {
      return void 0;
    }
    return {
      current: subStateValue,
      states: updateHistoryStates(subHist, subStateValue)
    };
  });
}
function updateHistoryValue(hist, stateValue) {
  return {
    current: stateValue,
    states: updateHistoryStates(hist, stateValue)
  };
}
function updateContext(context, _event, assignActions, state) {
  var updatedContext = context ? assignActions.reduce(function(acc, assignAction) {
    var e_7, _a2;
    var assignment = assignAction.assignment;
    var meta = {
      state,
      action: assignAction,
      _event
    };
    var partialUpdate = {};
    if (isFunction(assignment)) {
      partialUpdate = assignment(acc, _event.data, meta);
    } else {
      try {
        for (var _b = __values(Object.keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var propAssignment = assignment[key];
          partialUpdate[key] = isFunction(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
    }
    return Object.assign({}, acc, partialUpdate);
  }, context) : context;
  return updatedContext;
}
var warn = function() {
};
function isArray(value) {
  return Array.isArray(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isString(value) {
  return typeof value === "string";
}
function toGuard(condition, guardMap) {
  if (!condition) {
    return void 0;
  }
  if (isString(condition)) {
    return {
      type: DEFAULT_GUARD_TYPE,
      name: condition,
      predicate: guardMap ? guardMap[condition] : void 0
    };
  }
  if (isFunction(condition)) {
    return {
      type: DEFAULT_GUARD_TYPE,
      name: condition.name,
      predicate: condition
    };
  }
  return condition;
}
function isObservable(value) {
  try {
    return "subscribe" in value && isFunction(value.subscribe);
  } catch (e) {
    return false;
  }
}
var symbolObservable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
_a = {}, _a[symbolObservable] = function() {
  return this;
}, _a[Symbol.observable] = function() {
  return this;
}, _a;
function isMachine(value) {
  return !!value && "__xstatenode" in value;
}
function isActor$1(value) {
  return !!value && typeof value.send === "function";
}
function toEventObject(event, payload) {
  if (isString(event) || typeof event === "number") {
    return __assign({
      type: event
    }, payload);
  }
  return event;
}
function toSCXMLEvent(event, scxmlEvent) {
  if (!isString(event) && "$$type" in event && event.$$type === "scxml") {
    return event;
  }
  var eventObject = toEventObject(event);
  return __assign({
    name: eventObject.type,
    data: eventObject,
    $$type: "scxml",
    type: "external"
  }, scxmlEvent);
}
function toTransitionConfigArray(event, configLike) {
  var transitions = toArrayStrict(configLike).map(function(transitionLike) {
    if (typeof transitionLike === "undefined" || typeof transitionLike === "string" || isMachine(transitionLike)) {
      return {
        target: transitionLike,
        event
      };
    }
    return __assign(__assign({}, transitionLike), {
      event
    });
  });
  return transitions;
}
function normalizeTarget(target) {
  if (target === void 0 || target === TARGETLESS_KEY) {
    return void 0;
  }
  return toArray(target);
}
function evaluateGuard(machine, guard, context, _event, state) {
  var guards = machine.options.guards;
  var guardMeta = {
    state,
    cond: guard,
    _event
  };
  if (guard.type === DEFAULT_GUARD_TYPE) {
    return ((guards === null || guards === void 0 ? void 0 : guards[guard.name]) || guard.predicate)(context, _event.data, guardMeta);
  }
  var condFn = guards === null || guards === void 0 ? void 0 : guards[guard.type];
  if (!condFn) {
    throw new Error("Guard '".concat(guard.type, "' is not implemented on machine '").concat(machine.id, "'."));
  }
  return condFn(context, _event.data, guardMeta);
}
function toInvokeSource$1(src) {
  if (typeof src === "string") {
    return {
      type: src
    };
  }
  return src;
}
function toObserver(nextHandler, errorHandler, completionHandler) {
  var noop = function() {
  };
  var isObserver = typeof nextHandler === "object";
  var self2 = isObserver ? nextHandler : null;
  return {
    next: ((isObserver ? nextHandler.next : nextHandler) || noop).bind(self2),
    error: ((isObserver ? nextHandler.error : errorHandler) || noop).bind(self2),
    complete: ((isObserver ? nextHandler.complete : completionHandler) || noop).bind(self2)
  };
}
function createInvokeId(stateNodeId, index) {
  return "".concat(stateNodeId, ":invocation[").concat(index, "]");
}
function isRaisableAction(action) {
  return (action.type === raise$1 || action.type === send$1 && action.to === SpecialTargets.Internal) && typeof action.delay !== "number";
}
var initEvent = toSCXMLEvent({
  type: init
});
function getActionFunction(actionType, actionFunctionMap) {
  return actionFunctionMap ? actionFunctionMap[actionType] || void 0 : void 0;
}
function toActionObject(action, actionFunctionMap) {
  var actionObject;
  if (isString(action) || typeof action === "number") {
    var exec = getActionFunction(action, actionFunctionMap);
    if (isFunction(exec)) {
      actionObject = {
        type: action,
        exec
      };
    } else if (exec) {
      actionObject = exec;
    } else {
      actionObject = {
        type: action,
        exec: void 0
      };
    }
  } else if (isFunction(action)) {
    actionObject = {
      // Convert action to string if unnamed
      type: action.name || action.toString(),
      exec: action
    };
  } else {
    var exec = getActionFunction(action.type, actionFunctionMap);
    if (isFunction(exec)) {
      actionObject = __assign(__assign({}, action), {
        exec
      });
    } else if (exec) {
      var actionType = exec.type || action.type;
      actionObject = __assign(__assign(__assign({}, exec), action), {
        type: actionType
      });
    } else {
      actionObject = action;
    }
  }
  return actionObject;
}
var toActionObjects = function(action, actionFunctionMap) {
  if (!action) {
    return [];
  }
  var actions = isArray(action) ? action : [action];
  return actions.map(function(subAction) {
    return toActionObject(subAction, actionFunctionMap);
  });
};
function toActivityDefinition(action) {
  var actionObject = toActionObject(action);
  return __assign(__assign({
    id: isString(action) ? action : actionObject.id
  }, actionObject), {
    type: actionObject.type
  });
}
function raise(event, options) {
  return {
    type: raise$1,
    event: typeof event === "function" ? event : toEventObject(event),
    delay: options ? options.delay : void 0,
    id: options === null || options === void 0 ? void 0 : options.id
  };
}
function resolveRaise(action, ctx, _event, delaysMap) {
  var meta = {
    _event
  };
  var resolvedEvent = toSCXMLEvent(isFunction(action.event) ? action.event(ctx, _event.data, meta) : action.event);
  var resolvedDelay;
  if (isString(action.delay)) {
    var configDelay = delaysMap && delaysMap[action.delay];
    resolvedDelay = isFunction(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
  } else {
    resolvedDelay = isFunction(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
  }
  return __assign(__assign({}, action), {
    type: raise$1,
    _event: resolvedEvent,
    delay: resolvedDelay
  });
}
function send(event, options) {
  return {
    to: options ? options.to : void 0,
    type: send$1,
    event: isFunction(event) ? event : toEventObject(event),
    delay: options ? options.delay : void 0,
    // TODO: don't auto-generate IDs here like that
    // there is too big chance of the ID collision
    id: options && options.id !== void 0 ? options.id : isFunction(event) ? event.name : getEventType(event)
  };
}
function resolveSend(action, ctx, _event, delaysMap) {
  var meta = {
    _event
  };
  var resolvedEvent = toSCXMLEvent(isFunction(action.event) ? action.event(ctx, _event.data, meta) : action.event);
  var resolvedDelay;
  if (isString(action.delay)) {
    var configDelay = delaysMap && delaysMap[action.delay];
    resolvedDelay = isFunction(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
  } else {
    resolvedDelay = isFunction(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
  }
  var resolvedTarget = isFunction(action.to) ? action.to(ctx, _event.data, meta) : action.to;
  return __assign(__assign({}, action), {
    to: resolvedTarget,
    _event: resolvedEvent,
    event: resolvedEvent.data,
    delay: resolvedDelay
  });
}
var resolveLog = function(action, ctx, _event) {
  return __assign(__assign({}, action), {
    value: isString(action.expr) ? action.expr : action.expr(ctx, _event.data, {
      _event
    })
  });
};
var cancel = function(sendId) {
  return {
    type: cancel$1,
    sendId
  };
};
function start(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: ActionTypes.Start,
    activity: activityDef,
    exec: void 0
  };
}
function stop(actorRef) {
  var activity = isFunction(actorRef) ? actorRef : toActivityDefinition(actorRef);
  return {
    type: ActionTypes.Stop,
    activity,
    exec: void 0
  };
}
function resolveStop(action, context, _event) {
  var actorRefOrString = isFunction(action.activity) ? action.activity(context, _event.data) : action.activity;
  var resolvedActorRef = typeof actorRefOrString === "string" ? {
    id: actorRefOrString
  } : actorRefOrString;
  var actionObject = {
    type: ActionTypes.Stop,
    activity: resolvedActorRef
  };
  return actionObject;
}
function after(delayRef, id) {
  var idSuffix = id ? "#".concat(id) : "";
  return "".concat(ActionTypes.After, "(").concat(delayRef, ")").concat(idSuffix);
}
function done(id, data) {
  var type = "".concat(ActionTypes.DoneState, ".").concat(id);
  var eventObject = {
    type,
    data
  };
  eventObject.toString = function() {
    return type;
  };
  return eventObject;
}
function doneInvoke(id, data) {
  var type = "".concat(ActionTypes.DoneInvoke, ".").concat(id);
  var eventObject = {
    type,
    data
  };
  eventObject.toString = function() {
    return type;
  };
  return eventObject;
}
function error(id, data) {
  var type = "".concat(ActionTypes.ErrorPlatform, ".").concat(id);
  var eventObject = {
    type,
    data
  };
  eventObject.toString = function() {
    return type;
  };
  return eventObject;
}
var pluckAssigns = function(actionBlocks) {
  var e_1, _a2;
  var assignActions = [];
  try {
    for (var actionBlocks_1 = __values(actionBlocks), actionBlocks_1_1 = actionBlocks_1.next(); !actionBlocks_1_1.done; actionBlocks_1_1 = actionBlocks_1.next()) {
      var block = actionBlocks_1_1.value;
      var i = 0;
      while (i < block.actions.length) {
        if (block.actions[i].type === assign) {
          assignActions.push(block.actions[i]);
          block.actions.splice(i, 1);
          continue;
        }
        i++;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (actionBlocks_1_1 && !actionBlocks_1_1.done && (_a2 = actionBlocks_1.return)) _a2.call(actionBlocks_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return assignActions;
};
function resolveActions(machine, currentState, currentContext, _event, actionBlocks, predictableExec, preserveActionOrder) {
  if (preserveActionOrder === void 0) {
    preserveActionOrder = false;
  }
  var assignActions = preserveActionOrder ? [] : pluckAssigns(actionBlocks);
  var updatedContext = assignActions.length ? updateContext(currentContext, _event, assignActions, currentState) : currentContext;
  var preservedContexts = preserveActionOrder ? [currentContext] : void 0;
  var deferredToBlockEnd = [];
  function handleAction(blockType, actionObject) {
    var _a2;
    switch (actionObject.type) {
      case raise$1: {
        var raisedAction = resolveRaise(actionObject, updatedContext, _event, machine.options.delays);
        if (predictableExec && typeof raisedAction.delay === "number") {
          predictableExec(raisedAction, updatedContext, _event);
        }
        return raisedAction;
      }
      case send$1:
        var sendAction = resolveSend(actionObject, updatedContext, _event, machine.options.delays);
        if (predictableExec && sendAction.to !== SpecialTargets.Internal) {
          if (blockType === "entry") {
            deferredToBlockEnd.push(sendAction);
          } else {
            predictableExec(sendAction, updatedContext, _event);
          }
        }
        return sendAction;
      case log: {
        var resolved = resolveLog(actionObject, updatedContext, _event);
        predictableExec === null || predictableExec === void 0 ? void 0 : predictableExec(resolved, updatedContext, _event);
        return resolved;
      }
      case choose: {
        var chooseAction = actionObject;
        var matchedActions = (_a2 = chooseAction.conds.find(function(condition) {
          var guard = toGuard(condition.cond, machine.options.guards);
          return !guard || evaluateGuard(machine, guard, updatedContext, _event, !predictableExec ? currentState : void 0);
        })) === null || _a2 === void 0 ? void 0 : _a2.actions;
        if (!matchedActions) {
          return [];
        }
        var _b = __read(resolveActions(machine, currentState, updatedContext, _event, [{
          type: blockType,
          actions: toActionObjects(toArray(matchedActions), machine.options.actions)
        }], predictableExec, preserveActionOrder), 2), resolvedActionsFromChoose = _b[0], resolvedContextFromChoose = _b[1];
        updatedContext = resolvedContextFromChoose;
        preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
        return resolvedActionsFromChoose;
      }
      case pure: {
        var matchedActions = actionObject.get(updatedContext, _event.data);
        if (!matchedActions) {
          return [];
        }
        var _c = __read(resolveActions(machine, currentState, updatedContext, _event, [{
          type: blockType,
          actions: toActionObjects(toArray(matchedActions), machine.options.actions)
        }], predictableExec, preserveActionOrder), 2), resolvedActionsFromPure = _c[0], resolvedContext = _c[1];
        updatedContext = resolvedContext;
        preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
        return resolvedActionsFromPure;
      }
      case stop$1: {
        var resolved = resolveStop(actionObject, updatedContext, _event);
        predictableExec === null || predictableExec === void 0 ? void 0 : predictableExec(resolved, currentContext, _event);
        return resolved;
      }
      case assign: {
        updatedContext = updateContext(updatedContext, _event, [actionObject], !predictableExec ? currentState : void 0);
        preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
        break;
      }
      default:
        var resolvedActionObject = toActionObject(actionObject, machine.options.actions);
        var exec_1 = resolvedActionObject.exec;
        if (predictableExec) {
          predictableExec(resolvedActionObject, updatedContext, _event);
        } else if (exec_1 && preservedContexts) {
          var contextIndex_1 = preservedContexts.length - 1;
          var wrapped = __assign(__assign({}, resolvedActionObject), {
            exec: function(_ctx) {
              var args = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
              }
              exec_1.apply(void 0, __spreadArray([preservedContexts[contextIndex_1]], __read(args), false));
            }
          });
          resolvedActionObject = wrapped;
        }
        return resolvedActionObject;
    }
  }
  function processBlock(block) {
    var e_2, _a2;
    var resolvedActions2 = [];
    try {
      for (var _b = __values(block.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
        var action = _c.value;
        var resolved = handleAction(block.type, action);
        if (resolved) {
          resolvedActions2 = resolvedActions2.concat(resolved);
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    deferredToBlockEnd.forEach(function(action2) {
      predictableExec(action2, updatedContext, _event);
    });
    deferredToBlockEnd.length = 0;
    return resolvedActions2;
  }
  var resolvedActions = flatten(actionBlocks.map(processBlock));
  return [resolvedActions, updatedContext];
}
var provide = function(service, fn) {
  var result = fn(service);
  return result;
};
function createNullActor(id) {
  var _a2;
  return _a2 = {
    id,
    send: function() {
      return void 0;
    },
    subscribe: function() {
      return {
        unsubscribe: function() {
          return void 0;
        }
      };
    },
    getSnapshot: function() {
      return void 0;
    },
    toJSON: function() {
      return {
        id
      };
    }
  }, _a2[symbolObservable] = function() {
    return this;
  }, _a2;
}
function createInvocableActor(invokeDefinition, machine, context, _event) {
  var _a2;
  var invokeSrc = toInvokeSource$1(invokeDefinition.src);
  var serviceCreator = (_a2 = machine === null || machine === void 0 ? void 0 : machine.options.services) === null || _a2 === void 0 ? void 0 : _a2[invokeSrc.type];
  var resolvedData = invokeDefinition.data ? mapContext(invokeDefinition.data, context, _event) : void 0;
  var tempActor = serviceCreator ? createDeferredActor(serviceCreator, invokeDefinition.id, resolvedData) : createNullActor(invokeDefinition.id);
  tempActor.meta = invokeDefinition;
  return tempActor;
}
function createDeferredActor(entity, id, data) {
  var tempActor = createNullActor(id);
  tempActor.deferred = true;
  if (isMachine(entity)) {
    var initialState_1 = tempActor.state = provide(void 0, function() {
      return (data ? entity.withContext(data) : entity).initialState;
    });
    tempActor.getSnapshot = function() {
      return initialState_1;
    };
  }
  return tempActor;
}
function isActor(item) {
  try {
    return typeof item.send === "function";
  } catch (e) {
    return false;
  }
}
function isSpawnedActor(item) {
  return isActor(item) && "id" in item;
}
function toActorRef(actorRefLike) {
  var _a2;
  return __assign((_a2 = {
    subscribe: function() {
      return {
        unsubscribe: function() {
          return void 0;
        }
      };
    },
    id: "anonymous",
    getSnapshot: function() {
      return void 0;
    }
  }, _a2[symbolObservable] = function() {
    return this;
  }, _a2), actorRefLike);
}
var isLeafNode = function(stateNode) {
  return stateNode.type === "atomic" || stateNode.type === "final";
};
function getAllChildren(stateNode) {
  return Object.keys(stateNode.states).map(function(key) {
    return stateNode.states[key];
  });
}
function getChildren(stateNode) {
  return getAllChildren(stateNode).filter(function(sn) {
    return sn.type !== "history";
  });
}
function getAllStateNodes(stateNode) {
  var stateNodes = [stateNode];
  if (isLeafNode(stateNode)) {
    return stateNodes;
  }
  return stateNodes.concat(flatten(getChildren(stateNode).map(getAllStateNodes)));
}
function getConfiguration(prevStateNodes, stateNodes) {
  var e_1, _a2, e_2, _b, e_3, _c, e_4, _d;
  var prevConfiguration = new Set(prevStateNodes);
  var prevAdjList = getAdjList(prevConfiguration);
  var configuration = new Set(stateNodes);
  try {
    for (var configuration_1 = __values(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
      var s = configuration_1_1.value;
      var m = s.parent;
      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configuration_1_1 && !configuration_1_1.done && (_a2 = configuration_1.return)) _a2.call(configuration_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  var adjList = getAdjList(configuration);
  try {
    for (var configuration_2 = __values(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
      var s = configuration_2_1.value;
      if (s.type === "compound" && (!adjList.get(s) || !adjList.get(s).length)) {
        if (prevAdjList.get(s)) {
          prevAdjList.get(s).forEach(function(sn) {
            return configuration.add(sn);
          });
        } else {
          s.initialStateNodes.forEach(function(sn) {
            return configuration.add(sn);
          });
        }
      } else {
        if (s.type === "parallel") {
          try {
            for (var _e = (e_3 = void 0, __values(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()) {
              var child = _f.value;
              if (!configuration.has(child)) {
                configuration.add(child);
                if (prevAdjList.get(child)) {
                  prevAdjList.get(child).forEach(function(sn) {
                    return configuration.add(sn);
                  });
                } else {
                  child.initialStateNodes.forEach(function(sn) {
                    return configuration.add(sn);
                  });
                }
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return)) _b.call(configuration_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }
  try {
    for (var configuration_3 = __values(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
      var s = configuration_3_1.value;
      var m = s.parent;
      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return)) _d.call(configuration_3);
    } finally {
      if (e_4) throw e_4.error;
    }
  }
  return configuration;
}
function getValueFromAdj(baseNode, adjList) {
  var childStateNodes = adjList.get(baseNode);
  if (!childStateNodes) {
    return {};
  }
  if (baseNode.type === "compound") {
    var childStateNode = childStateNodes[0];
    if (childStateNode) {
      if (isLeafNode(childStateNode)) {
        return childStateNode.key;
      }
    } else {
      return {};
    }
  }
  var stateValue = {};
  childStateNodes.forEach(function(csn) {
    stateValue[csn.key] = getValueFromAdj(csn, adjList);
  });
  return stateValue;
}
function getAdjList(configuration) {
  var e_5, _a2;
  var adjList = /* @__PURE__ */ new Map();
  try {
    for (var configuration_4 = __values(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
      var s = configuration_4_1.value;
      if (!adjList.has(s)) {
        adjList.set(s, []);
      }
      if (s.parent) {
        if (!adjList.has(s.parent)) {
          adjList.set(s.parent, []);
        }
        adjList.get(s.parent).push(s);
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (configuration_4_1 && !configuration_4_1.done && (_a2 = configuration_4.return)) _a2.call(configuration_4);
    } finally {
      if (e_5) throw e_5.error;
    }
  }
  return adjList;
}
function getValue(rootNode, configuration) {
  var config = getConfiguration([rootNode], configuration);
  return getValueFromAdj(rootNode, getAdjList(config));
}
function has(iterable, item) {
  if (Array.isArray(iterable)) {
    return iterable.some(function(member) {
      return member === item;
    });
  }
  if (iterable instanceof Set) {
    return iterable.has(item);
  }
  return false;
}
function nextEvents(configuration) {
  return __spreadArray([], __read(new Set(flatten(__spreadArray([], __read(configuration.map(function(sn) {
    return sn.ownEvents;
  })), false)))), false);
}
function isInFinalState(configuration, stateNode) {
  if (stateNode.type === "compound") {
    return getChildren(stateNode).some(function(s) {
      return s.type === "final" && has(configuration, s);
    });
  }
  if (stateNode.type === "parallel") {
    return getChildren(stateNode).every(function(sn) {
      return isInFinalState(configuration, sn);
    });
  }
  return false;
}
function getMeta(configuration) {
  if (configuration === void 0) {
    configuration = [];
  }
  return configuration.reduce(function(acc, stateNode) {
    if (stateNode.meta !== void 0) {
      acc[stateNode.id] = stateNode.meta;
    }
    return acc;
  }, {});
}
function getTagsFromConfiguration(configuration) {
  return new Set(flatten(configuration.map(function(sn) {
    return sn.tags;
  })));
}
function stateValuesEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a === void 0 || b === void 0) {
    return false;
  }
  if (isString(a) || isString(b)) {
    return a === b;
  }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  return aKeys.length === bKeys.length && aKeys.every(function(key) {
    return stateValuesEqual(a[key], b[key]);
  });
}
function isStateConfig(state) {
  if (typeof state !== "object" || state === null) {
    return false;
  }
  return "value" in state && "_event" in state;
}
function bindActionToState(action, state) {
  var exec = action.exec;
  var boundAction = __assign(__assign({}, action), {
    exec: exec !== void 0 ? function() {
      return exec(state.context, state.event, {
        action,
        state,
        _event: state._event
      });
    } : void 0
  });
  return boundAction;
}
var State = (
  /** @class */
  function() {
    function State2(config) {
      var _this = this;
      var _a2;
      this.actions = [];
      this.activities = EMPTY_ACTIVITY_MAP;
      this.meta = {};
      this.events = [];
      this.value = config.value;
      this.context = config.context;
      this._event = config._event;
      this._sessionid = config._sessionid;
      this.event = this._event.data;
      this.historyValue = config.historyValue;
      this.history = config.history;
      this.actions = config.actions || [];
      this.activities = config.activities || EMPTY_ACTIVITY_MAP;
      this.meta = getMeta(config.configuration);
      this.events = config.events || [];
      this.matches = this.matches.bind(this);
      this.toStrings = this.toStrings.bind(this);
      this.configuration = config.configuration;
      this.transitions = config.transitions;
      this.children = config.children;
      this.done = !!config.done;
      this.tags = (_a2 = Array.isArray(config.tags) ? new Set(config.tags) : config.tags) !== null && _a2 !== void 0 ? _a2 : /* @__PURE__ */ new Set();
      this.machine = config.machine;
      Object.defineProperty(this, "nextEvents", {
        get: function() {
          return nextEvents(_this.configuration);
        }
      });
    }
    State2.from = function(stateValue, context) {
      if (stateValue instanceof State2) {
        if (stateValue.context !== context) {
          return new State2({
            value: stateValue.value,
            context,
            _event: stateValue._event,
            _sessionid: null,
            historyValue: stateValue.historyValue,
            history: stateValue.history,
            actions: [],
            activities: stateValue.activities,
            meta: {},
            events: [],
            configuration: [],
            transitions: [],
            children: {}
          });
        }
        return stateValue;
      }
      var _event = initEvent;
      return new State2({
        value: stateValue,
        context,
        _event,
        _sessionid: null,
        historyValue: void 0,
        history: void 0,
        actions: [],
        activities: void 0,
        meta: void 0,
        events: [],
        configuration: [],
        transitions: [],
        children: {}
      });
    };
    State2.create = function(config) {
      return new State2(config);
    };
    State2.inert = function(stateValue, context) {
      if (stateValue instanceof State2) {
        if (!stateValue.actions.length) {
          return stateValue;
        }
        var _event = initEvent;
        return new State2({
          value: stateValue.value,
          context,
          _event,
          _sessionid: null,
          historyValue: stateValue.historyValue,
          history: stateValue.history,
          activities: stateValue.activities,
          configuration: stateValue.configuration,
          transitions: [],
          children: {}
        });
      }
      return State2.from(stateValue, context);
    };
    State2.prototype.toStrings = function(stateValue, delimiter) {
      var _this = this;
      if (stateValue === void 0) {
        stateValue = this.value;
      }
      if (delimiter === void 0) {
        delimiter = ".";
      }
      if (isString(stateValue)) {
        return [stateValue];
      }
      var valueKeys = Object.keys(stateValue);
      return valueKeys.concat.apply(valueKeys, __spreadArray([], __read(valueKeys.map(function(key) {
        return _this.toStrings(stateValue[key], delimiter).map(function(s) {
          return key + delimiter + s;
        });
      })), false));
    };
    State2.prototype.toJSON = function() {
      var _a2 = this;
      var tags = _a2.tags;
      var jsonValues = __rest(_a2, ["configuration", "transitions", "tags", "machine"]);
      return __assign(__assign({}, jsonValues), {
        tags: Array.from(tags)
      });
    };
    State2.prototype.matches = function(parentStateValue) {
      return matchesState(parentStateValue, this.value);
    };
    State2.prototype.hasTag = function(tag) {
      return this.tags.has(tag);
    };
    State2.prototype.can = function(event) {
      var _a2;
      var transitionData = (_a2 = this.machine) === null || _a2 === void 0 ? void 0 : _a2.getTransitionData(this, event);
      return !!(transitionData === null || transitionData === void 0 ? void 0 : transitionData.transitions.length) && // Check that at least one transition is not forbidden
      transitionData.transitions.some(function(t) {
        return t.target !== void 0 || t.actions.length;
      });
    };
    return State2;
  }()
);
var defaultOptions = {
  deferEvents: false
};
var Scheduler = (
  /** @class */
  function() {
    function Scheduler2(options) {
      this.processingEvent = false;
      this.queue = [];
      this.initialized = false;
      this.options = __assign(__assign({}, defaultOptions), options);
    }
    Scheduler2.prototype.initialize = function(callback) {
      this.initialized = true;
      if (callback) {
        if (!this.options.deferEvents) {
          this.schedule(callback);
          return;
        }
        this.process(callback);
      }
      this.flushEvents();
    };
    Scheduler2.prototype.schedule = function(task) {
      if (!this.initialized || this.processingEvent) {
        this.queue.push(task);
        return;
      }
      if (this.queue.length !== 0) {
        throw new Error("Event queue should be empty when it is not processing events");
      }
      this.process(task);
      this.flushEvents();
    };
    Scheduler2.prototype.clear = function() {
      this.queue = [];
    };
    Scheduler2.prototype.flushEvents = function() {
      var nextCallback = this.queue.shift();
      while (nextCallback) {
        this.process(nextCallback);
        nextCallback = this.queue.shift();
      }
    };
    Scheduler2.prototype.process = function(callback) {
      this.processingEvent = true;
      try {
        callback();
      } catch (e) {
        this.clear();
        throw e;
      } finally {
        this.processingEvent = false;
      }
    };
    return Scheduler2;
  }()
);
var children = /* @__PURE__ */ new Map();
var sessionIdIndex = 0;
var registry = {
  bookId: function() {
    return "x:".concat(sessionIdIndex++);
  },
  register: function(id, actor) {
    children.set(id, actor);
    return id;
  },
  get: function(id) {
    return children.get(id);
  },
  free: function(id) {
    children.delete(id);
  }
};
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
}
function getDevTools() {
  var global2 = getGlobal();
  if (global2 && "__xstate__" in global2) {
    return global2.__xstate__;
  }
  return void 0;
}
function registerService(service) {
  if (!getGlobal()) {
    return;
  }
  var devTools = getDevTools();
  if (devTools) {
    devTools.register(service);
  }
}
function spawnBehavior(behavior, options) {
  if (options === void 0) {
    options = {};
  }
  var state = behavior.initialState;
  var observers = /* @__PURE__ */ new Set();
  var mailbox = [];
  var flushing = false;
  var flush = function() {
    if (flushing) {
      return;
    }
    flushing = true;
    while (mailbox.length > 0) {
      var event_1 = mailbox.shift();
      state = behavior.transition(state, event_1, actorCtx);
      observers.forEach(function(observer) {
        return observer.next(state);
      });
    }
    flushing = false;
  };
  var actor = toActorRef({
    id: options.id,
    send: function(event) {
      mailbox.push(event);
      flush();
    },
    getSnapshot: function() {
      return state;
    },
    subscribe: function(next, handleError, complete) {
      var observer = toObserver(next, handleError, complete);
      observers.add(observer);
      observer.next(state);
      return {
        unsubscribe: function() {
          observers.delete(observer);
        }
      };
    }
  });
  var actorCtx = {
    parent: options.parent,
    self: actor,
    id: options.id || "anonymous",
    observers
  };
  state = behavior.start ? behavior.start(actorCtx) : state;
  return actor;
}
var DEFAULT_SPAWN_OPTIONS = {
  sync: false,
  autoForward: false
};
var InterpreterStatus;
(function(InterpreterStatus2) {
  InterpreterStatus2[InterpreterStatus2["NotStarted"] = 0] = "NotStarted";
  InterpreterStatus2[InterpreterStatus2["Running"] = 1] = "Running";
  InterpreterStatus2[InterpreterStatus2["Stopped"] = 2] = "Stopped";
})(InterpreterStatus || (InterpreterStatus = {}));
var Interpreter = (
  /** @class */
  function() {
    function Interpreter2(machine, options) {
      if (options === void 0) {
        options = Interpreter2.defaultOptions;
      }
      var _this = this;
      this.machine = machine;
      this.delayedEventsMap = {};
      this.listeners = /* @__PURE__ */ new Set();
      this.contextListeners = /* @__PURE__ */ new Set();
      this.stopListeners = /* @__PURE__ */ new Set();
      this.doneListeners = /* @__PURE__ */ new Set();
      this.eventListeners = /* @__PURE__ */ new Set();
      this.sendListeners = /* @__PURE__ */ new Set();
      this.initialized = false;
      this.status = InterpreterStatus.NotStarted;
      this.children = /* @__PURE__ */ new Map();
      this.forwardTo = /* @__PURE__ */ new Set();
      this._outgoingQueue = [];
      this.init = this.start;
      this.send = function(event, payload) {
        if (isArray(event)) {
          _this.batch(event);
          return _this.state;
        }
        var _event = toSCXMLEvent(toEventObject(event, payload));
        if (_this.status === InterpreterStatus.Stopped) {
          return _this.state;
        }
        if (_this.status !== InterpreterStatus.Running && !_this.options.deferEvents) {
          throw new Error('Event "'.concat(_event.name, '" was sent to uninitialized service "').concat(
            _this.machine.id,
            '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: '
          ).concat(JSON.stringify(_event.data)));
        }
        _this.scheduler.schedule(function() {
          _this.forward(_event);
          var nextState = _this._nextState(_event);
          _this.update(nextState, _event);
        });
        return _this._state;
      };
      this.sendTo = function(event, to, immediate) {
        var isParent = _this.parent && (to === SpecialTargets.Parent || _this.parent.id === to);
        var target = isParent ? _this.parent : isString(to) ? to === SpecialTargets.Internal ? _this : _this.children.get(to) || registry.get(to) : isActor$1(to) ? to : void 0;
        if (!target) {
          if (!isParent) {
            throw new Error("Unable to send event to child '".concat(to, "' from service '").concat(_this.id, "'."));
          }
          return;
        }
        if ("machine" in target) {
          if (_this.status !== InterpreterStatus.Stopped || _this.parent !== target || // we need to send events to the parent from exit handlers of a machine that reached its final state
          _this.state.done) {
            var scxmlEvent = __assign(__assign({}, event), {
              name: event.name === error$1 ? "".concat(error(_this.id)) : event.name,
              origin: _this.sessionId
            });
            if (!immediate && _this.machine.config.predictableActionArguments) {
              _this._outgoingQueue.push([target, scxmlEvent]);
            } else {
              target.send(scxmlEvent);
            }
          }
        } else {
          if (!immediate && _this.machine.config.predictableActionArguments) {
            _this._outgoingQueue.push([target, event.data]);
          } else {
            target.send(event.data);
          }
        }
      };
      this._exec = function(action, context, _event, actionFunctionMap) {
        if (actionFunctionMap === void 0) {
          actionFunctionMap = _this.machine.options.actions;
        }
        var actionOrExec = action.exec || getActionFunction(action.type, actionFunctionMap);
        var exec = isFunction(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;
        if (exec) {
          try {
            return exec(context, _event.data, !_this.machine.config.predictableActionArguments ? {
              action,
              state: _this.state,
              _event
            } : {
              action,
              _event
            });
          } catch (err) {
            if (_this.parent) {
              _this.parent.send({
                type: "xstate.error",
                data: err
              });
            }
            throw err;
          }
        }
        switch (action.type) {
          case raise$1: {
            var sendAction_1 = action;
            _this.defer(sendAction_1);
            break;
          }
          case send$1:
            var sendAction = action;
            if (typeof sendAction.delay === "number") {
              _this.defer(sendAction);
              return;
            } else {
              if (sendAction.to) {
                _this.sendTo(sendAction._event, sendAction.to, _event === initEvent);
              } else {
                _this.send(sendAction._event);
              }
            }
            break;
          case cancel$1:
            _this.cancel(action.sendId);
            break;
          case start$1: {
            if (_this.status !== InterpreterStatus.Running) {
              return;
            }
            var activity = action.activity;
            if (
              // in v4 with `predictableActionArguments` invokes are called eagerly when the `this.state` still points to the previous state
              !_this.machine.config.predictableActionArguments && !_this.state.activities[activity.id || activity.type]
            ) {
              break;
            }
            if (activity.type === ActionTypes.Invoke) {
              var invokeSource = toInvokeSource$1(activity.src);
              var serviceCreator = _this.machine.options.services ? _this.machine.options.services[invokeSource.type] : void 0;
              var id2 = activity.id, data = activity.data;
              var autoForward = "autoForward" in activity ? activity.autoForward : !!activity.forward;
              if (!serviceCreator) {
                return;
              }
              var resolvedData = data ? mapContext(data, context, _event) : void 0;
              if (typeof serviceCreator === "string") {
                return;
              }
              var source = isFunction(serviceCreator) ? serviceCreator(context, _event.data, {
                data: resolvedData,
                src: invokeSource,
                meta: activity.meta
              }) : serviceCreator;
              if (!source) {
                return;
              }
              var options2 = void 0;
              if (isMachine(source)) {
                source = resolvedData ? source.withContext(resolvedData) : source;
                options2 = {
                  autoForward
                };
              }
              _this.spawn(source, id2, options2);
            } else {
              _this.spawnActivity(activity);
            }
            break;
          }
          case stop$1: {
            _this.stopChild(action.activity.id);
            break;
          }
          case log:
            var _a2 = action, label = _a2.label, value = _a2.value;
            if (label) {
              _this.logger(label, value);
            } else {
              _this.logger(value);
            }
            break;
        }
      };
      var resolvedOptions = __assign(__assign({}, Interpreter2.defaultOptions), options);
      var clock = resolvedOptions.clock, logger = resolvedOptions.logger, parent = resolvedOptions.parent, id = resolvedOptions.id;
      var resolvedId = id !== void 0 ? id : machine.id;
      this.id = resolvedId;
      this.logger = logger;
      this.clock = clock;
      this.parent = parent;
      this.options = resolvedOptions;
      this.scheduler = new Scheduler({
        deferEvents: this.options.deferEvents
      });
      this.sessionId = registry.bookId();
    }
    Object.defineProperty(Interpreter2.prototype, "initialState", {
      get: function() {
        var _this = this;
        if (this._initialState) {
          return this._initialState;
        }
        return provide(this, function() {
          _this._initialState = _this.machine.initialState;
          return _this._initialState;
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Interpreter2.prototype, "state", {
      /**
       * @deprecated Use `.getSnapshot()` instead.
       */
      get: function() {
        return this._state;
      },
      enumerable: false,
      configurable: true
    });
    Interpreter2.prototype.execute = function(state, actionsConfig) {
      var e_1, _a2;
      try {
        for (var _b = __values(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
          var action = _c.value;
          this.exec(action, state, actionsConfig);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };
    Interpreter2.prototype.update = function(state, _event) {
      var e_2, _a2, e_3, _b, e_4, _c, e_5, _d;
      var _this = this;
      state._sessionid = this.sessionId;
      this._state = state;
      if ((!this.machine.config.predictableActionArguments || // this is currently required to execute initial actions as the `initialState` gets cached
      // we can't just recompute it (and execute actions while doing so) because we try to preserve identity of actors created within initial assigns
      _event === initEvent) && this.options.execute) {
        this.execute(this.state);
      } else {
        var item = void 0;
        while (item = this._outgoingQueue.shift()) {
          item[0].send(item[1]);
        }
      }
      this.children.forEach(function(child) {
        _this.state.children[child.id] = child;
      });
      if (this.devTools) {
        this.devTools.send(_event.data, state);
      }
      if (state.event) {
        try {
          for (var _e = __values(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()) {
            var listener = _f.value;
            listener(state.event);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_f && !_f.done && (_a2 = _e.return)) _a2.call(_e);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
      try {
        for (var _g = __values(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
          var listener = _h.value;
          listener(state, state.event);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      try {
        for (var _j = __values(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
          var contextListener = _k.value;
          contextListener(this.state.context, this.state.history ? this.state.history.context : void 0);
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
      if (this.state.done) {
        var finalChildStateNode = state.configuration.find(function(sn) {
          return sn.type === "final" && sn.parent === _this.machine;
        });
        var doneData = finalChildStateNode && finalChildStateNode.doneData ? mapContext(finalChildStateNode.doneData, state.context, _event) : void 0;
        this._doneEvent = doneInvoke(this.id, doneData);
        try {
          for (var _l = __values(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
            var listener = _m.value;
            listener(this._doneEvent);
          }
        } catch (e_5_1) {
          e_5 = {
            error: e_5_1
          };
        } finally {
          try {
            if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
        this._stop();
        this._stopChildren();
        registry.free(this.sessionId);
      }
    };
    Interpreter2.prototype.onTransition = function(listener) {
      this.listeners.add(listener);
      if (this.status === InterpreterStatus.Running) {
        listener(this.state, this.state.event);
      }
      return this;
    };
    Interpreter2.prototype.subscribe = function(nextListenerOrObserver, _, completeListener) {
      var _this = this;
      var observer = toObserver(nextListenerOrObserver, _, completeListener);
      this.listeners.add(observer.next);
      if (this.status !== InterpreterStatus.NotStarted) {
        observer.next(this.state);
      }
      var completeOnce = function() {
        _this.doneListeners.delete(completeOnce);
        _this.stopListeners.delete(completeOnce);
        observer.complete();
      };
      if (this.status === InterpreterStatus.Stopped) {
        observer.complete();
      } else {
        this.onDone(completeOnce);
        this.onStop(completeOnce);
      }
      return {
        unsubscribe: function() {
          _this.listeners.delete(observer.next);
          _this.doneListeners.delete(completeOnce);
          _this.stopListeners.delete(completeOnce);
        }
      };
    };
    Interpreter2.prototype.onEvent = function(listener) {
      this.eventListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.onSend = function(listener) {
      this.sendListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.onChange = function(listener) {
      this.contextListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.onStop = function(listener) {
      this.stopListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.onDone = function(listener) {
      if (this.status === InterpreterStatus.Stopped && this._doneEvent) {
        listener(this._doneEvent);
      } else {
        this.doneListeners.add(listener);
      }
      return this;
    };
    Interpreter2.prototype.off = function(listener) {
      this.listeners.delete(listener);
      this.eventListeners.delete(listener);
      this.sendListeners.delete(listener);
      this.stopListeners.delete(listener);
      this.doneListeners.delete(listener);
      this.contextListeners.delete(listener);
      return this;
    };
    Interpreter2.prototype.start = function(initialState) {
      var _this = this;
      if (this.status === InterpreterStatus.Running) {
        return this;
      }
      this.machine._init();
      registry.register(this.sessionId, this);
      this.initialized = true;
      this.status = InterpreterStatus.Running;
      var resolvedState = initialState === void 0 ? this.initialState : provide(this, function() {
        return isStateConfig(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(State.from(initialState, _this.machine.context));
      });
      if (this.options.devTools) {
        this.attachDev();
      }
      this.scheduler.initialize(function() {
        _this.update(resolvedState, initEvent);
      });
      return this;
    };
    Interpreter2.prototype._stopChildren = function() {
      this.children.forEach(function(child) {
        if (isFunction(child.stop)) {
          child.stop();
        }
      });
      this.children.clear();
    };
    Interpreter2.prototype._stop = function() {
      var e_6, _a2, e_7, _b, e_8, _c, e_9, _d, e_10, _e;
      try {
        for (var _f = __values(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
          var listener = _g.value;
          this.listeners.delete(listener);
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (_g && !_g.done && (_a2 = _f.return)) _a2.call(_f);
        } finally {
          if (e_6) throw e_6.error;
        }
      }
      try {
        for (var _h = __values(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
          var listener = _j.value;
          listener();
          this.stopListeners.delete(listener);
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
      try {
        for (var _k = __values(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
          var listener = _l.value;
          this.contextListeners.delete(listener);
        }
      } catch (e_8_1) {
        e_8 = {
          error: e_8_1
        };
      } finally {
        try {
          if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
        } finally {
          if (e_8) throw e_8.error;
        }
      }
      try {
        for (var _m = __values(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
          var listener = _o.value;
          this.doneListeners.delete(listener);
        }
      } catch (e_9_1) {
        e_9 = {
          error: e_9_1
        };
      } finally {
        try {
          if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
        } finally {
          if (e_9) throw e_9.error;
        }
      }
      if (!this.initialized) {
        return this;
      }
      this.initialized = false;
      this.status = InterpreterStatus.Stopped;
      this._initialState = void 0;
      try {
        for (var _p = __values(Object.keys(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
          var key = _q.value;
          this.clock.clearTimeout(this.delayedEventsMap[key]);
        }
      } catch (e_10_1) {
        e_10 = {
          error: e_10_1
        };
      } finally {
        try {
          if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
        } finally {
          if (e_10) throw e_10.error;
        }
      }
      this.scheduler.clear();
      this.scheduler = new Scheduler({
        deferEvents: this.options.deferEvents
      });
    };
    Interpreter2.prototype.stop = function() {
      var _this = this;
      var scheduler = this.scheduler;
      this._stop();
      scheduler.schedule(function() {
        var _event = toSCXMLEvent({
          type: "xstate.stop"
        });
        var nextState = provide(_this, function() {
          var exitActions = flatten(__spreadArray([], __read(_this.state.configuration), false).sort(function(a, b) {
            return b.order - a.order;
          }).map(function(stateNode) {
            return toActionObjects(stateNode.onExit, _this.machine.options.actions);
          }));
          var _a2 = __read(resolveActions(_this.machine, _this.state, _this.state.context, _event, [{
            type: "exit",
            actions: exitActions
          }], _this.machine.config.predictableActionArguments ? _this._exec : void 0, _this.machine.config.predictableActionArguments || _this.machine.config.preserveActionOrder), 2), resolvedActions = _a2[0], updatedContext = _a2[1];
          var newState = new State({
            value: _this.state.value,
            context: updatedContext,
            _event,
            _sessionid: _this.sessionId,
            historyValue: void 0,
            history: _this.state,
            actions: resolvedActions.filter(function(action) {
              return !isRaisableAction(action);
            }),
            activities: {},
            events: [],
            configuration: [],
            transitions: [],
            children: {},
            done: _this.state.done,
            tags: _this.state.tags,
            machine: _this.machine
          });
          newState.changed = true;
          return newState;
        });
        _this.update(nextState, _event);
        _this._stopChildren();
        registry.free(_this.sessionId);
      });
      return this;
    };
    Interpreter2.prototype.batch = function(events) {
      var _this = this;
      if (this.status === InterpreterStatus.NotStarted && this.options.deferEvents) ;
      else if (this.status !== InterpreterStatus.Running) {
        throw new Error(
          // tslint:disable-next-line:max-line-length
          "".concat(events.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
        );
      }
      if (!events.length) {
        return;
      }
      var exec = !!this.machine.config.predictableActionArguments && this._exec;
      this.scheduler.schedule(function() {
        var e_11, _a2;
        var nextState = _this.state;
        var batchChanged = false;
        var batchedActions = [];
        var _loop_1 = function(event_12) {
          var _event = toSCXMLEvent(event_12);
          _this.forward(_event);
          nextState = provide(_this, function() {
            return _this.machine.transition(nextState, _event, void 0, exec || void 0);
          });
          batchedActions.push.apply(batchedActions, __spreadArray([], __read(_this.machine.config.predictableActionArguments ? nextState.actions : nextState.actions.map(function(a) {
            return bindActionToState(a, nextState);
          })), false));
          batchChanged = batchChanged || !!nextState.changed;
        };
        try {
          for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
            var event_1 = events_1_1.value;
            _loop_1(event_1);
          }
        } catch (e_11_1) {
          e_11 = {
            error: e_11_1
          };
        } finally {
          try {
            if (events_1_1 && !events_1_1.done && (_a2 = events_1.return)) _a2.call(events_1);
          } finally {
            if (e_11) throw e_11.error;
          }
        }
        nextState.changed = batchChanged;
        nextState.actions = batchedActions;
        _this.update(nextState, toSCXMLEvent(events[events.length - 1]));
      });
    };
    Interpreter2.prototype.sender = function(event) {
      return this.send.bind(this, event);
    };
    Interpreter2.prototype._nextState = function(event, exec) {
      var _this = this;
      if (exec === void 0) {
        exec = !!this.machine.config.predictableActionArguments && this._exec;
      }
      var _event = toSCXMLEvent(event);
      if (_event.name.indexOf(errorPlatform) === 0 && !this.state.nextEvents.some(function(nextEvent) {
        return nextEvent.indexOf(errorPlatform) === 0;
      })) {
        throw _event.data.data;
      }
      var nextState = provide(this, function() {
        return _this.machine.transition(_this.state, _event, void 0, exec || void 0);
      });
      return nextState;
    };
    Interpreter2.prototype.nextState = function(event) {
      return this._nextState(event, false);
    };
    Interpreter2.prototype.forward = function(event) {
      var e_12, _a2;
      try {
        for (var _b = __values(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
          var id = _c.value;
          var child = this.children.get(id);
          if (!child) {
            throw new Error("Unable to forward event '".concat(event, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(id, "'."));
          }
          child.send(event);
        }
      } catch (e_12_1) {
        e_12 = {
          error: e_12_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_12) throw e_12.error;
        }
      }
    };
    Interpreter2.prototype.defer = function(sendAction) {
      var _this = this;
      var timerId = this.clock.setTimeout(function() {
        if ("to" in sendAction && sendAction.to) {
          _this.sendTo(sendAction._event, sendAction.to, true);
        } else {
          _this.send(sendAction._event);
        }
      }, sendAction.delay);
      if (sendAction.id) {
        this.delayedEventsMap[sendAction.id] = timerId;
      }
    };
    Interpreter2.prototype.cancel = function(sendId) {
      this.clock.clearTimeout(this.delayedEventsMap[sendId]);
      delete this.delayedEventsMap[sendId];
    };
    Interpreter2.prototype.exec = function(action, state, actionFunctionMap) {
      if (actionFunctionMap === void 0) {
        actionFunctionMap = this.machine.options.actions;
      }
      this._exec(action, state.context, state._event, actionFunctionMap);
    };
    Interpreter2.prototype.removeChild = function(childId) {
      var _a2;
      this.children.delete(childId);
      this.forwardTo.delete(childId);
      (_a2 = this.state) === null || _a2 === void 0 ? true : delete _a2.children[childId];
    };
    Interpreter2.prototype.stopChild = function(childId) {
      var child = this.children.get(childId);
      if (!child) {
        return;
      }
      this.removeChild(childId);
      if (isFunction(child.stop)) {
        child.stop();
      }
    };
    Interpreter2.prototype.spawn = function(entity, name, options) {
      if (this.status !== InterpreterStatus.Running) {
        return createDeferredActor(entity, name);
      }
      if (isPromiseLike(entity)) {
        return this.spawnPromise(Promise.resolve(entity), name);
      } else if (isFunction(entity)) {
        return this.spawnCallback(entity, name);
      } else if (isSpawnedActor(entity)) {
        return this.spawnActor(entity, name);
      } else if (isObservable(entity)) {
        return this.spawnObservable(entity, name);
      } else if (isMachine(entity)) {
        return this.spawnMachine(entity, __assign(__assign({}, options), {
          id: name
        }));
      } else if (isBehavior(entity)) {
        return this.spawnBehavior(entity, name);
      } else {
        throw new Error('Unable to spawn entity "'.concat(name, '" of type "').concat(typeof entity, '".'));
      }
    };
    Interpreter2.prototype.spawnMachine = function(machine, options) {
      var _this = this;
      if (options === void 0) {
        options = {};
      }
      var childService = new Interpreter2(machine, __assign(__assign({}, this.options), {
        parent: this,
        id: options.id || machine.id
      }));
      var resolvedOptions = __assign(__assign({}, DEFAULT_SPAWN_OPTIONS), options);
      if (resolvedOptions.sync) {
        childService.onTransition(function(state) {
          _this.send(update, {
            state,
            id: childService.id
          });
        });
      }
      var actor = childService;
      this.children.set(childService.id, actor);
      if (resolvedOptions.autoForward) {
        this.forwardTo.add(childService.id);
      }
      childService.onDone(function(doneEvent) {
        _this.removeChild(childService.id);
        _this.send(toSCXMLEvent(doneEvent, {
          origin: childService.id
        }));
      }).start();
      return actor;
    };
    Interpreter2.prototype.spawnBehavior = function(behavior, id) {
      var actorRef = spawnBehavior(behavior, {
        id,
        parent: this
      });
      this.children.set(id, actorRef);
      return actorRef;
    };
    Interpreter2.prototype.spawnPromise = function(promise, id) {
      var _a2;
      var _this = this;
      var canceled = false;
      var resolvedData;
      promise.then(function(response) {
        if (!canceled) {
          resolvedData = response;
          _this.removeChild(id);
          _this.send(toSCXMLEvent(doneInvoke(id, response), {
            origin: id
          }));
        }
      }, function(errorData) {
        if (!canceled) {
          _this.removeChild(id);
          var errorEvent = error(id, errorData);
          try {
            _this.send(toSCXMLEvent(errorEvent, {
              origin: id
            }));
          } catch (error2) {
            if (_this.devTools) {
              _this.devTools.send(errorEvent, _this.state);
            }
            if (_this.machine.strict) {
              _this.stop();
            }
          }
        }
      });
      var actor = (_a2 = {
        id,
        send: function() {
          return void 0;
        },
        subscribe: function(next, handleError, complete) {
          var observer = toObserver(next, handleError, complete);
          var unsubscribed = false;
          promise.then(function(response) {
            if (unsubscribed) {
              return;
            }
            observer.next(response);
            if (unsubscribed) {
              return;
            }
            observer.complete();
          }, function(err) {
            if (unsubscribed) {
              return;
            }
            observer.error(err);
          });
          return {
            unsubscribe: function() {
              return unsubscribed = true;
            }
          };
        },
        stop: function() {
          canceled = true;
        },
        toJSON: function() {
          return {
            id
          };
        },
        getSnapshot: function() {
          return resolvedData;
        }
      }, _a2[symbolObservable] = function() {
        return this;
      }, _a2);
      this.children.set(id, actor);
      return actor;
    };
    Interpreter2.prototype.spawnCallback = function(callback, id) {
      var _a2;
      var _this = this;
      var canceled = false;
      var receivers = /* @__PURE__ */ new Set();
      var listeners = /* @__PURE__ */ new Set();
      var emitted;
      var receive = function(e) {
        emitted = e;
        listeners.forEach(function(listener) {
          return listener(e);
        });
        if (canceled) {
          return;
        }
        _this.send(toSCXMLEvent(e, {
          origin: id
        }));
      };
      var callbackStop;
      try {
        callbackStop = callback(receive, function(newListener) {
          receivers.add(newListener);
        });
      } catch (err) {
        this.send(error(id, err));
      }
      if (isPromiseLike(callbackStop)) {
        return this.spawnPromise(callbackStop, id);
      }
      var actor = (_a2 = {
        id,
        send: function(event) {
          return receivers.forEach(function(receiver) {
            return receiver(event);
          });
        },
        subscribe: function(next) {
          var observer = toObserver(next);
          listeners.add(observer.next);
          return {
            unsubscribe: function() {
              listeners.delete(observer.next);
            }
          };
        },
        stop: function() {
          canceled = true;
          if (isFunction(callbackStop)) {
            callbackStop();
          }
        },
        toJSON: function() {
          return {
            id
          };
        },
        getSnapshot: function() {
          return emitted;
        }
      }, _a2[symbolObservable] = function() {
        return this;
      }, _a2);
      this.children.set(id, actor);
      return actor;
    };
    Interpreter2.prototype.spawnObservable = function(source, id) {
      var _a2;
      var _this = this;
      var emitted;
      var subscription = source.subscribe(function(value) {
        emitted = value;
        _this.send(toSCXMLEvent(value, {
          origin: id
        }));
      }, function(err) {
        _this.removeChild(id);
        _this.send(toSCXMLEvent(error(id, err), {
          origin: id
        }));
      }, function() {
        _this.removeChild(id);
        _this.send(toSCXMLEvent(doneInvoke(id), {
          origin: id
        }));
      });
      var actor = (_a2 = {
        id,
        send: function() {
          return void 0;
        },
        subscribe: function(next, handleError, complete) {
          return source.subscribe(next, handleError, complete);
        },
        stop: function() {
          return subscription.unsubscribe();
        },
        getSnapshot: function() {
          return emitted;
        },
        toJSON: function() {
          return {
            id
          };
        }
      }, _a2[symbolObservable] = function() {
        return this;
      }, _a2);
      this.children.set(id, actor);
      return actor;
    };
    Interpreter2.prototype.spawnActor = function(actor, name) {
      this.children.set(name, actor);
      return actor;
    };
    Interpreter2.prototype.spawnActivity = function(activity) {
      var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : void 0;
      if (!implementation) {
        return;
      }
      var dispose = implementation(this.state.context, activity);
      this.spawnEffect(activity.id, dispose);
    };
    Interpreter2.prototype.spawnEffect = function(id, dispose) {
      var _a2;
      this.children.set(id, (_a2 = {
        id,
        send: function() {
          return void 0;
        },
        subscribe: function() {
          return {
            unsubscribe: function() {
              return void 0;
            }
          };
        },
        stop: dispose || void 0,
        getSnapshot: function() {
          return void 0;
        },
        toJSON: function() {
          return {
            id
          };
        }
      }, _a2[symbolObservable] = function() {
        return this;
      }, _a2));
    };
    Interpreter2.prototype.attachDev = function() {
      var global2 = getGlobal();
      if (this.options.devTools && global2) {
        if (global2.__REDUX_DEVTOOLS_EXTENSION__) {
          var devToolsOptions = typeof this.options.devTools === "object" ? this.options.devTools : void 0;
          this.devTools = global2.__REDUX_DEVTOOLS_EXTENSION__.connect(__assign(__assign({
            name: this.id,
            autoPause: true,
            stateSanitizer: function(state) {
              return {
                value: state.value,
                context: state.context,
                actions: state.actions
              };
            }
          }, devToolsOptions), {
            features: __assign({
              jump: false,
              skip: false
            }, devToolsOptions ? devToolsOptions.features : void 0)
          }), this.machine);
          this.devTools.init(this.state);
        }
        registerService(this);
      }
    };
    Interpreter2.prototype.toJSON = function() {
      return {
        id: this.id
      };
    };
    Interpreter2.prototype[symbolObservable] = function() {
      return this;
    };
    Interpreter2.prototype.getSnapshot = function() {
      if (this.status === InterpreterStatus.NotStarted) {
        return this.initialState;
      }
      return this._state;
    };
    Interpreter2.defaultOptions = {
      execute: true,
      deferEvents: true,
      clock: {
        setTimeout: function(fn, ms) {
          return setTimeout(fn, ms);
        },
        clearTimeout: function(id) {
          return clearTimeout(id);
        }
      },
      logger: console.log.bind(console),
      devTools: false
    };
    Interpreter2.interpret = interpret;
    return Interpreter2;
  }()
);
function interpret(machine, options) {
  var interpreter = new Interpreter(machine, options);
  return interpreter;
}
function toInvokeSource(src) {
  if (typeof src === "string") {
    var simpleSrc = {
      type: src
    };
    simpleSrc.toString = function() {
      return src;
    };
    return simpleSrc;
  }
  return src;
}
function toInvokeDefinition(invokeConfig) {
  return __assign(__assign({
    type: invoke
  }, invokeConfig), {
    toJSON: function() {
      var invokeDef = __rest(invokeConfig, ["onDone", "onError"]);
      return __assign(__assign({}, invokeDef), {
        type: invoke,
        src: toInvokeSource(invokeConfig.src)
      });
    }
  });
}
var NULL_EVENT = "";
var STATE_IDENTIFIER = "#";
var WILDCARD = "*";
var EMPTY_OBJECT = {};
var isStateId = function(str) {
  return str[0] === STATE_IDENTIFIER;
};
var createDefaultOptions = function() {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
};
var validateArrayifiedTransitions = function(stateNode, event, transitions) {
  transitions.slice(0, -1).some(function(transition) {
    return !("cond" in transition) && !("in" in transition) && (isString(transition.target) || isMachine(transition.target));
  });
};
var StateNode = (
  /** @class */
  function() {
    function StateNode2(config, options, _context, _stateInfo) {
      if (_context === void 0) {
        _context = "context" in config ? config.context : void 0;
      }
      var _this = this;
      var _a2;
      this.config = config;
      this._context = _context;
      this.order = -1;
      this.__xstatenode = true;
      this.__cache = {
        events: void 0,
        relativeValue: /* @__PURE__ */ new Map(),
        initialStateValue: void 0,
        initialState: void 0,
        on: void 0,
        transitions: void 0,
        candidates: {},
        delayedTransitions: void 0
      };
      this.idMap = {};
      this.tags = [];
      this.options = Object.assign(createDefaultOptions(), options);
      this.parent = _stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.parent;
      this.key = this.config.key || (_stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.key) || this.config.id || "(machine)";
      this.machine = this.parent ? this.parent.machine : this;
      this.path = this.parent ? this.parent.path.concat(this.key) : [];
      this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : STATE_DELIMITER);
      this.id = this.config.id || __spreadArray([this.machine.key], __read(this.path), false).join(this.delimiter);
      this.version = this.parent ? this.parent.version : this.config.version;
      this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic");
      this.schema = this.parent ? this.machine.schema : (_a2 = this.config.schema) !== null && _a2 !== void 0 ? _a2 : {};
      this.description = this.config.description;
      this.initial = this.config.initial;
      this.states = this.config.states ? mapValues(this.config.states, function(stateConfig, key) {
        var _a3;
        var stateNode = new StateNode2(stateConfig, {}, void 0, {
          parent: _this,
          key
        });
        Object.assign(_this.idMap, __assign((_a3 = {}, _a3[stateNode.id] = stateNode, _a3), stateNode.idMap));
        return stateNode;
      }) : EMPTY_OBJECT;
      var order = 0;
      function dfs(stateNode) {
        var e_1, _a3;
        stateNode.order = order++;
        try {
          for (var _b = __values(getAllChildren(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            dfs(child);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a3 = _b.return)) _a3.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      dfs(this);
      this.history = this.config.history === true ? "shallow" : this.config.history || false;
      this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function(_a3) {
        var event = _a3.event;
        return event === NULL_EVENT;
      }) : NULL_EVENT in this.config.on);
      this.strict = !!this.config.strict;
      this.onEntry = toArray(this.config.entry || this.config.onEntry).map(function(action) {
        return toActionObject(action);
      });
      this.onExit = toArray(this.config.exit || this.config.onExit).map(function(action) {
        return toActionObject(action);
      });
      this.meta = this.config.meta;
      this.doneData = this.type === "final" ? this.config.data : void 0;
      this.invoke = toArray(this.config.invoke).map(function(invokeConfig, i) {
        var _a3, _b;
        if (isMachine(invokeConfig)) {
          var invokeId = createInvokeId(_this.id, i);
          _this.machine.options.services = __assign((_a3 = {}, _a3[invokeId] = invokeConfig, _a3), _this.machine.options.services);
          return toInvokeDefinition({
            src: invokeId,
            id: invokeId
          });
        } else if (isString(invokeConfig.src)) {
          var invokeId = invokeConfig.id || createInvokeId(_this.id, i);
          return toInvokeDefinition(__assign(__assign({}, invokeConfig), {
            id: invokeId,
            src: invokeConfig.src
          }));
        } else if (isMachine(invokeConfig.src) || isFunction(invokeConfig.src)) {
          var invokeId = invokeConfig.id || createInvokeId(_this.id, i);
          _this.machine.options.services = __assign((_b = {}, _b[invokeId] = invokeConfig.src, _b), _this.machine.options.services);
          return toInvokeDefinition(__assign(__assign({
            id: invokeId
          }, invokeConfig), {
            src: invokeId
          }));
        } else {
          var invokeSource = invokeConfig.src;
          return toInvokeDefinition(__assign(__assign({
            id: createInvokeId(_this.id, i)
          }, invokeConfig), {
            src: invokeSource
          }));
        }
      });
      this.activities = toArray(this.config.activities).concat(this.invoke).map(function(activity) {
        return toActivityDefinition(activity);
      });
      this.transition = this.transition.bind(this);
      this.tags = toArray(this.config.tags);
    }
    StateNode2.prototype._init = function() {
      if (this.__cache.transitions) {
        return;
      }
      getAllStateNodes(this).forEach(function(stateNode) {
        return stateNode.on;
      });
    };
    StateNode2.prototype.withConfig = function(options, context) {
      var _a2 = this.options, actions = _a2.actions, activities = _a2.activities, guards = _a2.guards, services = _a2.services, delays = _a2.delays;
      return new StateNode2(this.config, {
        actions: __assign(__assign({}, actions), options.actions),
        activities: __assign(__assign({}, activities), options.activities),
        guards: __assign(__assign({}, guards), options.guards),
        services: __assign(__assign({}, services), options.services),
        delays: __assign(__assign({}, delays), options.delays)
      }, context !== null && context !== void 0 ? context : this.context);
    };
    StateNode2.prototype.withContext = function(context) {
      return new StateNode2(this.config, this.options, context);
    };
    Object.defineProperty(StateNode2.prototype, "context", {
      get: function() {
        return isFunction(this._context) ? this._context() : this._context;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "definition", {
      /**
       * The well-structured state node definition.
       */
      get: function() {
        return {
          id: this.id,
          key: this.key,
          version: this.version,
          context: this.context,
          type: this.type,
          initial: this.initial,
          history: this.history,
          states: mapValues(this.states, function(state) {
            return state.definition;
          }),
          on: this.on,
          transitions: this.transitions,
          entry: this.onEntry,
          exit: this.onExit,
          activities: this.activities || [],
          meta: this.meta,
          order: this.order || -1,
          data: this.doneData,
          invoke: this.invoke,
          description: this.description,
          tags: this.tags
        };
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.toJSON = function() {
      return this.definition;
    };
    Object.defineProperty(StateNode2.prototype, "on", {
      /**
       * The mapping of events to transitions.
       */
      get: function() {
        if (this.__cache.on) {
          return this.__cache.on;
        }
        var transitions = this.transitions;
        return this.__cache.on = transitions.reduce(function(map, transition) {
          map[transition.eventType] = map[transition.eventType] || [];
          map[transition.eventType].push(transition);
          return map;
        }, {});
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "after", {
      get: function() {
        return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "transitions", {
      /**
       * All the transitions that can be taken from this state node.
       */
      get: function() {
        return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.getCandidates = function(eventName) {
      if (this.__cache.candidates[eventName]) {
        return this.__cache.candidates[eventName];
      }
      var transient = eventName === NULL_EVENT;
      var candidates = this.transitions.filter(function(transition) {
        var sameEventType = transition.eventType === eventName;
        return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
      });
      this.__cache.candidates[eventName] = candidates;
      return candidates;
    };
    StateNode2.prototype.getDelayedTransitions = function() {
      var _this = this;
      var afterConfig = this.config.after;
      if (!afterConfig) {
        return [];
      }
      var mutateEntryExit = function(delay, i) {
        var delayRef = isFunction(delay) ? "".concat(_this.id, ":delay[").concat(i, "]") : delay;
        var eventType = after(delayRef, _this.id);
        _this.onEntry.push(send(eventType, {
          delay
        }));
        _this.onExit.push(cancel(eventType));
        return eventType;
      };
      var delayedTransitions = isArray(afterConfig) ? afterConfig.map(function(transition, i) {
        var eventType = mutateEntryExit(transition.delay, i);
        return __assign(__assign({}, transition), {
          event: eventType
        });
      }) : flatten(Object.keys(afterConfig).map(function(delay, i) {
        var configTransition = afterConfig[delay];
        var resolvedTransition = isString(configTransition) ? {
          target: configTransition
        } : configTransition;
        var resolvedDelay = !isNaN(+delay) ? +delay : delay;
        var eventType = mutateEntryExit(resolvedDelay, i);
        return toArray(resolvedTransition).map(function(transition) {
          return __assign(__assign({}, transition), {
            event: eventType,
            delay: resolvedDelay
          });
        });
      }));
      return delayedTransitions.map(function(delayedTransition) {
        var delay = delayedTransition.delay;
        return __assign(__assign({}, _this.formatTransition(delayedTransition)), {
          delay
        });
      });
    };
    StateNode2.prototype.getStateNodes = function(state) {
      var _a2;
      var _this = this;
      if (!state) {
        return [];
      }
      var stateValue = state instanceof State ? state.value : toStateValue(state, this.delimiter);
      if (isString(stateValue)) {
        var initialStateValue = this.getStateNode(stateValue).initial;
        return initialStateValue !== void 0 ? this.getStateNodes((_a2 = {}, _a2[stateValue] = initialStateValue, _a2)) : [this, this.states[stateValue]];
      }
      var subStateKeys = Object.keys(stateValue);
      var subStateNodes = [this];
      subStateNodes.push.apply(subStateNodes, __spreadArray([], __read(flatten(subStateKeys.map(function(subStateKey) {
        return _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);
      }))), false));
      return subStateNodes;
    };
    StateNode2.prototype.handles = function(event) {
      var eventType = getEventType(event);
      return this.events.includes(eventType);
    };
    StateNode2.prototype.resolveState = function(state) {
      var stateFromConfig = state instanceof State ? state : State.create(state);
      var configuration = Array.from(getConfiguration([], this.getStateNodes(stateFromConfig.value)));
      return new State(__assign(__assign({}, stateFromConfig), {
        value: this.resolve(stateFromConfig.value),
        configuration,
        done: isInFinalState(configuration, this),
        tags: getTagsFromConfiguration(configuration),
        machine: this.machine
      }));
    };
    StateNode2.prototype.transitionLeafNode = function(stateValue, state, _event) {
      var stateNode = this.getStateNode(stateValue);
      var next = stateNode.next(state, _event);
      if (!next || !next.transitions.length) {
        return this.next(state, _event);
      }
      return next;
    };
    StateNode2.prototype.transitionCompoundNode = function(stateValue, state, _event) {
      var subStateKeys = Object.keys(stateValue);
      var stateNode = this.getStateNode(subStateKeys[0]);
      var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);
      if (!next || !next.transitions.length) {
        return this.next(state, _event);
      }
      return next;
    };
    StateNode2.prototype.transitionParallelNode = function(stateValue, state, _event) {
      var e_2, _a2;
      var transitionMap = {};
      try {
        for (var _b = __values(Object.keys(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var subStateKey = _c.value;
          var subStateValue = stateValue[subStateKey];
          if (!subStateValue) {
            continue;
          }
          var subStateNode = this.getStateNode(subStateKey);
          var next = subStateNode._transition(subStateValue, state, _event);
          if (next) {
            transitionMap[subStateKey] = next;
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      var stateTransitions = Object.keys(transitionMap).map(function(key) {
        return transitionMap[key];
      });
      var enabledTransitions = flatten(stateTransitions.map(function(st) {
        return st.transitions;
      }));
      var willTransition = stateTransitions.some(function(st) {
        return st.transitions.length > 0;
      });
      if (!willTransition) {
        return this.next(state, _event);
      }
      var configuration = flatten(Object.keys(transitionMap).map(function(key) {
        return transitionMap[key].configuration;
      }));
      return {
        transitions: enabledTransitions,
        exitSet: flatten(stateTransitions.map(function(t) {
          return t.exitSet;
        })),
        configuration,
        source: state,
        actions: flatten(Object.keys(transitionMap).map(function(key) {
          return transitionMap[key].actions;
        }))
      };
    };
    StateNode2.prototype._transition = function(stateValue, state, _event) {
      if (isString(stateValue)) {
        return this.transitionLeafNode(stateValue, state, _event);
      }
      if (Object.keys(stateValue).length === 1) {
        return this.transitionCompoundNode(stateValue, state, _event);
      }
      return this.transitionParallelNode(stateValue, state, _event);
    };
    StateNode2.prototype.getTransitionData = function(state, event) {
      return this._transition(state.value, state, toSCXMLEvent(event));
    };
    StateNode2.prototype.next = function(state, _event) {
      var e_3, _a2;
      var _this = this;
      var eventName = _event.name;
      var actions = [];
      var nextStateNodes = [];
      var selectedTransition;
      try {
        for (var _b = __values(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var candidate = _c.value;
          var cond = candidate.cond, stateIn = candidate.in;
          var resolvedContext = state.context;
          var isInState = stateIn ? isString(stateIn) && isStateId(stateIn) ? (
            // Check if in state by ID
            state.matches(toStateValue(this.getStateNodeById(stateIn).path, this.delimiter))
          ) : (
            // Check if in state by relative grandparent
            matchesState(toStateValue(stateIn, this.delimiter), path(this.path.slice(0, -2))(state.value))
          ) : true;
          var guardPassed = false;
          try {
            guardPassed = !cond || evaluateGuard(this.machine, cond, resolvedContext, _event, state);
          } catch (err) {
            throw new Error("Unable to evaluate guard '".concat(cond.name || cond.type, "' in transition for event '").concat(eventName, "' in state node '").concat(this.id, "':\n").concat(err.message));
          }
          if (guardPassed && isInState) {
            if (candidate.target !== void 0) {
              nextStateNodes = candidate.target;
            }
            actions.push.apply(actions, __spreadArray([], __read(candidate.actions), false));
            selectedTransition = candidate;
            break;
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      if (!selectedTransition) {
        return void 0;
      }
      if (!nextStateNodes.length) {
        return {
          transitions: [selectedTransition],
          exitSet: [],
          configuration: state.value ? [this] : [],
          source: state,
          actions
        };
      }
      var allNextStateNodes = flatten(nextStateNodes.map(function(stateNode) {
        return _this.getRelativeStateNodes(stateNode, state.historyValue);
      }));
      var isInternal = !!selectedTransition.internal;
      return {
        transitions: [selectedTransition],
        exitSet: isInternal ? [] : flatten(nextStateNodes.map(function(targetNode) {
          return _this.getPotentiallyReenteringNodes(targetNode);
        })),
        configuration: allNextStateNodes,
        source: state,
        actions
      };
    };
    StateNode2.prototype.getPotentiallyReenteringNodes = function(targetNode) {
      if (this.order < targetNode.order) {
        return [this];
      }
      var nodes = [];
      var marker = this;
      var possibleAncestor = targetNode;
      while (marker && marker !== possibleAncestor) {
        nodes.push(marker);
        marker = marker.parent;
      }
      if (marker !== possibleAncestor) {
        return [];
      }
      nodes.push(possibleAncestor);
      return nodes;
    };
    StateNode2.prototype.getActions = function(resolvedConfig, isDone, transition, currentContext, _event, prevState, predictableExec) {
      var e_4, _a2, e_5, _b;
      var _this = this;
      var prevConfig = prevState ? getConfiguration([], this.getStateNodes(prevState.value)) : [];
      var entrySet = /* @__PURE__ */ new Set();
      try {
        for (var _c = __values(Array.from(resolvedConfig).sort(function(a, b) {
          return a.order - b.order;
        })), _d = _c.next(); !_d.done; _d = _c.next()) {
          var sn = _d.value;
          if (!has(prevConfig, sn) || has(transition.exitSet, sn) || sn.parent && entrySet.has(sn.parent)) {
            entrySet.add(sn);
          }
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
      try {
        for (var prevConfig_1 = __values(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
          var sn = prevConfig_1_1.value;
          if (!has(resolvedConfig, sn) || has(transition.exitSet, sn.parent)) {
            transition.exitSet.push(sn);
          }
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return)) _b.call(prevConfig_1);
        } finally {
          if (e_5) throw e_5.error;
        }
      }
      transition.exitSet.sort(function(a, b) {
        return b.order - a.order;
      });
      var entryStates = Array.from(entrySet).sort(function(a, b) {
        return a.order - b.order;
      });
      var exitStates = new Set(transition.exitSet);
      var doneEvents = flatten(entryStates.map(function(sn2) {
        var events = [];
        if (sn2.type !== "final") {
          return events;
        }
        var parent = sn2.parent;
        if (!parent.parent) {
          return events;
        }
        events.push(
          done(sn2.id, sn2.doneData),
          // TODO: deprecate - final states should not emit done events for their own state.
          done(parent.id, sn2.doneData ? mapContext(sn2.doneData, currentContext, _event) : void 0)
        );
        var grandparent = parent.parent;
        if (grandparent.type === "parallel") {
          if (getChildren(grandparent).every(function(parentNode) {
            return isInFinalState(transition.configuration, parentNode);
          })) {
            events.push(done(grandparent.id));
          }
        }
        return events;
      }));
      var entryActions = entryStates.map(function(stateNode) {
        var entryActions2 = stateNode.onEntry;
        var invokeActions = stateNode.activities.map(function(activity) {
          return start(activity);
        });
        return {
          type: "entry",
          actions: toActionObjects(predictableExec ? __spreadArray(__spreadArray([], __read(entryActions2), false), __read(invokeActions), false) : __spreadArray(__spreadArray([], __read(invokeActions), false), __read(entryActions2), false), _this.machine.options.actions)
        };
      }).concat({
        type: "state_done",
        actions: doneEvents.map(function(event) {
          return raise(event);
        })
      });
      var exitActions = Array.from(exitStates).map(function(stateNode) {
        return {
          type: "exit",
          actions: toActionObjects(__spreadArray(__spreadArray([], __read(stateNode.onExit), false), __read(stateNode.activities.map(function(activity) {
            return stop(activity);
          })), false), _this.machine.options.actions)
        };
      });
      var actions = exitActions.concat({
        type: "transition",
        actions: toActionObjects(transition.actions, this.machine.options.actions)
      }).concat(entryActions);
      if (isDone) {
        var stopActions = toActionObjects(flatten(__spreadArray([], __read(resolvedConfig), false).sort(function(a, b) {
          return b.order - a.order;
        }).map(function(stateNode) {
          return stateNode.onExit;
        })), this.machine.options.actions).filter(function(action) {
          return !isRaisableAction(action);
        });
        return actions.concat({
          type: "stop",
          actions: stopActions
        });
      }
      return actions;
    };
    StateNode2.prototype.transition = function(state, event, context, exec) {
      if (state === void 0) {
        state = this.initialState;
      }
      var _event = toSCXMLEvent(event);
      var currentState;
      if (state instanceof State) {
        currentState = context === void 0 ? state : this.resolveState(State.from(state, context));
      } else {
        var resolvedStateValue = isString(state) ? this.resolve(pathToStateValue(this.getResolvedPath(state))) : this.resolve(state);
        var resolvedContext = context !== null && context !== void 0 ? context : this.machine.context;
        currentState = this.resolveState(State.from(resolvedStateValue, resolvedContext));
      }
      if (!IS_PRODUCTION && _event.name === WILDCARD) {
        throw new Error("An event cannot have the wildcard type ('".concat(WILDCARD, "')"));
      }
      if (this.strict) {
        if (!this.events.includes(_event.name) && !isBuiltInEvent(_event.name)) {
          throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(_event.name, "'"));
        }
      }
      var stateTransition = this._transition(currentState.value, currentState, _event) || {
        transitions: [],
        configuration: [],
        exitSet: [],
        source: currentState,
        actions: []
      };
      var prevConfig = getConfiguration([], this.getStateNodes(currentState.value));
      var resolvedConfig = stateTransition.configuration.length ? getConfiguration(prevConfig, stateTransition.configuration) : prevConfig;
      stateTransition.configuration = __spreadArray([], __read(resolvedConfig), false);
      return this.resolveTransition(stateTransition, currentState, currentState.context, exec, _event);
    };
    StateNode2.prototype.resolveRaisedTransition = function(state, _event, originalEvent, predictableExec) {
      var _a2;
      var currentActions = state.actions;
      state = this.transition(state, _event, void 0, predictableExec);
      state._event = originalEvent;
      state.event = originalEvent.data;
      (_a2 = state.actions).unshift.apply(_a2, __spreadArray([], __read(currentActions), false));
      return state;
    };
    StateNode2.prototype.resolveTransition = function(stateTransition, currentState, context, predictableExec, _event) {
      var e_6, _a2, e_7, _b;
      var _this = this;
      if (_event === void 0) {
        _event = initEvent;
      }
      var configuration = stateTransition.configuration;
      var willTransition = !currentState || stateTransition.transitions.length > 0;
      var resolvedConfiguration = willTransition ? stateTransition.configuration : currentState ? currentState.configuration : [];
      var isDone = isInFinalState(resolvedConfiguration, this);
      var resolvedStateValue = willTransition ? getValue(this.machine, configuration) : void 0;
      var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : void 0 : void 0;
      var actionBlocks = this.getActions(new Set(resolvedConfiguration), isDone, stateTransition, context, _event, currentState, predictableExec);
      var activities = currentState ? __assign({}, currentState.activities) : {};
      try {
        for (var actionBlocks_1 = __values(actionBlocks), actionBlocks_1_1 = actionBlocks_1.next(); !actionBlocks_1_1.done; actionBlocks_1_1 = actionBlocks_1.next()) {
          var block = actionBlocks_1_1.value;
          try {
            for (var _c = (e_7 = void 0, __values(block.actions)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var action = _d.value;
              if (action.type === start$1) {
                activities[action.activity.id || action.activity.type] = action;
              } else if (action.type === stop$1) {
                activities[action.activity.id || action.activity.type] = false;
              }
            }
          } catch (e_7_1) {
            e_7 = {
              error: e_7_1
            };
          } finally {
            try {
              if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            } finally {
              if (e_7) throw e_7.error;
            }
          }
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (actionBlocks_1_1 && !actionBlocks_1_1.done && (_a2 = actionBlocks_1.return)) _a2.call(actionBlocks_1);
        } finally {
          if (e_6) throw e_6.error;
        }
      }
      var _e = __read(resolveActions(this, currentState, context, _event, actionBlocks, predictableExec, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), resolvedActions = _e[0], updatedContext = _e[1];
      var _f = __read(partition(resolvedActions, isRaisableAction), 2), raisedEvents = _f[0], nonRaisedActions = _f[1];
      var invokeActions = resolvedActions.filter(function(action2) {
        var _a3;
        return action2.type === start$1 && ((_a3 = action2.activity) === null || _a3 === void 0 ? void 0 : _a3.type) === invoke;
      });
      var children2 = invokeActions.reduce(function(acc, action2) {
        acc[action2.activity.id] = createInvocableActor(action2.activity, _this.machine, updatedContext, _event);
        return acc;
      }, currentState ? __assign({}, currentState.children) : {});
      var nextState = new State({
        value: resolvedStateValue || currentState.value,
        context: updatedContext,
        _event,
        // Persist _sessionid between states
        _sessionid: currentState ? currentState._sessionid : null,
        historyValue: resolvedStateValue ? historyValue ? updateHistoryValue(historyValue, resolvedStateValue) : void 0 : currentState ? currentState.historyValue : void 0,
        history: !resolvedStateValue || stateTransition.source ? currentState : void 0,
        actions: resolvedStateValue ? nonRaisedActions : [],
        activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
        events: [],
        configuration: resolvedConfiguration,
        transitions: stateTransition.transitions,
        children: children2,
        done: isDone,
        tags: getTagsFromConfiguration(resolvedConfiguration),
        machine: this
      });
      var didUpdateContext = context !== updatedContext;
      nextState.changed = _event.name === update || didUpdateContext;
      var history = nextState.history;
      if (history) {
        delete history.history;
      }
      var hasAlwaysTransitions = !isDone && (this._transient || configuration.some(function(stateNode) {
        return stateNode._transient;
      }));
      if (!willTransition && (!hasAlwaysTransitions || _event.name === NULL_EVENT)) {
        return nextState;
      }
      var maybeNextState = nextState;
      if (!isDone) {
        if (hasAlwaysTransitions) {
          maybeNextState = this.resolveRaisedTransition(maybeNextState, {
            type: nullEvent
          }, _event, predictableExec);
        }
        while (raisedEvents.length) {
          var raisedEvent = raisedEvents.shift();
          maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event, predictableExec);
        }
      }
      var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || didUpdateContext || typeof history.value !== typeof maybeNextState.value || !stateValuesEqual(maybeNextState.value, history.value) : void 0);
      maybeNextState.changed = changed;
      maybeNextState.history = history;
      return maybeNextState;
    };
    StateNode2.prototype.getStateNode = function(stateKey) {
      if (isStateId(stateKey)) {
        return this.machine.getStateNodeById(stateKey);
      }
      if (!this.states) {
        throw new Error("Unable to retrieve child state '".concat(stateKey, "' from '").concat(this.id, "'; no child states exist."));
      }
      var result = this.states[stateKey];
      if (!result) {
        throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
      }
      return result;
    };
    StateNode2.prototype.getStateNodeById = function(stateId) {
      var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;
      if (resolvedStateId === this.id) {
        return this;
      }
      var stateNode = this.machine.idMap[resolvedStateId];
      if (!stateNode) {
        throw new Error("Child state node '#".concat(resolvedStateId, "' does not exist on machine '").concat(this.id, "'"));
      }
      return stateNode;
    };
    StateNode2.prototype.getStateNodeByPath = function(statePath) {
      if (typeof statePath === "string" && isStateId(statePath)) {
        try {
          return this.getStateNodeById(statePath.slice(1));
        } catch (e) {
        }
      }
      var arrayStatePath = toStatePath(statePath, this.delimiter).slice();
      var currentStateNode = this;
      while (arrayStatePath.length) {
        var key = arrayStatePath.shift();
        if (!key.length) {
          break;
        }
        currentStateNode = currentStateNode.getStateNode(key);
      }
      return currentStateNode;
    };
    StateNode2.prototype.resolve = function(stateValue) {
      var _a2;
      var _this = this;
      if (!stateValue) {
        return this.initialStateValue || EMPTY_OBJECT;
      }
      switch (this.type) {
        case "parallel":
          return mapValues(this.initialStateValue, function(subStateValue, subStateKey) {
            return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
          });
        case "compound":
          if (isString(stateValue)) {
            var subStateNode = this.getStateNode(stateValue);
            if (subStateNode.type === "parallel" || subStateNode.type === "compound") {
              return _a2 = {}, _a2[stateValue] = subStateNode.initialStateValue, _a2;
            }
            return stateValue;
          }
          if (!Object.keys(stateValue).length) {
            return this.initialStateValue || {};
          }
          return mapValues(stateValue, function(subStateValue, subStateKey) {
            return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
          });
        default:
          return stateValue || EMPTY_OBJECT;
      }
    };
    StateNode2.prototype.getResolvedPath = function(stateIdentifier) {
      if (isStateId(stateIdentifier)) {
        var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];
        if (!stateNode) {
          throw new Error("Unable to find state node '".concat(stateIdentifier, "'"));
        }
        return stateNode.path;
      }
      return toStatePath(stateIdentifier, this.delimiter);
    };
    Object.defineProperty(StateNode2.prototype, "initialStateValue", {
      get: function() {
        var _a2;
        if (this.__cache.initialStateValue) {
          return this.__cache.initialStateValue;
        }
        var initialStateValue;
        if (this.type === "parallel") {
          initialStateValue = mapFilterValues(this.states, function(state) {
            return state.initialStateValue || EMPTY_OBJECT;
          }, function(stateNode) {
            return !(stateNode.type === "history");
          });
        } else if (this.initial !== void 0) {
          if (!this.states[this.initial]) {
            throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
          }
          initialStateValue = isLeafNode(this.states[this.initial]) ? this.initial : (_a2 = {}, _a2[this.initial] = this.states[this.initial].initialStateValue, _a2);
        } else {
          initialStateValue = {};
        }
        this.__cache.initialStateValue = initialStateValue;
        return this.__cache.initialStateValue;
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.getInitialState = function(stateValue, context) {
      this._init();
      var configuration = this.getStateNodes(stateValue);
      return this.resolveTransition({
        configuration,
        exitSet: [],
        transitions: [],
        source: void 0,
        actions: []
      }, void 0, context !== null && context !== void 0 ? context : this.machine.context, void 0);
    };
    Object.defineProperty(StateNode2.prototype, "initialState", {
      /**
       * The initial State instance, which includes all actions to be executed from
       * entering the initial state.
       */
      get: function() {
        var initialStateValue = this.initialStateValue;
        if (!initialStateValue) {
          throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
        }
        return this.getInitialState(initialStateValue);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "target", {
      /**
       * The target state value of the history state node, if it exists. This represents the
       * default state value to transition to if no history value exists yet.
       */
      get: function() {
        var target;
        if (this.type === "history") {
          var historyConfig = this.config;
          if (isString(historyConfig.target)) {
            target = isStateId(historyConfig.target) ? pathToStateValue(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
          } else {
            target = historyConfig.target;
          }
        }
        return target;
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.getRelativeStateNodes = function(relativeStateId, historyValue, resolve) {
      if (resolve === void 0) {
        resolve = true;
      }
      return resolve ? relativeStateId.type === "history" ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
    };
    Object.defineProperty(StateNode2.prototype, "initialStateNodes", {
      get: function() {
        var _this = this;
        if (isLeafNode(this)) {
          return [this];
        }
        if (this.type === "compound" && !this.initial) {
          if (!IS_PRODUCTION) {
            warn(false, "Compound state node '".concat(this.id, "' has no initial state."));
          }
          return [this];
        }
        var initialStateNodePaths = toStatePaths(this.initialStateValue);
        return flatten(initialStateNodePaths.map(function(initialPath) {
          return _this.getFromRelativePath(initialPath);
        }));
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.getFromRelativePath = function(relativePath) {
      if (!relativePath.length) {
        return [this];
      }
      var _a2 = __read(relativePath), stateKey = _a2[0], childStatePath = _a2.slice(1);
      if (!this.states) {
        throw new Error("Cannot retrieve subPath '".concat(stateKey, "' from node with no states"));
      }
      var childStateNode = this.getStateNode(stateKey);
      if (childStateNode.type === "history") {
        return childStateNode.resolveHistory();
      }
      if (!this.states[stateKey]) {
        throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
      }
      return this.states[stateKey].getFromRelativePath(childStatePath);
    };
    StateNode2.prototype.historyValue = function(relativeStateValue) {
      if (!Object.keys(this.states).length) {
        return void 0;
      }
      return {
        current: relativeStateValue || this.initialStateValue,
        states: mapFilterValues(this.states, function(stateNode, key) {
          if (!relativeStateValue) {
            return stateNode.historyValue();
          }
          var subStateValue = isString(relativeStateValue) ? void 0 : relativeStateValue[key];
          return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
        }, function(stateNode) {
          return !stateNode.history;
        })
      };
    };
    StateNode2.prototype.resolveHistory = function(historyValue) {
      var _this = this;
      if (this.type !== "history") {
        return [this];
      }
      var parent = this.parent;
      if (!historyValue) {
        var historyTarget = this.target;
        return historyTarget ? flatten(toStatePaths(historyTarget).map(function(relativeChildPath) {
          return parent.getFromRelativePath(relativeChildPath);
        })) : parent.initialStateNodes;
      }
      var subHistoryValue = nestedPath(parent.path, "states")(historyValue).current;
      if (isString(subHistoryValue)) {
        return [parent.getStateNode(subHistoryValue)];
      }
      return flatten(toStatePaths(subHistoryValue).map(function(subStatePath) {
        return _this.history === "deep" ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
      }));
    };
    Object.defineProperty(StateNode2.prototype, "stateIds", {
      /**
       * All the state node IDs of this state node and its descendant state nodes.
       */
      get: function() {
        var _this = this;
        var childStateIds = flatten(Object.keys(this.states).map(function(stateKey) {
          return _this.states[stateKey].stateIds;
        }));
        return [this.id].concat(childStateIds);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "events", {
      /**
       * All the event types accepted by this state node and its descendants.
       */
      get: function() {
        var e_8, _a2, e_9, _b;
        if (this.__cache.events) {
          return this.__cache.events;
        }
        var states = this.states;
        var events = new Set(this.ownEvents);
        if (states) {
          try {
            for (var _c = __values(Object.keys(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var stateId = _d.value;
              var state = states[stateId];
              if (state.states) {
                try {
                  for (var _e = (e_9 = void 0, __values(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var event_1 = _f.value;
                    events.add("".concat(event_1));
                  }
                } catch (e_9_1) {
                  e_9 = {
                    error: e_9_1
                  };
                } finally {
                  try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                  } finally {
                    if (e_9) throw e_9.error;
                  }
                }
              }
            }
          } catch (e_8_1) {
            e_8 = {
              error: e_8_1
            };
          } finally {
            try {
              if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
            } finally {
              if (e_8) throw e_8.error;
            }
          }
        }
        return this.__cache.events = Array.from(events);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "ownEvents", {
      /**
       * All the events that have transitions directly from this state node.
       *
       * Excludes any inert events.
       */
      get: function() {
        var events = new Set(this.transitions.filter(function(transition) {
          return !(!transition.target && !transition.actions.length && transition.internal);
        }).map(function(transition) {
          return transition.eventType;
        }));
        return Array.from(events);
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.resolveTarget = function(_target) {
      var _this = this;
      if (_target === void 0) {
        return void 0;
      }
      return _target.map(function(target) {
        if (!isString(target)) {
          return target;
        }
        var isInternalTarget = target[0] === _this.delimiter;
        if (isInternalTarget && !_this.parent) {
          return _this.getStateNodeByPath(target.slice(1));
        }
        var resolvedTarget = isInternalTarget ? _this.key + target : target;
        if (_this.parent) {
          try {
            var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);
            return targetStateNode;
          } catch (err) {
            throw new Error("Invalid transition definition for state node '".concat(_this.id, "':\n").concat(err.message));
          }
        } else {
          return _this.getStateNodeByPath(resolvedTarget);
        }
      });
    };
    StateNode2.prototype.formatTransition = function(transitionConfig) {
      var _this = this;
      var normalizedTarget = normalizeTarget(transitionConfig.target);
      var internal = "internal" in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function(_target) {
        return isString(_target) && _target[0] === _this.delimiter;
      }) : true;
      var guards = this.machine.options.guards;
      var target = this.resolveTarget(normalizedTarget);
      var transition = __assign(__assign({}, transitionConfig), {
        actions: toActionObjects(toArray(transitionConfig.actions)),
        cond: toGuard(transitionConfig.cond, guards),
        target,
        source: this,
        internal,
        eventType: transitionConfig.event,
        toJSON: function() {
          return __assign(__assign({}, transition), {
            target: transition.target ? transition.target.map(function(t) {
              return "#".concat(t.id);
            }) : void 0,
            source: "#".concat(_this.id)
          });
        }
      });
      return transition;
    };
    StateNode2.prototype.formatTransitions = function() {
      var e_10, _a2;
      var _this = this;
      var onConfig;
      if (!this.config.on) {
        onConfig = [];
      } else if (Array.isArray(this.config.on)) {
        onConfig = this.config.on;
      } else {
        var _b = this.config.on, _c = WILDCARD, _d = _b[_c], wildcardConfigs = _d === void 0 ? [] : _d, strictTransitionConfigs_1 = __rest(_b, [typeof _c === "symbol" ? _c : _c + ""]);
        onConfig = flatten(Object.keys(strictTransitionConfigs_1).map(function(key) {
          if (!IS_PRODUCTION && key === NULL_EVENT) {
            warn(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(_this.id, '".'));
          }
          var transitionConfigArray = toTransitionConfigArray(key, strictTransitionConfigs_1[key]);
          if (!IS_PRODUCTION) {
            validateArrayifiedTransitions(_this, key, transitionConfigArray);
          }
          return transitionConfigArray;
        }).concat(toTransitionConfigArray(WILDCARD, wildcardConfigs)));
      }
      var eventlessConfig = this.config.always ? toTransitionConfigArray("", this.config.always) : [];
      var doneConfig = this.config.onDone ? toTransitionConfigArray(String(done(this.id)), this.config.onDone) : [];
      if (!IS_PRODUCTION) {
        warn(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
      }
      var invokeConfig = flatten(this.invoke.map(function(invokeDef) {
        var settleTransitions = [];
        if (invokeDef.onDone) {
          settleTransitions.push.apply(settleTransitions, __spreadArray([], __read(toTransitionConfigArray(String(doneInvoke(invokeDef.id)), invokeDef.onDone)), false));
        }
        if (invokeDef.onError) {
          settleTransitions.push.apply(settleTransitions, __spreadArray([], __read(toTransitionConfigArray(String(error(invokeDef.id)), invokeDef.onError)), false));
        }
        return settleTransitions;
      }));
      var delayedTransitions = this.after;
      var formattedTransitions = flatten(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(doneConfig), false), __read(invokeConfig), false), __read(onConfig), false), __read(eventlessConfig), false).map(function(transitionConfig) {
        return toArray(transitionConfig).map(function(transition) {
          return _this.formatTransition(transition);
        });
      }));
      try {
        for (var delayedTransitions_1 = __values(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
          var delayedTransition = delayedTransitions_1_1.value;
          formattedTransitions.push(delayedTransition);
        }
      } catch (e_10_1) {
        e_10 = {
          error: e_10_1
        };
      } finally {
        try {
          if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a2 = delayedTransitions_1.return)) _a2.call(delayedTransitions_1);
        } finally {
          if (e_10) throw e_10.error;
        }
      }
      return formattedTransitions;
    };
    return StateNode2;
  }()
);
function Machine(config, options, initialContext) {
  if (initialContext === void 0) {
    initialContext = config.context;
  }
  return new StateNode(config, options, initialContext);
}
var WcsDefaultSelectFilterFn = (optionEl, filter) => {
  return optionEl.textContent.toLowerCase().startsWith(filter.toLowerCase());
};
var WcsSelectSizeValue = ["m", "l"];
function isWcsSelectSize(size) {
  return WcsSelectSizeValue.includes(size);
}
var SelectChips = ({
  disabled,
  option,
  onRemove
}) => {
  const style = {};
  if (option.chipColor) {
    style["color"] = option.chipColor;
  }
  if (option.chipBackgroundColor) {
    style["background-color"] = option.chipBackgroundColor;
  }
  return h("label", {
    class: "wcs-select-chip",
    style,
    onClick: (e) => e.stopImmediatePropagation()
  }, h("div", null, option.displayText), disabled ? null : h("div", {
    onClick: () => onRemove(option)
  }, h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "12",
    viewBox: "0 0 20 12",
    class: "chip"
  }, h("path", {
    d: "M2,0 6,4 10,0 12,2 8,6 12,10 10,12 6,8 2,12 0,10 4,6 0,2 2,0",
    fill: option.chipColor,
    transform: "translate(8 0)"
  }))));
};
function getActionForKeyboardEvent(event, currentState, type) {
  const keyboardShortcut = keyboardShortcutFromKeyboardEvent(event);
  if (keyboardShortcut === "UNKNOWN") {
    return [];
  }
  switch (currentState) {
    case "closed":
      switch (keyboardShortcut) {
        case "MAJ+TAB":
          switch (type) {
            case "unique":
            case "multiple":
              return [];
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [{
                kind: "MoveFocus",
                target: "previous"
              }];
          }
          break;
        case "DOWN_ARROW":
          switch (type) {
            case "unique":
              return [{
                kind: "SelectOption",
                target: "next"
              }];
            case "autocomplete_multiple":
            case "autocomplete_unique":
              return [{
                kind: "OpenSelect"
              }, {
                kind: "HighlightOption",
                target: "first"
              }];
            case "multiple":
              return [{
                kind: "OpenSelect"
              }, {
                kind: "FocusOption",
                target: "first"
              }];
          }
          break;
        case "RIGHT_ARROW":
          switch (type) {
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [];
            case "unique":
              return [{
                kind: "SelectOption",
                target: "next"
              }];
            case "multiple":
              return [{
                kind: "OpenSelect"
              }, {
                kind: "FocusOption",
                target: "first"
              }];
          }
          break;
        case "UP_ARROW":
          switch (type) {
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [{
                kind: "OpenSelect"
              }, {
                kind: "HighlightOption",
                target: "last"
              }];
            case "multiple":
              break;
            case "unique":
              return [{
                kind: "SelectOption",
                target: "previous"
              }];
          }
          break;
        case "LEFT_ARROW":
          switch (type) {
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [];
            case "unique":
              return [{
                kind: "SelectOption",
                target: "previous"
              }];
          }
          break;
        case "ALT+DOWN_ARROW":
        case "ALT+UP_ARROW":
          switch (type) {
            case "unique":
              return [{
                kind: "OpenSelect"
              }, {
                kind: "FocusOption",
                target: "first"
              }];
            case "autocomplete_unique":
            case "autocomplete_multiple":
            case "multiple":
              return [{
                kind: "OpenSelect"
              }];
          }
          break;
        case "SPACE":
        case "ENTER":
          switch (type) {
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [];
            case "unique":
            case "multiple":
              return [{
                kind: "OpenSelect"
              }, {
                kind: "FocusOption",
                target: "lastFocused"
              }];
          }
          break;
        case "ESCAPE":
          switch (type) {
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [{
                kind: "ClearAutocompleteInput"
              }];
            case "unique":
            case "multiple":
              return [];
          }
          break;
        case "PAGE_UP":
          switch (type) {
            case "autocomplete_unique":
              return [];
            case "autocomplete_multiple":
              return [];
            case "unique":
              return [{
                kind: "SelectOption",
                target: "first"
              }];
            case "multiple":
              return [];
          }
          break;
        case "PAGE_DOWN":
          switch (type) {
            case "autocomplete_unique":
              return [];
            case "autocomplete_multiple":
              return [];
            case "unique":
              return [{
                kind: "SelectOption",
                target: "last"
              }];
            case "multiple":
              return [];
          }
          break;
      }
      break;
    case "opened":
      switch (keyboardShortcut) {
        case "ESCAPE":
          switch (type) {
            case "unique":
            case "multiple":
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [{
                kind: "CloseSelect",
                shouldBlur: false
              }];
          }
          break;
        case "ALT+UP_ARROW":
          switch (type) {
            case "unique":
            case "multiple":
              return [{
                kind: "CloseSelect",
                shouldBlur: false
              }];
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [];
          }
          break;
        case "TAB":
          switch (type) {
            case "autocomplete_unique":
              return [{
                kind: "SelectOption",
                target: "lastHighlighted"
              }, {
                kind: "CloseSelect",
                shouldBlur: false
              }];
            case "autocomplete_multiple":
              return [{
                kind: "CloseSelect",
                shouldBlur: false
              }];
            case "unique":
            case "multiple":
              return [{
                kind: "CloseSelect",
                shouldBlur: true
              }];
          }
          break;
        case "MAJ+TAB":
          switch (type) {
            case "autocomplete_unique":
              return [{
                kind: "SelectOption",
                target: "lastHighlighted"
              }, {
                kind: "CloseSelect",
                shouldBlur: false
              }, {
                kind: "MoveFocus",
                target: "previous"
              }];
            case "autocomplete_multiple":
              return [{
                kind: "CloseSelect",
                shouldBlur: false
              }, {
                kind: "MoveFocus",
                target: "previous"
              }];
            case "unique":
            case "multiple":
              return [{
                kind: "CloseSelect",
                shouldBlur: true
              }];
          }
          break;
        case "UP_ARROW":
          switch (type) {
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [{
                kind: "HighlightOption",
                target: "previous"
              }];
            case "unique":
            case "multiple":
              return [{
                kind: "FocusOption",
                target: "previous"
              }];
          }
          break;
        case "LEFT_ARROW":
          switch (type) {
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [];
            case "unique":
            case "multiple":
              return [{
                kind: "FocusOption",
                target: "previous"
              }];
          }
          break;
        case "DOWN_ARROW":
          switch (type) {
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [{
                kind: "HighlightOption",
                target: "next"
              }];
            case "unique":
            case "multiple":
              return [{
                kind: "FocusOption",
                target: "next"
              }];
          }
          break;
        case "RIGHT_ARROW":
          switch (type) {
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [];
            case "unique":
            case "multiple":
              return [{
                kind: "FocusOption",
                target: "next"
              }];
          }
          break;
        case "PAGE_UP":
          switch (type) {
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [{
                kind: "HighlightOption",
                target: "first"
              }];
            case "unique":
            case "multiple":
              return [{
                kind: "FocusOption",
                target: "first"
              }];
          }
          break;
        case "PAGE_DOWN":
          switch (type) {
            case "autocomplete_unique":
            case "autocomplete_multiple":
              return [{
                kind: "HighlightOption",
                target: "last"
              }];
            case "unique":
            case "multiple":
              return [{
                kind: "FocusOption",
                target: "last"
              }];
          }
          break;
        case "ENTER":
          switch (type) {
            case "autocomplete_unique":
              return [{
                kind: "SelectOption",
                target: "lastHighlighted"
              }];
            case "autocomplete_multiple":
              return [{
                kind: "SelectOption",
                target: "lastHighlighted"
              }];
          }
          break;
      }
      break;
    default:
      throw Error("Unknown error");
  }
  return [];
}
var selectCss = ':host{--wcs-select-ligther-percentage:40;--wcs-select-control-border-radius:var(--wcs-semantic-border-radius-base);--wcs-select-text-color-disabled:var(--wcs-semantic-color-text-disabled);--wcs-select-value-color:var(--wcs-semantic-color-text-primary);--wcs-select-value-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-select-placeholder-color:var(--wcs-semantic-color-text-tertiary);--wcs-select-placeholder-font-weight:var(--wcs-semantic-font-weight-roman);--wcs-select-placeholder-font-style:var(--wcs-semantic-font-style-control-placeholder);--wcs-select-options-padding:var(--wcs-semantic-spacing-base-150);--wcs-select-control-line-height:var(--wcs-semantic-font-line-height-large);--wcs-select-control-background-color:var(--wcs-semantic-color-background-control-default);--wcs-select-control-arrow-color:var(--wcs-semantic-color-foreground-action-secondary-default);--wcs-select-control-arrow-color-disabled:var(--wcs-semantic-color-foreground-disabled);--wcs-select-control-chips-gap:var(--wcs-semantic-spacing-small);--wcs-select-control-border-color-default:var(--wcs-semantic-color-border-primary);--wcs-select-control-border-color-disabled:var(--wcs-semantic-color-border-disabled);--wcs-select-control-border-color-focus:var(--wcs-semantic-color-border-control-focus);--wcs-select-control-border-color-error:var(--wcs-semantic-color-border-critical);--wcs-select-control-border-style-default:solid;--wcs-select-control-border-style-error:solid;--wcs-select-control-border-style-focus:var(--wcs-semantic-border-style-focus-control);--wcs-select-control-border-width-default:var(--wcs-semantic-border-width-default);--wcs-select-control-border-width-focus:var(--wcs-semantic-border-width-large);--wcs-select-control-padding-horizontal-m:var(--wcs-semantic-spacing-large);--wcs-select-control-padding-horizontal-l:var(--wcs-semantic-spacing-large);--wcs-select-control-height:var(--wcs-select-control-height-m);--wcs-select-control-height-m:var(--wcs-semantic-size-m);--wcs-select-control-height-l:var(--wcs-semantic-size-l);--wcs-internal-select-chip-size:var(--wcs-semantic-size-s);--wcs-select-control-font-size:var(--wcs-select-control-font-size-m, 1rem);--wcs-select-control-font-size-m:var(--wcs-semantic-font-size-m);--wcs-select-control-font-size-l:var(--wcs-semantic-font-size-l);--wcs-select-overlay-max-height:360px;--wcs-select-overlay-background-color:var(--wcs-semantic-color-background-surface-primary);--wcs-select-overlay-border-width:var(--wcs-semantic-border-width-default);--wcs-select-overlay-border-color:var(--wcs-semantic-color-border-secondary);--wcs-select-overlay-border-radius:var(--wcs-semantic-border-radius-base);--wcs-select-control-chip-color-default:var(--wcs-semantic-color-foreground-action-primary-default);--wcs-select-control-chip-color-disabled:var(--wcs-semantic-color-text-disabled);--wcs-select-control-chip-background-color-default:var(--wcs-semantic-color-background-action-primary-default);--wcs-select-control-chip-background-color-disabled:var(--wcs-semantic-color-background-action-primary-disabled);--wcs-select-control-chip-padding-vertical:var(--wcs-semantic-spacing-small);--wcs-select-control-chip-padding-horizontal:calc(1.5 * var(--wcs-semantic-spacing-base));--wcs-select-control-chip-line-height:var(--wcs-semantic-font-line-height-large);--wcs-select-control-chip-border-radius:var(--wcs-semantic-border-radius-base);--wcs-select-control-autocomplete-padding-vertical-m:var(--wcs-semantic-spacing-small);--wcs-select-control-autocomplete-padding-vertical-l:var(--wcs-semantic-spacing-small);--wcs-select-internal-noresult-padding-horizontal:var(--wcs-semantic-spacing-base);display:block;min-height:var(--wcs-select-control-height);position:relative;outline:none;user-select:none;box-sizing:border-box}:host svg{flex-shrink:0}:host .wcs-select-control{min-height:var(--wcs-select-control-height);outline:var(--wcs-select-control-border-width-default) var(--wcs-select-control-border-style-default) var(--wcs-select-control-border-color-default);outline-offset:calc(var(--wcs-select-control-border-width-default) * -1)}:host .arrow{fill:var(--wcs-select-control-arrow-color)}:host .chip{fill:var(--wcs-select-control-chip-color-default);opacity:calc((100 - var(--wcs-select-ligther-percentage)) / 100)}:host .chip:hover{opacity:100}.wcs-select-control{box-sizing:border-box;display:flex;align-items:center;background-color:var(--wcs-select-control-background-color);border-radius:var(--wcs-select-control-border-radius);outline:var(--wcs-select-control-border-color-default) solid var(--wcs-select-control-border-width-default);outline-offset:calc(var(--wcs-select-control-border-width-default) * -1);font-size:var(--wcs-select-control-font-size, 1rem);line-height:var(--wcs-select-control-line-height);cursor:pointer;padding-left:var(--wcs-select-control-padding-horizontal-m);padding-right:calc(var(--wcs-select-control-padding-horizontal-m) - 4px)}label{cursor:pointer;transition:color 125ms ease-in;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}label.wcs-select-placeholder{color:var(--wcs-select-placeholder-color);font-style:var(--wcs-select-placeholder-font-style);font-weight:var(--wcs-select-placeholder-font-weight)}label.wcs-select-value{color:var(--wcs-select-value-color);font-style:normal;font-weight:var(--wcs-select-value-font-weight)}label::after{content:"";padding:1px}.wcs-select-value-container{max-width:calc(100% - (24px + var(--wcs-semantic-spacing-base)));padding-right:8px;display:flex;flex-direction:row;gap:var(--wcs-select-control-chips-gap);align-items:center;flex-wrap:wrap}.wcs-select-chip{box-sizing:border-box;height:var(--wcs-internal-select-chip-size);line-height:var(--wcs-select-control-chip-line-height);color:var(--wcs-select-control-chip-color-default);background-color:var(--wcs-select-control-chip-background-color-default);border-radius:var(--wcs-select-control-chip-border-radius);display:flex;align-items:center;padding:var(--wcs-select-control-chip-padding-vertical) var(--wcs-select-control-chip-padding-horizontal);overflow:initial;z-index:1}.wcs-select-options{display:none;position:absolute;z-index:999999999;border:solid var(--wcs-select-overlay-border-width) var(--wcs-select-overlay-border-color);border-radius:var(--wcs-select-overlay-border-radius);max-height:var(--wcs-select-overlay-max-height);overflow-y:auto;width:calc(100% - (2 * var(--wcs-select-overlay-border-width) + 2 * var(--wcs-select-options-padding)));padding:var(--wcs-select-options-padding);background-color:var(--wcs-select-overlay-background-color)}:host(.expanded){outline-width:var(--wcs-select-control-border-width-focus)}:host(.expanded) .wcs-select-control{outline:var(--wcs-select-control-border-width-focus) var(--wcs-select-control-border-style-focus) var(--wcs-select-control-border-color-focus);outline-offset:calc(var(--wcs-select-control-border-width-focus) * -1)}:host(.expanded) .wcs-select-options{display:block}:host([aria-invalid=true]) .wcs-select-control{outline-style:var(--wcs-select-control-border-style-error);outline-color:var(--wcs-select-control-border-color-error)}:host(:not(.expanded):focus-visible){outline-width:var(--wcs-select-control-border-width-focus)}:host(:not(.expanded):focus-visible) .wcs-select-control{outline:var(--wcs-select-control-border-width-focus) var(--wcs-select-control-border-style-focus) var(--wcs-select-control-border-color-focus);outline-offset:calc(var(--wcs-select-control-border-width-focus) * -1)}:host([disabled]){cursor:not-allowed;--wcs-select-control-background-color:var(--wcs-semantic-color-background-control-disabled)}:host([disabled]) .wcs-select-control{outline-style:var(--wcs-select-control-border-style-default);outline-color:var(--wcs-select-control-border-color-disabled)}:host([disabled]) .wcs-select-control,:host([disabled]) label{cursor:default;pointer-events:none}:host([disabled]) label{color:var(--wcs-select-text-color-disabled)}:host([disabled]) .arrow{fill:var(--wcs-select-control-arrow-color-disabled)}:host([disabled]) .wcs-select-chip{color:var(--wcs-select-control-chip-color-disabled);background-color:var(--wcs-select-control-chip-background-color-disabled)}:host([disabled]) .chip{fill:var(--wcs-select-control-chip-color-disabled)}:host([size=m]){--wcs-select-control-font-size:var(--wcs-select-control-font-size-m);--wcs-select-control-height:var(--wcs-select-control-height-m);--wcs-internal-select-chip-size:var(--wcs-select-chip-size-m)}:host([size=m]) .wcs-select-control{padding-left:var(--wcs-select-control-padding-horizontal-m);padding-right:calc(var(--wcs-select-control-padding-horizontal-m) - 4px)}:host([size=m]):host([autocomplete]) .autocomplete-field{height:calc(var(--wcs-select-control-height) - var(--wcs-select-control-autocomplete-padding-vertical-m) * 2)}:host([size=m]):host([autocomplete]) .wcs-select-value-container{padding-top:var(--wcs-select-control-autocomplete-padding-vertical-m);padding-bottom:var(--wcs-select-control-autocomplete-padding-vertical-m)}:host([size=l]){--wcs-select-control-font-size:var(--wcs-select-control-font-size-l);--wcs-select-control-height:var(--wcs-select-control-height-l);--wcs-internal-select-chip-size:var(--wcs-select-chip-size-l)}:host([size=l]) .wcs-select-control{padding-left:var(--wcs-select-control-padding-horizontal-l);padding-right:calc(var(--wcs-select-control-padding-horizontal-l) - 4px)}:host([size=l]):host([autocomplete]) .autocomplete-field{height:calc(var(--wcs-select-control-height) - var(--wcs-select-control-autocomplete-padding-vertical-l) * 2)}:host([size=l]):host([autocomplete]) .wcs-select-value-container{padding-top:var(--wcs-select-control-autocomplete-padding-vertical-l);padding-bottom:var(--wcs-select-control-autocomplete-padding-vertical-l)}:host([chips]) .wcs-select-control{flex-wrap:wrap}:host([chips]) .wcs-select-value-container{margin-top:4px;margin-bottom:4px}:host([autocomplete]) .wcs-select-value-container{margin:0;width:100%}:host([autocomplete]) input{font:unset;background-color:transparent;outline:none;border:none;padding:unset;color:var(--wcs-select-value-color);font-weight:var(--wcs-select-value-font-weight) !important;font-size:var(--wcs-select-control-font-size);line-height:inherit}:host([autocomplete]) input::placeholder{color:var(--wcs-select-placeholder-color);opacity:1;font-weight:var(--wcs-select-placeholder-font-weight);font-style:var(--wcs-select-placeholder-font-style)}:host([autocomplete]:focus-within) .wcs-select-control{outline:var(--wcs-select-control-border-width-focus) var(--wcs-select-control-border-style-focus) var(--wcs-select-control-border-color-focus);outline-offset:calc(var(--wcs-select-control-border-width-focus) * -1)}.autocomplete-field{width:0;min-width:50px;flex-grow:1}.noresult-container{padding-left:var(--wcs-select-internal-noresult-padding-horizontal);padding-right:var(--wcs-select-internal-noresult-padding-horizontal);display:flex;flex-direction:row;align-items:center;height:var(--wcs-select-control-height)}';
var WcsSelectStyle0 = selectCss;
var SELECT_MACHINE_CONFIG = {
  key: "select",
  initial: "closed",
  states: {
    closed: {
      entry: ["close"],
      on: {
        CLICK: "opened",
        OPEN: "opened",
        OPTION_SELECTED: {
          actions: ["selectOption"]
        }
      }
    },
    opened: {
      entry: ["open"],
      on: {
        CLICK: "closed",
        CLOSE: "closed",
        OPTION_SELECTED: {
          actions: ["selectOption"]
        }
      }
    }
  }
};
var SELECT_INHERITED_ATTRS = ["tabindex", "title"];
var Select = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsChange = createEvent(this, "wcsChange", 7);
    this.wcsFocus = createEvent(this, "wcsFocus", 7);
    this.wcsBlur = createEvent(this, "wcsBlur", 7);
    this.wcsFilterChange = createEvent(this, "wcsFilterChange", 7);
    this.inheritedAttributes = {};
    this.selectId = `wcs-select-${selectIds++}`;
    this.optionsId = generateUniqueId("OPTIONS");
    this.expanded = false;
    this.size = "m";
    this.displayText = void 0;
    this.focused = void 0;
    this.value = void 0;
    this.placeholder = void 0;
    this.disabled = false;
    this.required = false;
    this.multiple = false;
    this.autocomplete = false;
    this.serverMode = false;
    this.filterFn = void 0;
    this.chips = false;
    this.name = void 0;
    this.compareWith = (optionValue, selectedValue) => isEqual(optionValue, selectedValue);
    this.showNoResultFoundLabel = false;
    this.autocompleteValue = void 0;
    this.overlayDirection = "bottom";
  }
  /** Open the component. */
  open() {
    return __async(this, null, function* () {
      this.stateService.send("OPEN");
    });
  }
  /** Close the component. */
  close() {
    return __async(this, null, function* () {
      this.stateService.send("CLOSE");
    });
  }
  onValueChangeHandler(newValue) {
    this.updateSelectedValue(newValue);
  }
  /**
   * Updates the selected value(s) of the component and manages the internal state accordingly
   *
   * @param value - The value(s) to be selected in the component
   *                For single selection mode: any value that matches an option's value
   *                For multiple selection mode: a single value or an array of values
   * @param resetIfNoValue - When true and no value is provided, the select component will be reset
   *                        Defaults to true
   */
  updateSelectedValue(value, resetIfNoValue = true) {
    var _a2;
    if (!value && resetIfNoValue) {
      this.reset();
    }
    if (this.multiple) {
      if (!Array.isArray(value)) {
        value = [value];
      }
      this.lastModifiedOptionElement = value.length > 0 ? (_a2 = Array.from(this.options).find((opt) => this.compareWith(opt.value, value[value.length - 1]))) !== null && _a2 !== void 0 ? _a2 : null : null;
      if (this.serverMode) {
        const compareResult = compareLists(this.values.map((v) => v.value), value, this.compareWith);
        compareResult.added.forEach((addedOption) => {
          const option = Array.from(this.options).find((opt) => this.compareWith(opt.value, addedOption));
          if (option) {
            this.values.push({
              value: option.value,
              displayText: option.innerText,
              chipColor: option.chipColor,
              chipBackgroundColor: option.chipBackgroundColor
            });
            option.selected = true;
          }
        });
        compareResult.kept.forEach((keptOption) => {
          const option = Array.from(this.options).find((opt) => this.compareWith(opt.value, keptOption));
          if (option) {
            option.selected = true;
          }
        });
        compareResult.removed.forEach((removedOption) => {
          this.values = this.values.filter((v) => !this.compareWith(v.value, removedOption));
          const removedOptionElement = Array.from(this.options).find((opt) => this.compareWith(opt.value, removedOption));
          if (removedOptionElement) {
            removedOptionElement.selected = false;
          }
        });
      } else {
        this.values = [];
        this.options.forEach((opt) => {
          const isSelected = value ? value.findIndex((v) => this.compareWith(opt.value, v)) !== -1 : false;
          if (isSelected) {
            this.values.push({
              value: opt.value,
              displayText: opt.innerText,
              chipColor: opt.chipColor,
              chipBackgroundColor: opt.chipBackgroundColor
            });
          }
          opt.selected = isSelected;
        });
      }
      this.displayText = this.values.length !== 0 ? this.values.map((v) => v.displayText).join(", ") : void 0;
    } else {
      this.options.forEach((opt) => {
        const isSelected = this.compareWith(opt.value, value);
        if (isSelected) {
          this.displayText = opt.innerText;
          this.lastModifiedOptionElement = opt;
          if (this.autocomplete) {
            this.autocompleteValue = opt.innerText;
          }
        }
        opt.selected = isSelected;
      });
    }
  }
  /**
   * Reset the select: unselects all options for multiple mode and displays the placeholder
   * @private
   */
  reset() {
    this.values = [];
    this.displayText = void 0;
    if (this.autocomplete) {
      this.handleAutocompleteValueChange("", true);
    }
    this.options.forEach((opt) => {
      opt.selected = false;
    });
  }
  componentDidLoad() {
    this.optionsEl = this.el.shadowRoot.querySelector(".wcs-select-options");
    this.controlEl = this.el.shadowRoot.querySelector(".wcs-select-control");
    const stateMachine = Machine(SELECT_MACHINE_CONFIG, this.initMachineOptions());
    this.stateService = interpret(stateMachine);
    if (this.multiple) {
      this.values = [];
    }
    this.stateService.start();
    if (this.optionsEl.querySelector("slot") === null) {
      this.replaceOptions_firefoxBefore63();
      this.listenDomUpdate_firefoxBefore63();
    }
    if (this.value !== void 0) {
      this.updateSelectedValue(this.value);
    }
    this.popper = this.createPopperInstance();
    this.labelElement = findItemLabel(this.el);
    if (this.labelElement) {
      this.labelElement.id = this.selectId + "-lbl";
    }
  }
  createPopperInstance() {
    return createPopper(this.controlEl, this.optionsEl, {
      placement: "bottom",
      modifiers: [{
        name: "offset",
        options: {
          offset: [0, 4]
          // we want 4px between select control and select options
        }
      }]
    });
  }
  emitChange(newValue) {
    this.wcsChange.emit({
      value: newValue
    });
  }
  replaceOptions_firefoxBefore63() {
    Array.from(this.el.querySelectorAll("wcs-select-option")).forEach((option) => {
      if (option.parentNode === this.el) {
        this.el.removeChild(option);
        this.optionsEl.appendChild(option);
      }
    });
  }
  listenDomUpdate_firefoxBefore63() {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          this.replaceOptions_firefoxBefore63();
        }
      }
    });
    observer.observe(this.el, {
      childList: true
    });
  }
  componentWillRender() {
    if (this.multiple) {
      this.options.forEach((opt) => opt.multiple = true);
    }
  }
  componentWillLoad() {
    if (!isWcsSelectSize(this.size)) {
      console.warn(`Invalid size value for wcs-select : "${this.size}". Must be one of "${WcsSelectSizeValue.join(", ")}"`);
      this.size = "m";
    }
    if (this.autocomplete) {
      this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, SELECT_INHERITED_ATTRS));
    }
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      if (this.autocomplete === false) {
        setOrRemoveAttribute(this.el, attr, value);
      } else {
        setOrRemoveAttribute(this.autocompleteInput, attr, value);
      }
    });
  }
  get options() {
    var _a2;
    const opts = (_a2 = this.el) === null || _a2 === void 0 ? void 0 : _a2.querySelectorAll("wcs-select-option");
    if (opts && opts.length !== 0) {
      return opts;
    }
    return [];
  }
  get notDisabledOptions() {
    var _a2;
    const opts = (_a2 = this.el) === null || _a2 === void 0 ? void 0 : _a2.querySelectorAll("wcs-select-option:not([disabled]):not([aria-hidden])");
    if (opts && opts.length !== 0) {
      return opts;
    }
    return [];
  }
  initMachineOptions() {
    return {
      actions: {
        open: () => {
          var _a2;
          if (!this.disabled) {
            this.expanded = true;
            this.focused = false;
            if (this.multiple === false && this.autocomplete && this.hasValue === false) {
              if (this.autocompleteValue && this.autocompleteValue !== "") {
                this.handleAutocompleteValueChange(this.autocompleteValue);
              }
            }
            this.clearHighlightOnLastHighlightedOption();
            if (this.notDisabledOptions.length > 0) {
              this.lastFocusedOptionElement = (_a2 = this.lastModifiedOptionElement) !== null && _a2 !== void 0 ? _a2 : this.notDisabledOptions[0];
              requestAnimationFrame(() => {
                var _a3, _b;
                this.autocomplete ? (_a3 = this.autocompleteInput) === null || _a3 === void 0 ? void 0 : _a3.focus() : (_b = this.lastFocusedOptionElement) === null || _b === void 0 ? void 0 : _b.focus();
              });
            }
          }
        },
        close: (_, event) => {
          var _a2, _b;
          if (event.type === "CLOSE") {
            this.clearHighlightOnLastHighlightedOption();
            if ((_a2 = event.value) === null || _a2 === void 0 ? void 0 : _a2.shouldBlur) {
              this.focused = false;
            } else {
              if (this.autocomplete && ((_b = event.value) === null || _b === void 0 ? void 0 : _b.fromKeyboard)) {
                this.focusAutocompleteInput();
              } else {
                this.el.focus();
              }
              this.focused = true;
            }
          }
          this.expanded = false;
        },
        selectOption: (_, event) => {
          if (event.type === "OPTION_SELECTED") {
            if (this.multiple) {
              this.handleOptionSelectedOnMultiple(event.value.option);
            } else {
              this.handleOptionSelectedOnSingle(event.value.option);
              this.stateService.send("CLOSE", {
                value: {
                  fromKeyboard: event.value.fromKeyboard
                }
              });
            }
            if (this.autocomplete) {
              if (this.multiple) {
                requestAnimationFrame(() => {
                  this.autocompleteInput.focus();
                });
              } else {
                this.autocompleteValue = event.value.option.displayText;
              }
            }
            this.emitChange(this.value);
          }
        }
      },
      guards: {
        enabled: () => !this.disabled
      }
    };
  }
  handleOptionSelectedOnMultiple(event) {
    const index = this.values.findIndex((v) => this.compareWith(v.value, event.value));
    if (index === -1) {
      this.value = [...this.values.map((v) => v.value), event.value];
    } else {
      this.value = this.values.filter((v) => !this.compareWith(v.value, event.value)).map((v) => v.value);
    }
  }
  handleOptionSelectedOnSingle(event) {
    this.value = event.value;
  }
  disconnectedCallback() {
    var _a2;
    (_a2 = this.stateService) === null || _a2 === void 0 ? void 0 : _a2.stop();
  }
  get hasValue() {
    return this.displayText !== void 0;
  }
  onMouseUp(event) {
    const clickOnScroll = isElement(event.target) && (event.offsetX > event.target.clientWidth || event.offsetY > event.target.clientHeight || event.offsetY < 0);
    const clickOnRemoveChip = event.composedPath().filter((x) => {
      const el = x;
      return el.nodeName === "svg" && el.classList.contains("chip");
    }).length > 0;
    if (!clickOnScroll && !clickOnRemoveChip) {
      this.stateService.send("CLICK");
    }
  }
  onWindowClickEvent(event) {
    const firstSelectInEventPath = event.composedPath().filter((x) => x.nodeName === "WCS-SELECT")[0];
    const clickOnCurrentSelect = firstSelectInEventPath === this.el;
    if (this.expanded && !clickOnCurrentSelect) {
      this.stateService.send({
        type: "CLOSE",
        value: {
          shouldBlur: true,
          fromKeyboard: false
        }
      });
    }
  }
  onKeyDown(_event) {
    const currentState = this.stateService.getSnapshot().matches("closed") ? "closed" : "opened";
    let type;
    if (this.autocomplete) {
      type = this.multiple ? "autocomplete_multiple" : "autocomplete_unique";
    } else {
      type = this.multiple ? "multiple" : "unique";
    }
    const actionsFromKeyboardEvents = getActionForKeyboardEvent(_event, currentState, type);
    if (actionsFromKeyboardEvents.length != 0 && actionsFromKeyboardEvents.filter((a) => a.kind === "MoveFocus").length === 0) {
      _event.preventDefault();
    }
    for (const actionFromKeyboardEvent of actionsFromKeyboardEvents) {
      this.doActionFromKeyboardEventAssociatedAction(actionFromKeyboardEvent, _event);
    }
  }
  doActionFromKeyboardEventAssociatedAction(actionFromKeyboardEvent, event) {
    var _a2, _b;
    switch (actionFromKeyboardEvent.kind) {
      case "CloseSelect":
        this.stateService.send({
          type: "CLOSE",
          value: {
            shouldBlur: actionFromKeyboardEvent.shouldBlur,
            fromKeyboard: true
          }
        });
        break;
      case "OpenSelect":
        this.stateService.send("OPEN");
        break;
      case "SelectOption":
        switch (actionFromKeyboardEvent.target) {
          case "next":
            this.selectClosestOption("next");
            break;
          case "previous":
            this.selectClosestOption("previous");
            break;
          case "first":
            this.selectFirstOption();
            break;
          case "last":
            this.selectLastOption();
            break;
          case "lastHighlighted": {
            const indexToSelect = Array.from(this.notDisabledOptions).indexOf(this.lastHighlightedOptionElement);
            if (indexToSelect !== -1) {
              this.lastModifiedOptionElement = this.lastHighlightedOptionElement;
              this.selectOption(indexToSelect, true);
            }
            break;
          }
        }
        break;
      case "ClearAutocompleteInput":
        this.autocompleteValue = "";
        break;
      case "ClearHighlight":
        this.clearHighlightOnLastHighlightedOption();
        break;
      case "HighlightOption":
        switch (actionFromKeyboardEvent.target) {
          case "next":
            this.highlightClosestOption("next");
            break;
          case "previous":
            this.highlightClosestOption("previous");
            break;
          case "first":
            this.highlightFirstOption();
            break;
          case "last":
            this.highlightLastOption();
            break;
        }
        break;
      case "FocusOption":
        switch (actionFromKeyboardEvent.target) {
          case "next":
            this.focusClosestOption("next");
            break;
          case "previous":
            this.focusClosestOption("previous");
            break;
          case "first":
            this.focusFirstOption();
            break;
          case "last":
            this.focusLastOption();
            break;
          case "lastFocused":
            if (this.lastFocusedOptionElement != null) {
              this.focusOption(Array.from(this.notDisabledOptions).indexOf(this.lastFocusedOptionElement));
            }
            break;
        }
        break;
      case "MoveFocus":
        switch (actionFromKeyboardEvent.target) {
          case "previous": {
            let elementToFocus = (_a2 = this.el.previousElementSibling) !== null && _a2 !== void 0 ? _a2 : this.el.parentElement;
            while (elementToFocus) {
              if (isFocusable(elementToFocus)) break;
              elementToFocus = (_b = elementToFocus.previousElementSibling) !== null && _b !== void 0 ? _b : elementToFocus.parentElement;
            }
            if (elementToFocus) {
              event.preventDefault();
              elementToFocus.focus();
            }
            break;
          }
        }
        break;
      default:
        throw new Error("Internal error");
    }
  }
  getClosestActiveOptionIndexForState(direction, state) {
    let concernedOption;
    switch (state) {
      case "focused":
        concernedOption = this.lastFocusedOptionElement;
        break;
      case "modified":
        concernedOption = this.lastModifiedOptionElement;
        break;
      case "highlighted":
        concernedOption = this.lastHighlightedOptionElement;
        break;
      default:
        concernedOption = null;
    }
    let currentIndex = Array.from(this.notDisabledOptions).indexOf(concernedOption);
    const MIN_INDEX = 0;
    const MAX_INDEX = this.notDisabledOptions.length - 1;
    if (direction === "next" && currentIndex < MAX_INDEX) {
      currentIndex++;
    } else if (direction === "previous" && currentIndex > MIN_INDEX) {
      currentIndex--;
    } else {
      if (!this.autocomplete) return "nothing";
      if (direction === "next" && currentIndex >= MAX_INDEX) {
        currentIndex = 0;
      }
      if (direction === "previous" && currentIndex === MIN_INDEX) {
        currentIndex = MAX_INDEX;
      }
    }
    return currentIndex;
  }
  /**
   * Selects the non-disabled option with the index passed as a parameter.
   * The method sends an event to the state machine (the same as when clicking on an option with the mouse)
   * @param indexToSelect Option index within non-deactivated options list
   * @param fromKeyboard
   * @private
   */
  selectOption(indexToSelect, fromKeyboard = false) {
    const optionToSelect = this.notDisabledOptions[indexToSelect];
    if (!optionToSelect) return;
    this.sendOptionSelectedToStateMachine({
      source: optionToSelect,
      value: optionToSelect.value,
      displayText: optionToSelect.innerText
    }, fromKeyboard);
  }
  selectClosestOption(direction) {
    const indexToSelect = this.getClosestActiveOptionIndexForState(direction, "modified");
    if (indexToSelect === "nothing") return;
    this.selectOption(indexToSelect, true);
  }
  selectFirstOption() {
    if (this.notDisabledOptions.length < 1) {
      return;
    }
    this.selectOption(0, true);
  }
  selectLastOption() {
    if (this.notDisabledOptions.length < 1) {
      return;
    }
    this.selectOption(this.notDisabledOptions.length - 1, true);
  }
  focusOption(indexToFocus) {
    var _a2;
    this.lastFocusedOptionElement = this.notDisabledOptions[indexToFocus];
    (_a2 = this.lastFocusedOptionElement) === null || _a2 === void 0 ? void 0 : _a2.focus();
    this.el.setAttribute("aria-activedescendant", this.lastFocusedOptionElement.id);
  }
  focusClosestOption(direction) {
    const indexToFocus = this.getClosestActiveOptionIndexForState(direction, "focused");
    if (indexToFocus === "nothing") return;
    this.focusOption(indexToFocus);
  }
  focusFirstOption() {
    this.focusOption(0);
  }
  focusLastOption() {
    this.focusOption(this.notDisabledOptions.length - 1);
  }
  selectedOptionChanged(event) {
    this.sendOptionSelectedToStateMachine(event.detail);
  }
  sendOptionSelectedToStateMachine(event, fromKeyboard = false) {
    this.stateService.send({
      type: "OPTION_SELECTED",
      value: {
        option: event,
        fromKeyboard
      }
    });
  }
  onSlotchange() {
    this.updateSelectedValue(this.value, false);
    if (this.autocomplete && this.serverMode) {
      this.showNoResultFoundLabel = this.options.length < 1;
    }
    if (this.multiple) {
      this.options.forEach((opt) => opt.multiple = true);
    }
  }
  removeChip(v) {
    this.options.forEach((opt) => {
      if (opt.value === v.value) {
        this.sendOptionSelectedToStateMachine(Object.assign(Object.assign({}, v), {
          source: opt
        }));
      }
    });
  }
  //region Autocomplete mode
  highlightOption(indexToHighlight) {
    this.clearHighlightOnLastHighlightedOption();
    this.lastHighlightedOptionElement = this.notDisabledOptions[indexToHighlight];
    if (this.lastHighlightedOptionElement) {
      this.lastHighlightedOptionElement.highlighted = true;
      this.autocompleteInput.setAttribute("aria-activedescendant", this.lastHighlightedOptionElement.id);
      requestAnimationFrame(() => {
        this.lastHighlightedOptionElement.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      });
    }
  }
  highlightFirstOption() {
    this.highlightOption(0);
  }
  highlightLastOption() {
    this.highlightOption(this.notDisabledOptions.length - 1);
  }
  highlightClosestOption(direction) {
    const indexToHighlight = this.getClosestActiveOptionIndexForState(direction, "highlighted");
    if (indexToHighlight === "nothing") return;
    this.highlightOption(indexToHighlight);
  }
  /**
   * This method removes the highlight that applies to the last highlighted option if any.
   * This is used only for accessibility of autocomplete mode.
   * @private
   */
  clearHighlightOnLastHighlightedOption() {
    if (this.lastHighlightedOptionElement) {
      this.lastHighlightedOptionElement.highlighted = false;
      this.lastHighlightedOptionElement = null;
    }
  }
  onAutocompleteInputEvent(e) {
    var _a2;
    const filter = (_a2 = this.autocompleteInput.value) !== null && _a2 !== void 0 ? _a2 : "";
    this.handleAutocompleteValueChange(filter);
    e.stopPropagation();
  }
  handleAutocompleteValueChange(filter, isReset = false) {
    var _a2, _b;
    this.clearHighlightOnLastHighlightedOption();
    const newValueIsDifferentFromLastModifiedOption = this.lastModifiedOptionElement == null || ((_a2 = this.lastModifiedOptionElement) === null || _a2 === void 0 ? void 0 : _a2.textContent) !== this.autocompleteValue;
    if (!this.expanded && newValueIsDifferentFromLastModifiedOption && !isReset) {
      this.open();
    }
    if (!this.serverMode) {
      if (filter.length) {
        const [matchingOptions, optionsToHide] = [[], []];
        const filteringFunction = (_b = this.filterFn) !== null && _b !== void 0 ? _b : WcsDefaultSelectFilterFn;
        this.options.forEach((optionEl) => (filteringFunction(optionEl, filter) ? matchingOptions : optionsToHide).push(optionEl));
        this.showNoResultFoundLabel = matchingOptions.length === 0;
        matchingOptions.forEach((o) => {
          o.hidden = false;
          o.removeAttribute("aria-hidden");
        });
        optionsToHide.forEach((o) => {
          o.hidden = true;
          o.setAttribute("aria-hidden", "true");
        });
      } else {
        this.showNoResultFoundLabel = false;
        this.options.forEach((o) => {
          o.hidden = false;
          o.removeAttribute("aria-hidden");
        });
      }
    }
    if (this.autocompleteValue !== filter) {
      this.autocompleteValue = filter !== null && filter !== void 0 ? filter : "";
      this.wcsFilterChange.emit({
        value: filter
      });
    }
  }
  onFocus(event) {
    if (this.autocomplete) {
      this.focusAutocompleteInput();
    }
    this.wcsFocus.emit(event);
  }
  focusAutocompleteInput() {
    var _a2;
    (_a2 = this.autocompleteInput) === null || _a2 === void 0 ? void 0 : _a2.focus();
  }
  //endregion
  onBlur(event) {
    const target = event.relatedTarget;
    if (this.el.contains(target)) {
      return;
    }
    this.wcsBlur.emit(event);
  }
  componentDidRender() {
    var _a2;
    (_a2 = this.popper) === null || _a2 === void 0 ? void 0 : _a2.update();
  }
  focusedAttributes() {
    return !this.disabled ? {
      tabIndex: 0
    } : {};
  }
  onAutocompleteFieldBlur(_e) {
    if (this.multiple === false && this.autocomplete === true && this.hasValue) {
      this.autocompleteValue = this.displayText;
    }
  }
  render() {
    var _a2;
    const ariaLabelValue = `${this.labelElement ? this.labelElement.innerText : ""} ${this.hasValue ? this.displayText : ""}`.trimEnd();
    return h(Host, Object.assign({
      key: "1fb232b49c0c6982f0fdb25f40b9cbc0b5a4feba",
      class: this.expanded ? "expanded " : "",
      overlayDirection: this.overlayDirection
    }, this.focusedAttributes(), {
      role: !this.autocomplete ? "combobox" : null,
      "aria-haspopup": !this.autocomplete ? "listbox" : null,
      "aria-owns": !this.autocomplete ? this.optionsId : null,
      "aria-controls": !this.autocomplete ? this.optionsId : null,
      "aria-disabled": !this.autocomplete ? this.disabled ? "true" : null : null,
      "aria-required": !this.autocomplete ? this.required ? "true" : "false" : null,
      "aria-expanded": !this.autocomplete ? this.expanded ? "true" : "false" : null,
      "aria-multiselectable": !this.autocomplete ? this.multiple ? "true" : "false" : null,
      "aria-label": !this.autocomplete ? ariaLabelValue : null
    }), h("div", {
      key: "1ffb794dad6a5047bda91a8d8a192542be53807e",
      class: "wcs-select-control"
    }, h("div", {
      key: "4a6eb4aee396013cb385c0747a64f5b734cdb671",
      class: "wcs-select-value-container"
    }, this.hasValue ? this.chips ? this.values.map((option) => h(SelectChips, {
      disabled: this.disabled,
      option,
      onRemove: this.removeChip.bind(this)
    })) : (!this.autocomplete || this.autocomplete && this.multiple) && h("label", {
      class: "wcs-select-value"
    }, this.displayText) : !this.autocomplete && h("label", {
      class: "wcs-select-placeholder"
    }, this.placeholder), this.autocomplete && h("input", Object.assign({
      key: "347b45243c453e7c7b9295091107a86953a045e5",
      class: "autocomplete-field",
      value: this.autocompleteValue,
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-label": ariaLabelValue,
      "aria-disabled": this.disabled ? "true" : null,
      "aria-expanded": this.expanded ? "true" : "false",
      "aria-controls": this.optionsId,
      "aria-owns": this.optionsId,
      "aria-multiselectable": this.multiple ? "true" : "false",
      "aria-autocomplete": "list",
      autocomplete: "off",
      disabled: this.disabled,
      required: this.required,
      onBlur: (e) => this.onAutocompleteFieldBlur(e),
      placeholder: ((_a2 = this.values) === null || _a2 === void 0 ? void 0 : _a2.length) ? null : this.placeholder,
      onInput: (e) => this.onAutocompleteInputEvent(e),
      ref: (el) => this.autocompleteInput = el
    }, this.inheritedAttributes))), h(SelectArrow, {
      key: "a7465cde16a44865b879d4c69de0fbdba0ab5279",
      up: this.expanded
    })), h("div", {
      key: "dcd17dd6ca295aa4d3cc0e0e4e081cae36d2390e",
      class: "wcs-select-options",
      id: this.optionsId,
      role: "listbox"
    }, h("slot", {
      key: "2d6ff245cdf496a3b8335fd3896a226209117717",
      name: "options",
      onSlotchange: this.onSlotchange.bind(this)
    }), this.autocomplete && this.showNoResultFoundLabel && h("div", {
      key: "26b9e2afd3db161f4c8be2d974825c8be68362d8",
      class: "noresult-container"
    }, h("slot", {
      key: "80558760b864f00666398afd6c413cd5e85e660f",
      name: "filter-no-result"
    }, h("span", {
      key: "ba460bf80f8cc3127774bf19db6742766169727a"
    }, "Aucun résultat")))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["onValueChangeHandler"]
    };
  }
};
var selectIds = 0;
Select.style = WcsSelectStyle0;
var selectOptionCss = "wcs-select-option{--wcs-select-option-height:var(--wcs-semantic-size-m);--wcs-select-option-padding-horizontal:var(--wcs-semantic-spacing-base);--wcs-select-option-padding-vertical:0;--wcs-select-option-text-font-weight:var(--wcs-semantic-font-weight-medium);--wcs-select-option-text-font-size:var(--wcs-semantic-font-size-base);--wcs-select-option-text-color-default:var(--wcs-semantic-color-text-primary);--wcs-select-option-text-color-focus:var(--wcs-semantic-color-text-primary);--wcs-select-option-text-color-hover:var(--wcs-semantic-color-text-primary);--wcs-select-option-text-color-selected:var(--wcs-semantic-color-text-primary);--wcs-select-option-text-color-disabled:var(--wcs-semantic-color-text-disabled);--wcs-select-option-background-color-default:var(--wcs-semantic-color-background-action-secondary-default);--wcs-select-option-background-color-hover:var(--wcs-semantic-color-background-action-secondary-hover);--wcs-select-option-background-color-press:var(--wcs-semantic-color-background-action-secondary-press);--wcs-select-option-background-color-selected:var(--wcs-semantic-color-background-action-secondary-selected-default);--wcs-select-option-background-color-selected-hover:var(--wcs-semantic-color-background-action-secondary-selected-hover);--wcs-select-option-background-color-selected-press:var(--wcs-semantic-color-background-action-secondary-selected-press);--wcs-select-option-background-color-selected-disabled:var(--wcs-semantic-color-background-action-secondary-selected-disabled);--wcs-select-option-background-color-focus:var(--wcs-semantic-color-background-action-secondary-focus);--wcs-select-option-border-style-focus:var(--wcs-semantic-border-style-focus-base);--wcs-select-option-border-color-focus:var(--wcs-semantic-color-border-focus-base);--wcs-select-option-border-width-focus:var(--wcs-semantic-border-width-large);--wcs-select-option-border-radius:var(--wcs-semantic-border-radius-base);--wcs-select-option-checkbox-color:var(--wcs-semantic-color-background-control-indicator-selected);--wcs-select-option-gap:var(--wcs-semantic-spacing-base);--wcs-select-option-transition-duration:var(--wcs-semantic-motion-duration-feedback-base);display:flex;flex-direction:row;align-items:center;gap:var(--wcs-select-option-gap);padding:var(--wcs-select-option-padding-vertical) var(--wcs-select-option-padding-horizontal);height:var(--wcs-select-option-height);cursor:pointer;user-select:none;font-weight:var(--wcs-select-option-text-font-weight);font-size:var(--wcs-select-option-text-font-size);color:var(--wcs-select-option-text-color-default);background-color:var(--wcs-select-option-background-color-default);transition-duration:var(--wcs-select-option-transition-duration);transition-property:background-color, color;transition-timing-function:ease;border-radius:var(--wcs-select-option-border-radius);overflow:hidden;white-space:nowrap}wcs-select-option:focus-visible{outline:var(--wcs-select-option-border-style-focus) var(--wcs-select-option-border-width-focus) var(--wcs-select-option-border-color-focus);outline-offset:calc(-1 * var(--wcs-select-option-border-width-focus))}wcs-select-option:focus{color:var(--wcs-select-option-text-color-focus);background-color:var(--wcs-select-option-background-color-focus)}wcs-select-option:hover{color:var(--wcs-select-option-text-color-hover);background-color:var(--wcs-select-option-background-color-hover)}wcs-select-option:active{background-color:var(--wcs-select-option-background-color-press)}wcs-select-option[disabled]{cursor:not-allowed;pointer-events:none;color:var(--wcs-select-option-text-color-disabled)}wcs-select-option[hidden]{display:none}wcs-select-option[selected]{color:var(--wcs-select-option-text-color-selected);background-color:var(--wcs-select-option-background-color-selected)}wcs-select-option[selected]:hover{background-color:var(--wcs-select-option-background-color-selected-hover)}wcs-select-option[selected]:active{background-color:var(--wcs-select-option-background-color-selected-press)}wcs-select-option[selected][disabled]{color:var(--wcs-select-option-text-color-disabled);background-color:var(--wcs-select-option-background-color-selected-disabled)}wcs-select-option[multiple] wcs-checkbox{pointer-events:none}wcs-select-option[multiple]:hover wcs-checkbox{--wcs-checkbox-border-color:var(--wcs-select-option-checkbox-color)}wcs-select-option[highlighted]{outline:var(--wcs-select-option-border-style-focus) var(--wcs-select-option-border-width-focus) var(--wcs-select-option-border-color-focus);outline-offset:calc(-1 * var(--wcs-select-option-border-width-focus))}wcs-select-option[highlighted] wcs-checkbox{--wcs-checkbox-border-color:var(--wcs-select-option-checkbox-color)}";
var WcsSelectOptionStyle0 = selectOptionCss;
var SelectOption = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsSelectOptionClick = createEvent(this, "wcsSelectOptionClick", 7);
    this.selectOptionId = generateUniqueId(this.el.tagName);
    this.disabled = false;
    this.selected = false;
    this.highlighted = false;
    this.value = void 0;
    this.chipColor = void 0;
    this.chipBackgroundColor = void 0;
    this.multiple = false;
  }
  componentWillLoad() {
    if (this.value === void 0) {
      this.value = this.el.innerText || "";
    }
  }
  chooseOption(event) {
    if (!this.disabled) {
      event.stopPropagation();
      const displayText = this.el.innerText;
      this.wcsSelectOptionClick.emit({
        source: this.el,
        value: this.value,
        displayText
      });
    }
  }
  onMouseUp(event) {
    this.chooseOption(event);
  }
  /**
   * Handles the keydown event to update the selection.
   * @param event keyboard event
   */
  handleKeydown(event) {
    if (isEnterKey(event) || isSpaceKey(event)) {
      this.chooseOption(event);
      event.preventDefault();
      event.stopPropagation();
    }
  }
  render() {
    return h(Host, {
      key: "f23b48f3dbf1219b02651cf96687762cd04670fd",
      id: this.selectOptionId,
      "aria-selected": this.selected || this.highlighted ? "true" : "false",
      slot: "options",
      role: "option",
      tabindex: "-1"
    }, this.multiple && h("wcs-checkbox", {
      key: "78a67e83750518e01bab218efc605b7414224cc6",
      tabindex: "-1",
      checked: this.selected,
      disabled: this.disabled
    }), h("slot", {
      key: "db2f9f6ef1a341070dac82b570308e08b852460d"
    }));
  }
  get el() {
    return getElement(this);
  }
};
SelectOption.style = WcsSelectOptionStyle0;
export {
  Select as wcs_select,
  SelectOption as wcs_select_option
};
/*! Bundled license information:

wcs-core/dist/esm/wcs-select_2.entry.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=wcs-select_2.entry-M54ECV7A.js.map
