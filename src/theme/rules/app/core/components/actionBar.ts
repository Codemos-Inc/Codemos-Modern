import { ThemeContext } from "../../../../../@types/index";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "actionBar.toggledBackground": colors.fill.control.rest, // 🟢 Not ideal! Should be accentFill but foreground is not contrast safe.
  };
};
