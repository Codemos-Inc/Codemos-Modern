import { Variant } from "../modern/index";
import { Styles, VariantConfig } from "../modern/variant/index";

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
  auxiliaryUiThemeObject: any | null;
  auxiliaryCodeThemeObject: any | null;
};
