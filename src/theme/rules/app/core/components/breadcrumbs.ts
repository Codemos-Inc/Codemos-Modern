import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const rules = {
    "breadcrumb.foreground": colors.fill.text.sec,
    "breadcrumb.background": colors.bg.solid.base,
    "breadcrumb.focusForeground": colors.fill.text.pri,
    "breadcrumb.activeSelectionForeground": colors.fill.accentText.pri,
    "breadcrumbPicker.background": colors.bg.solid.flyout,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    rules["breadcrumb.background"] = colors.bg.solid.canvas;
  } else if (design === "flat") {
    rules["breadcrumb.background"] = colors.bg.solid.canvas;
  }
  return rules;
};
