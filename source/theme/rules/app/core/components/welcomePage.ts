import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "walkThrough.embeddedEditorBackground": styles.bg.solid.base,
    "walkthrough.stepTitle.foreground": styles.fill.text.pri,
    "welcomePage.background": styles.bg.solid.layer,
    "welcomePage.progress.background": styles.fill.control.rest,
    "welcomePage.progress.foreground": styles.fill.accent.pri,
    "welcomePage.tileBackground": styles.fill.control.rest,
    "welcomePage.tileBorder": styles.stroke.control.default,
    "welcomePage.tileHoverBackground": styles.fill.control.hover,
  };
};
