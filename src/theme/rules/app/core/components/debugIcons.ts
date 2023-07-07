import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "debugConsole.errorForeground": colors.basic.def.red.pri,
    "debugConsole.infoForeground": colors.basic.def.blue.pri,
    "debugConsole.sourceForeground": colors.fill.text.pri,
    "debugConsole.warningForeground": colors.basic.def.orange.pri,
    "debugConsoleInputIcon.foreground": colors.fill.accent.pri,
    "debugIcon.breakpointCurrentStackframeForeground":
      colors.basic.def.yellow.pri,
    "debugIcon.breakpointDisabledForeground": colors.basic.neutral.qua,
    "debugIcon.breakpointForeground": colors.basic.def.red.pri,
    "debugIcon.breakpointStackframeForeground": colors.basic.def.yellow.ter,
    "debugIcon.breakpointUnverifiedForeground": colors.basic.def.orange.pri,
    "debugIcon.continueForeground": colors.basic.def.green.pri,
    "debugIcon.disconnectForeground": colors.basic.def.red.pri,
    "debugIcon.pauseForeground": colors.basic.def.yellow.pri,
    "debugIcon.restartForeground": colors.basic.def.green.pri,
    "debugIcon.startForeground": colors.basic.def.green.pri,
    "debugIcon.stepBackForeground": colors.basic.def.blue.pri,
    "debugIcon.stepIntoForeground": colors.basic.def.blue.pri,
    "debugIcon.stepOutForeground": colors.basic.def.blue.pri,
    "debugIcon.stepOverForeground": colors.basic.def.blue.pri,
    "debugIcon.stopForeground": colors.basic.def.red.pri,
  };
};
