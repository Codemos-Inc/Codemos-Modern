import { ThemeContext } from "../../../../../@types";
import { getRules as getCmakeRules } from "./languages/cmake";
import { getRules as getCppRules } from "./languages/cpp";
import { getRules as getCsharpRules } from "./languages/csharp";
import { getRules as getDartRules } from "./languages/dart";
import { getRules as getJavaRules } from "./languages/java";
import { getRules as getPythonRules } from "./languages/python";
import { getRules as getRustRules } from "./languages/rust";
import { getRules as getTomlRules } from "./languages/toml";

export const getRules = (themeContext: ThemeContext): object => {
  return {
    ...getCmakeRules(themeContext),
    ...getCppRules(themeContext),
    ...getCsharpRules(themeContext),
    ...getDartRules(themeContext),
    ...getJavaRules(themeContext),
    ...getPythonRules(themeContext),
    ...getRustRules(themeContext),
    ...getTomlRules(themeContext),
  };
};
