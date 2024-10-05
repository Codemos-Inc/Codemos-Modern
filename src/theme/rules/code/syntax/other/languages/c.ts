import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Square brackets
    {
      scope: [
        "meta.embedded.block.c storage.modifier.array.bracket",
        "source.c storage.modifier.array.bracket",
      ],
      settings: {
        foreground: colors.sxx,
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
        foreground: colors.s01,
        fontStyle: "",
      },
    },
  ];
};
