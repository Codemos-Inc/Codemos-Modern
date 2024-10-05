import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Types
    {
      scope: ["meta.embedded.block.sql storage.type", "source.sql storage.type"],
      settings: {
        foreground: colors.s03,
        fontStyle: "",
      },
    },
    // DML
    {
      scope: [
        "meta.embedded.block.sql keyword.other.create",
        "meta.embedded.block.sql keyword.other.DML",
        "source.sql keyword.other.create",
        "source.sql keyword.other.DML",
      ],
      settings: {
        foreground: colors.s08,
        fontStyle: "",
      },
    },
    // Star operator
    {
      scope: ["meta.embedded.block.sql keyword.operator.star", "source.sql keyword.operator.star"],
      settings: {
        foreground: colors.s12,
        fontStyle: "",
      },
    },
    // Other keywords
    {
      scope: [
        "meta.embedded.block.sql keyword.other.alias",
        "meta.embedded.block.sql keyword.other.data-integrity",
        "meta.embedded.block.sql keyword.other.DDL",
        "meta.embedded.block.sql keyword.other.order",
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
