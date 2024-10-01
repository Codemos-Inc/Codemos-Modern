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
import { l10nT } from "../l10n";
import { mimic3Info as darkMimic, palette as darkPalette } from "../modern/variants/dark/modern";
import { mimic1Info as lightMimic, palette as lightPalette } from "../modern/variants/light/modern";
import { authenticate } from "./authentication";
import { toggleFirstLetterCase } from "./helpers";
import { generateAccentColorIcons, generateAdaptiveModeIcons } from "./icons";
import {
  showErrorNotification,
  showInformationNotification,
  showProgressNotification,
} from "./notifications";
import { getOnlineAvailability, setIsConfiguredFromCommand } from "./sharedState";
import { checkAvailability, getConfig, updateConfig } from "./utils";

export const authenticateCommand = async () => {
  await showProgressNotification(l10nT("command.authenticate.progress"), async () => {
    const result = await authenticate(true);
    if (!result.success) {
      showErrorNotification(l10nT("command.authenticate.error$msg", [result.message]), null, null);
    } else {
      showInformationNotification(l10nT("command.authenticate.success"), null, null);
    }
  });
};

export const configureCommand = async () => {
  await checkAvailability();
  const isOnlineAvailable = getOnlineAvailability();
  //
  const variant = await getVariant();
  if (!variant) {
    return;
  }
  //
  const auxiliaryUiThemeExtension = await getAuxiliaryThemeExtension(
    variant,
    l10nT("helper.kind.ui"),
    isOnlineAvailable,
  );
  if (!auxiliaryUiThemeExtension) {
    return;
  }
  let auxiliaryUiTheme = null;
  if (auxiliaryUiThemeExtension !== "_") {
    const auxiliaryUiThemeCandidate = await getAuxiliaryTheme(
      variant,
      auxiliaryUiThemeExtension,
      l10nT("helper.kind.ui"),
      isOnlineAvailable,
    );
    if (!auxiliaryUiThemeCandidate) {
      return;
    }
    auxiliaryUiTheme = auxiliaryUiThemeCandidate;
  }
  //
  const design = !auxiliaryUiTheme ? await getDesign(variant) : undefined;
  if (!design && !auxiliaryUiTheme) {
    return;
  }
  //
  const accentColorFromPalette = !auxiliaryUiTheme
    ? await getAccentColorFromPalette(variant)
    : undefined;
  if (!accentColorFromPalette && !auxiliaryUiTheme) {
    return;
  }
  let accentColor: string | undefined;
  if (accentColorFromPalette !== "_") {
    accentColor = accentColorFromPalette;
  } else {
    accentColor = !auxiliaryUiTheme ? await getAccentColor(variant) : undefined;
    if (!accentColor && !auxiliaryUiTheme) {
      return;
    }
  }
  //
  const adaptiveMode = !auxiliaryUiTheme
    ? await getAdaptiveModeLabel(variant, accentColor!)
    : undefined;
  if (!adaptiveMode && !auxiliaryUiTheme) {
    return;
  }
  //
  const auxiliaryCodeThemeExtension = await getAuxiliaryThemeExtension(
    variant,
    l10nT("helper.kind.code"),
    isOnlineAvailable,
  );
  if (!auxiliaryCodeThemeExtension) {
    return;
  }
  let auxiliaryCodeTheme = null;
  if (auxiliaryCodeThemeExtension !== "_") {
    const auxiliaryCodeThemeCandidate = await getAuxiliaryTheme(
      variant,
      auxiliaryCodeThemeExtension,
      l10nT("helper.kind.code"),
      isOnlineAvailable,
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

interface VariantQPI extends QuickPickItem {
  _variant: Variant;
  label: string;
  description: string;
  detail: string;
  iconPath: Uri;
}

const getVariant = async (): Promise<Variant | undefined> => {
  // 🟡 Hacky workaround for the vscode api not picking the correct icon based on the active ui theme
  let darkModeIconUri: Uri;
  let lightModeIconUri: Uri;
  switch (window.activeColorTheme.kind) {
    case ColorThemeKind.Dark || ColorThemeKind.HighContrast:
      darkModeIconUri = Uri.file(`${__dirname}/../../res/icons/dark/dark_mode.svg`);
      lightModeIconUri = Uri.file(`${__dirname}/../../res/icons/dark/light_mode.svg`);
      break;
    case ColorThemeKind.Light || ColorThemeKind.HighContrastLight:
      darkModeIconUri = Uri.file(`${__dirname}/../../res/icons/light/dark_mode.svg`);
      lightModeIconUri = Uri.file(`${__dirname}/../../res/icons/light/light_mode.svg`);
      break;
    default:
      darkModeIconUri = Uri.file(`${__dirname}/../../res/icons/dark/dark_mode.svg`);
      lightModeIconUri = Uri.file(`${__dirname}/../../res/icons/dark/light_mode.svg`);
      break;
  }
  const variantPicker = await window.showQuickPick<VariantQPI>(
    [
      {
        _variant: "dark",
        label: l10nT("helper.variant.dark"),
        description: l10nT("helper.variant"),
        detail: l10nT("helper.variant.dark.detail"),
        iconPath: darkModeIconUri,
      },
      {
        _variant: "light",
        label: l10nT("helper.variant.light"),
        description: l10nT("helper.variant"),
        detail: l10nT("helper.variant.light.detail"),
        iconPath: lightModeIconUri,
      },
    ],
    {
      title: l10nT("command.configure.variantPicker.title"),
      placeHolder: l10nT("command.configure.variantPicker.placeHolder"),
      ignoreFocusOut: true,
    },
  );
  if (!variantPicker) {
    return undefined;
  }
  return variantPicker._variant;
};

interface DesignQPI extends QuickPickItem {
  _design: Design;
  label: string;
  description: string;
  detail: string;
}

const getDesign = async (variant: Variant): Promise<Design | undefined> => {
  const designPicker = await window.showQuickPick<DesignQPI>(
    [
      {
        _design: "modern",
        label: `$(symbol-color) ${l10nT("helper.design.modern")}`,
        description: l10nT("helper.design"),
        detail: l10nT("helper.design.modern.detail"),
      },
      {
        _design: "minimal",
        label: `$(symbol-color) ${l10nT("helper.design.minimal")}`,
        description: l10nT("helper.design"),
        detail: l10nT("helper.design.minimal.detail"),
      },
      {
        _design: "flat",
        label: `$(symbol-color) ${l10nT("helper.design.flat")}`,
        description: l10nT("helper.design"),
        detail: l10nT("helper.design.flat.detail"),
      },
    ],
    {
      title: l10nT("command.configure.*.title$variant$kind", [
        l10nT(`helper.variant.${variant}`),
        l10nT(`helper.kind.ui`),
      ]),
      placeHolder: l10nT("command.configure.designPicker.placeHolder"),
      ignoreFocusOut: true,
    },
  );
  if (!designPicker) {
    return undefined;
  }
  return designPicker._design;
};

interface PaletteQPI extends QuickPickItem {
  _color:
    | ""
    | "custom"
    | "brown"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "mint"
    | "blue"
    | "purple"
    | "pink";
  label: string;
  description?: string;
  detail?: string;
  iconPath?: Uri;
}

const getAccentColorFromPalette = async (variant: Variant) => {
  const quickPick = window.createQuickPick<PaletteQPI>();
  quickPick.title = l10nT("command.configure.*.title$variant$kind", [
    l10nT(`helper.variant.${variant}`),
    l10nT(`helper.kind.ui`),
  ]);
  quickPick.placeholder = l10nT("command.configure.accColorPalettePicker.placeHolder");
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  prepareAccentColorIcons(variant);
  quickPick.items = [
    {
      _color: "",
      label: l10nT("helper.palette.custom"),
      kind: QuickPickItemKind.Separator,
    },
    {
      _color: "custom",
      label: l10nT("helper.palette.custom"),
      description: l10nT("helper.accentColor"),
      detail: l10nT("command.configure.accColorPalettePicker.item.custom.detail"),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/accent_custom.svg`),
    },
    {
      _color: "",
      label: l10nT("helper.palette"),
      kind: QuickPickItemKind.Separator,
    },
    {
      _color: "brown",
      label: l10nT("helper.palette.brown"),
      description: l10nT("helper.accentColor"),
      detail: l10nT("command.configure.accColorPalettePicker.item.detail$code", [
        variant === "dark" ? "APL-BRO" : "APD-BRO",
      ]),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/accent_brown.svg`),
    },
    {
      _color: "red",
      label: l10nT("helper.palette.red"),
      description: l10nT("helper.accentColor"),
      detail: l10nT("command.configure.accColorPalettePicker.item.detail$code", [
        variant === "dark" ? "LPD-RED" : "DPD-RED",
      ]),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/accent_red.svg`),
    },
    {
      _color: "orange",
      label: l10nT("helper.palette.orange"),
      description: l10nT("helper.accentColor"),
      detail: l10nT("command.configure.accColorPalettePicker.item.detail$code", [
        variant === "dark" ? "LPD-ORA" : "DPD-ORA",
      ]),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/accent_orange.svg`),
    },
    {
      _color: "yellow",
      label: l10nT("helper.palette.yellow"),
      description: l10nT("helper.accentColor"),
      detail: l10nT("command.configure.accColorPalettePicker.item.detail$code", [
        variant === "dark" ? "LPD-YEL" : "DPD-YEL",
      ]),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/accent_yellow.svg`),
    },
    {
      _color: "green",
      label: l10nT("helper.palette.green"),
      description: l10nT("helper.accentColor"),
      detail: l10nT("command.configure.accColorPalettePicker.item.detail$code", [
        variant === "dark" ? "LPD-GRE" : "DPD-GRE",
      ]),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/accent_green.svg`),
    },
    {
      _color: "mint",
      label: l10nT("helper.palette.mint"),
      description: l10nT("helper.accentColor"),
      detail: l10nT("command.configure.accColorPalettePicker.item.detail$code", [
        variant === "dark" ? "LPD-MIN" : "DPD-MIN",
      ]),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/accent_mint.svg`),
    },
    {
      _color: "blue",
      label: l10nT("helper.palette.blue"),
      description: l10nT("helper.accentColor"),
      detail: l10nT("command.configure.accColorPalettePicker.item.detail$code", [
        variant === "dark" ? "LPD-BLU" : "DPD-BLU",
      ]),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/accent_blue.svg`),
    },
    {
      _color: "purple",
      label: l10nT("helper.palette.purple"),
      description: l10nT("helper.accentColor"),
      detail: l10nT("command.configure.accColorPalettePicker.item.detail$code", [
        variant === "dark" ? "LPD-PUR" : "DPD-PUR",
      ]),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/accent_purple.svg`),
    },
    {
      _color: "pink",
      label: l10nT("helper.palette.pink"),
      description: l10nT("helper.accentColor"),
      detail: l10nT("command.configure.accColorPalettePicker.item.detail$code", [
        variant === "dark" ? "LPD-PIN" : "DPD-PIN",
      ]),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/accent_pink.svg`),
    },
  ];
  quickPick.busy = false;
  return await new Promise<string | undefined>((resolve) => {
    quickPick.onDidAccept(() => {
      if (!quickPick.selectedItems[0]) {
        quickPick.dispose();
        return resolve(undefined);
      }
      const selectedAccentColor = quickPick.selectedItems[0]._color;
      quickPick.dispose();
      if (selectedAccentColor) {
        switch (variant) {
          case "dark":
            switch (selectedAccentColor) {
              case "custom":
                return resolve("_");
              case "brown":
                return resolve(darkPalette.basic.def.brown);
              case "red":
                return resolve(darkPalette.basic.def.red);
              case "orange":
                return resolve(darkPalette.basic.def.orange);
              case "yellow":
                return resolve(darkPalette.basic.def.yellow);
              case "green":
                return resolve(darkPalette.basic.def.green);
              case "mint":
                return resolve(darkPalette.basic.def.mint);
              case "blue":
                return resolve(darkPalette.basic.def.blue);
              case "purple":
                return resolve(darkPalette.basic.def.purple);
              case "pink":
                return resolve(darkPalette.basic.def.pink);
              default:
                return resolve(undefined);
            }
          case "light":
            switch (selectedAccentColor) {
              case "custom":
                return resolve("_");
              case "brown":
                return resolve(lightPalette.basic.def.brown);
              case "red":
                return resolve(lightPalette.basic.def.red);
              case "orange":
                return resolve(lightPalette.basic.def.orange);
              case "yellow":
                return resolve(lightPalette.basic.def.yellow);
              case "green":
                return resolve(lightPalette.basic.def.green);
              case "mint":
                return resolve(lightPalette.basic.def.mint);
              case "blue":
                return resolve(lightPalette.basic.def.blue);
              case "purple":
                return resolve(lightPalette.basic.def.purple);
              case "pink":
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
    title: l10nT("command.configure.*.title$variant$kind", [
      l10nT(`helper.variant.${variant}`),
      l10nT(`helper.kind.ui`),
    ]),
    prompt: l10nT("command.configure.accColorInput.prompt"),
    value: "#XXXXXX",
    valueSelection: [1, 7],
    ignoreFocusOut: true,
    validateInput(value) {
      if (!validateHex6(value)) {
        return l10nT("command.configure.accColorInput.error");
      }
      return undefined;
    },
  });
  if (!accentColorHex7) {
    return undefined;
  }
  return accentColorHex7;
};

interface AdaptiveQPI extends QuickPickItem {
  _mode: AdaptiveMode;
  label: string;
  description: string;
  detail: string;
  iconPath: Uri;
}

const getAdaptiveModeLabel = async (
  variant: Variant,
  accentColorHex7: string,
): Promise<AdaptiveMode | undefined> => {
  const quickPick = window.createQuickPick<AdaptiveQPI>();
  quickPick.title = l10nT("command.configure.*.title$variant$kind", [
    l10nT(`helper.variant.${variant}`),
    l10nT(`helper.kind.ui`),
  ]);
  quickPick.placeholder = l10nT("command.configure.adaptiveModePicker.placeHolder");
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  prepareAdaptiveModeIcons(variant, accentColorHex7);
  quickPick.items = [
    {
      _mode: "none",
      label: l10nT("helper.adaptiveMode.none"),
      description: l10nT("helper.adaptiveMode"),
      detail: l10nT("helper.adaptiveMode.none.detail"),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/adaptation_none.svg`),
    },
    {
      _mode: "gentle",
      label: l10nT("helper.adaptiveMode.gentle"),
      description: l10nT("helper.adaptiveMode"),
      detail: l10nT("helper.adaptiveMode.gentle.detail"),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/adaptation_gentle.svg`),
    },
    {
      _mode: "moderate",
      label: l10nT("helper.adaptiveMode.moderate"),
      description: l10nT("helper.adaptiveMode"),
      detail: l10nT("helper.adaptiveMode.moderate.detail"),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/adaptation_moderate.svg`),
    },
    {
      _mode: "aggressive",
      label: l10nT("helper.adaptiveMode.aggressive"),
      description: l10nT("helper.adaptiveMode"),
      detail: l10nT("helper.adaptiveMode.aggressive.detail"),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/adaptation_aggressive.svg`),
    },
  ];
  quickPick.busy = false;
  return await new Promise<AdaptiveMode | undefined>((resolve) => {
    quickPick.onDidAccept(() => {
      const selectedAdaptiveMode = quickPick.selectedItems[0];
      quickPick.dispose();
      if (selectedAdaptiveMode) {
        return resolve(selectedAdaptiveMode._mode);
      } else {
        return resolve(undefined);
      }
    });
  });
};

const prepareAdaptiveModeIcons = (variant: Variant, accentColorHex7: string) => {
  let noneModeColor: string;
  let gentleModeColor: string;
  let moderateModeColor: string;
  let aggressiveModeColor: string;
  if (variant === "dark") {
    noneModeColor = getMimicHex7(darkMimic, accentColorHex7, "none", true);
    gentleModeColor = getMimicHex7(darkMimic, accentColorHex7, "gentle", true);
    moderateModeColor = getMimicHex7(darkMimic, accentColorHex7, "moderate", true);
    aggressiveModeColor = getMimicHex7(darkMimic, accentColorHex7, "aggressive", true);
  } else {
    noneModeColor = getMimicHex7(lightMimic, accentColorHex7, "none", false);
    gentleModeColor = getMimicHex7(lightMimic, accentColorHex7, "gentle", false);
    moderateModeColor = getMimicHex7(lightMimic, accentColorHex7, "moderate", false);
    aggressiveModeColor = getMimicHex7(lightMimic, accentColorHex7, "aggressive", false);
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
  auxiliaryThemeId: string;
  label: string;
  description?: string;
  detail?: string;
  kind?: QuickPickItemKind;
  alwaysShow?: boolean;
}

const getAuxiliaryThemeExtension = async (
  variant: Variant,
  kind: string,
  isOnlineAvailable: boolean,
) => {
  const quickPick = window.createQuickPick<AuxiliaryThemeQPI>();
  quickPick.title = l10nT("command.configure.*.title$variant$kind", [
    l10nT(`helper.variant.${variant}`),
    kind,
  ]);
  quickPick.placeholder = l10nT("command.configure.auxExtensionPicker.placeHolder$kind", [kind]);
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  const auxiliaryThemeRegistries = getConfig().auxiliaryThemeRegistries;
  let success: boolean;
  if (isOnlineAvailable) {
    success = await prepareAuxiliaryThemeRegistries(auxiliaryThemeRegistries);
  } else {
    success = prepareAuxiliaryThemeRegistriesOffline(auxiliaryThemeRegistries);
  }
  if (!success) {
    quickPick.dispose();
    return undefined;
  }
  const auxiliaryThemeRegistryIndexesWithId =
    getAuxiliaryThemeRegistryIndexes(auxiliaryThemeRegistries);
  const auxiliaryThemesQPIs: AuxiliaryThemeQPI[] = [];
  auxiliaryThemesQPIs.push({
    auxiliaryThemeId: "_",
    label: l10nT("helper.auxTheme.origin.bundled"),
    kind: QuickPickItemKind.Separator,
  });
  auxiliaryThemesQPIs.push({
    auxiliaryThemeId: "_",
    label: "$(library) Codemos Modern",
    description: "Codemos-Inc/Codemos-Modern $(verified-filled)",
    detail: `$(organization) Codemos • $(compass) ${l10nT(
      "helper.auxTheme.origin.bundled",
    )} • $(law) MIT`,
    alwaysShow: true,
  });
  const installedAuxiliaryThemesQPIs: AuxiliaryThemeQPI[] = [];
  const availableAuxiliaryThemesQPIs: AuxiliaryThemeQPI[] = [];
  for (const auxiliaryThemeRegistryIndexWithId of auxiliaryThemeRegistryIndexesWithId) {
    const filteredAuxiliaryThemes =
      auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryIndex.themes[variant].filter(
        (auxiliaryTheme, index, self) => {
          return (
            index ===
            self.findIndex(
              (firstAuxiliaryTheme) =>
                firstAuxiliaryTheme.publisher === auxiliaryTheme.publisher &&
                firstAuxiliaryTheme.extension === auxiliaryTheme.extension,
            )
          );
        },
      );
    for (const filteredAuxiliaryTheme of filteredAuxiliaryThemes) {
      const installedOption = auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryIndex.themes[
        variant
      ].find((auxiliaryTheme) => {
        return (
          auxiliaryTheme.extension === filteredAuxiliaryTheme.extension && auxiliaryTheme.installed
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
        detail: `$(organization) ${auxiliaryTheme.publisher} • $(compass) ${l10nT(
          `helper.auxTheme.origin.${auxiliaryTheme.origin.toLowerCase()}`,
        )} • $(law) ${auxiliaryTheme.license}`,
      };
      if (auxiliaryTheme.installed) {
        installedAuxiliaryThemesQPIs.push(auxiliaryThemeExtensionQPI);
      } else {
        if (isOnlineAvailable) {
          availableAuxiliaryThemesQPIs.push(auxiliaryThemeExtensionQPI);
        }
      }
    }
  }
  if (installedAuxiliaryThemesQPIs.length > 0) {
    auxiliaryThemesQPIs.push({
      auxiliaryThemeId: "",
      label: l10nT("helper.auxTheme.state.installed"),
      kind: QuickPickItemKind.Separator,
    });
    auxiliaryThemesQPIs.push(...installedAuxiliaryThemesQPIs);
  }
  if (availableAuxiliaryThemesQPIs.length > 0) {
    auxiliaryThemesQPIs.push({
      auxiliaryThemeId: "",
      label: l10nT("helper.auxTheme.state.available"),
      kind: QuickPickItemKind.Separator,
    });
    auxiliaryThemesQPIs.push(...availableAuxiliaryThemesQPIs);
  }
  quickPick.busy = false;
  quickPick.items = auxiliaryThemesQPIs;
  return await new Promise<string | undefined>((resolve) => {
    quickPick.onDidAccept(() => {
      const selectedAuxiliaryTheme = quickPick.selectedItems[0];
      quickPick.dispose();
      if (selectedAuxiliaryTheme) {
        return resolve(selectedAuxiliaryTheme.auxiliaryThemeId);
      } else {
        return resolve(undefined);
      }
    });
  });
};

const getAuxiliaryTheme = async (
  variant: Variant,
  auxiliaryThemeExtension: string,
  kind: string,
  isOnlineAvailable: boolean,
) => {
  const quickPick = window.createQuickPick<AuxiliaryThemeQPI>();
  quickPick.title = l10nT("command.configure.*.title$variant$kind", [
    l10nT(`helper.variant.${variant}`),
    kind,
  ]);
  quickPick.placeholder = l10nT("command.configure.auxThemePicker.placeHolder$extension$kind", [
    getAuxiliaryThemeId(auxiliaryThemeExtension).extension,
    kind,
  ]);
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  const auxiliaryThemeRegistries = getConfig().auxiliaryThemeRegistries;
  const auxiliaryThemeRegistryIndexesWithId =
    getAuxiliaryThemeRegistryIndexes(auxiliaryThemeRegistries);
  const auxiliaryThemesQPIs: AuxiliaryThemeQPI[] = [];
  const installedAuxiliaryThemesQPIs: AuxiliaryThemeQPI[] = [];
  const availableAuxiliaryThemesQPIs: AuxiliaryThemeQPI[] = [];
  const auxiliaryThemeId = getAuxiliaryThemeId(auxiliaryThemeExtension);
  for (const auxiliaryThemeRegistryIndexWithId of auxiliaryThemeRegistryIndexesWithId) {
    const filteredAuxiliaryThemes =
      auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryIndex.themes[variant].filter(
        (auxiliaryTheme) => {
          return (
            auxiliaryTheme.publisher === auxiliaryThemeId.publisher &&
            auxiliaryTheme.extension === auxiliaryThemeId.extension
          );
        },
      );
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
        installedAuxiliaryThemesQPIs.push(auxiliaryThemeQPI);
      } else {
        if (isOnlineAvailable) {
          availableAuxiliaryThemesQPIs.push(auxiliaryThemeQPI);
        }
      }
    }
  }
  if (installedAuxiliaryThemesQPIs.length > 0) {
    auxiliaryThemesQPIs.push({
      auxiliaryThemeId: "",
      label: l10nT("helper.auxTheme.state.installed"),
      kind: QuickPickItemKind.Separator,
    });
    auxiliaryThemesQPIs.push(...installedAuxiliaryThemesQPIs);
  }
  if (availableAuxiliaryThemesQPIs.length > 0) {
    auxiliaryThemesQPIs.push({
      auxiliaryThemeId: "",
      label: l10nT("helper.auxTheme.state.available"),
      kind: QuickPickItemKind.Separator,
    });
    auxiliaryThemesQPIs.push(...availableAuxiliaryThemesQPIs);
  }
  quickPick.busy = false;
  quickPick.items = auxiliaryThemesQPIs;
  return await new Promise<string | undefined>((resolve) => {
    quickPick.onDidAccept(async () => {
      const selectedAuxiliaryTheme = quickPick.selectedItems[0];
      quickPick.dispose();
      if (selectedAuxiliaryTheme) {
        const selectedAuxiliaryThemeId = selectedAuxiliaryTheme.auxiliaryThemeId;
        if (selectedAuxiliaryThemeId) {
          let success: boolean;
          if (isOnlineAvailable) {
            success = await prepareAuxiliaryTheme(
              auxiliaryThemeRegistries,
              selectedAuxiliaryThemeId,
              variant,
            );
          } else {
            success = await prepareAuxiliaryThemeOffline(
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
