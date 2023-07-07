import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "notificationCenter.border": colors.stroke.surface.flyout,
    "notificationCenterHeader.background": colors.bg.solid.base,
    "notificationCenterHeader.foreground": colors.fill.text.pri,
    "notificationLink.foreground": colors.fill.accentText.pri,
    "notifications.background": colors.bg.solid.flyout,
    "notifications.border": colors.stroke.divider.default,
    "notifications.foreground": colors.fill.text.pri,
    "notificationsErrorIcon.foreground": colors.basic.def.red.pri,
    "notificationsInfoIcon.foreground": colors.basic.def.blue.pri,
    "notificationsWarningIcon.foreground": colors.basic.def.orange.pri,
    "notificationToast.border": colors.stroke.surface.flyout,
  };
};
