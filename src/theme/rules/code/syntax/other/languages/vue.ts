import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Operators
    {
      scope: ["source.vue meta.attribute"],
      settings: {
        foreground: colors.scopeXX,
        fontStyle: "",
      },
    },
  ];
};
