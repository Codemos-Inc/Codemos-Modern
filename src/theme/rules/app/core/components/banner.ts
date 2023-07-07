import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "banner.background": colors.fill.accent.pri,
    "banner.foreground": colors.fill.textOnColor.pri,
    "banner.iconForeground": colors.fill.textOnColor.pri,
  };
};
