import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const rules = {
    "editorGroup.border": styles.stroke.divider.default,
    "editorGroup.dropBackground": styles.effect.smoke.default,
    "editorGroup.dropIntoPromptBackground": styles.bg.solid.flyout,
    "editorGroup.dropIntoPromptBorder": styles.stroke.surface.flyout,
    "editorGroup.dropIntoPromptForeground": styles.fill.text.pri,
    "editorGroup.emptyBackground": styles.bg.solid.base,
    "editorGroup.focusedEmptyBorder": TRANSPARENT,
    "editorGroupHeader.border": styles.stroke.divider.default,
    "editorGroupHeader.noTabsBackground": styles.bg.solid.base,
    "editorGroupHeader.tabsBackground": styles.bg.solid.base,
    "editorGroupHeader.tabsBorder": styles.stroke.divider.default,
    "editorPane.background": styles.bg.solid.base,
    "sideBySideEditor.horizontalBorder": styles.stroke.divider.default,
    "sideBySideEditor.verticalBorder": styles.stroke.divider.default,
    "tab.activeBackground": styles.fill.tab.activeFocused,
    "tab.activeBorder": TRANSPARENT,
    "tab.activeBorderTop": TRANSPARENT,
    "tab.activeForeground": styles.fill.text.pri,
    "tab.activeModifiedBorder": styles.basic.def.blue.pri,
    "tab.border": styles.stroke.divider.default,
    "tab.dragAndDropBorder": styles.fill.accent.pri,
    "tab.hoverBackground": styles.fill.tab.activeFocused,
    "tab.hoverBorder": TRANSPARENT,
    "tab.hoverForeground": styles.fill.text.pri,
    "tab.inactiveBackground": styles.fill.tab.inactiveFocused,
    "tab.inactiveForeground": styles.fill.text.sec,
    "tab.inactiveModifiedBorder": styles.basic.def.blue.ter,
    "tab.lastPinnedBorder": styles.stroke.focus.default,
    "tab.selectedBackground": styles.fill.tab.activeFocused,
    "tab.selectedBorderTop": styles.stroke.divider.default,
    "tab.selectedForeground": styles.fill.text.pri,
    "tab.unfocusedActiveBackground": styles.fill.tab.activeUnfocused,
    "tab.unfocusedActiveBorder": TRANSPARENT,
    "tab.unfocusedActiveBorderTop": TRANSPARENT,
    "tab.unfocusedActiveForeground": styles.fill.text.sec,
    "tab.unfocusedActiveModifiedBorder": styles.basic.def.blue.ter,
    "tab.unfocusedHoverBackground": styles.fill.tab.activeUnfocused,
    "tab.unfocusedHoverBorder": TRANSPARENT,
    "tab.unfocusedHoverForeground": styles.fill.text.sec,
    "tab.unfocusedInactiveBackground": styles.fill.tab.inactiveUnfocused,
    "tab.unfocusedInactiveForeground": styles.fill.text.disabled,
    "tab.unfocusedInactiveModifiedBorder": styles.basic.def.blue.qua,
  };
  const design = themeContext.variantConfig.design;
  if (design === "natural" || design === "minimal") {
    rules["editorGroupHeader.border"] = TRANSPARENT;
    rules["tab.activeBorder"] = styles.bg.solid.layer;
    rules["tab.unfocusedActiveBorder"] = styles.bg.solid.layer;
  } else if (design === "flat") {
    rules["editorGroupHeader.border"] = TRANSPARENT;
    rules["tab.activeBorder"] = styles.bg.solid.layer;
    rules["tab.unfocusedActiveBorder"] = styles.bg.solid.layer;
  }
  return rules;
};
