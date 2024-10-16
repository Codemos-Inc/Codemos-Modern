import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "list.activeSelectionBackground": styles.fill.control.rest,
    "list.activeSelectionForeground": styles.fill.text.pri,
    "list.activeSelectionIconForeground": styles.fill.text.pri,
    "list.deemphasizedForeground": styles.fill.text.disabled,
    "list.dropBackground": styles.effect.smoke.default,
    "list.dropBetweenBackground": styles.fill.accent.pri,
    "list.errorForeground": styles.basic.def.red.pri,
    "list.filterMatchBackground": styles.basic.def.mint.qua,
    "list.filterMatchBorder": styles.stroke.control.default,
    "list.focusAndSelectionOutline": styles.stroke.focus.default,
    "list.focusBackground": styles.fill.control.rest,
    "list.focusForeground": styles.fill.text.pri,
    "list.focusHighlightForeground": styles.fill.accentText.pri,
    "list.focusOutline": styles.stroke.control.default,
    "list.highlightForeground": styles.fill.accentText.pri,
    "list.hoverBackground": styles.fill.control.subtle,
    "list.hoverForeground": styles.fill.text.pri,
    "list.inactiveFocusBackground": TRANSPARENT,
    "list.inactiveFocusOutline": styles.stroke.control.alt,
    "list.inactiveSelectionBackground": styles.fill.control.rest,
    "list.inactiveSelectionForeground": styles.fill.text.pri,
    "list.inactiveSelectionIconForeground": styles.fill.text.pri,
    "list.invalidItemForeground": styles.basic.def.red.pri,
    "list.warningForeground": styles.basic.def.orange.pri,
    "listFilterWidget.background": styles.bg.solid.flyout,
    "listFilterWidget.noMatchesOutline": styles.basic.def.red.pri,
    "listFilterWidget.outline": styles.stroke.surface.flyout,
    "listFilterWidget.shadow": styles.effect.shadow.default,
    "tree.inactiveIndentGuidesStroke": styles.basic.neutral.qui,
    "tree.indentGuidesStroke": styles.basic.neutral.qua,
    "tree.tableColumnsBorder": styles.stroke.divider.default,
    "tree.tableOddRowsBackground": styles.bg.solid.flyout,
  };
};
