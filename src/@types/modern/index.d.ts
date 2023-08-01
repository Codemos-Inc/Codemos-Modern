export type Variant = "dark" | "light";

export type AdaptiveMode = "none" | "gentle" | "aggressive";

export type Config = {
  auxiliaryThemeRegistries: string[];
  dark: {
    auxiliaryUiTheme: string | null;
    accentColor: string;
    adaptiveMode: AdaptiveMode;
    auxiliaryCodeTheme: string | null;
  };
  light: {
    auxiliaryUiTheme: string | null;
    accentColor: string;
    adaptiveMode: AdaptiveMode;
    auxiliaryCodeTheme: string | null;
  };
};
