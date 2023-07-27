export type Variant = "dark" | "light";

export type AdaptiveMode = "none" | "gentle" | "aggressive";

export type Config = {
  auxiliaryThemeRegistries: string[];
  dark: {
    accentColor: string;
    codeTheme: string | null;
    adaptiveMode: AdaptiveMode;
  };
  light: {
    accentColor: string;
    codeTheme: string | null;
    adaptiveMode: AdaptiveMode;
  };
};
