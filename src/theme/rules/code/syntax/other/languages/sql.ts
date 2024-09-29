import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Types
    {
      scope: ["source.sql storage.type"],
      settings: {
        foreground: colors.s03,
        fontStyle: "",
      },
    },
    // DML
    {
      scope: ["source.sql keyword.other.create", "source.sql keyword.other.DML"],
      settings: {
        foreground: colors.s08,
        fontStyle: "",
      },
    },
    // Star operator
    {
      scope: ["source.sql keyword.operator.star"],
      settings: {
        foreground: colors.s12,
        fontStyle: "",
      },
    },
    // Other keywords
    {
      scope: [
        "source.sql keyword.other.alias",
        "source.sql keyword.other.data-integrity",
        "source.sql keyword.other.DDL",
        "source.sql keyword.other.order",
      ],
      settings: {
        foreground: colors.s05,
        fontStyle: "",
      },
    },
  ];
};
