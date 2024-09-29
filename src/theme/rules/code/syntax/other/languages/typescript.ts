import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Keywords
    {
      scope: ["keyword.operator.expression"],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },
    // Number suffixes
    {
      scope: ["storage.type.numeric.bigint"],
      settings: {
        foreground: colors.s12,
        fontStyle: "",
      },
    },
  ];
};
