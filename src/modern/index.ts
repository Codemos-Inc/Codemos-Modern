import { Config } from "../@types/index";

export const defaultConfig: Config = {
  auxiliaryThemeRegistries: ["Codemos-Inc/Auxiliary-Theme-Registry"],
  textDecorations: {
    strikeThrough: true,
    bold: true,
    italic: true,
    underline: true,
    forComments: ["italic"],
  },
  dark: {
    auxiliaryUiTheme: null,
    design: "modern",
    accentColor: "#CB8569",
    adaptiveMode: "none",
    auxiliaryCodeTheme: null,
  },
  light: {
    auxiliaryUiTheme: null,
    design: "modern",
    accentColor: "#784F3F",
    adaptiveMode: "none",
    auxiliaryCodeTheme: null,
  },
};
