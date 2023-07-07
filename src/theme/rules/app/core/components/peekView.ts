import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "peekView.border": colors.basic.def.mint.pri,
    "peekViewEditor.background": colors.bg.solid.surface,
    "peekViewEditor.matchHighlightBackground": colors.basic.def.mint.qua,
    "peekViewEditor.matchHighlightBorder": colors.stroke.control.default,
    "peekViewEditorGutter.background": colors.bg.solid.canvas,
    "peekViewEditorStickyScroll.background": colors.bg.solid.onCanvas,
    "peekViewResult.background": colors.bg.solid.canvas,
    "peekViewResult.fileForeground": colors.fill.text.sec,
    "peekViewResult.lineForeground": colors.fill.text.sec,
    "peekViewResult.matchHighlightBackground": colors.basic.def.mint.qua,
    "peekViewResult.selectionBackground": colors.fill.control.hover,
    "peekViewResult.selectionForeground": colors.fill.text.pri,
    "peekViewTitle.background": colors.basic.loc.mint.pri,
    "peekViewTitleDescription.foreground": colors.fill.text.sec,
    "peekViewTitleLabel.foreground": colors.basic.alt.mint.pri,
  };
};
