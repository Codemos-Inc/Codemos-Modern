import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "badge.background": styles.fill.accent.pri,
    "badge.foreground": styles.fill.textOnColor.pri,
  };
};
