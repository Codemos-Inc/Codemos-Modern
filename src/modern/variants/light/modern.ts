import { MimicInfo, Palette, Styles, VariantConfig } from "../../../@types";
import {
  chooseTextOnColor,
  getContrastSafeAccentColorHex7,
  getHexAlpha,
  getMimicHex7,
  getMixedColorHex7,
  getMixedColorHex9,
} from "../../../color";

export const palette: Palette = {
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

export const mimic1Info: MimicInfo = {
  none: {
    referenceColor: "#ECECEC",
    saturation: 0,
  },
  gentle: {
    referenceColor: "#ECECEC",
    saturation: 16,
  },
  moderate: {
    referenceColor: "#EBEBEB",
    saturation: 40,
  },
  aggressive: {
    referenceColor: "#E1E1E1",
    saturation: 50,
  },
};

const mimic2Info: MimicInfo = {
  none: {
    referenceColor: "#F2F2F2",
    saturation: 0,
  },
  gentle: {
    referenceColor: "#F2F2F2",
    saturation: 24,
  },
  moderate: {
    referenceColor: "#F1F1F1",
    saturation: 54,
  },
  aggressive: {
    referenceColor: "#E7E7E7",
    saturation: 64,
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
    referenceColor: "#CACACA",
    saturation: 0,
  },
  gentle: {
    referenceColor: "#CACACA",
    saturation: 8,
  },
  moderate: {
    referenceColor: "#C9C9C9",
    saturation: 16,
  },
  aggressive: {
    referenceColor: "#C1C1C1",
    saturation: 26,
  },
};

export const getStyles = (variantConfig: VariantConfig): Styles => {
  const accentColor = variantConfig.accentColor;
  const textOnColor = chooseTextOnColor(accentColor, palette.loc, palette.hic);
  const mimic1Color = getMimicHex7(
    mimic1Info,
    accentColor,
    variantConfig.adaptiveMode,
    false,
  );
  const mimic2Color = getMimicHex7(
    mimic2Info,
    accentColor,
    variantConfig.adaptiveMode,
    false,
  );
  const mimic3Color = getMimicHex7(
    mimic3Info,
    accentColor,
    variantConfig.adaptiveMode,
    false,
  );
  const mimic4Color = getMimicHex7(
    mimic4Info,
    accentColor,
    variantConfig.adaptiveMode,
    false,
  );
  const mimic5Color = getMimicHex7(
    mimic5Info,
    accentColor,
    variantConfig.adaptiveMode,
    false,
  );
  const mixedFgColor = getMixedColorHex7(palette.hic, 72, mimic3Color);
  let accentTextColor = getContrastSafeAccentColorHex7(
    accentColor,
    mixedFgColor,
    true,
  );
  if (!accentTextColor) {
    accentTextColor = palette.basic.def.blue;
  }
  return {
    basic: {
      def: {
        brown: {
          pri: `${palette.basic.def.brown}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.brown}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.brown}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.brown}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.brown}${getHexAlpha(12)}`,
        },
        red: {
          pri: `${palette.basic.def.red}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.red}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.red}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.red}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.red}${getHexAlpha(12)}`,
        },
        orange: {
          pri: `${palette.basic.def.orange}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.orange}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.orange}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.orange}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.orange}${getHexAlpha(12)}`,
        },
        yellow: {
          pri: `${palette.basic.def.yellow}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.yellow}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.yellow}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.yellow}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.yellow}${getHexAlpha(12)}`,
        },
        green: {
          pri: `${palette.basic.def.green}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.green}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.green}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.green}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.green}${getHexAlpha(12)}`,
        },
        mint: {
          pri: `${palette.basic.def.mint}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.mint}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.mint}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.mint}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.mint}${getHexAlpha(12)}`,
        },
        blue: {
          pri: `${palette.basic.def.blue}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.blue}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.blue}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.blue}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.blue}${getHexAlpha(12)}`,
        },
        purple: {
          pri: `${palette.basic.def.purple}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.purple}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.purple}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.purple}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.purple}${getHexAlpha(12)}`,
        },
        pink: {
          pri: `${palette.basic.def.pink}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.pink}${getHexAlpha(72)}`,
          ter: `${palette.basic.def.pink}${getHexAlpha(50)}`,
          qua: `${palette.basic.def.pink}${getHexAlpha(20)}`,
          qui: `${palette.basic.def.pink}${getHexAlpha(12)}`,
        },
      },
      alt: {
        red: {
          pri: `${palette.basic.alt.red}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.red}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.red}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.red}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.red}${getHexAlpha(12)}`,
        },
        orange: {
          pri: `${palette.basic.alt.orange}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.orange}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.orange}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.orange}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.orange}${getHexAlpha(12)}`,
        },
        yellow: {
          pri: `${palette.basic.alt.yellow}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.yellow}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.yellow}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.yellow}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.yellow}${getHexAlpha(12)}`,
        },
        green: {
          pri: `${palette.basic.alt.green}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.green}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.green}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.green}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.green}${getHexAlpha(12)}`,
        },
        mint: {
          pri: `${palette.basic.alt.mint}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.mint}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.mint}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.mint}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.mint}${getHexAlpha(12)}`,
        },
        blue: {
          pri: `${palette.basic.alt.blue}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.blue}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.blue}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.blue}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.blue}${getHexAlpha(12)}`,
        },
        purple: {
          pri: `${palette.basic.alt.purple}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.purple}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.purple}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.purple}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.purple}${getHexAlpha(12)}`,
        },
        pink: {
          pri: `${palette.basic.alt.pink}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.pink}${getHexAlpha(72)}`,
          ter: `${palette.basic.alt.pink}${getHexAlpha(50)}`,
          qua: `${palette.basic.alt.pink}${getHexAlpha(20)}`,
          qui: `${palette.basic.alt.pink}${getHexAlpha(12)}`,
        },
      },
      loc: {
        red: {
          pri: `${palette.basic.loc.red}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.red}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.red}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.red}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.red}${getHexAlpha(12)}`,
        },
        orange: {
          pri: `${palette.basic.loc.orange}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.orange}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.orange}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.orange}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.orange}${getHexAlpha(12)}`,
        },
        yellow: {
          pri: `${palette.basic.loc.yellow}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.yellow}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.yellow}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.yellow}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.yellow}${getHexAlpha(12)}`,
        },
        green: {
          pri: `${palette.basic.loc.green}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.green}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.green}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.green}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.green}${getHexAlpha(12)}`,
        },
        mint: {
          pri: `${palette.basic.loc.mint}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.mint}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.mint}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.mint}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.mint}${getHexAlpha(12)}`,
        },
        blue: {
          pri: `${palette.basic.loc.blue}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.blue}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.blue}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.blue}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.blue}${getHexAlpha(12)}`,
        },
        purple: {
          pri: `${palette.basic.loc.purple}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.purple}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.purple}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.purple}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.purple}${getHexAlpha(12)}`,
        },
        pink: {
          pri: `${palette.basic.loc.pink}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.pink}${getHexAlpha(72)}`,
          ter: `${palette.basic.loc.pink}${getHexAlpha(50)}`,
          qua: `${palette.basic.loc.pink}${getHexAlpha(20)}`,
          qui: `${palette.basic.loc.pink}${getHexAlpha(12)}`,
        },
      },
      neutral: {
        pri: `${palette.hic}${getHexAlpha(100)}`,
        sec: `${palette.hic}${getHexAlpha(72)}`,
        ter: `${palette.hic}${getHexAlpha(50)}`,
        qua: `${palette.hic}${getHexAlpha(20)}`,
        qui: `${palette.hic}${getHexAlpha(12)}`,
        sen: `${palette.hic}${getHexAlpha(8)}`,
        sep: `${palette.hic}${getHexAlpha(5)}`,
        oct: `${palette.hic}${getHexAlpha(3)}`,
      },
    },
    fill: {
      text: {
        active: `${palette.hic}${getHexAlpha(100)}`,
        pri: `${palette.hic}${getHexAlpha(90)}`,
        sec: `${palette.hic}${getHexAlpha(72)}`,
        disabled: `${palette.hic}${getHexAlpha(50)}`,
        ghost: `${palette.hic}${getHexAlpha(32)}`,
      },
      accentText: {
        pri: `${accentTextColor}${getHexAlpha(100)}`,
        sec: `${accentTextColor}${getHexAlpha(90)}`,
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
        sec: `${accentColor}${getHexAlpha(90)}`,
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
        activeFocused: `${mimic4Color}${getHexAlpha(100)}`,
        activeUnfocused: `${mimic3Color}${getHexAlpha(100)}`,
        inactiveFocused: `${mimic2Color}${getHexAlpha(100)}`,
        inactiveUnfocused: `${mimic1Color}${getHexAlpha(100)}`,
      },
      terminal: {
        fg: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(90)}`,
          `${mimic3Color}${getHexAlpha(100)}`,
        )}`,
        hic: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(90)}`,
          `${mimic3Color}${getHexAlpha(100)}`,
        )}`,
        hiq: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(72)}`,
          `${mimic3Color}${getHexAlpha(100)}`,
        )}`,
        loq: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(50)}`,
          `${mimic3Color}${getHexAlpha(100)}`,
        )}`,
        loc: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(32)}`,
          `${mimic3Color}${getHexAlpha(100)}`,
        )}`,
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
        flyout: `#757575${getHexAlpha(32)}`,
      },
      focus: {
        default: `#757575${getHexAlpha(40)}`,
      },
    },
    bg: {
      solid: {
        base: `${mimic1Color}${getHexAlpha(100)}`,
        surface: `${mimic2Color}${getHexAlpha(100)}`,
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
        default: `${palette.hic}${getHexAlpha(14)}`,
      },
    },
  };
};
