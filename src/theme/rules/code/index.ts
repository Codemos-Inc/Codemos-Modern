import { ThemeContext } from "../../../@types";
import { getRules as getSemanticRules } from "./semantic";
import { getRules as getSyntaxRules } from "./syntax";

export const getRules = (themeContext: ThemeContext): object => {
  if (themeContext.auxCodeThemeObj) {
    const hasSemanticHighlighting =
      themeContext.auxCodeThemeObj.semanticHighlighting !== undefined ? true : false;
    const hasSemanticTokenColorsProperty =
      themeContext.auxCodeThemeObj.semanticTokenColors !== undefined ? true : false;
    const hasTokenColorsProperty =
      themeContext.auxCodeThemeObj.tokenColors !== undefined ? true : false;
    return {
      ...(hasSemanticHighlighting && {
        semanticHighlighting: themeContext.auxCodeThemeObj.semanticHighlighting,
      }),
      ...(hasSemanticTokenColorsProperty && {
        semanticTokenColors: themeContext.auxCodeThemeObj.semanticTokenColors,
      }),
      ...(hasTokenColorsProperty && {
        tokenColors: themeContext.auxCodeThemeObj.tokenColors,
      }),
    };
  }
  return {
    semanticHighlighting: true,
    semanticTokenColors: {
      ...getSemanticRules(themeContext),
    },
    tokenColors: [...(<[]>getSyntaxRules(themeContext))],
  };
};
