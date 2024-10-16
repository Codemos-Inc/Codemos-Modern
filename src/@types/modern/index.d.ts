import { Decoration } from "../theme";

export type Variant = "dark" | "light";

export type Design = "modern" | "natural" | "minimal" | "flat";

export type AdaptationPreset = "none" | "gentle" | "moderate" | "aggressive";

export type VariantConfig = {
  auxiliaryUiTheme: string | null;
  design: Design;
  accentColor: string;
  adaptationColor: string;
  adaptationIntensity: number;
  auxiliaryCodeTheme: string | null;
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
