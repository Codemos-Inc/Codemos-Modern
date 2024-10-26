import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return {
    // C++/CLI reference types
    referenceType: colors.scope03,
    // C++/CLI properties
    cliProperty: colors.scope11,
    // C++/CLI generic types
    genericType: colors.scope03,
    // C++/CLI value types
    valueType: colors.scope01,
    // Templated functions
    templateFunction: colors.scope02,
    // Templated types
    templateType: colors.scope03,
    // Operator overloads
    operatorOverload: colors.scope02,
    // Member operator overloads
    memberOperatorOverload: colors.scope02,
    // New/Delete operators
    newOperator: colors.scope01,
    // Custom literals
    customLiteral: colors.scope14,
    // Number literals
    numberLiteral: colors.scope12,
    // String literals
    stringLiteral: colors.scope00,
    // Global variables
    "variable.global": colors.scope13,
    // Local variables
    "variable.local": colors.scope10,
  };
};
