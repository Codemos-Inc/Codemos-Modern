import { Variant } from "../modern";
import { Styles, VariantConfig } from "../modern/variant";

export type ThemePaths = {
  dark: string;
  light: string;
};

export type ThemeContext = {
  variantConfig: VariantConfig;
  variant: Variant;
  styles: Styles;
};
