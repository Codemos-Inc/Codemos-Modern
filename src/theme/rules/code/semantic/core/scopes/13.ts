import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.scope13;
  return {
    // Type parameters
    typeParameter: color,
    // Enum members
    enumMember: color,
    // Builtin variable
    "variable.defaultLibrary": color,
  };
};
