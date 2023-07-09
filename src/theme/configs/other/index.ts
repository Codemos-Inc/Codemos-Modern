import { ThemeContext } from "../../../@types";
import { configureExtensionSettings as configureMaterialIconThemeSettings } from "./extensions/materialIconTheme";

export const configureExtensionSettings = (
  themeContext: ThemeContext,
  toDefaults: boolean
): void => {
  configureMaterialIconThemeSettings(themeContext, toDefaults);
};
