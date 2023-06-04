// 1 OPACITY CONSTANT
const OP100 = "FF";
const OP096 = "F5";
const OP090 = "E6";
const OP078 = "C7";
const OP070 = "B3";
const OP060 = "99";
const OP054 = "8A";
const OP050 = "80";
const OP045 = "73";
const OP040 = "66";
const OP036 = "5C";
const OP030 = "4D";
const OP020 = "33";
const OP014 = "23";
const OP010 = "1A";
const OP008 = "14";
const OP006 = "0F";
const OP003 = "08";
// 2 ACCENT COLOR
let ACCENT = "#000000";
export function updateAccent(hex6: string) {
  ACCENT = `#${hex6}`;
}
// 3 FUNDAMENTAL COLOR
// 3.1 Common
export const TRANSPARENT = {
  get value() { return "#00000000"; }
};
export const OPAQUE = {
  get value() { return "#000000FF"; }
};
// 3.2 Theme Specific
const LC = "#ffffff";
const HC = "#000000";
const BASIC_DEF_BROWN = "#CB8569";
const BASIC_DEF_RED = "#ca2121";
const BASIC_DEF_ORANGE = "#c97128";
const BASIC_DEF_YELLOW = "#b89900";
const BASIC_DEF_GREEN = "#3e943b";
const BASIC_DEF_MINT = "#3b9488";
const BASIC_DEF_BLUE = "#237bae";
const BASIC_DEF_PURPLE = "#8151c9";
const BASIC_DEF_PINK = "#c91487";
const BASIC_ALT_RED = "#c96464";
const BASIC_ALT_ORANGE = "#cd976a";
const BASIC_ALT_YELLOW = "#c7b660";
const BASIC_ALT_GREEN = "#67af64";
const BASIC_ALT_MINT = "#84AEA9";
const BASIC_ALT_BLUE = "#4f99c4";
const BASIC_ALT_PURPLE = "#997bc6";
const BASIC_ALT_PINK = "#d95eac";
const BASIC_LC_RED = "#f5e6e6";
const BASIC_LC_ORANGE = "#f0e7e0";
const BASIC_LC_YELLOW = "#eeead8";
const BASIC_LC_GREEN = "#e3ede3";
const BASIC_LC_MINT = "#e0ebea";
const BASIC_LC_BLUE = "#e0eaf0";
const BASIC_LC_PURPLE = "#ece8f2";
const BASIC_LC_PINK = "#f4e6ef";
// T THEME
// T.1 Basic Color
// T.1.1 Primary
// T.1.1.1 Brown
export const BASIC_DEF_BROWN_PRI = {
  get value() { return `${BASIC_DEF_BROWN}${OP100}`; }
};
export const BASIC_DEF_BROWN_SEC = {
  get value() { return `${BASIC_DEF_BROWN}${OP078}`; }
};
export const BASIC_DEF_BROWN_TER = {
  get value() { return `${BASIC_DEF_BROWN}${OP054}`; }
};
export const BASIC_DEF_BROWN_QUA = {
  get value() { return `${BASIC_DEF_BROWN}${OP036}`; }
};
export const BASIC_DEF_BROWN_QUI = {
  get value() { return `${BASIC_DEF_BROWN}${OP020}`; }
};
// T.1.1.2 Red
export const BASIC_DEF_RED_PRI = {
  get value() { return `${BASIC_DEF_RED}${OP100}`; }
};
export const BASIC_DEF_RED_SEC = {
  get value() { return `${BASIC_DEF_RED}${OP078}`; }
};
export const BASIC_DEF_RED_TER = {
  get value() { return `${BASIC_DEF_RED}${OP054}`; }
};
export const BASIC_DEF_RED_QUA = {
  get value() { return `${BASIC_DEF_RED}${OP036}`; }
};
export const BASIC_DEF_RED_QUI = {
  get value() { return `${BASIC_DEF_RED}${OP020}`; }
};
// T.1.1.3 Orange
export const BASIC_DEF_ORANGE_PRI = {
  get value() { return `${BASIC_DEF_ORANGE}${OP100}`; }
};
export const BASIC_DEF_ORANGE_SEC = {
  get value() { return `${BASIC_DEF_ORANGE}${OP078}`; }
};
export const BASIC_DEF_ORANGE_TER = {
  get value() { return `${BASIC_DEF_ORANGE}${OP054}`; }
};
export const BASIC_DEF_ORANGE_QUA = {
  get value() { return `${BASIC_DEF_ORANGE}${OP036}`; }
};
export const BASIC_DEF_ORANGE_QUI = {
  get value() { return `${BASIC_DEF_ORANGE}${OP020}`; }
};
// T.1.1.4 Yellow
export const BASIC_DEF_YELLOW_PRI = {
  get value() { return `${BASIC_DEF_YELLOW}${OP100}`; }
};
export const BASIC_DEF_YELLOW_SEC = {
  get value() { return `${BASIC_DEF_YELLOW}${OP078}`; }
};
export const BASIC_DEF_YELLOW_TER = {
  get value() { return `${BASIC_DEF_YELLOW}${OP054}`; }
};
export const BASIC_DEF_YELLOW_QUA = {
  get value() { return `${BASIC_DEF_YELLOW}${OP036}`; }
};
export const BASIC_DEF_YELLOW_QUI = {
  get value() { return `${BASIC_DEF_YELLOW}${OP020}`; }
};
// T.1.1.5 Green
export const BASIC_DEF_GREEN_PRI = {
  get value() { return `${BASIC_DEF_GREEN}${OP100}`; }
};
export const BASIC_DEF_GREEN_SEC = {
  get value() { return `${BASIC_DEF_GREEN}${OP078}`; }
};
export const BASIC_DEF_GREEN_TER = {
  get value() { return `${BASIC_DEF_GREEN}${OP054}`; }
};
export const BASIC_DEF_GREEN_QUA = {
  get value() { return `${BASIC_DEF_GREEN}${OP036}`; }
};
export const BASIC_DEF_GREEN_QUI = {
  get value() { return `${BASIC_DEF_GREEN}${OP020}`; }
};
// T.1.1.6 Mint
export const BASIC_DEF_MINT_PRI = {
  get value() { return `${BASIC_DEF_MINT}${OP100}`; }
};
export const BASIC_DEF_MINT_SEC = {
  get value() { return `${BASIC_DEF_MINT}${OP078}`; }
};
export const BASIC_DEF_MINT_TER = {
  get value() { return `${BASIC_DEF_MINT}${OP054}`; }
};
export const BASIC_DEF_MINT_QUA = {
  get value() { return `${BASIC_DEF_MINT}${OP036}`; }
};
export const BASIC_DEF_MINT_QUI = {
  get value() { return `${BASIC_DEF_MINT}${OP020}`; }
};
// T.1.1.7 Blue
export const BASIC_DEF_BLUE_PRI = {
  get value() { return `${BASIC_DEF_BLUE}${OP100}`; }
};
export const BASIC_DEF_BLUE_SEC = {
  get value() { return `${BASIC_DEF_BLUE}${OP078}`; }
};
export const BASIC_DEF_BLUE_TER = {
  get value() { return `${BASIC_DEF_BLUE}${OP054}`; }
};
export const BASIC_DEF_BLUE_QUA = {
  get value() { return `${BASIC_DEF_BLUE}${OP036}`; }
};
export const BASIC_DEF_BLUE_QUI = {
  get value() { return `${BASIC_DEF_BLUE}${OP020}`; }
};
// T.1.1.8 Purple
export const BASIC_DEF_PURPLE_PRI = {
  get value() { return `${BASIC_DEF_PURPLE}${OP100}`; }
};
export const BASIC_DEF_PURPLE_SEC = {
  get value() { return `${BASIC_DEF_PURPLE}${OP078}`; }
};
export const BASIC_DEF_PURPLE_TER = {
  get value() { return `${BASIC_DEF_PURPLE}${OP054}`; }
};
export const BASIC_DEF_PURPLE_QUA = {
  get value() { return `${BASIC_DEF_PURPLE}${OP036}`; }
};
export const BASIC_DEF_PURPLE_QUI = {
  get value() { return `${BASIC_DEF_PURPLE}${OP020}`; }
};
// T.1.1.9 Pink
export const BASIC_DEF_PINK_PRI = {
  get value() { return `${BASIC_DEF_PINK}${OP100}`; }
};
export const BASIC_DEF_PINK_SEC = {
  get value() { return `${BASIC_DEF_PINK}${OP078}`; }
};
export const BASIC_DEF_PINK_TER = {
  get value() { return `${BASIC_DEF_PINK}${OP054}`; }
};
export const BASIC_DEF_PINK_QUA = {
  get value() { return `${BASIC_DEF_PINK}${OP036}`; }
};
export const BASIC_DEF_PINK_QUI = {
  get value() { return `${BASIC_DEF_PINK}${OP020}`; }
};
// T.1.2 Alternative
// T.1.2.1 Red
export const BASIC_ALT_RED_PRI = {
  get value() { return `${BASIC_ALT_RED}${OP100}`; }
};
export const BASIC_ALT_RED_SEC = {
  get value() { return `${BASIC_ALT_RED}${OP078}`; }
};
export const BASIC_ALT_RED_TER = {
  get value() { return `${BASIC_ALT_RED}${OP054}`; }
};
export const BASIC_ALT_RED_QUA = {
  get value() { return `${BASIC_ALT_RED}${OP036}`; }
};
export const BASIC_ALT_RED_QUI = {
  get value() { return `${BASIC_ALT_RED}${OP020}`; }
};
// T.1.2.2 Orange
export const BASIC_ALT_ORANGE_PRI = {
  get value() { return `${BASIC_ALT_ORANGE}${OP100}`; }
};
export const BASIC_ALT_ORANGE_SEC = {
  get value() { return `${BASIC_ALT_ORANGE}${OP078}`; }
};
export const BASIC_ALT_ORANGE_TER = {
  get value() { return `${BASIC_ALT_ORANGE}${OP054}`; }
};
export const BASIC_ALT_ORANGE_QUA = {
  get value() { return `${BASIC_ALT_ORANGE}${OP036}`; }
};
export const BASIC_ALT_ORANGE_QUI = {
  get value() { return `${BASIC_ALT_ORANGE}${OP020}`; }
};
// T.1.2.3 Yellow
export const BASIC_ALT_YELLOW_PRI = {
  get value() { return `${BASIC_ALT_YELLOW}${OP100}`; }
};
export const BASIC_ALT_YELLOW_SEC = {
  get value() { return `${BASIC_ALT_YELLOW}${OP078}`; }
};
export const BASIC_ALT_YELLOW_TER = {
  get value() { return `${BASIC_ALT_YELLOW}${OP054}`; }
};
export const BASIC_ALT_YELLOW_QUA = {
  get value() { return `${BASIC_ALT_YELLOW}${OP036}`; }
};
export const BASIC_ALT_YELLOW_QUI = {
  get value() { return `${BASIC_ALT_YELLOW}${OP020}`; }
};
// T.1.2.4 Green
export const BASIC_ALT_GREEN_PRI = {
  get value() { return `${BASIC_ALT_GREEN}${OP100}`; }
};
export const BASIC_ALT_GREEN_SEC = {
  get value() { return `${BASIC_ALT_GREEN}${OP078}`; }
};
export const BASIC_ALT_GREEN_TER = {
  get value() { return `${BASIC_ALT_GREEN}${OP054}`; }
};
export const BASIC_ALT_GREEN_QUA = {
  get value() { return `${BASIC_ALT_GREEN}${OP036}`; }
};
export const BASIC_ALT_GREEN_QUI = {
  get value() { return `${BASIC_ALT_GREEN}${OP020}`; }
};
// T.1.2.5 Mint
export const BASIC_ALT_MINT_PRI = {
  get value() { return `${BASIC_ALT_MINT}${OP100}`; }
};
export const BASIC_ALT_MINT_SEC = {
  get value() { return `${BASIC_ALT_MINT}${OP078}`; }
};
export const BASIC_ALT_MINT_TER = {
  get value() { return `${BASIC_ALT_MINT}${OP054}`; }
};
export const BASIC_ALT_MINT_QUA = {
  get value() { return `${BASIC_ALT_MINT}${OP036}`; }
};
export const BASIC_ALT_MINT_QUI = {
  get value() { return `${BASIC_ALT_MINT}${OP020}`; }
};
// T.1.2.6 Blue
export const BASIC_ALT_BLUE_PRI = {
  get value() { return `${BASIC_ALT_BLUE}${OP100}`; }
};
export const BASIC_ALT_BLUE_SEC = {
  get value() { return `${BASIC_ALT_BLUE}${OP078}`; }
};
export const BASIC_ALT_BLUE_TER = {
  get value() { return `${BASIC_ALT_BLUE}${OP054}`; }
};
export const BASIC_ALT_BLUE_QUA = {
  get value() { return `${BASIC_ALT_BLUE}${OP036}`; }
};
export const BASIC_ALT_BLUE_QUI = {
  get value() { return `${BASIC_ALT_BLUE}${OP020}`; }
};
// T.1.2.7 Purple
export const BASIC_ALT_PURPLE_PRI = {
  get value() { return `${BASIC_ALT_PURPLE}${OP100}`; }
};
export const BASIC_ALT_PURPLE_SEC = {
  get value() { return `${BASIC_ALT_PURPLE}${OP078}`; }
};
export const BASIC_ALT_PURPLE_TER = {
  get value() { return `${BASIC_ALT_PURPLE}${OP054}`; }
};
export const BASIC_ALT_PURPLE_QUA = {
  get value() { return `${BASIC_ALT_PURPLE}${OP036}`; }
};
export const BASIC_ALT_PURPLE_QUI = {
  get value() { return `${BASIC_ALT_PURPLE}${OP020}`; }
};
// T.1.2.8 Pink
export const BASIC_ALT_PINK_PRI = {
  get value() { return `${BASIC_ALT_PINK}${OP100}`; }
};
export const BASIC_ALT_PINK_SEC = {
  get value() { return `${BASIC_ALT_PINK}${OP078}`; }
};
export const BASIC_ALT_PINK_TER = {
  get value() { return `${BASIC_ALT_PINK}${OP054}`; }
};
export const BASIC_ALT_PINK_QUA = {
  get value() { return `${BASIC_ALT_PINK}${OP036}`; }
};
export const BASIC_ALT_PINK_QUI = {
  get value() { return `${BASIC_ALT_PINK}${OP020}`; }
};
// T.1.3 LC
// T.1.3.1 Red
export const BASIC_LC_RED_PRI = {
  get value() { return `${BASIC_LC_RED}${OP100}`; }
};
export const BASIC_LC_RED_SEC = {
  get value() { return `${BASIC_LC_RED}${OP078}`; }
};
export const BASIC_LC_RED_TER = {
  get value() { return `${BASIC_LC_RED}${OP054}`; }
};
export const BASIC_LC_RED_QUA = {
  get value() { return `${BASIC_LC_RED}${OP036}`; }
};
export const BASIC_LC_RED_QUI = {
  get value() { return `${BASIC_LC_RED}${OP020}`; }
};
// T.1.3.2 Orange
export const BASIC_LC_ORANGE_PRI = {
  get value() { return `${BASIC_LC_ORANGE}${OP100}`; }
};
export const BASIC_LC_ORANGE_SEC = {
  get value() { return `${BASIC_LC_ORANGE}${OP078}`; }
};
export const BASIC_LC_ORANGE_TER = {
  get value() { return `${BASIC_LC_ORANGE}${OP054}`; }
};
export const BASIC_LC_ORANGE_QUA = {
  get value() { return `${BASIC_LC_ORANGE}${OP036}`; }
};
export const BASIC_LC_ORANGE_QUI = {
  get value() { return `${BASIC_LC_ORANGE}${OP020}`; }
};
// T.1.3.3 Yellow
export const BASIC_LC_YELLOW_PRI = {
  get value() { return `${BASIC_LC_YELLOW}${OP100}`; }
};
export const BASIC_LC_YELLOW_SEC = {
  get value() { return `${BASIC_LC_YELLOW}${OP078}`; }
};
export const BASIC_LC_YELLOW_TER = {
  get value() { return `${BASIC_LC_YELLOW}${OP054}`; }
};
export const BASIC_LC_YELLOW_QUA = {
  get value() { return `${BASIC_LC_YELLOW}${OP036}`; }
};
export const BASIC_LC_YELLOW_QUI = {
  get value() { return `${BASIC_LC_YELLOW}${OP020}`; }
};
// T.1.3.4 Green
export const BASIC_LC_GREEN_PRI = {
  get value() { return `${BASIC_LC_GREEN}${OP100}`; }
};
export const BASIC_LC_GREEN_SEC = {
  get value() { return `${BASIC_LC_GREEN}${OP078}`; }
};
export const BASIC_LC_GREEN_TER = {
  get value() { return `${BASIC_LC_GREEN}${OP054}`; }
};
export const BASIC_LC_GREEN_QUA = {
  get value() { return `${BASIC_LC_GREEN}${OP036}`; }
};
export const BASIC_LC_GREEN_QUI = {
  get value() { return `${BASIC_LC_GREEN}${OP020}`; }
};
// T.1.3.5 Mint
export const BASIC_LC_MINT_PRI = {
  get value() { return `${BASIC_LC_MINT}${OP100}`; }
};
export const BASIC_LC_MINT_SEC = {
  get value() { return `${BASIC_LC_MINT}${OP078}`; }
};
export const BASIC_LC_MINT_TER = {
  get value() { return `${BASIC_LC_MINT}${OP054}`; }
};
export const BASIC_LC_MINT_QUA = {
  get value() { return `${BASIC_LC_MINT}${OP036}`; }
};
export const BASIC_LC_MINT_QUI = {
  get value() { return `${BASIC_LC_MINT}${OP020}`; }
};
// T.1.3.6 Blue
export const BASIC_LC_BLUE_PRI = {
  get value() { return `${BASIC_LC_BLUE}${OP100}`; }
};
export const BASIC_LC_BLUE_SEC = {
  get value() { return `${BASIC_LC_BLUE}${OP078}`; }
};
export const BASIC_LC_BLUE_TER = {
  get value() { return `${BASIC_LC_BLUE}${OP054}`; }
};
export const BASIC_LC_BLUE_QUA = {
  get value() { return `${BASIC_LC_BLUE}${OP036}`; }
};
export const BASIC_LC_BLUE_QUI = {
  get value() { return `${BASIC_LC_BLUE}${OP020}`; }
};
// T.1.3.7 Purple
export const BASIC_LC_PURPLE_PRI = {
  get value() { return `${BASIC_LC_PURPLE}${OP100}`; }
};
export const BASIC_LC_PURPLE_SEC = {
  get value() { return `${BASIC_LC_PURPLE}${OP078}`; }
};
export const BASIC_LC_PURPLE_TER = {
  get value() { return `${BASIC_LC_PURPLE}${OP054}`; }
};
export const BASIC_LC_PURPLE_QUA = {
  get value() { return `${BASIC_LC_PURPLE}${OP036}`; }
};
export const BASIC_LC_PURPLE_QUI = {
  get value() { return `${BASIC_LC_PURPLE}${OP020}`; }
};
// T.1.3.8 Pink
export const BASIC_LC_PINK_PRI = {
  get value() { return `${BASIC_LC_PINK}${OP100}`; }
};
export const BASIC_LC_PINK_SEC = {
  get value() { return `${BASIC_LC_PINK}${OP078}`; }
};
export const BASIC_LC_PINK_TER = {
  get value() { return `${BASIC_LC_PINK}${OP054}`; }
};
export const BASIC_LC_PINK_QUA = {
  get value() { return `${BASIC_LC_PINK}${OP036}`; }
};
export const BASIC_LC_PINK_QUI = {
  get value() { return `${BASIC_LC_PINK}${OP020}`; }
};
// T.1.4 Neutral
export const BASIC_NEU_PRI = {
  get value() { return `${HC}${OP100}`; }
};
export const BASIC_NEU_SEC = {
  get value() { return `${HC}${OP078}`; }
};
export const BASIC_NEU_TER = {
  get value() { return `${HC}${OP054}`; }
};
export const BASIC_NEU_QUA = {
  get value() { return `${HC}${OP036}`; }
};
export const BASIC_NEU_QUI = {
  get value() { return `${HC}${OP020}`; }
};
export const BASIC_NEU_SEN = {
  get value() { return `${HC}${OP008}`; }
};
export const BASIC_NEU_SEP = {
  get value() { return `${HC}${OP006}`; }
};
// T.2 Fill Color
// T.2.1 Text
export const FILL_TEXT_ACT = {
  get value() { return `${HC}${OP100}`; }
};
export const FILL_TEXT_PRI = {
  get value() { return `${HC}${OP090}`; }
};
export const FILL_TEXT_SEC = {
  get value() { return `${HC}${OP060}`; } 
};
export const FILL_TEXT_TER = {
  get value() { return `${HC}${OP045}`; }
};
export const FILL_TEXT_DIS = {
  get value() { return `${HC}${OP036}`; }
};
// T.2.2 Accent Text
export const FILL_ACCENT_TEXT_PRI = {
  get value() { return `${ACCENT}${OP100}`; }
};
// T.2.3 Text On Color
export const FILL_TEXT_ON_COLOR_PRI = {
  get value() { return `${LC}${OP100}`; }
};
// T.2.4 Control
export const FILL_CONTROL_DBL = {
  get value() { return `${LC}${OP096}`; }
};
export const FILL_CONTROL_PRI = {
  get value() { return `${LC}${OP070}`; }
};
export const FILL_CONTROL_SEC = {
  get value() { return `#F9F9F9${OP050}`; }
};
export const FILL_CONTROL_TER = {
  get value() { return `#F9F9F9${OP030}`; }
};
// T.2.5 Control Variation
// T.2.5.1 Alternative
export const FILL_CONTROL_ALT = {
  get value() { return `${HC}${OP003}`; }
};
// T.2.5.2 Custom
export const FILL_CONTROL_CUSTOM = {
  get value() { return `#3A3A3A${OP100}`; }
};
// T.2.5 Accent
export const FILL_ACCENT_PRI = {
  get value() { return `${ACCENT}${OP100}`; }
};
export const FILL_ACCENT_SEC = {
  get value() { return `${ACCENT}${OP090}`; }
};
// T.2.6 System
// T.2.6.1 Foreground
export const FILL_SYSTEM_FG_CRITICAL = {
  get value() { return `${BASIC_DEF_RED_PRI}${OP100}`; }
};
export const FILL_SYSTEM_FG_CAUTION = {
  get value() { return `${BASIC_DEF_ORANGE_PRI}${OP100}`; }
};
export const FILL_SYSTEM_FG_ATTENTION = {
  get value() { return `${BASIC_DEF_YELLOW_PRI}${OP100}`; }
};
export const FILL_SYSTEM_FG_SUCCESS = {
  get value() { return `${BASIC_DEF_GREEN_PRI}${OP100}`; }
};
export const FILL_SYSTEM_FG_INFO = {
  get value() { return `${BASIC_DEF_BLUE_PRI}${OP100}`; }
};
// T.2.6.2 Background
export const FILL_SYSTEM_BG_CRITICAL = {
  get value() { return `${BASIC_LC_RED_PRI}${OP100}`; }
};
export const FILL_SYSTEM_BG_CAUTION = {
  get value() { return `${BASIC_LC_ORANGE_PRI}${OP100}`; }
};
export const FILL_SYSTEM_BG_ATTENTION = {
  get value() { return `${BASIC_LC_YELLOW_PRI}${OP100}`; }
};
export const FILL_SYSTEM_BG_SUCCESS = {
  get value() { return `${BASIC_LC_GREEN_PRI}${OP100}`; }
};
export const FILL_SYSTEM_BG_INFO = {
  get value() { return `${BASIC_LC_BLUE_PRI}${OP100}`; }
};
// T.3 Stroke Color
// T.3.1 Control
export const STROKE_CONTROL = {
  get value() { return `${HC}${OP010}`; }
};
// T.3.2 Control Strong
export const STROKE_CONTROL_STRONG = {
  get value() { return `${HC}${OP060}`; }
};
// T.3.3 Divider
export const STROKE_DIVIDER = {
  get value() { return `${HC}${OP008}`; }
};
// T.3.4 Surface
export const STROKE_SURFACE_LAYER = {
  get value() { return `#757575${OP040}`; }
};
export const STROKE_SURFACE_FLYOUT = {
  get value() { return `${HC}${OP006}`; }
};
// T.3.5 Card
export const STROKE_CARD = {
  get value() { return `${HC}${OP006}`; }
};
// T.3.6 Focus
export const STROKE_FOCUS = {
  get value() { return `#757575${OP040}`; }
};
// T.4 Background
// T.4.1 Solid
export const BG_SOLID_BASE = {
  get value() { return `#F3F3F3${OP100}`; }
};
export const BG_SOLID_SURFACE = {
  get value() { return `#F9F9F9${OP100}`; }
};
export const BG_SOLID_CANVAS = {
  get value() { return `#FCFCFC${OP100}`; }
};
export const BG_SOLID_ON_CANVAS = {
  get value() { return `#FEFEFE${OP100}`; }
};
export const BG_SOLID_FLYOUT = {
  get value() { return `#FFFFFF${OP100}`; }
};
// T.4.2 Layer
export const BG_LAYER = {
  get value() { return `${LC}${OP050}`; }
};
// T.4.2 Card
export const BG_CARD = {
  get value() { return `${LC}${OP070}`; }
};
// T.4.3 Smoke
export const BG_SMOKE = {
  get value() { return `${LC}${OP030}`; }
};
// T.5 Effects
// T.5.1 Elevation
export const SHADOW = {
  get value() { return `${HC}${OP014}`; }
};