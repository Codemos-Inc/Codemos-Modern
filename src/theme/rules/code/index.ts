import { ThemeContext } from "../../../@types";
import { getRules as getSemanticRules } from "./semantic";
import { getRules as getSyntaxRules } from "./syntax";

export const getRules = (themeContext: ThemeContext): object => {
  if (themeContext.codeThemeObject) {
    const hasSemanticHighlightingProperty =
      themeContext.codeThemeObject.semanticHighlighting !== undefined
        ? true
        : false;
    const hasSemanticTokenColorsProperty =
      themeContext.codeThemeObject.semanticTokenColors !== undefined
        ? true
        : false;
    const hasTokenColorsProperty =
      themeContext.codeThemeObject.tokenColors !== undefined ? true : false;
    return {
      ...(hasSemanticHighlightingProperty && {
        hasSemanticHighlighting:
          themeContext.codeThemeObject.semanticHighlighting,
      }),
      ...(hasSemanticTokenColorsProperty && {
        semanticTokenColors: themeContext.codeThemeObject.semanticTokenColors,
      }),
      ...(hasTokenColorsProperty && {
        tokenColors: themeContext.codeThemeObject.tokenColors,
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
