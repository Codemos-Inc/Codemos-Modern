import { ThemeContext } from "../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  return {
    ...getDefaultRules(themeContext),
    ...getExtraRules(themeContext),
  };
};

const getDefaultRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    namespace: styles.fill.text.sec,
    module: styles.fill.text.sec,
    class: styles.basic.def.yellow.pri,
    enum: styles.basic.def.mint.pri,
    interface: styles.basic.def.mint.pri,
    struct: styles.basic.def.yellow.pri,
    typeParameter: styles.basic.alt.mint.pri,
    type: styles.basic.def.mint.pri,
    parameter: styles.basic.alt.orange.pri,
    variable: {
      foreground: styles.basic.alt.orange.pri,
      underline: themeContext.textDecorations.underline,
    },
    "variable.readonly": { underline: false },
    "variable.readonly.defaultLibrary": {
      foreground: styles.basic.alt.mint.pri,
    },
    property: {
      foreground: styles.basic.alt.yellow.pri,
      underline: themeContext.textDecorations.underline,
    },
    "property.readonly": { underline: false },
    "property.annotation": {
      foreground: styles.basic.def.red.pri,
      underline: false,
    },
    enumMember: styles.basic.alt.mint.pri,
    decorator: styles.basic.def.red.pri,
    annotation: {
      foreground: styles.basic.def.red.pri,
      underline: false,
    },
    event: styles.basic.alt.red.pri,
    function: styles.basic.def.orange.pri,
    method: styles.basic.def.orange.pri,
    macro: styles.basic.def.purple.pri,
    label: styles.basic.alt.pink.pri,
    comment: {
      foreground: styles.basic.def.green.pri,
      strikethrough: themeContext.textDecorations.forComments.includes("strikeThrough"),
      bold: themeContext.textDecorations.forComments.includes("bold"),
      italic: themeContext.textDecorations.forComments.includes("italic"),
      underline: themeContext.textDecorations.forComments.includes("underline"),
    },
    string: styles.basic.def.brown.pri,
    keyword: styles.basic.def.pink.pri,
    modifier: styles.basic.def.blue.pri,
    number: styles.basic.alt.green.pri,
    regexp: styles.basic.alt.purple.pri,
    operator: styles.fill.text.sec,
    "*.builtin": styles.basic.def.blue.pri,
    "*.static": { italic: themeContext.textDecorations.italic },
    "*.deprecated": {
      strikethrough: themeContext.textDecorations.strikeThrough,
    },
    "*.abstract": { bold: themeContext.textDecorations.bold },
  };
};

const getExtraRules = (themeContext: ThemeContext): object => {
  const styles = themeContext.styles;
  return {
    customLiteral: styles.basic.alt.blue.pri,
    magicFunction: styles.basic.def.purple.pri,
    newOperator: styles.basic.def.red.pri,
    numberLiteral: styles.basic.alt.green.pri,
    plainKeyword: styles.basic.def.blue.pri,
    selfParameter: styles.basic.def.yellow.pri,
    stringLiteral: styles.basic.def.brown.pri,
  };
};
