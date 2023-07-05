import { window } from "vscode";
import { AdaptiveMode, Variant } from "../@types/modern";
import { getHex6FromHex7, validateHex6, verifyContrast } from "../color";
import { updateConfig } from "./utils";
import { toggleFirstLetterCase } from "./helpers";

export const configure = async () => {
  const variant = await getVariant();
  if (!variant) {
    return;
  }
  const accentColor = await getAccentColor(variant);
  if (!accentColor) {
    return;
  }
  const adaptiveMode = await getAdaptiveMode(variant);
  if (!adaptiveMode) {
    return;
  }
  updateConfig(variant, accentColor, adaptiveMode);
};

const getVariant = async () => {
  const variant = await window.showQuickPick(
    [
      { label: `$(moon) Dark`, description: "Variant" },
      { label: "$(sun) Light", description: "Variant" },
    ],
    {
      title: "Codemos Modern 1/3",
      placeHolder: "Select a variant",
      ignoreFocusOut: true,
    }
  );
  if (!variant) {
    return undefined;
  }
  return toggleFirstLetterCase(variant.label) as Variant;
};

const getAccentColor = async (variant: Variant) => {
  const accentColorHex7 = await window.showInputBox({
    title: `Codemos Modern (${toggleFirstLetterCase(variant)}) 2/3`,
    prompt: "Accent color in hex color code (e.g., #60CDFF)",
    value: "#XXXXXX",
    valueSelection: [1, 7],
    ignoreFocusOut: true,
  });
  if (!accentColorHex7) {
    return undefined;
  }
  const accentColor = getHex6FromHex7(accentColorHex7);
  if (!validateHex6(accentColor)) {
    await window.showErrorMessage("Invalid color code provided");
    return undefined;
  }
  if (!verifyContrast(accentColor, variant === "dark" ? "000000" : "FFFFFF")) {
    await window.showErrorMessage(
      "Accent color must have at least 4.5:1 contrast with white"
    );
    return undefined;
  }
  return accentColor;
};

const getAdaptiveMode = async (variant: Variant) => {
  const adaptiveMode = await window.showQuickPick(
    [
      { label: "$(circle=slash) None", description: "Adaptive mode" },
      { label: "$(circle-filled) Gentle", description: "Adaptive mode" },
      {
        label: "$(circle-large-filled) Aggressive",
        description: "Adaptive mode",
      },
    ],
    {
      title: `Codemos Modern (${toggleFirstLetterCase(variant)}) 3/3`,
      placeHolder:
        "Select an adaptive mode (Intensity of the accent color adaptation)",
      ignoreFocusOut: true,
    }
  );
  if (!adaptiveMode) {
    return undefined;
  }
  return toggleFirstLetterCase(adaptiveMode.label) as AdaptiveMode;
};
