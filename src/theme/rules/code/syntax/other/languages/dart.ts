import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Strings
    {
      scope: ["meta.embedded.block.dart string.interpolated", "source.dart string.interpolated"],
      settings: {
        foreground: colors.scope00,
        fontStyle: "",
      },
    },
    // Interpolated strings
    {
      scope: [
        "meta.embedded.block.dart string.interpolated meta.embedded.expression",
        "source.dart string.interpolated meta.embedded.expression",
      ],
      settings: {
        foreground: colors.scope14,
        fontStyle: "",
      },
    },
  ];
};
