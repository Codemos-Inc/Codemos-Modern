import { MimicInfo, Palette, Styles, VariantConfig } from "../../../@types";
import {
  chooseTextOnColor,
  getContrastSafeAccentColorHex7,
  getHexAlpha,
  getMimicHex7,
  getMixedColorHex7,
  getMixedColorHex9,
} from "../../../color";

const palette: Palette = {
  loc: "#FFFFFF",
  hic: "#000000",
  basic: {
    def: {
      brown: "#784F3F",
      red: "#B70004",
      orange: "#9F5500",
      yellow: "#7D7000",
      green: "#006904",
      mint: "#006560",
      blue: "#0052C6",
      purple: "#7700EE",
      pink: "#AC0074",
    },
    alt: {
      red: "#C35354",
      orange: "#8D7252",
      yellow: "#7D7852",
      green: "#528256",
      mint: "#567E7C",
      blue: "#5B79A2",
      purple: "#8E64B9",
      pink: "#AF5A92",
    },
    loc: {
      red: "#E0D1D1",
      orange: "#E1D2C1",
      yellow: "#D9D6B7",
      green: "#B7DEBA",
      mint: "#BBDBD9",
      blue: "#CED5DF",
      purple: "#D9D2DF",
      pink: "#E0D0DA",
    },
  },
};

const mimic1Info: MimicInfo = {
  none: {
    referenceColor: "#F8F8F8",
    saturation: 0,
  },
  gentle: {
    referenceColor: "#F8F8F8",
    saturation: 36,
  },
  moderate: {
    referenceColor: "#F7F7F7",
    saturation: 85,
  },
  aggressive: {
    referenceColor: "#EBEBEB",
    saturation: 95,
  },
};

const mimic3Info: MimicInfo = {
  none: {
    referenceColor: "#F8F8F8",
    saturation: 0,
  },
  gentle: {
    referenceColor: "#F8F8F8",
    saturation: 36,
  },
  moderate: {
    referenceColor: "#F7F7F7",
    saturation: 85,
  },
  aggressive: {
    referenceColor: "#EBEBEB",
    saturation: 95,
  },
};

const mimic4Info: MimicInfo = {
  none: {
    referenceColor: "#FBFBFB",
    saturation: 0,
  },
  gentle: {
    referenceColor: "#FBFBFB",
    saturation: 60,
  },
  moderate: {
    referenceColor: "#FAFAFA",
    saturation: 100,
  },
  aggressive: {
    referenceColor: "#EFEFEF",
    saturation: 100,
  },
};

const mimic5Info: MimicInfo = {
  none: {
    referenceColor: "#F8F8F8",
    saturation: 0,
  },
  gentle: {
    referenceColor: "#F8F8F8",
    saturation: 36,
  },
  moderate: {
    referenceColor: "#F7F7F7",
    saturation: 85,
  },
  aggressive: {
    referenceColor: "#EBEBEB",
    saturation: 95,
  },
};

export const getStyles = (variantConfig: VariantConfig): Styles => {
  const accentColor = variantConfig.accentColor;
  const textOnColor = chooseTextOnColor(accentColor, palette.loc, palette.hic);
  const mimic1Color = getMimicHex7(mimic1Info, accentColor, variantConfig.adaptiveMode, false);
  const mimic3Color = getMimicHex7(mimic3Info, accentColor, variantConfig.adaptiveMode, false);
  const mimic4Color = getMimicHex7(mimic4Info, accentColor, variantConfig.adaptiveMode, false);
  const mimic5Color = getMimicHex7(mimic5Info, accentColor, variantConfig.adaptiveMode, false);
  const mixedFgColor = getMixedColorHex7(palette.hic, 72, mimic3Color);
  let accentTextColor = getContrastSafeAccentColorHex7(accentColor, mixedFgColor, true);
  if (!accentTextColor) {
    accentTextColor = palette.basic.def.blue;
  }
  return {
    code: {
      s00: `${palette.basic.def.brown}${getHexAlpha(100)}`,
      s01: `${palette.basic.def.red}${getHexAlpha(100)}`,
      s02: `${palette.basic.def.orange}${getHexAlpha(100)}`,
      s03: `${palette.basic.def.yellow}${getHexAlpha(100)}`,
      s04: `${palette.basic.def.green}${getHexAlpha(100)}`,
      s05: `${palette.basic.def.mint}${getHexAlpha(100)}`,
      s06: `${palette.basic.def.blue}${getHexAlpha(100)}`,
      s07: `${palette.basic.def.purple}${getHexAlpha(100)}`,
      s08: `${palette.basic.def.pink}${getHexAlpha(100)}`,
      s09: `${palette.basic.alt.red}${getHexAlpha(100)}`,
      s10: `${palette.basic.alt.orange}${getHexAlpha(100)}`,
      s11: `${palette.basic.alt.yellow}${getHexAlpha(100)}`,
      s12: `${palette.basic.alt.green}${getHexAlpha(100)}`,
      s13: `${palette.basic.alt.mint}${getHexAlpha(100)}`,
      s14: `${palette.basic.alt.blue}${getHexAlpha(100)}`,
      s15: `${palette.basic.alt.purple}${getHexAlpha(100)}`,
      s16: `${palette.basic.alt.pink}${getHexAlpha(100)}`,
      sxx: `${palette.hic}${getHexAlpha(72)}`,
    },
    basic: {
      def: {
        brown: {
          pri: `${palette.basic.def.brown}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.brown}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.brown}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.brown}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.brown}${getHexAlpha(14)}`,
        },
        red: {
          pri: `${palette.basic.def.red}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.red}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.red}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.red}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.red}${getHexAlpha(14)}`,
        },
        orange: {
          pri: `${palette.basic.def.orange}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.orange}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.orange}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.orange}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.orange}${getHexAlpha(14)}`,
        },
        yellow: {
          pri: `${palette.basic.def.yellow}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.yellow}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.yellow}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.yellow}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.yellow}${getHexAlpha(14)}`,
        },
        green: {
          pri: `${palette.basic.def.green}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.green}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.green}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.green}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.green}${getHexAlpha(14)}`,
        },
        mint: {
          pri: `${palette.basic.def.mint}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.mint}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.mint}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.mint}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.mint}${getHexAlpha(14)}`,
        },
        blue: {
          pri: `${palette.basic.def.blue}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.blue}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.blue}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.blue}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.blue}${getHexAlpha(14)}`,
        },
        purple: {
          pri: `${palette.basic.def.purple}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.purple}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.purple}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.purple}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.purple}${getHexAlpha(14)}`,
        },
        pink: {
          pri: `${palette.basic.def.pink}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.pink}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.pink}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.pink}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.pink}${getHexAlpha(14)}`,
        },
      },
      alt: {
        red: {
          pri: `${palette.basic.alt.red}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.red}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.red}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.red}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.red}${getHexAlpha(14)}`,
        },
        orange: {
          pri: `${palette.basic.alt.orange}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.orange}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.orange}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.orange}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.orange}${getHexAlpha(14)}`,
        },
        yellow: {
          pri: `${palette.basic.alt.yellow}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.yellow}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.yellow}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.yellow}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.yellow}${getHexAlpha(14)}`,
        },
        green: {
          pri: `${palette.basic.alt.green}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.green}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.green}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.green}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.green}${getHexAlpha(14)}`,
        },
        mint: {
          pri: `${palette.basic.alt.mint}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.mint}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.mint}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.mint}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.mint}${getHexAlpha(14)}`,
        },
        blue: {
          pri: `${palette.basic.alt.blue}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.blue}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.blue}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.blue}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.blue}${getHexAlpha(14)}`,
        },
        purple: {
          pri: `${palette.basic.alt.purple}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.purple}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.purple}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.purple}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.purple}${getHexAlpha(14)}`,
        },
        pink: {
          pri: `${palette.basic.alt.pink}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.pink}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.pink}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.pink}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.pink}${getHexAlpha(14)}`,
        },
      },
      loc: {
        red: {
          pri: `${palette.basic.loc.red}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.red}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.red}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.red}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.red}${getHexAlpha(14)}`,
        },
        orange: {
          pri: `${palette.basic.loc.orange}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.orange}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.orange}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.orange}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.orange}${getHexAlpha(14)}`,
        },
        yellow: {
          pri: `${palette.basic.loc.yellow}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.yellow}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.yellow}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.yellow}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.yellow}${getHexAlpha(14)}`,
        },
        green: {
          pri: `${palette.basic.loc.green}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.green}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.green}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.green}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.green}${getHexAlpha(14)}`,
        },
        mint: {
          pri: `${palette.basic.loc.mint}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.mint}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.mint}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.mint}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.mint}${getHexAlpha(14)}`,
        },
        blue: {
          pri: `${palette.basic.loc.blue}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.blue}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.blue}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.blue}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.blue}${getHexAlpha(14)}`,
        },
        purple: {
          pri: `${palette.basic.loc.purple}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.purple}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.purple}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.purple}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.purple}${getHexAlpha(14)}`,
        },
        pink: {
          pri: `${palette.basic.loc.pink}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.pink}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.pink}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.pink}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.pink}${getHexAlpha(14)}`,
        },
      },
      neutral: {
        pri: `${palette.hic}${getHexAlpha(100)}`,
        sec: `${palette.hic}${getHexAlpha(72)}`,
        ter: `${palette.hic}${getHexAlpha(50)}`,
        qua: `${palette.hic}${getHexAlpha(20)}`,
        qui: `${palette.hic}${getHexAlpha(14)}`,
        sen: `${palette.hic}${getHexAlpha(8)}`,
        sep: `${palette.hic}${getHexAlpha(5)}`,
        oct: `${palette.hic}${getHexAlpha(3)}`,
      },
    },
    fill: {
      text: {
        active: `${palette.hic}${getHexAlpha(100)}`,
        pri: `${palette.hic}${getHexAlpha(88)}`,
        sec: `${palette.hic}${getHexAlpha(72)}`,
        disabled: `${palette.hic}${getHexAlpha(50)}`,
        ghost: `${palette.hic}${getHexAlpha(32)}`,
      },
      accentText: {
        pri: `${accentTextColor}${getHexAlpha(100)}`,
        sec: `${accentTextColor}${getHexAlpha(88)}`,
      },
      textOnColor: {
        pri: `${textOnColor}${getHexAlpha(100)}`,
      },
      control: {
        doubleHover: `${palette.hic}${getHexAlpha(12)}`,
        hover: `${palette.hic}${getHexAlpha(8)}`,
        rest: `${palette.hic}${getHexAlpha(5)}`,
        restSolid: getMixedColorHex9(
          `${palette.hic}${getHexAlpha(5)}`,
          `${mimic1Color}${getHexAlpha(100)}`,
        ),
        pressed: `${palette.hic}${getHexAlpha(3)}`,
        prominent: `${mimic5Color}${getHexAlpha(100)}`,
        subtle: `${palette.hic}${getHexAlpha(3)}`,
      },
      accent: {
        pri: `${accentColor}${getHexAlpha(100)}`,
        sec: `${accentColor}${getHexAlpha(88)}`,
        ter: `${accentColor}${getHexAlpha(50)}`,
      },
      system: {
        fg: {
          red: `${palette.basic.def.red}${getHexAlpha(100)}`,
          orange: `${palette.basic.def.orange}${getHexAlpha(100)}`,
          yellow: `${palette.basic.def.yellow}${getHexAlpha(100)}`,
          green: `${palette.basic.def.green}${getHexAlpha(100)}`,
          mint: `${palette.basic.def.mint}${getHexAlpha(100)}`,
          blue: `${palette.basic.def.blue}${getHexAlpha(100)}`,
        },
        bg: {
          red: `${palette.basic.loc.red}${getHexAlpha(100)}`,
          orange: `${palette.basic.loc.orange}${getHexAlpha(100)}`,
          yellow: `${palette.basic.loc.yellow}${getHexAlpha(100)}`,
          green: `${palette.basic.loc.green}${getHexAlpha(100)}`,
          mint: `${palette.basic.loc.mint}${getHexAlpha(100)}`,
          blue: `${palette.basic.loc.blue}${getHexAlpha(100)}`,
        },
      },
      tab: {
        activeFocused: `${mimic3Color}${getHexAlpha(100)}`,
        activeUnfocused: `${mimic3Color}${getHexAlpha(100)}`,
        inactiveFocused: `${mimic1Color}${getHexAlpha(100)}`,
        inactiveUnfocused: `${mimic1Color}${getHexAlpha(100)}`,
      },
      terminal: {
        fg: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(90)}`,
          `${mimic1Color}${getHexAlpha(100)}`,
        )}`,
        hic: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(90)}`,
          `${mimic1Color}${getHexAlpha(100)}`,
        )}`,
        hiq: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(72)}`,
          `${mimic1Color}${getHexAlpha(100)}`,
        )}`,
        loq: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(50)}`,
          `${mimic1Color}${getHexAlpha(100)}`,
        )}`,
        loc: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(32)}`,
          `${mimic1Color}${getHexAlpha(100)}`,
        )}`,
        stickyScrollHover: getMixedColorHex9(
          `${palette.hic}${getHexAlpha(8)}`,
          `${mimic1Color}${getHexAlpha(100)}`,
        ),
      },
    },
    stroke: {
      control: {
        default: `${palette.hic}${getHexAlpha(10)}`,
        alt: `${palette.loc}${getHexAlpha(10)}`,
        elevation: `${palette.hic}${getHexAlpha(10)}`,
      },
      divider: {
        default: `${palette.hic}${getHexAlpha(10)}`,
      },
      surface: {
        flyout: `#858585${getHexAlpha(32)}`,
      },
      focus: {
        default: `#858585${getHexAlpha(24)}`,
      },
    },
    bg: {
      solid: {
        base: `${mimic1Color}${getHexAlpha(100)}`,
        surface: `${mimic1Color}${getHexAlpha(100)}`,
        canvas: `${mimic3Color}${getHexAlpha(100)}`,
        onCanvas: `${mimic4Color}${getHexAlpha(100)}`,
        flyout: `${mimic4Color}${getHexAlpha(100)}`,
      },
    },
    effect: {
      smoke: {
        default: `${palette.hic}${getHexAlpha(20)}`,
      },
      shadow: {
        default: `${palette.hic}${getHexAlpha(12)}`,
      },
    },
  };
};
