import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return {
    // Magic functions
    magicFunction: colors.scope07,
    // Self parameters
    selfParameter: colors.scope03,
    // Class parameters
    clsParameter: colors.scope03,
    // Builtins types
    "class.builtin": colors.scope06,
    // Decorator functions
    "function.decorator": colors.scope01,
  };
};
