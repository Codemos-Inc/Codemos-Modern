import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "rust_analyzer.syntaxTreeBorder": colors.fill.system.fg.yellow,
  };
};
