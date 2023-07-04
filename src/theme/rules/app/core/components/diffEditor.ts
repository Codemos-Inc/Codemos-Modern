import { ThemeContext } from "../../../../../@types/theme";
import { transparent } from "../../../../../color";
export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "diffEditor.border": colors.stroke.divider.default,
    "diffEditor.diagonalFill": colors.stroke.divider.default,
    "diffEditor.insertedLineBackground": colors.basic.def.green.qui,
    "diffEditor.insertedTextBackground": colors.basic.def.green.qua,
    "diffEditor.insertedTextBorder": transparent,
    "diffEditor.removedLineBackground": colors.basic.def.red.qui,
    "diffEditor.removedTextBackground": colors.basic.def.red.qua,
    "diffEditor.removedTextBorder": transparent,
    "diffEditor.unchangedRegionBackground": colors.fill.control.prominent,
    "diffEditorGutter.insertedLineBackground": transparent,
    "diffEditorGutter.removedLineBackground": transparent,
    "diffEditorOverview.insertedForeground": colors.basic.def.green.sec,
    "diffEditorOverview.removedForeground": colors.basic.def.red.sec,
  };
};
