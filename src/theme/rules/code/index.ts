import { ThemeContext } from "../../../@types";
import { getRules as getSemanticRules } from "./semantic";
import { getRules as getSyntaxRules } from "./syntax";

export const getRules = (themeContext: ThemeContext): object => {
  if (themeContext.auxiliaryCodeThemeObject) {
    const hasSemanticHighlighting =
      themeContext.auxiliaryCodeThemeObject.semanticHighlighting !== undefined ? true : false;
    const hasSemanticTokenColorsProperty =
      themeContext.auxiliaryCodeThemeObject.semanticTokenColors !== undefined ? true : false;
    const hasTokenColorsProperty =
      themeContext.auxiliaryCodeThemeObject.tokenColors !== undefined ? true : false;
    return {
      ...(hasSemanticHighlighting && {
        semanticHighlighting: themeContext.auxiliaryCodeThemeObject.semanticHighlighting,
      }),
      ...(hasSemanticTokenColorsProperty && {
        semanticTokenColors: themeContext.auxiliaryCodeThemeObject.semanticTokenColors,
      }),
      ...(hasTokenColorsProperty && {
        tokenColors: themeContext.auxiliaryCodeThemeObject.tokenColors,
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
