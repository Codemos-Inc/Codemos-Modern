import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const color = themeContext.styles.code.s08;
  return [
    // Flow control keywords
    {
      scope: ["keyword.control", "support.keyword.control"],
      settings: {
        foreground: color,
        fontStyle: "",
      },
    },
  ];
};
