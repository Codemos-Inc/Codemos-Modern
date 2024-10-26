import { ThemeContext } from "../../../@types";
import { getRules as getCoreRules } from "./core";
import { getRules as getOtherRules } from "./other";

export const getRules = (themeContext: ThemeContext): object => {
  if (themeContext.auxUiThemeObj) {
    const hasColorsProperty = themeContext.auxUiThemeObj.colors !== undefined ? true : false;
    return {
      ...(hasColorsProperty && {
        colors: themeContext.auxUiThemeObj.colors,
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
