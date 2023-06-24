// 1 OPACITY CONSTANT
const OP100 = "FF";
const OP090 = "E6";
const OP078 = "C7";
const OP054 = "8A";
const OP040 = "66";
const OP036 = "5C";
const OP030 = "4D";
const OP026 = "42";
const OP020 = "33";
const OP016 = "29";
const OP010 = "1A";
const OP008 = "14";
const OP006 = "0F";
const OP003 = "09";
// 2 ACCENT COLOR
let ACCENT = "#FFFFFF";
export function updateAccent(hex: string) {
  ACCENT = `#${hex}`;
}
// 3 FUNDAMENTAL COLOR
// 3.1 Common
export const TRANSPARENT = {
  get value() {
    return "#00000000";
  },
};
export const OPAQUE = {
  get value() {
    return "#000000FF";
  },
};
// 3.2 Theme Specific
const T_LC = "#000000";
const T_HC = "#FFFFFF";
const T_BASIC_DEF_BROWN = "#CB8569";
const T_BASIC_DEF_RED = "#ef6363";
const T_BASIC_DEF_ORANGE = "#D28342";
const T_BASIC_DEF_YELLOW = "#bfaf40";
const T_BASIC_DEF_GREEN = "#45AA41";
const T_BASIC_DEF_MINT = "#46A598";
const T_BASIC_DEF_BLUE = "#4B9ECD";
const T_BASIC_DEF_PURPLE = "#9B87EA";
const T_BASIC_DEF_PINK = "#ED63BA";
const T_BASIC_ALT_RED = "#d19797";
const T_BASIC_ALT_ORANGE = "#c59e7f";
const T_BASIC_ALT_YELLOW = "#ada77f";
const T_BASIC_ALT_GREEN = "#80b27f";
const T_BASIC_ALT_MINT = "#83aea8";
const T_BASIC_ALT_BLUE = "#87abc0";
const T_BASIC_ALT_PURPLE = "#a9a0cb";
const T_BASIC_ALT_PINK = "#cd95b8";
const T_BASIC_LC_RED = "#3a2727";
const T_BASIC_LC_ORANGE = "#322b24";
const T_BASIC_LC_YELLOW = "#343327";
const T_BASIC_LC_GREEN = "#273027";
const T_BASIC_LC_MINT = "#27302f";
const T_BASIC_LC_BLUE = "#252d31";
const T_BASIC_LC_PURPLE = "#2e2a3c";
const T_BASIC_LC_PINK = "#3a2733";
// 3.3 Adaptive Specific Constants
export const LVL1_DEF = "181818";
export const LVL1_GENTLE = 9;
export const LVL1_AGGRESSIVE = 17;
export const LVL2_DEF = "1C1C1C";
export const LVL2_GENTLE = 7;
export const LVL2_AGGRESSIVE = 15;
export const LVL3_DEF = "1F1F1F";
export const LVL3_GENTLE = 6;
export const LVL3_AGGRESSIVE = 13;
export const LVL4_DEF = "262626";
export const LVL4_GENTLE = 5;
export const LVL4_AGGRESSIVE = 11;
export const LVL5_DEF = "373737";
export const LVL5_GENTLE = 3;
export const LVL5_AGGRESSIVE = 6;
// 3.4 Adaptive Specific Variables
let T_LVL1 = "#111111";
let T_LVL2 = "#222222";
let T_LVL3 = "#333333";
let T_LVL4 = "#444444";
let T_LVL5 = "#555555";
// 3.5 Adaptive Specific Functions
export function resetLVL1() {
  T_LVL1 = `#${LVL1_DEF}`;
}
export function updateLVL1(hex: string) {
  T_LVL1 = `#${hex}`;
}
export function resetLVL2() {
  T_LVL2 = `#${LVL2_DEF}`;
}
export function updateLVL2(hex: string) {
  T_LVL2 = `#${hex}`;
}
export function resetLVL3() {
  T_LVL3 = `#${LVL3_DEF}`;
}
export function updateLVL3(hex: string) {
  T_LVL3 = `#${hex}`;
}
export function resetLVL4() {
  T_LVL4 = `#${LVL4_DEF}`;
}
export function updateLVL4(hex: string) {
  T_LVL4 = `#${hex}`;
}
export function resetLVL5() {
  T_LVL5 = `#${LVL5_DEF}`;
}
export function updateLVL5(hex: string) {
  T_LVL5 = `#${hex}`;
}
// T THEME
// T.1 Basic Color
// T.1.1 Primary
export const BASIC_DEF_BROWN = {
  get pri() {
    return `${T_BASIC_DEF_BROWN}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_BROWN}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_DEF_BROWN}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_DEF_BROWN}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_DEF_BROWN}${OP020}`;
  },
};
export const BASIC_DEF_RED = {
  get pri() {
    return `${T_BASIC_DEF_RED}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_RED}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_DEF_RED}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_DEF_RED}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_DEF_RED}${OP020}`;
  },
};
export const BASIC_DEF_ORANGE = {
  get pri() {
    return `${T_BASIC_DEF_ORANGE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_ORANGE}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_DEF_ORANGE}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_DEF_ORANGE}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_DEF_ORANGE}${OP020}`;
  },
};
export const BASIC_DEF_YELLOW = {
  get pri() {
    return `${T_BASIC_DEF_YELLOW}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_YELLOW}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_DEF_YELLOW}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_DEF_YELLOW}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_DEF_YELLOW}${OP020}`;
  },
};
export const BASIC_DEF_GREEN = {
  get pri() {
    return `${T_BASIC_DEF_GREEN}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_GREEN}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_DEF_GREEN}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_DEF_GREEN}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_DEF_GREEN}${OP020}`;
  },
};
export const BASIC_DEF_MINT = {
  get pri() {
    return `${T_BASIC_DEF_MINT}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_MINT}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_DEF_MINT}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_DEF_MINT}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_DEF_MINT}${OP020}`;
  },
};
export const BASIC_DEF_BLUE = {
  get pri() {
    return `${T_BASIC_DEF_BLUE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_BLUE}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_DEF_BLUE}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_DEF_BLUE}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_DEF_BLUE}${OP020}`;
  },
};
export const BASIC_DEF_PURPLE = {
  get pri() {
    return `${T_BASIC_DEF_PURPLE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_PURPLE}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_DEF_PURPLE}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_DEF_PURPLE}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_DEF_PURPLE}${OP020}`;
  },
};
export const BASIC_DEF_PINK = {
  get pri() {
    return `${T_BASIC_DEF_PINK}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_PINK}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_DEF_PINK}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_DEF_PINK}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_DEF_PINK}${OP020}`;
  },
};
// T.1.2 Alternative
export const BASIC_ALT_RED = {
  get pri() {
    return `${T_BASIC_ALT_RED}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_RED}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_ALT_RED}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_ALT_RED}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_ALT_RED}${OP020}`;
  },
};
export const BASIC_ALT_ORANGE = {
  get pri() {
    return `${T_BASIC_ALT_ORANGE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_ORANGE}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_ALT_ORANGE}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_ALT_ORANGE}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_ALT_ORANGE}${OP020}`;
  },
};
export const BASIC_ALT_YELLOW = {
  get pri() {
    return `${T_BASIC_ALT_YELLOW}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_YELLOW}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_ALT_YELLOW}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_ALT_YELLOW}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_ALT_YELLOW}${OP020}`;
  },
};
export const BASIC_ALT_GREEN = {
  get pri() {
    return `${T_BASIC_ALT_GREEN}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_GREEN}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_ALT_GREEN}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_ALT_GREEN}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_ALT_GREEN}${OP020}`;
  },
};
export const BASIC_ALT_MINT = {
  get pri() {
    return `${T_BASIC_ALT_MINT}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_MINT}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_ALT_MINT}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_ALT_MINT}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_ALT_MINT}${OP020}`;
  },
};
export const BASIC_ALT_BLUE = {
  get pri() {
    return `${T_BASIC_ALT_BLUE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_BLUE}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_ALT_BLUE}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_ALT_BLUE}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_ALT_BLUE}${OP020}`;
  },
};
export const BASIC_ALT_PURPLE = {
  get pri() {
    return `${T_BASIC_ALT_PURPLE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_PURPLE}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_ALT_PURPLE}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_ALT_PURPLE}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_ALT_PURPLE}${OP020}`;
  },
};
export const BASIC_ALT_PINK = {
  get pri() {
    return `${T_BASIC_ALT_PINK}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_PINK}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_ALT_PINK}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_ALT_PINK}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_ALT_PINK}${OP020}`;
  },
};
// T.1.3 LC
export const BASIC_LC_RED = {
  get pri() {
    return `${T_BASIC_LC_RED}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_RED}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_LC_RED}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_LC_RED}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_LC_RED}${OP020}`;
  },
};
export const BASIC_LC_ORANGE = {
  get pri() {
    return `${T_BASIC_LC_ORANGE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_ORANGE}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_LC_ORANGE}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_LC_ORANGE}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_LC_ORANGE}${OP020}`;
  },
};
export const BASIC_LC_YELLOW = {
  get pri() {
    return `${T_BASIC_LC_YELLOW}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_YELLOW}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_LC_YELLOW}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_LC_YELLOW}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_LC_YELLOW}${OP020}`;
  },
};
export const BASIC_LC_GREEN = {
  get pri() {
    return `${T_BASIC_LC_GREEN}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_GREEN}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_LC_GREEN}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_LC_GREEN}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_LC_GREEN}${OP020}`;
  },
};
export const BASIC_LC_MINT = {
  get pri() {
    return `${T_BASIC_LC_MINT}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_MINT}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_LC_MINT}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_LC_MINT}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_LC_MINT}${OP020}`;
  },
};
export const BASIC_LC_BLUE = {
  get pri() {
    return `${T_BASIC_LC_BLUE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_BLUE}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_LC_BLUE}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_LC_BLUE}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_LC_BLUE}${OP020}`;
  },
};
export const BASIC_LC_PURPLE = {
  get pri() {
    return `${T_BASIC_LC_PURPLE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_PURPLE}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_LC_PURPLE}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_LC_PURPLE}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_LC_PURPLE}${OP020}`;
  },
};
export const BASIC_LC_PINK = {
  get pri() {
    return `${T_BASIC_LC_PINK}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_PINK}${OP078}`;
  },
  get ter() {
    return `${T_BASIC_LC_PINK}${OP054}`;
  },
  get qua() {
    return `${T_BASIC_LC_PINK}${OP036}`;
  },
  get qui() {
    return `${T_BASIC_LC_PINK}${OP020}`;
  },
};
// T.1.4 Neutral
export const BASIC_NEUTRAL = {
  get pri() {
    return `${T_HC}${OP100}`;
  },
  get sec() {
    return `${T_HC}${OP078}`;
  },
  get ter() {
    return `${T_HC}${OP054}`;
  },
  get qua() {
    return `${T_HC}${OP036}`;
  },
  get qui() {
    return `${T_HC}${OP020}`;
  },
  get sen() {
    return `${T_HC}${OP008}`;
  },
  get sep() {
    return `${T_HC}${OP006}`;
  },
};
// T.2 Fill Color
export const FILL_TEXT = {
  get active() {
    return `${T_HC}${OP100}`;
  },
  get pri() {
    return `${T_HC}${OP078}`;
  },
  get sec() {
    return `${T_HC}${OP054}`;
  },
  get disabled() {
    return `${T_HC}${OP036}`;
  },
  get ghost() {
    return `${T_HC}${OP020}`;
  },
};
export const FILL_ACCENT_TEXT = {
  get pri() {
    return `${ACCENT}${OP100}`;
  },
};
export const FILL_TEXT_ON_COLOR = {
  get pri() {
    return `${T_LC}${OP100}`;
  },
};
export const FILL_CONTROL = {
  get doubleHover() {
    return `${T_HC}${OP016}`;
  },
  get hover() {
    return `${T_HC}${OP008}`;
  },
  get rest() {
    return `${T_HC}${OP006}`;
  },
  get pressed() {
    return `${T_HC}${OP003}`;
  },
  // --------------------------------------------------
  get prominent() {
    return `${T_LVL5}${OP100}`;
  },
  get subtle() {
    return `${T_HC}${OP003}`;
  },
};
export const FILL_ACCENT = {
  get pri() {
    return `${ACCENT}${OP100}`;
  },
  get sec() {
    return `${ACCENT}${OP090}`;
  },
};
export const FILL_SYSTEM_FG = {
  get red() {
    return `${T_BASIC_ALT_RED}${OP100}`;
  },
  get orange() {
    return `${T_BASIC_ALT_ORANGE}${OP100}`;
  },
  get yellow() {
    return `${T_BASIC_ALT_YELLOW}${OP100}`;
  },
  get green() {
    return `${T_BASIC_ALT_GREEN}${OP100}`;
  },
  get mint() {
    return `${T_BASIC_ALT_MINT}${OP100}`;
  },
  get blue() {
    return `${T_BASIC_ALT_BLUE}${OP100}`;
  },
};
export const FILL_SYSTEM_BG = {
  get red() {
    return `${T_BASIC_LC_RED}${OP100}`;
  },
  get orange() {
    return `${T_BASIC_LC_ORANGE}${OP100}`;
  },
  get yellow() {
    return `${T_BASIC_LC_YELLOW}${OP100}`;
  },
  get green() {
    return `${T_BASIC_LC_GREEN}${OP100}`;
  },
  get mint() {
    return `${T_BASIC_LC_MINT}${OP100}`;
  },
  get blue() {
    return `${T_BASIC_LC_BLUE}${OP100}`;
  },
};
export const FILL_TAB = {
  get activeFocused() {
    return BG_SOLID.onCanvas;
  },
  get inactiveFocused() {
    return BG_SOLID.surface;
  },
  get activeUnfocused() {
    return BG_SOLID.canvas;
  },
  get inactiveUnfocused() {
    return BG_SOLID.base;
  },
};
export const FILL_TERMINAL = {
  get fg() {
    return `#CCCCCC${OP100}`;
  },
  // --------------------------------------------------
  get hc() {
    return `#CCCCCC${OP100}`;
  },
  get hq() {
    return `#BBBBBB${OP100}`;
  },
  get lq() {
    return `#444444${OP100}`;
  },
  get lc() {
    return `#333333${OP100}`;
  },
};
// T.3 Stroke Color
export const STROKE_CONTROL = {
  get default() {
    return `${T_HC}${OP008}`;
  },
  // --------------------------------------------------
  get alt() {
    return `${T_LC}${OP010}`;
  },
};
export const STROKE_DIVIDER = {
  get default() {
    return `${T_HC}${OP008}`;
  },
};
export const STROKE_SURFACE = {
  get layer() {
    return `#757575${OP040}`;
  },
  get flyout() {
    return `${T_LC}${OP020}`;
  },
};
export const STROKE_FOCUS = {
  get default() {
    return `#757575${OP040}`;
  },
};
// T.4 Background
export const BG_SOLID = {
  get base() {
    return `${T_LVL1}${OP100}`;
  },
  get surface() {
    return `${T_LVL2}${OP100}`;
  },
  get canvas() {
    return `${T_LVL3}${OP100}`;
  },
  get onCanvas() {
    return `${T_LVL4}${OP100}`;
  },
  get flyout() {
    return `${T_LVL4}${OP100}`;
  },
};
export const BG_SMOKE = {
  get default() {
    return `${T_LC}${OP030}`;
  },
};
// T.5 Effects
export const SHADOW = {
  get default() {
    return `${T_LC}${OP026}`;
  },
};
