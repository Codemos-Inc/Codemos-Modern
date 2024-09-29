import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // >--------------------------------------< x86 x64 >---------------------------------------< //

    // Functions
    {
      scope: ["source.asm entity.name.function"],
      settings: {
        foreground: colors.s03,
        fontStyle: "",
      },
    },
    // Macros
    {
      scope: ["source.asm meta.preprocessor"],
      settings: {
        foreground: colors.s07,
        fontStyle: "",
      },
    },
    // Preprocessors
    {
      scope: ["source.asm meta.preprocessor keyword.control"],
      settings: {
        foreground: colors.s16,
        fontStyle: "",
      },
    },
    // Sections
    {
      scope: ["source.asm entity.name.section"],
      settings: {
        foreground: colors.s08,
        fontStyle: "",
      },
    },
    // Instructions
    {
      scope: ["source.asm keyword.operator.word"],
      settings: {
        foreground: colors.s02,
        fontStyle: "",
      },
    },
    // Control keywords
    {
      scope: ["source.asm keyword.operator.word.mnemonic.general-purpose.control-transfer"],
      settings: {
        foreground: colors.s08,
        fontStyle: "",
      },
    },
    // Keywords
    {
      scope: ["source.asm entity.directive"],
      settings: {
        foreground: colors.s06,
        fontStyle: "",
      },
    },

    // >----------------------------------------< ARM >-----------------------------------------< //
    // Memory addresses
    {
      scope: ["source.arm storage.memaddress"],
      settings: {
        foreground: colors.s14,
        fontStyle: "",
      },
    },
    // Routines
    {
      scope: ["source.arm routine"],
      settings: {
        foreground: colors.s03,
        fontStyle: "",
      },
    },
  ];
};
