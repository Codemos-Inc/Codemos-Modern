import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const editorWidgetRules = {
    "editorWidget.foreground": colors.fill.text.pri,
    "editorWidget.background": colors.bg.solid.flyout,
    "editorWidget.border": colors.stroke.surface.flyout,
    "editorWidget.resizeBorder": colors.fill.accent.pri,
    "editorSuggestWidget.background": colors.bg.solid.flyout,
    "editorSuggestWidget.border": colors.stroke.surface.flyout,
    "editorSuggestWidget.foreground": colors.fill.text.sec,
    "editorSuggestWidget.focusHighlightForeground": colors.fill.accentText.pri,
    "editorSuggestWidget.highlightForeground": colors.fill.accentText.pri,
    "editorSuggestWidget.selectedBackground": colors.fill.control.rest,
    "editorSuggestWidget.selectedForeground": colors.fill.text.pri,
    "editorSuggestWidget.selectedIconForeground": colors.fill.text.pri,
    "editorSuggestWidgetStatus.foreground": colors.fill.accent.pri,
    "editorHoverWidget.foreground": colors.fill.text.pri,
    "editorHoverWidget.background": colors.bg.solid.flyout,
    "editorHoverWidget.border": colors.stroke.surface.flyout,
    "editorHoverWidget.highlightForeground": colors.fill.text.active,
    "editorHoverWidget.statusBarBackground": colors.fill.control.subtle,
    "editorGhostText.border": TRANSPARENT,
    "editorGhostText.background": TRANSPARENT,
    "editorGhostText.foreground": colors.fill.text.ghost,
    "editorStickyScroll.background": colors.bg.solid.surface,
    "editorStickyScrollHover.background": colors.fill.control.rest,
    "debugExceptionWidget.background": colors.basic.loc.red.pri,
    "debugExceptionWidget.border": colors.stroke.surface.flyout,
    "editorMarkerNavigation.background": colors.bg.solid.flyout,
    "editorMarkerNavigationError.background": colors.basic.def.red.pri,
    "editorMarkerNavigationWarning.background": colors.basic.def.orange.pri,
    "editorMarkerNavigationInfo.background": colors.basic.def.blue.pri,
    "editorMarkerNavigationError.headerBackground": colors.basic.loc.red.pri,
    "editorMarkerNavigationWarning.headerBackground":
      colors.basic.loc.orange.pri,
    "editorMarkerNavigationInfo.headerBackground": colors.basic.loc.blue.pri,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    editorWidgetRules["editorStickyScroll.background"] = colors.bg.solid.canvas;
  }
  return editorWidgetRules;
};
