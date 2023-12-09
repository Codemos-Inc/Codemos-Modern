import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "debugIcon.breakpointForeground": colors.basic.def.red.pri,
    "debugIcon.breakpointDisabledForeground": colors.basic.neutral.qua,
    "debugIcon.breakpointUnverifiedForeground": colors.basic.def.orange.pri,
    "debugIcon.breakpointCurrentStackframeForeground":
      colors.basic.def.yellow.pri,
    "debugIcon.breakpointStackframeForeground": colors.basic.def.yellow.ter,
    "debugIcon.startForeground": colors.basic.def.green.pri,
    "debugIcon.pauseForeground": colors.basic.def.yellow.pri,
    "debugIcon.stopForeground": colors.basic.def.red.pri,
    "debugIcon.disconnectForeground": colors.basic.def.red.pri,
    "debugIcon.restartForeground": colors.basic.def.green.pri,
    "debugIcon.stepOverForeground": colors.basic.def.blue.pri,
    "debugIcon.stepIntoForeground": colors.basic.def.blue.pri,
    "debugIcon.stepOutForeground": colors.basic.def.blue.pri,
    "debugIcon.continueForeground": colors.basic.def.green.pri,
    "debugIcon.stepBackForeground": colors.basic.def.blue.pri,
    "debugConsole.infoForeground": colors.basic.def.blue.pri,
    "debugConsole.warningForeground": colors.basic.def.orange.pri,
    "debugConsole.errorForeground": colors.basic.def.red.pri,
    "debugConsole.sourceForeground": colors.fill.text.pri,
    "debugConsoleInputIcon.foreground": colors.fill.accent.pri,
  };
};
