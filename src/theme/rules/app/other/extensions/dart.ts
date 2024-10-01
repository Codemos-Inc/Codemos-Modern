import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    "dart.closingLabels": styles.basic.def.green.pri,
    "dart.flutterUiGuides": styles.stroke.divider.default,
  };
};
