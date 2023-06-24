// 1 OPACITY CONSTANT
const OP100 = "FF";
const OP090 = "E6";
const OP072 = "B8";
const OP050 = "80";
const OP040 = "66";
const OP032 = "52";
const OP020 = "33";
const OP014 = "24";
const OP012 = "1F";
const OP010 = "1A";
const OP007 = "12";
const OP004 = "0A";
const OP002 = "07";
// 2 ACCENT COLOR
let ACCENT = "#000000";
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
const T_LC = "#FFFFFF";
const T_HC = "#000000";
const T_BASIC_DEF_BROWN = "#784f3f";
const T_BASIC_DEF_RED = "#b70004";
const T_BASIC_DEF_ORANGE = "#9f5500";
const T_BASIC_DEF_YELLOW = "#7d7000";
const T_BASIC_DEF_GREEN = "#006904";
const T_BASIC_DEF_MINT = "#006560";
const T_BASIC_DEF_BLUE = "#0052c6";
const T_BASIC_DEF_PURPLE = "#7700ee";
const T_BASIC_DEF_PINK = "#ac0074";
const T_BASIC_ALT_RED = "#c35354";
const T_BASIC_ALT_ORANGE = "#8d7252";
const T_BASIC_ALT_YELLOW = "#7d7852";
const T_BASIC_ALT_GREEN = "#528256";
const T_BASIC_ALT_MINT = "#567e7c";
const T_BASIC_ALT_BLUE = "#5b79a2";
const T_BASIC_ALT_PURPLE = "#8e64b9";
const T_BASIC_ALT_PINK = "#af5a92";
const T_BASIC_LC_RED = "#e0d1d1";
const T_BASIC_LC_ORANGE = "#e1d2c1";
const T_BASIC_LC_YELLOW = "#d9d6b7";
const T_BASIC_LC_GREEN = "#b7deba";
const T_BASIC_LC_MINT = "#bbdbd9";
const T_BASIC_LC_BLUE = "#ced5df";
const T_BASIC_LC_PURPLE = "#d9d2df";
const T_BASIC_LC_PINK = "#e0d0da";
// 3.3 Adaptive Specific Constants
export const LVL1_DEF = "ECECEC";
export const LVL1_GENTLE = 16;
export const LVL1_AGGRESSIVE = 40;
export const LVL2_DEF = "F2F2F2";
export const LVL2_GENTLE = 24;
export const LVL2_AGGRESSIVE = 54;
export const LVL3_DEF = "F8F8F8";
export const LVL3_GENTLE = 36;
export const LVL3_AGGRESSIVE = 85;
export const LVL4_DEF = "FBFBFB";
export const LVL4_GENTLE = 60;
export const LVL4_AGGRESSIVE = 100;
export const LVL5_DEF = "CACACA";
export const LVL5_GENTLE = 8;
export const LVL5_AGGRESSIVE = 16;
// 3.4 Adaptive Specific Variables
let T_LVL1 = "#CCCCCC";
let T_LVL2 = "#DDDDDD";
let T_LVL3 = "#EEEEEE";
let T_LVL4 = "#FFFFFF";
let T_LVL5 = "#BBBBBB";
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
    return `${T_BASIC_DEF_BROWN}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_DEF_BROWN}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_DEF_BROWN}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_DEF_BROWN}${OP012}`;
  },
};
export const BASIC_DEF_RED = {
  get pri() {
    return `${T_BASIC_DEF_RED}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_RED}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_DEF_RED}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_DEF_RED}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_DEF_RED}${OP012}`;
  },
};
export const BASIC_DEF_ORANGE = {
  get pri() {
    return `${T_BASIC_DEF_ORANGE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_ORANGE}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_DEF_ORANGE}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_DEF_ORANGE}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_DEF_ORANGE}${OP012}`;
  },
};
export const BASIC_DEF_YELLOW = {
  get pri() {
    return `${T_BASIC_DEF_YELLOW}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_YELLOW}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_DEF_YELLOW}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_DEF_YELLOW}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_DEF_YELLOW}${OP012}`;
  },
};
export const BASIC_DEF_GREEN = {
  get pri() {
    return `${T_BASIC_DEF_GREEN}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_GREEN}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_DEF_GREEN}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_DEF_GREEN}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_DEF_GREEN}${OP012}`;
  },
};
export const BASIC_DEF_MINT = {
  get pri() {
    return `${T_BASIC_DEF_MINT}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_MINT}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_DEF_MINT}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_DEF_MINT}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_DEF_MINT}${OP012}`;
  },
};
export const BASIC_DEF_BLUE = {
  get pri() {
    return `${T_BASIC_DEF_BLUE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_BLUE}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_DEF_BLUE}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_DEF_BLUE}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_DEF_BLUE}${OP012}`;
  },
};
export const BASIC_DEF_PURPLE = {
  get pri() {
    return `${T_BASIC_DEF_PURPLE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_PURPLE}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_DEF_PURPLE}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_DEF_PURPLE}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_DEF_PURPLE}${OP012}`;
  },
};
export const BASIC_DEF_PINK = {
  get pri() {
    return `${T_BASIC_DEF_PINK}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_DEF_PINK}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_DEF_PINK}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_DEF_PINK}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_DEF_PINK}${OP012}`;
  },
};
// T.1.2 Alternative
export const BASIC_ALT_RED = {
  get pri() {
    return `${T_BASIC_ALT_RED}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_RED}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_ALT_RED}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_ALT_RED}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_ALT_RED}${OP012}`;
  },
};
export const BASIC_ALT_ORANGE = {
  get pri() {
    return `${T_BASIC_ALT_ORANGE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_ORANGE}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_ALT_ORANGE}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_ALT_ORANGE}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_ALT_ORANGE}${OP012}`;
  },
};
export const BASIC_ALT_YELLOW = {
  get pri() {
    return `${T_BASIC_ALT_YELLOW}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_YELLOW}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_ALT_YELLOW}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_ALT_YELLOW}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_ALT_YELLOW}${OP012}`;
  },
};
export const BASIC_ALT_GREEN = {
  get pri() {
    return `${T_BASIC_ALT_GREEN}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_GREEN}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_ALT_GREEN}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_ALT_GREEN}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_ALT_GREEN}${OP012}`;
  },
};
export const BASIC_ALT_MINT = {
  get pri() {
    return `${T_BASIC_ALT_MINT}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_MINT}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_ALT_MINT}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_ALT_MINT}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_ALT_MINT}${OP012}`;
  },
};
export const BASIC_ALT_BLUE = {
  get pri() {
    return `${T_BASIC_ALT_BLUE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_BLUE}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_ALT_BLUE}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_ALT_BLUE}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_ALT_BLUE}${OP012}`;
  },
};
export const BASIC_ALT_PURPLE = {
  get pri() {
    return `${T_BASIC_ALT_PURPLE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_PURPLE}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_ALT_PURPLE}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_ALT_PURPLE}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_ALT_PURPLE}${OP012}`;
  },
};
export const BASIC_ALT_PINK = {
  get pri() {
    return `${T_BASIC_ALT_PINK}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_ALT_PINK}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_ALT_PINK}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_ALT_PINK}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_ALT_PINK}${OP012}`;
  },
};
// T.1.3 LC
export const BASIC_LC_RED = {
  get pri() {
    return `${T_BASIC_LC_RED}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_RED}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_LC_RED}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_LC_RED}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_LC_RED}${OP012}`;
  },
};
export const BASIC_LC_ORANGE = {
  get pri() {
    return `${T_BASIC_LC_ORANGE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_ORANGE}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_LC_ORANGE}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_LC_ORANGE}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_LC_ORANGE}${OP012}`;
  },
};
export const BASIC_LC_YELLOW = {
  get pri() {
    return `${T_BASIC_LC_YELLOW}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_YELLOW}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_LC_YELLOW}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_LC_YELLOW}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_LC_YELLOW}${OP012}`;
  },
};
export const BASIC_LC_GREEN = {
  get pri() {
    return `${T_BASIC_LC_GREEN}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_GREEN}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_LC_GREEN}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_LC_GREEN}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_LC_GREEN}${OP012}`;
  },
};
export const BASIC_LC_MINT = {
  get pri() {
    return `${T_BASIC_LC_MINT}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_MINT}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_LC_MINT}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_LC_MINT}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_LC_MINT}${OP012}`;
  },
};
export const BASIC_LC_BLUE = {
  get pri() {
    return `${T_BASIC_LC_BLUE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_BLUE}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_LC_BLUE}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_LC_BLUE}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_LC_BLUE}${OP012}`;
  },
};
export const BASIC_LC_PURPLE = {
  get pri() {
    return `${T_BASIC_LC_PURPLE}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_PURPLE}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_LC_PURPLE}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_LC_PURPLE}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_LC_PURPLE}${OP012}`;
  },
};
export const BASIC_LC_PINK = {
  get pri() {
    return `${T_BASIC_LC_PINK}${OP100}`;
  },
  get sec() {
    return `${T_BASIC_LC_PINK}${OP072}`;
  },
  get ter() {
    return `${T_BASIC_LC_PINK}${OP050}`;
  },
  get qua() {
    return `${T_BASIC_LC_PINK}${OP020}`;
  },
  get qui() {
    return `${T_BASIC_LC_PINK}${OP012}`;
  },
};
// T.1.4 Neutral
export const BASIC_NEUTRAL = {
  get pri() {
    return `${T_HC}${OP100}`;
  },
  get sec() {
    return `${T_HC}${OP072}`;
  },
  get ter() {
    return `${T_HC}${OP050}`;
  },
  get qua() {
    return `${T_HC}${OP020}`;
  },
  get qui() {
    return `${T_HC}${OP012}`;
  },
  get sen() {
    return `${T_HC}${OP007}`;
  },
  get sep() {
    return `${T_HC}${OP004}`;
  },
};
// T.2 Fill Color
export const FILL_TEXT = {
  get active() {
    return `${T_HC}${OP100}`;
  },
  get pri() {
    return `${T_HC}${OP090}`;
  },
  get sec() {
    return `${T_HC}${OP072}`;
  },
  get disabled() {
    return `${T_HC}${OP050}`;
  },
  get ghost() {
    return `${T_HC}${OP032}`;
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
    return `${T_HC}${OP012}`;
  },
  get hover() {
    return `${T_HC}${OP007}`;
  },
  get rest() {
    return `${T_HC}${OP004}`;
  },
  get pressed() {
    return `${T_HC}${OP002}`;
  },
  // --------------------------------------------------
  get prominent() {
    return `${T_LVL5}${OP100}`;
  },
  get subtle() {
    return `${T_HC}${OP002}`;
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
    return `${T_BASIC_DEF_RED}${OP100}`;
  },
  get orange() {
    return `${T_BASIC_DEF_ORANGE}${OP100}`;
  },
  get yellow() {
    return `${T_BASIC_DEF_YELLOW}${OP100}`;
  },
  get green() {
    return `${T_BASIC_DEF_GREEN}${OP100}`;
  },
  get mint() {
    return `${T_BASIC_DEF_MINT}${OP100}`;
  },
  get blue() {
    return `${T_BASIC_DEF_BLUE}${OP100}`;
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
    return `#333333${OP100}`;
  },
  // --------------------------------------------------
  get hc() {
    return `#333333${OP100}`;
  },
  get hq() {
    return `#444444${OP100}`;
  },
  get lq() {
    return `#CCCCCC${OP100}`;
  },
  get lc() {
    return `#DDDDDD${OP100}`;
  },
};
// T.3 Stroke Color
export const STROKE_CONTROL = {
  get default() {
    return `${T_HC}${OP010}`;
  },
  // --------------------------------------------------
  get alt() {
    return `${T_LC}${OP010}`;
  },
};
export const STROKE_DIVIDER = {
  get default() {
    return `${T_HC}${OP010}`;
  },
};
export const STROKE_SURFACE = {
  get layer() {
    return `#858585${OP040}`;
  },
  get flyout() {
    return `${T_HC}${OP010}`;
  },
};
export const STROKE_FOCUS = {
  get default() {
    return `#858585${OP040}`;
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
    return `${T_HC}${OP020}`;
  },
};
// T.5 Effects
export const SHADOW = {
  get default() {
    return `${T_HC}${OP014}`;
  },
};
