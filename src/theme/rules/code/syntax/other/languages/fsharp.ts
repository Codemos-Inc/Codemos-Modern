import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Operators
    {
      scope: ["source.fsharp keyword.symbol"],
      settings: {
        foreground: colors.sxx,
        fontStyle: "",
      },
    },
    // Sections
    {
      scope: ["source.fsharp entity.name.section"],
      settings: {
        foreground: colors.s05,
        fontStyle: "",
      },
    },
    // Interpolated strings
    {
      scope: ["source.fsharp keyword.format.specifier"],
      settings: {
        foreground: colors.s14,
        fontStyle: "",
      },
    },
    // Attributes
    {
      scope: ["source.fsharp support.function.attribute"],
      settings: {
        foreground: colors.s01,
        fontStyle: "",
      },
    },
    // Attribute arguments
    {
      scope: ["source.fsharp support.function.attribute keyword.symbol"],
      settings: {
        foreground: colors.s09,
        fontStyle: "",
      },
    },
  ];
};
