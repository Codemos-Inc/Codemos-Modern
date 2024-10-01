import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s02;
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
