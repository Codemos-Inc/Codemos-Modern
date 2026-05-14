import { ThemeContext } from "../../../../../@types";

export function getRules(themeContext: ThemeContext): object {
  const styles = themeContext.styles;
  return {
    "agentSessionReadIndicator.foreground": styles.fill.text.disabled,
    "agentSessionSelectedBadge.border": styles.basic.def.blue.pri,
    "agentSessionSelectedUnfocusedBadge.border": styles.basic.def.blue.ter,
    "agentStatusIndicator.background": styles.fill.control.rest,
    "aiCustomizationManagement.sashBorder": styles.stroke.focus.default,
  };
}
