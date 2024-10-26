import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.variantConfig.codeColors.scope02;
  return {
    // Functions
    function: color,
    // Builtin functions
    "function.defaultLibrary": color,
    // Methods
    method: color,
    // Builtin methods
    "method.defaultLibrary": color,
  };
};
