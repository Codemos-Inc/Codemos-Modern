import { ThemeContext } from "../../@types";
import { configureExtensionSettings } from "./other";

export const configureSettings = (themeContext: ThemeContext | null): void => {
  configureExtensionSettings(themeContext);
};
