import { window, type QuickPickItem } from "vscode";
import type { Design, Variant } from "../../../../@types";
import { l10nT } from "../../../../l10n";
import { getCommonTitle } from "../helpers";

interface DesignQPI extends QuickPickItem {
  _design: Design;
  label: string;
  description: string;
  detail: string;
}

export const designView = async (variant: Variant): Promise<Design | null> => {
  const selectedItem = await window.showQuickPick<DesignQPI>(
    [
      {
        _design: "modern",
        label: `$(symbol-color) ${l10nT("quickPick.design.item.modern.label")}`,
        description: l10nT("quickPick.design.item.desc"),
        detail: l10nT("quickPick.design.item.modern.detail"),
      },
      {
        _design: "natural",
        label: `$(symbol-color) ${l10nT("quickPick.design.item.natural.label")}`,
        description: l10nT("quickPick.design.item.desc"),
        detail: l10nT("quickPick.design.item.natural.detail"),
      },
      {
        _design: "minimal",
        label: `$(symbol-color) ${l10nT("quickPick.design.item.minimal.label")}`,
        description: l10nT("quickPick.design.item.desc"),
        detail: l10nT("quickPick.design.item.minimal.detail"),
      },
      {
        _design: "flat",
        label: `$(symbol-color) ${l10nT("quickPick.design.item.flat.label")}`,
        description: l10nT("quickPick.design.item.desc"),
        detail: l10nT("quickPick.design.item.flat.detail"),
      },
    ],
    {
      title: getCommonTitle(variant, "ui"),
      placeHolder: l10nT("quickPick.design.placeHolder"),
      ignoreFocusOut: true,
    },
  );
  if (!selectedItem) {
    return null;
  }
  return selectedItem._design;
};
