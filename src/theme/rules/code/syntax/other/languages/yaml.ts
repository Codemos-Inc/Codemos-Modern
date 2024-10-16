import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Timestamps
    {
      scope: [
        "meta.embedded.block.yaml constant.other.timestamp",
        "source.yaml constant.other.timestamp",
      ],
      settings: {
        foreground: colors.s15,
        fontStyle: "",
      },
    },
    // Pipe-like operators
    {
      scope: [
        "meta.embedded.block.yaml keyword.control.flow.block-scalar",
        "source.yaml keyword.control.flow.block-scalar",
      ],
      settings: {
        foreground: colors.s16,
        fontStyle: "",
      },
    },
    // Anchors
    {
      scope: [
        "meta.embedded.block.yaml punctuation.definition.anchor",
        "meta.embedded.block.yaml entity.name.type.anchor",
        "source.yaml punctuation.definition.anchor",
        "source.yaml entity.name.type.anchor",
      ],
      settings: {
        foreground: colors.s02,
        fontStyle: "",
      },
    },
    // Aliases
    {
      scope: [
        "meta.embedded.block.yaml punctuation.definition.alias",
        "meta.embedded.block.yaml entity.name.type.alias",
        "source.yaml punctuation.definition.alias",
        "source.yaml entity.name.type.alias",
      ],
      settings: {
        foreground: colors.s10,
        fontStyle: "",
      },
    },
    // Champing operators
    {
      scope: [
        "meta.embedded.block.yaml storage.modifier.chomping-indicator",
        "source.yaml storage.modifier.chomping-indicator",
      ],
      settings: {
        foreground: colors.s08,
        fontStyle: "",
      },
    },
    // Documents
    {
      scope: [
        "meta.embedded.block.yaml entity.other.document",
        "source.yaml entity.other.document",
      ],
      settings: {
        foreground: colors.s14,
        fontStyle: "",
      },
    },
  ];
};
