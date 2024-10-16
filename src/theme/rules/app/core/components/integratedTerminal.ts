import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const rules = {
    "terminal.ansiBlack": styles.fill.terminal.loc,
    "terminal.ansiBlue": styles.basic.def.blue.pri,
    "terminal.ansiBrightBlack": styles.fill.terminal.loq,
    "terminal.ansiBrightBlue": styles.basic.alt.blue.pri,
    "terminal.ansiBrightCyan": styles.basic.alt.mint.pri,
    "terminal.ansiBrightGreen": styles.basic.alt.green.pri,
    "terminal.ansiBrightMagenta": styles.basic.alt.pink.pri,
    "terminal.ansiBrightRed": styles.basic.alt.red.pri,
    "terminal.ansiBrightWhite": styles.fill.terminal.hic,
    "terminal.ansiBrightYellow": styles.basic.alt.yellow.pri,
    "terminal.ansiCyan": styles.basic.def.mint.pri,
    "terminal.ansiGreen": styles.basic.def.green.pri,
    "terminal.ansiMagenta": styles.basic.def.pink.pri,
    "terminal.ansiRed": styles.basic.def.red.pri,
    "terminal.ansiWhite": styles.fill.terminal.hiq,
    "terminal.ansiYellow": styles.basic.def.yellow.pri,
    "terminal.background": styles.bg.solid.surface,
    "terminal.border": styles.stroke.divider.default,
    "terminal.dropBackground": styles.effect.smoke.default,
    "terminal.findMatchBackground": styles.basic.def.mint.qua,
    "terminal.findMatchBorder": styles.stroke.control.default,
    "terminal.findMatchHighlightBackground": styles.basic.def.mint.qui,
    "terminal.findMatchHighlightBorder": styles.stroke.control.default,
    "terminal.foreground": styles.fill.terminal.fg,
    "terminal.hoverHighlightBackground": styles.basic.neutral.sep,
    "terminal.inactiveSelectionBackground": styles.basic.neutral.sep,
    "terminal.initialHintForeground": styles.fill.text.ghost,
    "terminal.selectionBackground": styles.basic.neutral.sen,
    "terminal.selectionForeground": styles.fill.text.pri,
    "terminal.tab.activeBorder": styles.fill.accent.pri,
    "terminalCommandDecoration.defaultBackground": styles.basic.def.blue.pri,
    "terminalCommandDecoration.errorBackground": styles.basic.def.red.pri,
    "terminalCommandDecoration.successBackground": styles.basic.def.green.pri,
    "terminalCommandGuide.foreground": styles.fill.control.hover,
    "terminalCursor.background": styles.fill.textOnColor.pri,
    "terminalCursor.foreground": styles.fill.accent.pri,
    "terminalOverviewRuler.border": TRANSPARENT,
    "terminalOverviewRuler.cursorForeground": styles.fill.accent.pri,
    "terminalOverviewRuler.findMatchForeground": styles.basic.def.mint.sec,
    "terminalStickyScroll.background": styles.bg.solid.base,
    "terminalStickyScroll.border": styles.stroke.divider.default,
    "terminalStickyScrollHover.background": styles.fill.terminal.stickyScrollHover, // 🟢 Undesired solution
  };
  const design = themeContext.variantConfig.design;
  if (design === "natural" || design === "minimal") {
    rules["terminal.background"] = styles.bg.solid.base;
  } else if (design === "flat") {
    rules["terminal.background"] = styles.bg.solid.base;
  }
  return rules;
};
