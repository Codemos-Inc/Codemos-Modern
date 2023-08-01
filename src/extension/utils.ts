import { writeFile } from "fs";
import { ConfigurationTarget, workspace } from "vscode";
import {
  AdaptiveMode,
  Config,
  ThemeContext,
  ThemePaths,
  Variant,
  VariantConfig,
} from "../@types";
import {
  getAuxiliaryThemeObject,
  prepareAuxiliaryTheme,
  prepareAuxiliaryThemeRegistries,
} from "../data";
import { defaultConfig } from "../modern";
import { getStyles } from "../modern/variants";
import { getThemeObject } from "../theme";
import { configureSettings } from "../theme/configs";
import { UpdateReason } from "./enums";
import {
  showErrorNotification,
  showInformationNotification,
} from "./notifications";
import {
  getIsConfiguredFromCommand,
  setIsConfiguredFromCommand,
} from "./sharedState";
import { getStateObject } from "./state";

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
    dark: {
      auxiliaryUiTheme: extensionSection.get<string | null>(
        "dark.auxiliaryUiTheme",
        defaultConfig.dark.auxiliaryUiTheme,
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

export const updateConfig = (
  variant: Variant,
  auxiliaryUiTheme: string | null,
  accentColorHex7: string,
  adaptiveMode: AdaptiveMode,
  auxiliaryCodeTheme: string | null,
) => {
  const variantSection = workspace.getConfiguration(`codemosModern.${variant}`);
  variantSection.update(
    `auxiliaryUiTheme`,
    auxiliaryUiTheme,
    ConfigurationTarget.Global,
  );
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
  variantSection.update(
    `auxiliaryCodeTheme`,
    auxiliaryCodeTheme,
    ConfigurationTarget.Global,
  );
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
  if (!getIsConfiguredFromCommand()) {
    const success = await prepareAuxiliaryThemeRegistries(
      config.auxiliaryThemeRegistries,
    );
    if (!success) {
      return;
    }
  }
  const promises = variants.map(async (variant: Variant) => {
    const themeContext: ThemeContext = {
      variant: variant,
      variantConfig: config[variant] as VariantConfig,
      styles: getStyles(variant, config),
      auxiliaryUiThemeObject: null,
      auxiliaryCodeThemeObject: null,
    };
    if (themeContext.variantConfig.auxiliaryUiTheme) {
      if (!getIsConfiguredFromCommand()) {
        const success = await prepareAuxiliaryTheme(
          themeContext.variantConfig.auxiliaryUiTheme,
          themeContext.variant,
        );
        if (!success) {
          return false;
        }
      }
      themeContext.auxiliaryUiThemeObject = await getAuxiliaryThemeObject(
        themeContext.variantConfig.auxiliaryUiTheme,
      );
    }
    if (themeContext.variantConfig.auxiliaryCodeTheme) {
      if (!getIsConfiguredFromCommand()) {
        const success = await prepareAuxiliaryTheme(
          themeContext.variantConfig.auxiliaryCodeTheme,
          themeContext.variant,
        );
        if (!success) {
          return false;
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
