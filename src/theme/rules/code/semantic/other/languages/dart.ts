import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return {
    // Escape characters
    "string.escape": colors.s01,
    // Source texts
    source: colors.sxx,
    // Interpolated strings
    "source.interpolation": colors.s14,
    // Annotations
    "*.annotation": colors.s01,
  };
};
