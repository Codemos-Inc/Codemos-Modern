import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "banner.background": styles.fill.accent.pri,
    "banner.foreground": styles.fill.onAccent.pri,
    "banner.iconForeground": styles.fill.onAccent.pri,
  };
};
