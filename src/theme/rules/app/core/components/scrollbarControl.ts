import { ThemeContext } from "../../../../../@types/index";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const scrollbarControlRules = {
    "scrollbar.shadow": colors.effect.shadow.default,
    "scrollbarSlider.activeBackground": colors.fill.control.pressed,
    "scrollbarSlider.background": colors.fill.control.rest,
    "scrollbarSlider.hoverBackground": colors.fill.control.hover,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    scrollbarControlRules["scrollbar.shadow"] = TRANSPARENT;
  }
  return scrollbarControlRules;
};
