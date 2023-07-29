import { QuickPickItem, window, workspace } from "vscode";
import { AdaptiveMode, Variant } from "../@types";
import { verifiedOwners } from "../auxiliary";
import { validateHex6 } from "../color";
import {
  getAllAuxiliaryThemeRegistryIndexes as getAuxiliaryThemeRegistryIndexes,
  prepareAuxiliaryThemeRegistries,
} from "../data";
import { toggleFirstLetterCase } from "./helpers";
import { setIsConfiguredFromCommand } from "./sharedState";
import { getConfig, updateConfig } from "./utils";

interface AuxiliaryThemeExtensionAsQuickPickItem extends QuickPickItem {
  auxiliaryThemeId: string;
  label: string;
  description: string;
  detail: string;
}

export const configure = async () => {
  const variantLabel = await getVariantLabel();
  if (!variantLabel) {
    return;
  }
  const variant = toggleFirstLetterCase(
    variantLabel.replace(/\$\(.*\) /g, ""),
  ) as Variant;
  const accentColor = await getAccentColor(variant);
  const codeThemeExtension = await getCodeThemeExtension(variant);
  if (!accentColor) {
    return;
  }
  const adaptiveModeLabel = await getAdaptiveModeLabel(variant);
  if (!adaptiveModeLabel) {
    return;
  }
  const adaptiveMode = toggleFirstLetterCase(
    adaptiveModeLabel.replace(/\$\(.*\) /g, ""),
  ) as AdaptiveMode;
  setIsConfiguredFromCommand(true);
  updateConfig(variant, accentColor, null, adaptiveMode);
  workspace
    .getConfiguration("workbench")
    .update("colorTheme", `Codemos Modern (${toggleFirstLetterCase(variant)})`);
};

const getVariantLabel = async () => {
  const variant = await window.showQuickPick(
    [
      { label: "$(color-mode) Dark", description: "Variant" },
      { label: "$(color-mode) Light", description: "Variant" },
    ],
    {
      title: "Codemos Modern 1/3",
      placeHolder: "Select a variant",
      ignoreFocusOut: true,
    },
  );
  if (!variant) {
    return undefined;
  }
  return variant.label;
};

const getCodeThemeExtension = async (variant: Variant) => {
  const quickPick = window.createQuickPick();
  quickPick.title = `Codemos Modern (${toggleFirstLetterCase(variant)}) 2/3`;
  quickPick.placeholder = "Select a code theme";
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  const auxiliaryThemeRegistries = getConfig().auxiliaryThemeRegistries;
  await prepareAuxiliaryThemeRegistries(auxiliaryThemeRegistries);
  const auxiliaryThemeRegistryIndexesWithId = getAuxiliaryThemeRegistryIndexes(
    auxiliaryThemeRegistries,
  );
  const auxiliaryThemeAsQuickPickItems: AuxiliaryThemeExtensionAsQuickPickItem[] =
    [];
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

const getAccentColor = async (variant: Variant) => {
  const accentColorHex7 = await window.showInputBox({
    title: `Codemos Modern (${toggleFirstLetterCase(variant)}) 2/3`,
    prompt: "Accent color in hex color code",
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
      { label: "$(circle-outline) None", description: "Adaptive mode" },
      { label: "$(circle-filled) Gentle", description: "Adaptive mode" },
      {
        label: "$(circle-large-filled) Aggressive",
        placeHolder: "Select an Adaptive mode",
        description: "Adaptive mode",
      },
    ],
    {
      title: `Codemos Modern (${toggleFirstLetterCase(variant)}) 3/3`,
      placeHolder:
        "Select an adaptive mode (Intensity of the accent color adaptation)",
      ignoreFocusOut: true,
    },
  );
  if (!adaptiveMode) {
    return undefined;
  }
  return adaptiveMode.label;
};
