import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Operators
    {
      scope: ["meta.embedded.block.fsharp keyword.symbol", "source.fsharp keyword.symbol"],
      settings: {
        foreground: colors.scope17,
        fontStyle: "",
      },
    },
    // Sections
    {
      scope: [
        "meta.embedded.block.fsharp entity.name.section",
        "source.fsharp entity.name.section",
      ],
      settings: {
        foreground: colors.scope05,
        fontStyle: "",
      },
    },
    // Interpolated strings
    {
      scope: [
        "meta.embedded.block.fsharp keyword.format.specifier",
        "source.fsharp keyword.format.specifier",
      ],
      settings: {
        foreground: colors.scope14,
        fontStyle: "",
      },
    },
    // Attributes
    {
      scope: [
        "meta.embedded.block.fsharp support.function.attribute",
        "source.fsharp support.function.attribute",
      ],
      settings: {
        foreground: colors.scope01,
        fontStyle: "",
      },
    },
    // Attribute arguments
    {
      scope: [
        "meta.embedded.block.fsharp support.function.attribute keyword.symbol",
        "source.fsharp support.function.attribute keyword.symbol",
      ],
      settings: {
        foreground: colors.scope09,
        fontStyle: "",
      },
    },
  ];
};
