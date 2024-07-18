import { ThemeContext } from "../../@types/index";
import { configureExtensionSettings } from "./other/index";

export const configureSettings = (themeContext: ThemeContext | null): void => {
  configureExtensionSettings(themeContext);
};
