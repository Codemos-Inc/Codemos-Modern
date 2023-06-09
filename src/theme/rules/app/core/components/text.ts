import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "textBlockQuote.background": colors.fill.control.subtle,
    "textBlockQuote.border": colors.fill.accent.pri,
    "textCodeBlock.background": colors.fill.control.subtle,
    "textLink.activeForeground": colors.fill.accentText.sec,
    "textLink.foreground": colors.fill.accentText.pri,
    "textPreformat.foreground": colors.basic.def.pink.pri,
    "textSeparator.foreground": colors.stroke.divider.default,
  };
};
