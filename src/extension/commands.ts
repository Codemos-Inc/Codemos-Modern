import { QuickPickItem, QuickPickItemKind, window, workspace } from "vscode";
import { AdaptiveMode, Variant } from "../@types";
import { verifiedOwners } from "../auxiliary";
import { validateHex6 } from "../color";
import {
  getAllAuxiliaryThemeRegistryIndexes as getAuxiliaryThemeRegistryIndexes,
  prepareAuxiliaryTheme,
  prepareAuxiliaryThemeRegistries,
} from "../data";
import { getAuxiliaryThemeId } from "../data/helpers";
import { toggleFirstLetterCase } from "./helpers";
import { setIsConfiguredFromCommand } from "./sharedState";
import { getConfig, updateConfig } from "./utils";

export const configure = async () => {
  //
  const variantLabel = await getVariantLabel();
  if (!variantLabel) {
    return;
  }
  const variant = toggleFirstLetterCase(
    variantLabel.replace(/\$\(.*\) /g, ""),
  ) as Variant;
  //
  const auxiliaryUiThemeExtension = await getAuxiliaryThemeExtension(
    variant,
    "ui",
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
    );
    if (!auxiliaryUiThemeCandidate) {
      return;
    }
    auxiliaryUiTheme = auxiliaryUiThemeCandidate;
  }
  const accentColor = !auxiliaryUiTheme ? await getAccentColor(variant) : null;
  if (!accentColor && !auxiliaryUiTheme) {
    return;
  }
  //
  const adaptiveModeLabel = !auxiliaryUiTheme
    ? await getAdaptiveModeLabel(variant)
    : null;
  if (!adaptiveModeLabel && !auxiliaryUiTheme) {
    return;
  }
  let adaptiveMode = null;
  if (adaptiveModeLabel) {
    adaptiveMode = toggleFirstLetterCase(
      adaptiveModeLabel.replace(/\$\(.*\) /g, ""),
    ) as AdaptiveMode;
  }
  //
  const auxiliaryCodeThemeExtension = await getAuxiliaryThemeExtension(
    variant,
    "code",
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
    );
    if (!auxiliaryCodeThemeCandidate) {
      return;
    }
    auxiliaryCodeTheme = auxiliaryCodeThemeCandidate;
  }
  setIsConfiguredFromCommand(true);
  updateConfig(
    variant,
    auxiliaryUiTheme,
    !accentColor ? getConfig()[variant].accentColor : accentColor,
    !adaptiveMode ? getConfig()[variant].adaptiveMode : adaptiveMode,
    auxiliaryCodeTheme,
  );
  workspace
    .getConfiguration("workbench")
    .update("colorTheme", `Codemos Modern (${toggleFirstLetterCase(variant)})`);
};

const getVariantLabel = async () => {
  const variant = await window.showQuickPick(
    [
      {
        label: "$(color-mode) Dark",
        description: "Variant",
        detail: "Dark-heavy color scheme",
      },
      {
        label: "$(color-mode) Light",
        description: "Variant",
        detail: "Light-heavy color scheme",
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

const getAdaptiveModeLabel = async (variant: Variant) => {
  const adaptiveMode = await window.showQuickPick(
    [
      {
        label: "$(circle-outline) None",
        description: "Adaptive mode",
        detail: "No accent color adaptation",
      },
      {
        label: "$(circle-filled) Gentle",
        description: "Adaptive mode",
        detail: "Gentle accent color adaptation",
      },
      {
        label: "$(circle-large-filled) Aggressive",
        description: "Adaptive mode",
        detail: "Aggressive accent color adaptation",
      },
    ],
    {
      title: `Codemos Modern (${toggleFirstLetterCase(variant)}): UI Theme`,
      placeHolder: "Select an adaptive mode",
      ignoreFocusOut: true,
    },
  );
  if (!adaptiveMode) {
    return undefined;
  }
  return adaptiveMode.label;
};

interface AuxiliaryThemeExtensionAsQuickPickItem extends QuickPickItem {
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
) => {
  const quickPick = window.createQuickPick();
  quickPick.title = `Codemos Modern (${toggleFirstLetterCase(variant)}): ${
    kind === "ui" ? "UI" : "Code"
  } Theme`;
  quickPick.placeholder = `Select a ${kind} theme extension`;
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  const auxiliaryThemeRegistries = getConfig().auxiliaryThemeRegistries;
  const success = await prepareAuxiliaryThemeRegistries(
    auxiliaryThemeRegistries,
  );
  if (!success) {
    quickPick.dispose();
    return undefined;
  }
  const auxiliaryThemeRegistryIndexesWithId = getAuxiliaryThemeRegistryIndexes(
    auxiliaryThemeRegistries,
  );
  const auxiliaryThemeAsQuickPickItems: AuxiliaryThemeExtensionAsQuickPickItem[] =
    [];
  auxiliaryThemeAsQuickPickItems.push({
    auxiliaryThemeId: undefined,
    label: "Bundled",
    kind: QuickPickItemKind.Separator,
  });
  auxiliaryThemeAsQuickPickItems.push({
    auxiliaryThemeId: "_",
    label: "$(library) Codemos Modern",
    description: "Codemos-Inc/Codemos-Modern $(verified-filled)",
    detail: `$(organization) Codemos • $(compass) Bundled • $(law) MIT`,
    alwaysShow: true,
  });
  auxiliaryThemeAsQuickPickItems.push({
    auxiliaryThemeId: undefined,
    label: "From registries",
    kind: QuickPickItemKind.Separator,
  });
  for (const auxiliaryThemeRegistryIndexWithId of auxiliaryThemeRegistryIndexesWithId) {
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
    for (const auxiliaryTheme of filteredAuxiliaryThemes) {
      const isVerifiedOwner = verifiedOwners.find((verifiedOwner) => {
        return (
          verifiedOwner ===
          auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.owner.toLowerCase()
        );
      })
        ? true
        : false;
      auxiliaryThemeAsQuickPickItems.push({
        auxiliaryThemeId: `${auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.owner}/${auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.repo}/${auxiliaryTheme.publisher}/${auxiliaryTheme.extension}/${auxiliaryTheme.theme}`,
        label: `$(extensions) ${auxiliaryTheme.extension}`,
        description: `${
          auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.owner
        }/${auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.repo} ${
          isVerifiedOwner ? "$(verified-filled)" : "$(unverified)"
        }`,
        detail: `$(organization) ${auxiliaryTheme.publisher} • $(compass) ${auxiliaryTheme.origin} • $(law) ${auxiliaryTheme.license}`,
      });
    }
  }
  quickPick.busy = false;
  quickPick.items = auxiliaryThemeAsQuickPickItems;
  return await new Promise<string | undefined>((resolve) => {
    quickPick.onDidAccept(() => {
      const selectedAuxiliaryTheme = quickPick.selectedItems[0];
      quickPick.dispose();
      if (selectedAuxiliaryTheme) {
        return resolve(
          (selectedAuxiliaryTheme as AuxiliaryThemeExtensionAsQuickPickItem)
            .auxiliaryThemeId,
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
) => {
  const quickPick = window.createQuickPick();
  quickPick.title = `Codemos Modern (${toggleFirstLetterCase(variant)}): ${
    kind === "ui" ? "UI" : "Code"
  } Theme`;
  quickPick.placeholder = `Select a variant of "${
    getAuxiliaryThemeId(auxiliaryThemeExtension).extension
  }" to be used as ${kind} theme`;
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  const auxiliaryThemeRegistries = getConfig().auxiliaryThemeRegistries;
  const auxiliaryThemeRegistryIndexesWithId = getAuxiliaryThemeRegistryIndexes(
    auxiliaryThemeRegistries,
  );
  const auxiliaryThemeAsQuickPickItems: AuxiliaryThemeExtensionAsQuickPickItem[] =
    [];
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
    for (const auxiliaryTheme of filteredAuxiliaryThemes) {
      const isVerifiedOwner = verifiedOwners.find((verifiedOwner) => {
        return (
          verifiedOwner ===
          auxiliaryThemeRegistryIndexWithId.auxiliaryThemeRegistryId.owner.toLowerCase()
        );
      })
        ? true
        : false;
      auxiliaryThemeAsQuickPickItems.push({
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
      });
    }
  }
  quickPick.busy = false;
  quickPick.items = auxiliaryThemeAsQuickPickItems;
  return await new Promise<string | undefined>((resolve) => {
    quickPick.onDidAccept(() => {
      const selectedAuxiliaryTheme = quickPick.selectedItems[0];
      quickPick.dispose();
      if (selectedAuxiliaryTheme) {
        const selectedAuxiliaryThemeId = (
          selectedAuxiliaryTheme as AuxiliaryThemeExtensionAsQuickPickItem
        ).auxiliaryThemeId;
        if (selectedAuxiliaryThemeId) {
          const success = prepareAuxiliaryTheme(
            selectedAuxiliaryThemeId,
            variant,
          );
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
