import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Attributes
    {
      scope: [
        "meta.embedded.block.powershell support.function.attribute",
        "source.powershell support.function.attribute",
      ],
      settings: {
        foreground: colors.scope01,
        fontStyle: "",
      },
    },
    // Commands
    {
      scope: [
        "meta.embedded.block.powershell support.function",
        "source.powershell support.function",
      ],
      settings: {
        foreground: colors.scope03,
        fontStyle: "",
      },
    },
    // Operators
    {
      scope: [
        "meta.embedded.block.powershell keyword.operator.comparison",
        "meta.embedded.block.powershell keyword.operator.documentation",
        "meta.embedded.block.powershell keyword.operator.logical",
        "source.powershell keyword.operator.comparison",
        "source.powershell keyword.operator.documentation",
        "source.powershell keyword.operator.logical",
      ],
      settings: {
        foreground: colors.scope06,
        fontStyle: "",
      },
    },
  ];
};
