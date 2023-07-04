import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "textBlockQuote.background": colors.fill.control.subtle,
    "textBlockQuote.border": colors.fill.accent.pri,
    "textCodeBlock.background": colors.fill.control.subtle,
    "textLink.activeForeground": colors.fill.accent.sec,
    "textLink.foreground": colors.fill.accent.pri,
    "textPreformat.foreground": colors.basic.def.pink.pri,
    "textSeparator.foreground": colors.stroke.divider.default,
  };
};
