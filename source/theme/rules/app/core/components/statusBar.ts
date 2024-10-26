import { ThemeContext } from "../../../../../@types";
import { getMixedColorHex9 } from "../../../../../color";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  const rules = {
    "statusBar.background": styles.bg.solid.base,
    "statusBar.border": styles.stroke.divider.default,
    "statusBar.debuggingBackground": styles.fill.system.bg.yellow,
    "statusBar.debuggingBorder": styles.stroke.divider.default,
    "statusBar.debuggingForeground": styles.fill.system.fg.yellow,
    "statusBar.focusBorder": styles.stroke.focus.default,
    "statusBar.foreground": styles.fill.text.pri,
    "statusBar.noFolderBackground": styles.fill.system.bg.red,
    "statusBar.noFolderBorder": styles.stroke.divider.default,
    "statusBar.noFolderForeground": styles.fill.system.fg.red,
    "statusBarItem.activeBackground": styles.fill.control.pressed,
    "statusBarItem.compactHoverBackground": styles.fill.control.doubleHover,
    "statusBarItem.errorBackground": styles.fill.system.bg.red,
    "statusBarItem.errorForeground": styles.fill.system.fg.red,
    "statusBarItem.errorHoverBackground": getMixedColorHex9(
      styles.fill.control.rest,
      styles.fill.system.bg.red,
    ),
    "statusBarItem.errorHoverForeground": styles.fill.text.pri,
    "statusBarItem.focusBorder": styles.stroke.focus.default,
    "statusBarItem.hoverBackground": styles.fill.control.rest,
    "statusBarItem.hoverForeground": styles.fill.text.pri,
    "statusBarItem.offlineBackground": styles.fill.system.bg.red,
    "statusBarItem.offlineForeground": styles.fill.system.fg.red,
    "statusBarItem.offlineHoverBackground": getMixedColorHex9(
      styles.fill.control.rest,
      styles.fill.system.bg.red,
    ),
    "statusBarItem.offlineHoverForeground": styles.fill.text.pri,
    "statusBarItem.prominentBackground": styles.fill.control.prominent,
    "statusBarItem.prominentForeground": styles.fill.text.pri,
    "statusBarItem.prominentHoverBackground": getMixedColorHex9(
      styles.fill.control.rest,
      styles.fill.control.prominent,
    ),
    "statusBarItem.prominentHoverForeground": styles.fill.text.pri,
    "statusBarItem.remoteBackground": styles.fill.system.bg.mint,
    "statusBarItem.remoteForeground": styles.fill.system.fg.mint,
    "statusBarItem.remoteHoverBackground": getMixedColorHex9(
      styles.fill.control.rest,
      styles.fill.system.bg.mint,
    ),
    "statusBarItem.remoteHoverForeground": styles.fill.text.pri,
    "statusBarItem.warningBackground": styles.fill.system.bg.orange,
    "statusBarItem.warningForeground": styles.fill.system.fg.orange,
    "statusBarItem.warningHoverBackground": getMixedColorHex9(
      styles.fill.control.rest,
      styles.fill.system.bg.orange,
    ),
    "statusBarItem.warningHoverForeground": styles.fill.text.pri,
  };
  const design = themeContext.variantConfig.design;
  if (design === "natural" || design === "minimal") {
    rules["statusBar.noFolderBackground"] = styles.bg.solid.base;
    rules["statusBar.noFolderForeground"] = styles.fill.text.pri;
    rules["statusBarItem.remoteBackground"] = styles.fill.accent.pri;
    rules["statusBarItem.remoteForeground"] = styles.fill.textOnColor.pri;
    rules["statusBarItem.remoteHoverBackground"] = getMixedColorHex9(
      styles.fill.accent.sec,
      styles.bg.solid.base,
    );
    rules["statusBarItem.remoteHoverForeground"] = styles.fill.textOnColor.pri;
  } else if (design === "flat") {
    rules["statusBar.noFolderBackground"] = styles.bg.solid.base;
    rules["statusBar.noFolderForeground"] = styles.fill.text.pri;
    rules["statusBarItem.remoteBackground"] = getMixedColorHex9(
      styles.fill.control.hover,
      styles.bg.solid.base,
    );
    rules["statusBarItem.remoteForeground"] = styles.fill.accentText.pri;
    rules["statusBarItem.remoteHoverBackground"] = getMixedColorHex9(
      styles.fill.control.doubleHover,
      styles.bg.solid.base,
    );
    rules["statusBarItem.remoteHoverForeground"] = styles.fill.accentText.sec;
  }
  return rules;
};
