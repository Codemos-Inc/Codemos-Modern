import { writeFile } from "fs";
import { ConfigurationTarget, commands, window, workspace } from "vscode";
import {
  AdaptiveMode,
  Config,
  ThemeContext,
  ThemePaths,
  Variant,
} from "../@types";
import { defaultConfig } from "../modern";
import { getStyles } from "../modern/variants";
import { getThemeObject } from "../theme";
import { configureSettings } from "../theme/configs";
import { UpdateReason } from "./enums";
import { getStateObject } from "./state";

export const verifyState = (): boolean => {
  return (
    JSON.stringify(getStateObject().config) === JSON.stringify(getConfig())
  );
};

export const isUntouched = (): boolean => {
  return getStateObject().isUntouched;
};

export const getConfig = (): Config => {
  const extensionSection = workspace.getConfiguration("codemosModern");
  return {
    dark: {
      accentColor: extensionSection.get<string>(
        "dark.accentColor",
        defaultConfig.dark.accentColor,
      ),
      adaptiveMode: extensionSection.get<AdaptiveMode>(
        "dark.adaptiveMode",
        defaultConfig.dark.adaptiveMode,
      ),
    },
    light: {
      accentColor: extensionSection.get<string>(
        "light.accentColor",
        defaultConfig.light.accentColor,
      ),
      adaptiveMode: extensionSection.get<AdaptiveMode>(
        "light.adaptiveMode",
        defaultConfig.light.adaptiveMode,
      ),
    },
  };
};

export const updateConfig = (
  variant: Variant,
  accentColorHex7: string,
  adaptiveMode: AdaptiveMode,
) => {
  const variantSection = workspace.getConfiguration(`codemosModern.${variant}`);
  variantSection.update(
    `accentColor`,
    accentColorHex7,
    ConfigurationTarget.Global,
  );
  variantSection.update(
    `adaptiveMode`,
    adaptiveMode,
    ConfigurationTarget.Global,
  );
};

export const updateThemes = async (
  config: Config,
  themePaths: ThemePaths,
  updateReason: UpdateReason,
  activeColorTheme: Variant | undefined,
) => {
  updateThemeConfigs(config, activeColorTheme);
  const variants: Variant[] = ["dark", "light"];
  const promises = variants.map(async (variant: Variant) => {
    const themeContext: ThemeContext = {
      variantConfig: config[variant],
      variant: variant,
      styles: getStyles(variant, config),
    };
    return writeThemeFile(themePaths[variant], getThemeObject(themeContext));
  });
  Promise.all(promises).then(() => {
    promptToReload(updateReason);
  });
};

export const updateThemeConfigs = (
  config: Config,
  activeColorTheme: Variant | undefined,
) => {
  const variant = activeColorTheme ? activeColorTheme : "dark";
  const themeContext: ThemeContext = {
    variantConfig: config[variant],
    variant: variant,
    styles: getStyles(variant, config),
  };
  if (!activeColorTheme) {
    configureSettings(themeContext, true);
  } else {
    configureSettings(themeContext, false);
  }
};

const writeThemeFile = (themePath: string, themeObject: object) => {
  return writeFile(themePath, JSON.stringify(themeObject, null, 2), (err) => {
    if (err) {
      window.showErrorMessage(err.message);
    }
  });
};

const promptToReload = (updateReason: UpdateReason) => {
  const msg = `${updateReason}`;
  const actions = ["Apply", "Later"];
  window.showInformationMessage(msg, ...actions).then((selectedAction) => {
    if (selectedAction === actions[0]) {
      commands.executeCommand("workbench.action.reloadWindow");
    }
  });
};
