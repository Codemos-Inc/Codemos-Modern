import { existsSync, writeFile, writeFileSync } from "fs";
import { join } from "path";
import { ConfigurationTarget, commands, window, workspace } from "vscode";
import { AdaptiveMode, Config, Variant } from "../@types/modern";
import { ThemePaths } from "../@types/theme";
import { defaultConfig } from "../modern";
import { getThemeObject } from "../theme";
import { UpdateReason } from "./enums";

export const isFreshInstall = (): boolean => {
  const manifestPath = join(__dirname, "..", ".manifest");
  if (existsSync(manifestPath)) {
    return false;
  } else {
    writeFileSync(manifestPath, "state=installed");
    return true;
  }
};

export const isDefaultConfig = (): boolean => {
  return getConfig() === defaultConfig;
};

export const getConfig = (): Config => {
  const extensionSection = workspace.getConfiguration("codemosModern");
  return {
    dark: {
      accentColor: extensionSection.get<string>(
        "dark.accentColor",
        defaultConfig.dark.accentColor
      ),
      adaptiveMode: extensionSection.get<AdaptiveMode>(
        "dark.adaptiveMode",
        defaultConfig.dark.adaptiveMode
      ),
    },
    light: {
      accentColor: extensionSection.get<string>(
        "light.accentColor",
        defaultConfig.light.accentColor
      ),
      adaptiveMode: extensionSection.get<AdaptiveMode>(
        "light.adaptiveMode",
        defaultConfig.light.adaptiveMode
      ),
    },
  };
};

export const updateConfig = (
  variant: Variant,
  accentColor: string,
  adaptiveMode: AdaptiveMode
) => {
  const variantSection = workspace.getConfiguration(`codemosModern.${variant}`);
  variantSection.update(
    `.accentColor`,
    accentColor,
    ConfigurationTarget.Global
  );
  variantSection.update(
    `.adaptiveMode`,
    adaptiveMode,
    ConfigurationTarget.Global
  );
};

export const updateThemes = async (
  config: Config,
  themePaths: ThemePaths,
  updateReason: UpdateReason
) => {
  const variants: Variant[] = ["dark", "light"];
  const promises = variants.map(async (variant: Variant) => {
    return writeThemeFile(themePaths[variant], getThemeObject(variant, config));
  });
  Promise.all(promises).then(() => {
    promptToReload(updateReason);
  });
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
