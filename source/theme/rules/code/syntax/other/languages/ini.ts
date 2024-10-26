import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Attributes
    {
      scope: [
        "meta.embedded.block.ini keyword.other.definition",
        "source.ini keyword.other.definition",
      ],
      settings: {
        foreground: colors.scope05,
        fontStyle: "",
      },
    },
    // Section titles
    {
      scope: [
        "meta.embedded.block.ini entity.name.section.group-title",
        "source.ini entity.name.section.group-title",
      ],
      settings: {
        foreground: colors.scope09,
        fontStyle: "",
      },
    },
    // Section punctuations
    {
      scope: [
        "meta.embedded.block.ini punctuation.definition.entity",
        "source.ini punctuation.definition.entity",
      ],
      settings: {
        foreground: colors.scope01,
        fontStyle: "",
      },
    },
  ];
};
