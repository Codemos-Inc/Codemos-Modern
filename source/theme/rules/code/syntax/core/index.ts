import { ThemeContext } from "../../../../../@types";
import { getRules as getScope00Rules } from "./scopes/00";
import { getRules as getScope01Rules } from "./scopes/01";
import { getRules as getScope02Rules } from "./scopes/02";
import { getRules as getScope03Rules } from "./scopes/03";
import { getRules as getScope04Rules } from "./scopes/04";
import { getRules as getScope05Rules } from "./scopes/05";
import { getRules as getScope06Rules } from "./scopes/06";
import { getRules as getScope07Rules } from "./scopes/07";
import { getRules as getScope08Rules } from "./scopes/08";
import { getRules as getScope09Rules } from "./scopes/09";
import { getRules as getScope10Rules } from "./scopes/10";
import { getRules as getScope11Rules } from "./scopes/11";
import { getRules as getScope12Rules } from "./scopes/12";
import { getRules as getScope13Rules } from "./scopes/13";
import { getRules as getScope14Rules } from "./scopes/14";
import { getRules as getScope15Rules } from "./scopes/15";
import { getRules as getScope16Rules } from "./scopes/16";
import { getRules as getScope17Rules } from "./scopes/17";
import { getRules as getScopeNARules } from "./scopes/NA";

export const getRules = (themeContext: ThemeContext): object => {
  return [
    ...(<[]>getScope00Rules(themeContext)),
    ...(<[]>getScope01Rules(themeContext)),
    ...(<[]>getScope02Rules(themeContext)),
    ...(<[]>getScope03Rules(themeContext)),
    ...(<[]>getScope04Rules(themeContext)),
    ...(<[]>getScope05Rules(themeContext)),
    ...(<[]>getScope06Rules(themeContext)),
    ...(<[]>getScope07Rules(themeContext)),
    ...(<[]>getScope08Rules(themeContext)),
    ...(<[]>getScope09Rules(themeContext)),
    ...(<[]>getScope10Rules(themeContext)),
    ...(<[]>getScope11Rules(themeContext)),
    ...(<[]>getScope12Rules(themeContext)),
    ...(<[]>getScope13Rules(themeContext)),
    ...(<[]>getScope14Rules(themeContext)),
    ...(<[]>getScope15Rules(themeContext)),
    ...(<[]>getScope16Rules(themeContext)),
    ...(<[]>getScope17Rules(themeContext)),
    ...(<[]>getScopeNARules(themeContext)),
  ];
};
