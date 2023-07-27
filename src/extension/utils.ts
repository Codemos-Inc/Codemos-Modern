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
    auxiliaryThemeRegistries: extensionSection.get<string[]>(
      "auxiliaryThemeRegistries",
      defaultConfig.auxiliaryThemeRegistries,
    ),
    dark: {
      accentColor: extensionSection.get<string>(
        "dark.accentColor",
        defaultConfig.dark.accentColor,
      ),
      codeTheme: extensionSection.get<string | null>(
        "dark.codeTheme",
        defaultConfig.dark.codeTheme,
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
      codeTheme: extensionSection.get<string | null>(
        "light.codeTheme",
        defaultConfig.light.codeTheme,
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
  codeTheme: string | null,
  adaptiveMode: AdaptiveMode,
) => {
  const variantSection = workspace.getConfiguration(`codemosModern.${variant}`);
  variantSection.update(
    `accentColor`,
    accentColorHex7,
    ConfigurationTarget.Global,
  );
  variantSection.update(`codeTheme`, codeTheme, ConfigurationTarget.Global);
  variantSection.update(
    `adaptiveMode`,
    adaptiveMode,
    ConfigurationTarget.Global,
  );
};

export const updateModern = async (
  updateTarget: "none" | "all" | Variant,
  updateReason: UpdateReason,
  calledFromCommand: boolean,
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
  if (!calledFromCommand) {
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
      codeThemeObject: null,
    };
    if (themeContext.variantConfig.codeTheme) {
      prepareAuxiliaryTheme(
        themeContext.variantConfig.codeTheme,
        themeContext.variant,
      );
      themeContext.codeThemeObject = getAuxiliaryThemeObject(
        themeContext.variantConfig.codeTheme,
      );
    }
    return writeThemeFile(themePaths[variant], getThemeObject(themeContext));
  });
  Promise.all(promises).then(() => {
    showInformationNotification(
      updateReason,
      ["Apply", "Later"],
      "workbench.action.reloadWindow",
    );
  });
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
      codeThemeObject: null,
    };
    configureSettings(themeContext);
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
