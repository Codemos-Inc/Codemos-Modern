import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "notificationCenter.border": styles.stroke.surface.flyout,
    "notificationCenterHeader.background": styles.bg.solid.flyout,
    "notificationCenterHeader.foreground": styles.fill.text.pri,
    "notificationLink.foreground": styles.fill.accentText.pri,
    "notifications.background": styles.bg.solid.flyout,
    "notifications.border": styles.stroke.divider.default,
    "notifications.foreground": styles.fill.text.pri,
    "notificationsErrorIcon.foreground": styles.basic.def.red.pri,
    "notificationsInfoIcon.foreground": styles.basic.def.blue.pri,
    "notificationsWarningIcon.foreground": styles.basic.def.orange.pri,
    "notificationToast.border": styles.stroke.surface.flyout,
  };
};
