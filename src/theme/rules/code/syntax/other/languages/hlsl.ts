import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Square brackets
    {
      scope: ["source.hlsl support.variable"],
      settings: {
        foreground: colors.s13,
        fontStyle: "",
      },
    },
  ];
};
