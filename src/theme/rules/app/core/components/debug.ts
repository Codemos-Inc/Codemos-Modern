import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "debugToolBar.background": colors.bg.solid.flyout,
    "debugToolBar.border": colors.stroke.surface.flyout,
    "editor.focusedStackFrameHighlightBackground": colors.basic.def.yellow.qui,
    "editor.stackFrameHighlightBackground": colors.basic.def.yellow.qua,
    "editor.inlineValuesForeground": colors.basic.def.yellow.pri,
    "editor.inlineValuesBackground": colors.basic.def.yellow.qui,
    "debugView.exceptionLabelForeground": colors.fill.textOnColor.pri,
    "debugView.exceptionLabelBackground": colors.basic.def.red.pri,
    "debugView.stateLabelForeground": colors.fill.text.pri,
    "debugView.stateLabelBackground": colors.fill.control.subtle,
    "debugView.valueChangedHighlight": colors.basic.alt.blue.pri,
    "debugTokenExpression.name": colors.fill.accentText.pri,
    "debugTokenExpression.value": colors.fill.text.pri,
    "debugTokenExpression.string": colors.basic.def.brown.pri,
    "debugTokenExpression.boolean": colors.basic.def.blue.pri,
    "debugTokenExpression.number": colors.basic.alt.green.pri,
    "debugTokenExpression.error": colors.basic.def.red.pri,
    "debugTokenExpression.type": colors.basic.def.mint.pri,
  };
};
