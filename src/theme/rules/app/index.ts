import { ThemeContext } from "../../../@types";
import { getRules as getCoreRules } from "./core";
import { getRules as getOtherRules } from "./other";

export const getRules = (themeContext: ThemeContext): object => {
  return {
    colors: {
      ...getCoreRules(themeContext),
      ...getOtherRules(themeContext),
    },
  };
};
