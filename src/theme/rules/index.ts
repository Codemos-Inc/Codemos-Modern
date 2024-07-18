import { ThemeContext } from "../../@types";
import { getRules as getAppRules } from "./app";
import { getRules as getCodeRules } from "./code";

export const getRules = (themeContext: ThemeContext): object => {
  return {
    ...getAppRules(themeContext),
    ...getCodeRules(themeContext),
  };
};
