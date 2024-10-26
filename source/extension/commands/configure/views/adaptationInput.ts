import { window } from "vscode";
import type { Variant } from "../../../../@types";
import { validateHex6 } from "../../../../color";
import { l10nT } from "../../../../l10n";
import { getCommonTitle } from "../helpers";

export const adaptationInputView = async (variant: Variant): Promise<string | null> => {
  const colorHex7 = await window.showInputBox({
    title: getCommonTitle(variant, "ui"),
    prompt: l10nT("quickPick.adaptationInput.prompt"),
    value: "#XXXXXX",
    valueSelection: [1, 7],
    ignoreFocusOut: true,
    validateInput(value) {
      if (!validateHex6(value)) {
        return l10nT("quickPick.adaptationInput.error");
      }
      return null;
    },
  });
  if (!colorHex7) {
    return null;
  }
  return colorHex7;
};
