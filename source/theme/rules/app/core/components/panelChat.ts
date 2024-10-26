import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "interactive.activeCodeBorder": styles.fill.accent.pri,
    "interactive.inactiveCodeBorder": styles.fill.accent.ter,
  };
};
