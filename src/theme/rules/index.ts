import { ThemeContext } from "../../@types/index";
import { getRules as getAppRules } from "./app/index";
import { getRules as getCodeRules } from "./code/index";

export const getRules = (themeContext: ThemeContext): object => {
  return {
    ...getAppRules(themeContext),
    ...getCodeRules(themeContext),
  };
};
