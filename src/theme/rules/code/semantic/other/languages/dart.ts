import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return {
    // Escape characters
    "string.escape": colors.scope01,
    // Source texts
    source: colors.scopeXX,
    // Interpolated strings
    "source.interpolation": colors.scope14,
    // Annotations
    "*.annotation": colors.scope01,
  };
};
