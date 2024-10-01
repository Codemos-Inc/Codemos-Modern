import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return {
    // Magic functions
    magicFunction: colors.s07,
    // Self parameters
    selfParameter: colors.s03,
    // Class parameters
    clsParameter: colors.s03,
    // Builtins types
    "class.builtin": colors.s06,
    // Decorator functions
    "function.decorator": colors.s01,
  };
};
