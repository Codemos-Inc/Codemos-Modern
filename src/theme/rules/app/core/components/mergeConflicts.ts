import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "editorOverviewRuler.commentForeground": styles.fill.text.ghost,
    "editorOverviewRuler.commentUnresolvedForeground": styles.basic.def.blue.sec,
    "editorOverviewRuler.commonContentForeground": styles.basic.neutral.qua,
    "editorOverviewRuler.currentContentForeground": styles.basic.def.mint.ter,
    "editorOverviewRuler.incomingContentForeground": styles.basic.def.blue.ter,
    "merge.border": styles.stroke.control.default,
    "merge.commonContentBackground": styles.basic.neutral.sen,
    "merge.commonHeaderBackground": styles.basic.neutral.qui,
    "merge.currentContentBackground": styles.basic.def.mint.qui,
    "merge.currentHeaderBackground": styles.basic.def.mint.ter,
    "merge.incomingContentBackground": styles.basic.def.blue.qui,
    "merge.incomingHeaderBackground": styles.basic.def.blue.ter,
    "mergeEditor.change.background": styles.basic.neutral.sep,
    "mergeEditor.change.word.background": styles.basic.neutral.sen,
    "mergeEditor.changeBase.background": styles.basic.neutral.sep,
    "mergeEditor.changeBase.word.background": styles.basic.neutral.sen,
    "mergeEditor.conflict.handled.minimapOverViewRuler": styles.basic.def.green.ter,
    "mergeEditor.conflict.handledFocused.border": styles.basic.def.green.pri,
    "mergeEditor.conflict.handledUnfocused.border": styles.basic.def.green.ter,
    "mergeEditor.conflict.input1.background": styles.basic.def.blue.ter,
    "mergeEditor.conflict.input2.background": styles.basic.def.mint.ter,
    "mergeEditor.conflict.unhandled.minimapOverViewRuler": styles.basic.def.red.ter,
    "mergeEditor.conflict.unhandledFocused.border": styles.basic.def.red.pri,
    "mergeEditor.conflict.unhandledUnfocused.border": styles.basic.def.red.ter,
    "mergeEditor.conflictingLines.background": styles.basic.def.orange.qui,
  };
};
