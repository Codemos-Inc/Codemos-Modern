import { ThemeContext } from "../../../../../@types/index";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "inlineChat.background": colors.bg.solid.flyout,
    "inlineChat.border": colors.stroke.surface.flyout,
    "inlineChat.shadow": colors.effect.shadow.default,
    "inlineChat.regionHighlight": colors.basic.neutral.sep,
    "inlineChatInput.border": colors.stroke.control.default,
    "inlineChatInput.focusBorder": colors.stroke.focus.default,
    "inlineChatInput.placeholderForeground": colors.fill.text.disabled,
    "inlineChatInput.background": colors.fill.control.restSolid, // 🟢 Undesired solution!
    "inlineChatDiff.inserted": colors.basic.def.green.qui,
    "inlineChatDiff.removed": colors.basic.def.red.qui,
  };
};
