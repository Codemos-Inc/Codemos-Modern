import { GetResponseTypeFromEndpointMethod } from "@octokit/types";
import { writeFile } from "fs";
import { ColorThemeKind, ConfigurationTarget, window, workspace } from "vscode";
import {
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
  getAuxThemeObj,
  prepAuxTheme,
  prepAuxThemeOffline,
  prepAuxThemeRegs,
  prepAuxThemeRegsOffline,
} from "../data";
import { l10nT } from "../l10n";
import { updateBridge } from "../main";
import { defaultConfig } from "../modern";
import { getStyles } from "../modern/variants";
import { getThemeObj } from "../theme";
import { configureSettings } from "../theme/configs";
import {
  showErrorNotification,
  showInfoNotification,
  showWarningNotification,
} from "./notifications";
import {
  getIsConfiguredFromCmd,
  getOnlineAvail,
  setIsConfiguredFromCmd,
  setOnlineAvail,
} from "./sharedState";
import { getStateObj } from "./state";
import { UpdateReason, updateReasonMessages } from "./updateMessage";

export const checkAvail = async (): Promise<void> => {
  const octokit = getOctokit();
  type GetRateLimitType = GetResponseTypeFromEndpointMethod<typeof octokit.rateLimit.get>;
  if (octokit) {
    await octokit.rateLimit
      .get()
      .then((response: GetRateLimitType) => {
        if (response.data.rate.remaining > 0) {
          setOnlineAvail(true);
        } else {
          setOnlineAvail(false);
          showWarningNotification(l10nT("notification.msg.apiRateLimit"), null, null);
        }
        return;
      })
      .catch(() => {
        setOnlineAvail(false);
        showWarningNotification(l10nT("notification.full.offline"), null, null);
      });
  }
};

export const verifyState = (config?: Config): boolean => {
  return JSON.stringify(getStateObj().config) === JSON.stringify(config ? config : getConfig());
};

export const isUntouched = (): boolean => {
  return getStateObj().isUntouched;
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
  const extSection = workspace.getConfiguration("codemosModern");
  return {
    auxiliaryThemeRegistries: extSection.get<string[]>(
      "auxiliaryThemeRegistries",
      defaultConfig.auxiliaryThemeRegistries,
    ),
    textDecorations: {
      strikeThrough: extSection.get<boolean>(
        "textDecorations.strikeThrough",
        defaultConfig.textDecorations.strikeThrough,
      ),
      bold: extSection.get<boolean>("textDecorations.bold", defaultConfig.textDecorations.bold),
      italic: extSection.get<boolean>(
        "textDecorations.italic",
        defaultConfig.textDecorations.italic,
      ),
      underline: extSection.get<boolean>(
        "textDecorations.underline",
        defaultConfig.textDecorations.underline,
      ),
      forComments: extSection.get<Decoration[]>(
        "textDecorations.forComments",
        defaultConfig.textDecorations.forComments,
      ),
    },
    dark: {
      auxiliaryUiTheme: extSection.get<string | null>(
        "dark.auxiliaryUiTheme",
        defaultConfig.dark.auxiliaryUiTheme,
      ),
      design: extSection.get<Design>("dark.design", defaultConfig.dark.design),
      accentColor: extSection.get<string>("dark.accentColor", defaultConfig.dark.accentColor),
      adaptationColor: extSection.get<string>(
        "dark.adaptationColor",
        defaultConfig.dark.adaptationColor,
      ),
      adaptationIntensity: extSection.get<number>(
        "dark.adaptationIntensity",
        defaultConfig.dark.adaptationIntensity,
      ),
      auxiliaryCodeTheme: extSection.get<string | null>(
        "dark.auxiliaryCodeTheme",
        defaultConfig.dark.auxiliaryCodeTheme,
      ),
    },
    light: {
      auxiliaryUiTheme: extSection.get<string | null>(
        "light.auxiliaryUiTheme",
        defaultConfig.light.auxiliaryUiTheme,
      ),
      design: extSection.get<Design>("light.design", defaultConfig.dark.design),
      accentColor: extSection.get<string>("light.accentColor", defaultConfig.light.accentColor),
      adaptationColor: extSection.get<string>(
        "light.adaptationColor",
        defaultConfig.light.adaptationColor,
      ),
      adaptationIntensity: extSection.get<number>(
        "light.adaptationIntensity",
        defaultConfig.light.adaptationIntensity,
      ),
      auxiliaryCodeTheme: extSection.get<string | null>(
        "light.auxiliaryCodeTheme",
        defaultConfig.light.auxiliaryCodeTheme,
      ),
    },
  };
};

export const updateConfig = async (
  variant: Variant,
  auxUiTheme: string | null,
  design: Design,
  accentColor: string,
  adaptationColor: string,
  adaptationIntensity: number,
  auxCodeTheme: string | null,
) => {
  const variantSection = workspace.getConfiguration(`codemosModern.${variant}`);
  await variantSection.update(`auxiliaryUiTheme`, auxUiTheme, ConfigurationTarget.Global);
  await variantSection.update(`design`, design, ConfigurationTarget.Global);
  await variantSection.update(`accentColor`, accentColor, ConfigurationTarget.Global);
  await variantSection.update(`adaptationColor`, adaptationColor, ConfigurationTarget.Global);
  await variantSection.update(
    `adaptationIntensity`,
    adaptationIntensity,
    ConfigurationTarget.Global,
  );
  await variantSection.update(`auxiliaryCodeTheme`, auxCodeTheme, ConfigurationTarget.Global);
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
  let isOnlineAvail = getOnlineAvail();
  if (!getIsConfiguredFromCmd()) {
    await checkAvail();
    isOnlineAvail = getOnlineAvail();
    if (isOnlineAvail) {
      const success = await prepAuxThemeRegs(config.auxiliaryThemeRegistries);
      if (!success) {
        return;
      }
    } else {
      const success = prepAuxThemeRegsOffline(config.auxiliaryThemeRegistries);
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
      auxUiThemeObj: null,
      auxCodeThemeObj: null,
    };
    if (themeContext.variantConfig.auxiliaryUiTheme) {
      if (!getIsConfiguredFromCmd()) {
        if (isOnlineAvail) {
          const success = await prepAuxTheme(
            config.auxiliaryThemeRegistries,
            themeContext.variantConfig.auxiliaryUiTheme,
            themeContext.variant,
          );
          if (!success) {
            return false;
          }
        } else {
          const success = await prepAuxThemeOffline(
            config.auxiliaryThemeRegistries,
            themeContext.variantConfig.auxiliaryUiTheme,
            themeContext.variant,
          );
          if (!success) {
            return false;
          }
        }
      }
      themeContext.auxUiThemeObj = await getAuxThemeObj(
        themeContext.variantConfig.auxiliaryUiTheme,
      );
    }
    if (themeContext.variantConfig.auxiliaryCodeTheme) {
      if (!getIsConfiguredFromCmd()) {
        if (isOnlineAvail) {
          const success = await prepAuxTheme(
            config.auxiliaryThemeRegistries,
            themeContext.variantConfig.auxiliaryCodeTheme,
            themeContext.variant,
          );
          if (!success) {
            return false;
          }
        } else {
          const success = await prepAuxThemeOffline(
            config.auxiliaryThemeRegistries,
            themeContext.variantConfig.auxiliaryCodeTheme,
            themeContext.variant,
          );
          if (!success) {
            return false;
          }
        }
      }
      themeContext.auxCodeThemeObj = await getAuxThemeObj(
        themeContext.variantConfig.auxiliaryCodeTheme,
      );
    }
    writeThemeFile(themePaths[variant], getThemeObj(themeContext));
    return true;
  });
  Promise.all(promises).then((onFullFilled) => {
    const allSuccess = onFullFilled.every((result) => {
      return result === true;
    });
    if (allSuccess && updateTarget !== "none") {
      showInfoNotification(
        updateReasonMessages[updateReason],
        ["Apply", "Later"],
        "workbench.action.reloadWindow",
      );
    }
  });
  if (getIsConfiguredFromCmd()) {
    setIsConfiguredFromCmd(false);
  }
};

export const updateSettings = (config: Config, activeVariant: Variant | undefined) => {
  if (activeVariant) {
    const themeContext: ThemeContext = {
      textDecorations: config.textDecorations,
      variant: activeVariant,
      variantConfig: config[activeVariant] as VariantConfig,
      styles: getStyles(activeVariant, config),
      auxUiThemeObj: null,
      auxCodeThemeObj: null,
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

const writeThemeFile = (themePath: string, themeObj: object) => {
  return writeFile(themePath, JSON.stringify(themeObj, null, 2), (error) => {
    if (error) {
      showErrorNotification(
        l10nT("notification.lead.writingFailed$msg", [error.message]),
        null,
        null,
      );
    }
  });
};
