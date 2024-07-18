import { ThemeContext } from "../../../../@types/index";

export const getRules = (themeContext: ThemeContext): object => {
  return {
    ...getDefaultRules(themeContext),
    ...getExtraRules(themeContext),
  };
};

const getDefaultRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    namespace: colors.fill.text.sec,
    module: colors.fill.text.sec,
    class: colors.basic.def.yellow.pri,
    enum: colors.basic.def.mint.pri,
    interface: colors.basic.def.mint.pri,
    struct: colors.basic.def.yellow.pri,
    typeParameter: colors.basic.alt.mint.pri,
    type: colors.basic.def.mint.pri,
    parameter: colors.basic.alt.orange.pri,
    variable: {
      foreground: colors.basic.alt.orange.pri,
      underline: themeContext.textDecorations.underline,
    },
    "variable.readonly": { underline: false },
    "variable.readonly.defaultLibrary": {
      foreground: colors.basic.alt.mint.pri,
    },
    property: {
      foreground: colors.basic.alt.yellow.pri,
      underline: themeContext.textDecorations.underline,
    },
    "property.readonly": { underline: false },
    "property.annotation": {
      foreground: colors.basic.def.red.pri,
      underline: false,
    },
    enumMember: colors.basic.alt.mint.pri,
    decorator: colors.basic.def.red.pri,
    annotation: {
      foreground: colors.basic.def.red.pri,
      underline: false,
    },
    event: colors.basic.alt.red.pri,
    function: colors.basic.def.orange.pri,
    method: colors.basic.def.orange.pri,
    macro: colors.basic.alt.pink.pri,
    label: colors.basic.alt.pink.pri,
    comment: {
      foreground: colors.basic.def.green.pri,
      strikethrough:
        themeContext.textDecorations.forComments.includes("strikeThrough"),
      bold: themeContext.textDecorations.forComments.includes("bold"),
      italic: themeContext.textDecorations.forComments.includes("italic"),
      underline: themeContext.textDecorations.forComments.includes("underline"),
    },
    string: colors.basic.def.brown.pri,
    keyword: colors.basic.def.pink.pri,
    modifier: colors.basic.def.blue.pri,
    number: colors.basic.alt.green.pri,
    regexp: colors.basic.def.purple.pri,
    operator: colors.fill.text.sec,
    "*.builtin": colors.basic.def.blue.pri,
    "*.static": { italic: themeContext.textDecorations.italic },
    "*.deprecated": {
      strikethrough: themeContext.textDecorations.strikeThrough,
    },
    "*.abstract": { bold: themeContext.textDecorations.bold },
  };
};

const getExtraRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    customLiteral: colors.basic.alt.blue.pri,
    magicFunction: colors.basic.def.purple.pri,
    newOperator: colors.basic.def.blue.pri,
    numberLiteral: colors.basic.alt.green.pri,
    plainKeyword: colors.basic.def.blue.pri,
    selfParameter: colors.basic.def.yellow.pri,
    stringLiteral: colors.basic.def.brown.pri,
  };
};
