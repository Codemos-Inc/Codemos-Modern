import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Keys
    {
      scope: ["meta.embedded.block.perl constant.other.key", "source.perl constant.other.key"],
      settings: {
        foreground: colors.s11,
        fontStyle: "",
      },
    },
  ];
};
