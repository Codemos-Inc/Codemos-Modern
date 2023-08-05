import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const statusBarRules = {
    "statusBar.background": colors.bg.solid.base,
    "statusBar.border": colors.stroke.control.default,
    "statusBar.debuggingBackground": colors.fill.system.bg.yellow,
    "statusBar.debuggingBorder": colors.stroke.control.default,
    "statusBar.debuggingForeground": colors.fill.system.fg.yellow,
    "statusBar.focusBorder": colors.stroke.focus.default,
    "statusBar.foreground": colors.fill.text.pri,
    "statusBar.noFolderBackground": colors.fill.system.bg.red,
    "statusBar.noFolderBorder": colors.stroke.control.default,
    "statusBar.noFolderForeground": colors.fill.system.fg.red,
    "statusBar.offlineBackground": colors.fill.system.bg.red,
    "statusBar.offlineForeground": colors.fill.system.fg.red,
    "statusBarItem.activeBackground": colors.fill.control.pressed,
    "statusBarItem.compactHoverBackground": colors.fill.control.doubleHover,
    "statusBarItem.errorBackground": colors.fill.system.bg.red,
    "statusBarItem.errorForeground": colors.fill.system.fg.red,
    "statusBarItem.focusBorder": colors.stroke.focus.default,
    "statusBarItem.hoverBackground": colors.fill.control.rest,
    "statusBarItem.prominentBackground": colors.fill.control.prominent,
    "statusBarItem.prominentForeground": colors.fill.text.pri,
    "statusBarItem.prominentHoverBackground": colors.fill.control.hover,
    "statusBarItem.remoteBackground": colors.fill.system.bg.mint,
    "statusBarItem.remoteForeground": colors.fill.system.fg.mint,
    "statusBarItem.warningBackground": colors.fill.system.bg.orange,
    "statusBarItem.warningForeground": colors.fill.system.fg.orange,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    statusBarRules["statusBar.noFolderBackground"] = colors.bg.solid.base;
    statusBarRules["statusBar.noFolderForeground"] = colors.fill.text.pri;
  }
  return statusBarRules;
};
