import { ColorThemeKind, Uri, window, type QuickPickItem } from "vscode";
import type { Variant } from "../../../../@types";
import { l10nT } from "../../../../l10n";

interface VariantQPI extends QuickPickItem {
  _variant: Variant;
  label: string;
  description: string;
  detail: string;
  iconPath: Uri;
}

export const variantView = async (): Promise<Variant | null> => {
  // 🟡 Hacky workaround for the vscode api not picking the correct icon based on the active ui theme
  let darkModeIconUri: Uri;
  let lightModeIconUri: Uri;
  switch (window.activeColorTheme.kind) {
    case ColorThemeKind.Dark || ColorThemeKind.HighContrast:
      darkModeIconUri = Uri.file(`${__dirname}/../../resource/icons/dark/dark_mode.svg`);
      lightModeIconUri = Uri.file(`${__dirname}/../../resource/icons/dark/light_mode.svg`);
      break;
    case ColorThemeKind.Light || ColorThemeKind.HighContrastLight:
      darkModeIconUri = Uri.file(`${__dirname}/../../resource/icons/light/dark_mode.svg`);
      lightModeIconUri = Uri.file(`${__dirname}/../../resource/icons/light/light_mode.svg`);
      break;
    default:
      darkModeIconUri = Uri.file(`${__dirname}/../../resource/icons/dark/dark_mode.svg`);
      lightModeIconUri = Uri.file(`${__dirname}/../../resource/icons/dark/light_mode.svg`);
      break;
  }
  const selectedItem = await window.showQuickPick<VariantQPI>(
    [
      {
        _variant: "dark",
        label: l10nT("quickPick.variant.item.dark.label"),
        description: l10nT("quickPick.variant.item.desc"),
        detail: l10nT("quickPick.variant.item.dark.detail"),
        iconPath: darkModeIconUri,
      },
      {
        _variant: "light",
        label: l10nT("quickPick.variant.item.light.label"),
        description: l10nT("quickPick.variant.item.desc"),
        detail: l10nT("quickPick.variant.item.light.detail"),
        iconPath: lightModeIconUri,
      },
    ],
    {
      title: l10nT("quickPick.variant.title"),
      placeHolder: l10nT("quickPick.variant.placeHolder"),
      ignoreFocusOut: true,
    },
  );
  if (!selectedItem) {
    return null;
  }
  return selectedItem._variant;
};
