import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const rules = {
    "debugExceptionWidget.background": styles.basic.loc.red.pri,
    "debugExceptionWidget.border": styles.stroke.surface.flyout,
    "editorGhostText.background": TRANSPARENT,
    "editorGhostText.border": TRANSPARENT,
    "editorGhostText.foreground": styles.fill.text.ghost,
    "editorHoverWidget.background": styles.bg.solid.flyout,
    "editorHoverWidget.border": styles.stroke.surface.flyout,
    "editorHoverWidget.foreground": styles.fill.text.pri,
    "editorHoverWidget.highlightForeground": styles.fill.text.active,
    "editorHoverWidget.statusBarBackground": styles.fill.control.subtle,
    "editorMarkerNavigation.background": styles.bg.solid.flyout,
    "editorMarkerNavigationError.background": styles.basic.def.red.pri,
    "editorMarkerNavigationError.headerBackground": styles.basic.loc.red.pri,
    "editorMarkerNavigationInfo.background": styles.basic.def.blue.pri,
    "editorMarkerNavigationInfo.headerBackground": styles.basic.loc.blue.pri,
    "editorMarkerNavigationWarning.background": styles.basic.def.orange.pri,
    "editorMarkerNavigationWarning.headerBackground": styles.basic.loc.orange.pri,
    "editorStickyScroll.background": styles.bg.solid.surface,
    "editorStickyScroll.border": styles.stroke.divider.default,
    "editorStickyScroll.shadow": styles.effect.shadow.default,
    "editorStickyScrollHover.background": styles.fill.control.rest,
    "editorSuggestWidget.background": styles.bg.solid.flyout,
    "editorSuggestWidget.border": styles.stroke.surface.flyout,
    "editorSuggestWidget.focusHighlightForeground": styles.fill.accentText.pri,
    "editorSuggestWidget.foreground": styles.fill.text.sec,
    "editorSuggestWidget.highlightForeground": styles.fill.accentText.pri,
    "editorSuggestWidget.selectedBackground": styles.fill.control.rest,
    "editorSuggestWidget.selectedForeground": styles.fill.text.pri,
    "editorSuggestWidget.selectedIconForeground": styles.fill.text.pri,
    "editorSuggestWidgetStatus.foreground": styles.fill.accent.pri,
    "editorWidget.background": styles.bg.solid.flyout,
    "editorWidget.border": styles.stroke.surface.flyout,
    "editorWidget.foreground": styles.fill.text.pri,
    "editorWidget.resizeBorder": styles.fill.accent.pri,
  };
  const design = themeContext.variantConfig.design;
  if (design === "natural" || design === "minimal") {
    rules["editorStickyScroll.background"] = styles.bg.solid.layer;
  } else if (design === "flat") {
    rules["editorStickyScroll.background"] = styles.bg.solid.layer;
  }
  return rules;
};
