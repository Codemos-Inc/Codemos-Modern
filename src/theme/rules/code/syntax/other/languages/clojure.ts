import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Global variables
    {
      scope: ["source.clojure entity.global"],
      settings: {
        foreground: colors.s13,
        fontStyle: "",
      },
    },
    // Keywords
    {
      scope: ["source.clojure constant.keyword", "source.clojure keyword.control"],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },
    // Keywords
    {
      scope: ["source.clojure storage.control"],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },
    // Symbols
    {
      scope: ["source.clojure meta.symbol"],
      settings: {
        foreground: colors.s10,
        fontStyle: "",
      },
    },
  ];
};
