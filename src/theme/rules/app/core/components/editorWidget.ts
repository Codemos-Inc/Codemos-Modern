import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "debugExceptionWidget.background": colors.basic.loc.red.pri,
    "debugExceptionWidget.border": colors.stroke.surface.flyout,
    "editorGhostText.background": TRANSPARENT,
    "editorGhostText.border": TRANSPARENT,
    "editorGhostText.foreground": colors.fill.text.ghost,
    "editorHoverWidget.background": colors.bg.solid.flyout,
    "editorHoverWidget.border": colors.stroke.surface.flyout,
    "editorHoverWidget.foreground": colors.fill.text.pri,
    "editorHoverWidget.highlightForeground": colors.fill.text.active,
    "editorHoverWidget.statusBarBackground": colors.fill.control.subtle,
    "editorMarkerNavigation.background": colors.bg.solid.flyout,
    "editorMarkerNavigationError.background": colors.basic.def.red.pri,
    "editorMarkerNavigationError.headerBackground": colors.basic.loc.red.pri,
    "editorMarkerNavigationInfo.background": colors.basic.def.blue.pri,
    "editorMarkerNavigationInfo.headerBackground": colors.basic.loc.blue.pri,
    "editorMarkerNavigationWarning.background": colors.basic.def.orange.pri,
    "editorMarkerNavigationWarning.headerBackground":
      colors.basic.loc.orange.pri,
    "editorStickyScroll.background": colors.bg.solid.surface,
    "editorStickyScrollHover.background": colors.fill.control.rest,
    "editorSuggestWidget.background": colors.bg.solid.flyout,
    "editorSuggestWidget.border": colors.stroke.surface.flyout,
    "editorSuggestWidget.focusHighlightForeground": colors.fill.accentText.pri,
    "editorSuggestWidget.foreground": colors.fill.text.sec,
    "editorSuggestWidget.highlightForeground": colors.fill.accentText.pri,
    "editorSuggestWidget.selectedBackground": colors.fill.control.rest,
    "editorSuggestWidget.selectedForeground": colors.fill.text.pri,
    "editorSuggestWidget.selectedIconForeground": colors.fill.text.pri,
    "editorSuggestWidgetStatus.foreground": colors.fill.accent.pri,
    "editorWidget.background": colors.bg.solid.flyout,
    "editorWidget.border": colors.stroke.surface.flyout,
    "editorWidget.foreground": colors.fill.text.pri,
    "editorWidget.resizeBorder": colors.fill.accent.pri,
  };
};
