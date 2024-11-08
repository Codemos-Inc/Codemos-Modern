import { Palette, Styles, VariantConfig } from "../../../@types";
import {
  getContrastSafeColorHex7,
  getHexAlpha,
  getMimicHex7,
  getMixedColorHex7,
  getMixedColorHex9,
  getOnAccentColor,
} from "../../../color";
import { intensityToAlpha } from "../../../extension/helpers";
import { LUM_SOURCE_ALPHA } from "./modern";

const palette: Palette = {
  base: "#F9F9F9",
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
      green: "#C1DCC3",
      mint: "#BEDAD8",
      blue: "#CDD5E0",
      purple: "#D9D2DF",
      pink: "#E0D0DA",
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
  const flyoutColor = getMixedColorHex7(palette.loc, 50, baseColor);
  // Accents
  const accentColor = variantConfig.accentColor;
  let accentTextColor = getContrastSafeColorHex7(
    getMixedColorHex7(palette.hic, 72, baseColor),
    accentColor,
    false,
  );
  if (!accentTextColor) {
    accentTextColor = palette.basic.def.blue;
  }
  const onAccentColor = getOnAccentColor(accentColor, palette.loc, palette.hic);
  return {
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
      onColor: {
        pri: `${palette.loc}${getHexAlpha(100)}`,
      },
      accent: {
        pri: `${accentColor}${getHexAlpha(100)}`,
        sec: `${accentColor}${getHexAlpha(88)}`,
        ter: `${accentColor}${getHexAlpha(50)}`,
      },
      accentText: {
        pri: `${accentTextColor}${getHexAlpha(100)}`,
        sec: `${accentTextColor}${getHexAlpha(88)}`,
      },
      onAccent: {
        pri: `${onAccentColor}${getHexAlpha(100)}`,
      },
      control: {
        doubleHover: `${palette.hic}${getHexAlpha(12)}`,
        hover: `${palette.hic}${getHexAlpha(8)}`,
        rest: `${palette.hic}${getHexAlpha(5)}`,
        restSolid: getMixedColorHex9(
          `${palette.hic}${getHexAlpha(5)}`,
          `${baseColor}${getHexAlpha(100)}`,
        ),
        pressed: `${palette.hic}${getHexAlpha(3)}`,
        prominent: `${getMixedColorHex7(palette.hic, 20, flyoutColor)}${getHexAlpha(100)}`,
        subtle: `${palette.hic}${getHexAlpha(3)}`,
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
        activeFocused: `${baseColor}${getHexAlpha(100)}`,
        activeUnfocused: `${baseColor}${getHexAlpha(100)}`,
        inactiveFocused: `${baseColor}${getHexAlpha(100)}`,
        inactiveUnfocused: `${baseColor}${getHexAlpha(100)}`,
      },
      terminal: {
        fg: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(90)}`,
          `${baseColor}${getHexAlpha(100)}`,
        )}`,
        hic: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(100)}`,
          `${baseColor}${getHexAlpha(100)}`,
        )}`,
        hiq: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(72)}`,
          `${baseColor}${getHexAlpha(100)}`,
        )}`,
        loq: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(50)}`,
          `${baseColor}${getHexAlpha(100)}`,
        )}`,
        loc: `${getMixedColorHex9(
          `${palette.hic}${getHexAlpha(32)}`,
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
        base: `${baseColor}${getHexAlpha(100)}`,
        surface: `${baseColor}${getHexAlpha(100)}`,
        layer: `${baseColor}${getHexAlpha(100)}`,
        flyout: `${flyoutColor}${getHexAlpha(100)}`,
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
