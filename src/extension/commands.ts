import { window, workspace } from "vscode";
import { AdaptiveMode, Variant } from "../@types";
import { validateHex6 } from "../color";
import { toggleFirstLetterCase } from "./helpers";
import { updateConfig } from "./utils";

export const configure = async () => {
  const variantLabel = await getVariantLabel();
  if (!variantLabel) {
    return;
  }
  const variant = toggleFirstLetterCase(
    variantLabel.replace(/\$\(.*\) /g, "")
  ) as Variant;
  const accentColor = await getAccentColor(variant);
  if (!accentColor) {
    return;
  }
  const adaptiveModeLabel = await getAdaptiveModeLabel(variant);
  if (!adaptiveModeLabel) {
    return;
  }
  const adaptiveMode = toggleFirstLetterCase(
    adaptiveModeLabel.replace(/\$\(.*\) /g, "")
  ) as AdaptiveMode;
  updateConfig(variant, accentColor, adaptiveMode);
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
    }
  );
  if (!variant) {
    return undefined;
  }
  return variant.label;
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
    }
  );
  if (!adaptiveMode) {
    return undefined;
  }
  return adaptiveMode.label;
};
