import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const editorGroupsAndTabsRules = {
    "editorGroup.border": colors.stroke.divider.default,
    "editorGroup.dropBackground": colors.effect.smoke.default,
    "editorGroup.dropIntoPromptBackground": colors.bg.solid.flyout,
    "editorGroup.dropIntoPromptBorder": colors.stroke.surface.flyout,
    "editorGroup.dropIntoPromptForeground": colors.fill.text.pri,
    "editorGroup.emptyBackground": colors.bg.solid.base,
    "editorGroup.focusedEmptyBorder": TRANSPARENT,
    "editorGroupHeader.border": colors.stroke.divider.default,
    "editorGroupHeader.noTabsBackground": colors.bg.solid.base,
    "editorGroupHeader.tabsBackground": colors.bg.solid.base,
    "editorGroupHeader.tabsBorder": colors.stroke.divider.default,
    "editorPane.background": colors.bg.solid.base,
    "sideBySideEditor.horizontalBorder": colors.stroke.divider.default,
    "sideBySideEditor.verticalBorder": colors.stroke.divider.default,
    "tab.activeBackground": colors.fill.tab.activeFocused,
    "tab.activeBorder": TRANSPARENT,
    "tab.activeBorderTop": TRANSPARENT,
    "tab.activeForeground": colors.fill.text.pri,
    "tab.activeModifiedBorder": colors.basic.def.blue.pri,
    "tab.border": colors.stroke.control.default,
    "tab.hoverBackground": colors.fill.tab.activeFocused,
    "tab.hoverBorder": TRANSPARENT,
    "tab.hoverForeground": colors.fill.text.pri,
    "tab.inactiveBackground": colors.fill.tab.inactiveFocused,
    "tab.inactiveForeground": colors.fill.text.sec,
    "tab.inactiveModifiedBorder": colors.basic.def.blue.ter,
    "tab.lastPinnedBorder": colors.stroke.focus.default,
    "tab.unfocusedActiveBackground": colors.fill.tab.activeUnfocused,
    "tab.unfocusedActiveBorder": TRANSPARENT,
    "tab.unfocusedActiveBorderTop": TRANSPARENT,
    "tab.unfocusedActiveForeground": colors.fill.text.sec,
    "tab.unfocusedActiveModifiedBorder": colors.basic.def.blue.ter,
    "tab.unfocusedHoverBackground": colors.fill.tab.activeUnfocused,
    "tab.unfocusedHoverBorder": TRANSPARENT,
    "tab.unfocusedHoverForeground": colors.fill.text.sec,
    "tab.unfocusedInactiveBackground": colors.fill.tab.inactiveUnfocused,
    "tab.unfocusedInactiveForeground": colors.fill.text.disabled,
    "tab.unfocusedInactiveModifiedBorder": colors.basic.def.blue.qua,
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
