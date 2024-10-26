import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Square brackets
    {
      scope: [
        "meta.embedded.block.c storage.modifier.array.bracket",
        "source.c storage.modifier.array.bracket",
      ],
      settings: {
        foreground: colors.scope17,
        fontStyle: "",
      },
    },
    // New/Delete operators
    {
      scope: [
        "meta.embedded.block.c keyword.operator.delete",
        "meta.embedded.block.c keyword.operator.new",
        "source.c keyword.operator.delete",
        "source.c keyword.operator.new",
      ],
      settings: {
        foreground: colors.scope01,
        fontStyle: "",
      },
    },
  ];
};
