import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const statusBarRules = {
    "statusBar.background": colors.bg.solid.base,
    "statusBar.foreground": colors.fill.text.pri,
    "statusBar.border": colors.stroke.control.default,
    "statusBar.debuggingBackground": colors.fill.system.bg.yellow,
    "statusBar.debuggingForeground": colors.fill.system.fg.yellow,
    "statusBar.debuggingBorder": colors.stroke.control.default,
    "statusBar.noFolderBackground": colors.fill.system.bg.red,
    "statusBar.noFolderForeground": colors.fill.system.fg.red,
    "statusBar.noFolderBorder": colors.stroke.control.default,
    "statusBarItem.activeBackground": colors.fill.control.pressed,
    "statusBarItem.hoverForeground": "#FF0000",
    "statusBarItem.hoverBackground": colors.fill.control.rest,
    "statusBarItem.prominentForeground": colors.fill.text.pri,
    "statusBarItem.prominentBackground": colors.fill.control.prominent,
    "statusBarItem.prominentHoverForeground": "#FF0000",
    "statusBarItem.prominentHoverBackground": colors.fill.control.hover,
    "statusBarItem.remoteBackground": colors.fill.system.bg.mint,
    "statusBarItem.remoteForeground": colors.fill.system.fg.mint,
    "statusBarItem.remoteHoverBackground": "#FF0000",
    "statusBarItem.remoteHoverForeground": "#FF0000",
    "statusBarItem.errorBackground": colors.fill.system.bg.red,
    "statusBarItem.errorForeground": colors.fill.system.fg.red,
    "statusBarItem.errorHoverBackground": "#FF0000",
    "statusBarItem.errorHoverForeground": "#FF0000",
    "statusBarItem.warningBackground": colors.fill.system.bg.orange,
    "statusBarItem.warningForeground": colors.fill.system.fg.orange,
    "statusBarItem.warningHoverBackground": "#FF0000",
    "statusBarItem.warningHoverForeground": "#FF0000",
    "statusBarItem.compactHoverBackground": colors.fill.control.doubleHover,
    "statusBarItem.focusBorder": colors.stroke.focus.default,
    "statusBar.focusBorder": colors.stroke.focus.default,
    "statusBarItem.offlineBackground": "#FF0000",
    "statusBarItem.offlineForeground": "#FF0000",
    "statusBarItem.offlineHoverBackground": "#FF0000",
    "statusBarItem.offlineHoverForeground": "#FF0000",
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    statusBarRules["statusBar.noFolderBackground"] = colors.bg.solid.base;
    statusBarRules["statusBar.noFolderForeground"] = colors.fill.text.pri;
  }
  return statusBarRules;
};
