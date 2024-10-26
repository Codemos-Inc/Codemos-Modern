import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";
import { matchHex9Alpha } from "../../../../../color/utils";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const rules = {
    "editor.background": styles.bg.solid.layer,
    "editor.findMatchBackground": styles.basic.def.mint.qua,
    "editor.findMatchBorder": styles.stroke.control.default,
    "editor.findMatchForeground": null,
    "editor.findMatchHighlightBackground": styles.basic.def.mint.qui,
    "editor.findMatchHighlightBorder": styles.stroke.control.default,
    "editor.findMatchHighlightForeground": null,
    "editor.findRangeHighlightBackground": styles.basic.neutral.sep,
    "editor.findRangeHighlightBorder": TRANSPARENT,
    "editor.foldBackground": styles.basic.neutral.oct,
    "editor.foldPlaceholderForeground": styles.fill.text.ghost,
    "editor.foreground": styles.fill.text.sec,
    "editor.hoverHighlightBackground": styles.basic.neutral.sep,
    "editor.inactiveSelectionBackground": styles.basic.neutral.sep,
    "editor.lineHighlightBackground": TRANSPARENT,
    "editor.lineHighlightBorder": styles.stroke.control.default,
    "editor.linkedEditingBackground": styles.basic.def.blue.qua,
    "editor.placeholder.foreground": styles.fill.text.ghost,
    "editor.rangeHighlightBackground": styles.basic.neutral.sep,
    "editor.rangeHighlightBorder": TRANSPARENT,
    "editor.selectionBackground": styles.basic.neutral.sen,
    "editor.selectionForeground": styles.fill.text.pri,
    "editor.selectionHighlightBackground": styles.basic.neutral.sep,
    "editor.selectionHighlightBorder": styles.stroke.control.default,
    "editor.symbolHighlightBackground": TRANSPARENT,
    "editor.symbolHighlightBorder": styles.basic.def.purple.pri,
    "editor.wordHighlightBackground": styles.basic.def.pink.qua,
    "editor.wordHighlightBorder": styles.stroke.control.default,
    "editor.wordHighlightStrongBackground": styles.basic.def.purple.qua,
    "editor.wordHighlightStrongBorder": styles.stroke.control.default,
    "editor.wordHighlightTextBackground": styles.basic.def.pink.qua,
    "editor.wordHighlightTextBorder": styles.stroke.control.default,
    "editorBracketHighlight.foreground1": styles.basic.alt.yellow.pri,
    "editorBracketHighlight.foreground2": styles.basic.alt.orange.pri,
    "editorBracketHighlight.foreground3": styles.basic.alt.red.pri,
    "editorBracketHighlight.foreground4": styles.basic.alt.purple.pri,
    "editorBracketHighlight.foreground5": styles.basic.alt.blue.pri,
    "editorBracketHighlight.foreground6": styles.basic.alt.green.pri,
    "editorBracketHighlight.unexpectedBracket.foreground": styles.basic.def.red.pri,
    "editorBracketMatch.background": styles.basic.def.brown.qua,
    "editorBracketMatch.border": styles.stroke.control.default,
    "editorBracketPairGuide.activeBackground1": styles.basic.alt.yellow.pri,
    "editorBracketPairGuide.activeBackground2": styles.basic.alt.orange.pri,
    "editorBracketPairGuide.activeBackground3": styles.basic.alt.red.pri,
    "editorBracketPairGuide.activeBackground4": styles.basic.alt.purple.pri,
    "editorBracketPairGuide.activeBackground5": styles.basic.alt.blue.pri,
    "editorBracketPairGuide.activeBackground6": styles.basic.alt.green.pri,
    "editorBracketPairGuide.background1": styles.basic.alt.yellow.ter,
    "editorBracketPairGuide.background2": styles.basic.alt.orange.ter,
    "editorBracketPairGuide.background3": styles.basic.alt.red.ter,
    "editorBracketPairGuide.background4": styles.basic.alt.purple.ter,
    "editorBracketPairGuide.background5": styles.basic.alt.blue.ter,
    "editorBracketPairGuide.background6": styles.basic.alt.green.ter,
    "editorCodeLens.foreground": styles.fill.text.disabled,
    "editorCommentsWidget.rangeActiveBackground": styles.basic.def.blue.qua,
    "editorCommentsWidget.rangeBackground": styles.basic.def.blue.qui,
    "editorCommentsWidget.replyInputBackground": styles.fill.control.restSolid, // 🟢 Undesired solution!
    "editorCommentsWidget.resolvedBorder": styles.basic.neutral.qua,
    "editorCommentsWidget.unresolvedBorder": styles.basic.def.blue.pri,
    "editorCursor.background": styles.fill.textOnColor.pri,
    "editorCursor.foreground": styles.fill.accent.pri,
    "editorError.background": TRANSPARENT,
    "editorError.border": TRANSPARENT,
    "editorError.foreground": styles.basic.def.red.pri,
    "editorGutter.addedBackground": styles.basic.def.green.pri,
    "editorGutter.background": styles.bg.solid.base,
    "editorGutter.commentGlyphForeground": styles.fill.text.sec,
    "editorGutter.commentRangeForeground": styles.fill.control.prominent,
    "editorGutter.commentUnresolvedGlyphForeground": styles.basic.def.blue.pri,
    "editorGutter.deletedBackground": styles.basic.def.red.pri,
    "editorGutter.foldingControlForeground": styles.fill.text.sec,
    "editorGutter.modifiedBackground": styles.basic.def.blue.pri,
    "editorHint.border": TRANSPARENT,
    "editorHint.foreground": styles.basic.def.mint.pri,
    "editorIndentGuide.activeBackground1": styles.basic.alt.yellow.pri,
    "editorIndentGuide.activeBackground2": styles.basic.alt.orange.pri,
    "editorIndentGuide.activeBackground3": styles.basic.alt.red.pri,
    "editorIndentGuide.activeBackground4": styles.basic.alt.purple.pri,
    "editorIndentGuide.activeBackground5": styles.basic.alt.blue.pri,
    "editorIndentGuide.activeBackground6": styles.basic.alt.green.pri,
    "editorIndentGuide.background1": styles.basic.alt.yellow.ter,
    "editorIndentGuide.background2": styles.basic.alt.orange.ter,
    "editorIndentGuide.background3": styles.basic.alt.red.ter,
    "editorIndentGuide.background4": styles.basic.alt.purple.ter,
    "editorIndentGuide.background5": styles.basic.alt.blue.ter,
    "editorIndentGuide.background6": styles.basic.alt.green.ter,
    "editorInfo.background": TRANSPARENT,
    "editorInfo.border": TRANSPARENT,
    "editorInfo.foreground": styles.basic.def.blue.pri,
    "editorInlayHint.background": styles.basic.neutral.sen,
    "editorInlayHint.foreground": styles.fill.text.sec,
    "editorInlayHint.parameterBackground": matchHex9Alpha(
      themeContext.variantConfig.codeColors.scope10,
      styles.basic.neutral.qui,
    ),
    "editorInlayHint.parameterForeground": themeContext.variantConfig.codeColors.scope10,
    "editorInlayHint.typeBackground": matchHex9Alpha(
      themeContext.variantConfig.codeColors.scope03,
      styles.basic.neutral.qui,
    ),
    "editorInlayHint.typeForeground": themeContext.variantConfig.codeColors.scope03,
    "editorLightBulb.foreground": styles.basic.def.yellow.pri,
    "editorLightBulbAi.foreground": styles.basic.def.purple.pri,
    "editorLightBulbAutoFix.foreground": styles.basic.def.green.pri,
    "editorLineNumber.activeForeground": styles.fill.text.pri,
    "editorLineNumber.dimmedForeground": styles.fill.text.ghost,
    "editorLineNumber.foreground": styles.fill.text.disabled,
    "editorLink.activeForeground": styles.fill.accentText.pri,
    "editorMultiCursor.primary.background": styles.fill.textOnColor.pri,
    "editorMultiCursor.primary.foreground": styles.fill.accent.pri,
    "editorMultiCursor.secondary.background": styles.fill.textOnColor.pri,
    "editorMultiCursor.secondary.foreground": styles.fill.accent.ter,
    "editorOverviewRuler.addedForeground": styles.basic.def.green.sec,
    "editorOverviewRuler.background": styles.bg.solid.base,
    "editorOverviewRuler.border": TRANSPARENT,
    "editorOverviewRuler.bracketMatchForeground": styles.basic.def.brown.sec,
    "editorOverviewRuler.deletedForeground": styles.basic.def.red.sec,
    "editorOverviewRuler.errorForeground": styles.basic.def.red.pri,
    "editorOverviewRuler.findMatchForeground": styles.basic.def.mint.sec,
    "editorOverviewRuler.infoForeground": styles.basic.def.blue.pri,
    "editorOverviewRuler.inlineChatInserted": styles.basic.def.green.sec,
    "editorOverviewRuler.inlineChatRemoved": styles.basic.def.red.sec,
    "editorOverviewRuler.modifiedForeground": styles.basic.def.blue.sec,
    "editorOverviewRuler.rangeHighlightForeground": styles.basic.neutral.sep,
    "editorOverviewRuler.selectionHighlightForeground": styles.basic.neutral.sen,
    "editorOverviewRuler.warningForeground": styles.basic.def.orange.pri,
    "editorOverviewRuler.wordHighlightForeground": styles.basic.def.pink.sec,
    "editorOverviewRuler.wordHighlightStrongForeground": styles.basic.def.purple.sec,
    "editorOverviewRuler.wordHighlightTextForeground": styles.basic.def.pink.sec,
    "editorRuler.foreground": styles.stroke.divider.default,
    "editorUnicodeHighlight.background": TRANSPARENT,
    "editorUnicodeHighlight.border": styles.basic.def.yellow.pri,
    "editorUnnecessaryCode.border": TRANSPARENT,
    "editorUnnecessaryCode.opacity": styles.fill.text.disabled,
    "editorWarning.background": TRANSPARENT,
    "editorWarning.border": TRANSPARENT,
    "editorWarning.foreground": styles.basic.def.orange.pri,
    "editorWatermark.foreground": styles.fill.text.sec,
    "editorWhitespace.foreground": styles.fill.text.ghost,
    "problemsErrorIcon.foreground": styles.basic.def.red.pri,
    "problemsInfoIcon.foreground": styles.basic.def.blue.pri,
    "problemsWarningIcon.foreground": styles.basic.def.orange.pri,
    "search.resultsInfoForeground": styles.fill.text.disabled,
    "searchEditor.findMatchBackground": styles.basic.def.mint.qua,
    "searchEditor.findMatchBorder": styles.stroke.control.default,
    "searchEditor.textInputBorder": styles.stroke.control.default,
  };
  const design = themeContext.variantConfig.design;
  if (design === "natural" || design === "minimal") {
    rules["editorGutter.background"] = styles.bg.solid.layer;
    rules["editorOverviewRuler.background"] = styles.bg.solid.layer;
  } else if (design === "flat") {
    rules["editor.lineHighlightBorder"] = TRANSPARENT;
    rules["editorGutter.background"] = styles.bg.solid.layer;
    rules["editorOverviewRuler.background"] = styles.bg.solid.layer;
  }
  return rules;
};