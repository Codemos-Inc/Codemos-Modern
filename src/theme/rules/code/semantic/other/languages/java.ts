import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return {
    // Annotation
    annotation: colors.s01,
    // Annotation members
    annotationMember: colors.s09,
    // Modifier keywords
    modifier: colors.s06,
    // Records
    record: colors.s03,
    // Record components
    recordComponent: colors.s11,
    // Documentation keywords
    "keyword.documentation": colors.s06,
    // Constructors
    "*.declaration.constructor": colors.s02,
    // Constructor calls
    "*.constructor": colors.s03,
  };
};
