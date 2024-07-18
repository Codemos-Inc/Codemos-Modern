import { ThemeContext } from "../../../../../@types/index";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "dart.closingLabels": colors.basic.def.green.pri,
    "dart.flutterUiGuides": colors.stroke.divider.default,
  };
};
