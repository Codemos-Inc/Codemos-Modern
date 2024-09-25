import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const rules = {
    "scrollbar.shadow": colors.effect.shadow.default,
    "scrollbarSlider.activeBackground": colors.fill.control.pressed,
    "scrollbarSlider.background": colors.fill.control.rest,
    "scrollbarSlider.hoverBackground": colors.fill.control.hover,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    rules["scrollbar.shadow"] = TRANSPARENT;
  } else if (design === "flat") {
    rules["scrollbar.shadow"] = TRANSPARENT;
  }
  return rules;
};
