import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return {
    // C++/CLI reference types
    referenceType: colors.s03,
    // C++/CLI properties
    cliProperty: colors.s11,
    // C++/CLI generic types
    genericType: colors.s03,
    // C++/CLI value types
    valueType: colors.s01,
    // Templated functions
    templateFunction: colors.s02,
    // Templated types
    templateType: colors.s03,
    // Operator overloads
    operatorOverload: colors.s02,
    // Member operator overloads
    memberOperatorOverload: colors.s02,
    // New/Delete operators
    newOperator: colors.s01,
    // Custom literals
    customLiteral: colors.s14,
    // Number literals
    numberLiteral: colors.s12,
    // String literals
    stringLiteral: colors.s00,
    // Global variables
    "variable.global": colors.s13,
    // Local variables
    "variable.local": colors.s10,
  };
};
