import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s03;
  return {
    // Classes
    class: color,
    // Enums
    enum: color,
    // Interfaces
    interface: color,
    // Structs
    struct: color,
    // Types
    type: color,
  };
};
