import { Decoration } from "../theme";

export type Variant = "dark" | "light";

export type Design = "modern" | "minimal" | "flat";

export type AdaptiveMode = "none" | "gentle" | "moderate" | "aggressive";

export type Config = {
  auxiliaryThemeRegistries: string[];
  textDecorations: {
    strikeThrough: boolean;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    forComments: Decoration[];
  };
  dark: {
    auxiliaryUiTheme: string | null;
    design: Design;
    accentColor: string;
    adaptiveMode: AdaptiveMode;
    auxiliaryCodeTheme: string | null;
  };
  light: {
    auxiliaryUiTheme: string | null;
    design: Design;
    accentColor: string;
    adaptiveMode: AdaptiveMode;
    auxiliaryCodeTheme: string | null;
  };
};
