import { QuickPickItemKind, window, type QuickPickItem } from "vscode";
import type { Variant } from "../../../../@types";
import { verifiedOwners } from "../../../../auxiliary/constants";
import { getAuxThemeRegIndexesWithId, prepAuxTheme, prepAuxThemeOffline } from "../../../../data";
import { getAuxThemeId } from "../../../../data/helpers";
import { l10nT } from "../../../../l10n";
import { toggleInitialCase } from "../../../helpers";
import { getConfig } from "../../../utils";
import { getCommonTitle } from "../helpers";

interface AuxThemeQPI extends QuickPickItem {
  auxThemeId: string;
  label: string;
  description?: string;
  detail?: string;
  kind?: QuickPickItemKind;
}

export const themeView = async (
  variant: Variant,
  auxExtensionId: string,
  themeKind: ThemeKind,
  isOnlineAvailable: boolean,
): Promise<string | null> => {
  const quickPick = window.createQuickPick<AuxThemeQPI>();
  quickPick.title = getCommonTitle(variant, themeKind);
  quickPick.placeholder = l10nT("quickPick.theme.placeHolder$extension$kind", [
    getAuxThemeId(auxExtensionId + "/theme").extension,
    l10nT(`quickPick.*.title.kind.${themeKind}`),
  ]);
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  const auxThemeRegs = getConfig().auxiliaryThemeRegistries;
  const auxThemeRegIndexesWithId = getAuxThemeRegIndexesWithId(auxThemeRegs);
  const auxThemesQPIs: AuxThemeQPI[] = [];
  const installedAuxThemeQPIs: AuxThemeQPI[] = [];
  const availableAuxThemeQPIs: AuxThemeQPI[] = [];
  const auxThemeId = getAuxThemeId(auxExtensionId + "/theme");
  for (const auxThemeRegIndexWithId of auxThemeRegIndexesWithId) {
    const filteredAuxThemes = auxThemeRegIndexWithId.auxThemeRegIndex.themes[variant].filter(
      (auxTheme) => {
        return (
          auxTheme.publisher === auxThemeId.publisher && auxTheme.extension === auxThemeId.extension
        );
      },
    );
    const isVerifiedOwner = verifiedOwners.find((verifiedOwner) => {
      return verifiedOwner === auxThemeRegIndexWithId.auxThemeRegId.owner.toLowerCase();
    })
      ? true
      : false;
    for (const auxTheme of filteredAuxThemes) {
      const auxThemeQPI: AuxThemeQPI = {
        auxThemeId: `${auxThemeRegIndexWithId.auxThemeRegId.owner}/${auxThemeRegIndexWithId.auxThemeRegId.repo}/${auxTheme.publisher}/${auxTheme.extension}/${auxTheme.theme}`,
        label: `$(symbol-color) ${auxTheme.theme}`,
        description: `${
          auxThemeRegIndexWithId.auxThemeRegId.owner
        }/${auxThemeRegIndexWithId.auxThemeRegId.repo} ${
          isVerifiedOwner ? "$(verified-filled)" : "$(unverified)"
        }`,
        detail: `$(organization) ${auxTheme.publisher} • $(extensions) ${
          auxTheme.extension
        } • $(color-mode) ${toggleInitialCase(variant)}`,
      };
      if (auxTheme.installed) {
        installedAuxThemeQPIs.push(auxThemeQPI);
      } else {
        if (isOnlineAvailable) {
          availableAuxThemeQPIs.push(auxThemeQPI);
        }
      }
    }
  }
  if (installedAuxThemeQPIs.length > 0) {
    auxThemesQPIs.push({
      auxThemeId: "",
      label: l10nT("quickPick.*.separator.installed"),
      kind: QuickPickItemKind.Separator,
    });
    auxThemesQPIs.push(...installedAuxThemeQPIs);
  }
  if (availableAuxThemeQPIs.length > 0) {
    auxThemesQPIs.push({
      auxThemeId: "",
      label: l10nT("quickPick.*.separator.available"),
      kind: QuickPickItemKind.Separator,
    });
    auxThemesQPIs.push(...availableAuxThemeQPIs);
  }
  quickPick.busy = false;
  quickPick.items = auxThemesQPIs;
  return await new Promise<string | null>((resolve) => {
    quickPick.onDidAccept(async () => {
      const selectedItem = quickPick.selectedItems[0];
      quickPick.dispose();
      if (selectedItem) {
        const selectedAuxThemeId = selectedItem.auxThemeId;
        if (selectedAuxThemeId) {
          let success: boolean;
          if (isOnlineAvailable) {
            success = await prepAuxTheme(auxThemeRegs, selectedAuxThemeId, variant);
          } else {
            success = await prepAuxThemeOffline(auxThemeRegs, selectedAuxThemeId, variant);
          }
          if (!success) {
            return resolve(null);
          }
          return resolve(selectedAuxThemeId);
        } else {
          return resolve(null);
        }
      } else {
        return resolve(null);
      }
    });
  });
};
