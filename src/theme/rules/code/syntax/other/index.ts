import { ThemeContext } from "../../../../../@types";
import { getRules as getAsmRules } from "./languages/asm";
import { getRules as getBatchRules } from "./languages/batch";
import { getRules as getBibtextRules } from "./languages/bibtex";
import { getRules as getCRules } from "./languages/c";
import { getRules as getClojureRules } from "./languages/clojure";
import { getRules as getCoffeescriptRules } from "./languages/coffeescript";
import { getRules as getCppRules } from "./languages/cpp";
import { getRules as getCsharpRules } from "./languages/csharp";
import { getRules as getCssRules } from "./languages/css";
import { getRules as getDartRules } from "./languages/dart";
import { getRules as getFishRules } from "./languages/fish";
import { getRules as getFsharpRules } from "./languages/fsharp";
import { getRules as getGoRules } from "./languages/go";
import { getRules as getGroovyRules } from "./languages/groovy";
import { getRules as getHlslRules } from "./languages/hlsl";
import { getRules as getIniRules } from "./languages/ini";
import { getRules as getJavaRules } from "./languages/java";
import { getRules as getKotlinRules } from "./languages/kotlin";
import { getRules as getLatexRules } from "./languages/latex";
import { getRules as getLuaRules } from "./languages/lua";
import { getRules as getMarkdownRules } from "./languages/markdown";
import { getRules as getMatlabRules } from "./languages/matlab";
import { getRules as getPerlRules } from "./languages/perl";
import { getRules as getPhpRules } from "./languages/php";
import { getRules as getPowerShellRules } from "./languages/powershell";
import { getRules as getPythonRules } from "./languages/python";
import { getRules as getRazorRules } from "./languages/razor";
import { getRules as getRubyRules } from "./languages/ruby";
import { getRules as getRustRules } from "./languages/rust";
import { getRules as getShellRules } from "./languages/shell";
import { getRules as getSqlRules } from "./languages/sql";
import { getRules as getSwiftRules } from "./languages/swift";
import { getRules as getTomlRules } from "./languages/toml";
import { getRules as getTypeScriptRules } from "./languages/typescript";
import { getRules as getVueRules } from "./languages/vue";
import { getRules as getYamlRules } from "./languages/yaml";

export const getRules = (themeContext: ThemeContext): object => {
  return [
    ...(<[]>getAsmRules(themeContext)),
    ...(<[]>getBatchRules(themeContext)),
    ...(<[]>getBibtextRules(themeContext)),
    ...(<[]>getCRules(themeContext)),
    ...(<[]>getClojureRules(themeContext)),
    ...(<[]>getCoffeescriptRules(themeContext)),
    ...(<[]>getCppRules(themeContext)),
    ...(<[]>getCsharpRules(themeContext)),
    ...(<[]>getCssRules(themeContext)),
    ...(<[]>getDartRules(themeContext)),
    ...(<[]>getFishRules(themeContext)),
    ...(<[]>getFsharpRules(themeContext)),
    ...(<[]>getGoRules(themeContext)),
    ...(<[]>getGroovyRules(themeContext)),
    ...(<[]>getHlslRules(themeContext)),
    ...(<[]>getIniRules(themeContext)),
    ...(<[]>getJavaRules(themeContext)),
    ...(<[]>getKotlinRules(themeContext)),
    ...(<[]>getLatexRules(themeContext)),
    ...(<[]>getLuaRules(themeContext)),
    ...(<[]>getMarkdownRules(themeContext)),
    ...(<[]>getMatlabRules(themeContext)),
    ...(<[]>getPerlRules(themeContext)),
    ...(<[]>getPhpRules(themeContext)),
    ...(<[]>getPowerShellRules(themeContext)),
    ...(<[]>getPythonRules(themeContext)),
    ...(<[]>getRazorRules(themeContext)),
    ...(<[]>getRubyRules(themeContext)),
    ...(<[]>getRustRules(themeContext)),
    ...(<[]>getShellRules(themeContext)),
    ...(<[]>getSqlRules(themeContext)),
    ...(<[]>getSwiftRules(themeContext)),
    ...(<[]>getTomlRules(themeContext)),
    ...(<[]>getTypeScriptRules(themeContext)),
    ...(<[]>getVueRules(themeContext)),
    ...(<[]>getYamlRules(themeContext)),
  ];
};
