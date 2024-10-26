import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "notebook.cellBorderColor": styles.stroke.control.default,
    "notebook.cellEditorBackground": styles.bg.solid.base,
    "notebook.cellHoverBackground": styles.fill.control.subtle,
    "notebook.cellInsertionIndicator": styles.fill.accent.pri,
    "notebook.cellStatusBarItemHoverBackground": styles.fill.control.rest,
    "notebook.cellToolbarSeparator": styles.stroke.surface.flyout,
    "notebook.editorBackground": styles.bg.solid.layer,
    "notebook.focusedCellBackground": styles.fill.control.subtle,
    "notebook.focusedCellBorder": styles.fill.accent.pri,
    "notebook.focusedEditorBorder": styles.stroke.focus.default,
    "notebook.inactiveFocusedCellBorder": styles.stroke.control.default,
    "notebook.inactiveSelectedCellBorder": styles.stroke.focus.default,
    "notebook.outputContainerBackgroundColor": styles.bg.solid.surface,
    "notebook.outputContainerBorderColor": styles.stroke.control.default,
    "notebook.selectedCellBackground": styles.fill.control.subtle,
    "notebook.selectedCellBorder": styles.fill.accent.pri,
    "notebook.symbolHighlightBackground": "#ff0000", // 🔵 Unknown attribute
    "notebookEditorOverviewRuler.runningCellForeground": styles.basic.def.yellow.pri,
    "notebookScrollbarSlider.activeBackground": styles.fill.control.pressed,
    "notebookScrollbarSlider.background": styles.fill.control.rest,
    "notebookScrollbarSlider.hoverBackground": styles.fill.control.hover,
    "notebookStatusErrorIcon.foreground": styles.basic.def.red.pri,
    "notebookStatusRunningIcon.foreground": styles.basic.def.yellow.pri,
    "notebookStatusSuccessIcon.foreground": styles.basic.def.green.pri,
  };
};
