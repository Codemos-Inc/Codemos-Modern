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
    "inlineChat.shadow": colors.effect.shadow,
    "inlineChatDiff.inserted": colors.basic.def.green.qui,
    "inlineChatInput.background": getMixedColorHex9(
      colors.fill.control.rest,
      colors.bg.solid.flyout,
    ), // 🟡 Hacky Solution
    "inlineChatInput.border": colors.stroke.control.default,
    "inlineChatInput.focusBorder": colors.stroke.focus,
    "inlineChatInput.placeholderForeground": colors.fill.text.disabled,
    "inlineChatrDiff.removed": colors.basic.def.red.qui,
  };
};
