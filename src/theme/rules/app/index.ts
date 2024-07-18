import { ThemeContext } from "../../../@types/index";
import { getRules as getCoreRules } from "./core/index";
import { getRules as getOtherRules } from "./other/index";

export const getRules = (themeContext: ThemeContext): object => {
  if (themeContext.auxiliaryUiThemeObject) {
    const hasColorsProperty =
      themeContext.auxiliaryUiThemeObject.colors !== undefined ? true : false;
    return {
      ...(hasColorsProperty && {
        colors: themeContext.auxiliaryUiThemeObject.colors,
      }),
    };
  }
  return {
    colors: {
      ...getCoreRules(themeContext),
      ...getOtherRules(themeContext),
    },
  };
};
