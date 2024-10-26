import { Decoration } from "../theme";

export type Variant = "dark" | "light";

export type Design = "modern" | "natural" | "minimal" | "flat";

export type AdaptationPreset = "none" | "gentle" | "moderate" | "aggressive";

export type CodeColors = {
  scope00: string;
  scope01: string;
  scope02: string;
  scope03: string;
  scope04: string;
  scope05: string;
  scope06: string;
  scope07: string;
  scope08: string;
  scope09: string;
  scope10: string;
  scope11: string;
  scope12: string;
  scope13: string;
  scope14: string;
  scope15: string;
  scope16: string;
  scope17: string;
};

export type VariantConfig = {
  auxiliaryUiTheme: string | null;
  design: Design;
  accentColor: string;
  adaptationColor: string;
  adaptationIntensity: number;
  auxiliaryCodeTheme: string | null;
  codeColors: CodeColors;
};

export type Config = {
  auxiliaryThemeRegistries: string[];
  textDecorations: {
    strikeThrough: boolean;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    forComments: Decoration[];
  };
  dark: VariantConfig;
  light: VariantConfig;
};
