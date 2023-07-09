import { ThemeContext } from "../../@types";
import { configureExtensionSettings } from "./other";

export const configureSettings = (
  themeContext: ThemeContext,
  toDefaults: boolean
): void => {
  configureExtensionSettings(themeContext, toDefaults);
};
