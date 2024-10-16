import { ThemeContext } from "../../../../../@types";
import { OPAQUE } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const rules = {
    "minimap.background": styles.bg.solid.surface,
    "minimap.errorHighlight": styles.basic.def.red.qua,
    "minimap.findMatchHighlight": styles.basic.def.mint.qua,
    "minimap.foregroundOpacity": OPAQUE,
    "minimap.infoHighlight": styles.basic.def.blue.qua,
    "minimap.selectionHighlight": styles.basic.neutral.qua,
    "minimap.selectionOccurrenceHighlight": styles.basic.neutral.qui,
    "minimap.warningHighlight": styles.basic.def.orange.qua,
    "minimapGutter.addedBackground": styles.basic.def.green.pri,
    "minimapGutter.deletedBackground": styles.basic.def.red.pri,
    "minimapGutter.modifiedBackground": styles.basic.def.blue.pri,
    "minimapSlider.activeBackground": styles.fill.control.pressed,
    "minimapSlider.background": styles.fill.control.rest,
    "minimapSlider.hoverBackground": styles.fill.control.hover,
  };
  const design = themeContext.variantConfig.design;
  if (design === "natural" || design === "minimal") {
    rules["minimap.background"] = styles.bg.solid.layer;
  } else if (design === "flat") {
    rules["minimap.background"] = styles.bg.solid.layer;
  }
  return rules;
};
