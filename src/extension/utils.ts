import { GetResponseTypeFromEndpointMethod } from "@octokit/types";
import { writeFile } from "fs";
import { ColorThemeKind, ConfigurationTarget, window, workspace } from "vscode";
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
import { getOctokit } from "../api";
import {
  getAuxiliaryThemeObject,
  prepareAuxiliaryTheme,
  prepareAuxiliaryThemeOffline,
  prepareAuxiliaryThemeRegistries,
  prepareAuxiliaryThemeRegistriesOffline,
} from "../data";
import { l10nT } from "../l10n";
import { updateBridge } from "../main";
import { defaultConfig } from "../modern";
import { getStyles } from "../modern/variants";
import { getThemeObject } from "../theme";
import { configureSettings } from "../theme/configs";
import {
  showErrorNotification,
  showInformationNotification,
  showWarningNotification,
} from "./notifications";
import {
  getIsConfiguredFromCommand,
  getOnlineAvailability,
  setIsConfiguredFromCommand,
  setOnlineAvailability,
} from "./sharedState";
import { getStateObject } from "./state";
import { UpdateReason, updateReasonMessages } from "./updateMessage";

export const checkAvailability = async (): Promise<void> => {
  const octokit = getOctokit();
  type GetRateLimitType = GetResponseTypeFromEndpointMethod<typeof octokit.rateLimit.get>;
  if (octokit) {
    await octokit.rateLimit
      .get()
      .then((response: GetRateLimitType) => {
        if (response.data.rate.remaining > 0) {
          setOnlineAvailability(true);
        } else {
          setOnlineAvailability(false);
          showWarningNotification(l10nT("message.error.apiRateLimitExceeded"), null, null);
        }
        return;
      })
      .catch(() => {
        setOnlineAvailability(false);
        showWarningNotification(l10nT("notification.network.offline"), null, null);
      });
  }
};

export const verifyState = (config?: Config): boolean => {
  return JSON.stringify(getStateObject().config) === JSON.stringify(config ? config : getConfig());
};

export const isUntouched = (): boolean => {
  return getStateObject().isUntouched;
};

export const getActiveVariant = (): Variant | undefined => {
  // Get if autoDetectColorScheme is enabled
  const autoDetectColorScheme = workspace
    .getConfiguration("window")
    .get<boolean>("autoDetectColorScheme");
  // Error out if autoDetectColorScheme is undefined
  if (autoDetectColorScheme === undefined) {
    throw new Error("autoDetectColorScheme is undefined");
  }
  // Get the active color theme kind
  const activeThemeKind = window.activeColorTheme.kind;
  // If autoDetectColorScheme is enabled
  if (autoDetectColorScheme) {
    switch (activeThemeKind) {
      case ColorThemeKind.Dark:
      case ColorThemeKind.HighContrast: {
        // Get preferredDarkColorTheme
        const preferredDarkColorTheme = workspace
          .getConfiguration("workbench")
          .get<string>("preferredDarkColorTheme");
        // Error out if preferredDarkColorTheme is undefined
        if (!preferredDarkColorTheme) {
          throw new Error("preferredDarkColorTheme is undefined");
        }
        // Check if theme is Modern
        return preferredDarkColorTheme.startsWith("Codemos Modern") ? "dark" : undefined;
      }
      case ColorThemeKind.Light:
      case ColorThemeKind.HighContrastLight: {
        // Get preferredLightColorTheme
        const preferredLightColorTheme = workspace
          .getConfiguration("workbench")
          .get<string>("preferredLightColorTheme");
        // Error out if preferredLightColorTheme is undefined
        if (!preferredLightColorTheme) {
          throw new Error("preferredLightColorTheme is undefined");
        }
        // Check if theme is Modern
        return preferredLightColorTheme.startsWith("Codemos Modern") ? "light" : undefined;
      }
      default:
        return undefined;
    }
  } else {
    const activeColorTheme = workspace.getConfiguration("workbench").get<string>("colorTheme");
    if (!activeColorTheme) {
      return undefined;
    }
    switch (activeThemeKind) {
      case ColorThemeKind.Dark:
      case ColorThemeKind.HighContrast:
        // Check if theme is Modern
        return activeColorTheme.startsWith("Codemos Modern") ? "dark" : undefined;
      case ColorThemeKind.Light:
      case ColorThemeKind.HighContrastLight:
        return activeColorTheme.startsWith("Codemos Modern") ? "light" : undefined;
      default:
        return undefined;
    }
  }
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
      design: extensionSection.get<Design>("dark.design", defaultConfig.dark.design),
      accentColor: extensionSection.get<string>("dark.accentColor", defaultConfig.dark.accentColor),
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
      design: extensionSection.get<Design>("light.design", defaultConfig.dark.design),
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
  await variantSection.update(`auxiliaryUiTheme`, auxiliaryUiTheme, ConfigurationTarget.Global);
  await variantSection.update(`design`, design, ConfigurationTarget.Global);
  await variantSection.update(`accentColor`, accentColorHex7, ConfigurationTarget.Global);
  await variantSection.update(`adaptiveMode`, adaptiveMode, ConfigurationTarget.Global);
  await variantSection.update(`auxiliaryCodeTheme`, auxiliaryCodeTheme, ConfigurationTarget.Global);
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
  let isOnlineAvailable = getOnlineAvailability();
  if (!getIsConfiguredFromCommand()) {
    await checkAvailability();
    isOnlineAvailable = getOnlineAvailability();
    if (isOnlineAvailable) {
      const success = await prepareAuxiliaryThemeRegistries(config.auxiliaryThemeRegistries);
      if (!success) {
        return;
      }
    } else {
      const success = prepareAuxiliaryThemeRegistriesOffline(config.auxiliaryThemeRegistries);
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
        if (isOnlineAvailable) {
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
        if (isOnlineAvailable) {
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
        updateReasonMessages[updateReason],
        ["Apply", "Later"],
        "workbench.action.reloadWindow",
      );
    }
  });
  if (getIsConfiguredFromCommand()) {
    setIsConfiguredFromCommand(false);
  }
};

export const updateSettings = (config: Config, activeVariant: Variant | undefined) => {
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
  return writeFile(themePath, JSON.stringify(themeObject, null, 2), (error) => {
    if (error) {
      showErrorNotification(
        l10nT("notification.error.writingFailed$msg", [error.message]),
        null,
        null,
      );
    }
  });
};
