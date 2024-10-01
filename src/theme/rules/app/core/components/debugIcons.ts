import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "debugConsole.errorForeground": styles.basic.def.red.pri,
    "debugConsole.infoForeground": styles.basic.def.blue.pri,
    "debugConsole.sourceForeground": styles.fill.text.pri,
    "debugConsole.warningForeground": styles.basic.def.orange.pri,
    "debugConsoleInputIcon.foreground": styles.fill.accent.pri,
    "debugIcon.breakpointCurrentStackframeForeground": styles.basic.def.yellow.pri,
    "debugIcon.breakpointDisabledForeground": styles.basic.neutral.qua,
    "debugIcon.breakpointForeground": styles.basic.def.red.pri,
    "debugIcon.breakpointStackframeForeground": styles.basic.def.yellow.ter,
    "debugIcon.breakpointUnverifiedForeground": styles.basic.def.orange.pri,
    "debugIcon.continueForeground": styles.basic.def.green.pri,
    "debugIcon.disconnectForeground": styles.basic.def.red.pri,
    "debugIcon.pauseForeground": styles.basic.def.yellow.pri,
    "debugIcon.restartForeground": styles.basic.def.green.pri,
    "debugIcon.startForeground": styles.basic.def.green.pri,
    "debugIcon.stepBackForeground": styles.basic.def.blue.pri,
    "debugIcon.stepIntoForeground": styles.basic.def.blue.pri,
    "debugIcon.stepOutForeground": styles.basic.def.blue.pri,
    "debugIcon.stepOverForeground": styles.basic.def.blue.pri,
    "debugIcon.stopForeground": styles.basic.def.red.pri,
  };
};
