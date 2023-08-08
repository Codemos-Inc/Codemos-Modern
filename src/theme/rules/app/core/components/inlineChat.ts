import { ThemeContext } from "../../../../../@types";
import { getMixedColorHex9 } from "../../../../../color";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "interactive.activeCodeBorder": "#FF0000", // 🔵 Unknown attribute
    "interactive.inactiveCodeBorder": "#FF0000", // 🔵 Unknown attribute
    "inlineChat.background": colors.bg.solid.flyout,
    "inlineChat.border": colors.stroke.surface.flyout,
    "inlineChat.regionHighlight": colors.basic.neutral.sep,
    "inlineChat.shadow": colors.effect.shadow.default,
    "inlineChatDiff.inserted": colors.basic.def.green.qui,
    "inlineChatDiff.removed": colors.basic.def.red.qui,
    "inlineChatInput.background": getMixedColorHex9(
      colors.fill.control.rest,
      colors.bg.solid.flyout,
    ), // 🟡 Hacky Solution
    "inlineChatInput.border": colors.stroke.control.default,
    "inlineChatInput.focusBorder": colors.stroke.focus.default,
    "inlineChatInput.placeholderForeground": colors.fill.text.disabled,
  };
};
