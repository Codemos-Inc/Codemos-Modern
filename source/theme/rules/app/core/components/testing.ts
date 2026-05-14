import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export function getRules(themeContext: ThemeContext): object {
  const styles = themeContext.styles;
  return {
    "testing.coverCountBadgeBackground": styles.fill.accent.pri,
    "testing.coverCountBadgeForeground": styles.fill.onAccent.pri,
    "testing.coveredBackground": styles.basic.def.green.qui,
    "testing.coveredBorder": TRANSPARENT,
    "testing.coveredGutterBackground": styles.basic.def.green.qui,
    "testing.coveredMinimapBackground": "#FF0000FF", // 🔵 Unknown attribute
    "testing.iconErrored.retired": styles.basic.alt.red.pri,
    "testing.iconErrored": styles.basic.def.red.pri,
    "testing.iconFailed.retired": styles.basic.alt.red.pri,
    "testing.iconFailed": styles.basic.def.red.pri,
    "testing.iconPassed.retired": styles.basic.alt.green.pri,
    "testing.iconPassed": styles.basic.def.green.pri,
    "testing.iconQueued.retired": styles.basic.alt.yellow.pri,
    "testing.iconQueued": styles.basic.def.yellow.pri,
    "testing.iconSkipped.retired": styles.basic.neutral.sec,
    "testing.iconSkipped": styles.basic.neutral.ter,
    "testing.iconUnset.retired": styles.basic.neutral.sec,
    "testing.iconUnset": styles.basic.neutral.ter,
    "testing.message.error.badgeBackground": styles.fill.system.bg.red,
    "testing.message.error.badgeBorder": styles.basic.alt.red.pri,
    "testing.message.error.badgeForeground": styles.fill.system.fg.red,
    "testing.message.error.lineBackground": styles.basic.def.red.qua,
    "testing.message.info.decorationForeground": styles.basic.def.blue.pri,
    "testing.message.info.lineBackground": styles.basic.def.blue.qua,
    "testing.messagePeekBorder": "#FF0000FF", // 🔵 Unknown attribute
    "testing.messagePeekHeaderBackground": "#FF0000FF", // 🔵 Unknown attribute
    "testing.peekBorder": styles.basic.alt.red.pri,
    "testing.peekHeaderBackground": styles.basic.loc.red.pri,
    "testing.runAction": styles.basic.def.green.pri,
    "testing.uncoveredBackground": styles.basic.def.red.qui,
    "testing.uncoveredBorder": TRANSPARENT,
    "testing.uncoveredBranchBackground": "#FF0000FF", // 🔵 Unknown attribute
    "testing.uncoveredGutterBackground": styles.basic.def.red.qui,
    "testing.uncoveredMinimapBackground": "#FF0000FF", // 🔵 Unknown attribute
  };
}
