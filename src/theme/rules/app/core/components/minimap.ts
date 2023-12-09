import { ThemeContext } from "../../../../../@types";
import { OPAQUE } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const minimapRules = {
    "minimap.findMatchHighlight": colors.basic.def.mint.qua,
    "minimap.selectionHighlight": colors.basic.neutral.qua,
    "minimap.errorHighlight": colors.basic.def.red.qua,
    "minimap.warningHighlight": colors.basic.def.orange.qua,
    "minimap.background": colors.bg.solid.surface,
    "minimap.selectionOccurrenceHighlight": colors.basic.neutral.qui,
    "minimap.foregroundOpacity": OPAQUE,
    "minimap.infoHighlight": "#FF0000",
    "minimapSlider.background": colors.fill.control.rest,
    "minimapSlider.hoverBackground": colors.fill.control.hover,
    "minimapSlider.activeBackground": colors.fill.control.pressed,
    "minimapGutter.addedBackground": colors.basic.def.green.pri,
    "minimapGutter.modifiedBackground": colors.basic.def.blue.pri,
    "minimapGutter.deletedBackground": colors.basic.def.red.pri,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    minimapRules["minimap.background"] = colors.bg.solid.canvas;
  }
  return minimapRules;
};
