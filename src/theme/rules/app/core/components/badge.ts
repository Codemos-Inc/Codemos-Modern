import { ThemeContext } from "../../../../../@types/index";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "badge.background": colors.fill.accent.pri,
    "badge.foreground": colors.fill.textOnColor.pri,
  };
};
