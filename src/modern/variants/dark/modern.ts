import { MimicInfo, Palette, Styles, VariantConfig } from "../../../@types";
import {
  chooseTextOnColor,
  getContrastSafeAccentColorHex7,
  getHexAlpha,
  getMimicHex7,
  getMixedColorHex7,
} from "../../../color";

const palette: Palette = {
  loc: "#000000",
  hic: "#FFFFFF",
  basic: {
    def: {
      brown: "#CB8569",
      red: "#EF6363",
      orange: "#D28342",
      yellow: "#BFAF40",
      green: "#45AA41",
      mint: "#46A598",
      blue: "#4B9ECD",
      purple: "#9B87EA",
      pink: "#ED63BA",
    },
    alt: {
      red: "#D19797",
      orange: "#C59E7F",
      yellow: "#ADA77F",
      green: "#80B27F",
      mint: "#83AEA8",
      blue: "#87ABC0",
      purple: "#A9A0CB",
      pink: "#CD95b8",
    },
    loc: {
      red: "#3A2727",
      orange: "#322B24",
      yellow: "#343327",
      green: "#273027",
      mint: "#27302F",
      blue: "#252D31",
      purple: "#2E2A3C",
      pink: "#3A2733",
    },
  },
};

const mimic1Info: MimicInfo = {
  none: {
    referenceColor: "#171717",
    saturation: 0,
  },
  gentle: {
    referenceColor: "#171717",
    saturation: 7,
  },
  moderate: {
    referenceColor: "#181818",
    saturation: 17,
  },
  aggressive: {
    referenceColor: "#202020",
    saturation: 30,
  },
};

const mimic2Info: MimicInfo = {
  none: {
    referenceColor: "#1c1c1c",
    saturation: 0,
  },
  gentle: {
    referenceColor: "#1c1c1c",
    saturation: 7,
  },
  moderate: {
    referenceColor: "#1d1d1d",
    saturation: 15,
  },
  aggressive: {
    referenceColor: "#242424",
    saturation: 27,
  },
};

export const mimic3Info: MimicInfo = {
  none: {
    referenceColor: "#1F1F1F",
    saturation: 0,
  },
  gentle: {
    referenceColor: "#1F1F1F",
    saturation: 6,
  },
  moderate: {
    referenceColor: "#202020",
    saturation: 13,
  },
  aggressive: {
    referenceColor: "#272727",
    saturation: 24,
  },
};

const mimic4Info: MimicInfo = {
  none: {
    referenceColor: "#272727",
    saturation: 0,
  },
  gentle: {
    referenceColor: "#272727",
    saturation: 5,
  },
  moderate: {
    referenceColor: "#282828",
    saturation: 11,
  },
  aggressive: {
    referenceColor: "#2e2e2e",
    saturation: 21,
  },
};

const mimic5Info: MimicInfo = {
  none: {
    referenceColor: "#373737",
    saturation: 0,
  },
  gentle: {
    referenceColor: "#373737",
    saturation: 3,
  },
  moderate: {
    referenceColor: "#383838",
    saturation: 6,
  },
  aggressive: {
    referenceColor: "#3d3d3d",
    saturation: 12,
  },
};

export const getStyles = (variantConfig: VariantConfig): Styles => {
  const accentColor = variantConfig.accentColor;
  const textOnColor = chooseTextOnColor(accentColor, palette.loc, palette.hic);
  const mimic1Color = getMimicHex7(
    mimic1Info,
    accentColor,
    variantConfig.adaptiveMode,
    true,
  );
  const mimic2Color = getMimicHex7(
    mimic2Info,
    accentColor,
    variantConfig.adaptiveMode,
    true,
  );
  const mimic3Color = getMimicHex7(
    mimic3Info,
    accentColor,
    variantConfig.adaptiveMode,
    true,
  );
  const mimic4Color = getMimicHex7(
    mimic4Info,
    accentColor,
    variantConfig.adaptiveMode,
    true,
  );
  const mimic5Color = getMimicHex7(
    mimic5Info,
    accentColor,
    variantConfig.adaptiveMode,
    true,
  );
  const mixedFgColor = getMixedColorHex7(palette.hic, 54, mimic3Color);
  let accentTextColor = getContrastSafeAccentColorHex7(
    accentColor,
    mixedFgColor,
    false,
  );
  if (!accentTextColor) {
    accentTextColor = palette.basic.def.blue;
  }
  return {
    basic: {
      def: {
        brown: {
          pri: `${palette.basic.def.brown}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.brown}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.brown}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.brown}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.brown}${getHexAlpha(20)}`,
        },
        red: {
          pri: `${palette.basic.def.red}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.red}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.red}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.red}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.red}${getHexAlpha(20)}`,
        },
        orange: {
          pri: `${palette.basic.def.orange}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.orange}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.orange}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.orange}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.orange}${getHexAlpha(20)}`,
        },
        yellow: {
          pri: `${palette.basic.def.yellow}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.yellow}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.yellow}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.yellow}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.yellow}${getHexAlpha(20)}`,
        },
        green: {
          pri: `${palette.basic.def.green}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.green}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.green}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.green}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.green}${getHexAlpha(20)}`,
        },
        mint: {
          pri: `${palette.basic.def.mint}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.mint}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.mint}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.mint}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.mint}${getHexAlpha(20)}`,
        },
        blue: {
          pri: `${palette.basic.def.blue}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.blue}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.blue}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.blue}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.blue}${getHexAlpha(20)}`,
        },
        purple: {
          pri: `${palette.basic.def.purple}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.purple}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.purple}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.purple}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.purple}${getHexAlpha(20)}`,
        },
        pink: {
          pri: `${palette.basic.def.pink}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.pink}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.pink}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.pink}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.pink}${getHexAlpha(20)}`,
        },
      },
      alt: {
        red: {
          pri: `${palette.basic.alt.red}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.red}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.red}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.red}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.red}${getHexAlpha(20)}`,
        },
        orange: {
          pri: `${palette.basic.alt.orange}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.orange}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.orange}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.orange}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.orange}${getHexAlpha(20)}`,
        },
        yellow: {
          pri: `${palette.basic.alt.yellow}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.yellow}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.yellow}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.yellow}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.yellow}${getHexAlpha(20)}`,
        },
        green: {
          pri: `${palette.basic.alt.green}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.green}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.green}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.green}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.green}${getHexAlpha(20)}`,
        },
        mint: {
          pri: `${palette.basic.alt.mint}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.mint}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.mint}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.mint}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.mint}${getHexAlpha(20)}`,
        },
        blue: {
          pri: `${palette.basic.alt.blue}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.blue}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.blue}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.blue}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.blue}${getHexAlpha(20)}`,
        },
        purple: {
          pri: `${palette.basic.alt.purple}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.purple}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.purple}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.purple}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.purple}${getHexAlpha(20)}`,
        },
        pink: {
          pri: `${palette.basic.alt.pink}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.pink}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.pink}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.pink}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.pink}${getHexAlpha(20)}`,
        },
      },
      loc: {
        red: {
          pri: `${palette.basic.loc.red}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.red}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.red}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.red}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.red}${getHexAlpha(20)}`,
        },
        orange: {
          pri: `${palette.basic.loc.orange}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.orange}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.orange}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.orange}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.orange}${getHexAlpha(20)}`,
        },
        yellow: {
          pri: `${palette.basic.loc.yellow}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.yellow}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.yellow}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.yellow}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.yellow}${getHexAlpha(20)}`,
        },
        green: {
          pri: `${palette.basic.loc.green}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.green}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.green}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.green}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.green}${getHexAlpha(20)}`,
        },
        mint: {
          pri: `${palette.basic.loc.mint}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.mint}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.mint}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.mint}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.mint}${getHexAlpha(20)}`,
        },
        blue: {
          pri: `${palette.basic.loc.blue}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.blue}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.blue}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.blue}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.blue}${getHexAlpha(20)}`,
        },
        purple: {
          pri: `${palette.basic.loc.purple}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.purple}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.purple}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.purple}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.purple}${getHexAlpha(20)}`,
        },
        pink: {
          pri: `${palette.basic.loc.pink}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.pink}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.pink}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.pink}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.pink}${getHexAlpha(20)}`,
        },
      },
      neutral: {
        pri: `${palette.hic}${getHexAlpha(100)}`,
        sec: `${palette.hic}${getHexAlpha(78)}`,
        ter: `${palette.hic}${getHexAlpha(54)}`,
        qua: `${palette.hic}${getHexAlpha(36)}`,
        qui: `${palette.hic}${getHexAlpha(20)}`,
        sen: `${palette.hic}${getHexAlpha(8)}`,
        sep: `${palette.hic}${getHexAlpha(6)}`,
      },
    },
    fill: {
      text: {
        active: `${palette.hic}${getHexAlpha(100)}`,
        pri: `${palette.hic}${getHexAlpha(78)}`,
        sec: `${palette.hic}${getHexAlpha(54)}`,
        disabled: `${palette.hic}${getHexAlpha(36)}`,
        ghost: `${palette.hic}${getHexAlpha(20)}`,
      },
      accentText: {
        pri: `${accentTextColor}${getHexAlpha(100)}`,
        sec: `${accentTextColor}${getHexAlpha(90)}`,
      },
      textOnColor: {
        pri: `${textOnColor}${getHexAlpha(100)}`,
      },
      control: {
        doubleHover: `${palette.hic}${getHexAlpha(16)}`,
        hover: `${palette.hic}${getHexAlpha(8)}`,
        rest: `${palette.hic}${getHexAlpha(6)}`,
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
          red: `${palette.basic.alt.red}${getHexAlpha(100)}`,
          orange: `${palette.basic.alt.orange}${getHexAlpha(100)}`,
          yellow: `${palette.basic.alt.yellow}${getHexAlpha(100)}`,
          green: `${palette.basic.alt.green}${getHexAlpha(100)}`,
          mint: `${palette.basic.alt.mint}${getHexAlpha(100)}`,
          blue: `${palette.basic.alt.blue}${getHexAlpha(100)}`,
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
        fg: `#CCCCCC${getHexAlpha(100)}`,
        hic: `#CCCCCC${getHexAlpha(100)}`,
        hiq: `#BBBBBB${getHexAlpha(100)}`,
        loq: `#444444${getHexAlpha(100)}`,
        loc: `#333333${getHexAlpha(100)}`,
      },
    },
    stroke: {
      control: {
        default: `${palette.hic}${getHexAlpha(8)}`,
        alt: `${palette.loc}${getHexAlpha(10)}`,
        elevation: `${palette.hic}${getHexAlpha(8)}`,
      },
      divider: {
        default: `${palette.hic}${getHexAlpha(8)}`,
      },
      surface: {
        layer: `#757575${getHexAlpha(40)}`,
        flyout: `${palette.loc}${getHexAlpha(20)}`,
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
        default: `${palette.loc}${getHexAlpha(30)}`,
      },
      shadow: {
        default: `${palette.loc}${getHexAlpha(26)}`,
      },
    },
  };
};
