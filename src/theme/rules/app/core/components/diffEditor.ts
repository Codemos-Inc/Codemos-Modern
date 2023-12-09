import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";
export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "diffEditor.insertedTextBackground": colors.basic.def.green.qua,
    "diffEditor.insertedTextBorder": TRANSPARENT,
    "diffEditor.removedTextBackground": colors.basic.def.red.qua,
    "diffEditor.removedTextBorder": TRANSPARENT,
    "diffEditor.border": colors.stroke.divider.default,
    "diffEditor.diagonalFill": colors.stroke.divider.default,
    "diffEditor.insertedLineBackground": colors.basic.def.green.qui,
    "diffEditor.removedLineBackground": colors.basic.def.red.qui,
    "diffEditorGutter.insertedLineBackground": TRANSPARENT,
    "diffEditorGutter.removedLineBackground": TRANSPARENT,
    "diffEditorOverview.insertedForeground": colors.basic.def.green.sec,
    "diffEditorOverview.removedForeground": colors.basic.def.red.sec,
    "diffEditor.unchangedRegionBackground": colors.fill.control.prominent,
    "diffEditor.unchangedRegionForeground": colors.fill.text.sec,
    "diffEditor.unchangedRegionShadow": "#FF0000",
    "diffEditor.unchangedCodeBackground": colors.basic.neutral.sep,
    "diffEditor.move.border": colors.stroke.focus.default,
    "diffEditor.moveActive.border": "#FF0000",
    "multiDiffEditor.headerBackground": "#FF0000",
  };
};
