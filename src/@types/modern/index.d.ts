export type Variant = "dark" | "light";

export type AdaptiveMode = "none" | "gentle" | "aggressive";

export type Config = {
  dark: {
    accentColor: string;
    adaptiveMode: AdaptiveMode;
  };
  light: {
    accentColor: string;
    adaptiveMode: AdaptiveMode;
  };
};
