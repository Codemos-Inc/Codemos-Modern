import { ThemeContext } from "../@types/index";
import { toggleFirstLetterCase } from "../extension/helpers";
import { getRules } from "./rules/index";

export const getThemeObject = (themeContext: ThemeContext): object => {
  return {
    $schema: "vscode://schemas/color-theme",
    name: `Codemos Modern (${toggleFirstLetterCase(themeContext.variant)})`,
    type: `${themeContext.variant}`,
    ...getRules(themeContext),
  };
};
