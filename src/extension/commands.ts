import {
  ColorThemeKind,
  ConfigurationTarget,
  QuickPickItem,
  QuickPickItemKind,
  Uri,
  window,
  workspace,
} from "vscode";
import { AdaptiveMode, Design, Variant } from "../@types";
import { verifiedOwners } from "../auxiliary";
import { getMimicHex7, validateHex6 } from "../color";
import {
  getAllAuxiliaryThemeRegistryIndexes as getAuxiliaryThemeRegistryIndexes,
  prepareAuxiliaryTheme,
  prepareAuxiliaryThemeOffline,
  prepareAuxiliaryThemeRegistries,
  prepareAuxiliaryThemeRegistriesOffline,
} from "../data";
import { getAuxiliaryThemeId } from "../data/helpers";
import {
  mimic3Info as darkMimic,
  palette as darkPalette,
} from "../modern/variants/dark/modern";
import {
  mimic1Info as lightMimic,
  palette as lightPalette,
} from "../modern/variants/light/modern";
import { authenticate } from "./authentication";
import { NOTIFICATION_SIGNATURE } from "./constants";
import { toggleFirstLetterCase } from "./helpers";
import { generateAccentColorIcons, generateAdaptiveModeIcons } from "./icons";
import { showProgressNotification } from "./notifications";
import { getIsOfflineMode, setIsConfiguredFromCommand } from "./sharedState";
import { checkInternetConnection, getConfig, updateConfig } from "./utils";

export const authenticateCommand = async () => {
  await showProgressNotification(
    `${NOTIFICATION_SIGNATURE} Authenticating...`,
    async () => {
      const result = await authenticate(true);
      if (!result.success) {
        if (result.message) {
          window.showErrorMessage(result.message);
        }
      } else {
        window.showInformationMessage("Authenticated successfully!");
      }
    },
  );
};

export const configureCommand = async () => {
  await checkInternetConnection();
  const isOfflineMode = getIsOfflineMode();
  //
  const variantLabel = await getVariantLabel();
  if (!variantLabel) {
    return;
  }
  const variant = toggleFirstLetterCase(variantLabel) as Variant;
  //
  const auxiliaryUiThemeExtension = await getAuxiliaryThemeExtension(
    variant,
    "ui",
    isOfflineMode,
  );
  if (!auxiliaryUiThemeExtension) {
    return;
  }
  let auxiliaryUiTheme = null;
  if (auxiliaryUiThemeExtension !== "_") {
    const auxiliaryUiThemeCandidate = await getAuxiliaryTheme(
      variant,
      auxiliaryUiThemeExtension,
      "ui",
      isOfflineMode,
    );
    if (!auxiliaryUiThemeCandidate) {
      return;
    }
    auxiliaryUiTheme = auxiliaryUiThemeCandidate;
  }
  const designLabel = !auxiliaryUiTheme ? await getDesign(variant) : null;
  if (!designLabel && !auxiliaryUiTheme) {
    return;
  }
  let design = null;
  if (designLabel) {
    design = toggleFirstLetterCase(
      designLabel.replace(/\$\(.*\) /g, ""),
    ) as Design;
  }
  //
  const accentColorFromPalette = !auxiliaryUiTheme
    ? await getAccentColorFromPalette(variant)
    : null;
  if (!accentColorFromPalette && !auxiliaryUiTheme) {
    return;
  }
  let accentColor: string | null | undefined;
  if (accentColorFromPalette !== "_") {
    accentColor = accentColorFromPalette;
  } else {
    accentColor = !auxiliaryUiTheme ? await getAccentColor(variant) : null;
    if (!accentColor && !auxiliaryUiTheme) {
      return;
    }
  }
  //
  const adaptiveModeLabel = !auxiliaryUiTheme
    ? await getAdaptiveModeLabel(variant, accentColor!)
    : null;
  if (!adaptiveModeLabel && !auxiliaryUiTheme) {
    return;
  }
  let adaptiveMode = null;
  if (adaptiveModeLabel) {
    adaptiveMode = toggleFirstLetterCase(adaptiveModeLabel) as AdaptiveMode;
  }
  //
  const auxiliaryCodeThemeExtension = await getAuxiliaryThemeExtension(
    variant,
    "code",
    isOfflineMode,
  );
  if (!auxiliaryCodeThemeExtension) {
    return;
  }
  let auxiliaryCodeTheme = null;
  if (auxiliaryCodeThemeExtension !== "_") {
    const auxiliaryCodeThemeCandidate = await getAuxiliaryTheme(
      variant,
      auxiliaryCodeThemeExtension,
      "code",
      isOfflineMode,
    );
    if (!auxiliaryCodeThemeCandidate) {
      return;
    }
    auxiliaryCodeTheme = auxiliaryCodeThemeCandidate;
  }
  setIsConfiguredFromCommand(true);
  await updateConfig(
    variant,
    auxiliaryUiTheme,
    !design ? getConfig()[variant].design : design,
    !accentColor ? getConfig()[variant].accentColor : accentColor,
    !adaptiveMode ? getConfig()[variant].adaptiveMode : adaptiveMode,
    auxiliaryCodeTheme,
  );
  await workspace
    .getConfiguration("workbench")
    .update(
      "colorTheme",
      `Codemos Modern (${toggleFirstLetterCase(variant)})`,
      ConfigurationTarget.Global,
    );
};

const getVariantLabel = async () => {
  // 🟡 Hacky workaround for the vscode api not picking the correct icon based on the active ui theme
  let darkModeIconUri: Uri;
  let lightModeIconUri: Uri;
  switch (window.activeColorTheme.kind) {
    case ColorThemeKind.Dark || ColorThemeKind.HighContrast:
      darkModeIconUri = Uri.file(
        `${__dirname}/../../res/icons/dark/dark_mode.svg`,
      );
      lightModeIconUri = Uri.file(
        `${__dirname}/../../res/icons/dark/light_mode.svg`,
      );
      break;
    case ColorThemeKind.Light || ColorThemeKind.HighContrastLight:
      darkModeIconUri = Uri.file(
        `${__dirname}/../../res/icons/light/dark_mode.svg`,
      );
      lightModeIconUri = Uri.file(
        `${__dirname}/../../res/icons/light/light_mode.svg`,
      );
      break;
    default:
      darkModeIconUri = Uri.file(
        `${__dirname}/../../res/icons/dark/dark_mode.svg`,
      );
      lightModeIconUri = Uri.file(
        `${__dirname}/../../res/icons/dark/light_mode.svg`,
      );
      break;
  }
  const variant = await window.showQuickPick(
    [
      {
        label: "Dark",
        description: "Variant",
        detail: "Dark-intensive color scheme",
        iconPath: darkModeIconUri,
      },
      {
        label: "Light",
        description: "Variant",
        detail: "Light-intensive color scheme",
        iconPath: lightModeIconUri,
      },
    ],
    {
      title: "Codemos Modern: Variant",
      placeHolder: "Select a variant",
      ignoreFocusOut: true,
    },
  );
  if (!variant) {
    return undefined;
  }
  return variant.label;
};

const getDesign = async (variant: Variant) => {
  const design = await window.showQuickPick(
    [
      {
        label: "$(symbol-color) Modern",
        description: "Design",
        detail: "Modern's original design",
      },
      {
        label: "$(symbol-color) Minimal",
        description: "Design",
        detail: "Minimalistic design",
      },
    ],
    {
      title: `Codemos Modern (${toggleFirstLetterCase(variant)}): UI Theme`,
      placeHolder: "Select a design",
      ignoreFocusOut: true,
    },
  );
  if (!design) {
    return undefined;
  }
  return design.label;
};

const getAccentColorFromPalette = async (variant: Variant) => {
  const quickPick = window.createQuickPick();
  quickPick.title = `Codemos Modern (${toggleFirstLetterCase(
    variant,
  )}): UI Theme`;
  quickPick.placeholder = "Select an accent color";
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  prepareAccentColorIcons(variant);
  quickPick.items = [
    {
      label: "Custom",
      kind: QuickPickItemKind.Separator,
    },
    {
      label: "Custom",
      description: "Accent color",
      detail: "A color you specify",
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/accent_custom.svg`,
      ),
    },
    {
      label: "Palette",
      kind: QuickPickItemKind.Separator,
    },
    {
      label: "Brown",
      description: "Accent color",
      detail: `The color of ${
        variant === "dark" ? "antique brass" : "mud"
      } from the Modern's palette`,
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/accent_brown.svg`,
      ),
    },
    {
      label: "Red",
      description: "Accent color",
      detail: `The color of ${
        variant === "dark" ? "burnt sienna" : "guardsman red"
      } from the Modern's palette`,
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/accent_red.svg`,
      ),
    },
    {
      label: "Orange",
      description: "Accent color",
      detail: `The color of ${
        variant === "dark" ? "raw sienna" : "chelsea gem"
      } from the Modern's palette`,
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/accent_orange.svg`,
      ),
    },
    {
      label: "Yellow",
      description: "Accent color",
      detail: `The color of ${
        variant === "dark" ? "roti" : "olive"
      } from the Modern's palette`,
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/accent_yellow.svg`,
      ),
    },
    {
      label: "Green",
      description: "Accent color",
      detail: `The color of ${
        variant === "dark" ? "apple" : "camarone"
      } from the Modern's palette`,
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/accent_green.svg`,
      ),
    },
    {
      label: "Mint",
      description: "Accent color",
      detail: `The color of ${
        variant === "dark" ? "keppel" : "blue stone"
      } from the Modern's palette`,
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/accent_mint.svg`,
      ),
    },
    {
      label: "Blue",
      description: "Accent color",
      detail: `The color of ${
        variant === "dark" ? "Shakespeare" : "science blue"
      } from the Modern's palette`,
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/accent_blue.svg`,
      ),
    },
    {
      label: "Purple",
      description: "Accent color",
      detail: `The color of ${
        variant === "dark" ? "Portage" : "electric violet"
      } from the Modern's palette`,
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/accent_purple.svg`,
      ),
    },
    {
      label: "Pink",
      description: "Accent color",
      detail: `The color of ${
        variant === "dark" ? "brilliant rose" : "flirt"
      } from the Modern's palette`,
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/accent_pink.svg`,
      ),
    },
  ];
  quickPick.busy = false;
  return await new Promise<string | undefined>((resolve) => {
    quickPick.onDidAccept(() => {
      const selectedAccentColorLabel = quickPick.selectedItems[0].label;
      quickPick.dispose();
      if (selectedAccentColorLabel) {
        switch (variant) {
          case "dark":
            switch (selectedAccentColorLabel) {
              case "Custom":
                return resolve("_");
              case "Brown":
                return resolve(darkPalette.basic.def.brown);
              case "Red":
                return resolve(darkPalette.basic.def.red);
              case "Orange":
                return resolve(darkPalette.basic.def.orange);
              case "Yellow":
                return resolve(darkPalette.basic.def.yellow);
              case "Green":
                return resolve(darkPalette.basic.def.green);
              case "Mint":
                return resolve(darkPalette.basic.def.mint);
              case "Blue":
                return resolve(darkPalette.basic.def.blue);
              case "Purple":
                return resolve(darkPalette.basic.def.purple);
              case "Pink":
                return resolve(darkPalette.basic.def.pink);
              default:
                return resolve(undefined);
            }
          case "light":
            switch (selectedAccentColorLabel) {
              case "Custom":
                return resolve("_");
              case "Brown":
                return resolve(lightPalette.basic.def.brown);
              case "Red":
                return resolve(lightPalette.basic.def.red);
              case "Orange":
                return resolve(lightPalette.basic.def.orange);
              case "Yellow":
                return resolve(lightPalette.basic.def.yellow);
              case "Green":
                return resolve(lightPalette.basic.def.green);
              case "Mint":
                return resolve(lightPalette.basic.def.mint);
              case "Blue":
                return resolve(lightPalette.basic.def.blue);
              case "Purple":
                return resolve(lightPalette.basic.def.purple);
              case "Pink":
                return resolve(lightPalette.basic.def.pink);
              default:
                return resolve(undefined);
            }
          default:
            return resolve(undefined);
        }
      } else {
        return resolve(undefined);
      }
    });
  });
};

const prepareAccentColorIcons = (variant: Variant) => {
  let brown: string;
  let red: string;
  let orange: string;
  let yellow: string;
  let green: string;
  let mint: string;
  let blue: string;
  let purple: string;
  let pink: string;
  if (variant === "dark") {
    brown = darkPalette.basic.def.brown;
    red = darkPalette.basic.def.red;
    orange = darkPalette.basic.def.orange;
    yellow = darkPalette.basic.def.yellow;
    green = darkPalette.basic.def.green;
    mint = darkPalette.basic.def.mint;
    blue = darkPalette.basic.def.blue;
    purple = darkPalette.basic.def.purple;
    pink = darkPalette.basic.def.pink;
  } else {
    brown = lightPalette.basic.def.brown;
    red = lightPalette.basic.def.red;
    orange = lightPalette.basic.def.orange;
    yellow = lightPalette.basic.def.yellow;
    green = lightPalette.basic.def.green;
    mint = lightPalette.basic.def.mint;
    blue = lightPalette.basic.def.blue;
    purple = lightPalette.basic.def.purple;
    pink = lightPalette.basic.def.pink;
  }
  switch (window.activeColorTheme.kind) {
    case ColorThemeKind.Dark || ColorThemeKind.HighContrast:
      generateAccentColorIcons(
        variant,
        true,
        brown,
        red,
        orange,
        yellow,
        green,
        mint,
        blue,
        purple,
        pink,
      );
      break;
    case ColorThemeKind.Light || ColorThemeKind.HighContrastLight:
      generateAccentColorIcons(
        variant,
        false,
        brown,
        red,
        orange,
        yellow,
        green,
        mint,
        blue,
        purple,
        pink,
      );
      break;
    default:
      generateAccentColorIcons(
        variant,
        true,
        brown,
        red,
        orange,
        yellow,
        green,
        mint,
        blue,
        purple,
        pink,
      );
      break;
  }
};

const getAccentColor = async (variant: Variant) => {
  const accentColorHex7 = await window.showInputBox({
    title: `Codemos Modern (${toggleFirstLetterCase(variant)}): UI Theme`,
    prompt: "Accent color in hex color code format",
    value: "#XXXXXX",
    valueSelection: [1, 7],
    ignoreFocusOut: true,
    validateInput(value) {
      if (!validateHex6(value)) {
        return "Invalid hex color code";
      }
      return undefined;
    },
  });
  if (!accentColorHex7) {
    return undefined;
  }
  return accentColorHex7;
};

const getAdaptiveModeLabel = async (
  variant: Variant,
  accentColorHex7: string,
) => {
  const quickPick = window.createQuickPick();
  quickPick.title = `Codemos Modern (${toggleFirstLetterCase(
    variant,
  )}): UI Theme`;
  quickPick.placeholder = "Select an adaptive mode";
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  prepareAdaptiveModeIcons(variant, accentColorHex7);
  quickPick.items = [
    {
      label: "None",
      description: "Adaptive mode",
      detail: "No accent color adaptation",
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/adaptation_none.svg`,
      ),
    },
    {
      label: "Gentle",
      description: "Adaptive mode",
      detail: "Gentle accent color adaptation",
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/adaptation_gentle.svg`,
      ),
    },
    {
      label: "Moderate",
      description: "Adaptive mode",
      detail: "Moderate accent color adaptation",
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/adaptation_moderate.svg`,
      ),
    },
    {
      label: "Aggressive",
      description: "Adaptive mode",
      detail: "Aggressive accent color adaptation",
      iconPath: Uri.file(
        `${__dirname}/../../res/icons/${variant}/adaptation_aggressive.svg`,
      ),
    },
  ];
  quickPick.busy = false;
  return await new Promise<string | undefined>((resolve) => {
    quickPick.onDidAccept(() => {
      const selectedAdaptiveMode = quickPick.selectedItems[0];
      quickPick.dispose();
      if (selectedAdaptiveMode) {
        return resolve(selectedAdaptiveMode.label);
      } else {
        return resolve(undefined);
      }
    });
  });
};

const prepareAdaptiveModeIcons = (
  variant: Variant,
  accentColorHex7: string,
) => {
  let noneModeColor: string;
  let gentleModeColor: string;
  let moderateModeColor: string;
  let aggressiveModeColor: string;
  if (variant === "dark") {
    noneModeColor = getMimicHex7(darkMimic, accentColorHex7, "none", true);
    gentleModeColor = getMimicHex7(darkMimic, accentColorHex7, "gentle", true);
    moderateModeColor = getMimicHex7(
      darkMimic,
      accentColorHex7,
      "moderate",
      true,
    );
    aggressiveModeColor = getMimicHex7(
      darkMimic,
      accentColorHex7,
      "aggressive",
      true,
    );
  } else {
    noneModeColor = getMimicHex7(lightMimic, accentColorHex7, "none", false);
    gentleModeColor = getMimicHex7(
      lightMimic,
      accentColorHex7,
      "gentle",
      false,
    );
    moderateModeColor = getMimicHex7(
      lightMimic,
      accentColorHex7,
      "moderate",
      false,
    );
    aggressiveModeColor = getMimicHex7(
      lightMimic,
      accentColorHex7,
      "aggressive",
      false,
    );
  }
  switch (window.activeColorTheme.kind) {
    case ColorThemeKind.Dark || ColorThemeKind.HighContrast:
      generateAdaptiveModeIcons(
        variant,
        true,
        noneModeColor,
        gentleModeColor,
        moderateModeColor,
        aggressiveModeColor,
      );
      break;
    case ColorThemeKind.Light || ColorThemeKind.HighContrastLight:
      generateAdaptiveModeIcons(
        variant,
        false,
        noneModeColor,
        gentleModeColor,
        moderateModeColor,
        aggressiveModeColor,
      );
      break;
    default:
      generateAdaptiveModeIcons(
        variant,
        true,
        noneModeColor,
        gentleModeColor,
        moderateModeColor,
        aggressiveModeColor,
      );
      break;
  }
};

interface AuxiliaryThemeQPI extends QuickPickItem {
  auxiliaryThemeId: string | undefined;
  label: string;
  description?: string;
  detail?: string;
  kind?: QuickPickItemKind;
  alwaysShow?: boolean;
}

const getAuxiliaryThemeExtension = async (
  variant: Variant,
  kind: "ui" | "code",
  isOfflineMode: boolean,
) => {
  const kindLabel = kind === "ui" ? "UI" : "Code";
  const quickPick = window.createQuickPick();
  quickPick.title = `Codemos Modern (${toggleFirstLetterCase(
    variant,
  )}): ${kindLabel} Theme`;
  quickPick.placeholder = `Select a ${kindLabel} theme extension`;
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  const auxiliaryThemeRegistries = getConfig().auxiliaryThemeRegistries;
  let success: boolean;
  if (isOfflineMode) {
    success = prepareAuxiliaryThemeRegistriesOffline(auxiliaryThemeRegistries);
  } else {
    success = await prepareAuxiliaryThemeRegistries(auxiliaryThemeRegistries);
  }
  if (!success) {
    quickPick.dispose();
    return undefined;
  }
  const auxiliaryThemeRegistryIndexesWithId = getAuxiliaryThemeRegistryIndexes(
    auxiliaryThemeRegistries,
  );
  const auxiliaryThemesQPI: AuxiliaryThemeQPI[] = [];
  auxiliaryThemesQPI.push({
    auxiliaryThemeId: undefined,
    label: "Bundled",
    kind: QuickPickItemKind.Separator,
  });
  auxiliaryThemesQPI.push({
    auxiliaryThemeId: "_",
    label: "$(library) Codemos Modern",
    description: "Codemos-Inc/Codemos-Modern $(verified-filled)",
    detail: `$(organization) Codemos • $(compass) Bundled • $(law) MIT`,
    alwaysShow: true,
  });
  const installedAuxiliaryThemesQPI: AuxiliaryThemeQPI[] = [];
  const availableAuxiliaryThemesQPI: AuxiliaryThemeQPI[] = [];
  for (const auxiliaryThemeRegistryIndexWithId of auxiliaryThemeRegistryIndexesWithId) {
    // 🟢 Optimize filtering algorithm
    const filteredAuxiliaryThemes =
      auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryIndex.themes[
        variant
      ].filter((auxiliaryTheme, index, self) => {
        return (
          index ===
          self.findIndex(
            (firstAuxiliaryTheme) =>
              firstAuxiliaryTheme.extension === auxiliaryTheme.extension,
          )
        );
      });
    for (const filteredAuxiliaryTheme of filteredAuxiliaryThemes) {
      const installedOption =
        auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryIndex.themes[
          variant
        ].find((auxiliaryTheme) => {
          return (
            auxiliaryTheme.extension === filteredAuxiliaryTheme.extension &&
            auxiliaryTheme.installed
          );
        });
      if (installedOption) {
        const index = filteredAuxiliaryThemes.findIndex((auxiliaryTheme) => {
          return auxiliaryTheme === filteredAuxiliaryTheme;
        });
        filteredAuxiliaryThemes[index] = installedOption;
      }
    }
    const isVerifiedOwner = verifiedOwners.find((verifiedOwner) => {
      return (
        verifiedOwner ===
        auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.owner.toLowerCase()
      );
    })
      ? true
      : false;
    for (const auxiliaryTheme of filteredAuxiliaryThemes) {
      const auxiliaryThemeExtensionQPI: AuxiliaryThemeQPI = {
        auxiliaryThemeId: `${auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.owner}/${auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.repo}/${auxiliaryTheme.publisher}/${auxiliaryTheme.extension}/${auxiliaryTheme.theme}`,
        label: `$(extensions) ${auxiliaryTheme.extension}`,
        description: `${
          auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.owner
        }/${auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.repo} ${
          isVerifiedOwner ? "$(verified-filled)" : "$(unverified)"
        }`,
        detail: `$(organization) ${auxiliaryTheme.publisher} • $(compass) ${auxiliaryTheme.origin} • $(law) ${auxiliaryTheme.license}`,
      };
      if (auxiliaryTheme.installed) {
        installedAuxiliaryThemesQPI.push(auxiliaryThemeExtensionQPI);
      } else {
        if (!isOfflineMode) {
          availableAuxiliaryThemesQPI.push(auxiliaryThemeExtensionQPI);
        }
      }
    }
  }
  if (installedAuxiliaryThemesQPI.length > 0) {
    auxiliaryThemesQPI.push({
      auxiliaryThemeId: undefined,
      label: "Installed",
      kind: QuickPickItemKind.Separator,
    });
    auxiliaryThemesQPI.push(...installedAuxiliaryThemesQPI);
  }
  if (availableAuxiliaryThemesQPI.length > 0) {
    auxiliaryThemesQPI.push({
      auxiliaryThemeId: undefined,
      label: "Available",
      kind: QuickPickItemKind.Separator,
    });
    auxiliaryThemesQPI.push(...availableAuxiliaryThemesQPI);
  }
  quickPick.busy = false;
  quickPick.items = auxiliaryThemesQPI;
  return await new Promise<string | undefined>((resolve) => {
    quickPick.onDidAccept(() => {
      const selectedAuxiliaryTheme = quickPick.selectedItems[0];
      quickPick.dispose();
      if (selectedAuxiliaryTheme) {
        return resolve(
          (selectedAuxiliaryTheme as AuxiliaryThemeQPI).auxiliaryThemeId,
        );
      } else {
        return resolve(undefined);
      }
    });
  });
};

const getAuxiliaryTheme = async (
  variant: Variant,
  auxiliaryThemeExtension: string,
  kind: "ui" | "code",
  isOfflineMode: boolean,
) => {
  const kindLabel = kind === "ui" ? "UI" : "Code";
  const quickPick = window.createQuickPick();
  quickPick.title = `Codemos Modern (${toggleFirstLetterCase(
    variant,
  )}): ${kindLabel} Theme`;
  quickPick.placeholder = `Select a variant of "${
    getAuxiliaryThemeId(auxiliaryThemeExtension).extension
  }" to be used as the ${kindLabel} theme`;
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  const auxiliaryThemeRegistries = getConfig().auxiliaryThemeRegistries;
  const auxiliaryThemeRegistryIndexesWithId = getAuxiliaryThemeRegistryIndexes(
    auxiliaryThemeRegistries,
  );
  const auxiliaryThemesQPI: AuxiliaryThemeQPI[] = [];
  const installedAuxiliaryThemesQPI: AuxiliaryThemeQPI[] = [];
  const availableAuxiliaryThemesQPI: AuxiliaryThemeQPI[] = [];
  const auxiliaryThemeId = getAuxiliaryThemeId(auxiliaryThemeExtension);
  for (const auxiliaryThemeRegistryIndexWithId of auxiliaryThemeRegistryIndexesWithId) {
    const filteredAuxiliaryThemes =
      auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryIndex.themes[
        variant
      ].filter((auxiliaryTheme) => {
        return (
          auxiliaryTheme.publisher === auxiliaryThemeId.publisher &&
          auxiliaryTheme.extension === auxiliaryThemeId.extension
        );
      });
    const isVerifiedOwner = verifiedOwners.find((verifiedOwner) => {
      return (
        verifiedOwner ===
        auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.owner.toLowerCase()
      );
    })
      ? true
      : false;
    for (const auxiliaryTheme of filteredAuxiliaryThemes) {
      const auxiliaryThemeQPI: AuxiliaryThemeQPI = {
        auxiliaryThemeId: `${auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.owner}/${auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.repo}/${auxiliaryTheme.publisher}/${auxiliaryTheme.extension}/${auxiliaryTheme.theme}`,
        label: `$(symbol-color) ${auxiliaryTheme.theme}`,
        description: `${
          auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.owner
        }/${auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.repo} ${
          isVerifiedOwner ? "$(verified-filled)" : "$(unverified)"
        }`,
        detail: `$(organization) ${auxiliaryTheme.publisher} • $(extensions) ${
          auxiliaryTheme.extension
        } • $(color-mode) ${toggleFirstLetterCase(variant)}`,
      };
      if (auxiliaryTheme.installed) {
        installedAuxiliaryThemesQPI.push(auxiliaryThemeQPI);
      } else {
        if (!isOfflineMode) {
          availableAuxiliaryThemesQPI.push(auxiliaryThemeQPI);
        }
      }
    }
  }
  if (installedAuxiliaryThemesQPI.length > 0) {
    auxiliaryThemesQPI.push({
      auxiliaryThemeId: undefined,
      label: "Installed",
      kind: QuickPickItemKind.Separator,
    });
    auxiliaryThemesQPI.push(...installedAuxiliaryThemesQPI);
  }
  if (availableAuxiliaryThemesQPI.length > 0) {
    auxiliaryThemesQPI.push({
      auxiliaryThemeId: undefined,
      label: "Available",
      kind: QuickPickItemKind.Separator,
    });
    auxiliaryThemesQPI.push(...availableAuxiliaryThemesQPI);
  }
  quickPick.busy = false;
  quickPick.items = auxiliaryThemesQPI;
  return await new Promise<string | undefined>((resolve) => {
    quickPick.onDidAccept(async () => {
      const selectedAuxiliaryTheme = quickPick.selectedItems[0];
      quickPick.dispose();
      if (selectedAuxiliaryTheme) {
        const selectedAuxiliaryThemeId = (
          selectedAuxiliaryTheme as AuxiliaryThemeQPI
        ).auxiliaryThemeId;
        if (selectedAuxiliaryThemeId) {
          let success: boolean;
          if (isOfflineMode) {
            success = await prepareAuxiliaryThemeOffline(
              auxiliaryThemeRegistries,
              selectedAuxiliaryThemeId,
              variant,
            );
          } else {
            success = await prepareAuxiliaryTheme(
              auxiliaryThemeRegistries,
              selectedAuxiliaryThemeId,
              variant,
            );
          }
          if (!success) {
            return resolve(undefined);
          }
          return resolve(selectedAuxiliaryThemeId);
        } else {
          return resolve(undefined);
        }
      } else {
        return resolve(undefined);
      }
    });
  });
};
