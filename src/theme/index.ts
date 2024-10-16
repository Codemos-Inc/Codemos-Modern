import { ThemeContext } from "../@types";
import { toggleInitialCase } from "../extension/helpers";
import { getRules } from "./rules";

export const getThemeObj = (themeContext: ThemeContext): object => {
  return {
    $schema: "vscode://schemas/color-theme",
    name: `Codemos Modern (${toggleInitialCase(themeContext.variant)})`,
    type: `${themeContext.variant}`,
    ...getRules(themeContext),
  };
};
