import { ConfigurationTarget, workspace } from "vscode";
import type { Variant } from "../../../@types";
import { l10nT } from "../../../l10n";
import { toggleInitialCase } from "../../helpers";

export const getCommonTitle = (variant: Variant, themeKind: ThemeKind): string => {
  switch (themeKind) {
    case "ui":
      return l10nT("quickPick.*.title$variant$kind", [
        l10nT(`quickPick.variant.item.${variant}.label`),
        l10nT(`quickPick.*.title.kind.ui`),
      ]);
    case "code":
      return l10nT("quickPick.*.title$variant$kind", [
        l10nT(`quickPick.variant.item.${variant}.label`),
        l10nT(`quickPick.*.title.kind.code`),
      ]);
  }
};

export const getPaletteItemDetail = (color: string, variant: Variant): string => {
  return l10nT("quickPick.*.item.detail$color$variant", [
    l10nT(`quickPick.*.item.${color}.label`),
    toggleInitialCase(l10nT(`quickPick.variant.item.${variant}.label`)),
  ]);
};

export const applyTheme = async (variant: Variant): Promise<void> => {
  // Check if auto detect color scheme is enabled
  const autoDetectColorScheme = workspace
    .getConfiguration("window")
    .get<boolean>("autoDetectColorScheme");
  // Error out if autoDetectColorScheme is undefined
  if (autoDetectColorScheme === undefined) {
    throw new Error("autoDetectColorScheme is undefined");
  }
  // Check if auto detect high contrast is enabled
  const autoDetectHighContrast = workspace
    .getConfiguration("window")
    .get<boolean>("autoDetectHighContrast");
  // Error out if autoDetectHighContrast is undefined
  if (autoDetectHighContrast === undefined) {
    throw new Error("autoDetectHighContrast is undefined");
  }
  if (autoDetectColorScheme || autoDetectHighContrast) {
    await workspace
      .getConfiguration("workbench")
      .update(
        "preferredDarkColorTheme",
        `Codemos Modern (${toggleInitialCase(variant)})`,
        ConfigurationTarget.Global,
      );
    await workspace
      .getConfiguration("workbench")
      .update(
        "preferredHighContrastColorTheme",
        `Codemos Modern (${toggleInitialCase(variant)})`,
        ConfigurationTarget.Global,
      );
    // Set the preferred light color theme
    await workspace
      .getConfiguration("workbench")
      .update(
        "preferredLightColorTheme",
        `Codemos Modern (${toggleInitialCase(variant)})`,
        ConfigurationTarget.Global,
      );
    await workspace
      .getConfiguration("workbench")
      .update(
        "preferredHighContrastLightColorTheme",
        `Codemos Modern (${toggleInitialCase(variant)})`,
        ConfigurationTarget.Global,
      );
  }
  // Set the color theme
  await workspace
    .getConfiguration("workbench")
    .update(
      "colorTheme",
      `Codemos Modern (${toggleInitialCase(variant)})`,
      ConfigurationTarget.Global,
    );
};
