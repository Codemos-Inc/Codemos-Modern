import { ThemeContext } from "../../../../../@types/theme";
import { opaque } from "../../../../../color";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "minimap.background": colors.bg.solid.surface,
    "minimap.errorHighlight": colors.basic.def.red.qua,
    "minimap.findMatchHighlight": colors.basic.def.mint.qua,
    "minimap.foregroundOpacity": opaque,
    "minimap.selectionHighlight": colors.basic.neutral.qua,
    "minimap.selectionOccurrenceHighlight": colors.basic.neutral.qui,
    "minimap.warningHighlight": colors.basic.def.orange.qua,
    "minimapGutter.addedBackground": colors.basic.def.green.pri,
    "minimapGutter.deletedBackground": colors.basic.def.red.pri,
    "minimapGutter.modifiedBackground": colors.basic.def.blue.pri,
    "minimapSlider.activeBackground": colors.fill.control.pressed,
    "minimapSlider.background": colors.fill.control.rest,
    "minimapSlider.hoverBackground": colors.fill.control.hover,
  };
};
