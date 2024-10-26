import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  const decorations = themeContext.textDecorations;
  return {
    // Angle punctuations
    angle: colors.scope17,
    // Arithmetic operators
    arithmetic: colors.scope17,
    // Attributes
    attribute: colors.scope01,
    // Attributes brackets
    attributeBracket: colors.scope01,
    // Bitwise operators
    bitwise: colors.scope17,
    // Boolean literals
    boolean: colors.scope06,
    // Braces
    brace: colors.scope17,
    // Brackets
    bracket: colors.scope17,
    // Builtin attributes
    builtinAttribute: colors.scope01,
    // Builtin types
    builtinType: colors.scope06,
    // Character literals
    character: colors.scope00,
    // Colons
    colon: colors.scope17,
    // Commas
    comma: colors.scope17,
    // Comparison operators
    comparison: colors.scope17,
    // Const generics
    constParameter: colors.scope13,
    // Consts
    const: colors.scope10,
    // Derives
    derive: colors.scope03,
    // Derive helpers
    deriveHelper: colors.scope03,
    // Dots
    dot: colors.scope17,
    // Escape sequences
    escapeSequence: colors.scope01,
    // Format specifiers
    formatSpecifier: colors.scope14,
    // Invalid escape sequences
    invalidEscapeSequence: {
      foreground: colors.scope01,
      strikethrough: decorations.strikeThrough,
    },
    // Labels
    label: colors.scope16,
    // Lifetimes
    lifetime: colors.scope01,
    // Logical operators
    logical: colors.scope17,
    // Macro bang punctuations
    macroBang: colors.scope07,
    // Parenthesis
    parenthesis: colors.scope17,
    // Procedural macros
    procMacro: colors.scope07,
    // Punctuations
    punctuation: colors.scope17,
    // Parenthesis inside attributes
    "punctuation.attribute": colors.scope01,
    // Self keywords
    selfKeyword: colors.scope03,
    // Self type keywords
    selfTypeKeywords: colors.scope03,
    // Semicolons
    semicolon: colors.scope17,
    // Statics
    static: {
      italic: decorations.italic,
    },
    // Tool module attributes
    toolModule: colors.scope01,
    // Type aliases
    typeAlias: colors.scope03,
    // Unions
    union: colors.scope03,
    // Unresolved references
    unresolvedReference: colors.scope01,
    // Control keywords
    "keyword.controlFlow": colors.scope08,
    // Unsafe keywords
    "keyword.unsafe": colors.scope01,
    // Mutables
    "*.mutable": {
      underline: decorations.underline,
    },
    // Attribute generics
    "generic.attribute": colors.scope09,
  };
};
