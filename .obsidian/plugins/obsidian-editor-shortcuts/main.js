var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// src/main.ts
__export(exports, {
  default: () => CodeEditorShortcuts
});
var import_obsidian = __toModule(require("obsidian"));

// src/constants.ts
var CASE;
(function(CASE2) {
  CASE2["UPPER"] = "upper";
  CASE2["LOWER"] = "lower";
  CASE2["TITLE"] = "title";
})(CASE || (CASE = {}));
var LOWERCASE_ARTICLES = ["the", "a", "an"];
var DIRECTION;
(function(DIRECTION2) {
  DIRECTION2["FORWARD"] = "forward";
  DIRECTION2["BACKWARD"] = "backward";
})(DIRECTION || (DIRECTION = {}));
var MATCHING_BRACKETS = {
  "[": "]",
  "(": ")",
  "{": "}"
};
var MATCHING_QUOTES = {
  "'": "'",
  '"': '"',
  "`": "`"
};

// src/utils.ts
var getLineStartPos = (line) => ({
  line,
  ch: 0
});
var getLineEndPos = (line, editor) => ({
  line,
  ch: editor.getLine(line).length
});
var getSelectionBoundaries = (selection) => {
  let { anchor: from, head: to } = selection;
  if (from.line > to.line) {
    [from, to] = [to, from];
  }
  return { from, to };
};
var getLeadingWhitespace = (lineContent) => {
  const indentation = lineContent.match(/^\s+/);
  return indentation ? indentation[0] : "";
};
var isWordCharacter = (char) => /\w/.test(char);
var wordRangeAtPos = (pos, lineContent) => {
  let start = pos.ch;
  let end = pos.ch;
  while (start > 0 && isWordCharacter(lineContent.charAt(start - 1))) {
    start--;
  }
  while (end < lineContent.length && isWordCharacter(lineContent.charAt(end))) {
    end++;
  }
  return {
    anchor: {
      line: pos.line,
      ch: start
    },
    head: {
      line: pos.line,
      ch: end
    }
  };
};
var findPosOfNextCharacter = ({
  editor,
  startPos,
  checkCharacter,
  searchDirection
}) => {
  let { line, ch } = startPos;
  let lineContent = editor.getLine(line);
  let matchFound = false;
  let matchedChar;
  if (searchDirection === DIRECTION.BACKWARD) {
    while (line >= 0) {
      const char = lineContent.charAt(Math.max(ch - 1, 0));
      matchFound = checkCharacter(char);
      if (matchFound) {
        matchedChar = char;
        break;
      }
      ch--;
      if (ch <= 0) {
        line--;
        if (line >= 0) {
          lineContent = editor.getLine(line);
          ch = lineContent.length;
        }
      }
    }
  } else {
    while (line < editor.lineCount()) {
      const char = lineContent.charAt(ch);
      matchFound = checkCharacter(char);
      if (matchFound) {
        matchedChar = char;
        break;
      }
      ch++;
      if (ch >= lineContent.length) {
        line++;
        lineContent = editor.getLine(line);
        ch = 0;
      }
    }
  }
  return matchFound ? {
    match: matchedChar,
    pos: {
      line,
      ch
    }
  } : null;
};

// src/actions.ts
var insertLineAbove = (editor) => {
  const { line } = editor.getCursor();
  const startOfCurrentLine = getLineStartPos(line);
  editor.replaceRange("\n", startOfCurrentLine);
  editor.setSelection(startOfCurrentLine);
};
var insertLineBelow = (editor) => {
  const { line } = editor.getCursor();
  const endOfCurrentLine = getLineEndPos(line, editor);
  const indentation = getLeadingWhitespace(editor.getLine(line));
  editor.replaceRange("\n" + indentation, endOfCurrentLine);
  editor.setSelection({ line: line + 1, ch: indentation.length });
};
var deleteSelectedLines = (editor) => {
  const selections = editor.listSelections();
  if (selections.length === 0) {
    return;
  }
  const { from, to } = getSelectionBoundaries(selections[0]);
  if (to.line === editor.lastLine()) {
    editor.replaceRange("", getLineEndPos(from.line - 1, editor), getLineEndPos(to.line, editor));
  } else {
    editor.replaceRange("", getLineStartPos(from.line), getLineStartPos(to.line + 1));
  }
};
var deleteToEndOfLine = (editor) => {
  const pos = editor.getCursor();
  const endPos = getLineEndPos(pos.line, editor);
  if (pos.line === endPos.line && pos.ch === endPos.ch) {
    endPos.line = endPos.line + 1;
    endPos.ch = 0;
  }
  editor.replaceRange("", pos, endPos);
};
var joinLines = (editor) => {
  const { line } = editor.getCursor();
  const contentsOfNextLine = editor.getLine(line + 1).trimStart();
  const endOfCurrentLine = getLineEndPos(line, editor);
  const endOfNextLine = getLineEndPos(line + 1, editor);
  editor.replaceRange(contentsOfNextLine.length > 0 ? " " + contentsOfNextLine : contentsOfNextLine, endOfCurrentLine, endOfNextLine);
  editor.setSelection(endOfCurrentLine);
};
var copyLine = (editor, direction) => {
  const selections = editor.listSelections();
  if (selections.length === 0) {
    return;
  }
  const { from, to } = getSelectionBoundaries(selections[0]);
  const fromLineStart = getLineStartPos(from.line);
  const toLineEnd = getLineEndPos(to.line, editor);
  const contentsOfSelectedLines = editor.getRange(fromLineStart, toLineEnd);
  if (direction === "up") {
    editor.replaceRange("\n" + contentsOfSelectedLines, toLineEnd);
    editor.setSelections(selections);
  } else {
    editor.replaceRange(contentsOfSelectedLines + "\n", fromLineStart);
  }
};
var selectWord = (editor) => {
  const selections = editor.listSelections();
  const newSelections = selections.map((selection) => {
    const { from, to } = getSelectionBoundaries(selection);
    const selectedText = editor.getRange(from, to);
    if (selectedText.length !== 0) {
      return selection;
    } else {
      return wordRangeAtPos(from, editor.getLine(from.line));
    }
  });
  editor.setSelections(newSelections);
};
var selectLine = (editor) => {
  const selections = editor.listSelections();
  if (selections.length === 0) {
    return;
  }
  const { from, to } = getSelectionBoundaries(selections[0]);
  const startOfCurrentLine = getLineStartPos(from.line);
  const startOfNextLine = getLineStartPos(to.line + 1);
  editor.setSelection(startOfCurrentLine, startOfNextLine);
};
var goToLineBoundary = (editor, boundary) => {
  if (boundary === "start") {
    const { line } = editor.getCursor("from");
    editor.setSelection(getLineStartPos(line));
  } else {
    const { line } = editor.getCursor("to");
    editor.setSelection(getLineEndPos(line, editor));
  }
};
var navigateLine = (editor, direction) => {
  const pos = editor.getCursor();
  let line;
  if (direction === "up") {
    line = Math.max(pos.line - 1, 0);
  } else {
    line = Math.min(pos.line + 1, editor.lineCount() - 1);
  }
  const endOfLine = getLineEndPos(line, editor);
  const ch = Math.min(pos.ch, endOfLine.ch);
  editor.setSelection({ line, ch });
};
var moveCursor = (editor, direction) => {
  const { line, ch } = editor.getCursor();
  const movement = direction === DIRECTION.BACKWARD ? -1 : 1;
  const lineLength = editor.getLine(line).length;
  const newPos = { line, ch: ch + movement };
  if (newPos.ch < 0 && newPos.line === 0) {
    newPos.ch = ch;
  } else if (newPos.ch < 0) {
    newPos.line = Math.max(newPos.line - 1, 0);
    newPos.ch = editor.getLine(newPos.line).length;
  } else if (newPos.ch > lineLength) {
    newPos.line += 1;
    newPos.ch = 0;
  }
  editor.setSelection(newPos);
};
var transformCase = (editor, caseType) => {
  const originalSelections = editor.listSelections();
  let selectedText = editor.getSelection();
  if (selectedText.length === 0) {
    const pos = editor.getCursor("from");
    const { anchor, head } = wordRangeAtPos(pos, editor.getLine(pos.line));
    editor.setSelection(anchor, head);
    selectedText = editor.getRange(anchor, head);
  }
  if (caseType === CASE.TITLE) {
    editor.replaceSelection(selectedText.split(/(\s+)/).map((word, index, allWords) => {
      if (index > 0 && index < allWords.length - 1 && LOWERCASE_ARTICLES.includes(word.toLowerCase())) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    }).join(""));
  } else {
    editor.replaceSelection(caseType === CASE.UPPER ? selectedText.toUpperCase() : selectedText.toLowerCase());
  }
  if (originalSelections.length > 0) {
    const { anchor, head } = originalSelections[0];
    editor.setSelection(anchor, head);
  }
};
var expandSelection = ({
  editor,
  openingCharacterCheck,
  matchingCharacterMap
}) => {
  let anchor = editor.getCursor("anchor");
  let head = editor.getCursor("head");
  if (anchor.line >= head.line && anchor.ch > anchor.ch) {
    [anchor, head] = [head, anchor];
  }
  const newAnchor = findPosOfNextCharacter({
    editor,
    startPos: anchor,
    checkCharacter: openingCharacterCheck,
    searchDirection: DIRECTION.BACKWARD
  });
  if (!newAnchor) {
    return;
  }
  const newHead = findPosOfNextCharacter({
    editor,
    startPos: head,
    checkCharacter: (char) => char === matchingCharacterMap[newAnchor.match],
    searchDirection: DIRECTION.FORWARD
  });
  if (!newHead) {
    return;
  }
  editor.setSelection(newAnchor.pos, newHead.pos);
};
var expandSelectionToBrackets = (editor) => expandSelection({
  editor,
  openingCharacterCheck: (char) => /[([{]/.test(char),
  matchingCharacterMap: MATCHING_BRACKETS
});
var expandSelectionToQuotes = (editor) => expandSelection({
  editor,
  openingCharacterCheck: (char) => /['"`]/.test(char),
  matchingCharacterMap: MATCHING_QUOTES
});
var goToHeading = (app, editor, boundary) => {
  const file = app.metadataCache.getFileCache(app.workspace.getActiveFile());
  if (!file.headings || file.headings.length === 0) {
    return;
  }
  const { line } = editor.getCursor("from");
  let prevHeadingLine = 0;
  let nextHeadingLine = editor.lastLine();
  file.headings.forEach(({ position }) => {
    const { end: headingPos } = position;
    if (line > headingPos.line && headingPos.line > prevHeadingLine) {
      prevHeadingLine = headingPos.line;
    }
    if (line < headingPos.line && headingPos.line < nextHeadingLine) {
      nextHeadingLine = headingPos.line;
    }
  });
  editor.setSelection(boundary === "prev" ? getLineEndPos(prevHeadingLine, editor) : getLineEndPos(nextHeadingLine, editor));
};

// src/main.ts
var CodeEditorShortcuts = class extends import_obsidian.Plugin {
  onload() {
    this.addCommand({
      id: "insertLineAbove",
      name: "Insert line above",
      hotkeys: [
        {
          modifiers: ["Mod", "Shift"],
          key: "Enter"
        }
      ],
      editorCallback: (editor) => insertLineAbove(editor)
    });
    this.addCommand({
      id: "insertLineBelow",
      name: "Insert line below",
      hotkeys: [
        {
          modifiers: ["Mod"],
          key: "Enter"
        }
      ],
      editorCallback: (editor) => insertLineBelow(editor)
    });
    this.addCommand({
      id: "deleteLine",
      name: "Delete line",
      hotkeys: [
        {
          modifiers: ["Mod", "Shift"],
          key: "K"
        }
      ],
      editorCallback: (editor) => deleteSelectedLines(editor)
    });
    this.addCommand({
      id: "deleteToEndOfLine",
      name: "Delete to end of line",
      editorCallback: (editor) => deleteToEndOfLine(editor)
    });
    this.addCommand({
      id: "joinLines",
      name: "Join lines",
      hotkeys: [
        {
          modifiers: ["Mod"],
          key: "J"
        }
      ],
      editorCallback: (editor) => joinLines(editor)
    });
    this.addCommand({
      id: "duplicateLine",
      name: "Duplicate line",
      hotkeys: [
        {
          modifiers: ["Mod", "Shift"],
          key: "D"
        }
      ],
      editorCallback: (editor) => copyLine(editor, "down")
    });
    this.addCommand({
      id: "copyLineUp",
      name: "Copy line up",
      hotkeys: [
        {
          modifiers: ["Alt", "Shift"],
          key: "ArrowUp"
        }
      ],
      editorCallback: (editor) => copyLine(editor, "up")
    });
    this.addCommand({
      id: "copyLineDown",
      name: "Copy line down",
      hotkeys: [
        {
          modifiers: ["Alt", "Shift"],
          key: "ArrowDown"
        }
      ],
      editorCallback: (editor) => copyLine(editor, "down")
    });
    this.addCommand({
      id: "selectWord",
      name: "Select word",
      editorCallback: (editor) => selectWord(editor)
    });
    this.addCommand({
      id: "selectLine",
      name: "Select line",
      hotkeys: [
        {
          modifiers: ["Mod"],
          key: "L"
        }
      ],
      editorCallback: (editor) => selectLine(editor)
    });
    this.addCommand({
      id: "goToLineStart",
      name: "Go to start of line",
      editorCallback: (editor) => goToLineBoundary(editor, "start")
    });
    this.addCommand({
      id: "goToLineEnd",
      name: "Go to end of line",
      editorCallback: (editor) => goToLineBoundary(editor, "end")
    });
    this.addCommand({
      id: "goToNextLine",
      name: "Go to next line",
      editorCallback: (editor) => navigateLine(editor, "down")
    });
    this.addCommand({
      id: "goToPrevLine",
      name: "Go to previous line",
      editorCallback: (editor) => navigateLine(editor, "up")
    });
    this.addCommand({
      id: "goToNextChar",
      name: "Move cursor forward",
      editorCallback: (editor) => moveCursor(editor, DIRECTION.FORWARD)
    });
    this.addCommand({
      id: "goToPrevChar",
      name: "Move cursor backward",
      editorCallback: (editor) => moveCursor(editor, DIRECTION.BACKWARD)
    });
    this.addCommand({
      id: "transformToUppercase",
      name: "Transform selection to uppercase",
      editorCallback: (editor) => transformCase(editor, CASE.UPPER)
    });
    this.addCommand({
      id: "transformToLowercase",
      name: "Transform selection to lowercase",
      editorCallback: (editor) => transformCase(editor, CASE.LOWER)
    });
    this.addCommand({
      id: "transformToTitlecase",
      name: "Transform selection to title case",
      editorCallback: (editor) => transformCase(editor, CASE.TITLE)
    });
    this.addCommand({
      id: "expandSelectionToBrackets",
      name: "Expand selection to brackets",
      editorCallback: (editor) => expandSelectionToBrackets(editor)
    });
    this.addCommand({
      id: "expandSelectionToQuotes",
      name: "Expand selection to quotes",
      editorCallback: (editor) => expandSelectionToQuotes(editor)
    });
    this.addCommand({
      id: "goToNextHeading",
      name: "Go to next heading",
      editorCallback: (editor) => goToHeading(this.app, editor, "next")
    });
    this.addCommand({
      id: "goToPrevHeading",
      name: "Go to previous heading",
      editorCallback: (editor) => goToHeading(this.app, editor, "prev")
    });
  }
};
