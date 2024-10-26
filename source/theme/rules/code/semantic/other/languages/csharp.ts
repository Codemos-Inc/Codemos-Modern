import { ThemeContext } from "../../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  const styles = themeContext.styles;
  return {
    // >-----------------------------------------< C# >-----------------------------------------< //

    // Excluded codes
    excludedCode: styles.fill.text.disabled,
    // Control keywords
    controlKeyword: colors.scope08,
    // Overloaded operators
    operatorOverloaded: colors.scope02,
    // Overloaded operators
    whitespace: styles.fill.text.ghost,
    // Preprocessor texts
    preprocessorText: colors.scope16,
    // Punctuations
    punctuation: colors.scope17,
    // Verbatim strings
    stringVerbatim: colors.scope00,
    // Escape characters
    stringEscapeCharacter: colors.scope01,
    // Record classes
    recordClass: colors.scope03,
    // Delegates
    delegate: colors.scope03,
    // Modules
    module: colors.scope05,
    // Record structs
    recordStruct: colors.scope03,
    // Fields
    field: colors.scope11,
    // Constants
    constant: colors.scope10,
    // Extension methods
    extensionMethod: colors.scope02,

    // >---------------------------------------< RAZOR >----------------------------------------< //

    // Razor component elements
    razorComponentElement: colors.scope01, // Unknown
    // Razor component attributes
    razorComponentAttribute: colors.scope01, // Unknown
    // Razor tag helper elements
    razorTagHelperElement: colors.scope05,
    // Razor tag helper attributes
    razorTagHelperAttribute: colors.scope14,
    // Razor transitions
    razorTransition: colors.scope08,
    // Razor directive attributes
    razorDirectiveAttribute: colors.scope14,
    // Razor directive colons
    razorDirectiveColon: colors.scope08,
    // Razor razor directives
    razorDirective: colors.scope08,
    // Razor comments
    razorComment: colors.scope04,
    // Razor comment transitions
    razorCommentTransition: colors.scope04,
    // Razor comment stars
    razorCommentStar: colors.scope04,
    // Angle brackets
    angleBracket: colors.scope17,
    // Forward slashes
    forwardSlash: colors.scope17,
    // Equal signs
    equals: colors.scope17,

    // >---------------------------------------< REGEX >----------------------------------------< //

    // Comments
    regexComment: colors.scope04,
    // Character classes
    regexCharacterClass: colors.scope15,
    // Anchors
    regexAnchor: colors.scope14,
    // Quantifier
    regexQuantifier: colors.scope14,
    // Groups
    regexGrouping: colors.scope16,
    // Alternations
    regexAlternation: colors.scope16,
    // Texts
    regexText: colors.scope07,
    // Self escaped characters
    regexSelfEscapedCharacter: colors.scope01,
    // Other escaped characters
    regexOtherEscape: colors.scope01,

    // >---------------------------------------< MARKUP >---------------------------------------< //

    // Comment punctuations
    markupCommentPunctuation: colors.scope04,
    // Tag delimiters
    markupTagDelimiter: colors.scope17,
    // Operators
    markupOperator: colors.scope17,
    // Elements
    markupElement: colors.scope05,
    // Attributes
    markupAttribute: colors.scope14,
    // Attribute quotes
    markupAttributeQuote: colors.scope00,
    // Attribute values
    markupAttributeValue: colors.scope00,
    // Comments
    markupComment: colors.scope04,

    // >----------------------------------------< XML >-----------------------------------------< //

    // Doc comments attribute names
    xmlDocCommentAttributeName: colors.scope14,
    // Doc comments attribute quotes
    xmlDocCommentAttributeQuotes: colors.scope00,
    // Doc comments attribute values
    xmlDocCommentAttributeValue: colors.scope00,
    // Doc comments cdata sections
    xmlDocCommentCDataSection: colors.scope01,
    // Doc comments comments
    xmlDocCommentComment: colors.scope12,
    // Doc comments delimiters
    xmlDocCommentDelimiter: colors.scope04,
    // Doc comments entity references
    xmlDocCommentEntityReference: colors.scope15,
    // Doc comments names
    xmlDocCommentName: colors.scope05,
    // Doc comments processing instructions
    xmlDocCommentProcessingInstruction: colors.scope16,
    // Doc comments texts
    xmlDocCommentText: colors.scope05,
    // Literal attribute names
    xmlLiteralAttributeName: colors.scope14,
    // Literal attribute quotes
    xmlLiteralAttributeQuotes: colors.scope00,
    // Literal attribute values
    xmlLiteralAttributeValue: colors.scope00,
    // Literal cdata sections
    xmlLiteralCDataSection: colors.scope01,
    // Literal comments
    xmlLiteralComment: colors.scope12,
    // Literal delimiters
    xmlLiteralDelimiter: colors.scope04,
    // Literal embedded expressions
    xmlLiteralEmbeddedExpression: colors.scope09,
    // Literal entity references
    xmlLiteralEntityReference: colors.scope15,
    // Literal names
    xmlLiteralName: colors.scope05,
    // Literal processing instructions
    xmlLiteralProcessingInstruction: colors.scope16,
    // Literal texts
    xmlLiteralText: colors.scope05,

    // >----------------------------------------< JSON >----------------------------------------< //

    // Comments
    jsonComment: colors.scope04,
    // Number literals
    jsonNumber: colors.scope12,
    // String literals
    jsonString: colors.scope00,
    // Keywords
    jsonKeyword: colors.scope06,
    // Texts
    jsonText: colors.scope00,
    // Operators
    jsonOperator: colors.scope17,
    // Punctuations
    jsonPunctuation: colors.scope17,
    // Arrays
    jsonArray: colors.scope17,
    // Objects
    jsonObject: colors.scope17,
    // Property names
    jsonPropertyName: colors.scope14,
    // Constructor names
    jsonConstructorName: colors.scope17,
  };
};
