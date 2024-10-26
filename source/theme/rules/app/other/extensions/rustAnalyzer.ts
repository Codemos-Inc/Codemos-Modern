import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "rust_analyzer.syntaxTreeBorder": styles.fill.system.fg.yellow,
  };
};
