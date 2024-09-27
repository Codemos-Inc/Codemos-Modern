import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "testing.coverCountBadgeBackground": styles.fill.accent.pri,
    "testing.coverCountBadgeForeground": styles.fill.textOnColor.pri,
    "testing.coveredBackground": "#ff0000", // 🔵 Unknown attribute
    "testing.coveredBorder": "#ff0000", // 🔵 Unknown attribute
    "testing.coveredGutterBackground": "#ff0000", // 🔵 Unknown attribute
    "testing.iconErrored.retired": "#ff0000", // 🔵 Unknown attribute
    "testing.iconErrored": styles.basic.def.red.pri,
    "testing.iconFailed.retired": "#ff0000", // 🔵 Unknown attribute
    "testing.iconFailed": styles.basic.def.red.pri,
    "testing.iconPassed.retired": "#ff0000", // 🔵 Unknown attribute
    "testing.iconPassed": styles.basic.def.green.pri,
    "testing.iconQueued.retired": "#ff0000", // 🔵 Unknown attribute
    "testing.iconQueued": styles.basic.def.yellow.pri,
    "testing.iconSkipped.retired": "#ff0000", // 🔵 Unknown attribute
    "testing.iconSkipped": styles.basic.neutral.ter,
    "testing.iconUnset.retired": "#ff0000", // 🔵 Unknown attribute
    "testing.iconUnset": styles.basic.neutral.ter,
    "testing.message.error.decorationForeground": styles.basic.def.red.pri,
    "testing.message.error.lineBackground": styles.basic.def.red.qua,
    "testing.message.info.decorationForeground": styles.basic.def.blue.pri,
    "testing.message.info.lineBackground": styles.basic.def.blue.qua,
    "testing.messagePeekBorder": "#ff0000", // 🔵 Unknown attribute
    "testing.messagePeekHeaderBackground": "#ff0000", // 🔵 Unknown attribute
    "testing.peekBorder": styles.basic.alt.red.pri,
    "testing.peekHeaderBackground": styles.basic.loc.red.pri,
    "testing.runAction": styles.basic.def.green.pri,
    "testing.uncoveredBackground": "#ff0000", // 🔵 Unknown attribute
    "testing.uncoveredBorder": "#ff0000", // 🔵 Unknown attribute
    "testing.uncoveredBranchBackground": "#ff0000", // 🔵 Unknown attribute
    "testing.uncoveredGutterBackground": "#ff0000", // 🔵 Unknown attribute
  };
};
