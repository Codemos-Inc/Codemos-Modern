/* eslint-disable @typescript-eslint/naming-convention */
import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import * as darkColors from "./color/dark";
import * as lightColors from "./color/light";
import { AdaptiveMode, ColorMode } from "./extension";
import * as colorUtils from "./util/color";

export async function createTheme(
  accentHex: string,
  colorMode: ColorMode,
  adaptiveMode: AdaptiveMode
) {
  switch (colorMode) {
    case ColorMode.dark:
      darkColors.updateAccent(accentHex);
      if (adaptiveMode === AdaptiveMode.none) {
        darkColors.resetLVL1();
        darkColors.resetLVL2();
        darkColors.resetLVL3();
        darkColors.resetLVL4();
        darkColors.resetLVL5();
      } else {
        adaptTheme(accentHex, colorMode, adaptiveMode);
      }
      await applyTheme(darkColors, true);
      break;
    case ColorMode.light:
      lightColors.updateAccent(accentHex);
      if (adaptiveMode === AdaptiveMode.none) {
        lightColors.resetLVL1();
        lightColors.resetLVL2();
        lightColors.resetLVL3();
        lightColors.resetLVL4();
        lightColors.resetLVL5();
      } else {
        adaptTheme(accentHex, colorMode, adaptiveMode);
      }
      await applyTheme(lightColors, false);
      break;
    default:
      break;
  }
}

function adaptTheme(
  accentHex: string,
  colorMode: ColorMode,
  adaptiveMode: AdaptiveMode
) {
  switch (colorMode) {
    case ColorMode.dark:
      switch (adaptiveMode) {
        case AdaptiveMode.gentle:
          darkColors.updateLVL1(
            colorUtils.contrastBalancer(
              accentHex,
              darkColors.LVL1_GENTLE,
              darkColors.LVL1_DEF,
              true
            )
          );
          darkColors.updateLVL2(
            colorUtils.contrastBalancer(
              accentHex,
              darkColors.LVL2_GENTLE,
              darkColors.LVL2_DEF,
              true
            )
          );
          darkColors.updateLVL3(
            colorUtils.contrastBalancer(
              accentHex,
              darkColors.LVL3_GENTLE,
              darkColors.LVL3_DEF,
              true
            )
          );
          darkColors.updateLVL4(
            colorUtils.contrastBalancer(
              accentHex,
              darkColors.LVL4_GENTLE,
              darkColors.LVL4_DEF,
              true
            )
          );
          darkColors.updateLVL5(
            colorUtils.contrastBalancer(
              accentHex,
              darkColors.LVL5_GENTLE,
              darkColors.LVL5_DEF,
              true
            )
          );
          break;
        case AdaptiveMode.aggressive:
          darkColors.updateLVL1(
            colorUtils.contrastBalancer(
              accentHex,
              darkColors.LVL1_AGGRESSIVE,
              darkColors.LVL1_DEF,
              true
            )
          );
          darkColors.updateLVL2(
            colorUtils.contrastBalancer(
              accentHex,
              darkColors.LVL2_AGGRESSIVE,
              darkColors.LVL2_DEF,
              true
            )
          );
          darkColors.updateLVL3(
            colorUtils.contrastBalancer(
              accentHex,
              darkColors.LVL3_AGGRESSIVE,
              darkColors.LVL3_DEF,
              true
            )
          );
          darkColors.updateLVL4(
            colorUtils.contrastBalancer(
              accentHex,
              darkColors.LVL4_AGGRESSIVE,
              darkColors.LVL4_DEF,
              true
            )
          );
          darkColors.updateLVL5(
            colorUtils.contrastBalancer(
              accentHex,
              darkColors.LVL5_AGGRESSIVE,
              darkColors.LVL5_DEF,
              true
            )
          );
          break;
        default:
          break;
      }
      break;
    case ColorMode.light:
      switch (adaptiveMode) {
        case AdaptiveMode.gentle:
          lightColors.updateLVL1(
            colorUtils.contrastBalancer(
              accentHex,
              lightColors.LVL1_GENTLE,
              lightColors.LVL1_DEF,
              false
            )
          );
          lightColors.updateLVL2(
            colorUtils.contrastBalancer(
              accentHex,
              lightColors.LVL2_GENTLE,
              lightColors.LVL2_DEF,
              false
            )
          );
          lightColors.updateLVL3(
            colorUtils.contrastBalancer(
              accentHex,
              lightColors.LVL3_GENTLE,
              lightColors.LVL3_DEF,
              false
            )
          );
          lightColors.updateLVL4(
            colorUtils.contrastBalancer(
              accentHex,
              lightColors.LVL4_GENTLE,
              lightColors.LVL4_DEF,
              false
            )
          );
          lightColors.updateLVL5(
            colorUtils.contrastBalancer(
              accentHex,
              lightColors.LVL5_GENTLE,
              lightColors.LVL5_DEF,
              false
            )
          );
          break;
        case AdaptiveMode.aggressive:
          lightColors.updateLVL1(
            colorUtils.contrastBalancer(
              accentHex,
              lightColors.LVL1_AGGRESSIVE,
              lightColors.LVL1_DEF,
              false
            )
          );
          lightColors.updateLVL2(
            colorUtils.contrastBalancer(
              accentHex,
              lightColors.LVL2_AGGRESSIVE,
              lightColors.LVL2_DEF,
              false
            )
          );
          lightColors.updateLVL3(
            colorUtils.contrastBalancer(
              accentHex,
              lightColors.LVL3_AGGRESSIVE,
              lightColors.LVL3_DEF,
              false
            )
          );
          lightColors.updateLVL4(
            colorUtils.contrastBalancer(
              accentHex,
              lightColors.LVL4_AGGRESSIVE,
              lightColors.LVL4_DEF,
              false
            )
          );
          lightColors.updateLVL5(
            colorUtils.contrastBalancer(
              accentHex,
              lightColors.LVL5_AGGRESSIVE,
              lightColors.LVL5_DEF,
              false
            )
          );
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
}

async function applyTheme(
  colors: typeof darkColors | typeof lightColors,
  isDarkMode: boolean
) {
  const themeObject = {
    $schema: "vscode://schemas/color-theme",
    semanticHighlighting: true,
    semanticTokenColors: {
      // GENERAL SEMANTIC TOKENS
      // namespace: For identifiers that declare or reference a namespace, module, or package.
      namespace: colors.FILL_TEXT.sec,
      // module
      module: colors.FILL_TEXT.sec,
      // class: For identifiers that declare or reference a class type.
      class: colors.BASIC_DEF_YELLOW.pri,
      // enum: For identifiers that declare or reference an enumeration type.
      enum: colors.BASIC_DEF_MINT.pri,
      // interface: For identifiers that declare or reference an interface type.
      interface: colors.BASIC_DEF_MINT.pri,
      // struct: For identifiers that declare or reference a struct type.
      struct: colors.BASIC_DEF_YELLOW.pri,
      // typeParameter: For identifiers that declare or reference a type parameter (generics).
      typeParameter: colors.BASIC_ALT_MINT.pri,
      // type: For identifiers that declare or reference a type that is not covered above.
      type: colors.BASIC_DEF_MINT.pri,
      // parameter: For identifiers that declare or reference function or method parameters.
      parameter: colors.BASIC_ALT_ORANGE.pri,
      // variable: For identifiers that declare or reference a local or global variable.
      variable: { foreground: colors.BASIC_ALT_ORANGE.pri, underline: true },
      "variable.readonly": { underline: false },
      // property: For identifiers that declare or reference a member property, member field, or member variable.
      property: { foreground: colors.BASIC_ALT_YELLOW.pri, underline: true },
      "property.readonly": { underline: false },
      // enumMember: For identifiers that declare or reference an enumeration property, constant, or member.
      enumMember: colors.BASIC_ALT_MINT.pri,
      // decorator: For identifiers that declare or reference decorators and annotations.
      decorator: colors.BASIC_DEF_RED.pri,
      // annotation: For identifiers that declare or reference decorators and annotations.
      annotation: colors.BASIC_DEF_RED.pri,
      // event: For identifiers that declare an event property.
      event: colors.BASIC_ALT_RED.pri,
      // function: For identifiers that declare a function.
      function: colors.BASIC_DEF_ORANGE.pri,
      // method: For identifiers that declare a method.
      method: colors.BASIC_DEF_ORANGE.pri,
      // macro: For identifiers that declare a macro.
      macro: colors.BASIC_ALT_PINK.pri,
      // label: For identifiers that declare a label.
      label: colors.BASIC_ALT_PINK.pri,
      // comment: For tokens that represent a comment.
      comment: { foreground: colors.BASIC_DEF_GREEN.pri, italic: true },
      // string: For tokens that represent a string literal.
      string: colors.BASIC_DEF_BROWN.pri,
      // keyword: For tokens that represent a language keyword.
      keyword: colors.BASIC_DEF_PINK.pri,
      // modifier: Style for modifier keywords
      modifier: colors.BASIC_DEF_BLUE.pri,
      // plainKeyword
      plainKeyword: colors.BASIC_DEF_BLUE.pri,
      // number: For tokens that represent a number literal.
      number: colors.BASIC_ALT_GREEN.pri,
      // regexp: For tokens that represent a regular expression literal.
      regexp: colors.BASIC_DEF_PURPLE.pri,
      // operator: For tokens that represent an operator.
      operator: colors.FILL_TEXT.sec,
      // builtin: For symbols that are part of the language.
      "*.builtin": colors.BASIC_DEF_BLUE.pri,
      // static: For class members (static members).
      "*.static": { italic: true },
      // deprecated: For symbols that should no longer be used.
      "*.deprecated": { strikethrough: true },
      // abstract: For types and member functions that are abstract.
      "*.abstract": { bold: true },
      // OTHER SEMANTIC TOKENS
      newOperator: colors.BASIC_DEF_BLUE.pri,
      stringLiteral: colors.BASIC_DEF_BROWN.pri,
      customLiteral: colors.BASIC_ALT_BLUE.pri,
      numberLiteral: colors.BASIC_ALT_GREEN.pri,
      selfParameter: colors.BASIC_DEF_YELLOW.pri,
      magicFunction: colors.BASIC_DEF_PURPLE.pri,
    },
    tokenColors: [
      // GENERAL TEXTMATE TOKENS

      // namespace, module, package
      {
        scope: [
          "entity.name.type.namespace",
          "entity.name.namespace",
          "entity.name.type.module",
          "entity.name.module",
          "entity.name.type.package",
          "entity.name.package",
          "storage.modifier.import",
          "storage.modifier.package",
          "variable.language.wildcard.java",
          "entity.name.scope-resolution",
        ],
        settings: {
          foreground: colors.FILL_TEXT.sec,
          fontStyle: "",
        },
      },
      // class
      {
        scope: [
          "entity.name.type.class",
          "entity.other.inherited-class",
          "meta.definition.class.inherited.classes",
          "entity.other.attribute-name.class",
        ],
        settings: {
          foreground: colors.BASIC_DEF_YELLOW.pri,
          fontStyle: "",
        },
      },
      // enum
      {
        scope: ["entity.name.type.enum"],
        settings: {
          foreground: colors.BASIC_DEF_MINT.pri,
          fontStyle: "",
        },
      },
      // interface
      {
        scope: [
          "entity.name.type.interface",
          "meta.definition.class.implemented.interfaces",
        ],
        settings: {
          foreground: colors.BASIC_DEF_MINT.pri,
          fontStyle: "",
        },
      },
      // struct
      {
        scope: ["entity.name.type.struct", "storage.type.struct"],
        settings: {
          foreground: colors.BASIC_DEF_MINT.pri,
          fontStyle: "",
        },
      },
      // typeParameter
      {
        scope: ["storage.type.generic"],
        settings: {
          foreground: colors.BASIC_ALT_MINT.pri,
          fontStyle: "",
        },
      },
      // type
      {
        scope: [
          "entity.name.type",
          "entity.name.tag",
          "keyword.operator.less",
          "support.type",
        ],
        settings: {
          foreground: colors.BASIC_DEF_MINT.pri,
          fontStyle: "",
        },
      },
      {
        scope: ["storage.type"],
        settings: {
          foreground: colors.BASIC_DEF_BLUE.pri,
          fontStyle: "",
        },
      },
      // parameter
      {
        scope: ["variable.parameter"],
        settings: {
          foreground: colors.BASIC_ALT_ORANGE.pri,
          fontStyle: "",
        },
      },
      // variable
      {
        scope: [
          "variable",
          "meta.method variable",
          "meta.function variable",
          "meta.block variable",
          "entity.name.variable",
          "variable.other.readwrite",
        ],
        settings: {
          foreground: colors.BASIC_ALT_ORANGE.pri,
          fontStyle: "underline",
        },
      },
      // variable.readonly
      {
        scope: [
          "variable.other.constant",
          "meta.method variable.other.constant",
          "meta.function variable.other.constant",
          "meta.block variable.other.constant",
          "entity.name.variable.constant",
        ],
        settings: {
          foreground: colors.BASIC_ALT_ORANGE.pri,
          fontStyle: "",
        },
      },
      // property
      {
        scope: [
          "variable.other.property",
          "meta.class variable",
          "meta.interface variable",
          "entity.name.variable.property",
          "entity.name.variable.field",
          "meta.attribute.python",
        ],
        settings: {
          foreground: colors.BASIC_ALT_YELLOW.pri,
          fontStyle: "underline",
        },
      },
      // property.readonly
      {
        scope: [
          "variable.other.constant.property",
          "meta.class variable.other.constant",
          "meta.interface variable.other.constant",
          "entity.name.variable.field.constant",
          "entity.name.variable.property.constant",
          "meta.attribute.constant.python",
        ],
        settings: {
          foreground: colors.BASIC_ALT_YELLOW.pri,
          fontStyle: "",
        },
      },
      // enumMember
      {
        scope: [
          "variable.other.enummember",
          "constant.other.enum",
          "entity.name.variable.enum-member",
        ],
        settings: {
          foreground: colors.BASIC_ALT_MINT.pri,
          fontStyle: "",
        },
      },
      // decorator
      {
        scope: [
          "meta.decorator",
          "meta.function.decorator",
          "entity.name.function.decorator",
        ],
        settings: {
          foreground: colors.BASIC_DEF_RED.pri,
          fontStyle: "",
        },
      },
      // annotation
      {
        scope: [
          "entity.name.type.annotation",
          "meta.declaration.annotation",
          "storage.type.annotation",
          "entity.other.attribute",
          "meta.attribute",
          "support.attribute",
        ],
        settings: {
          foreground: colors.BASIC_DEF_RED.pri,
          fontStyle: "",
        },
      },
      // event
      {
        scope: ["keyword.other.event", "variable.other.event"],
        settings: {
          foreground: colors.BASIC_ALT_RED.pri,
          fontStyle: "",
        },
      },
      // function
      {
        scope: [
          "entity.name.function",
          "support.function",
          "support.constant.handlebars",
          "source.powershell variable.other.member",
          "entity.name.operator.custom-literal",
          "entity.other.attribute-name.parent-selector",
        ],
        settings: {
          foreground: colors.BASIC_DEF_ORANGE.pri,
          fontStyle: "",
        },
      },
      // method
      {
        scope: ["entity.name.method", "entity.name.function.member"],
        settings: {
          foreground: colors.BASIC_DEF_ORANGE.pri,
          fontStyle: "",
        },
      },
      // macro
      {
        scope: [
          "meta.preprocessor.macro",
          "keyword.preprocessor",
          "keyword.control.directive",
          "entity.name.function.macro",
          "entity.name.function.preprocessor",
          "meta.preprocessor punctuation",
        ],
        settings: {
          foreground: colors.BASIC_ALT_PINK.pri,
          fontStyle: "",
        },
      },
      // label
      {
        scope: ["entity.name.label"],
        settings: {
          foreground: colors.BASIC_ALT_PINK.pri,
          fontStyle: "",
        },
      },
      // comment
      {
        scope: ["comment"],
        settings: {
          foreground: colors.BASIC_DEF_GREEN.pri,
          fontStyle: "italic",
        },
      },
      // string
      {
        scope: [
          "string",
          "string.tag",
          "string.value",
          "meta.preprocessor.string",
          "meta.embedded.assembly",
        ],
        settings: {
          foreground: colors.BASIC_DEF_BROWN.pri,
          fontStyle: "",
        },
      },
      // string template
      {
        scope: [
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
          "punctuation.section.embedded",
          "meta.template.expression",
        ],
        settings: {
          foreground: colors.BASIC_ALT_BLUE.pri,
          fontStyle: "",
        },
      },
      // special string
      {
        scope: ["constant.character", "constant.other.unicode-range"],
        settings: {
          foreground: colors.BASIC_ALT_BLUE.pri,
          fontStyle: "",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: colors.BASIC_DEF_RED.pri,
          fontStyle: "",
        },
      },
      // keyword
      {
        scope: [
          "keyword",
          "storage.type.package",
          "storage.type.import",
          "keyword.operator.delete",
          "keyword.other.using",
          "keyword.other.operator",
          "entity.name.operator",
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php",
        ],
        settings: {
          foreground: colors.BASIC_DEF_PINK.pri,
          fontStyle: "",
        },
      },
      // modifier
      {
        scope: [
          "storage",
          "storage.modifier",
          "keyword.operator.expression",
          "keyword.operator.cast",
          "keyword.operator.sizeof",
          "keyword.operator.alignof",
          "keyword.operator.typeid",
          "keyword.operator.alignas",
          "keyword.operator.instanceof",
          "keyword.operator.logical.python",
          "keyword.operator.wordlike",
          "keyword.operator.noexcept",
          "keyword.other.var",
          "constant.language",
          "keyword.class",
          "keyword.struct",
          "keyword.interface",
          "keyword.function",
          "keyword.method",
          "keyword.const",
          "keyword.var",
          "keyword.other.rust",
          "keyword.other.fn",
          "support.constant.property-value",
          "keyword.operator.shape",
          "support.constant.font-name",
          "support.constant.media-type",
          "support.constant.media",
        ],
        settings: {
          foreground: colors.BASIC_DEF_BLUE.pri,
          fontStyle: "",
        },
      },
      // number
      {
        scope: [
          "constant.numeric",
          "keyword.operator.plus.exponent",
          "keyword.operator.minus.exponent",
          "keyword.other.unit",
          "meta.preprocessor.numeric",
          "source.css.less meta.property-value constant.numeric",
          "source.css.less meta.property-value keyword.other.unit",
          "constant.other.reference.link",
        ],
        settings: {
          foreground: colors.BASIC_ALT_GREEN.pri,
          fontStyle: "",
        },
      },
      // regexp
      {
        scope: ["string.regexp", "constant.regexp"],
        settings: {
          foreground: colors.BASIC_DEF_PURPLE.pri,
          fontStyle: "",
        },
      },
      {
        scope: [
          "punctuation.definition.group.regexp",
          "punctuation.definition.group.assertion.regexp",
          "punctuation.definition.character-class.regexp",
          "punctuation.character.set.begin.regexp",
          "punctuation.character.set.end.regexp",
          "keyword.operator.negation.regexp",
          "support.other.parenthesis.regexp",
        ],
        settings: {
          foreground: colors.BASIC_ALT_PURPLE.pri,
          fontStyle: "",
        },
      },
      {
        scope: [
          "constant.character.character-class.regexp",
          "constant.other.character-class.set.regexp",
          "constant.other.character-class.regexp",
          "constant.character.set.regexp",
        ],
        settings: {
          foreground: colors.BASIC_ALT_PINK.pri,
          fontStyle: "",
        },
      },
      {
        scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
        settings: {
          foreground: colors.BASIC_ALT_BLUE.pri,
          fontStyle: "",
        },
      },
      {
        scope: "keyword.operator.quantifier.regexp",
        settings: {
          foreground: colors.BASIC_ALT_GREEN.pri,
          fontStyle: "",
        },
      },
      // operator
      {
        scope: ["keyword.operator", "punctuation.separator.key-value"],
        settings: {
          foreground: colors.FILL_TEXT.sec,
          fontStyle: "",
        },
      },

      // OTHER TEXTMATE TOKENS

      // this, self, etc.
      {
        scope: [
          "variable.language",
          "variable.parameter.function.language.special",
          "keyword.other.this",
          "variable.language.this",
          "variable.language.super",
          "variable.language.special.self",
        ],
        settings: {
          foreground: colors.BASIC_DEF_YELLOW.pri,
          fontStyle: "",
        },
      },
      // primitive
      {
        scope: [
          "storage.type.primitive",
          "storage.type.built-in",
          "support.type.primitive",
          "support.type.built-in",
          "keyword.type",
        ],
        settings: {
          foreground: colors.BASIC_DEF_BLUE.pri,
          fontStyle: "",
        },
      },
      // new operator
      {
        scope: ["keyword.operator.new", "keyword.control.new"],
        settings: {
          foreground: colors.BASIC_DEF_BLUE.pri,
          fontStyle: "",
        },
      },
      // constant
      {
        scope: [
          "variable.other.constant",
          "constant.other.caps",
          "constant.other.php",
        ],
        settings: {
          foreground: colors.BASIC_ALT_MINT.pri,
          fontStyle: "",
        },
      },
      // color
      {
        scope: [
          "variable.other.color",
          "constant.other.color",
          "support.constant.color",
          "constant.other.rgb-value",
          "constant.other.color.rgb-value",
        ],
        settings: {
          foreground: colors.BASIC_DEF_BROWN.pri,
          fontStyle: "",
        },
      },
      // invalid
      {
        scope: ["invalid"],
        settings: {
          foreground: colors.BASIC_DEF_RED.pri,
          fontStyle: "",
        },
      },
      // id
      {
        scope: ["entity.other.attribute-name.id"],
        settings: {
          foreground: colors.BASIC_DEF_PURPLE.pri,
          fontStyle: "",
        },
      },
      // property-name, attribute-name
      {
        scope: [
          "support.type.property-name",
          "entity.other.attribute-name",
          "meta.property-value",
        ],
        settings: {
          foreground: colors.BASIC_ALT_BLUE.pri,
          fontStyle: "",
        },
      },
      // property-name-vendored
      {
        scope: ["support.type.vendored.property-name"],
        settings: {
          foreground: colors.BASIC_ALT_BLUE.pri,
          fontStyle: "underline",
        },
      },
      // pseudo-class
      {
        scope: ["entity.other.attribute-name.pseudo-class"],
        settings: {
          foreground: colors.BASIC_ALT_YELLOW.pri,
          fontStyle: "",
        },
      },
      // pseudo-element
      {
        scope: ["entity.other.attribute-name.pseudo-element"],
        settings: {
          foreground: colors.BASIC_ALT_PURPLE.pri,
          fontStyle: "",
        },
      },
      // other keyword
      {
        scope: [
          "entity.other.keyframe-offset",
          "entity.name.tag.reference",
          "meta.at-rule.keyframes",
          "entity.other.attribute-name.scss",
          "source.css.less constant.numeric",
          "source.css.less keyword.other.unit",
        ],
        settings: {
          foreground: colors.BASIC_ALT_PINK.pri,
          fontStyle: "",
        },
      },
      // markdown
      {
        scope: ["heading.1", "markup.heading.setext.1"],
        settings: {
          foreground: colors.BASIC_DEF_RED.pri,
          fontStyle: "",
        },
      },
      {
        scope: ["heading.2", "markup.heading.setext.2"],
        settings: {
          foreground: colors.BASIC_DEF_ORANGE.pri,
          fontStyle: "",
        },
      },
      {
        scope: ["heading.3"],
        settings: {
          foreground: colors.BASIC_DEF_YELLOW.pri,
          fontStyle: "",
        },
      },
      {
        scope: ["heading.4"],
        settings: {
          foreground: colors.BASIC_DEF_GREEN.pri,
          fontStyle: "",
        },
      },
      {
        scope: ["heading.5"],
        settings: {
          foreground: colors.BASIC_DEF_MINT.pri,
          fontStyle: "",
        },
      },
      {
        scope: ["heading.6"],
        settings: {
          foreground: colors.BASIC_DEF_BLUE.pri,
          fontStyle: "",
        },
      },
      {
        scope: ["emphasis", "markup.italic"],
        settings: {
          fontStyle: "italic",
        },
      },
      {
        scope: ["strong", "markup.bold"],
        settings: {
          fontStyle: "bold",
        },
      },
      {
        scope: ["deleted", "markup.strikethrough"],
        settings: {
          fontStyle: "strikethrough",
        },
      },
      {
        scope: ["markup.underline"],
        settings: {
          fontStyle: "underline",
        },
      },
      {
        scope: ["markup.underline.link"],
        settings: {
          foreground: colors.BASIC_ALT_BLUE.pri,
          fontStyle: "underline",
        },
      },
      {
        scope: [
          "string.other.link",
          "punctuation.definition.list.begin.markdown",
        ],
        settings: {
          foreground: colors.FILL_ACCENT_TEXT.pri,
          fontStyle: "",
        },
      },
      {
        scope: [
          "markup.fenced_code.block",
          "markup.inline.raw",
          "markup.raw.block",
        ],
        settings: {
          foreground: colors.BASIC_DEF_PINK.pri,
          fontStyle: "",
        },
      },
      {
        scope: ["punctuation.definition.quote.begin"],
        settings: {
          foreground: colors.BASIC_DEF_PURPLE.pri,
          fontStyle: "",
        },
      },
      {
        scope: ["punctuation.definition.tag"],
        settings: {
          foreground: colors.FILL_TEXT.sec,
          fontStyle: "",
        },
      },
      {
        scope: ["meta.separator"],
        settings: {
          foreground: colors.BASIC_DEF_BROWN.pri,
          fontStyle: "",
        },
      },
      {
        scope: "markup.inserted",
        settings: {
          foreground: colors.BASIC_DEF_GREEN.pri,
        },
      },
      {
        scope: "markup.deleted",
        settings: {
          foreground: colors.BASIC_DEF_RED.pri,
        },
      },
      {
        scope: "markup.changed",
        settings: {
          foreground: colors.BASIC_DEF_BLUE.pri,
        },
      },
      // magicFunction
      {
        scope: "support.function.magic.python",
        settings: {
          foreground: colors.BASIC_DEF_PURPLE.pri,
        },
      },
    ],
    colors: {
      // @{VSCODE: v1.79.0}
      // activityBar | @{VSCODE}
      "activityBar.activeBackground": colors.FILL_CONTROL.rest,
      "activityBar.activeBorder": colors.FILL_ACCENT.pri,
      "activityBar.activeFocusBorder": colors.BASIC_NEUTRAL.pri,
      "activityBar.background": colors.BG_SOLID.base,
      "activityBar.border": colors.STROKE_DIVIDER.default,
      "activityBar.dropBorder": colors.FILL_ACCENT.pri,
      "activityBar.foreground": colors.FILL_TEXT.pri,
      "activityBar.inactiveForeground": colors.FILL_TEXT.sec,
      "activityBarBadge.background": colors.FILL_ACCENT.pri,
      "activityBarBadge.foreground": colors.FILL_TEXT_ON_COLOR.pri,
      // badge | @{VSCODE}
      "badge.background": colors.FILL_ACCENT.pri,
      "badge.foreground": colors.FILL_TEXT_ON_COLOR.pri,
      // banner | @{VSCODE}
      "banner.background": colors.FILL_ACCENT.pri,
      "banner.foreground": colors.FILL_TEXT_ON_COLOR.pri,
      "banner.iconForeground": colors.FILL_TEXT_ON_COLOR.pri,
      // breadcrumb | @{VSCODE}
      "breadcrumb.activeSelectionForeground": colors.FILL_ACCENT_TEXT.pri,
      "breadcrumb.background": colors.BG_SOLID.base,
      "breadcrumb.focusForeground": colors.FILL_TEXT.pri,
      "breadcrumb.foreground": colors.FILL_TEXT.sec,
      // breadcrumbPicker | @{VSCODE}
      "breadcrumbPicker.background": colors.BG_SOLID.flyout,
      // button | @{VSCODE}
      "button.background": colors.FILL_ACCENT.pri,
      "button.border": colors.STROKE_CONTROL.default,
      "button.foreground": colors.FILL_TEXT_ON_COLOR.pri,
      "button.hoverBackground": colors.FILL_ACCENT.sec,
      "button.secondaryBackground": colors.FILL_CONTROL.rest,
      "button.secondaryForeground": colors.FILL_TEXT.pri,
      "button.secondaryHoverBackground": colors.FILL_CONTROL.hover,
      "button.separator": colors.FILL_TEXT_ON_COLOR.pri,
      // charts | @{VSCODE}
      "charts.blue": colors.BASIC_DEF_BLUE.pri,
      "charts.foreground": colors.FILL_TEXT_ON_COLOR.pri,
      "charts.green": colors.BASIC_DEF_GREEN.pri,
      "charts.lines": colors.STROKE_DIVIDER.default,
      "charts.orange": colors.BASIC_DEF_ORANGE.pri,
      "charts.purple": colors.BASIC_DEF_PURPLE.pri,
      "charts.red": colors.BASIC_DEF_RED.pri,
      "charts.yellow": colors.BASIC_DEF_YELLOW.pri,
      // chat | @{VSCODE}
      "chat.requestBackground": colors.FILL_CONTROL.rest,
      "chat.requestBorder": colors.STROKE_DIVIDER.default,
      // checkbox | @{VSCODE}
      "checkbox.background": colors.FILL_CONTROL.rest,
      "checkbox.border": colors.STROKE_CONTROL.default,
      "checkbox.foreground": colors.FILL_TEXT.pri,
      "checkbox.selectBackground": colors.FILL_CONTROL.rest,
      "checkbox.selectBorder": colors.STROKE_CONTROL.default,
      // commandCenter | @{VSCODE}
      "commandCenter.activeBackground": colors.FILL_CONTROL.hover,
      "commandCenter.activeBorder": colors.STROKE_CONTROL.default,
      "commandCenter.activeForeground": colors.FILL_TEXT.pri,
      "commandCenter.background": colors.FILL_CONTROL.rest,
      "commandCenter.border": colors.STROKE_CONTROL.default,
      "commandCenter.foreground": colors.FILL_TEXT.pri,
      "commandCenter.inactiveBorder": colors.STROKE_CONTROL.default,
      "commandCenter.inactiveForeground": colors.FILL_TEXT.sec,
      // commentsView | @{VSCODE}
      "commentsView.resolvedIcon": colors.FILL_TEXT.sec,
      "commentsView.unresolvedIcon": colors.BASIC_DEF_BLUE.pri,
      // contrast | @{VSCODE}
      contrastActiveBorder: colors.TRANSPARENT.value,
      contrastBorder: colors.TRANSPARENT.value,
      // debugConsole | @{VSCODE}
      "debugConsole.errorForeground": colors.BASIC_DEF_RED.pri,
      "debugConsole.infoForeground": colors.BASIC_DEF_BLUE.pri,
      "debugConsole.sourceForeground": colors.FILL_TEXT.pri,
      "debugConsole.warningForeground": colors.BASIC_DEF_ORANGE.pri,
      "debugConsoleInputIcon.foreground": colors.FILL_ACCENT.pri,
      // debugExceptionWidget | @{VSCODE}
      "debugExceptionWidget.background": colors.BASIC_LC_RED.pri,
      "debugExceptionWidget.border": colors.STROKE_SURFACE.flyout,
      // debugIcon | @{VSCODE}
      "debugIcon.breakpointCurrentStackframeForeground":
        colors.BASIC_DEF_YELLOW.pri,
      "debugIcon.breakpointDisabledForeground": colors.BASIC_NEUTRAL.qua,
      "debugIcon.breakpointForeground": colors.BASIC_DEF_RED.pri,
      "debugIcon.breakpointStackframeForeground": colors.BASIC_DEF_YELLOW.ter,
      "debugIcon.breakpointUnverifiedForeground": colors.BASIC_DEF_ORANGE.pri,
      "debugIcon.continueForeground": colors.BASIC_DEF_GREEN.pri,
      "debugIcon.disconnectForeground": colors.BASIC_DEF_RED.pri,
      "debugIcon.pauseForeground": colors.BASIC_DEF_YELLOW.pri,
      "debugIcon.restartForeground": colors.BASIC_DEF_GREEN.pri,
      "debugIcon.startForeground": colors.BASIC_DEF_GREEN.pri,
      "debugIcon.stepBackForeground": colors.BASIC_DEF_BLUE.pri,
      "debugIcon.stepIntoForeground": colors.BASIC_DEF_BLUE.pri,
      "debugIcon.stepOutForeground": colors.BASIC_DEF_BLUE.pri,
      "debugIcon.stepOverForeground": colors.BASIC_DEF_BLUE.pri,
      "debugIcon.stopForeground": colors.BASIC_DEF_RED.pri,
      // debugTokenExpression | @{VSCODE}
      "debugTokenExpression.boolean": colors.BASIC_DEF_BLUE.pri,
      "debugTokenExpression.error": colors.BASIC_DEF_RED.pri,
      "debugTokenExpression.name": colors.FILL_ACCENT_TEXT.pri,
      "debugTokenExpression.number": colors.BASIC_ALT_GREEN.pri,
      "debugTokenExpression.string": colors.BASIC_DEF_BROWN.pri,
      "debugTokenExpression.value": colors.BASIC_DEF_MINT.pri,
      // debugToolBar | @{VSCODE}
      "debugToolBar.background": colors.BG_SOLID.flyout,
      "debugToolBar.border": colors.STROKE_SURFACE.flyout,
      // debugView | @{VSCODE}
      "debugView.exceptionLabelBackground": colors.BASIC_DEF_RED.pri,
      "debugView.exceptionLabelForeground": colors.FILL_TEXT_ON_COLOR.pri,
      "debugView.stateLabelBackground": colors.FILL_CONTROL.subtle,
      "debugView.stateLabelForeground": colors.FILL_TEXT.pri,
      "debugView.valueChangedHighlight": colors.BASIC_ALT_BLUE.pri,
      // descriptionForeground | @{VSCODE}
      descriptionForeground: colors.FILL_TEXT.sec,
      // diffEditor | @{VSCODE} !{FUTURE}
      "diffEditor.border": colors.STROKE_DIVIDER.default,
      "diffEditor.diagonalFill": colors.STROKE_DIVIDER.default,
      "diffEditor.insertedLineBackground": colors.BASIC_DEF_GREEN.qui,
      "diffEditor.insertedTextBackground": colors.BASIC_DEF_GREEN.qua,
      "diffEditor.insertedTextBorder": colors.TRANSPARENT.value,
      "diffEditor.removedLineBackground": colors.BASIC_DEF_RED.qui,
      "diffEditor.removedTextBackground": colors.BASIC_DEF_RED.qua,
      "diffEditor.removedTextBorder": colors.TRANSPARENT.value,
      "diffEditor.unchangedRegionBackground": "#ff0000", // 🔴 Change to onCanvas
      // diffEditorGutter | @{VSCODE}
      "diffEditorGutter.insertedLineBackground": null,
      "diffEditorGutter.removedLineBackground": null,
      "diffEditorOverview.insertedForeground": colors.BASIC_DEF_GREEN.sec,
      "diffEditorOverview.removedForeground": colors.BASIC_DEF_RED.sec,
      // disabledForeground | @{VSCODE}
      disabledForeground: colors.FILL_TEXT.disabled,
      // dropdown | @{VSCODE}
      "dropdown.background": colors.FILL_CONTROL.rest,
      "dropdown.border": colors.STROKE_CONTROL.default,
      "dropdown.foreground": colors.FILL_TEXT.pri,
      "dropdown.listBackground": colors.BG_SOLID.flyout,
      // editor | @{VSCODE}
      "editor.background": colors.BG_SOLID.canvas,
      "editor.findMatchBackground": colors.BASIC_DEF_MINT.qua,
      "editor.findMatchBorder": colors.STROKE_CONTROL.default,
      "editor.findMatchHighlightBackground": colors.BASIC_DEF_MINT.qui,
      "editor.findMatchHighlightBorder": colors.STROKE_CONTROL.default,
      "editor.findRangeHighlightBackground": colors.BASIC_NEUTRAL.sep,
      "editor.findRangeHighlightBorder": null,
      "editor.focusedStackFrameHighlightBackground":
        colors.BASIC_DEF_YELLOW.qui,
      "editor.foldBackground": colors.BASIC_NEUTRAL.sep,
      "editor.foreground": colors.FILL_TEXT.sec,
      "editor.hoverHighlightBackground": colors.BASIC_NEUTRAL.sep,
      "editor.inactiveSelectionBackground": colors.BASIC_NEUTRAL.sep,
      "editor.inlineValuesBackground": colors.BASIC_DEF_YELLOW.qui,
      "editor.inlineValuesForeground": colors.BASIC_DEF_YELLOW.pri,
      "editor.lineHighlightBackground": null,
      "editor.lineHighlightBorder": colors.STROKE_CONTROL.default,
      "editor.linkedEditingBackground": colors.BASIC_DEF_BLUE.qua,
      "editor.rangeHighlightBackground": colors.BASIC_NEUTRAL.sep,
      "editor.rangeHighlightBorder": null,
      "editor.selectionBackground": colors.BASIC_NEUTRAL.sen,
      "editor.selectionForeground": colors.FILL_TEXT.pri,
      "editor.selectionHighlightBackground": colors.BASIC_NEUTRAL.sep,
      "editor.selectionHighlightBorder": colors.STROKE_CONTROL.default,
      "editor.snippetFinalTabstopHighlightBackground": null,
      "editor.snippetFinalTabstopHighlightBorder": colors.BASIC_DEF_BLUE.pri,
      "editor.snippetTabstopHighlightBackground": colors.BASIC_DEF_BLUE.qua,
      "editor.snippetTabstopHighlightBorder": colors.STROKE_CONTROL.default,
      "editor.stackFrameHighlightBackground": colors.BASIC_DEF_YELLOW.qua,
      "editor.symbolHighlightBackground": null,
      "editor.symbolHighlightBorder": colors.BASIC_DEF_PURPLE.pri,
      "editor.wordHighlightBackground": colors.BASIC_DEF_PINK.qua,
      "editor.wordHighlightBorder": colors.STROKE_CONTROL.default,
      "editor.wordHighlightStrongBackground": colors.BASIC_DEF_PURPLE.qua,
      "editor.wordHighlightStrongBorder": colors.STROKE_CONTROL.default,
      "editor.wordHighlightTextBackground": colors.BASIC_DEF_PINK.qua,
      "editor.wordHighlightTextBorder": colors.STROKE_CONTROL.default,
      // editorBracketHighlight | @{VSCODE}
      "editorBracketHighlight.foreground1": colors.BASIC_ALT_YELLOW.pri,
      "editorBracketHighlight.foreground2": colors.BASIC_ALT_ORANGE.pri,
      "editorBracketHighlight.foreground3": colors.BASIC_ALT_RED.pri,
      "editorBracketHighlight.foreground4": colors.BASIC_ALT_PURPLE.pri,
      "editorBracketHighlight.foreground5": colors.BASIC_ALT_BLUE.pri,
      "editorBracketHighlight.foreground6": colors.BASIC_ALT_GREEN.pri,
      "editorBracketHighlight.unexpectedBracket.foreground":
        colors.BASIC_DEF_RED.pri,
      // editorBracketMatch | @{VSCODE}
      "editorBracketMatch.background": colors.BASIC_DEF_BROWN.qua,
      "editorBracketMatch.border": colors.STROKE_CONTROL.default,
      // editorBracketPairGuide | @{VSCODE}
      "editorBracketPairGuide.activeBackground1": colors.BASIC_ALT_YELLOW.pri,
      "editorBracketPairGuide.activeBackground2": colors.BASIC_ALT_ORANGE.pri,
      "editorBracketPairGuide.activeBackground3": colors.BASIC_ALT_RED.pri,
      "editorBracketPairGuide.activeBackground4": colors.BASIC_ALT_PURPLE.pri,
      "editorBracketPairGuide.activeBackground5": colors.BASIC_ALT_BLUE.pri,
      "editorBracketPairGuide.activeBackground6": colors.BASIC_ALT_GREEN.pri,
      "editorBracketPairGuide.background1": colors.BASIC_ALT_YELLOW.ter,
      "editorBracketPairGuide.background2": colors.BASIC_ALT_ORANGE.ter,
      "editorBracketPairGuide.background3": colors.BASIC_ALT_RED.ter,
      "editorBracketPairGuide.background4": colors.BASIC_ALT_PURPLE.ter,
      "editorBracketPairGuide.background5": colors.BASIC_ALT_BLUE.ter,
      "editorBracketPairGuide.background6": colors.BASIC_ALT_GREEN.ter,
      // editorCodeLens | @{VSCODE}
      "editorCodeLens.foreground": colors.FILL_TEXT.disabled,
      // editorCommentsWidget | @{VSCODE}
      "editorCommentsWidget.rangeActiveBackground": colors.BASIC_DEF_BLUE.qua,
      "editorCommentsWidget.rangeActiveBorder": colors.TRANSPARENT.value,
      "editorCommentsWidget.rangeBackground": colors.BASIC_DEF_BLUE.qui,
      "editorCommentsWidget.rangeBorder": colors.TRANSPARENT.value,
      "editorCommentsWidget.resolvedBorder": colors.BASIC_NEUTRAL.qua,
      "editorCommentsWidget.unresolvedBorder": colors.BASIC_DEF_BLUE.pri,
      // editorCursor | @{VSCODE}
      "editorCursor.background": colors.FILL_TEXT_ON_COLOR.pri,
      "editorCursor.foreground": colors.FILL_ACCENT.pri,
      // editorError | @{VSCODE}
      "editorError.background": null,
      "editorError.border": null,
      "editorError.foreground": colors.BASIC_DEF_RED.pri,
      // editorGhostText | @{VSCODE}
      "editorGhostText.background": null,
      "editorGhostText.border": null,
      "editorGhostText.foreground": colors.FILL_TEXT.ghost,
      // editorGroup | @{VSCODE}
      "editorGroup.border": colors.STROKE_DIVIDER.default,
      "editorGroup.dropBackground": colors.BG_SMOKE.default,
      "editorGroup.dropIntoPromptBackground": colors.BG_SOLID.flyout,
      "editorGroup.dropIntoPromptBorder": colors.STROKE_SURFACE.flyout,
      "editorGroup.dropIntoPromptForeground": colors.FILL_TEXT.pri,
      "editorGroup.emptyBackground": colors.BG_SOLID.base,
      "editorGroup.focusedEmptyBorder": null,
      // editorGroupHeader | @{VSCODE}
      "editorGroupHeader.border": colors.STROKE_DIVIDER.default,
      "editorGroupHeader.noTabsBackground": colors.BG_SOLID.base,
      "editorGroupHeader.tabsBackground": colors.BG_SOLID.base,
      "editorGroupHeader.tabsBorder": colors.STROKE_DIVIDER.default,
      // editorGutter | @{VSCODE}
      "editorGutter.addedBackground": colors.BASIC_DEF_GREEN.pri,
      "editorGutter.background": colors.BG_SOLID.base,
      "editorGutter.commentGlyphForeground": colors.FILL_TEXT.sec,
      "editorGutter.commentRangeForeground": colors.FILL_CONTROL.prominent,
      "editorGutter.commentUnresolvedGlyphForeground":
        colors.BASIC_DEF_BLUE.pri,
      "editorGutter.deletedBackground": colors.BASIC_DEF_RED.pri,
      "editorGutter.foldingControlForeground": colors.FILL_TEXT.sec,
      "editorGutter.modifiedBackground": colors.BASIC_DEF_BLUE.pri,
      // editorHint | @{VSCODE}
      "editorHint.border": null,
      "editorHint.foreground": colors.BASIC_NEUTRAL.pri,
      // editorHoverWidget | @{VSCODE}
      "editorHoverWidget.background": colors.BG_SOLID.flyout,
      "editorHoverWidget.border": colors.STROKE_SURFACE.flyout,
      "editorHoverWidget.foreground": colors.FILL_TEXT.pri,
      "editorHoverWidget.highlightForeground": colors.FILL_TEXT.active,
      "editorHoverWidget.statusBarBackground": colors.FILL_CONTROL.subtle,
      // editorIndentGuide | @{VSCODE}
      "editorIndentGuide.activeBackground": colors.BASIC_NEUTRAL.qua,
      "editorIndentGuide.background": colors.BASIC_NEUTRAL.qui,
      // editorInfo | @{VSCODE}
      "editorInfo.background": null,
      "editorInfo.border": null,
      "editorInfo.foreground": colors.BASIC_DEF_BLUE.pri,
      // editorInlayHint | @{VSCODE}
      "editorInlayHint.background": colors.BASIC_NEUTRAL.sen,
      "editorInlayHint.foreground": colors.FILL_TEXT.sec,
      "editorInlayHint.parameterBackground": colors.BASIC_LC_ORANGE.pri,
      "editorInlayHint.parameterForeground": colors.BASIC_ALT_ORANGE.pri,
      "editorInlayHint.typeBackground": colors.BASIC_LC_MINT.pri,
      "editorInlayHint.typeForeground": colors.BASIC_DEF_MINT.pri,
      // editorLightBulb | @{VSCODE}
      "editorLightBulb.foreground": colors.BASIC_DEF_YELLOW.pri,
      "editorLightBulbAutoFix.foreground": colors.BASIC_DEF_YELLOW.pri,
      // editorLineNumber | @{VSCODE}
      "editorLineNumber.activeForeground": colors.FILL_TEXT.pri,
      "editorLineNumber.dimmedForeground": colors.FILL_TEXT.ghost,
      "editorLineNumber.foreground": colors.FILL_TEXT.disabled,
      // editorLink | @{VSCODE}
      "editorLink.activeForeground": colors.FILL_ACCENT_TEXT.pri,
      // editorMarkerNavigation | @{VSCODE}
      "editorMarkerNavigation.background": colors.BG_SOLID.flyout,
      "editorMarkerNavigationError.background": colors.BASIC_DEF_RED.pri,
      "editorMarkerNavigationError.headerBackground": colors.BASIC_LC_RED.pri,
      "editorMarkerNavigationInfo.background": colors.BASIC_DEF_BLUE.pri,
      "editorMarkerNavigationInfo.headerBackground": colors.BASIC_LC_BLUE.pri,
      "editorMarkerNavigationWarning.background": colors.BASIC_DEF_ORANGE.pri,
      "editorMarkerNavigationWarning.headerBackground":
        colors.BASIC_LC_ORANGE.pri,
      // editorOverviewRuler | @{VSCODE}
      "editorOverviewRuler.addedForeground": colors.BASIC_DEF_GREEN.sec,
      "editorOverviewRuler.background": colors.BG_SOLID.base,
      "editorOverviewRuler.border": colors.TRANSPARENT.value,
      "editorOverviewRuler.bracketMatchForeground": colors.BASIC_DEF_BROWN.sec,
      "editorOverviewRuler.commentForeground": colors.FILL_TEXT.ghost,
      "editorOverviewRuler.commentUnresolvedForeground":
        colors.BASIC_DEF_BLUE.sec,
      "editorOverviewRuler.commonContentForeground": colors.BASIC_NEUTRAL.qua,
      "editorOverviewRuler.currentContentForeground": colors.BASIC_DEF_MINT.ter,
      "editorOverviewRuler.deletedForeground": colors.BASIC_DEF_RED.sec,
      "editorOverviewRuler.errorForeground": colors.BASIC_DEF_RED.pri,
      "editorOverviewRuler.findMatchForeground": colors.BASIC_DEF_MINT.sec,
      "editorOverviewRuler.incomingContentForeground":
        colors.BASIC_DEF_BLUE.ter,
      "editorOverviewRuler.infoForeground": colors.BASIC_DEF_BLUE.pri,
      "editorOverviewRuler.modifiedForeground": colors.BASIC_DEF_BLUE.sec,
      "editorOverviewRuler.rangeHighlightForeground": colors.BASIC_NEUTRAL.sep,
      "editorOverviewRuler.selectionHighlightForeground":
        colors.BASIC_NEUTRAL.sen,
      "editorOverviewRuler.warningForeground": colors.BASIC_DEF_ORANGE.pri,
      "editorOverviewRuler.wordHighlightForeground": colors.BASIC_DEF_PINK.sec,
      "editorOverviewRuler.wordHighlightStrongForeground":
        colors.BASIC_DEF_PURPLE.sec,
      "editorOverviewRuler.wordHighlightTextForeground":
        colors.BASIC_DEF_PINK.sec,
      // editorPane | @{VSCODE}
      "editorPane.background": colors.BG_SOLID.base,
      // editorRuler | @{VSCODE}
      "editorRuler.foreground": colors.STROKE_DIVIDER.default,
      // editorStickyScroll | @{VSCODE}
      "editorStickyScroll.background": colors.BG_SOLID.surface,
      "editorStickyScrollHover.background": colors.FILL_CONTROL.rest,
      // editorSuggestWidget | @{VSCODE}
      "editorSuggestWidget.background": colors.BG_SOLID.flyout,
      "editorSuggestWidget.border": colors.STROKE_SURFACE.flyout,
      "editorSuggestWidget.focusHighlightForeground":
        colors.FILL_ACCENT_TEXT.pri,
      "editorSuggestWidget.foreground": colors.FILL_TEXT.sec,
      "editorSuggestWidget.highlightForeground": colors.FILL_ACCENT_TEXT.pri,
      "editorSuggestWidget.selectedBackground": colors.FILL_CONTROL.rest,
      "editorSuggestWidget.selectedForeground": colors.FILL_TEXT.pri,
      "editorSuggestWidget.selectedIconForeground": colors.FILL_TEXT.pri,
      "editorSuggestWidgetStatus.foreground": colors.FILL_ACCENT.pri,
      // editorUnicodeHighlight | @{VSCODE}
      "editorUnicodeHighlight.background": null,
      "editorUnicodeHighlight.border": colors.BASIC_DEF_YELLOW.pri,
      // editorUnnecessaryCode | @{VSCODE}
      "editorUnnecessaryCode.border": null,
      "editorUnnecessaryCode.opacity": colors.FILL_TEXT.sec,
      // editorWarning | @{VSCODE}
      "editorWarning.background": null,
      "editorWarning.border": null,
      "editorWarning.foreground": colors.BASIC_DEF_ORANGE.pri,
      // editorWhitespace | @{VSCODE}
      "editorWhitespace.foreground": colors.FILL_TEXT.ghost,
      // editorWidget | @{VSCODE}
      "editorWidget.background": colors.BG_SOLID.flyout,
      "editorWidget.border": colors.STROKE_SURFACE.flyout,
      "editorWidget.foreground": colors.FILL_TEXT.pri,
      "editorWidget.resizeBorder": colors.FILL_ACCENT.pri,
      // errorForeground | @{VSCODE}
      errorForeground: colors.BASIC_DEF_RED.pri,
      // extensionBadge | @{VSCODE}
      "extensionBadge.remoteBackground": colors.BASIC_DEF_MINT.pri,
      "extensionBadge.remoteForeground": colors.FILL_TEXT_ON_COLOR.pri,
      // extensionButton | @{VSCODE}
      "extensionButton.background": colors.FILL_ACCENT.pri,
      "extensionButton.foreground": colors.FILL_TEXT_ON_COLOR.pri,
      "extensionButton.hoverBackground": colors.FILL_ACCENT.sec,
      "extensionButton.prominentBackground": colors.FILL_ACCENT.pri,
      "extensionButton.prominentForeground": colors.FILL_TEXT_ON_COLOR.pri,
      "extensionButton.prominentHoverBackground": colors.FILL_ACCENT.sec,
      "extensionButton.separator": colors.FILL_TEXT_ON_COLOR.pri,
      // extensionIcon | @{VSCODE}
      "extensionIcon.preReleaseForeground": colors.BASIC_DEF_PURPLE.pri,
      "extensionIcon.sponsorForeground": colors.BASIC_DEF_RED.pri,
      "extensionIcon.starForeground": colors.BASIC_DEF_YELLOW.pri,
      "extensionIcon.verifiedForeground": colors.BASIC_DEF_BLUE.pri,
      // focusBorder | @{VSCODE}
      focusBorder: colors.STROKE_FOCUS.default,
      // foreground | @{VSCODE}
      foreground: colors.FILL_TEXT.pri,
      // gitDecoration | @{VSCODE}
      "gitDecoration.addedResourceForeground": colors.BASIC_DEF_GREEN.pri,
      "gitDecoration.conflictingResourceForeground":
        colors.BASIC_DEF_ORANGE.pri,
      "gitDecoration.deletedResourceForeground": colors.BASIC_ALT_RED.pri,
      "gitDecoration.ignoredResourceForeground": colors.FILL_TEXT.disabled,
      "gitDecoration.modifiedResourceForeground": colors.BASIC_ALT_BLUE.pri,
      "gitDecoration.renamedResourceForeground": colors.BASIC_DEF_YELLOW.pri,
      "gitDecoration.stageDeletedResourceForeground": colors.BASIC_DEF_RED.pri,
      "gitDecoration.stageModifiedResourceForeground":
        colors.BASIC_DEF_BLUE.pri,
      "gitDecoration.submoduleResourceForeground": colors.BASIC_DEF_MINT.pri,
      "gitDecoration.untrackedResourceForeground": colors.BASIC_ALT_GREEN.pri,
      // icon | @{VSCODE}
      "icon.foreground": colors.FILL_TEXT.pri,
      // input | @{VSCODE}
      "input.background": colors.FILL_CONTROL.rest,
      "input.border": colors.STROKE_CONTROL.default,
      "input.foreground": colors.FILL_TEXT.pri,
      "input.placeholderForeground": colors.FILL_TEXT.sec,
      // inputOption | @{VSCODE}
      "inputOption.activeBackground": colors.FILL_ACCENT.pri,
      "inputOption.activeBorder": colors.STROKE_CONTROL.default,
      "inputOption.activeForeground": colors.FILL_TEXT_ON_COLOR.pri,
      "inputOption.hoverBackground": colors.FILL_CONTROL.rest,
      // inputValidation | @{VSCODE}
      "inputValidation.errorBackground": colors.FILL_SYSTEM_BG.red,
      "inputValidation.errorBorder": colors.BASIC_DEF_RED.qua,
      "inputValidation.errorForeground": colors.FILL_SYSTEM_FG.red,
      "inputValidation.infoBackground": colors.FILL_SYSTEM_BG.blue,
      "inputValidation.infoBorder": colors.BASIC_DEF_BLUE.qua,
      "inputValidation.infoForeground": colors.FILL_SYSTEM_FG.blue,
      "inputValidation.warningBackground": colors.FILL_SYSTEM_BG.orange,
      "inputValidation.warningBorder": colors.BASIC_DEF_ORANGE.qua,
      "inputValidation.warningForeground": colors.FILL_SYSTEM_FG.orange,
      // interactive | @{VSCODE} !{FUTURE}
      "interactive.activeCodeBorder": "#FF0000", // 🔵 Still Unknown
      "interactive.inactiveCodeBorder": "#FF0000", // 🔵 Still Unknown
      // interactiveEditor | @{VSCODE}
      "interactiveEditor.border": colors.STROKE_SURFACE.flyout,
      "interactiveEditor.regionHighlight": colors.BASIC_NEUTRAL.sep,
      "interactiveEditor.shadow": colors.SHADOW.default,
      "interactiveEditorDiff.inserted": colors.BASIC_DEF_GREEN.qui,
      "interactiveEditorDiff.removed": colors.BASIC_DEF_RED.qui,
      "interactiveEditorInput.background": colors.FILL_CONTROL.rest,
      "interactiveEditorInput.border": colors.STROKE_CONTROL.default,
      "interactiveEditorInput.focusBorder": colors.STROKE_FOCUS.default,
      "interactiveEditorInput.placeholderForeground": colors.FILL_TEXT.sec,
      // issues | @{Github Pull Requests and Issues}
      "issues.closed": colors.BASIC_DEF_PURPLE.pri,
      "issues.newIssueDecoration": colors.FILL_TEXT.ghost,
      "issues.open": colors.BASIC_DEF_GREEN.pri,
      // keybindingLabel | @{VSCODE}
      "keybindingLabel.background": colors.FILL_CONTROL.rest,
      "keybindingLabel.border": colors.STROKE_CONTROL.default,
      "keybindingLabel.bottomBorder": colors.STROKE_CONTROL.alt,
      "keybindingLabel.foreground": colors.FILL_TEXT.pri,
      "keybindingTable.headerBackground": colors.BG_SOLID.onCanvas,
      "keybindingTable.rowsBackground": colors.BG_SOLID.onCanvas,
      // list | @{VSCODE}
      "list.activeSelectionBackground": colors.FILL_CONTROL.hover,
      "list.activeSelectionForeground": colors.FILL_TEXT.pri,
      "list.activeSelectionIconForeground": colors.FILL_TEXT.pri,
      "list.deemphasizedForeground": colors.FILL_TEXT.disabled,
      "list.dropBackground": colors.BG_SMOKE.default,
      "list.errorForeground": colors.BASIC_DEF_RED.pri,
      "list.filterMatchBackground": colors.BASIC_DEF_MINT.qua,
      "list.filterMatchBorder": colors.STROKE_CONTROL.default,
      "list.focusAndSelectionOutline": colors.STROKE_FOCUS.default,
      "list.focusBackground": colors.FILL_CONTROL.rest,
      "list.focusForeground": colors.FILL_TEXT.pri,
      "list.focusHighlightForeground": colors.FILL_ACCENT_TEXT.pri,
      "list.focusOutline": colors.STROKE_CONTROL.default,
      "list.highlightForeground": colors.FILL_ACCENT_TEXT.pri,
      "list.hoverBackground": colors.FILL_CONTROL.rest,
      "list.hoverForeground": colors.FILL_TEXT.pri,
      "list.inactiveFocusBackground": colors.FILL_CONTROL.rest,
      "list.inactiveFocusOutline": colors.STROKE_CONTROL.alt,
      "list.inactiveSelectionBackground": colors.FILL_CONTROL.hover,
      "list.inactiveSelectionForeground": colors.FILL_TEXT.pri,
      "list.inactiveSelectionIconForeground": colors.FILL_TEXT.pri,
      "list.invalidItemForeground": colors.BASIC_DEF_RED.pri,
      "list.warningForeground": colors.BASIC_DEF_ORANGE.pri,
      // listFilterWidget | @{VSCODE}
      "listFilterWidget.background": colors.BG_SOLID.flyout,
      "listFilterWidget.noMatchesOutline": colors.BASIC_DEF_RED.pri,
      "listFilterWidget.outline": colors.STROKE_SURFACE.flyout,
      "listFilterWidget.shadow": colors.SHADOW.default,
      // menu | @{VSCODE}
      "menu.background": colors.BG_SOLID.flyout,
      "menu.border": colors.STROKE_SURFACE.flyout,
      "menu.foreground": colors.FILL_TEXT.pri,
      "menu.selectionBackground": colors.FILL_CONTROL.rest,
      "menu.selectionBorder": colors.STROKE_CONTROL.default,
      "menu.selectionForeground": colors.FILL_TEXT.pri,
      "menu.separatorBackground": colors.STROKE_DIVIDER.default,
      // menuBar | @{VSCODE}
      "menubar.selectionBackground": colors.FILL_CONTROL.rest,
      "menubar.selectionBorder": colors.STROKE_CONTROL.default,
      "menubar.selectionForeground": colors.FILL_TEXT.pri,
      // merge | @{VSCODE}
      "merge.border": colors.STROKE_CONTROL.default,
      "merge.commonContentBackground": colors.BASIC_NEUTRAL.sen,
      "merge.commonHeaderBackground": colors.BASIC_NEUTRAL.qui,
      "merge.currentContentBackground": colors.BASIC_DEF_MINT.qui,
      "merge.currentHeaderBackground": colors.BASIC_DEF_MINT.ter,
      "merge.incomingContentBackground": colors.BASIC_DEF_BLUE.qui,
      "merge.incomingHeaderBackground": colors.BASIC_DEF_BLUE.ter,
      // mergeEditor | @{VSCODE}
      "mergeEditor.change.background": colors.BASIC_NEUTRAL.sep,
      "mergeEditor.change.word.background": colors.BASIC_NEUTRAL.sen,
      "mergeEditor.changeBase.background": colors.BASIC_NEUTRAL.sep,
      "mergeEditor.changeBase.word.background": colors.BASIC_NEUTRAL.sen,
      "mergeEditor.conflict.handled.minimapOverViewRuler":
        colors.BASIC_DEF_GREEN.ter,
      "mergeEditor.conflict.handledFocused.border": colors.BASIC_DEF_GREEN.pri,
      "mergeEditor.conflict.handledUnfocused.border":
        colors.BASIC_DEF_GREEN.ter,
      "mergeEditor.conflict.input1.background": colors.BASIC_DEF_BLUE.ter,
      "mergeEditor.conflict.input2.background": colors.BASIC_DEF_MINT.ter,
      "mergeEditor.conflict.unhandled.minimapOverViewRuler":
        colors.BASIC_DEF_RED.ter,
      "mergeEditor.conflict.unhandledFocused.border": colors.BASIC_DEF_RED.pri,
      "mergeEditor.conflict.unhandledUnfocused.border":
        colors.BASIC_DEF_RED.ter,
      "mergeEditor.conflictingLines.background": colors.BASIC_DEF_ORANGE.qui,
      // minimap | @{VSCODE}
      "minimap.background": colors.BG_SOLID.surface,
      "minimap.errorHighlight": colors.BASIC_DEF_RED.qua,
      "minimap.findMatchHighlight": colors.BASIC_DEF_MINT.qua,
      "minimap.foregroundOpacity": colors.OPAQUE.value,
      "minimap.selectionHighlight": colors.BASIC_NEUTRAL.qua,
      "minimap.selectionOccurrenceHighlight": colors.BASIC_NEUTRAL.qui,
      "minimap.warningHighlight": colors.BASIC_DEF_ORANGE.qua,
      // minimapGutter | @{VSCODE}
      "minimapGutter.addedBackground": colors.BASIC_DEF_GREEN.pri,
      "minimapGutter.deletedBackground": colors.BASIC_DEF_RED.pri,
      "minimapGutter.modifiedBackground": colors.BASIC_DEF_BLUE.pri,
      // minimapSlider | @{VSCODE}
      "minimapSlider.activeBackground": colors.FILL_CONTROL.pressed,
      "minimapSlider.background": colors.FILL_CONTROL.rest,
      "minimapSlider.hoverBackground": colors.FILL_CONTROL.hover,
      // notebook | @{VSCODE} !{UNKNOWN}
      "notebook.cellBorderColor": colors.STROKE_CONTROL.default,
      "notebook.cellEditorBackground": colors.BG_SOLID.base,
      "notebook.cellHoverBackground": colors.FILL_CONTROL.subtle,
      "notebook.cellInsertionIndicator": colors.FILL_ACCENT.pri,
      "notebook.cellStatusBarItemHoverBackground": colors.FILL_CONTROL.rest,
      "notebook.cellToolbarSeparator": colors.STROKE_SURFACE.flyout,
      "notebook.editorBackground": colors.BG_SOLID.canvas,
      "notebook.focusedCellBackground": colors.FILL_CONTROL.subtle,
      "notebook.focusedCellBorder": colors.FILL_ACCENT.pri,
      "notebook.focusedEditorBorder": colors.STROKE_FOCUS.default,
      "notebook.inactiveFocusedCellBorder": colors.STROKE_CONTROL.default,
      "notebook.inactiveSelectedCellBorder": colors.STROKE_FOCUS.default,
      "notebook.outputContainerBackgroundColor": colors.BG_SOLID.surface,
      "notebook.outputContainerBorderColor": colors.STROKE_CONTROL.default,
      "notebook.selectedCellBackground": colors.FILL_CONTROL.subtle,
      "notebook.selectedCellBorder": colors.FILL_ACCENT.pri,
      "notebook.symbolHighlightBackground": "#ff0000", // 🔵 Still Unknown
      "notebookEditorOverviewRuler.runningCellForeground":
        colors.BASIC_DEF_YELLOW.pri,
      "notebookScrollbarSlider.activeBackground": colors.FILL_CONTROL.pressed,
      "notebookScrollbarSlider.background": colors.FILL_CONTROL.rest,
      "notebookScrollbarSlider.hoverBackground": colors.FILL_CONTROL.hover,
      "notebookStatusErrorIcon.foreground": colors.BASIC_DEF_RED.pri,
      "notebookStatusRunningIcon.foreground": colors.BASIC_DEF_YELLOW.pri,
      "notebookStatusSuccessIcon.foreground": colors.BASIC_DEF_GREEN.pri,
      // notifications | @{VSCODE}
      "notificationCenter.border": colors.STROKE_SURFACE.flyout,
      "notificationCenterHeader.background": colors.BG_SOLID.base,
      "notificationCenterHeader.foreground": colors.FILL_TEXT.pri,
      "notificationLink.foreground": colors.FILL_ACCENT_TEXT.pri,
      "notifications.background": colors.BG_SOLID.flyout,
      "notifications.border": colors.STROKE_DIVIDER.default,
      "notifications.foreground": colors.FILL_TEXT.pri,
      "notificationsErrorIcon.foreground": colors.BASIC_DEF_RED.pri,
      "notificationsInfoIcon.foreground": colors.BASIC_DEF_BLUE.pri,
      "notificationsWarningIcon.foreground": colors.BASIC_DEF_ORANGE.pri,
      "notificationToast.border": colors.STROKE_SURFACE.flyout,
      // panel | @{VSCODE}
      "panel.background": colors.BG_SOLID.surface,
      "panel.border": colors.STROKE_DIVIDER.default,
      "panel.dropBorder": colors.FILL_ACCENT.pri,
      "panelInput.border": colors.STROKE_CONTROL.default,
      "panelSection.border": colors.STROKE_FOCUS.default,
      "panelSection.dropBackground": colors.BG_SMOKE.default,
      "panelSectionHeader.background": colors.FILL_CONTROL.subtle,
      "panelSectionHeader.border": colors.STROKE_FOCUS.default,
      "panelSectionHeader.foreground": colors.FILL_TEXT.sec,
      "panelTitle.activeBorder": colors.FILL_ACCENT.pri,
      "panelTitle.activeForeground": colors.FILL_TEXT.pri,
      "panelTitle.inactiveForeground": colors.FILL_TEXT.sec,
      // peekView | @{VSCODE}
      "peekView.border": colors.BASIC_DEF_MINT.pri,
      "peekViewEditor.background": colors.BG_SOLID.surface,
      "peekViewEditor.matchHighlightBackground": colors.BASIC_DEF_MINT.qua,
      "peekViewEditor.matchHighlightBorder": colors.STROKE_CONTROL.default,
      "peekViewEditorGutter.background": colors.BG_SOLID.canvas,
      "peekViewEditorStickyScroll.background": colors.BG_SOLID.onCanvas,
      "peekViewResult.background": colors.BG_SOLID.canvas,
      "peekViewResult.fileForeground": colors.FILL_TEXT.sec,
      "peekViewResult.lineForeground": colors.FILL_TEXT.sec,
      "peekViewResult.matchHighlightBackground": colors.BASIC_DEF_MINT.qua,
      "peekViewResult.selectionBackground": colors.FILL_CONTROL.hover,
      "peekViewResult.selectionForeground": colors.FILL_TEXT.pri,
      "peekViewTitle.background": colors.BASIC_LC_MINT.pri,
      "peekViewTitleDescription.foreground": colors.FILL_TEXT.sec,
      "peekViewTitleLabel.foreground": colors.BASIC_ALT_MINT.pri,
      // pickerGroup | @{VSCODE}
      "pickerGroup.border": colors.STROKE_DIVIDER.default,
      "pickerGroup.foreground": colors.FILL_ACCENT_TEXT.pri,
      // ports | @{VSCODE}
      "ports.iconRunningProcessForeground": colors.BASIC_DEF_GREEN.pri,
      // problems | @{VSCODE}
      "problemsErrorIcon.foreground": colors.BASIC_DEF_RED.pri,
      "problemsInfoIcon.foreground": colors.BASIC_DEF_BLUE.pri,
      "problemsWarningIcon.foreground": colors.BASIC_DEF_ORANGE.pri,
      // progressBar | @{VSCODE}
      "progressBar.background": colors.FILL_ACCENT.pri,
      // profileBadge | @{VSCODE}
      "profileBadge.background": colors.FILL_CONTROL.prominent,
      "profileBadge.foreground": colors.FILL_TEXT.sec,
      // pullRequests | @{Github Pull Requests and Issues}
      "pullRequests.closed": colors.BASIC_DEF_RED.pri,
      "pullRequests.draft": colors.BASIC_NEUTRAL.qua,
      "pullRequests.merged": colors.BASIC_DEF_PURPLE.pri,
      "pullRequests.notification": colors.BASIC_DEF_BLUE.pri,
      "pullRequests.open": colors.BASIC_DEF_GREEN.pri,
      // quickInput | @{VSCODE}
      "quickInput.background": colors.BG_SOLID.flyout,
      "quickInput.foreground": colors.FILL_TEXT.sec,
      "quickInputList.focusBackground": colors.FILL_CONTROL.rest,
      "quickInputList.focusForeground": colors.FILL_TEXT.pri,
      "quickInputList.focusIconForeground": colors.FILL_TEXT.pri,
      "quickInputTitle.background": colors.BG_SOLID.base,
      // sash | @{VSCODE}
      "sash.hoverBorder": colors.STROKE_FOCUS.default,
      // scm | @{VSCODE}
      "scm.providerBorder": colors.STROKE_FOCUS.default,
      // scrollBar | @{VSCODE}
      "scrollbar.shadow": colors.SHADOW.default,
      "scrollbarSlider.activeBackground": colors.FILL_CONTROL.pressed,
      "scrollbarSlider.background": colors.FILL_CONTROL.rest,
      "scrollbarSlider.hoverBackground": colors.FILL_CONTROL.hover,
      // search | @{VSCODE}
      "search.resultsInfoForeground": colors.FILL_TEXT.disabled,
      "searchEditor.findMatchBackground": colors.BASIC_DEF_MINT.qua,
      "searchEditor.findMatchBorder": colors.STROKE_CONTROL.default,
      "searchEditor.textInputBorder": colors.STROKE_CONTROL.default,
      // selection | @{VSCODE}
      "selection.background": colors.BASIC_NEUTRAL.sen,
      // settings | @{VSCODE}
      "settings.checkboxBackground": colors.FILL_CONTROL.rest,
      "settings.checkboxBorder": colors.STROKE_CONTROL.default,
      "settings.checkboxForeground": colors.FILL_TEXT.pri,
      "settings.dropdownBackground": colors.FILL_CONTROL.rest,
      "settings.dropdownBorder": colors.STROKE_CONTROL.default,
      "settings.dropdownForeground": colors.FILL_TEXT.pri,
      "settings.dropdownListBorder": colors.STROKE_SURFACE.flyout,
      "settings.focusedRowBackground": colors.FILL_CONTROL.subtle,
      "settings.focusedRowBorder": colors.STROKE_CONTROL.default,
      "settings.headerBorder": colors.STROKE_DIVIDER.default,
      "settings.headerForeground": colors.FILL_TEXT.pri,
      "settings.modifiedItemIndicator": colors.BASIC_DEF_BLUE.pri,
      "settings.numberInputBackground": colors.FILL_CONTROL.rest,
      "settings.numberInputBorder": colors.STROKE_CONTROL.default,
      "settings.numberInputForeground": colors.FILL_TEXT.pri,
      "settings.rowHoverBackground": colors.FILL_CONTROL.subtle,
      "settings.sashBorder": colors.STROKE_FOCUS.default,
      "settings.settingsHeaderHoverForeground": colors.FILL_TEXT.active,
      "settings.textInputBackground": colors.FILL_CONTROL.rest,
      "settings.textInputBorder": colors.STROKE_CONTROL.default,
      "settings.textInputForeground": colors.FILL_TEXT.pri,
      // sideBar | @{VSCODE}
      "sideBar.background": colors.BG_SOLID.surface,
      "sideBar.border": colors.STROKE_DIVIDER.default,
      "sideBar.dropBackground": colors.BG_SMOKE.default,
      "sideBar.foreground": colors.FILL_TEXT.sec,
      "sideBarSectionHeader.background": colors.FILL_CONTROL.subtle,
      "sideBarSectionHeader.border": colors.STROKE_FOCUS.default,
      "sideBarSectionHeader.foreground": colors.FILL_TEXT.sec,
      "sideBarTitle.foreground": colors.FILL_TEXT.pri,
      // sideBySideEditor | @{VSCODE}
      "sideBySideEditor.horizontalBorder": colors.STROKE_DIVIDER.default,
      "sideBySideEditor.verticalBorder": colors.STROKE_DIVIDER.default,
      // statusBar | @{VSCODE}
      "statusBar.background": colors.BG_SOLID.base,
      "statusBar.border": colors.STROKE_CONTROL.default,
      "statusBar.debuggingBackground": colors.FILL_SYSTEM_BG.yellow,
      "statusBar.debuggingBorder": colors.STROKE_CONTROL.default,
      "statusBar.debuggingForeground": colors.FILL_SYSTEM_FG.yellow,
      "statusBar.focusBorder": colors.STROKE_FOCUS.default,
      "statusBar.foreground": colors.FILL_TEXT.pri,
      "statusBar.noFolderBackground": colors.FILL_SYSTEM_BG.red,
      "statusBar.noFolderBorder": colors.STROKE_CONTROL.default,
      "statusBar.noFolderForeground": colors.FILL_SYSTEM_FG.red,
      "statusBar.offlineBackground": colors.FILL_SYSTEM_BG.red,
      "statusBar.offlineForeground": colors.FILL_SYSTEM_FG.red,
      // statusBarItem | @{VSCODE}
      "statusBarItem.activeBackground": colors.FILL_CONTROL.pressed,
      "statusBarItem.compactHoverBackground": colors.FILL_CONTROL.doubleHover,
      "statusBarItem.errorBackground": colors.FILL_SYSTEM_BG.red,
      "statusBarItem.errorForeground": colors.FILL_SYSTEM_FG.red,
      "statusBarItem.focusBorder": colors.STROKE_FOCUS.default,
      "statusBarItem.hoverBackground": colors.FILL_CONTROL.rest,
      "statusBarItem.prominentBackground": colors.FILL_CONTROL.prominent,
      "statusBarItem.prominentForeground": colors.FILL_TEXT.pri,
      "statusBarItem.prominentHoverBackground": colors.FILL_CONTROL.hover,
      "statusBarItem.remoteBackground": colors.FILL_SYSTEM_BG.mint,
      "statusBarItem.remoteForeground": colors.FILL_SYSTEM_FG.mint,
      "statusBarItem.warningBackground": colors.FILL_SYSTEM_BG.orange,
      "statusBarItem.warningForeground": colors.FILL_SYSTEM_FG.orange,
      // symbolIcon | @{VSCODE}
      "symbolIcon.arrayForeground": colors.BASIC_DEF_BLUE.pri,
      "symbolIcon.booleanForeground": colors.BASIC_DEF_BLUE.pri,
      "symbolIcon.classForeground": colors.BASIC_DEF_YELLOW.pri,
      "symbolIcon.colorForeground": colors.FILL_TEXT.sec,
      "symbolIcon.constantForeground": colors.BASIC_ALT_MINT.pri,
      "symbolIcon.constructorForeground": colors.BASIC_DEF_ORANGE.pri,
      "symbolIcon.enumeratorForeground": colors.BASIC_DEF_MINT.pri,
      "symbolIcon.enumeratorMemberForeground": colors.BASIC_ALT_MINT.pri,
      "symbolIcon.eventForeground": colors.BASIC_ALT_RED.pri,
      "symbolIcon.fieldForeground": colors.BASIC_ALT_YELLOW.pri,
      "symbolIcon.fileForeground": colors.FILL_TEXT.sec,
      "symbolIcon.folderForeground": colors.FILL_TEXT.sec,
      "symbolIcon.functionForeground": colors.BASIC_DEF_ORANGE.pri,
      "symbolIcon.interfaceForeground": colors.BASIC_DEF_MINT.pri,
      "symbolIcon.keyForeground": colors.BASIC_ALT_PURPLE.pri,
      "symbolIcon.keywordForeground": colors.BASIC_DEF_PINK.pri,
      "symbolIcon.methodForeground": colors.BASIC_DEF_ORANGE.pri,
      "symbolIcon.moduleForeground": colors.FILL_TEXT.sec,
      "symbolIcon.namespaceForeground": colors.FILL_TEXT.sec,
      "symbolIcon.nullForeground": colors.BASIC_DEF_BLUE.pri,
      "symbolIcon.numberForeground": colors.BASIC_ALT_GREEN.pri,
      "symbolIcon.objectForeground": colors.BASIC_DEF_MINT.pri,
      "symbolIcon.operatorForeground": colors.FILL_TEXT.sec,
      "symbolIcon.packageForeground": colors.FILL_TEXT.sec,
      "symbolIcon.propertyForeground": colors.BASIC_ALT_YELLOW.pri,
      "symbolIcon.referenceForeground": colors.BASIC_DEF_PURPLE.pri,
      "symbolIcon.snippetForeground": colors.BASIC_ALT_BLUE.pri,
      "symbolIcon.stringForeground": colors.BASIC_DEF_BROWN.pri,
      "symbolIcon.structForeground": colors.BASIC_DEF_YELLOW.pri,
      "symbolIcon.textForeground": colors.FILL_TEXT.sec,
      "symbolIcon.typeParameterForeground": colors.BASIC_ALT_MINT.pri,
      "symbolIcon.unitForeground": colors.BASIC_ALT_GREEN.pri,
      "symbolIcon.variableForeground": colors.BASIC_ALT_ORANGE.pri,
      // tab | @{VSCODE}
      "tab.activeBackground": colors.FILL_TAB.activeFocused,
      "tab.activeBorder": colors.TRANSPARENT.value,
      "tab.activeBorderTop": colors.TRANSPARENT.value,
      "tab.activeForeground": colors.FILL_TEXT.pri,
      "tab.activeModifiedBorder": colors.BASIC_DEF_BLUE.pri,
      "tab.border": colors.STROKE_CONTROL.default,
      "tab.hoverBackground": colors.FILL_TAB.activeFocused,
      "tab.hoverBorder": colors.TRANSPARENT.value,
      "tab.hoverForeground": colors.FILL_TEXT.pri,
      "tab.inactiveBackground": colors.FILL_TAB.inactiveFocused,
      "tab.inactiveForeground": colors.FILL_TEXT.sec,
      "tab.inactiveModifiedBorder": colors.BASIC_DEF_BLUE.ter,
      "tab.lastPinnedBorder": colors.STROKE_FOCUS.default,
      "tab.unfocusedActiveBackground": colors.FILL_TAB.activeUnfocused,
      "tab.unfocusedActiveBorder": colors.TRANSPARENT.value,
      "tab.unfocusedActiveBorderTop": colors.TRANSPARENT.value,
      "tab.unfocusedActiveForeground": colors.FILL_TEXT.sec,
      "tab.unfocusedActiveModifiedBorder": colors.BASIC_DEF_BLUE.ter,
      "tab.unfocusedHoverBackground": colors.FILL_TAB.activeUnfocused,
      "tab.unfocusedHoverBorder": colors.TRANSPARENT.value,
      "tab.unfocusedHoverForeground": colors.FILL_TEXT.sec,
      "tab.unfocusedInactiveBackground": colors.FILL_TAB.inactiveUnfocused,
      "tab.unfocusedInactiveForeground": colors.FILL_TEXT.disabled,
      "tab.unfocusedInactiveModifiedBorder": colors.BASIC_DEF_BLUE.qua,
      // terminal | @{VSCODE}
      "terminal.ansiBlack": colors.FILL_TERMINAL.lc,
      "terminal.ansiBlue": colors.BASIC_DEF_BLUE.pri,
      "terminal.ansiBrightBlack": colors.FILL_TERMINAL.lq,
      "terminal.ansiBrightBlue": colors.BASIC_ALT_BLUE.pri,
      "terminal.ansiBrightCyan": colors.BASIC_ALT_MINT.pri,
      "terminal.ansiBrightGreen": colors.BASIC_ALT_GREEN.pri,
      "terminal.ansiBrightMagenta": colors.BASIC_ALT_PINK.pri,
      "terminal.ansiBrightRed": colors.BASIC_ALT_RED.pri,
      "terminal.ansiBrightWhite": colors.FILL_TERMINAL.hc,
      "terminal.ansiBrightYellow": colors.BASIC_ALT_YELLOW.pri,
      "terminal.ansiCyan": colors.BASIC_DEF_MINT.pri,
      "terminal.ansiGreen": colors.BASIC_DEF_GREEN.pri,
      "terminal.ansiMagenta": colors.BASIC_DEF_PINK.pri,
      "terminal.ansiRed": colors.BASIC_DEF_RED.pri,
      "terminal.ansiWhite": colors.FILL_TERMINAL.hq,
      "terminal.ansiYellow": colors.BASIC_DEF_YELLOW.pri,
      "terminal.background": colors.BG_SOLID.canvas,
      "terminal.border": colors.STROKE_DIVIDER.default,
      "terminal.dropBackground": colors.BG_SMOKE.default,
      "terminal.findMatchBackground": colors.BASIC_DEF_MINT.qua,
      "terminal.findMatchBorder": colors.STROKE_CONTROL.default,
      "terminal.findMatchHighlightBackground": colors.BASIC_DEF_MINT.qui,
      "terminal.findMatchHighlightBorder": colors.STROKE_CONTROL.default,
      "terminal.foreground": colors.FILL_TERMINAL.fg,
      "terminal.hoverHighlightBackground": colors.BASIC_NEUTRAL.sep,
      "terminal.inactiveSelectionBackground": colors.BASIC_NEUTRAL.sep,
      "terminal.selectionBackground": colors.BASIC_NEUTRAL.sen,
      "terminal.selectionForeground": colors.FILL_TEXT.pri,
      "terminal.tab.activeBorder": colors.FILL_ACCENT.pri,
      "terminalCommandDecoration.defaultBackground": colors.BASIC_DEF_BLUE.pri,
      "terminalCommandDecoration.errorBackground": colors.BASIC_DEF_RED.pri,
      "terminalCommandDecoration.successBackground": colors.BASIC_DEF_GREEN.pri,
      "terminalCursor.background": colors.FILL_TEXT_ON_COLOR.pri,
      "terminalCursor.foreground": colors.FILL_ACCENT.pri,
      "terminalOverviewRuler.cursorForeground": colors.FILL_ACCENT.pri,
      "terminalOverviewRuler.findMatchForeground": colors.BASIC_DEF_MINT.sec,
      // testing | @{VSCODE}
      "testing.iconErrored": colors.BASIC_DEF_RED.pri,
      "testing.iconFailed": colors.BASIC_DEF_RED.pri,
      "testing.iconPassed": colors.BASIC_DEF_GREEN.pri,
      "testing.iconQueued": colors.BASIC_DEF_YELLOW.pri,
      "testing.iconSkipped": colors.BASIC_NEUTRAL.ter,
      "testing.iconUnset": colors.BASIC_NEUTRAL.ter,
      "testing.message.error.decorationForeground": colors.BASIC_DEF_RED.pri,
      "testing.message.error.lineBackground": colors.BASIC_DEF_RED.qua,
      "testing.message.info.decorationForeground": colors.BASIC_DEF_BLUE.pri,
      "testing.message.info.lineBackground": colors.BASIC_DEF_BLUE.qua,
      "testing.peekBorder": colors.BASIC_ALT_RED.pri,
      "testing.peekHeaderBackground": colors.BASIC_LC_RED.pri,
      "testing.runAction": colors.BASIC_DEF_GREEN.pri,
      // text | @{VSCODE}
      "textBlockQuote.background": colors.FILL_CONTROL.subtle,
      "textBlockQuote.border": colors.FILL_ACCENT.pri,
      "textCodeBlock.background": colors.FILL_CONTROL.subtle,
      "textLink.activeForeground": colors.FILL_ACCENT.sec,
      "textLink.foreground": colors.FILL_ACCENT.pri,
      "textPreformat.foreground": colors.BASIC_DEF_PINK.pri,
      "textSeparator.foreground": colors.STROKE_DIVIDER.default,
      // titleBar | @{VSCODE}
      "titleBar.activeBackground": colors.BG_SOLID.base,
      "titleBar.activeForeground": colors.FILL_TEXT.pri,
      "titleBar.border": colors.STROKE_DIVIDER.default,
      "titleBar.inactiveBackground": colors.BG_SOLID.base,
      "titleBar.inactiveForeground": colors.FILL_TEXT.sec,
      // toolbar | @{VSCODE}
      "toolbar.activeBackground": colors.FILL_CONTROL.pressed,
      "toolbar.hoverBackground": colors.FILL_CONTROL.rest,
      "toolbar.hoverOutline": colors.STROKE_CONTROL.default,
      // tree | @{VSCODE}
      "tree.inactiveIndentGuidesStroke": colors.BASIC_NEUTRAL.qui,
      "tree.indentGuidesStroke": colors.BASIC_NEUTRAL.qua,
      "tree.tableColumnsBorder": colors.STROKE_DIVIDER.default,
      "tree.tableOddRowsBackground": colors.BG_SOLID.onCanvas,
      // walkThrough | @{VSCODE}
      "walkThrough.embeddedEditorBackground": colors.BG_SOLID.base,
      "walkthrough.stepTitle.foreground": colors.FILL_TEXT.pri,
      // welcomePage | @{VSCODE}
      "welcomePage.background": colors.BG_SOLID.canvas,
      "welcomePage.progress.background": colors.FILL_CONTROL.rest,
      "welcomePage.progress.foreground": colors.FILL_ACCENT.pri,
      "welcomePage.tileBackground": colors.FILL_CONTROL.rest,
      "welcomePage.tileBorder": colors.STROKE_CONTROL.default,
      "welcomePage.tileHoverBackground": colors.FILL_CONTROL.hover,
      // widget | @{VSCODE}
      "widget.border": colors.STROKE_SURFACE.flyout,
      "widget.shadow": colors.SHADOW.default,
      // window | @{VSCODE}
      "window.activeBorder": colors.STROKE_SURFACE.layer,
      "window.inactiveBorder": colors.STROKE_SURFACE.layer,
    },
  };
  await exportObjectAsJsonFile(
    themeObject,
    `Codemos Modern (${isDarkMode ? "Dark" : "Light"})-color-theme.json`
  );
}

async function exportObjectAsJsonFile(
  objectToExport: object,
  fileName: string
) {
  // Convert object to JSON string
  const jsonString = JSON.stringify(objectToExport);

  // Construct the file path
  const filePath = path.join(__dirname, "..", "themes", fileName);

  // Write the JSON string to a file
  fs.writeFile(filePath, jsonString, "utf8", (err) => {
    if (err) {
      vscode.window.showErrorMessage(err.message);
    }
  });
}
