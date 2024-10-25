import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Macros
    {
      scope: ["entity.name.function.macro"],
      settings: {
        foreground: colors.scope07,
        fontStyle: "",
      },
    },
    // Macro rules
    {
      scope: [
        "meta.embedded.block.rust entity.name.function.macro.rules",
        "source.rust entity.name.function.macro.rules",
      ],
      settings: {
        foreground: colors.scope16,
        fontStyle: "",
      },
    },
    // Macro metavariables
    {
      scope: [
        "keyword.operator.macro",
        "meta.embedded.block.rust variable.other.metavariable.name",
        "source.rust variable.other.metavariable.name",
      ],
      settings: {
        foreground: colors.scope15,
        fontStyle: "",
      },
    },
    // Macro metavariable specifiers
    {
      scope: [
        "meta.embedded.block.rust variable.other.metavariable.specifier",
        "source.rust variable.other.metavariable.specifier",
      ],
      settings: {
        foreground: colors.scope06,
        fontStyle: "",
      },
    },
    // Lifetimes
    {
      scope: ["entity.name.type.lifetime", "punctuation.definition.lifetime"],
      settings: {
        foreground: colors.scope01,
        fontStyle: "",
      },
    },
    // Attribute arguments
    {
      scope: ["meta.attribute keyword.operator.namespace"],
      settings: {
        foreground: colors.scope09,
        fontStyle: "",
      },
    },
    // Borrow/Dereference operator
    {
      scope: ["keyword.operator.dereference", "keyword.operator.borrow"],
      settings: {
        foreground: colors.scope09,
        fontStyle: "",
      },
    },
  ];
};
