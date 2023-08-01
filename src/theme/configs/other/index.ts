import { ThemeContext } from "../../../@types";
import { configureExtensionSettings as configureMaterialIconThemeSettings } from "./extensions/materialIconTheme";

export const configureExtensionSettings = (
  themeContext: ThemeContext | null,
): void => {
  configureMaterialIconThemeSettings(themeContext);
};
