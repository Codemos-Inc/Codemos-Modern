import { QuickPickItemKind, Uri, window, type QuickPickItem } from "vscode";
import type { Variant } from "../../../../@types";
import { l10nT } from "../../../../l10n";
import { getIntensity } from "../../../../modern/variants";
import { prepIntPalette } from "../data/palette";
import { getCommonTitle } from "../helpers";

interface IntensityQPI extends QuickPickItem {
  _intensity: number;
  label: string;
  description?: string;
  detail?: string;
  kind?: QuickPickItemKind;
  iconPath?: Uri;
}

export const intensityView = async (
  variant: Variant,
  adaptationColor: string,
): Promise<number | null> => {
  const quickPick = window.createQuickPick<IntensityQPI>();
  quickPick.title = getCommonTitle(variant, "ui");
  quickPick.placeholder = l10nT("quickPick.intensity.placeHolder");
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  prepIntPalette(variant, adaptationColor);
  quickPick.items = [
    {
      _intensity: -1,
      label: l10nT("quickPick.*.separator.custom"),
      kind: QuickPickItemKind.Separator,
    },
    {
      _intensity: -1,
      label: l10nT("quickPick.*.item.custom.label"),
      description: l10nT("quickPick.intensity.item.desc"),
      detail: l10nT("quickPick.intensity.item.custom.detail"),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/palette_custom.svg`),
    },
    {
      _intensity: -1,
      label: l10nT("quickPick.intensity.separator.presets"),
      kind: QuickPickItemKind.Separator,
    },
    {
      _intensity: getIntensity(variant, "none"),
      label: `${l10nT("quickPick.intensity.item.none.label")} (${getIntensity(variant, "none")}%)`,
      description: l10nT("quickPick.intensity.item.desc"),
      detail: l10nT("quickPick.intensity.item.none.detail"),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/intensity_none.svg`),
    },
    {
      _intensity: getIntensity(variant, "gentle"),
      label: `${l10nT("quickPick.intensity.item.gentle.label")} (${getIntensity(variant, "gentle")}%)`,
      description: l10nT("quickPick.intensity.item.desc"),
      detail: l10nT("quickPick.intensity.item.gentle.detail"),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/intensity_gentle.svg`),
    },
    {
      _intensity: getIntensity(variant, "moderate"),
      label: `${l10nT("quickPick.intensity.item.moderate.label")} (${getIntensity(variant, "moderate")}%)`,
      description: l10nT("quickPick.intensity.item.desc"),
      detail: l10nT("quickPick.intensity.item.moderate.detail"),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/intensity_moderate.svg`),
    },
    {
      _intensity: getIntensity(variant, "aggressive"),
      label: `${l10nT("quickPick.intensity.item.aggressive.label")} (${getIntensity(variant, "aggressive")}%)`,
      description: l10nT("quickPick.intensity.item.desc"),
      detail: l10nT("quickPick.intensity.item.aggressive.detail"),
      iconPath: Uri.file(`${__dirname}/../../res/icons/${variant}/intensity_aggressive.svg`),
    },
  ];
  quickPick.busy = false;
  return await new Promise<number | null>((resolve) => {
    quickPick.onDidAccept(() => {
      const selectedItem = quickPick.selectedItems[0];
      quickPick.dispose();
      if (selectedItem) {
        return resolve(selectedItem._intensity);
      } else {
        return resolve(null);
      }
    });
  });
};
