import { Palette, Styles, VariantConfig } from "../../../@types";
import {
  chooseTextOnColor,
  getContrastSafeColorHex7,
  getHexAlpha,
  getMimicHex7,
  getMixedColorHex7,
  getMixedColorHex9,
} from "../../../color";
import { intensityToAlpha } from "../../../extension/helpers";
import { LUM_SOURCE_ALPHA } from "./modern";

const palette: Palette = {
  base: "#171717",
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

export const getStyles = (variantConfig: VariantConfig): Styles => {
  // Mimics
  const baseColor = getMimicHex7({
    backdropColor: variantConfig.adaptationColor,
    lumSourceColor: palette.base,
    lumSourceAlpha: LUM_SOURCE_ALPHA,
    colSourceColor: palette.base,
    colSourceAlpha: intensityToAlpha(variantConfig.adaptationIntensity),
  });
  const flyoutColor = getMixedColorHex7(palette.hic, 3, baseColor);
  // Accents
  const accentColor = variantConfig.accentColor;
  const textOnColor = chooseTextOnColor(accentColor, palette.loc, palette.hic);
  let accentTextColor = getContrastSafeColorHex7(
    getMixedColorHex7(palette.hic, 54, baseColor),
    accentColor,
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
          qui: `${palette.basic.def.brown}${getHexAlpha(16)}`,
        },
        red: {
          pri: `${palette.basic.def.red}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.red}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.red}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.red}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.red}${getHexAlpha(16)}`,
        },
        orange: {
          pri: `${palette.basic.def.orange}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.orange}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.orange}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.orange}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.orange}${getHexAlpha(16)}`,
        },
        yellow: {
          pri: `${palette.basic.def.yellow}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.yellow}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.yellow}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.yellow}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.yellow}${getHexAlpha(16)}`,
        },
        green: {
          pri: `${palette.basic.def.green}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.green}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.green}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.green}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.green}${getHexAlpha(16)}`,
        },
        mint: {
          pri: `${palette.basic.def.mint}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.mint}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.mint}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.mint}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.mint}${getHexAlpha(16)}`,
        },
        blue: {
          pri: `${palette.basic.def.blue}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.blue}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.blue}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.blue}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.blue}${getHexAlpha(16)}`,
        },
        purple: {
          pri: `${palette.basic.def.purple}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.purple}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.purple}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.purple}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.purple}${getHexAlpha(16)}`,
        },
        pink: {
          pri: `${palette.basic.def.pink}${getHexAlpha(100)}`,
          sec: `${palette.basic.def.pink}${getHexAlpha(78)}`,
          ter: `${palette.basic.def.pink}${getHexAlpha(54)}`,
          qua: `${palette.basic.def.pink}${getHexAlpha(36)}`,
          qui: `${palette.basic.def.pink}${getHexAlpha(16)}`,
        },
      },
      alt: {
        red: {
          pri: `${palette.basic.alt.red}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.red}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.red}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.red}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.red}${getHexAlpha(16)}`,
        },
        orange: {
          pri: `${palette.basic.alt.orange}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.orange}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.orange}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.orange}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.orange}${getHexAlpha(16)}`,
        },
        yellow: {
          pri: `${palette.basic.alt.yellow}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.yellow}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.yellow}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.yellow}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.yellow}${getHexAlpha(16)}`,
        },
        green: {
          pri: `${palette.basic.alt.green}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.green}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.green}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.green}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.green}${getHexAlpha(16)}`,
        },
        mint: {
          pri: `${palette.basic.alt.mint}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.mint}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.mint}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.mint}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.mint}${getHexAlpha(16)}`,
        },
        blue: {
          pri: `${palette.basic.alt.blue}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.blue}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.blue}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.blue}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.blue}${getHexAlpha(16)}`,
        },
        purple: {
          pri: `${palette.basic.alt.purple}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.purple}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.purple}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.purple}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.purple}${getHexAlpha(16)}`,
        },
        pink: {
          pri: `${palette.basic.alt.pink}${getHexAlpha(100)}`,
          sec: `${palette.basic.alt.pink}${getHexAlpha(78)}`,
          ter: `${palette.basic.alt.pink}${getHexAlpha(54)}`,
          qua: `${palette.basic.alt.pink}${getHexAlpha(36)}`,
          qui: `${palette.basic.alt.pink}${getHexAlpha(16)}`,
        },
      },
      loc: {
        red: {
          pri: `${palette.basic.loc.red}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.red}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.red}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.red}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.red}${getHexAlpha(16)}`,
        },
        orange: {
          pri: `${palette.basic.loc.orange}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.orange}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.orange}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.orange}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.orange}${getHexAlpha(16)}`,
        },
        yellow: {
          pri: `${palette.basic.loc.yellow}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.yellow}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.yellow}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.yellow}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.yellow}${getHexAlpha(16)}`,
        },
        green: {
          pri: `${palette.basic.loc.green}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.green}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.green}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.green}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.green}${getHexAlpha(16)}`,
        },
        mint: {
          pri: `${palette.basic.loc.mint}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.mint}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.mint}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.mint}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.mint}${getHexAlpha(16)}`,
        },
        blue: {
          pri: `${palette.basic.loc.blue}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.blue}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.blue}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.blue}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.blue}${getHexAlpha(16)}`,
        },
        purple: {
          pri: `${palette.basic.loc.purple}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.purple}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.purple}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.purple}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.purple}${getHexAlpha(16)}`,
        },
        pink: {
          pri: `${palette.basic.loc.pink}${getHexAlpha(100)}`,
          sec: `${palette.basic.loc.pink}${getHexAlpha(78)}`,
          ter: `${palette.basic.loc.pink}${getHexAlpha(54)}`,
          qua: `${palette.basic.loc.pink}${getHexAlpha(36)}`,
          qui: `${palette.basic.loc.pink}${getHexAlpha(16)}`,
        },
      },
      neutral: {
        pri: `${palette.hic}${getHexAlpha(100)}`,
        sec: `${palette.hic}${getHexAlpha(78)}`,
        ter: `${palette.hic}${getHexAlpha(54)}`,
        qua: `${palette.hic}${getHexAlpha(36)}`,
        qui: `${palette.hic}${getHexAlpha(16)}`,
        sen: `${palette.hic}${getHexAlpha(8)}`,
        sep: `${palette.hic}${getHexAlpha(6)}`,
        oct: `${palette.hic}${getHexAlpha(3)}`,
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
        sec: `${accentTextColor}${getHexAlpha(86)}`,
      },
      textOnColor: {
        pri: `${textOnColor}${getHexAlpha(100)}`,
      },
      control: {
        doubleHover: `${palette.hic}${getHexAlpha(16)}`,
        hover: `${palette.hic}${getHexAlpha(8)}`,
        rest: `${palette.hic}${getHexAlpha(6)}`,
        restSolid: getMixedColorHex9(
          `${palette.hic}${getHexAlpha(6)}`,
          `${baseColor}${getHexAlpha(100)}`,
        ),
        pressed: `${palette.hic}${getHexAlpha(3)}`,
        prominent: `${getMixedColorHex7(palette.hic, 6, flyoutColor)}${getHexAlpha(100)}`,
        subtle: `${palette.hic}${getHexAlpha(3)}`,
      },
      accent: {
        pri: `${accentColor}${getHexAlpha(100)}`,
        sec: `${accentColor}${getHexAlpha(86)}`,
        ter: `${accentColor}${getHexAlpha(54)}`,
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
        activeFocused: `${baseColor}${getHexAlpha(100)}`,
        activeUnfocused: `${baseColor}${getHexAlpha(100)}`,
        inactiveFocused: `${baseColor}${getHexAlpha(100)}`,
        inactiveUnfocused: `${baseColor}${getHexAlpha(100)}`,
      },
      terminal: {
        fg: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(78)}`,
          `${baseColor}${getHexAlpha(100)}`,
        )}`,
        hic: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(100)}`,
          `${baseColor}${getHexAlpha(100)}`,
        )}`,
        hiq: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(54)}`,
          `${baseColor}${getHexAlpha(100)}`,
        )}`,
        loq: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(36)}`,
          `${baseColor}${getHexAlpha(100)}`,
        )}`,
        loc: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(20)}`,
          `${baseColor}${getHexAlpha(100)}`,
        )}`,
        stickyScrollHover: getMixedColorHex9(
          `${palette.hic}${getHexAlpha(8)}`,
          `${baseColor}${getHexAlpha(100)}`,
        ),
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
        flyout: `#757575${getHexAlpha(32)}`,
      },
      focus: {
        default: `#757575${getHexAlpha(24)}`,
      },
    },
    bg: {
      solid: {
        base: `${baseColor}${getHexAlpha(100)}`,
        surface: `${baseColor}${getHexAlpha(100)}`,
        layer: `${baseColor}${getHexAlpha(100)}`,
        flyout: `${flyoutColor}${getHexAlpha(100)}`,
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
