import { AdaptiveMode, Design } from "..";

export type VariantConfig = {
  auxiliaryUiTheme: string | null;
  design: Design;
  accentColor: string;
  adaptiveMode: AdaptiveMode;
  auxiliaryCodeTheme: string | null;
};

export type Palette = {
  loc: string;
  hic: string;
  basic: {
    def: {
      brown: string;
      red: string;
      orange: string;
      yellow: string;
      green: string;
      mint: string;
      blue: string;
      purple: string;
      pink: string;
    };
    alt: {
      red: string;
      orange: string;
      yellow: string;
      green: string;
      mint: string;
      blue: string;
      purple: string;
      pink: string;
    };
    loc: {
      red: string;
      orange: string;
      yellow: string;
      green: string;
      mint: string;
      blue: string;
      purple: string;
      pink: string;
    };
  };
};

export type MimicInfo = {
  none: {
    referenceColor: string;
    saturation: number;
  };
  gentle: {
    referenceColor: string;
    saturation: number;
  };
  moderate: {
    referenceColor: string;
    saturation: number;
  };
  aggressive: {
    referenceColor: string;
    saturation: number;
  };
};

export type Styles = {
  basic: {
    def: {
      brown: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      red: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      orange: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      yellow: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      green: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      mint: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      blue: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      purple: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      pink: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
    };
    alt: {
      red: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      orange: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      yellow: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      green: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      mint: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      blue: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      purple: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      pink: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
    };
    loc: {
      red: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      orange: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      yellow: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      green: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      mint: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      blue: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      purple: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
      pink: {
        pri: string;
        sec: string;
        ter: string;
        qua: string;
        qui: string;
      };
    };
    neutral: {
      pri: string;
      sec: string;
      ter: string;
      qua: string;
      qui: string;
      sen: string;
      sep: string;
    };
  };
  fill: {
    text: {
      active: string;
      pri: string;
      sec: string;
      disabled: string;
      ghost: string;
    };
    accentText: {
      pri: string;
      sec: string;
    };
    textOnColor: {
      pri: string;
    };
    control: {
      doubleHover: string;
      hover: string;
      rest: string;
      pressed: string;
      prominent: string;
      subtle: string;
    };
    accent: {
      pri: string;
      sec: string;
    };
    system: {
      fg: {
        red: string;
        orange: string;
        yellow: string;
        green: string;
        mint: string;
        blue: string;
      };
      bg: {
        red: string;
        orange: string;
        yellow: string;
        green: string;
        mint: string;
        blue: string;
      };
    };
    tab: {
      activeFocused: string;
      activeUnfocused: string;
      inactiveFocused: string;
      inactiveUnfocused: string;
    };
    terminal: {
      fg: string;
      hic: string;
      hiq: string;
      loq: string;
      loc: string;
    };
  };
  stroke: {
    control: {
      default: string;
      alt: string;
      elevation: string;
    };
    divider: {
      default: string;
    };
    surface: {
      layer: string;
      flyout: string;
    };
    focus: {
      default: string;
    };
  };
  bg: {
    solid: {
      base: string;
      surface: string;
      canvas: string;
      onCanvas: string;
      flyout: string;
    };
  };
  effect: {
    smoke: {
      default: string;
    };
    shadow: {
      default: string;
    };
  };
};
