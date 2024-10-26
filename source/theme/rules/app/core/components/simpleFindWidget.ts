import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "simpleFindWidget.sashBorder": styles.fill.accent.pri,
  };
};
