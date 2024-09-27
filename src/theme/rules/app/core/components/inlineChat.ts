import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "inlineChat.background": styles.bg.solid.flyout,
    "inlineChat.border": styles.stroke.surface.flyout,
    "inlineChat.foreground": styles.fill.text.pri,
    "inlineChat.shadow": styles.effect.shadow.default,
    "inlineChatDiff.inserted": styles.basic.def.green.qui,
    "inlineChatDiff.removed": styles.basic.def.red.qui,
    "inlineChatInput.background": styles.fill.control.restSolid, // 🟢 Undesired solution!
    "inlineChatInput.border": styles.stroke.control.default,
    "inlineChatInput.focusBorder": styles.stroke.focus.default,
    "inlineChatInput.placeholderForeground": styles.fill.text.disabled,
  };
};
