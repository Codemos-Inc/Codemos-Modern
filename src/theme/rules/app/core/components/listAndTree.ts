import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "list.activeSelectionBackground": colors.fill.control.rest,
    "list.activeSelectionForeground": colors.fill.text.pri,
    "list.activeSelectionIconForeground": colors.fill.text.pri,
    "list.deemphasizedForeground": colors.fill.text.disabled,
    "list.dropBackground": colors.effect.smoke.default,
    "list.errorForeground": colors.basic.def.red.pri,
    "list.filterMatchBackground": colors.basic.def.mint.qua,
    "list.filterMatchBorder": colors.stroke.control.default,
    "list.focusAndSelectionOutline": colors.stroke.focus.default,
    "list.focusBackground": colors.fill.control.rest,
    "list.focusForeground": colors.fill.text.pri,
    "list.focusHighlightForeground": colors.fill.accentText.pri,
    "list.focusOutline": colors.stroke.control.default,
    "list.highlightForeground": colors.fill.accentText.pri,
    "list.hoverBackground": colors.fill.control.subtle,
    "list.hoverForeground": colors.fill.text.pri,
    "list.inactiveFocusBackground": TRANSPARENT,
    "list.inactiveFocusOutline": colors.stroke.control.alt,
    "list.inactiveSelectionBackground": colors.fill.control.rest,
    "list.inactiveSelectionForeground": colors.fill.text.pri,
    "list.inactiveSelectionIconForeground": colors.fill.text.pri,
    "list.invalidItemForeground": colors.basic.def.red.pri,
    "list.warningForeground": colors.basic.def.orange.pri,
    "listFilterWidget.background": colors.bg.solid.flyout,
    "listFilterWidget.noMatchesOutline": colors.basic.def.red.pri,
    "listFilterWidget.outline": colors.stroke.surface.flyout,
    "listFilterWidget.shadow": colors.effect.shadow.default,
    "tree.inactiveIndentGuidesStroke": colors.basic.neutral.qui,
    "tree.indentGuidesStroke": colors.basic.neutral.qua,
    "tree.tableColumnsBorder": colors.stroke.divider.default,
    "tree.tableOddRowsBackground": colors.bg.solid.onCanvas,
  };
};
