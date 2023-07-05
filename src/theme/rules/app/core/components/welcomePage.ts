import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "walkThrough.embeddedEditorBackground": colors.bg.solid.base,
    "walkthrough.stepTitle.foreground": colors.fill.text.pri,
    "welcomePage.background": colors.bg.solid.canvas,
    "welcomePage.progress.background": colors.fill.control.rest,
    "welcomePage.progress.foreground": colors.fill.accent.pri,
    "welcomePage.tileBackground": colors.fill.control.rest,
    "welcomePage.tileBorder": colors.stroke.control.default,
    "welcomePage.tileHoverBackground": colors.fill.control.hover,
  };
};
