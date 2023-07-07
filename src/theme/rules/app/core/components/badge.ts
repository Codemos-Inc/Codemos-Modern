import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "badge.background": colors.fill.accent.pri,
    "badge.foreground": colors.fill.textOnColor.pri,
  };
};
