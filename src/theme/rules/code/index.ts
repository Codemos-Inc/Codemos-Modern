import { ThemeContext } from "../../../@types";
import { getRules as getSemanticRules } from "./semantic";
import { getRules as getSyntaxRules } from "./syntax";

export const getRules = (themeContext: ThemeContext): object => {
  return {
    semanticTokenColors: {
      ...getSemanticRules(themeContext),
    },
    tokenColors: [...(<[]>getSyntaxRules(themeContext))],
  };
};
