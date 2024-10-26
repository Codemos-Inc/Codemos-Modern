import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "actionBar.toggledBackground": styles.fill.control.rest, // 🟢 Not ideal! Should be accentFill but foreground is not contrast safe.
  };
};
