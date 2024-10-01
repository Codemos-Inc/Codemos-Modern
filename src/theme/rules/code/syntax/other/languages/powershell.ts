import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Attributes
    {
      scope: ["source.powershell support.function.attribute"],
      settings: {
        foreground: colors.s01,
        fontStyle: "",
      },
    },
    // Commands
    {
      scope: ["source.powershell support.function"],
      settings: {
        foreground: colors.s03,
        fontStyle: "",
      },
    },
    // Operators
    {
      scope: [
        "source.powershell keyword.operator.comparison",
        "source.powershell keyword.operator.documentation",
        "source.powershell keyword.operator.logical",
      ],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },
  ];
};
