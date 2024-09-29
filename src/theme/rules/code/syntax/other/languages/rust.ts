import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Macros
    {
      scope: ["entity.name.function.macro"],
      settings: {
        foreground: colors.s07,
        fontStyle: "",
      },
    },
    // Macro rules
    {
      scope: ["source.rust entity.name.function.macro.rules"],
      settings: {
        foreground: colors.s16,
        fontStyle: "",
      },
    },
    // Macro metavariables
    {
      scope: ["keyword.operator.macro", "source.rust variable.other.metavariable.name"],
      settings: {
        foreground: colors.s15,
        fontStyle: "",
      },
    },
    // Macro metavariable specifiers
    {
      scope: ["source.rust variable.other.metavariable.specifier"],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },
    // Lifetimes
    {
      scope: ["entity.name.type.lifetime", "punctuation.definition.lifetime"],
      settings: {
        foreground: colors.s01,
        fontStyle: "",
      },
    },
    // Attribute arguments
    {
      scope: ["meta.attribute entity.name.type", "meta.attribute keyword.operator.namespace"],
      settings: {
        foreground: colors.s09,
        fontStyle: "",
      },
    },
    // Borrow/Dereference operator
    {
      scope: ["keyword.operator.dereference", "keyword.operator.borrow"],
      settings: {
        foreground: colors.s09,
        fontStyle: "",
      },
    },
  ];
};
