import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "testing.iconFailed": colors.basic.def.red.pri,
    "testing.iconErrored": colors.basic.def.red.pri,
    "testing.iconPassed": colors.basic.def.green.pri,
    "testing.runAction": colors.basic.def.green.pri,
    "testing.iconQueued": colors.basic.def.yellow.pri,
    "testing.iconUnset": colors.basic.neutral.ter,
    "testing.iconSkipped": colors.basic.neutral.ter,
    "testing.iconErrored.retired": "#ff0000", // 🔵 Unknown attribute
    "testing.iconFailed.retired": "#ff0000", // 🔵 Unknown attribute
    "testing.iconPassed.retired": "#ff0000", // 🔵 Unknown attribute
    "testing.iconQueued.retired": "#ff0000", // 🔵 Unknown attribute
    "testing.iconSkipped.retired": "#ff0000", // 🔵 Unknown attribute
    "testing.iconUnset.retired": "#ff0000", // 🔵 Unknown attribute
    "testing.peekBorder": colors.basic.alt.red.pri,
    "testing.peekHeaderBackground": colors.basic.loc.red.pri,
    "testing.message.error.decorationForeground": colors.basic.def.red.pri,
    "testing.message.error.lineBackground": colors.basic.def.red.qua,
    "testing.message.info.decorationForeground": colors.basic.def.blue.pri,
    "testing.message.info.lineBackground": colors.basic.def.blue.qua,
    "testing.coveredBackground": "#ff0000", // 🔵 Unknown attribute
    "testing.coveredBorder": "#ff0000", // 🔵 Unknown attribute
    "testing.coveredGutterBackground": "#ff0000", // 🔵 Unknown attribute
    "testing.uncoveredBranchBackground": "#ff0000", // 🔵 Unknown attribute
    "testing.uncoveredBackground": "#ff0000", // 🔵 Unknown attribute
    "testing.uncoveredBorder": "#ff0000", // 🔵 Unknown attribute
    "testing.uncoveredGutterBackground": "#ff0000", // 🔵 Unknown attribute
    "testing.messagePeekBorder": "#ff0000", // 🔵 Unknown attribute
    "testing.messagePeekHeaderBackground": "#ff0000", // 🔵 Unknown attribute
    "testing.coverCountBadgeBackground": colors.fill.accent.pri,
    "testing.coverCountBadgeForeground": colors.fill.textOnColor.pri,
  };
};
