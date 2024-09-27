import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "textBlockQuote.background": styles.fill.control.subtle,
    "textBlockQuote.border": styles.fill.accent.pri,
    "textCodeBlock.background": styles.fill.control.subtle,
    "textLink.activeForeground": styles.fill.accentText.sec,
    "textLink.foreground": styles.fill.accentText.pri,
    "textPreformat.background": styles.fill.system.bg.red,
    "textPreformat.foreground": styles.fill.system.fg.red,
    "textSeparator.foreground": styles.stroke.divider.default,
  };
};
