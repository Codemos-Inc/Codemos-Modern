import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return {
    // Array keys
    tomlArrayKey: colors.scope05,
    // Table keys
    tomlTableKey: colors.scope05,
  };
};
