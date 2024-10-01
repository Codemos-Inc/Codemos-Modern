import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const rules = {
    "breadcrumb.activeSelectionForeground": styles.fill.accentText.pri,
    "breadcrumb.background": styles.bg.solid.base,
    "breadcrumb.focusForeground": styles.fill.text.pri,
    "breadcrumb.foreground": styles.fill.text.sec,
    "breadcrumbPicker.background": styles.bg.solid.flyout,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    rules["breadcrumb.background"] = styles.bg.solid.canvas;
  } else if (design === "flat") {
    rules["breadcrumb.background"] = styles.bg.solid.canvas;
  }
  return rules;
};
