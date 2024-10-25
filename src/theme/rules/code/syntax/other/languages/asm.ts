import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // >--------------------------------------< x86 x64 >---------------------------------------< //

    // Functions
    {
      scope: ["source.asm entity.name.function"],
      settings: {
        foreground: colors.scope03,
        fontStyle: "",
      },
    },
    // Macros
    {
      scope: ["source.asm meta.preprocessor"],
      settings: {
        foreground: colors.scope07,
        fontStyle: "",
      },
    },
    // Preprocessors
    {
      scope: ["source.asm meta.preprocessor keyword.control"],
      settings: {
        foreground: colors.scope16,
        fontStyle: "",
      },
    },
    // Sections
    {
      scope: ["source.asm entity.name.section"],
      settings: {
        foreground: colors.scope08,
        fontStyle: "",
      },
    },
    // Instructions
    {
      scope: ["source.asm keyword.operator.word"],
      settings: {
        foreground: colors.scope02,
        fontStyle: "",
      },
    },
    // Control keywords
    {
      scope: ["source.asm keyword.operator.word.mnemonic.general-purpose.control-transfer"],
      settings: {
        foreground: colors.scope08,
        fontStyle: "",
      },
    },
    // Keywords
    {
      scope: ["source.asm entity.directive"],
      settings: {
        foreground: colors.scope06,
        fontStyle: "",
      },
    },

    // >----------------------------------------< ARM >-----------------------------------------< //
    // Memory addresses
    {
      scope: ["source.arm storage.memaddress"],
      settings: {
        foreground: colors.scope14,
        fontStyle: "",
      },
    },
    // Routines
    {
      scope: ["source.arm routine"],
      settings: {
        foreground: colors.scope03,
        fontStyle: "",
      },
    },
  ];
};
