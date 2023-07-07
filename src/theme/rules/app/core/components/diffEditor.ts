import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";
export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "diffEditor.border": colors.stroke.divider.default,
    "diffEditor.diagonalFill": colors.stroke.divider.default,
    "diffEditor.insertedLineBackground": colors.basic.def.green.qui,
    "diffEditor.insertedTextBackground": colors.basic.def.green.qua,
    "diffEditor.insertedTextBorder": TRANSPARENT,
    "diffEditor.move.border": colors.stroke.focus,
    "diffEditor.removedLineBackground": colors.basic.def.red.qui,
    "diffEditor.removedTextBackground": colors.basic.def.red.qua,
    "diffEditor.removedTextBorder": TRANSPARENT,
    "diffEditor.unchangedCodeBackground": colors.basic.neutral.sep,
    "diffEditor.unchangedRegionBackground": colors.fill.control.prominent,
    "diffEditor.unchangedRegionForeground": colors.fill.text.sec,
    "diffEditorGutter.insertedLineBackground": TRANSPARENT,
    "diffEditorGutter.removedLineBackground": TRANSPARENT,
    "diffEditorOverview.insertedForeground": colors.basic.def.green.sec,
    "diffEditorOverview.removedForeground": colors.basic.def.red.sec,
  };
};
