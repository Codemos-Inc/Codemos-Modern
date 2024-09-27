import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "errorLens.errorBackground": styles.basic.def.red.qui,
    "errorLens.errorBackgroundLight": styles.basic.def.red.qui,
    "errorLens.errorForeground": styles.basic.def.red.pri,
    "errorLens.errorForegroundLight": styles.basic.def.red.pri,
    "errorLens.errorMessageBackground": styles.basic.def.red.qui,
    "errorLens.errorRangeBackground": styles.basic.def.red.qui,
    "errorLens.hintBackground": styles.basic.def.mint.qui,
    "errorLens.hintBackgroundLight": styles.basic.def.mint.qui,
    "errorLens.hintForeground": styles.basic.def.mint.pri,
    "errorLens.hintForegroundLight": styles.basic.def.mint.pri,
    "errorLens.hintMessageBackground": styles.basic.def.mint.qui,
    "errorLens.hintRangeBackground": styles.basic.def.mint.qui,
    "errorLens.infoBackground": styles.basic.def.blue.qui,
    "errorLens.infoBackgroundLight": styles.basic.def.blue.qui,
    "errorLens.infoForeground": styles.basic.def.blue.pri,
    "errorLens.infoForegroundLight": styles.basic.def.blue.pri,
    "errorLens.infoMessageBackground": styles.basic.def.blue.qui,
    "errorLens.infoRangeBackground": styles.basic.def.blue.qui,
    "errorLens.statusBarErrorForeground": styles.basic.alt.red.pri,
    "errorLens.statusBarHintForeground": styles.basic.alt.mint.pri,
    "errorLens.statusBarIconErrorForeground": styles.basic.alt.red.pri,
    "errorLens.statusBarIconWarningForeground": styles.basic.alt.orange.pri,
    "errorLens.statusBarInfoForeground": styles.basic.alt.blue.pri,
    "errorLens.statusBarWarningForeground": styles.basic.alt.orange.pri,
    "errorLens.warningBackground": styles.basic.def.orange.qui,
    "errorLens.warningBackgroundLight": styles.basic.def.orange.qui,
    "errorLens.warningForeground": styles.basic.def.orange.pri,
    "errorLens.warningForegroundLight": styles.basic.def.orange.pri,
    "errorLens.warningMessageBackground": styles.basic.def.orange.qui,
    "errorLens.warningRangeBackground": styles.basic.def.orange.qui,
  };
};
