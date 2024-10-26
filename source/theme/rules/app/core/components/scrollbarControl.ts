import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const rules = {
    "scrollbar.shadow": styles.effect.shadow.default,
    "scrollbarSlider.activeBackground": styles.fill.control.pressed,
    "scrollbarSlider.background": styles.fill.control.rest,
    "scrollbarSlider.hoverBackground": styles.fill.control.hover,
  };
  const design = themeContext.variantConfig.design;
  if (design === "natural" || design === "minimal") {
    rules["scrollbar.shadow"] = TRANSPARENT;
  } else if (design === "flat") {
    rules["scrollbar.shadow"] = TRANSPARENT;
  }
  return rules;
};
