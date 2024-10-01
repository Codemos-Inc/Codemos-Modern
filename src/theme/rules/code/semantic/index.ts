import { ThemeContext } from "../../../../@types";
import { getRules as getCoreRules } from "./core";
import { getRules as getOtherRules } from "./other";

export const getRules = (themeContext: ThemeContext): object => {
  return {
    ...getCoreRules(themeContext),
    ...getOtherRules(themeContext),
  };
};

// const getDefaultRules = (themeContext: ThemeContext): object => {
//   const styles = themeContext.styles;
//   return {

//     "property.annotation": {
//       foreground: styles.basic.def.red.pri,
//       underline: false,
//     }
//   };
// };

// const getExtraRules = (themeContext: ThemeContext): object => {
//   const styles = themeContext.styles;
//   return {
//     plainKeyword: styles.basic.def.blue.pri,
//   };
// };
