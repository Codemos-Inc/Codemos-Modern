import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const rules = {
    "terminal.background": colors.bg.solid.surface,
    "terminal.border": colors.stroke.divider.default,
    "terminal.foreground": colors.fill.terminal.fg,
    "terminal.ansiBlack": colors.fill.terminal.loc,
    "terminal.ansiBlue": colors.basic.def.blue.pri,
    "terminal.ansiBrightBlack": colors.fill.terminal.loq,
    "terminal.ansiBrightBlue": colors.basic.alt.blue.pri,
    "terminal.ansiBrightCyan": colors.basic.alt.mint.pri,
    "terminal.ansiBrightGreen": colors.basic.alt.green.pri,
    "terminal.ansiBrightMagenta": colors.basic.alt.pink.pri,
    "terminal.ansiBrightRed": colors.basic.alt.red.pri,
    "terminal.ansiBrightWhite": colors.fill.terminal.hic,
    "terminal.ansiBrightYellow": colors.basic.alt.yellow.pri,
    "terminal.ansiCyan": colors.basic.def.mint.pri,
    "terminal.ansiGreen": colors.basic.def.green.pri,
    "terminal.ansiMagenta": colors.basic.def.pink.pri,
    "terminal.ansiRed": colors.basic.def.red.pri,
    "terminal.ansiWhite": colors.fill.terminal.hiq,
    "terminal.ansiYellow": colors.basic.def.yellow.pri,
    "terminal.selectionBackground": colors.basic.neutral.sen,
    "terminal.selectionForeground": colors.fill.text.pri,
    "terminal.inactiveSelectionBackground": colors.basic.neutral.sep,
    "terminal.findMatchBackground": colors.basic.def.mint.qua,
    "terminal.findMatchBorder": colors.stroke.control.default,
    "terminal.findMatchHighlightBackground": colors.basic.def.mint.qui,
    "terminal.findMatchHighlightBorder": colors.stroke.control.default,
    "terminal.hoverHighlightBackground": colors.basic.neutral.sep,
    "terminalCursor.background": colors.fill.textOnColor.pri,
    "terminalCursor.foreground": colors.fill.accent.pri,
    "terminal.dropBackground": colors.effect.smoke.default,
    "terminal.tab.activeBorder": colors.fill.accent.pri,
    "terminalCommandDecoration.defaultBackground": colors.basic.def.blue.pri,
    "terminalCommandDecoration.successBackground": colors.basic.def.green.pri,
    "terminalCommandDecoration.errorBackground": colors.basic.def.red.pri,
    "terminalOverviewRuler.cursorForeground": colors.fill.accent.pri,
    "terminalOverviewRuler.findMatchForeground": colors.basic.def.mint.sec,
    "terminalStickyScroll.background": colors.bg.solid.base,
    "terminalStickyScroll.border": colors.stroke.divider.default,
    "terminalStickyScrollHover.background": colors.fill.terminal.stickyScrollHover, // 🟢 Undesired solution
    "terminal.initialHintForeground": colors.fill.text.ghost,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    rules["terminal.background"] = colors.bg.solid.base;
  } else if (design === "flat") {
    rules["terminal.background"] = colors.bg.solid.base;
  }
  return rules;
};
