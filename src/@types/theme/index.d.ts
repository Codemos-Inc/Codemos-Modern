import { Variant, type VariantConfig } from "../modern";
import type { Styles } from "../modern/variant";

export type ThemePaths = {
  dark: string;
  light: string;
};

export type Decoration = "strikeThrough" | "bold" | "italic" | "underline";

export type TextDecorations = {
  strikeThrough: boolean;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  forComments: Decoration[];
};

export type ThemeContext = {
  textDecorations: TextDecorations;
  variant: Variant;
  variantConfig: VariantConfig;
  styles: Styles;
  auxUiThemeObj: any | null;
  auxCodeThemeObj: any | null;
};
