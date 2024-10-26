import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "extensionBadge.remoteBackground": styles.basic.def.mint.pri,
    "extensionBadge.remoteForeground": styles.fill.textOnColor.pri,
    "extensionButton.background": styles.fill.accent.pri,
    "extensionButton.foreground": styles.fill.textOnColor.pri,
    "extensionButton.hoverBackground": styles.fill.accent.sec,
    "extensionButton.prominentBackground": styles.fill.accent.pri,
    "extensionButton.prominentForeground": styles.fill.textOnColor.pri,
    "extensionButton.prominentHoverBackground": styles.fill.accent.sec,
    "extensionButton.separator": styles.fill.textOnColor.pri,
    "extensionIcon.preReleaseForeground": styles.basic.def.purple.pri,
    "extensionIcon.sponsorForeground": styles.basic.def.red.pri,
    "extensionIcon.starForeground": styles.basic.def.yellow.pri,
    "extensionIcon.verifiedForeground": styles.basic.def.blue.pri,
  };
};
