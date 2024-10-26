import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return {
    // Escape characters
    "string.escape": colors.scope01,
    // Source texts
    source: colors.scope17,
    // Interpolated strings
    "source.interpolation": colors.scope14,
    // Annotations
    "*.annotation": colors.scope01,
  };
};
