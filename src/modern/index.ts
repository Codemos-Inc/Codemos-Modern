import { Config } from "../@types";

export const defaultConfig: Config = {
  auxiliaryThemeRegistries: ["Codemos-Inc/Auxiliary-Theme-Registry"],
  textDecorations: {
    strikeThrough: true,
    bold: true,
    italic: true,
    underline: false,
    forComments: ["italic"],
  },
  dark: {
    auxiliaryUiTheme: null,
    design: "modern",
    accentColor: "#CB8569",
    adaptationColor: "#CB8569",
    adaptationIntensity: 0,
    auxiliaryCodeTheme: null,
  },
  light: {
    auxiliaryUiTheme: null,
    design: "modern",
    accentColor: "#784F3F",
    adaptationColor: "#784F3F",
    adaptationIntensity: 0,
    auxiliaryCodeTheme: null,
  },
};
