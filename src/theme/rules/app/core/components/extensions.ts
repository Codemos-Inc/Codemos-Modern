import { ThemeContext } from "../../../../../@types/theme";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "extensionBadge.remoteBackground": colors.basic.def.mint.pri,
    "extensionBadge.remoteForeground": colors.fill.textOnColor.pri,
    "extensionButton.background": colors.fill.accent.pri,
    "extensionButton.foreground": colors.fill.textOnColor.pri,
    "extensionButton.hoverBackground": colors.fill.accent.sec,
    "extensionButton.prominentBackground": colors.fill.accent.pri,
    "extensionButton.prominentForeground": colors.fill.textOnColor.pri,
    "extensionButton.prominentHoverBackground": colors.fill.accent.sec,
    "extensionButton.separator": colors.fill.textOnColor.pri,
    "extensionIcon.preReleaseForeground": colors.basic.def.purple.pri,
    "extensionIcon.sponsorForeground": colors.basic.def.red.pri,
    "extensionIcon.starForeground": colors.basic.def.yellow.pri,
    "extensionIcon.verifiedForeground": colors.basic.def.blue.pri,
  };
};
