import { ThemeContext } from "../@types";
import { toggleFirstLetterCase } from "../extension/helpers";
import { getRules } from "./rules";

export const getThemeObject = (themeContext: ThemeContext): object => {
  return {
    $schema: "vscode://schemas/color-theme",
    name: `Codemos Modern (${toggleFirstLetterCase(themeContext.variant)})`,
    type: `${themeContext.variant}`,
    semanticHighlighting: true,
    ...getRules(themeContext),
  };
};
