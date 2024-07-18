import { ThemeContext } from "../../../@types/index";
import { getRules as getSemanticRules } from "./semantic/index";
import { getRules as getSyntaxRules } from "./syntax/index";

export const getRules = (themeContext: ThemeContext): object => {
  if (themeContext.auxiliaryCodeThemeObject) {
    const hasSemanticHighlightingProperty =
      themeContext.auxiliaryCodeThemeObject.semanticHighlighting !== undefined
        ? true
        : false;
    const hasSemanticTokenColorsProperty =
      themeContext.auxiliaryCodeThemeObject.semanticTokenColors !== undefined
        ? true
        : false;
    const hasTokenColorsProperty =
      themeContext.auxiliaryCodeThemeObject.tokenColors !== undefined
        ? true
        : false;
    return {
      ...(hasSemanticHighlightingProperty && {
        semanticHighlighting:
          themeContext.auxiliaryCodeThemeObject.semanticHighlighting,
      }),
      ...(hasSemanticTokenColorsProperty && {
        semanticTokenColors:
          themeContext.auxiliaryCodeThemeObject.semanticTokenColors,
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
