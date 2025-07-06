import {
  MapCache,
  Stack,
  Symbol$1,
  Uint8Array$1,
  arrayLikeKeys,
  arrayPush,
  baseGetAllKeys,
  baseGetTag,
  baseUnary,
  eq,
  getAllKeys,
  getNative,
  getSymbols$1,
  getTag$1,
  isArray$1,
  isArrayLike,
  isBuffer$1,
  isEqual,
  isObject,
  isObjectLike,
  isPrototype,
  keys,
  nodeUtil$1,
  overArg,
  root$1,
  stubArray
} from "./chunk-SHDBFGS4.js";
import {
  GridPagination
} from "./chunk-MABYRSGE.js";
import {
  keyboardShortcutFromKeyboardEvent
} from "./chunk-TPUHIW5M.js";
import {
  inheritAriaAttributes,
  inheritAttributes,
  setOrRemoveAttribute
} from "./chunk-NAIC4MMY.js";
import {
  Host,
  createEvent,
  forceUpdate,
  getElement,
  h,
  registerInstance
} from "./chunk-TZILWMXJ.js";
import {
  __async
} from "./chunk-KKWNQZCW.js";

// ../node_modules/wcs-core/dist/esm/wcs-grid.entry.js
function getSortOrderInteger(sortOrder) {
  switch (sortOrder) {
    case "asc":
      return 1;
    case "desc":
      return -1;
  }
}
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
  return typeof uuid === "string" && REGEX.test(uuid);
}
var byteToHex = [];
for (i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
var i;
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return stringify(rnds);
}
var symbolTag$2 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$2;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var INFINITY$1 = 1 / 0;
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0;
var symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty$1 = defineProperty;
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$2.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$1.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath$1 = stringToPath;
function toString(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$1.Buffer : void 0;
var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function copySymbols(source, object) {
  return copyObject(source, getSymbols$1(source), object);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
var getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0;
var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$1 = "[object Boolean]";
var dateTag$1 = "[object Date]";
var mapTag$2 = "[object Map]";
var numberTag$1 = "[object Number]";
var regexpTag$1 = "[object RegExp]";
var setTag$2 = "[object Set]";
var stringTag$1 = "[object String]";
var symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]";
var dataViewTag$1 = "[object DataView]";
var float32Tag$1 = "[object Float32Array]";
var float64Tag$1 = "[object Float64Array]";
var int8Tag$1 = "[object Int8Array]";
var int16Tag$1 = "[object Int16Array]";
var int32Tag$1 = "[object Int32Array]";
var uint8Tag$1 = "[object Uint8Array]";
var uint8ClampedTag$1 = "[object Uint8ClampedArray]";
var uint16Tag$1 = "[object Uint16Array]";
var uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
var mapTag$1 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$1;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$1 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG$1 = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var symbolTag = "[object Symbol]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG = 1;
var CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
function getActionForKeyboardEvent(event, type) {
  const keyboardShortcut = keyboardShortcutFromKeyboardEvent(event);
  if (keyboardShortcut === "UNKNOWN") {
    return [];
  }
  switch (keyboardShortcut) {
    case "UP_ARROW":
      return [{
        kind: "FocusCell",
        target: "up"
      }];
    case "DOWN_ARROW":
      return [{
        kind: "FocusCell",
        target: "down"
      }];
    case "LEFT_ARROW":
      return [{
        kind: "FocusCell",
        target: "left"
      }];
    case "RIGHT_ARROW":
      return [{
        kind: "FocusCell",
        target: "right"
      }];
    case "HOME":
      return [{
        kind: "FocusCell",
        target: "first_of_row"
      }];
    case "END":
      return [{
        kind: "FocusCell",
        target: "last_of_row"
      }];
    case "MAJ+SPACE":
      switch (type) {
        case "grid_selection_single":
        case "grid_selection_multiple":
          return [{
            kind: "SelectRow",
            target: "one"
          }];
      }
      break;
    case "CTRL+A":
      switch (type) {
        case "grid_selection_multiple":
          return [{
            kind: "SelectRow",
            target: "all"
          }];
      }
      break;
    case "CTRL+HOME":
      return [{
        kind: "FocusCell",
        target: "first_of_grid"
      }];
    case "CTRL+END":
      return [{
        kind: "FocusCell",
        target: "last_of_grid"
      }];
  }
  return [];
}
var GridRadio = ({
  checked,
  row,
  rowIndex,
  totalRows,
  onClick
}) => {
  let input;
  return h("div", {
    class: `grid-radio ${checked ? "checked" : ""}`,
    onClick: (_) => input.click()
  }, h("input", {
    type: "radio",
    name: "selection",
    "aria-setsize": totalRows,
    "aria-posinset": rowIndex,
    tabindex: "-1",
    checked,
    "aria-checked": `${checked}`,
    ref: (el) => input = el,
    onClick: (_) => onClick(row)
  }));
};
var gridCss = ":host{--wcs-grid-gap:0;--wcs-grid-vertical-align:middle;--wcs-grid-outline-color:var(--wcs-semantic-color-border-focus-base);--wcs-grid-cell-text-color:var(--wcs-semantic-color-text-secondary);--wcs-grid-cell-padding-horizontal:var(--wcs-semantic-spacing-large);--wcs-grid-cell-padding-vertical:var(--wcs-semantic-spacing-base);--wcs-grid-cell-border-bottom:none;--wcs-grid-cell-separator-border:none;--wcs-grid-first-cell-border-radius:0;--wcs-grid-last-cell-border-radius:0;--wcs-grid-highlight-color:var(--wcs-semantic-color-background-surface-accent-lighter);--wcs-grid-row-background-color:var(--wcs-semantic-color-background-surface-primary);--wcs-grid-row-odd-background-color:var(--wcs-grid-row-background-color);--wcs-grid-row-even-background-color:var(--wcs-semantic-color-background-surface-accent-lightest);--wcs-grid-header-background-color-default:var(--wcs-semantic-color-background-action-secondary-default);--wcs-grid-header-background-color-hover:var(--wcs-semantic-color-background-action-secondary-hover);--wcs-grid-header-background-color-press:var(--wcs-semantic-color-background-action-secondary-press);--wcs-grid-header-text-color:var(--wcs-semantic-color-text-primary);--wcs-grid-header-font-weight:var(--wcs-semantic-font-weight-heavy);--wcs-grid-header-font-size:var(--wcs-semantic-font-size-label-1);--wcs-grid-header-line-height:var(--wcs-primitive-font-line-height-140);--wcs-grid-header-padding-vertical:var(--wcs-semantic-spacing-base);--wcs-grid-header-padding-horizontal:var(--wcs-semantic-spacing-large);--wcs-grid-header-border-left:none;--wcs-grid-header-border-radius:0;--wcs-grid-header-border-bottom:solid var(--wcs-semantic-border-width-default) var(--wcs-semantic-color-border-secondary);--wcs-grid-header-transition-duration:var(--wcs-semantic-motion-duration-feedback-fast);--wcs-grid-first-header-background-color:var(--wcs-semantic-color-background-action-secondary-default);--wcs-grid-first-header-border-radius:0;--wcs-grid-last-header-border-radius:0;--wcs-grid-column-selection-width:calc(5 * var(--wcs-semantic-spacing-base));--wcs-grid-header-sort-arrow-color-default:var(--wcs-semantic-color-foreground-action-neutral-default);--wcs-grid-header-sort-arrow-color-hover:var(--wcs-semantic-color-foreground-action-neutral-hover);display:block}:host th{border-radius:var(--wcs-grid-first-header-border-radius);background-color:var(--wcs-grid-first-header-background-color)}:host ::slotted([slot=grid-column]:first-child){--wcs-grid-header-border-left:none}:host :host([selection]) ::slotted([slot=grid-column]:first-child){--wcs-component-grid-header-border-radius-first:0;--wcs-grid-header-border-left:var(--wcs-grid-header-border-left)}:host table{width:100%;border-collapse:collapse;border-spacing:var(--wcs-grid-gap)}:host table thead{border-bottom:var(--wcs-grid-header-border-bottom)}:host table tbody{vertical-align:var(--wcs-grid-vertical-align)}:host td{color:var(--wcs-grid-cell-text-color);margin:0;padding:var(--wcs-grid-cell-padding-vertical) var(--wcs-grid-cell-padding-horizontal)}:host td:focus-visible{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-grid-outline-color);outline-offset:0;border-radius:0.1rem}:host td:first-child{border-radius:var(--wcs-grid-first-cell-border-radius)}:host td:last-child{border-radius:var(--wcs-grid-last-cell-border-radius)}:host td:not(:first-child){border-left:var(--wcs-grid-cell-separator-border)}:host tr{background-color:var(--wcs-grid-row-background-color)}:host tr:nth-child(odd){background-color:var(--wcs-grid-row-odd-background-color, var(--wcs-grid-row-background-color))}:host tr:nth-child(even){background-color:var(--wcs-grid-row-even-background-color, var(--wcs-grid-row-background-color))}:host tr:not(:last-child) td{border-bottom:var(--wcs-grid-cell-border-bottom)}:host .wcs-grid-selection-column{padding:var(--wcs-grid-cell-padding-vertical) var(--wcs-grid-cell-padding-horizontal);width:var(--wcs-grid-column-selection-width);text-align:start}:host tr.selected{background-color:var(--wcs-grid-highlight-color)}:host .loading{text-align:center}";
var WcsGridStyle0 = gridCss;
var gridRadioCss = '.grid-radio{--wcs-grid-radio-outline-color:var(--wcs-semantic-color-border-focus-base);--wcs-grid-radio-padding:calc(var(--wcs-semantic-size-base) / 4);--wcs-grid-radio-transition:var(--wcs-semantic-motion-duration-feedback-base);--wcs-grid-radio-border-color-default:var(--wcs-semantic-color-border-control-indicator-default);--wcs-grid-radio-border-color-selected:var(--wcs-semantic-color-border-control-indicator-selected);--wcs-grid-radio-border-color-hover:var(--wcs-semantic-color-border-control-indicator-hover);--wcs-grid-radio-border-color-disabled:var(--wcs-semantic-color-border-control-indicator-disabled);--wcs-grid-radio-background-color-default:transparent;--wcs-grid-radio-background-color-selected:var(--wcs-semantic-color-background-control-indicator-selected);--wcs-grid-radio-background-color-disabled:var(--wcs-semantic-color-background-control-indicator-disabled);--wcs-grid-radio-inner-border-color:white;width:fit-content;cursor:pointer;padding:var(--wcs-grid-radio-padding, 0.125rem);}.grid-radio:has(input:focus-visible){outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-grid-radio-outline-color);outline-offset:var(--wcs-semantic-spacing-small);border-radius:0.1rem}@supports not selector(:has(input:focus-visible)){.grid-radio:focus-within{outline:var(--wcs-semantic-border-width-large) dashed var(--wcs-grid-radio-outline-color);outline-offset:var(--wcs-semantic-spacing-small);border-radius:0.1rem}}.grid-radio input{position:absolute;opacity:0;height:1px;width:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.grid-radio::before{content:"";display:flex;border-radius:50%;border:2px solid var(--wcs-grid-radio-border-color-default);position:relative;width:1.125rem;height:1.125rem;box-sizing:border-box;background-color:var(--wcs-grid-radio-background-color-default);transition:var(--wcs-grid-radio-transition, 0.175s) ease-in-out}.grid-radio:hover::before{border-color:var(--wcs-grid-radio-border-color-hover)}.grid-radio.checked::before{border-color:var(--wcs-grid-radio-border-color-selected);background-color:var(--wcs-grid-radio-background-color-selected);outline:solid 2px var(--wcs-grid-radio-inner-border-color);outline-offset:-4px}';
var WcsGridStyle1 = gridRadioCss;
var GRID_INHERITED_ATTRS = ["title"];
var Grid = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.wcsGridSelectionChange = createEvent(this, "wcsGridSelectionChange", 7);
    this.wcsGridAllSelectionChange = createEvent(this, "wcsGridAllSelectionChange", 7);
    this.wcsFocus = createEvent(this, "wcsFocus", 7);
    this.wcsBlur = createEvent(this, "wcsBlur", 7);
    this.inheritedAttributes = {};
    this.serverMode = false;
    this.data = void 0;
    this.loading = void 0;
    this.selectionConfig = "none";
    this.selectedItems = [];
    this.wcsGridPaginationId = void 0;
    this.rowIdPath = void 0;
    this.rowCssPartsFn = (_) => null;
    this.columns = void 0;
    this.paginationEl = void 0;
    this.rows = [];
    this.cursorPosition = {
      col: 0,
      row: 1
    };
  }
  onCursorPositionChange(newValue) {
    this.getGridColumnsFromTemplate().forEach((g) => g.cursorPosition = newValue);
  }
  onDataChange(newValue) {
    this.updateGridRows(newValue);
    this.refreshSort(false);
  }
  onSelectedItemsPropertyChange(newValue) {
    this.updateSelectionWithValues(newValue);
  }
  onFocus(event) {
    var _a;
    (_a = this.getElementToFocusAtCursorPosition()) === null || _a === void 0 ? void 0 : _a.focus();
    this.wcsFocus.emit(event);
  }
  onBlur(event) {
    this.wcsBlur.emit(event);
  }
  /**
   * If selectionConfig is different from `none`, that means that an extra column for radio or checkbox is rendered
   * in the table.
   */
  hasSelectionColumn() {
    return this.selectionConfig !== "none";
  }
  /**
   * Returns the element to focus at the current cursor position : it can be a cell (td, th) to focus or a nested
   * checkbox / radio element if the selection mode is single or multiple
   */
  getElementToFocusAtCursorPosition() {
    var _a, _b;
    const el = (_a = this.gridElementsWithCoordinates.find((cell) => {
      var _a2, _b2;
      return cell.col === ((_a2 = this.cursorPosition) === null || _a2 === void 0 ? void 0 : _a2.col) && cell.row === ((_b2 = this.cursorPosition) === null || _b2 === void 0 ? void 0 : _b2.row);
    })) === null || _a === void 0 ? void 0 : _a.el;
    return this.hasSelectionColumn() ? (_b = el.querySelector('wcs-checkbox,input[type="radio"]')) !== null && _b !== void 0 ? _b : el : el;
  }
  moveCursorPosition(directionX, directionY) {
    var _a;
    this.cursorPosition = {
      col: directionX === "first" ? 0 : directionX === "last" ? this.totalDisplayedColumnCount() - 1 : Math.min(Math.max(this.cursorPosition.col + directionX, 0), this.totalDisplayedColumnCount() - 1),
      row: directionY === "first" ? 0 : directionY === "last" ? this.getRowsForCurrentPage().length : Math.min(Math.max(this.cursorPosition.row + directionY, 0), this.getRowsForCurrentPage().length)
    };
    this.handleCursorPositionOnEmptyTh();
    (_a = this.getElementToFocusAtCursorPosition()) === null || _a === void 0 ? void 0 : _a.focus();
  }
  /**
   * When the grid has selectionConfig single, an empty th appears at col=0, row=0.
   * It should not be focusable so the cursor navigates to col=1, row=0 instead.
   */
  handleCursorPositionOnEmptyTh() {
    if (this.selectionConfig === "single" && this.cursorPosition.col === 0 && this.cursorPosition.row === 0) {
      this.cursorPosition = {
        col: 1,
        row: 0
      };
    }
  }
  onHiddenColumnChange() {
    forceUpdate(this);
    this.cursorPosition = {
      col: 0,
      row: 1
    };
  }
  onKeyDown(_event) {
    var _a;
    if (((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.tagName) === "WCS-GRID-PAGINATION") {
      return;
    }
    let type;
    switch (this.selectionConfig) {
      case "multiple":
        type = "grid_selection_multiple";
        break;
      case "single":
        type = "grid_selection_single";
        break;
      case "none":
        type = "grid_no_selection";
        break;
    }
    const actionsFromKeyboardEvents = getActionForKeyboardEvent(_event, type);
    if (actionsFromKeyboardEvents.length != 0) {
      _event.preventDefault();
    }
    for (const actionFromKeyboardEvent of actionsFromKeyboardEvents) {
      this.doActionFromKeyboardEventAssociatedAction(actionFromKeyboardEvent, _event);
    }
  }
  doActionFromKeyboardEventAssociatedAction(actionFromKeyboardEvent, event) {
    switch (actionFromKeyboardEvent.kind) {
      case "FocusCell":
        switch (actionFromKeyboardEvent.target) {
          case "up":
            this.moveCursorPosition(0, -1);
            break;
          case "down":
            this.moveCursorPosition(0, 1);
            break;
          case "left":
            this.moveCursorPosition(-1, 0);
            break;
          case "right":
            this.moveCursorPosition(1, 0);
            break;
          case "first_of_row":
            this.moveCursorPosition("first", 0);
            break;
          case "last_of_row":
            this.moveCursorPosition("last", 0);
            break;
          case "first_of_grid":
            this.moveCursorPosition("first", "first");
            break;
          case "last_of_grid":
            this.moveCursorPosition("last", "last");
            break;
        }
      case "SelectRow":
        switch (actionFromKeyboardEvent.target) {
          case "one":
            event.preventDefault();
            if (this.cursorPosition.row > 0) {
              this.onRowSelection(this.rows[this.cursorPosition.row - 1]);
            }
            break;
          case "all":
            this.selectAllRows();
            break;
        }
        break;
      default:
        throw new Error("Internal error");
    }
  }
  onClick(_event) {
    const clickedGridElement = _event.composedPath().filter((x) => ["TD", "TH"].includes(x.nodeName))[0];
    if (!clickedGridElement) return;
    const clickedGridElementWithCoordinates = this.gridElementsWithCoordinates.find((e) => e.el === clickedGridElement);
    this.cursorPosition = {
      col: clickedGridElementWithCoordinates.col,
      row: clickedGridElementWithCoordinates.row
    };
  }
  updateSelectionWithValues(values) {
    if (this.selectionConfig === "single") {
      this.rows.map((r) => r.selected = false);
      for (const row of this.rows) {
        if (isEqual(row.data, values)) {
          row.selected = true;
          break;
        }
      }
    } else if (this.selectionConfig === "multiple") {
      this.rows.map((r) => r.selected = false);
      for (const row of this.rows) {
        if (values.find((x) => isEqual(x, row.data))) {
          row.selected = true;
        }
      }
    }
    this.rows = cloneDeep(this.rows);
  }
  wcsGridRowToWcsGridRowData(row) {
    return {
      selected: row.selected,
      page: row.page,
      data: row.data
    };
  }
  updateGridRows(data) {
    const rows = [];
    if (data && this.columns) {
      for (let i = 0; i < data.length; i++) {
        const row = {
          uuid: v4(),
          data: data[i],
          selected: false,
          cells: []
        };
        let index = 0;
        for (const column of this.columns) {
          column.columnPosition = index + (this.hasSelectionColumn() ? 1 : 0);
          index++;
          row.cells.push({
            content: get(data[i], column.path),
            column,
            formatter: column.formatter
          });
        }
        rows.push(row);
      }
      this.rows = rows;
      this.updatePageIndex();
    }
  }
  componentDidLoad() {
    this.columns = this.getGridColumnsFromTemplate();
    this.paginationEl = this.wcsGridPaginationId ? document.getElementById(this.wcsGridPaginationId) : this.getGridPaginationsFromTemplate()[0];
    this.updateGridRows(this.data);
    if (this.selectedItems) {
      this.updateSelectionWithValues(this.selectedItems);
    }
    this.refreshSort(true);
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, GRID_INHERITED_ATTRS));
  }
  setAriaAttribute(attr, value) {
    return __async(this, null, function* () {
      setOrRemoveAttribute(this.nativeTable, attr, value);
    });
  }
  /**
   * Handle existing column's filters (defined before the grid is instantiated)
   * @private
   */
  refreshSort(refreshOthersColumnsSortOrderState) {
    if (this.columns) {
      const [first, ...other] = this.columns.filter((c) => c.sortOrder !== "none");
      if (first && !this.serverMode) {
        this.sortBy(first);
      }
      refreshOthersColumnsSortOrderState && this.disableSortOrderForColumns(other);
    }
  }
  disableSortOrderForColumns(columns) {
    columns === null || columns === void 0 ? void 0 : columns.forEach((c) => c.sortOrder = "none");
  }
  getGridColumnsFromTemplate() {
    const slotted = this.el.shadowRoot.querySelector('slot[name="grid-column"]');
    return slotted.assignedElements();
  }
  getGridPaginationsFromTemplate() {
    const slotted = this.el.shadowRoot.querySelector('slot[name="grid-pagination"]');
    return slotted.assignedElements();
  }
  get gridElementsWithCoordinates() {
    const gridElements = [];
    if (this.selectionConfig === "multiple") {
      gridElements.push({
        el: this.el.shadowRoot.querySelector("th"),
        row: 0,
        col: 0
      });
    }
    this.getGridColumnsFromTemplate().filter((col) => !col.hidden).forEach((col, index) => {
      gridElements.push({
        el: col.shadowRoot.querySelector("th"),
        row: 0,
        col: index + (this.hasSelectionColumn() ? 1 : 0)
      });
    });
    this.el.shadowRoot.querySelectorAll("td").forEach((cell, index) => {
      gridElements.push({
        el: cell,
        row: 1 + Math.floor(index / this.totalDisplayedColumnCount()),
        col: index % this.totalDisplayedColumnCount()
      });
    });
    return gridElements;
  }
  sortChangeEventHandler(event) {
    if (event.detail.order === "none" || !this.columns) return;
    this.disableSortOrderForColumns(this.columns.filter((c) => c !== event.detail.column));
    if (this.serverMode) return;
    this.sortBy(event.detail.column);
    this.updatePageIndex();
  }
  /**
   * Sorts the grid rows according to the given column's configuration
   * @param column Column from which to extract the sorting configuration
   * @private
   */
  sortBy(column) {
    if (column.sortFn) {
      this.rows = cloneDeep(this.rows).sort((a, b) => column.sortFn(a.data, b.data, column) * getSortOrderInteger(column.sortOrder));
    } else {
      this.rows = cloneDeep(this.rows).sort((a, b) => {
        const path = column.path;
        return (get(a.data, path) < get(b.data, path) ? -1 : get(a.data, path) > get(b.data, path) ? 1 : 0) * getSortOrderInteger(column.sortOrder);
      });
    }
  }
  /**
   * Update the page's number of all rows
   */
  updatePageIndex() {
    if (!this.serverMode && this.paginationEl) {
      this.paginationEl.itemsCount = this.data.length;
      this.paginationEl.pageCount = Math.ceil(this.data.length / this.paginationEl.pageSize);
      if (this.paginationEl.pageCount <= 1) {
        this.paginationEl.currentPage = GridPagination.INDEX_FIRST_PAGE;
      } else if (this.paginationEl.pageCount > 0 && this.paginationEl.currentPage + 1 > this.paginationEl.pageCount) {
        this.paginationEl.currentPage = this.paginationEl.pageCount - 1;
      }
      const rows = cloneDeep(this.rows);
      rows.forEach((row, index) => row.page = Math.floor(index / this.paginationEl.pageSize));
      this.rows = [...rows];
    }
  }
  paginationChangeEventHandler() {
    this.onPaginationChange();
  }
  paginationChangeEventHandlerOutside(event) {
    if (this.wcsGridPaginationId && this.wcsGridPaginationId === event.target.id) {
      this.onPaginationChange();
    }
  }
  onPaginationChange() {
    if (this.serverMode) return;
    this.updatePageIndex();
  }
  onRowSelection(row) {
    if (this.selectionConfig === "single") {
      this.rows.filter((r) => r.uuid !== row.uuid).map((r) => r.selected = false);
    }
    row.selected = !row.selected;
    if (this.selectionConfig !== "single" || row.selected) {
      this.wcsGridSelectionChange.emit({
        selectedRows: this.selectedRows.map((row2) => this.wcsGridRowToWcsGridRowData(row2)),
        changedRow: this.wcsGridRowToWcsGridRowData(row)
      });
    }
    this.rows = cloneDeep(this.rows);
  }
  get selectedRows() {
    return this.rows.filter((r) => r.selected);
  }
  selectAllRows() {
    const rows = this.getRowsForCurrentPage();
    const selected = !this.allRowsAreSelected();
    rows.map((r) => r.selected = selected);
    this.wcsGridAllSelectionChange.emit({
      rows: selected ? rows.map((row) => this.wcsGridRowToWcsGridRowData(row)) : []
    });
    this.wcsGridSelectionChange.emit({
      selectedRows: this.selectedRows.map((row) => this.wcsGridRowToWcsGridRowData(row)),
      changedRow: "allCheckbox"
    });
    this.rows = cloneDeep(this.rows);
  }
  allRowsAreSelected() {
    const rows = this.getRowsForCurrentPage();
    return rows.length > 0 && rows.filter((row) => row.selected).length === rows.length;
  }
  getRowsForCurrentPage() {
    if (!this.serverMode && this.paginationEl) {
      return this.rows.filter((row) => row.page === this.paginationEl.currentPage);
    }
    return this.rows;
  }
  renderSelectionColumn(row, rowIndex) {
    var _a, _b, _c, _d;
    switch (this.selectionConfig) {
      case "none":
        return;
      case "single":
        return h("td", {
          "aria-colindex": this.atLeastOneColumnHidden() ? 1 : null,
          tabIndex: ((_a = this.cursorPosition) === null || _a === void 0 ? void 0 : _a.col) === 0 && rowIndex + 1 === ((_b = this.cursorPosition) === null || _b === void 0 ? void 0 : _b.row) ? 0 : -1
        }, h(GridRadio, {
          checked: row.selected,
          row,
          rowIndex: rowIndex + 1,
          totalRows: this.rows.length,
          onClick: (row2) => {
            if (!row2.selected) {
              this.onRowSelection(row2);
            }
          }
        }));
      case "multiple":
        return h("td", {
          "aria-colindex": this.atLeastOneColumnHidden() ? 1 : null,
          tabIndex: ((_c = this.cursorPosition) === null || _c === void 0 ? void 0 : _c.col) === 0 && rowIndex + 1 === ((_d = this.cursorPosition) === null || _d === void 0 ? void 0 : _d.row) ? 0 : -1
        }, h("wcs-checkbox", {
          tabIndex: -1,
          part: "row-checkbox",
          checked: row.selected,
          onWcsChange: this.onRowSelection.bind(this, row)
        }));
    }
  }
  getCellContent(row, cell) {
    if (cell.formatter) {
      return cell.formatter(h, cell.column, this.wcsGridRowToWcsGridRowData(row));
    }
    return cell.content;
  }
  /**
   * Returns the total number of columns
   * @private
   */
  totalColumnCount() {
    if (!this.columns) {
      return 0;
    }
    return this.columns.length + (this.hasSelectionColumn() ? 1 : 0);
  }
  /**
   * Returns the total number of columns that are not hidden
   * @private
   */
  totalDisplayedColumnCount() {
    var _a, _b;
    return (_b = this.totalColumnCount() - ((_a = this.columns) === null || _a === void 0 ? void 0 : _a.filter((col) => col.hidden).length)) !== null && _b !== void 0 ? _b : 0;
  }
  /**
   * Returns true if at least one column is hidden from the table
   * @private
   */
  atLeastOneColumnHidden() {
    return this.totalDisplayedColumnCount() !== this.totalColumnCount();
  }
  render() {
    var _a, _b, _c, _d;
    return h(Host, {
      key: "bdafd86216877fd703389c65665e75aa5ba21a90"
    }, h("table", Object.assign({
      key: "a1e58206dcaa31084f031a6461f4aceabb90bd46",
      role: "grid",
      ref: (el) => this.nativeTable = el,
      "aria-rowcount": !this.loading && ((_a = this.rows) === null || _a === void 0 ? void 0 : _a.length),
      "aria-colcount": !this.loading && this.totalDisplayedColumnCount()
    }, this.inheritedAttributes), h("thead", {
      key: "e22c92431c2f0e75cfb456688525015820aee43a"
    }, h("tr", {
      key: "9f857089bc5b552964024039a2ed3b4ab241bc6d",
      "aria-rowindex": "1"
    }, this.selectionConfig === "none" ? "" : h("th", {
      class: "wcs-grid-selection-column"
    }, this.selectionConfig === "single" ? "" : h("wcs-checkbox", {
      tabIndex: ((_b = this.cursorPosition) === null || _b === void 0 ? void 0 : _b.col) === 0 && ((_c = this.cursorPosition) === null || _c === void 0 ? void 0 : _c.row) === 0 ? 0 : -1,
      part: "all-rows-checkbox",
      checked: this.allRowsAreSelected(),
      onWcsChange: this.selectAllRows.bind(this)
    })), h("slot", {
      key: "51a565cc671f43bfb054bdf85370cd2035d4f43e",
      name: "grid-column"
    }))), h("tbody", {
      key: "30b62b585ba5d925b6abdfe83e0059c94f27b5e7"
    }, this.loading ? h("tr", {
      "aria-busy": "true"
    }, h("td", {
      colSpan: this.totalColumnCount(),
      class: "loading"
    }, h("wcs-spinner", null))) : (_d = this.rows) === null || _d === void 0 ? void 0 : _d.filter((row) => this.serverMode || !this.paginationEl || row.page === this.paginationEl.currentPage).map((row, index) => this.renderRow(row, index)))), h("slot", {
      key: "a6f76be638c7761f7f98acb837ff742f8ce08319",
      name: "grid-pagination"
    }));
  }
  /**
   * Returns the row with all mapped cells inside.
   * The aria-rowindex here starts at 2 because the header row starts at index 1.
   * @private
   */
  renderRow(row, rowIndex) {
    var _a, _b;
    let hiddenColumnCount = 0;
    return h("tr", {
      class: row.selected ? "selected" : "",
      part: (_a = this.rowCssPartsWithoutEmptyList(row)) === null || _a === void 0 ? void 0 : _a.join(" "),
      "aria-selected": row.selected ? "true" : null,
      "aria-rowindex": rowIndex + 2
    }, this.renderSelectionColumn(row, rowIndex), (_b = row.cells) === null || _b === void 0 ? void 0 : _b.map((cell, cellIndex) => {
      var _a2, _b2;
      if (cell.column.hidden) {
        hiddenColumnCount++;
        return;
      }
      const nonHiddenColumnIndex = cellIndex - hiddenColumnCount + 1 + (this.hasSelectionColumn() ? 1 : 0);
      const cursorIsOnCell = nonHiddenColumnIndex - 1 === ((_a2 = this.cursorPosition) === null || _a2 === void 0 ? void 0 : _a2.col) && rowIndex + 1 === ((_b2 = this.cursorPosition) === null || _b2 === void 0 ? void 0 : _b2.row);
      return cell.column.customCells ? h("td", {
        tabIndex: cursorIsOnCell ? 0 : -1,
        "aria-colindex": this.atLeastOneColumnHidden() ? nonHiddenColumnIndex : null
      }, h("slot", {
        name: cell.column.id + "-" + get(row.data, this.rowIdPath)
      })) : h("td", {
        tabIndex: cursorIsOnCell ? 0 : -1,
        "aria-colindex": this.atLeastOneColumnHidden() ? nonHiddenColumnIndex : null,
        part: cell.column.path + "-column"
      }, this.getCellContent(row, cell));
    }));
  }
  rowCssPartsWithoutEmptyList(row) {
    const parts = this.rowCssPartsFn(row);
    return (parts === null || parts === void 0 ? void 0 : parts.length) === 0 ? null : parts;
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "cursorPosition": ["onCursorPositionChange"],
      "data": ["onDataChange"],
      "selectedItems": ["onSelectedItemsPropertyChange"]
    };
  }
};
Grid.style = WcsGridStyle0 + WcsGridStyle1;
export {
  Grid as wcs_grid
};
//# sourceMappingURL=wcs-grid.entry-RAQKHUPU.js.map
