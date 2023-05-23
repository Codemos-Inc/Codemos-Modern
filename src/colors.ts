// 1. OPACITY CONSTANT
const OP100 = "FF";
const OP078 = "C7";
const OP070 = "B3";
const OP054 = "8A";
const OP040 = "66";
const OP036 = "5C";
const OP030 = "4D";
const OP020 = "33";
const OP010 = "1A";
const OP009 = "17";
const OP008 = "14";
const OP007 = "12";
const OP006 = "0F";
const OP005 = "0D";
const OP004 = "0A";
const OP003 = "08";
// 2. ACCENT COLOR
let DARK_ACCENT = "#FFFFFF";
export function updateDarkAccent(hex6: string) {
  DARK_ACCENT = `#${hex6}`;
}
let LIGHT_ACCENT = "#000000";
export function updateLightAccent(hex6: string) {
  LIGHT_ACCENT = `#${hex6}`;
}
// 3. FUNDAMENTAL COLOR
const BLACK = "#000000";
const WHITE = "#FFFFFF";
// D. DARK THEME
// D.1. Basic Color
// D.1.1 Primary
export const D_BASIC_PRI_BROWN = {
  get value() { return "#CB8569"; }
};
export const D_BASIC_PRI_RED = {
  get value() { return "#EA6162"; }
};
export const D_BASIC_PRI_ORANGE = {
  get value() { return "#D38342"; }
};
export const D_BASIC_PRI_YELLOW = {
  get value() { return "#C6B339"; }
};
export const D_BASIC_PRI_GREEN = {
  get value() { return "#45AA41"; }
};
export const D_BASIC_PRI_MINT = {
  get value() { return "#46A599"; }
};
export const D_BASIC_PRI_BLUE = {
  get value() { return "#3793C8"; }
};
export const D_BASIC_PRI_PURPLE = {
  get value() { return "#9B87EA"; }
};
export const D_BASIC_PRI_PINK = {
  get value() { return "#ED63BB"; }
};
// D.1.2 Secondary
export const D_BASIC_SEC_RED = {
  get value() { return "#CD8E8E"; }
};
export const D_BASIC_SEC_ORANGE = {
  get value() { return "#C0A087"; }
};
export const D_BASIC_SEC_YELLOW = {
  get value() { return "#CAC4A0"; }
};
export const D_BASIC_SEC_GREEN = {
  get value() { return "#86B285"; }
};
export const D_BASIC_SEC_MINT = {
  get value() { return "#84AEA9"; }
};
export const D_BASIC_SEC_BLUE = {
  get value() { return "#7BA1B7"; }
};
export const D_BASIC_SEC_PURPLE = {
  get value() { return "#A99FD1"; }
};
export const D_BASIC_SEC_PINK = {
  get value() { return "#D194BB"; }
};
// D.1.3 Background
export const D_BASIC_BG_RED = {
  get value() { return "#3A2727"; }
};
export const D_BASIC_BG_ORANGE = {
  get value() { return "#322B24"; }
};
export const D_BASIC_BG_YELLOW = {
  get value() { return "#343327"; }
};
export const D_BASIC_BG_GREEN = {
  get value() { return "#273027"; }
};
export const D_BASIC_BG_MINT = {
  get value() { return "#27302F"; }
};
export const D_BASIC_BG_BLUE = {
  get value() { return "#252D31"; }
};
export const D_BASIC_BG_PURPLE = {
  get value() { return "#2E2A3C"; }
};
export const D_BASIC_BG_PINK = {
  get value() { return "#3A2733"; }
};
// D.2. Fill Color
// D.2.1 Text
export const D_FILL_TEXT_PRI = {
  get value() { return `${WHITE}${OP100}`; }
};
export const D_FILL_TEXT_SEC = {
  get value() { return `${WHITE}${OP078}`; }
};
export const D_FILL_TEXT_TER = {
  get value() { return `${WHITE}${OP054}`; }
};
export const D_FILL_TEXT_DIS = {
  get value() { return `${WHITE}${OP036}`; }
};
// D.2.2 Accent Text
export const D_FILL_ACCENT_TEXT_PRI = {
  get value() { return `${DARK_ACCENT}${OP100}`; }
};
export const D_FILL_ACCENT_TEXT_DIS = {
  get value() { return `${WHITE}${OP036}`; }
};
// D.2.3 Text On Accent
export const D_FILL_TEXT_ON_ACCENT_PRI = {
  get value() { return `${BLACK}${OP100}`; }
};
export const D_FILL_TEXT_ON_ACCENT_DIS = {
  get value() { return `${WHITE}${OP054}`; }
};
// D.2.4 Control
export const D_FILL_CONTROL_PRI = {
  get value() { return `${WHITE}${OP006}`; }
};
export const D_FILL_CONTROL_SEC = {
  get value() { return `${WHITE}${OP008}`; }
};
export const D_FILL_CONTROL_TER = {
  get value() { return `${WHITE}${OP003}`; }
};
export const D_FILL_CONTROL_DIS = {
  get value() { return `${WHITE}${OP004}`; }
};
export const D_FILL_CONTROL_ACT = {
  get value() { return `#1E1E1E${OP070}`; }
};
// D.2.5 System
// D.2.5.1 Foreground
export const D_FILL_SYSTEM_FG_CRITICAL = {
  get value() { return `${D_BASIC_PRI_RED}${OP100}`; }
};
export const D_FILL_SYSTEM_FG_CAUTION = {
  get value() { return `${D_BASIC_PRI_ORANGE}${OP100}`; }
};
export const D_FILL_SYSTEM_FG_ATTENTION = {
  get value() { return `${D_BASIC_PRI_YELLOW}${OP100}`; }
};
export const D_FILL_SYSTEM_FG_SUCCESS = {
  get value() { return `${D_BASIC_PRI_GREEN}${OP100}`; }
};
export const D_FILL_SYSTEM_FG_INFO = {
  get value() { return `${D_BASIC_PRI_BLUE}${OP100}`; }
};
// D.2.5.2 Background
export const D_FILL_SYSTEM_BG_CRITICAL = {
  get value() { return `${D_BASIC_BG_RED}${OP100}`; }
};
export const D_FILL_SYSTEM_BG_CAUTION = {
  get value() { return `${D_BASIC_BG_ORANGE}${OP100}`; }
};
export const D_FILL_SYSTEM_BG_ATTENTION = {
  get value() { return `${D_BASIC_BG_YELLOW}${OP100}`; }
};
export const D_FILL_SYSTEM_BG_SUCCESS = {
  get value() { return `${D_BASIC_BG_GREEN}${OP100}`; }
};
export const D_FILL_SYSTEM_BG_INFO = {
  get value() { return `${D_BASIC_BG_BLUE}${OP100}`; }
};
// D.3 Stroke Color
// D.3.1 Control
export const D_STROKE_CONTROL_PRI = {
  get value() { return `${WHITE}${OP007}`; }
};
export const D_STROKE_CONTROL_SEC = {
  get value() { return `${WHITE}${OP009}`; }
};
// D.3.2 Divider
export const D_STROKE_DIVIDER = {
  get value() { return `${WHITE}${OP008}`; }
};
// D.3.3 Surface
export const D_STROKE_SURFACE_LAYER = {
  get value() { return `#757575${OP040}`; }
};
export const D_STROKE_SURFACE_FLYOUT = {
  get value() { return `${BLACK}${OP020}`; }
};
// D.3.4 Card
export const D_STROKE_CARD = {
  get value() { return `${BLACK}${OP010}`; }
};
// D.3.5 Focus
export const D_STROKE_FOCUS = {
  get value() { return `${WHITE}${OP100}`; }
};
// D.4 Background
// D.4.1 Base
export const D_BG_BASE_PRI = {
  get value() { return `#202020${OP100}`; }
};
export const D_BG_BASE_SEC = {
  get value() { return `#282828${OP100}`; }
};
export const D_BG_BASE_TER = {
  get value() { return `#2C2C2C${OP100}`; }
};
export const D_BG_BASE_ALT = {
  get value() { return `#1C1C1C${OP100}`; }
};
// D.4.2 Layer
export const D_BG_LAYER = {
  get value() { return `#3A3A3A${OP030}`; }
};
// D.4.2 Card
export const D_BG_CARD_PRI = {
  get value() { return `${WHITE}${OP005}`; }
};
export const D_BG_CARD_SEC = {
  get value() { return `${WHITE}${OP007}`; }
};
