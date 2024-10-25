import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Annotation modifiers
    {
      scope: [
        "meta.embedded.block.java meta.declaration.annotation storage.modifier",
        "source.java meta.declaration.annotation storage.modifier",
      ],
      settings: {
        foreground: colors.scope09,
      },
    },
    // Types
    {
      scope: ["meta.embedded.block.java storage.type", "source.java storage.type"],
      settings: {
        foreground: colors.scope03,
      },
    },
    // Storage keywords
    {
      scope: ["meta.embedded.block.java storage.type.local", "source.java storage.type.local"],
      settings: {
        foreground: colors.scope06,
      },
    },
    // Operators
    {
      scope: [
        "meta.embedded.block.java keyword.control.ternary",
        "meta.embedded.block.java variable.language.wildcard",
        "source.java keyword.control.ternary",
        "source.java variable.language.wildcard",
      ],
      settings: {
        foreground: colors.scopeXX,
      },
    },
  ];
};
