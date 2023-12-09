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
    "testing.peekBorder": colors.basic.alt.red.pri,
    "testing.peekHeaderBackground": colors.basic.loc.red.pri,
    "testing.message.error.decorationForeground": colors.basic.def.red.pri,
    "testing.message.error.lineBackground": colors.basic.def.red.qua,
    "testing.message.info.decorationForeground": colors.basic.def.blue.pri,
    "testing.message.info.lineBackground": colors.basic.def.blue.qua,
  };
};
