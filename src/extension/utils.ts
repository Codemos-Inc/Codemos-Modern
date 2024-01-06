import { writeFile } from "fs";
import { get } from "https";
import { ConfigurationTarget, workspace } from "vscode";
import {
  AdaptiveMode,
  Config,
  Decoration,
  Design,
  ThemeContext,
  ThemePaths,
  Variant,
  VariantConfig,
} from "../@types";
import {
  getAuxiliaryThemeObject,
  prepareAuxiliaryTheme,
  prepareAuxiliaryThemeOffline,
  prepareAuxiliaryThemeRegistries,
  prepareAuxiliaryThemeRegistriesOffline,
} from "../data";
import { updateBridge } from "../main";
import { defaultConfig } from "../modern";
import { getStyles } from "../modern/variants";
import { getThemeObject } from "../theme";
import { configureSettings } from "../theme/configs";
import { UpdateReason } from "./enums";
import { offlineModeActive } from "./messages";
import {
  showErrorNotification,
  showInformationNotification,
  showWarningNotification,
} from "./notifications";
import {
  getIsConfiguredFromCommand,
  getIsOfflineMode,
  setIsConfiguredFromCommand,
  setIsOfflineMode,
} from "./sharedState";
import { getStateObject } from "./state";

export const checkInternetConnection = (): Promise<void> => {
  return new Promise((resolve) => {
    get("https://www.github.com", () => {
      setIsOfflineMode(false);
      resolve();
    }).on("error", () => {
      showWarningNotification(offlineModeActive(), null, null);
      setIsOfflineMode(true);
      resolve();
    });
  });
};

export const verifyState = (config?: Config): boolean => {
  return (
    JSON.stringify(getStateObject().config) ===
    JSON.stringify(config ? config : getConfig())
  );
};

export const isUntouched = (): boolean => {
  return getStateObject().isUntouched;
};

export const getConfig = (): Config => {
  const extensionSection = workspace.getConfiguration("codemosModern");
  return {
    auxiliaryThemeRegistries: extensionSection.get<string[]>(
      "auxiliaryThemeRegistries",
      defaultConfig.auxiliaryThemeRegistries,
    ),
    textDecorations: {
      strikeThrough: extensionSection.get<boolean>(
        "textDecorations.strikeThrough",
        defaultConfig.textDecorations.strikeThrough,
      ),
      bold: extensionSection.get<boolean>(
        "textDecorations.bold",
        defaultConfig.textDecorations.bold,
      ),
      italic: extensionSection.get<boolean>(
        "textDecorations.italic",
        defaultConfig.textDecorations.italic,
      ),
      underline: extensionSection.get<boolean>(
        "textDecorations.underline",
        defaultConfig.textDecorations.underline,
      ),
      forComments: extensionSection.get<Decoration[]>(
        "textDecorations.forComments",
        defaultConfig.textDecorations.forComments,
      ),
    },
    dark: {
      auxiliaryUiTheme: extensionSection.get<string | null>(
        "dark.auxiliaryUiTheme",
        defaultConfig.dark.auxiliaryUiTheme,
      ),
      design: extensionSection.get<Design>(
        "dark.design",
        defaultConfig.dark.design,
      ),
      accentColor: extensionSection.get<string>(
        "dark.accentColor",
        defaultConfig.dark.accentColor,
      ),
      adaptiveMode: extensionSection.get<AdaptiveMode>(
        "dark.adaptiveMode",
        defaultConfig.dark.adaptiveMode,
      ),
      auxiliaryCodeTheme: extensionSection.get<string | null>(
        "dark.auxiliaryCodeTheme",
        defaultConfig.dark.auxiliaryCodeTheme,
      ),
    },
    light: {
      auxiliaryUiTheme: extensionSection.get<string | null>(
        "light.auxiliaryUiTheme",
        defaultConfig.light.auxiliaryUiTheme,
      ),
      design: extensionSection.get<Design>(
        "light.design",
        defaultConfig.dark.design,
      ),
      accentColor: extensionSection.get<string>(
        "light.accentColor",
        defaultConfig.light.accentColor,
      ),
      adaptiveMode: extensionSection.get<AdaptiveMode>(
        "light.adaptiveMode",
        defaultConfig.light.adaptiveMode,
      ),
      auxiliaryCodeTheme: extensionSection.get<string | null>(
        "light.auxiliaryCodeTheme",
        defaultConfig.light.auxiliaryCodeTheme,
      ),
    },
  };
};

export const updateConfig = async (
  variant: Variant,
  auxiliaryUiTheme: string | null,
  design: Design,
  accentColorHex7: string,
  adaptiveMode: AdaptiveMode,
  auxiliaryCodeTheme: string | null,
) => {
  const variantSection = workspace.getConfiguration(`codemosModern.${variant}`);
  await variantSection.update(
    `auxiliaryUiTheme`,
    auxiliaryUiTheme,
    ConfigurationTarget.Global,
  );
  await variantSection.update(`design`, design, ConfigurationTarget.Global);
  await variantSection.update(
    `accentColor`,
    accentColorHex7,
    ConfigurationTarget.Global,
  );
  await variantSection.update(
    `adaptiveMode`,
    adaptiveMode,
    ConfigurationTarget.Global,
  );
  await variantSection.update(
    `auxiliaryCodeTheme`,
    auxiliaryCodeTheme,
    ConfigurationTarget.Global,
  );
  await updateBridge(variant, UpdateReason.CONFIG_CHANGE);
};

export const updateModern = async (
  updateTarget: "none" | "all" | Variant,
  updateReason: UpdateReason,
  config: Config,
  themePaths: ThemePaths,
  activeVariant: Variant | undefined,
) => {
  updateSettings(config, activeVariant);
  let variants: Variant[];
  switch (updateTarget) {
    case "none":
      variants = [];
      break;
    case "all":
      variants = ["dark", "light"];
      break;
    default:
      variants = [updateTarget];
  }
  let isOfflineMode = getIsOfflineMode();
  if (!getIsConfiguredFromCommand()) {
    await checkInternetConnection();
    isOfflineMode = getIsOfflineMode();
    if (!isOfflineMode) {
      const success = await prepareAuxiliaryThemeRegistries(
        config.auxiliaryThemeRegistries,
      );
      if (!success) {
        return;
      }
    } else {
      const success = prepareAuxiliaryThemeRegistriesOffline(
        config.auxiliaryThemeRegistries,
      );
      if (!success) {
        return;
      }
    }
  }
  const promises = variants.map(async (variant: Variant) => {
    const themeContext: ThemeContext = {
      textDecorations: config.textDecorations,
      variant: variant,
      variantConfig: config[variant] as VariantConfig,
      styles: getStyles(variant, config),
      auxiliaryUiThemeObject: null,
      auxiliaryCodeThemeObject: null,
    };
    if (themeContext.variantConfig.auxiliaryUiTheme) {
      if (!getIsConfiguredFromCommand()) {
        if (!isOfflineMode) {
          const success = await prepareAuxiliaryTheme(
            config.auxiliaryThemeRegistries,
            themeContext.variantConfig.auxiliaryUiTheme,
            themeContext.variant,
          );
          if (!success) {
            return false;
          }
        } else {
          const success = await prepareAuxiliaryThemeOffline(
            config.auxiliaryThemeRegistries,
            themeContext.variantConfig.auxiliaryUiTheme,
            themeContext.variant,
          );
          if (!success) {
            return false;
          }
        }
      }
      themeContext.auxiliaryUiThemeObject = await getAuxiliaryThemeObject(
        themeContext.variantConfig.auxiliaryUiTheme,
      );
    }
    if (themeContext.variantConfig.auxiliaryCodeTheme) {
      if (!getIsConfiguredFromCommand()) {
        if (!isOfflineMode) {
          const success = await prepareAuxiliaryTheme(
            config.auxiliaryThemeRegistries,
            themeContext.variantConfig.auxiliaryCodeTheme,
            themeContext.variant,
          );
          if (!success) {
            return false;
          }
        } else {
          const success = await prepareAuxiliaryThemeOffline(
            config.auxiliaryThemeRegistries,
            themeContext.variantConfig.auxiliaryCodeTheme,
            themeContext.variant,
          );
          if (!success) {
            return false;
          }
        }
      }
      themeContext.auxiliaryCodeThemeObject = await getAuxiliaryThemeObject(
        themeContext.variantConfig.auxiliaryCodeTheme,
      );
    }
    writeThemeFile(themePaths[variant], getThemeObject(themeContext));
    return true;
  });
  Promise.all(promises).then((onFullFilled) => {
    const allSuccess = onFullFilled.every((result) => {
      return result === true;
    });
    if (allSuccess && updateTarget !== "none") {
      showInformationNotification(
        updateReason,
        ["Apply", "Later"],
        "workbench.action.reloadWindow",
      );
    }
  });
  if (getIsConfiguredFromCommand()) {
    setIsConfiguredFromCommand(false);
  }
};

export const updateSettings = (
  config: Config,
  activeVariant: Variant | undefined,
) => {
  if (activeVariant) {
    const themeContext: ThemeContext = {
      textDecorations: config.textDecorations,
      variant: activeVariant,
      variantConfig: config[activeVariant] as VariantConfig,
      styles: getStyles(activeVariant, config),
      auxiliaryUiThemeObject: null,
      auxiliaryCodeThemeObject: null,
    };
    if (!themeContext.variantConfig.auxiliaryUiTheme) {
      configureSettings(themeContext);
    } else {
      configureSettings(null);
    }
  } else {
    configureSettings(null);
  }
};

const writeThemeFile = (themePath: string, themeObject: object) => {
  return writeFile(themePath, JSON.stringify(themeObject, null, 2), (err) => {
    if (err) {
      showErrorNotification(err.message, null, null);
    }
  });
};
