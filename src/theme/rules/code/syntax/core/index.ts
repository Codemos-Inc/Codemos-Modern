import { ThemeContext } from "../../../../../@types";
import { getRules as getS00Rules } from "./scopes/s00";
import { getRules as getS01Rules } from "./scopes/s01";
import { getRules as getS02Rules } from "./scopes/s02";
import { getRules as getS03Rules } from "./scopes/s03";
import { getRules as getS04Rules } from "./scopes/s04";
import { getRules as getS05Rules } from "./scopes/s05";
import { getRules as getS06Rules } from "./scopes/s06";
import { getRules as getS07Rules } from "./scopes/s07";
import { getRules as getS08Rules } from "./scopes/s08";
import { getRules as getS09Rules } from "./scopes/s09";
import { getRules as getS10Rules } from "./scopes/s10";
import { getRules as getS11Rules } from "./scopes/s11";
import { getRules as getS12Rules } from "./scopes/s12";
import { getRules as getS13Rules } from "./scopes/s13";
import { getRules as getS14Rules } from "./scopes/s14";
import { getRules as getS15Rules } from "./scopes/s15";
import { getRules as getS16Rules } from "./scopes/s16";
import { getRules as getSnoRules } from "./scopes/sno";
import { getRules as getSxxRules } from "./scopes/sxx";

export const getRules = (themeContext: ThemeContext): object => {
  return [
    ...(<[]>getS00Rules(themeContext)),
    ...(<[]>getS01Rules(themeContext)),
    ...(<[]>getS02Rules(themeContext)),
    ...(<[]>getS03Rules(themeContext)),
    ...(<[]>getS04Rules(themeContext)),
    ...(<[]>getS05Rules(themeContext)),
    ...(<[]>getS06Rules(themeContext)),
    ...(<[]>getS07Rules(themeContext)),
    ...(<[]>getS08Rules(themeContext)),
    ...(<[]>getS09Rules(themeContext)),
    ...(<[]>getS10Rules(themeContext)),
    ...(<[]>getS11Rules(themeContext)),
    ...(<[]>getS12Rules(themeContext)),
    ...(<[]>getS13Rules(themeContext)),
    ...(<[]>getS14Rules(themeContext)),
    ...(<[]>getS15Rules(themeContext)),
    ...(<[]>getS16Rules(themeContext)),
    ...(<[]>getSnoRules()),
    ...(<[]>getSxxRules(themeContext)),
  ];
};
