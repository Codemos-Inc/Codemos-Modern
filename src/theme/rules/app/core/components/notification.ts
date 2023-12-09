import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "notificationCenter.border": colors.stroke.surface.flyout,
    "notificationCenterHeader.background": colors.bg.solid.flyout,
    "notificationCenterHeader.foreground": colors.fill.text.pri,
    "notificationToast.border": colors.stroke.surface.flyout,
    "notifications.foreground": colors.fill.text.pri,
    "notifications.background": colors.bg.solid.flyout,
    "notifications.border": colors.stroke.divider.default,
    "notificationLink.foreground": colors.fill.accentText.pri,
    "notificationsErrorIcon.foreground": colors.basic.def.red.pri,
    "notificationsWarningIcon.foreground": colors.basic.def.orange.pri,
    "notificationsInfoIcon.foreground": colors.basic.def.blue.pri,
  };
};
