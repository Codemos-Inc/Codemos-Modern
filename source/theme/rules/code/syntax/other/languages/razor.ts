import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  return [
    // Section names
    {
      scope: [
        "variable.other.cshtml.directive.sectionName",
        "variable.other.razor.directive.sectionName",
      ],
      settings: {
        foreground: colors.scope16,
        fontStyle: "",
      },
    },
  ];
};
