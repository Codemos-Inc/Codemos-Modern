import { ThemeContext } from "../../../../../@types";
import { getMixedColorHex9 } from "../../../../../color";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "chat.avatarBackground": getMixedColorHex9(styles.fill.control.rest, styles.bg.solid.surface),
    "chat.avatarForeground": styles.fill.accentText.pri,
    "chat.requestBackground": styles.fill.control.subtle,
    "chat.requestBorder": styles.stroke.divider.default,
    "chat.slashCommandBackground": styles.fill.control.rest,
    "chat.slashCommandForeground": styles.fill.accentText.pri,
  };
};
