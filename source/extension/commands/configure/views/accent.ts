import { QuickPickItemKind, Uri, window, type QuickPickItem } from "vscode";
import type { Variant } from "../../../../@types";
import { l10nT } from "../../../../l10n";
import { palette as darkPalette } from "../../../../modern/variants/dark/modern";
import { palette as lightPalette } from "../../../../modern/variants/light/modern";
import { prepColPalette } from "../data/palette";
import { getCommonTitle, getPaletteItemDetail } from "../helpers";

interface AccentPaletteQPI extends QuickPickItem {
  _color:
    | ""
    | "custom"
    | "brown"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "mint"
    | "blue"
    | "purple"
    | "pink";
  label: string;
  description?: string;
  detail?: string;
  iconPath?: Uri;
}

export const accentView = async (variant: Variant): Promise<string | null> => {
  const quickPick = window.createQuickPick<AccentPaletteQPI>();
  quickPick.title = getCommonTitle(variant, "ui");
  quickPick.placeholder = l10nT("quickPick.accent.placeHolder");
  quickPick.ignoreFocusOut = true;
  quickPick.busy = true;
  quickPick.show();
  prepColPalette(variant, null);
  quickPick.items = [
    {
      _color: "",
      label: l10nT("quickPick.*.separator.custom"),
      kind: QuickPickItemKind.Separator,
    },
    {
      _color: "custom",
      label: l10nT("quickPick.*.item.custom.label"),
      description: l10nT("quickPick.accent.item.desc"),
      detail: l10nT("quickPick.*.item.custom.detail"),
      iconPath: Uri.file(`${__dirname}/../../resource/icons/${variant}/palette_custom.svg`),
    },
    {
      _color: "",
      label: l10nT("quickPick.*.separator.palette"),
      kind: QuickPickItemKind.Separator,
    },
    {
      _color: "brown",
      label: l10nT("quickPick.*.item.brown.label"),
      description: l10nT("quickPick.accent.item.desc"),
      detail: getPaletteItemDetail("brown", variant),
      iconPath: Uri.file(`${__dirname}/../../resource/icons/${variant}/palette_brown.svg`),
    },
    {
      _color: "red",
      label: l10nT("quickPick.*.item.red.label"),
      description: l10nT("quickPick.accent.item.desc"),
      detail: getPaletteItemDetail("red", variant),
      iconPath: Uri.file(`${__dirname}/../../resource/icons/${variant}/palette_red.svg`),
    },
    {
      _color: "orange",
      label: l10nT("quickPick.*.item.orange.label"),
      description: l10nT("quickPick.accent.item.desc"),
      detail: getPaletteItemDetail("orange", variant),
      iconPath: Uri.file(`${__dirname}/../../resource/icons/${variant}/palette_orange.svg`),
    },
    {
      _color: "yellow",
      label: l10nT("quickPick.*.item.yellow.label"),
      description: l10nT("quickPick.accent.item.desc"),
      detail: getPaletteItemDetail("yellow", variant),
      iconPath: Uri.file(`${__dirname}/../../resource/icons/${variant}/palette_yellow.svg`),
    },
    {
      _color: "green",
      label: l10nT("quickPick.*.item.green.label"),
      description: l10nT("quickPick.accent.item.desc"),
      detail: getPaletteItemDetail("green", variant),
      iconPath: Uri.file(`${__dirname}/../../resource/icons/${variant}/palette_green.svg`),
    },
    {
      _color: "mint",
      label: l10nT("quickPick.*.item.mint.label"),
      description: l10nT("quickPick.accent.item.desc"),
      detail: getPaletteItemDetail("mint", variant),
      iconPath: Uri.file(`${__dirname}/../../resource/icons/${variant}/palette_mint.svg`),
    },
    {
      _color: "blue",
      label: l10nT("quickPick.*.item.blue.label"),
      description: l10nT("quickPick.accent.item.desc"),
      detail: getPaletteItemDetail("blue", variant),
      iconPath: Uri.file(`${__dirname}/../../resource/icons/${variant}/palette_blue.svg`),
    },
    {
      _color: "purple",
      label: l10nT("quickPick.*.item.purple.label"),
      description: l10nT("quickPick.accent.item.desc"),
      detail: getPaletteItemDetail("purple", variant),
      iconPath: Uri.file(`${__dirname}/../../resource/icons/${variant}/palette_purple.svg`),
    },
    {
      _color: "pink",
      label: l10nT("quickPick.*.item.pink.label"),
      description: l10nT("quickPick.accent.item.desc"),
      detail: getPaletteItemDetail("pink", variant),
      iconPath: Uri.file(`${__dirname}/../../resource/icons/${variant}/palette_pink.svg`),
    },
  ];
  quickPick.busy = false;
  return await new Promise<string | null>((resolve) => {
    quickPick.onDidAccept(() => {
      if (!quickPick.selectedItems[0]) {
        quickPick.dispose();
        return resolve(null);
      }
      const selectedItem = quickPick.selectedItems[0]._color;
      quickPick.dispose();
      if (selectedItem) {
        switch (variant) {
          case "dark":
            switch (selectedItem) {
              case "custom":
                return resolve("_");
              case "brown":
                return resolve(darkPalette.basic.def.brown);
              case "red":
                return resolve(darkPalette.basic.def.red);
              case "orange":
                return resolve(darkPalette.basic.def.orange);
              case "yellow":
                return resolve(darkPalette.basic.def.yellow);
              case "green":
                return resolve(darkPalette.basic.def.green);
              case "mint":
                return resolve(darkPalette.basic.def.mint);
              case "blue":
                return resolve(darkPalette.basic.def.blue);
              case "purple":
                return resolve(darkPalette.basic.def.purple);
              case "pink":
                return resolve(darkPalette.basic.def.pink);
              default:
                return resolve(null);
            }
          case "light":
            switch (selectedItem) {
              case "custom":
                return resolve("_");
              case "brown":
                return resolve(lightPalette.basic.def.brown);
              case "red":
                return resolve(lightPalette.basic.def.red);
              case "orange":
                return resolve(lightPalette.basic.def.orange);
              case "yellow":
                return resolve(lightPalette.basic.def.yellow);
              case "green":
                return resolve(lightPalette.basic.def.green);
              case "mint":
                return resolve(lightPalette.basic.def.mint);
              case "blue":
                return resolve(lightPalette.basic.def.blue);
              case "purple":
                return resolve(lightPalette.basic.def.purple);
              case "pink":
                return resolve(lightPalette.basic.def.pink);
              default:
                return resolve(null);
            }
          default:
            return resolve(null);
        }
      } else {
        return resolve(null);
      }
    });
  });
};
