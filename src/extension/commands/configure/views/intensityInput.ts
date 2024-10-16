import { window } from "vscode";
import type { Variant } from "../../../../@types";
import { l10nT } from "../../../../l10n";
import { getIntensity } from "../../../../modern/variants";
import { validatePercentage } from "../../../helpers";
import { getCommonTitle } from "../helpers";

export const intensityInputView = async (variant: Variant): Promise<number | null> => {
  const number = await window.showInputBox({
    title: getCommonTitle(variant, "ui"),
    prompt: l10nT("quickPick.intensityInput.prompt"),
    value: getIntensity(variant, "moderate").toString(),
    valueSelection: [0, getIntensity(variant, "moderate").toString().length],
    ignoreFocusOut: true,
    validateInput(value) {
      if (!validatePercentage(value)) {
        return l10nT("quickPick.intensityInput.error");
      }
      return null;
    },
  });
  if (!number) {
    return null;
  }
  return Number(number);
};
