import { ThemeContext } from "../../../../../@types/index";
import { getMixedColorHex9 } from "../../../../../color/index";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  const statusBarRules = {
    "statusBar.background": colors.bg.solid.base,
    "statusBar.foreground": colors.fill.text.pri,
    "statusBar.border": colors.stroke.divider.default,
    "statusBar.debuggingBackground": colors.fill.system.bg.yellow,
    "statusBar.debuggingForeground": colors.fill.system.fg.yellow,
    "statusBar.debuggingBorder": colors.stroke.divider.default,
    "statusBar.noFolderBackground": colors.fill.system.bg.red,
    "statusBar.noFolderForeground": colors.fill.system.fg.red,
    "statusBar.noFolderBorder": colors.stroke.divider.default,
    "statusBarItem.activeBackground": colors.fill.control.pressed,
    "statusBarItem.hoverForeground": colors.fill.text.pri,
    "statusBarItem.hoverBackground": colors.fill.control.rest,
    "statusBarItem.prominentForeground": colors.fill.text.pri,
    "statusBarItem.prominentBackground": colors.fill.control.prominent,
    "statusBarItem.prominentHoverForeground": colors.fill.text.pri,
    "statusBarItem.prominentHoverBackground": getMixedColorHex9(
      colors.fill.control.rest,
      colors.fill.control.prominent,
    ),
    "statusBarItem.remoteBackground": colors.fill.system.bg.mint,
    "statusBarItem.remoteForeground": colors.fill.system.fg.mint,
    "statusBarItem.remoteHoverBackground": getMixedColorHex9(
      colors.fill.control.rest,
      colors.fill.system.bg.mint,
    ),
    "statusBarItem.remoteHoverForeground": colors.fill.text.pri,
    "statusBarItem.errorBackground": colors.fill.system.bg.red,
    "statusBarItem.errorForeground": colors.fill.system.fg.red,
    "statusBarItem.errorHoverBackground": getMixedColorHex9(
      colors.fill.control.rest,
      colors.fill.system.bg.red,
    ),
    "statusBarItem.errorHoverForeground": colors.fill.text.pri,
    "statusBarItem.warningBackground": colors.fill.system.bg.orange,
    "statusBarItem.warningForeground": colors.fill.system.fg.orange,
    "statusBarItem.warningHoverBackground": getMixedColorHex9(
      colors.fill.control.rest,
      colors.fill.system.bg.orange,
    ),
    "statusBarItem.warningHoverForeground": colors.fill.text.pri,
    "statusBarItem.compactHoverBackground": colors.fill.control.doubleHover,
    "statusBarItem.focusBorder": colors.stroke.focus.default,
    "statusBar.focusBorder": colors.stroke.focus.default,
    "statusBarItem.offlineBackground": colors.fill.system.bg.red,
    "statusBarItem.offlineForeground": colors.fill.system.fg.red,
    "statusBarItem.offlineHoverBackground": getMixedColorHex9(
      colors.fill.control.rest,
      colors.fill.system.bg.red,
    ),
    "statusBarItem.offlineHoverForeground": colors.fill.text.pri,
  };
  const design = themeContext.variantConfig.design;
  if (design === "minimal") {
    statusBarRules["statusBar.noFolderBackground"] = colors.bg.solid.base;
    statusBarRules["statusBar.noFolderForeground"] = colors.fill.text.pri;
  }
  return statusBarRules;
};
