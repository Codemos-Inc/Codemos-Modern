import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Reference operator
    {
      scope: ["storage.modifier.reference"],
      settings: {
        foreground: colors.sxx,
        fontStyle: "",
      },
    },
    // Operator keyword
    {
      scope: ["keyword.other.operator.overload"],
      settings: {
        foreground: colors.s02,
        fontStyle: "",
      },
    },
  ];
};
