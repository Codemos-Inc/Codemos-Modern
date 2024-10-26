import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return {
    // Annotation
    annotation: colors.scope01,
    // Annotation members
    annotationMember: colors.scope09,
    // Modifier keywords
    modifier: colors.scope06,
    // Records
    record: colors.scope03,
    // Record components
    recordComponent: colors.scope11,
    // Documentation keywords
    "keyword.documentation": colors.scope06,
    // Constructors
    "*.declaration.constructor": colors.scope02,
    // Constructor calls
    "*.constructor": colors.scope03,
  };
};
