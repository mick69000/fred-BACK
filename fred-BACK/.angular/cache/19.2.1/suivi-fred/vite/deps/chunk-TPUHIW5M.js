import {
  isEndKey,
  isEnterKey,
  isEscapeKey,
  isHomeKey,
  isPageDownKey,
  isPageUpKey,
  isSpaceKey,
  isTabKey
} from "./chunk-NAIC4MMY.js";

// ../node_modules/wcs-core/dist/esm/keyboard-event-26b65ae5.js
function keyboardShortcutFromKeyboardEvent(event) {
  const {
    key
  } = event;
  if (event.shiftKey) {
    switch (key) {
      case " ":
        return "MAJ+SPACE";
      case "Tab":
        return "MAJ+TAB";
    }
  } else if (event.altKey) {
    switch (key) {
      case "ArrowDown":
        return "ALT+DOWN_ARROW";
      case "ArrowUp":
        return "ALT+UP_ARROW";
    }
  } else if (event.ctrlKey) {
    if (isHomeKey(event)) {
      return "CTRL+HOME";
    } else if (isEndKey(event)) {
      return "CTRL+END";
    } else if (key === "a") {
      return "CTRL+A";
    }
  } else {
    switch (key) {
      case "ArrowDown":
        return "DOWN_ARROW";
      case "ArrowUp":
        return "UP_ARROW";
      case "ArrowLeft":
        return "LEFT_ARROW";
      case "ArrowRight":
        return "RIGHT_ARROW";
    }
    if (isHomeKey(event)) {
      return "HOME";
    } else if (isEndKey(event)) {
      return "END";
    } else if (isPageUpKey(event)) {
      return "PAGE_UP";
    } else if (isPageDownKey(event)) {
      return "PAGE_DOWN";
    } else if (isEnterKey(event)) {
      return "ENTER";
    } else if (isSpaceKey(event)) {
      return "SPACE";
    } else if (isTabKey(event)) {
      return "TAB";
    } else if (isEscapeKey(event)) {
      return "ESCAPE";
    }
  }
  return "UNKNOWN";
}

export {
  keyboardShortcutFromKeyboardEvent
};
//# sourceMappingURL=chunk-TPUHIW5M.js.map
