import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "errorLens.errorBackground": colors.basic.def.red.qui,
    "errorLens.errorBackgroundLight": colors.basic.def.red.qui,
    "errorLens.errorForeground": colors.basic.def.red.pri,
    "errorLens.errorForegroundLight": colors.basic.def.red.pri,
    "errorLens.errorMessageBackground": colors.basic.def.red.qui,
    "errorLens.errorRangeBackground": colors.basic.def.red.qui,
    "errorLens.hintBackground": colors.basic.def.mint.qui,
    "errorLens.hintBackgroundLight": colors.basic.def.mint.qui,
    "errorLens.hintForeground": colors.basic.def.mint.pri,
    "errorLens.hintForegroundLight": colors.basic.def.mint.pri,
    "errorLens.hintMessageBackground": colors.basic.def.mint.qui,
    "errorLens.hintRangeBackground": colors.basic.def.mint.qui,
    "errorLens.infoBackground": colors.basic.def.blue.qui,
    "errorLens.infoBackgroundLight": colors.basic.def.blue.qui,
    "errorLens.infoForeground": colors.basic.def.blue.pri,
    "errorLens.infoForegroundLight": colors.basic.def.blue.pri,
    "errorLens.infoMessageBackground": colors.basic.def.blue.qui,
    "errorLens.infoRangeBackground": colors.basic.def.blue.qui,
    "errorLens.statusBarErrorForeground": colors.basic.alt.red.pri,
    "errorLens.statusBarHintForeground": colors.basic.alt.mint.pri,
    "errorLens.statusBarIconErrorForeground": colors.basic.alt.red.pri,
    "errorLens.statusBarIconWarningForeground": colors.basic.alt.orange.pri,
    "errorLens.statusBarInfoForeground": colors.basic.alt.blue.pri,
    "errorLens.statusBarWarningForeground": colors.basic.alt.orange.pri,
    "errorLens.warningBackground": colors.basic.def.orange.qui,
    "errorLens.warningBackgroundLight": colors.basic.def.orange.qui,
    "errorLens.warningForeground": colors.basic.def.orange.pri,
    "errorLens.warningForegroundLight": colors.basic.def.orange.pri,
    "errorLens.warningMessageBackground": colors.basic.def.orange.qui,
    "errorLens.warningRangeBackground": colors.basic.def.orange.qui,
  };
};
