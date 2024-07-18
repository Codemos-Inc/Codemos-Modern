import { ThemeContext } from "../../../../../@types/index";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "notebook.editorBackground": colors.bg.solid.canvas,
    "notebook.cellBorderColor": colors.stroke.control.default,
    "notebook.cellHoverBackground": colors.fill.control.subtle,
    "notebook.cellInsertionIndicator": colors.fill.accent.pri,
    "notebook.cellStatusBarItemHoverBackground": colors.fill.control.rest,
    "notebook.cellToolbarSeparator": colors.stroke.surface.flyout,
    "notebook.cellEditorBackground": colors.bg.solid.base,
    "notebook.focusedCellBackground": colors.fill.control.subtle,
    "notebook.focusedCellBorder": colors.fill.accent.pri,
    "notebook.focusedEditorBorder": colors.stroke.focus.default,
    "notebook.inactiveFocusedCellBorder": colors.stroke.control.default,
    "notebook.inactiveSelectedCellBorder": colors.stroke.focus.default,
    "notebook.outputContainerBackgroundColor": colors.bg.solid.surface,
    "notebook.outputContainerBorderColor": colors.stroke.control.default,
    "notebook.selectedCellBackground": colors.fill.control.subtle,
    "notebook.selectedCellBorder": colors.fill.accent.pri,
    "notebook.symbolHighlightBackground": "#ff0000", // 🔵 Unknown attribute
    "notebookScrollbarSlider.activeBackground": colors.fill.control.pressed,
    "notebookScrollbarSlider.background": colors.fill.control.rest,
    "notebookScrollbarSlider.hoverBackground": colors.fill.control.hover,
    "notebookStatusErrorIcon.foreground": colors.basic.def.red.pri,
    "notebookStatusRunningIcon.foreground": colors.basic.def.yellow.pri,
    "notebookStatusSuccessIcon.foreground": colors.basic.def.green.pri,
    "notebookEditorOverviewRuler.runningCellForeground":
      colors.basic.def.yellow.pri,
  };
};
