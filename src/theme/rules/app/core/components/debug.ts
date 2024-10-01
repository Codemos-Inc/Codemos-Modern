import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "debugTokenExpression.boolean": styles.basic.def.blue.pri,
    "debugTokenExpression.error": styles.basic.def.red.pri,
    "debugTokenExpression.name": styles.fill.accentText.pri,
    "debugTokenExpression.number": styles.basic.alt.green.pri,
    "debugTokenExpression.string": styles.basic.def.brown.pri,
    "debugTokenExpression.type": styles.basic.def.mint.pri,
    "debugTokenExpression.value": styles.fill.text.pri,
    "debugToolBar.background": styles.bg.solid.flyout,
    "debugToolBar.border": styles.stroke.surface.flyout,
    "debugView.exceptionLabelBackground": styles.basic.def.red.pri,
    "debugView.exceptionLabelForeground": styles.fill.textOnColor.pri,
    "debugView.stateLabelBackground": styles.fill.control.subtle,
    "debugView.stateLabelForeground": styles.fill.text.pri,
    "debugView.valueChangedHighlight": styles.basic.alt.blue.pri,
    "editor.focusedStackFrameHighlightBackground": styles.basic.def.yellow.qui,
    "editor.inlineValuesBackground": styles.basic.def.yellow.qui,
    "editor.inlineValuesForeground": styles.basic.def.yellow.pri,
    "editor.stackFrameHighlightBackground": styles.basic.def.yellow.qua,
  };
};
