import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Operators
    {
      scope: ["source.vue meta.attribute"],
      settings: {
        foreground: colors.scope17,
        fontStyle: "",
      },
    },
  ];
};
