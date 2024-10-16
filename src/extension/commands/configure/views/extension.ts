import { QuickPickItemKind, window, type QuickPickItem } from "vscode";
import type { Variant } from "../../../../@types";
import { verifiedOwners } from "../../../../auxiliary/constants";
import {
  getAuxThemeRegIndexesWithId,
  prepAuxThemeRegs,
  prepAuxThemeRegsOffline,
} from "../../../../data";
import { l10nT } from "../../../../l10n";
import { getConfig } from "../../../utils";
import { getCommonTitle } from "../helpers";

interface AuxExtensionQPI extends QuickPickItem {
  auxExtensionId: string;
  label: string;
  description?: string;
  detail?: string;
  kind?: QuickPickItemKind;
}

export const extensionView = async (
  variant: Variant,
  themeKind: ThemeKind,
  isOnlineAvailable: boolean,
): Promise<string | null> => {
  const quickPick = window.createQuickPick<AuxExtensionQPI>();
  quickPick.title = getCommonTitle(variant, themeKind);
  quickPick.placeholder = l10nT("quickPick.extension.placeHolder$kind", [
    l10nT(`quickPick.*.title.kind.${themeKind}`),
  ]);
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  const auxThemeRegs = getConfig().auxiliaryThemeRegistries;
  let success: boolean;
  if (isOnlineAvailable) {
    success = await prepAuxThemeRegs(auxThemeRegs);
  } else {
    success = prepAuxThemeRegsOffline(auxThemeRegs);
  }
  if (!success) {
    quickPick.dispose();
    return null;
  }
  const auxThemeRegIndexesWithId = getAuxThemeRegIndexesWithId(auxThemeRegs);
  const auxExtensionQPIs: AuxExtensionQPI[] = [];
  auxExtensionQPIs.push({
    auxExtensionId: "_",
    label: l10nT("quickPick.*.separator.bundled"),
    kind: QuickPickItemKind.Separator,
  });
  auxExtensionQPIs.push({
    auxExtensionId: "_",
    label: "$(library) Codemos Modern",
    description: "Codemos-Inc/Codemos-Modern $(verified-filled)",
    detail: `$(organization) Codemos • $(compass) ${l10nT(
      "quickPick.extension.item.origin.bundled",
    )} • $(law) MIT`,
  });
  const installedAuxThemeQPIs: AuxExtensionQPI[] = [];
  const availableAuxThemeQPIs: AuxExtensionQPI[] = [];
  for (const auxThemeRegIndexWithId of auxThemeRegIndexesWithId) {
    const filteredAuxThemes = auxThemeRegIndexWithId.auxThemeRegIndex.themes[variant].filter(
      (auxTheme, index, self) => {
        return (
          index ===
          self.findIndex(
            (firstAuxTheme) =>
              firstAuxTheme.publisher === auxTheme.publisher &&
              firstAuxTheme.extension === auxTheme.extension,
          )
        );
      },
    );
    for (const filteredAuxTheme of filteredAuxThemes) {
      const installedOption = auxThemeRegIndexWithId.auxThemeRegIndex.themes[variant].find(
        (auxTheme) => {
          return auxTheme.extension === filteredAuxTheme.extension && auxTheme.installed;
        },
      );
      if (installedOption) {
        const index = filteredAuxThemes.findIndex((auxTheme) => {
          return auxTheme === filteredAuxTheme;
        });
        filteredAuxThemes[index] = installedOption;
      }
    }
    const isVerifiedOwner = verifiedOwners.find((verifiedOwner) => {
      return verifiedOwner === auxThemeRegIndexWithId.auxThemeRegId.owner.toLowerCase();
    })
      ? true
      : false;
    for (const auxTheme of filteredAuxThemes) {
      const auxExtensionQPI: AuxExtensionQPI = {
        auxExtensionId: `${auxThemeRegIndexWithId.auxThemeRegId.owner}/${auxThemeRegIndexWithId.auxThemeRegId.repo}/${auxTheme.publisher}/${auxTheme.extension}`,
        label: `$(extensions) ${auxTheme.extension}`,
        description: `${
          auxThemeRegIndexWithId.auxThemeRegId.owner
        }/${auxThemeRegIndexWithId.auxThemeRegId.repo} ${
          isVerifiedOwner ? "$(verified-filled)" : "$(unverified)"
        }`,
        detail: `$(organization) ${auxTheme.publisher} • $(compass) ${l10nT(
          `quickPick.extension.item.origin.${auxTheme.origin.toLowerCase()}`,
        )} • $(law) ${auxTheme.license}`,
      };
      if (auxTheme.installed) {
        installedAuxThemeQPIs.push(auxExtensionQPI);
      } else {
        if (isOnlineAvailable) {
          availableAuxThemeQPIs.push(auxExtensionQPI);
        }
      }
    }
  }
  if (installedAuxThemeQPIs.length > 0) {
    auxExtensionQPIs.push({
      auxExtensionId: "",
      label: l10nT("quickPick.*.separator.installed"),
      kind: QuickPickItemKind.Separator,
    });
    auxExtensionQPIs.push(...installedAuxThemeQPIs);
  }
  if (availableAuxThemeQPIs.length > 0) {
    auxExtensionQPIs.push({
      auxExtensionId: "",
      label: l10nT("quickPick.*.separator.available"),
      kind: QuickPickItemKind.Separator,
    });
    auxExtensionQPIs.push(...availableAuxThemeQPIs);
  }
  quickPick.busy = false;
  quickPick.items = auxExtensionQPIs;
  return await new Promise<string | null>((resolve) => {
    quickPick.onDidAccept(() => {
      const selectedItem = quickPick.selectedItems[0];
      quickPick.dispose();
      if (selectedItem) {
        return resolve(selectedItem.auxExtensionId);
      } else {
        return resolve(null);
      }
    });
  });
};
