import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  const decorations = themeContext.textDecorations;
  return {
    // Angle punctuations
    angle: colors.sxx,
    // Arithmetic operators
    arithmetic: colors.sxx,
    // Attributes
    attribute: colors.s01,
    // Attributes brackets
    attributeBracket: colors.s01,
    // Bitwise operators
    bitwise: colors.sxx,
    // Boolean literals
    boolean: colors.s06,
    // Braces
    brace: colors.sxx,
    // Brackets
    bracket: colors.sxx,
    // Builtin attributes
    builtinAttribute: colors.s01,
    // Builtin types
    builtinType: colors.s06,
    // Character literals
    character: colors.s00,
    // Colons
    colon: colors.sxx,
    // Commas
    comma: colors.sxx,
    // Comparison operators
    comparison: colors.sxx,
    // Const generics
    constParameter: colors.s13,
    // Consts
    const: colors.s10,
    // Derives
    derive: colors.s03,
    // Derive helpers
    deriveHelper: colors.s03,
    // Dots
    dot: colors.sxx,
    // Escape sequences
    escapeSequence: colors.s01,
    // Format specifiers
    formatSpecifier: colors.s14,
    // Invalid escape sequences
    invalidEscapeSequence: {
      foreground: colors.s01,
      strikethrough: decorations.strikeThrough,
    },
    // Labels
    label: colors.s16,
    // Lifetimes
    lifetime: colors.s01,
    // Logical operators
    logical: colors.sxx,
    // Macro bang punctuations
    macroBang: colors.s07,
    // Parenthesis
    parenthesis: colors.sxx,
    // Procedural macros
    procMacro: colors.s07,
    // Punctuations
    punctuation: colors.sxx,
    // Parenthesis inside attributes
    "punctuation.attribute": colors.s01,
    // Self keywords
    selfKeyword: colors.s03,
    // Self type keywords
    selfTypeKeywords: colors.s03,
    // Semicolons
    semicolon: colors.sxx,
    // Statics
    static: {
      italic: decorations.italic,
    },
    // Tool module attributes
    toolModule: colors.s01,
    // Type aliases
    typeAlias: colors.s03,
    // Unions
    union: colors.s03,
    // Unresolved references
    unresolvedReference: colors.s01,
    // Control keywords
    "keyword.controlFlow": colors.s08,
    // Unsafe keywords
    "keyword.unsafe": colors.s01,
    // Mutables
    "*.mutable": {
      underline: decorations.underline,
    },
    // Attribute generics
    "generic.attribute": colors.s09,
  };
};
