import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "debugTokenExpression.boolean": colors.basic.def.blue.pri,
    "debugTokenExpression.error": colors.basic.def.red.pri,
    "debugTokenExpression.name": colors.fill.accentText.pri,
    "debugTokenExpression.number": colors.basic.alt.green.pri,
    "debugTokenExpression.string": colors.basic.def.brown.pri,
    "debugTokenExpression.value": colors.basic.def.mint.pri,
    "debugToolBar.background": colors.bg.solid.flyout,
    "debugToolBar.border": colors.stroke.surface.flyout,
    "debugView.exceptionLabelBackground": colors.basic.def.red.pri,
    "debugView.exceptionLabelForeground": colors.fill.textOnColor.pri,
    "debugView.stateLabelBackground": colors.fill.control.subtle,
    "debugView.stateLabelForeground": colors.fill.text.pri,
    "debugView.valueChangedHighlight": colors.basic.alt.blue.pri,
    "editor.focusedStackFrameHighlightBackground": colors.basic.def.yellow.qui,
    "editor.inlineValuesBackground": colors.basic.def.yellow.qui,
    "editor.inlineValuesForeground": colors.basic.def.yellow.pri,
    "editor.stackFrameHighlightBackground": colors.basic.def.yellow.qua,
  };
};
