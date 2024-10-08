import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Attributes (Properties)
    {
      scope: [
        "meta.embedded.block.lua entity.other.attribute",
        "source.lua entity.other.attribute",
      ],
      settings: {
        foreground: colors.s11,
        fontStyle: "",
      },
    },
  ];
};
