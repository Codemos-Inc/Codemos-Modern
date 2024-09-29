import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  return [
    // Timestamps
    {
      scope: ["source.yaml constant.other.timestamp"],
      settings: {
        foreground: colors.s15,
        fontStyle: "",
      },
    },
    // Pipelike operators
    {
      scope: ["source.yaml keyword.control.flow.block-scalar"],
      settings: {
        foreground: colors.s16,
        fontStyle: "",
      },
    },
    // Anchors
    {
      scope: ["source.yaml punctuation.definition.anchor", "source.yaml entity.name.type.anchor"],
      settings: {
        foreground: colors.s02,
        fontStyle: "",
      },
    },
    // Aliases
    {
      scope: ["source.yaml punctuation.definition.alias", "source.yaml entity.name.type.alias"],
      settings: {
        foreground: colors.s10,
        fontStyle: "",
      },
    },
    // Champing operators
    {
      scope: ["source.yaml storage.modifier.chomping-indicator"],
      settings: {
        foreground: colors.s08,
        fontStyle: "",
      },
    },
    // Documents
    {
      scope: ["source.yaml entity.other.document"],
      settings: {
        foreground: colors.s14,
        fontStyle: "",
      },
    },
  ];
};
