import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  const styles = themeContext.styles;
  return {
    // >-----------------------------------------< C# >-----------------------------------------< //

    // Excluded codes
    excludedCode: styles.fill.text.disabled,
    // Control keywords
    controlKeyword: colors.s08,
    // Overloaded operators
    operatorOverloaded: colors.s02,
    // Overloaded operators
    whitspace: styles.fill.text.ghost,
    // Preprocessor texts
    preprocessorText: colors.s16,
    // Punctuations
    punctuation: colors.sxx,
    // Verbatim strings
    stringVerbatim: colors.s00,
    // Escape characters
    stringEscapeCharacter: colors.s01,
    // Record classes
    recordClass: colors.s03,
    // Delegates
    delegate: colors.s03,
    // Modules
    module: colors.s05,
    // Record structs
    recordStruct: colors.s03,
    // Fields
    field: colors.s11,
    // Constants
    constant: colors.s10,
    // Extension methods
    extensionMethod: colors.s02,

    // >---------------------------------------< RAZOR >----------------------------------------< //

    // Razor component elements
    razorComponentElement: colors.s01, // Unknown
    // Razor component attributes
    razorComponentAttribute: colors.s01, // Unknown
    // Razor tag helper elements
    razorTagHelperElement: colors.s05,
    // Razor tag helper attributes
    razorTagHelperAttribute: colors.s14,
    // Razor transitions
    razorTransition: colors.s08,
    // Razor directive attributes
    razorDirectiveAttribute: colors.s14,
    // Razor directive colons
    razorDirectiveColon: colors.s08,
    // Razor razor directives
    razorDirective: colors.s08,
    // Razor comments
    razorComment: colors.s04,
    // Razor comment transitions
    razorCommentTransition: colors.s04,
    // Razor comment stars
    razorCommentStar: colors.s04,
    // Angle brackets
    angleBracket: colors.sxx,
    // Forward slashes
    forwardSlash: colors.sxx,
    // Equal signs
    equals: colors.sxx,

    // >---------------------------------------< REGEX >----------------------------------------< //

    // Comments
    regexComment: colors.s04,
    // Character classes
    regexCharacterClass: colors.s15,
    // Anchors
    regexAnchor: colors.s14,
    // Quantifier
    regexQuantifier: colors.s14,
    // Groups
    regexGrouping: colors.s16,
    // Alternations
    regexAlternation: colors.s16,
    // Texts
    regexText: colors.s07,
    // Self escaped characters
    regexSelfEscapedCharacter: colors.s01,
    // Other escaped characters
    regexOtherEscape: colors.s01,

    // >---------------------------------------< MARKUP >---------------------------------------< //

    // Comment punctuations
    markupCommentPunctuation: colors.s04,
    // Tag delimiters
    markupTagDelimiter: colors.sxx,
    // Operators
    markupOperator: colors.sxx,
    // Elements
    markupElement: colors.s05,
    // Attributes
    markupAttribute: colors.s14,
    // Attribute quotes
    markupAttributeQuote: colors.s00,
    // Attribute values
    markupAttributeValue: colors.s00,
    // Comments
    markupComment: colors.s04,

    // >----------------------------------------< XML >-----------------------------------------< //

    // Doc comments attribute names
    xmlDocCommentAttributeName: colors.s14,
    // Doc comments attribute quotes
    xmlDocCommentAttributeQuotes: colors.s00,
    // Doc comments attribute values
    xmlDocCommentAttributeValue: colors.s00,
    // Doc comments cdata sections
    xmlDocCommentCDataSection: colors.s01,
    // Doc comments comments
    xmlDocCommentComment: colors.s12,
    // Doc comments delimiters
    xmlDocCommentDelimiter: colors.s04,
    // Doc comments entity references
    xmlDocCommentEntityReference: colors.s15,
    // Doc comments names
    xmlDocCommentName: colors.s05,
    // Doc comments processing instructions
    xmlDocCommentProcessingInstruction: colors.s16,
    // Doc comments texts
    xmlDocCommentText: colors.s05,
    // Literal attribute names
    xmlLiteralAttributeName: colors.s14,
    // Literal attribute quotes
    xmlLiteralAttributeQuotes: colors.s00,
    // Literal attribute values
    xmlLiteralAttributeValue: colors.s00,
    // Literal cdata sections
    xmlLiteralCDataSection: colors.s01,
    // Literal comments
    xmlLiteralComment: colors.s12,
    // Literal delimiters
    xmlLiteralDelimiter: colors.s04,
    // Literal embedded expressions
    xmlLiteralEmbeddedExpression: colors.s09,
    // Literal entity references
    xmlLiteralEntityReference: colors.s15,
    // Literal names
    xmlLiteralName: colors.s05,
    // Literal processing instructions
    xmlLiteralProcessingInstruction: colors.s16,
    // Literal texts
    xmlLiteralText: colors.s05,

    // >----------------------------------------< JSON >----------------------------------------< //

    // Comments
    jsonComment: colors.s04,
    // Number literals
    jsonNumber: colors.s12,
    // String literals
    jsonString: colors.s00,
    // Keywords
    jsonKeyword: colors.s06,
    // Texts
    jsonText: colors.s00,
    // Operators
    jsonOperator: colors.sxx,
    // Punctuations
    jsonPunctuation: colors.sxx,
    // Arrays
    jsonArray: colors.sxx,
    // Objects
    jsonObject: colors.sxx,
    // Property names
    jsonPropertyName: colors.s14,
    // Constructor names
    jsonConstructorName: colors.sxx,
  };
};
