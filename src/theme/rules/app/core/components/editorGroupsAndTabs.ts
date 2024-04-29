import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const editorGroupsAndTabsRules = {
    "editorGroup.border": colors.stroke.divider.default,
    "editorGroup.dropBackground": colors.effect.smoke.default,
    "editorGroupHeader.noTabsBackground": colors.bg.solid.base,
    "editorGroupHeader.tabsBackground": colors.bg.solid.base,
    "editorGroupHeader.tabsBorder": colors.stroke.divider.default,
    "editorGroupHeader.border": colors.stroke.divider.default,
    "editorGroup.emptyBackground": colors.bg.solid.base,
    "editorGroup.focusedEmptyBorder": TRANSPARENT,
    "editorGroup.dropIntoPromptForeground": colors.fill.text.pri,
    "editorGroup.dropIntoPromptBackground": colors.bg.solid.flyout,
    "editorGroup.dropIntoPromptBorder": colors.stroke.surface.flyout,
    "tab.activeBackground": colors.fill.tab.activeFocused,
    "tab.activeForeground": colors.fill.text.pri,
    "tab.unfocusedActiveForeground": colors.fill.text.sec,
    "tab.border": colors.stroke.divider.default,
    "tab.activeBorder": TRANSPARENT,
    "tab.dragAndDropBorder": colors.fill.accent.pri,
    "tab.unfocusedActiveBorder": TRANSPARENT,
    "tab.activeBorderTop": TRANSPARENT,
    "tab.unfocusedActiveBorderTop": TRANSPARENT,
    "tab.lastPinnedBorder": colors.stroke.focus.default,
    "tab.inactiveBackground": colors.fill.tab.inactiveFocused,
    "tab.unfocusedActiveBackground": colors.fill.tab.activeUnfocused,
    "tab.unfocusedInactiveBackground": colors.fill.tab.inactiveUnfocused,
    "tab.inactiveForeground": colors.fill.text.sec,
    "tab.unfocusedInactiveForeground": colors.fill.text.disabled,
    "tab.hoverBackground": colors.fill.tab.activeFocused,
    "tab.unfocusedHoverBackground": colors.fill.tab.activeUnfocused,
    "tab.hoverForeground": colors.fill.text.pri,
    "tab.unfocusedHoverForeground": colors.fill.text.sec,
    "tab.hoverBorder": TRANSPARENT,
    "tab.unfocusedHoverBorder": TRANSPARENT,
    "tab.activeModifiedBorder": colors.basic.def.blue.pri,
    "tab.inactiveModifiedBorder": colors.basic.def.blue.ter,
    "tab.unfocusedActiveModifiedBorder": colors.basic.def.blue.ter,
    "tab.unfocusedInactiveModifiedBorder": colors.basic.def.blue.qua,
    "editorPane.background": colors.bg.solid.base,
    "sideBySideEditor.horizontalBorder": colors.stroke.divider.default,
    "sideBySideEditor.verticalBorder": colors.stroke.divider.default,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    editorGroupsAndTabsRules["editorGroupHeader.border"] = TRANSPARENT;
    editorGroupsAndTabsRules["tab.activeBorder"] = colors.bg.solid.canvas;
    editorGroupsAndTabsRules["tab.unfocusedActiveBorder"] =
      colors.bg.solid.canvas;
  }
  return editorGroupsAndTabsRules;
};
