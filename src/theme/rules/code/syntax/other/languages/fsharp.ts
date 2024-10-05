import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Operators
    {
      scope: ["meta.embedded.block.fsharp keyword.symbol", "source.fsharp keyword.symbol"],
      settings: {
        foreground: colors.sxx,
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
        foreground: colors.s05,
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
        foreground: colors.s14,
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
        foreground: colors.s01,
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
        foreground: colors.s09,
        fontStyle: "",
      },
    },
  ];
};
