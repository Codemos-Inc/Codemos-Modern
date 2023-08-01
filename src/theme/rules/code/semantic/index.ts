import { ThemeContext } from "../../../../@types";

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
    variable: { foreground: colors.basic.alt.orange.pri, underline: true },
    "variable.readonly": { underline: false },
    "variable.readonly.defaultLibrary": {
      foreground: colors.basic.alt.mint.pri,
    },
    property: { foreground: colors.basic.alt.yellow.pri, underline: true },
    "property.readonly": { underline: false },
    enumMember: colors.basic.alt.mint.pri,
    decorator: colors.basic.def.red.pri,
    annotation: colors.basic.def.red.pri,
    event: colors.basic.alt.red.pri,
    function: colors.basic.def.orange.pri,
    method: colors.basic.def.orange.pri,
    macro: colors.basic.alt.pink.pri,
    label: colors.basic.alt.pink.pri,
    comment: { foreground: colors.basic.def.green.pri, italic: true },
    string: colors.basic.def.brown.pri,
    keyword: colors.basic.def.pink.pri,
    modifier: colors.basic.def.blue.pri,
    number: colors.basic.alt.green.pri,
    regexp: colors.basic.def.purple.pri,
    operator: colors.fill.text.sec,
    "*.builtin": colors.basic.def.blue.pri,
    "*.static": { italic: true },
    "*.deprecated": { strikethrough: true },
    "*.abstract": { bold: true },
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
