import { ThemeContext } from "../../../../../@types";
import { getRules as getCppRules } from "./languages/cpp";
import { getRules as getCssRules } from "./languages/css";
import { getRules as getMarkdownRules } from "./languages/markdown";
import { getRules as getPowerShellRules } from "./languages/powershell";
import { getRules as getPythonRules } from "./languages/python";

export const getRules = (themeContext: ThemeContext): object => {
  return [
    ...(<[]>getCppRules(themeContext)),
    ...(<[]>getCssRules(themeContext)),
    ...(<[]>getMarkdownRules(themeContext)),
    ...(<[]>getPowerShellRules(themeContext)),
    ...(<[]>getPythonRules(themeContext)),
  ];
};
