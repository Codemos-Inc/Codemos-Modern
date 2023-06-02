/* eslint-disable @typescript-eslint/naming-convention */
import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import * as colors from "./colors";

export function createDarkTheme(hex6: string) {
  colors.updateDarkAccent(hex6);
  const themeObject = {
    "$schema": "vscode://schemas/color-theme",
    "semanticHighlighting": true,
    "semanticTokenColors": {
      // GENERAL SEMANTIC TOKENS
      // namespace: For identifiers that declare or reference a namespace, module, or package.
      "namespace": colors.D_FILL_TEXT_PRI.value,
      // module
      "module": colors.D_FILL_TEXT_PRI.value,
      // class: For identifiers that declare or reference a class type.
      "class": colors.D_BASIC_DEF_YELLOW_PRI.value,
      // enum: For identifiers that declare or reference an enumeration type.
      "enum": colors.D_BASIC_DEF_MINT_PRI.value,
      // interface: For identifiers that declare or reference an interface type.
      "interface": colors.D_BASIC_DEF_MINT_PRI.value,
      // struct: For identifiers that declare or reference a struct type.
      "struct": colors.D_BASIC_DEF_YELLOW_PRI.value,
      // typeParameter: For identifiers that declare or reference a type parameter (generics).
      "typeParameter": colors.D_BASIC_ALT_MINT_PRI.value,
      // type: For identifiers that declare or reference a type that is not covered above.
      "type": colors.D_BASIC_DEF_MINT_PRI.value,
      // parameter: For identifiers that declare or reference function or method parameters.
      "parameter": colors.D_BASIC_ALT_ORANGE_PRI.value,
      // variable: For identifiers that declare or reference a local or global variable.
      "variable": { "foreground": colors.D_BASIC_ALT_ORANGE_PRI.value, "underline": true },
      "variable.readonly": { "underline": false },
      // property: For identifiers that declare or reference a member property, member field, or member variable.
      "property": { "foreground": colors.D_BASIC_ALT_YELLOW_PRI.value, "underline": true },
      "property.readonly": { "underline": false },
      // enumMember: For identifiers that declare or reference an enumeration property, constant, or member.
      "enumMember": colors.D_BASIC_ALT_MINT_PRI.value,
      // decorator: For identifiers that declare or reference decorators and annotations.
      "decorator": colors.D_BASIC_DEF_RED_PRI.value,
      // annotation: For identifiers that declare or reference decorators and annotations.
      "annotation": colors.D_BASIC_DEF_RED_PRI.value,
      // event: For identifiers that declare an event property.
      "event": colors.D_BASIC_ALT_RED_PRI.value,
      // function: For identifiers that declare a function.
      "function": colors.D_BASIC_DEF_ORANGE_PRI.value,
      // method: For identifiers that declare a method.
      "method": colors.D_BASIC_DEF_ORANGE_PRI.value,
      // macro: For identifiers that declare a macro.
      "macro": colors.D_BASIC_ALT_PINK_PRI.value,
      // label: For identifiers that declare a label.
      "label": colors.D_BASIC_ALT_PINK_PRI.value,
      // comment: For tokens that represent a comment.
      "comment": { "foreground": colors.D_BASIC_DEF_GREEN_PRI.value, "italic": true },
      // string: For tokens that represent a string literal.
      "string": colors.D_BASIC_DEF_BROWN_PRI.value,
      // keyword: For tokens that represent a language keyword.
      "keyword": colors.D_BASIC_DEF_PINK_PRI.value,
      // modifier: Style for modifier keywords
      "modifier": colors.D_BASIC_DEF_BLUE_PRI.value,
      // plainKeyword
      "plainKeyword": colors.D_BASIC_DEF_BLUE_PRI.value,
      // number: For tokens that represent a number literal.
      "number": colors.D_BASIC_ALT_GREEN_PRI.value,
      // regexp: For tokens that represent a regular expression literal.
      "regexp": colors.D_BASIC_DEF_PURPLE_PRI.value,
      // operator: For tokens that represent an operator.
      "operator": colors.D_FILL_TEXT_SEC.value,
      // builtin: For symbols that are part of the language.
      "*.builtin": colors.D_BASIC_DEF_BLUE_PRI.value,
      // static: For class members (static members).
      "*.static": { "italic": true },
      // deprecated: For symbols that should no longer be used.
      "*.deprecated": { "strikethrough": true },
      // abstract: For types and member functions that are abstract.
      "*.abstract": { "bold": true },
      // OTHER SEMANTIC TOKENS
      "newOperator": colors.D_BASIC_DEF_BLUE_PRI.value,
      "stringLiteral": colors.D_BASIC_DEF_BROWN_PRI.value,
      "customLiteral": colors.D_BASIC_ALT_BLUE_PRI.value,
      "numberLiteral": colors.D_BASIC_ALT_GREEN_PRI.value,
      "selfParameter": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "magicFunction": colors.D_BASIC_DEF_PURPLE_PRI.value
    },
    "tokenColors": [
      // GENERAL TEXTMATE TOKENS

      // namespace
      {
        "scope": [
          "entity.name.type.namespace",
          "entity.name.namespace",
          "entity.name.type.module",
          "entity.name.module",
          "entity.name.type.package",
          "entity.name.package",
          "storage.modifier.import",
          "storage.modifier.package",
          "variable.language.wildcard.java",
          "entity.name.scope-resolution"
        ],
        "settings": {
          "foreground": colors.D_FILL_TEXT_PRI.value,
          "fontStyle": ""
        }
      },
      // class
      {
        "scope": [
          "entity.name.type.class",
          "entity.other.inherited-class",
          "meta.definition.class.inherited.classes",
          "entity.other.attribute-name.class",
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_YELLOW_PRI.value,
          "fontStyle": ""
        }
      },
      // enum
      {
        "scope": [
          "entity.name.type.enum"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_MINT_PRI.value,
          "fontStyle": ""
        }
      },
      // interface
      {
        "scope": [
          "entity.name.type.interface",
          "meta.definition.class.implemented.interfaces"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_MINT_PRI.value,
          "fontStyle": ""
        }
      },
      // struct
      {
        "scope": [
          "entity.name.type.struct",
          "storage.type.struct"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_MINT_PRI.value,
          "fontStyle": ""
        }
      },
      // typeParameter
      {
        "scope": [
          "storage.type.generic"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_MINT_PRI.value,
          "fontStyle": ""
        }
      },
      // type
      {
        "scope": [
          "entity.name.type",
          "entity.name.tag",
          "keyword.operator.less"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_MINT_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "storage.type"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      // parameter
      {
        "scope": [
          "variable.parameter"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_ORANGE_PRI.value,
          "fontStyle": ""
        }
      },
      // variable
      {
        "scope": [
          "variable",
          "meta.method variable",
          "meta.function variable",
          "meta.block variable",
          "entity.name.variable",
          "variable.other.readwrite"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_ORANGE_PRI.value,
          "fontStyle": "underline"
        }
      },
      // variable.readonly
      {
        "scope": [
          "variable.other.constant",
          "meta.method variable.other.constant",
          "meta.function variable.other.constant",
          "meta.block variable.other.constant",
          "entity.name.variable.constant"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_ORANGE_PRI.value,
          "fontStyle": ""
        }
      },
      // property
      {
        "scope": [
          "variable.other.property",
          "meta.class variable",
          "meta.interface variable",
          "entity.name.variable.property",
          "entity.name.variable.field"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_YELLOW_PRI.value,
          "fontStyle": "underline"
        }
      },
      // property.readonly
      {
        "scope": [
          "variable.other.constant.property",
          "meta.class variable.other.constant",
          "meta.interface variable.other.constant",
          "entity.name.variable.field.constant",
          "entity.name.variable.property.constant"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_YELLOW_PRI.value,
          "fontStyle": ""
        }
      },
      // enumMember
      {
        "scope": [
          "variable.other.enummember",
          "constant.other.enum",
          "entity.name.variable.enum-member"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_MINT_PRI.value,
          "fontStyle": ""
        }
      },
      // decorator
      {
        "scope": [
          "meta.decorator",
          "meta.function.decorator",
          "entity.name.function.decorator"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_RED_PRI.value,
          "fontStyle": ""
        }
      },
      // annotation
      {
        "scope": [
          "entity.name.type.annotation",
          "meta.declaration.annotation",
          "storage.type.annotation",
          "entity.other.attribute",
          "meta.attribute",
          "support.attribute"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_RED_PRI.value,
          "fontStyle": ""
        }
      },
      // event
      {
        "scope": [
          "keyword.other.event",
          "variable.other.event"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_RED_PRI.value,
          "fontStyle": ""
        }
      },
      // function
      {
        "scope": [
          "entity.name.function",
          "support.function",
          "support.constant.handlebars",
          "source.powershell variable.other.member",
          "entity.name.operator.custom-literal",
          "entity.other.attribute-name.parent-selector"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_ORANGE_PRI.value,
          "fontStyle": ""
        }
      },
      // method
      {
        "scope": [
          "entity.name.method",
          "entity.name.function.member"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_ORANGE_PRI.value,
          "fontStyle": ""
        }
      },
      // macro
      {
        "scope": [
          "meta.preprocessor.macro",
          "keyword.preprocessor",
          "keyword.control.directive",
          "entity.name.function.macro",
          "entity.name.function.preprocessor",
          "meta.preprocessor punctuation"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_PINK_PRI.value,
          "fontStyle": ""
        }
      },
      // label
      {
        "scope": [
          "entity.name.label"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_PINK_PRI.value,
          "fontStyle": ""
        }
      },
      // comment
      {
        "scope": [
          "comment",
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_GREEN_PRI.value,
          "fontStyle": "italic"
        }
      },
      // string
      {
        "scope": [
          "string",
          "string.tag",
          "string.value",
          "meta.preprocessor.string",
          "meta.embedded.assembly"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_BROWN_PRI.value,
          "fontStyle": ""
        }
      },
      // string template
      {
        "scope": [
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
          "punctuation.section.embedded",
          "meta.template.expression"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      // special string
      {
        "scope": [
          "constant.character",
          "constant.other.unicode-range"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": "constant.character.escape",
        "settings": {
          "foreground": colors.D_BASIC_DEF_RED_PRI.value,
          "fontStyle": ""
        }
      },
      // keyword
      {
        "scope": [
          "keyword",
          "storage.type.package",
          "storage.type.import",
          "keyword.operator.delete",
          "keyword.other.using",
          "keyword.other.operator",
          "entity.name.operator",
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_PINK_PRI.value,
          "fontStyle": ""
        }
      },
      // modifier
      {
        "scope": [
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
          "support.constant.media"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      // number
      {
        "scope": [
          "constant.numeric",
          "keyword.operator.plus.exponent",
          "keyword.operator.minus.exponent",
          "keyword.other.unit",
          "meta.preprocessor.numeric",
          "source.css.less meta.property-value constant.numeric",
          "source.css.less meta.property-value keyword.other.unit",
          "constant.other.reference.link"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_GREEN_PRI.value,
          "fontStyle": ""
        }
      },
      // regexp
      {
        "scope": [
          "string.regexp",
          "constant.regexp"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_PURPLE_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.group.regexp",
          "punctuation.definition.group.assertion.regexp",
          "punctuation.definition.character-class.regexp",
          "punctuation.character.set.begin.regexp",
          "punctuation.character.set.end.regexp",
          "keyword.operator.negation.regexp",
          "support.other.parenthesis.regexp"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_PURPLE_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "constant.character.character-class.regexp",
          "constant.other.character-class.set.regexp",
          "constant.other.character-class.regexp",
          "constant.character.set.regexp"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_PINK_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "keyword.operator.or.regexp",
          "keyword.control.anchor.regexp"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": "keyword.operator.quantifier.regexp",
        "settings": {
          "foreground": colors.D_BASIC_ALT_GREEN_PRI.value,
          "fontStyle": ""
        }
      },
      // operator
      {
        "scope": [
          "keyword.operator"
        ],
        "settings": {
          "foreground": colors.D_FILL_TEXT_SEC.value,
          "fontStyle": ""
        }
      },

      // OTHER TEXTMATE TOKENS

      // this, self, etc.
      {
        "scope": [
          "variable.language",
          "variable.parameter.function.language.special"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_YELLOW_PRI.value,
          "fontStyle": ""
        }
      },
      // primitive
      {
        "scope": [
          "storage.type.primitive",
          "storage.type.built-in",
          "support.type.primitive",
          "support.type.built-in",
          "keyword.type"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      // new operator
      {
        "scope": [
          "keyword.operator.new",
          "keyword.control.new"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      // constant
      {
        "scope": [
          "variable.other.constant",
          "constant.other.caps",
          "constant.other.php"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_MINT_PRI.value,
          "fontStyle": ""
        }
      },
      // color
      {
        "scope": [
          "variable.other.color",
          "constant.other.color",
          "support.constant.color",
          "constant.other.rgb-value",
          "constant.other.color.rgb-value",
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_BROWN_PRI.value,
          "fontStyle": ""
        }
      },
      // invalid
      {
        "scope": [
          "invalid"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_RED_PRI.value,
          "fontStyle": ""
        }
      },
      // id
      {
        "scope": [
          "entity.other.attribute-name.id"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_PURPLE_PRI.value,
          "fontStyle": ""
        }
      },
      // property-name, attribute-name
      {
        "scope": [
          "support.type.property-name",
          "entity.other.attribute-name",
          "meta.property-value"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      // property-name-vendored
      {
        "scope": [
          "support.type.vendored.property-name",
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_BLUE_PRI.value,
          "fontStyle": "underline"
        }
      },
      // psuedo-class
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_YELLOW_PRI.value,
          "fontStyle": ""
        }
      },
      // psuedo-element
      {
        "scope": [
          "entity.other.attribute-name.pseudo-element"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_PURPLE_PRI.value,
          "fontStyle": ""
        }
      },
      // other keyword
      {
        "scope": [
          "entity.other.keyframe-offset",
          "entity.name.tag.reference",
          "meta.at-rule.keyframes",
          "entity.other.attribute-name.scss",
          "source.css.less constant.numeric",
          "source.css.less keyword.other.unit"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_PINK_PRI.value,
          "fontStyle": ""
        }
      },
      // markdown
      {
        "scope": [
          "heading.1",
          "markup.heading.setext.1"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_RED_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.2",
          "markup.heading.setext.2"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_ORANGE_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.3"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_YELLOW_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.4"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_GREEN_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.5"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_MINT_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.6"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "emphasis",
          "markup.italic"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "strong",
          "markup.bold"
        ],
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "deleted",
          "markup.strikethrough"
        ],
        "settings": {
          "fontStyle": "strikethrough"
        }
      },
      {
        "scope": [
          "markup.underline"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "scope": [
          "markup.underline.link"
        ],
        "settings": {
          "foreground": colors.D_BASIC_ALT_BLUE_PRI.value,
          "fontStyle": "underline"
        }
      },
      {
        "scope": [
          "string.other.link",
          "punctuation.definition.list.begin.markdown"
        ],
        "settings": {
          "foreground": colors.D_FILL_ACCENT_TEXT_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "markup.fenced_code.block",
          "markup.inline.raw",
          "markup.raw.block"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_PINK_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_PURPLE_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.tag"
        ],
        "settings": {
          "foreground": colors.D_FILL_TEXT_SEC.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "meta.separator"
        ],
        "settings": {
          "foreground": colors.D_BASIC_DEF_BROWN_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": "markup.inserted",
        "settings": {
          "foreground": colors.D_BASIC_DEF_GREEN_PRI.value
        }
      },
      {
        "scope": "markup.deleted",
        "settings": {
          "foreground": colors.D_BASIC_DEF_RED_PRI.value
        }
      },
      {
        "scope": "markup.changed",
        "settings": {
          "foreground": colors.D_BASIC_DEF_BLUE_PRI.value
        }
      },
    ],
    "colors": {
      // @{VSCODE: v1.78.2}
      // activityBar | @{VSCODE}
      "activityBar.activeBackground": colors.D_BG_LAYER.value,
      "activityBar.activeBorder": colors.D_FILL_ACCENT_PRI.value,
      "activityBar.activeFocusBorder": colors.D_BASIC_NEU_PRI.value,
      "activityBar.background": colors.D_BG_SOLID_BASE.value,
      "activityBar.border": colors.D_STROKE_DIVIDER.value,
      "activityBar.dropBorder": colors.D_FILL_ACCENT_PRI.value,
      "activityBar.foreground": colors.D_FILL_TEXT_PRI.value,
      "activityBar.inactiveForeground": colors.D_FILL_TEXT_SEC.value,
      "activityBarBadge.background": colors.D_FILL_ACCENT_PRI.value,
      "activityBarBadge.foreground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      // badge | @{VSCODE}
      "badge.background": colors.D_FILL_ACCENT_PRI.value,
      "badge.foreground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      // banner | @{VSCODE}
      "banner.background": colors.D_FILL_ACCENT_PRI.value,
      "banner.foreground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      "banner.iconForeground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      // breadcrumb | @{VSCODE}
      "breadcrumb.activeSelectionForeground": colors.D_FILL_ACCENT_TEXT_PRI.value,
      "breadcrumb.background": colors.D_BG_SOLID_BASE.value,
      "breadcrumb.focusForeground": colors.D_FILL_TEXT_PRI.value,
      "breadcrumb.foreground": colors.D_FILL_TEXT_SEC.value,
      // breadcrumbPicker | @{VSCODE}
      "breadcrumbPicker.background": colors.D_BG_SOLID_ON_CANVAS.value,
      // button | @{VSCODE}
      "button.background": colors.D_FILL_ACCENT_PRI.value,
      "button.border": colors.D_STROKE_CONTROL.value,
      "button.foreground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      "button.hoverBackground": colors.D_FILL_ACCENT_SEC.value,
      "button.secondaryBackground": colors.D_FILL_CONTROL_PRI.value,
      "button.secondaryForeground": colors.D_FILL_TEXT_PRI.value,
      "button.secondaryHoverBackground": colors.D_FILL_CONTROL_SEC.value,
      "button.separator": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      // charts | @{VSCODE}
      "charts.blue": colors.D_BASIC_DEF_BLUE_PRI.value,
      "charts.foreground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      "charts.green": colors.D_BASIC_DEF_GREEN_PRI.value,
      "charts.lines": colors.D_STROKE_DIVIDER.value,
      "charts.orange": colors.D_BASIC_DEF_ORANGE_PRI.value,
      "charts.purple": colors.D_BASIC_DEF_PURPLE_PRI.value,
      "charts.red": colors.D_BASIC_DEF_RED_PRI.value,
      "charts.yellow": colors.D_BASIC_DEF_YELLOW_PRI.value,
      // checkbox | @{VSCODE}
      "checkbox.background": colors.D_FILL_CONTROL_ALT.value,
      "checkbox.border": colors.D_STROKE_CONTROL_STRONG.value,
      "checkbox.foreground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      "checkbox.selectBackground": colors.D_FILL_ACCENT_PRI.value,
      // commandCenter | @{VSCODE}
      "commandCenter.activeBackground": colors.D_FILL_CONTROL_SEC.value,
      "commandCenter.activeBorder": colors.D_STROKE_CONTROL.value,
      "commandCenter.activeForeground": colors.D_FILL_TEXT_PRI.value,
      "commandCenter.background": colors.D_FILL_CONTROL_PRI.value,
      "commandCenter.border": colors.D_STROKE_CONTROL.value,
      "commandCenter.foreground": colors.D_FILL_TEXT_SEC.value,
      "commandCenter.inactiveBorder": colors.D_FILL_CONTROL_SEC.value,
      "commandCenter.inactiveForeground": colors.D_FILL_TEXT_DIS.value,
      // contrast | @{VSCODE}
      "contrastActiveBorder": colors.DL_TRANSPARENT.value,
      "contrastBorder": colors.DL_TRANSPARENT.value,
      // debugConsole | @{VSCODE}
      "debugConsole.errorForeground": colors.D_BASIC_DEF_RED_PRI.value,
      "debugConsole.infoForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "debugConsole.sourceForeground": colors.D_FILL_TEXT_PRI.value,
      "debugConsole.warningForeground": colors.D_BASIC_DEF_ORANGE_PRI.value,
      "debugConsoleInputIcon.foreground": colors.D_FILL_ACCENT_PRI.value,
      // debugExceptionWidget | @{VSCODE}
      "debugExceptionWidget.background": colors.D_BASIC_LC_RED_PRI.value,
      "debugExceptionWidget.border": colors.D_STROKE_SURFACE_FLYOUT.value,
      // debugIcon | @{VSCODE}
      "debugIcon.breakpointCurrentStackframeForeground": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "debugIcon.breakpointDisabledForeground": colors.D_FILL_TEXT_DIS.value,
      "debugIcon.breakpointForeground": colors.D_BASIC_DEF_RED_PRI.value,
      "debugIcon.breakpointStackframeForeground": colors.D_BASIC_DEF_YELLOW_TER.value,
      "debugIcon.breakpointUnverifiedForeground": colors.D_BASIC_DEF_ORANGE_PRI.value,
      "debugIcon.continueForeground": colors.D_BASIC_DEF_GREEN_PRI.value,
      "debugIcon.disconnectForeground": colors.D_BASIC_DEF_RED_PRI.value,
      "debugIcon.pauseForeground": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "debugIcon.restartForeground": colors.D_BASIC_DEF_GREEN_PRI.value,
      "debugIcon.startForeground": colors.D_BASIC_DEF_GREEN_PRI.value,
      "debugIcon.stepBackForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "debugIcon.stepIntoForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "debugIcon.stepOutForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "debugIcon.stepOverForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "debugIcon.stopForeground": colors.D_BASIC_DEF_RED_PRI.value,
      // debugTokenExpression | @{VSCODE}
      "debugTokenExpression.boolean": colors.D_BASIC_DEF_BLUE_PRI.value,
      "debugTokenExpression.error": colors.D_BASIC_DEF_RED_PRI.value,
      "debugTokenExpression.name": colors.D_FILL_ACCENT_TEXT_PRI.value,
      "debugTokenExpression.number": colors.D_BASIC_ALT_GREEN_PRI.value,
      "debugTokenExpression.string": colors.D_BASIC_DEF_BROWN_PRI.value,
      "debugTokenExpression.value": colors.D_BASIC_DEF_MINT_PRI.value,
      // debugView | @{VSCODE}
      "debugView.exceptionLabelBackground": colors.D_BASIC_DEF_RED_PRI.value,
      "debugView.exceptionLabelForeground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      "debugView.stateLabelBackground": colors.D_BG_LAYER.value,
      "debugView.stateLabelForeground": colors.D_FILL_TEXT_PRI.value,
      "debugView.valueChangedHighlight": colors.D_BASIC_ALT_BLUE_PRI.value,
      // descriptionForeground | @{VSCODE}
      "descriptionForeground": colors.D_FILL_TEXT_SEC.value,
      // diffEditor | @{VSCODE}
      "diffEditor.border": colors.D_STROKE_DIVIDER.value,
      "diffEditor.diagonalFill": colors.D_STROKE_DIVIDER.value,
      "diffEditor.insertedLineBackground": colors.D_BASIC_DEF_GREEN_QUI.value,
      "diffEditor.insertedTextBackground": colors.D_BASIC_DEF_GREEN_QUA.value,
      "diffEditor.insertedTextBorder": colors.DL_TRANSPARENT.value,
      "diffEditor.removedLineBackground": colors.D_BASIC_DEF_RED_QUI.value,
      "diffEditor.removedTextBackground": colors.D_BASIC_DEF_RED_QUA.value,
      "diffEditor.removedTextBorder": colors.DL_TRANSPARENT.value,
      // disabledForeground | @{VSCODE}
      "disabledForeground": colors.D_FILL_TEXT_DIS.value,
      // dropdown | @{VSCODE}
      "dropdown.background": colors.D_FILL_CONTROL_PRI.value,
      "dropdown.border": colors.D_STROKE_CONTROL.value,
      "dropdown.foreground": colors.D_FILL_TEXT_PRI.value,
      "dropdown.listBackground": colors.D_BG_SOLID_FLYOUT.value,
      // editor | @{VSCODE}
      "editor.background": colors.D_BG_SOLID_CANVAS.value,
      "editor.findMatchBackground": colors.D_BASIC_DEF_MINT_QUA.value,
      "editor.findMatchBorder": colors.D_STROKE_CONTROL.value,
      "editor.findMatchHighlightBackground": colors.D_BASIC_DEF_MINT_QUI.value,
      "editor.findMatchHighlightBorder": colors.D_STROKE_CONTROL.value,
      "editor.findRangeHighlightBackground": colors.D_BASIC_NEU_SEP.value,
      "editor.findRangeHighlightBorder": null,
      "editor.focusedStackFrameHighlightBackground": colors.D_BASIC_DEF_YELLOW_QUI.value,
      "editor.foldBackground": colors.D_BASIC_NEU_SEP.value,
      "editor.foreground": colors.D_FILL_TEXT_SEC.value,
      "editor.hoverHighlightBackground": colors.D_BASIC_NEU_SEP.value,
      "editor.inactiveSelectionBackground": colors.D_BASIC_NEU_SEP.value,
      "editor.inlineValuesBackground": colors.D_BASIC_DEF_YELLOW_QUI.value,
      "editor.inlineValuesForeground": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "editor.lineHighlightBackground": null,
      "editor.lineHighlightBorder": colors.D_STROKE_CONTROL.value,
      "editor.linkedEditingBackground": colors.D_BASIC_DEF_BLUE_QUA.value,
      "editor.rangeHighlightBackground": colors.D_BASIC_NEU_SEP.value,
      "editor.rangeHighlightBorder": null,
      "editor.selectionBackground": colors.D_BASIC_NEU_SEN.value,
      "editor.selectionForeground": colors.D_FILL_TEXT_PRI.value,
      "editor.selectionHighlightBackground": colors.D_BASIC_NEU_SEP.value,
      "editor.selectionHighlightBorder": colors.D_STROKE_CONTROL.value,
      "editor.snippetFinalTabstopHighlightBackground": null,
      "editor.snippetFinalTabstopHighlightBorder": colors.D_BASIC_DEF_BLUE_PRI.value,
      "editor.snippetTabstopHighlightBackground": colors.D_BASIC_DEF_BLUE_QUA.value,
      "editor.snippetTabstopHighlightBorder": colors.D_STROKE_CONTROL.value,
      "editor.stackFrameHighlightBackground": colors.D_BASIC_DEF_YELLOW_QUA.value,
      "editor.symbolHighlightBackground": null,
      "editor.symbolHighlightBorder": colors.D_BASIC_DEF_PURPLE_PRI.value,
      "editor.wordHighlightBackground": colors.D_BASIC_LC_PINK_QUA.value,
      "editor.wordHighlightBorder": colors.D_STROKE_CONTROL.value,
      "editor.wordHighlightStrongBackground": colors.D_BASIC_DEF_PURPLE_QUA.value,
      "editor.wordHighlightStrongBorder": colors.D_STROKE_CONTROL.value,
      "editor.wordHighlightTextBackground": colors.D_BASIC_LC_PINK_QUA.value,
      "editor.wordHighlightTextBorder": colors.D_STROKE_CONTROL.value,
      // editorBracketHighlight | @{VSCODE}
      "editorBracketHighlight.foreground1": colors.D_BASIC_ALT_YELLOW_PRI.value,
      "editorBracketHighlight.foreground2": colors.D_BASIC_ALT_ORANGE_PRI.value,
      "editorBracketHighlight.foreground3": colors.D_BASIC_ALT_RED_PRI.value,
      "editorBracketHighlight.foreground4": colors.D_BASIC_ALT_PURPLE_PRI.value,
      "editorBracketHighlight.foreground5": colors.D_BASIC_ALT_BLUE_PRI.value,
      "editorBracketHighlight.foreground6": colors.D_BASIC_ALT_GREEN_PRI.value,
      "editorBracketHighlight.unexpectedBracket.foreground": colors.D_BASIC_DEF_RED_PRI.value,
      // editorBracketMatch | @{VSCODE}
      "editorBracketMatch.background": colors.D_BASIC_DEF_PINK_QUA.value,
      "editorBracketMatch.border": colors.D_STROKE_CONTROL.value,
      // editorCodeLens | @{VSCODE}
      "editorCodeLens.foreground": colors.D_FILL_TEXT_TER.value,
      // editorCommentsWidget | @{VSCODE}
      "editorCommentsWidget.rangeActiveBackground": colors.D_BASIC_DEF_BLUE_QUA.value,
      "editorCommentsWidget.rangeActiveBorder": colors.DL_TRANSPARENT.value,
      "editorCommentsWidget.rangeBackground": colors.D_BASIC_DEF_BLUE_QUI.value,
      "editorCommentsWidget.rangeBorder": colors.DL_TRANSPARENT.value,
      "editorCommentsWidget.resolvedBorder": colors.D_BASIC_DEF_GREEN_PRI.value,
      "editorCommentsWidget.unresolvedBorder": colors.D_BASIC_DEF_RED_PRI.value,
      // editorCursor | @{VSCODE}
      "editorCursor.background": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      "editorCursor.foreground": colors.D_FILL_ACCENT_PRI.value,
      // editorError | @{VSCODE}
      "editorError.background": null,
      "editorError.border": null,
      "editorError.foreground": colors.D_BASIC_DEF_RED_PRI.value,
      // editorGhostText | @{VSCODE}
      "editorGhostText.background": null,
      "editorGhostText.border": null,
      "editorGhostText.foreground": colors.D_FILL_TEXT_DIS.value,
      // editorGroup | @{VSCODE}
      "editorGroup.border": colors.D_STROKE_DIVIDER.value,
      "editorGroup.dropBackground": colors.D_BG_SMOKE.value,
      "editorGroup.dropIntoPromptBackground": colors.D_BG_SOLID_FLYOUT.value,
      "editorGroup.dropIntoPromptBorder": colors.D_STROKE_SURFACE_FLYOUT.value,
      "editorGroup.dropIntoPromptForeground": colors.D_FILL_TEXT_PRI.value,
      "editorGroup.emptyBackground": colors.D_BG_SOLID_BASE.value,
      "editorGroup.focusedEmptyBorder": null,
      // editorGroupHeader | @{VSCODE}
      "editorGroupHeader.border": colors.D_STROKE_DIVIDER.value,
      "editorGroupHeader.noTabsBackground": colors.D_BG_SOLID_BASE.value,
      "editorGroupHeader.tabsBackground": colors.D_BG_SOLID_BASE.value,
      "editorGroupHeader.tabsBorder": colors.D_STROKE_DIVIDER.value,
      // editorGutter | @{VSCODE}
      "editorGutter.addedBackground": colors.D_BASIC_DEF_GREEN_PRI.value,
      "editorGutter.background": colors.D_BG_SOLID_BASE.value,
      "editorGutter.commentGlyphForeground": colors.D_BASIC_NEU_QUA.value,
      "editorGutter.commentRangeForeground": colors.D_BG_SOLID_ON_CANVAS.value,
      "editorGutter.commentUnresolvedGlyphForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "editorGutter.deletedBackground": colors.D_BASIC_DEF_RED_PRI.value,
      "editorGutter.foldingControlForeground": colors.D_BASIC_NEU_QUA.value,
      "editorGutter.modifiedBackground": colors.D_BASIC_DEF_BLUE_PRI.value,
      // editorHint | @{VSCODE}
      "editorHint.border": null,
      "editorHint.foreground": colors.D_BASIC_NEU_PRI.value,
      // editorHoverWidget | @{VSCODE}
      "editorHoverWidget.background": colors.D_BG_SOLID_FLYOUT.value,
      "editorHoverWidget.border": colors.D_STROKE_SURFACE_FLYOUT.value,
      "editorHoverWidget.foreground": colors.D_FILL_TEXT_PRI.value,
      "editorHoverWidget.highlightForeground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      "editorHoverWidget.statusBarBackground": colors.D_BG_LAYER.value,
      // editorIndentGuide | @{VSCODE}
      "editorIndentGuide.activeBackground": colors.D_BASIC_NEU_QUA.value,
      "editorIndentGuide.background": colors.D_BASIC_NEU_QUI.value,
      // editorInfo | @{VSCODE}
      "editorInfo.background": null,
      "editorInfo.border": null,
      "editorInfo.foreground": colors.D_BASIC_DEF_BLUE_PRI.value,
      // editorInlayHint | @{VSCODE}
      "editorInlayHint.background": colors.D_BASIC_NEU_SEN.value,
      "editorInlayHint.foreground": colors.D_FILL_TEXT_SEC.value,
      "editorInlayHint.parameterBackground": colors.D_BASIC_LC_ORANGE_PRI.value,
      "editorInlayHint.parameterForeground": colors.D_BASIC_ALT_ORANGE_PRI.value,
      "editorInlayHint.typeBackground": colors.D_BASIC_LC_MINT_PRI.value,
      "editorInlayHint.typeForeground": colors.D_BASIC_DEF_MINT_PRI.value,
      // editorLightBulb | @{VSCODE}
      "editorLightBulb.foreground": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "editorLightBulbAutoFix.foreground": colors.D_BASIC_DEF_YELLOW_PRI.value,
      // editorLineNumber | @{VSCODE}
      "editorLineNumber.activeForeground": colors.D_FILL_TEXT_PRI.value,
      "editorLineNumber.dimmedForeground": colors.D_FILL_TEXT_DIS.value,
      "editorLineNumber.foreground": colors.D_FILL_TEXT_TER.value,
      // editorLink | @{VSCODE}
      "editorLink.activeForeground": colors.D_FILL_ACCENT_TEXT_PRI.value,
      // editorMarkerNavigation | @{VSCODE}
      "editorMarkerNavigation.background": colors.D_BG_SOLID_FLYOUT.value,
      "editorMarkerNavigationError.background": colors.D_BASIC_DEF_RED_PRI.value,
      "editorMarkerNavigationError.headerBackground": colors.D_BASIC_LC_RED_PRI.value,
      "editorMarkerNavigationInfo.background": colors.D_BASIC_DEF_BLUE_PRI.value,
      "editorMarkerNavigationInfo.headerBackground": colors.D_BASIC_LC_BLUE_PRI.value,
      "editorMarkerNavigationWarning.background": colors.D_BASIC_DEF_ORANGE_PRI.value,
      "editorMarkerNavigationWarning.headerBackground": colors.D_BASIC_LC_ORANGE_PRI.value,
      // editorOverviewRuler | @{VSCODE}
      "editorOverviewRuler.addedForeground": colors.D_BASIC_DEF_GREEN_SEC.value,
      "editorOverviewRuler.background": colors.D_BG_SOLID_BASE.value,
      "editorOverviewRuler.border": colors.D_STROKE_CONTROL.value,
      "editorOverviewRuler.bracketMatchForeground": colors.D_BASIC_DEF_BROWN_SEC.value,
      "editorOverviewRuler.commonContentForeground": colors.D_BASIC_NEU_QUA.value,
      "editorOverviewRuler.currentContentForeground": colors.D_BASIC_DEF_MINT_TER.value,
      "editorOverviewRuler.deletedForeground": colors.D_BASIC_DEF_RED_SEC.value,
      "editorOverviewRuler.errorForeground": colors.D_BASIC_DEF_RED_PRI.value,
      "editorOverviewRuler.findMatchForeground": colors.D_BASIC_DEF_MINT_SEC.value,
      "editorOverviewRuler.incomingContentForeground": colors.D_BASIC_DEF_BLUE_TER.value,
      "editorOverviewRuler.infoForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "editorOverviewRuler.modifiedForeground": colors.D_BASIC_DEF_BLUE_SEC.value,
      "editorOverviewRuler.rangeHighlightForeground": colors.D_BASIC_NEU_SEP.value,
      "editorOverviewRuler.selectionHighlightForeground": colors.D_BASIC_NEU_SEN.value,
      "editorOverviewRuler.warningForeground": colors.D_BASIC_DEF_ORANGE_PRI.value,
      "editorOverviewRuler.wordHighlightForeground": colors.D_BASIC_DEF_PINK_SEC.value,
      "editorOverviewRuler.wordHighlightStrongForeground": colors.D_BASIC_DEF_PURPLE_SEC.value,
      "editorOverviewRuler.wordHighlightTextForeground": colors.D_BASIC_DEF_PINK_SEC.value,
      // editorPane | @{VSCODE}
      "editorPane.background": colors.D_BG_SOLID_BASE.value,
      // editorRuler | @{VSCODE}
      "editorRuler.foreground": colors.D_STROKE_DIVIDER.value,
      // editorStickyScroll | @{VSCODE}
      "editorStickyScroll.background": colors.D_BG_SOLID_SURFACE.value,
      "editorStickyScrollHover.background": colors.D_FILL_CONTROL_PRI.value,
      // editorSuggestWidget | @{VSCODE}
      "editorSuggestWidget.background": colors.D_BG_SOLID_FLYOUT.value,
      "editorSuggestWidget.border": colors.D_STROKE_SURFACE_FLYOUT.value,
      "editorSuggestWidget.focusHighlightForeground": colors.D_FILL_ACCENT_TEXT_PRI.value,
      "editorSuggestWidget.foreground": colors.D_FILL_TEXT_SEC.value,
      "editorSuggestWidget.highlightForeground": colors.D_FILL_ACCENT_TEXT_PRI.value,
      "editorSuggestWidget.selectedBackground": colors.D_FILL_CONTROL_PRI.value,
      "editorSuggestWidget.selectedForeground": colors.D_FILL_TEXT_PRI.value,
      "editorSuggestWidget.selectedIconForeground": colors.D_FILL_TEXT_PRI.value,
      "editorSuggestWidgetStatus.foreground": colors.D_FILL_ACCENT_PRI.value,
      // editorUnicodeHighlight | @{VSCODE}
      "editorUnicodeHighlight.background": null,
      "editorUnicodeHighlight.border": colors.D_BASIC_DEF_YELLOW_PRI.value,
      // editorUnnecessaryCode | @{VSCODE}
      "editorUnnecessaryCode.border": null,
      "editorUnnecessaryCode.opacity": colors.D_BASIC_NEU_QUA.value,
      // editorWarning | @{VSCODE}
      "editorWarning.background": null,
      "editorWarning.border": null,
      "editorWarning.foreground": colors.D_BASIC_DEF_ORANGE_PRI.value,
      // editorWhitespace | @{VSCODE}
      "editorWhitespace.foreground": colors.D_FILL_TEXT_DIS.value,
      // editorWidget | @{VSCODE}
      "editorWidget.background": colors.D_BG_SOLID_FLYOUT.value,
      "editorWidget.border": colors.D_STROKE_SURFACE_FLYOUT.value,
      "editorWidget.foreground": colors.D_FILL_TEXT_PRI.value,
      "editorWidget.resizeBorder": colors.D_FILL_ACCENT_PRI.value,
      // errorForeground | @{VSCODE}
      "errorForeground": colors.D_BASIC_DEF_RED_PRI.value,
      // extensionBadge | @{VSCODE}
      "extensionBadge.remoteBackground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "extensionBadge.remoteForeground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      // extensionButton | @{VSCODE}
      "extensionButton.background": colors.D_FILL_ACCENT_PRI.value,
      "extensionButton.foreground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      "extensionButton.hoverBackground": colors.D_FILL_ACCENT_SEC.value,
      "extensionButton.prominentBackground": colors.D_FILL_ACCENT_PRI.value,
      "extensionButton.prominentForeground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      "extensionButton.prominentHoverBackground": colors.D_FILL_ACCENT_SEC.value,
      "extensionButton.separator": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      // extensionIcon | @{VSCODE}
      "extensionIcon.preReleaseForeground": colors.D_BASIC_DEF_MINT_PRI.value,
      "extensionIcon.sponsorForeground": colors.D_BASIC_DEF_RED_PRI.value,
      "extensionIcon.starForeground": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "extensionIcon.verifiedForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      // focusBorder | @{VSCODE}
      "focusBorder": colors.D_STROKE_FOCUS.value,
      // foreground | @{VSCODE}
      "foreground": colors.D_FILL_TEXT_PRI.value,
      // gitDecoration | @{VSCODE}
      "gitDecoration.addedResourceForeground": colors.D_BASIC_DEF_GREEN_PRI.value,
      "gitDecoration.conflictingResourceForeground": colors.D_BASIC_DEF_ORANGE_PRI.value,
      "gitDecoration.deletedResourceForeground": colors.D_BASIC_DEF_RED_PRI.value,
      "gitDecoration.ignoredResourceForeground": colors.D_FILL_TEXT_TER.value,
      "gitDecoration.modifiedResourceForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "gitDecoration.renamedResourceForeground": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "gitDecoration.stageDeletedResourceForeground": colors.D_BASIC_ALT_RED_PRI.value,
      "gitDecoration.stageModifiedResourceForeground": colors.D_BASIC_ALT_BLUE_PRI.value,
      "gitDecoration.submoduleResourceForeground": colors.D_BASIC_DEF_MINT_PRI.value,
      "gitDecoration.untrackedResourceForeground": colors.D_BASIC_ALT_GREEN_PRI.value,
      // input | @{VSCODE}
      "input.background": colors.D_FILL_CONTROL_PRI.value,
      "input.border": colors.D_STROKE_CONTROL.value,
      "input.foreground": colors.D_FILL_TEXT_PRI.value,
      "input.placeholderForeground": colors.D_FILL_TEXT_SEC.value,
      // inputOption | @{VSCODE}
      "inputOption.activeBackground": colors.D_FILL_ACCENT_PRI.value,
      "inputOption.activeBorder": colors.D_STROKE_CONTROL.value,
      "inputOption.activeForeground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      "inputOption.hoverBackground": colors.D_FILL_CONTROL_PRI.value,
      // inputValidation | @{VSCODE}
      "inputValidation.errorBackground": colors.D_FILL_SYSTEM_BG_CRITICAL.value,
      "inputValidation.errorBorder": colors.D_BASIC_DEF_RED_QUA.value,
      "inputValidation.errorForeground": colors.D_FILL_SYSTEM_FG_CRITICAL.value,
      "inputValidation.infoBackground": colors.D_FILL_SYSTEM_BG_INFO.value,
      "inputValidation.infoBorder": colors.D_BASIC_DEF_BLUE_QUA.value,
      "inputValidation.infoForeground": colors.D_FILL_SYSTEM_FG_INFO.value,
      "inputValidation.warningBackground": colors.D_FILL_SYSTEM_BG_CAUTION.value,
      "inputValidation.warningBorder": colors.D_BASIC_DEF_ORANGE_QUA.value,
      "inputValidation.warningForeground": colors.D_FILL_SYSTEM_FG_CAUTION.value,
      // interactive | @{VSCODE} !{FUTURE} ?{Github Copilot X}
      "interactive.activeCodeBorder": "#FF0000",
      "interactive.inactiveCodeBorder": "#FF0000",
      "interactive.requestBackground": "#FF0000",
      "interactive.requestBorder": "#FF0000",
      // interactiveEditor | @{VSCODE} !{FUTURE} ?{Github Copilot X}
      "interactiveEditor.border": "#FF0000",
      "interactiveEditor.regionHighlight": "#FF0000",
      "interactiveEditor.shadow": "#FF0000",
      "interactiveEditorDiff.inserted": "#FF0000",
      "interactiveEditorDiff.removed": "#FF0000",
      "interactiveEditorInput.background": "#FF0000",
      "interactiveEditorInput.border": "#FF0000",
      "interactiveEditorInput.focusBorder": "#FF0000",
      "interactiveEditorInput.placeholderForeground": "#FF0000",
      // issues | @{Github Pull Requests and Issues}
      "issues.closed": colors.D_BASIC_DEF_PURPLE_PRI.value,
      "issues.newIssueDecoration": colors.D_FILL_TEXT_DIS.value,
      "issues.open": colors.D_BASIC_DEF_GREEN_PRI.value,
      // keybindingLabel | @{VSCODE}
      "keybindingLabel.background": colors.D_FILL_CONTROL_PRI.value,
      "keybindingLabel.border": colors.D_STROKE_CONTROL.value,
      "keybindingLabel.bottomBorder": colors.D_FILL_CONTROL_ALT.value,
      "keybindingLabel.foreground": colors.D_FILL_TEXT_PRI.value,
      "keybindingTable.headerBackground": colors.D_BG_SOLID_ON_CANVAS.value,
      "keybindingTable.rowsBackground": colors.D_BG_SOLID_ON_CANVAS.value,
      // list | @{VSCODE}
      "list.activeSelectionBackground": colors.D_BASIC_NEU_SEN.value,
      "list.activeSelectionForeground": colors.D_FILL_TEXT_PRI.value,
      "list.activeSelectionIconForeground": colors.D_FILL_TEXT_PRI.value,
      "list.deemphasizedForeground": colors.D_FILL_TEXT_TER.value,
      "list.dropBackground": colors.D_BG_SMOKE.value,
      "list.errorForeground": colors.D_BASIC_DEF_RED_PRI.value,
      "list.filterMatchBackground": colors.D_BASIC_DEF_MINT_QUA.value,
      "list.filterMatchBorder": colors.D_STROKE_CONTROL.value,
      "list.focusAndSelectionOutline": colors.D_STROKE_FOCUS.value,
      "list.focusBackground": colors.D_BASIC_NEU_SEP.value,
      "list.focusForeground": colors.D_FILL_TEXT_PRI.value,
      "list.focusHighlightForeground": colors.D_FILL_ACCENT_TEXT_PRI.value,
      "list.focusOutline": colors.D_STROKE_CONTROL.value,
      "list.highlightForeground": colors.D_FILL_ACCENT_TEXT_PRI.value,
      "list.hoverBackground": colors.D_BASIC_NEU_SEP.value,
      "list.hoverForeground": colors.D_FILL_TEXT_PRI.value,
      "list.inactiveFocusBackground": colors.D_BASIC_NEU_SEP.value,
      "list.inactiveFocusOutline": colors.D_STROKE_CARD.value,
      "list.inactiveSelectionBackground": colors.D_BASIC_NEU_SEN.value,
      "list.inactiveSelectionForeground": colors.D_FILL_TEXT_PRI.value,
      "list.inactiveSelectionIconForeground": colors.D_FILL_TEXT_PRI.value,
      "list.invalidItemForeground": colors.D_BASIC_DEF_RED_PRI.value,
      "list.warningForeground": colors.D_BASIC_DEF_ORANGE_PRI.value,
      // listFilterWidget | @{VSCODE}
      "listFilterWidget.background": colors.D_BG_SOLID_FLYOUT.value,
      "listFilterWidget.noMatchesOutline": colors.D_BASIC_DEF_RED_PRI.value,
      "listFilterWidget.outline": colors.D_STROKE_SURFACE_FLYOUT.value,
      "listFilterWidget.shadow": colors.D_SHADOW.value,
      // menu | @{VSCODE}
      "menu.background": colors.D_BG_SOLID_FLYOUT.value,
      "menu.border": colors.D_STROKE_SURFACE_FLYOUT.value,
      "menu.foreground": colors.D_FILL_TEXT_PRI.value,
      "menu.selectionBackground": colors.D_BASIC_NEU_SEP.value,
      "menu.selectionBorder": colors.D_STROKE_CONTROL.value,
      "menu.selectionForeground": colors.D_FILL_TEXT_PRI.value,
      "menu.separatorBackground": colors.D_STROKE_DIVIDER.value,
      // menuBar | @{VSCODE}
      "menubar.selectionBackground": colors.D_FILL_CONTROL_PRI.value,
      "menubar.selectionBorder": colors.D_STROKE_CONTROL.value,
      "menubar.selectionForeground": colors.D_FILL_TEXT_PRI.value,
      // merge | @{VSCODE}
      "merge.border": colors.D_STROKE_CONTROL.value,
      "merge.commonContentBackground": colors.D_BASIC_NEU_SEP.value,
      "merge.commonHeaderBackground": colors.D_BASIC_NEU_QUI.value,
      "merge.currentContentBackground": colors.D_BASIC_DEF_MINT_QUI.value,
      "merge.currentHeaderBackground": colors.D_BASIC_DEF_MINT_TER.value,
      "merge.incomingContentBackground": colors.D_BASIC_DEF_BLUE_QUI.value,
      "merge.incomingHeaderBackground": colors.D_BASIC_DEF_BLUE_TER.value,
      // mergeEditor | @{VSCODE}
      "mergeEditor.change.background": colors.D_BASIC_NEU_SEP.value,
      "mergeEditor.change.word.background": colors.D_BASIC_NEU_SEN.value,
      "mergeEditor.changeBase.background": colors.D_BASIC_NEU_SEP.value,
      "mergeEditor.changeBase.word.background": colors.D_BASIC_NEU_SEN.value,
      "mergeEditor.conflict.handled.minimapOverViewRuler": colors.D_BASIC_DEF_GREEN_TER.value,
      "mergeEditor.conflict.handledFocused.border": colors.D_BASIC_DEF_GREEN_PRI.value,
      "mergeEditor.conflict.handledUnfocused.border": colors.D_BASIC_DEF_GREEN_TER.value,
      "mergeEditor.conflict.input1.background": colors.D_BASIC_DEF_BLUE_TER.value,
      "mergeEditor.conflict.input2.background": colors.D_BASIC_LC_MINT_TER.value,
      "mergeEditor.conflict.unhandled.minimapOverViewRuler": colors.D_BASIC_DEF_RED_TER.value,
      "mergeEditor.conflict.unhandledFocused.border": colors.D_BASIC_DEF_RED_PRI.value,
      "mergeEditor.conflict.unhandledUnfocused.border": colors.D_BASIC_DEF_RED_TER.value,
      "mergeEditor.conflictingLines.background": colors.D_BASIC_DEF_ORANGE_QUI.value,
      // minimap | @{VSCODE}
      "minimap.background": colors.D_BG_SOLID_SURFACE.value,
      "minimap.errorHighlight": colors.D_BASIC_DEF_RED_QUA.value,
      "minimap.findMatchHighlight": colors.D_BASIC_DEF_MINT_QUA.value,
      "minimap.foregroundOpacity": colors.DL_OPAQUE.value,
      "minimap.selectionHighlight": colors.D_BASIC_NEU_QUA.value,
      "minimap.selectionOccurrenceHighlight": colors.D_BASIC_NEU_QUI.value,
      "minimap.warningHighlight": colors.D_BASIC_DEF_ORANGE_QUA.value,
      // minimapGutter | @{VSCODE}
      "minimapGutter.addedBackground": colors.D_BASIC_DEF_GREEN_PRI.value,
      "minimapGutter.deletedBackground": colors.D_BASIC_DEF_RED_PRI.value,
      "minimapGutter.modifiedBackground": colors.D_BASIC_DEF_BLUE_PRI.value,
      // minimapSlider | @{VSCODE}
      "minimapSlider.activeBackground": colors.D_FILL_CONTROL_TER.value,
      "minimapSlider.background": colors.D_FILL_CONTROL_PRI.value,
      "minimapSlider.hoverBackground": colors.D_FILL_CONTROL_SEC.value,
      // notebook | @{VSCODE} !{DEPRECATED}
      "notebook.cellBorderColor": colors.D_STROKE_CONTROL.value,
      "notebook.cellEditorBackground": colors.D_BG_SOLID_BASE.value,
      "notebook.cellHoverBackground": colors.D_BG_CARD_PRI.value,
      "notebook.cellInsertionIndicator": colors.D_FILL_ACCENT_PRI.value,
      "notebook.cellStatusBarItemHoverBackground": colors.D_FILL_CONTROL_PRI.value,
      "notebook.cellToolbarSeparator": colors.D_STROKE_SURFACE_FLYOUT.value,
      "notebook.editorBackground": colors.D_BG_SOLID_CANVAS.value,
      "notebook.focusedCellBackground": colors.D_BG_CARD_PRI.value,
      "notebook.focusedCellBorder": colors.D_FILL_ACCENT_PRI.value,
      "notebook.focusedEditorBorder": colors.D_STROKE_FOCUS.value,
      "notebook.inactiveFocusedCellBorder": colors.D_STROKE_CONTROL.value,
      "notebook.inactiveSelectedCellBorder": colors.D_STROKE_FOCUS.value,
      "notebook.outputContainerBackgroundColor": colors.D_BG_SOLID_SURFACE.value,
      "notebook.outputContainerBorderColor": colors.D_STROKE_CONTROL.value,
      "notebook.selectedCellBackground": colors.D_BG_CARD_PRI.value,
      "notebook.selectedCellBorder": colors.D_FILL_ACCENT_PRI.value,
      "notebook.symbolHighlightBackground": "#ff0000",
      "notebookEditorOverviewRuler.runningCellForeground": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "notebookScrollbarSlider.activeBackground": colors.D_FILL_CONTROL_TER.value,
      "notebookScrollbarSlider.background": colors.D_FILL_CONTROL_PRI.value,
      "notebookScrollbarSlider.hoverBackground": colors.D_FILL_CONTROL_SEC.value,
      "notebookStatusErrorIcon.foreground": colors.D_BASIC_DEF_RED_PRI.value,
      "notebookStatusRunningIcon.foreground": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "notebookStatusSuccessIcon.foreground": colors.D_BASIC_DEF_GREEN_PRI.value,
      // notifications | @{VSCODE}
      "notificationCenter.border": colors.D_STROKE_SURFACE_FLYOUT.value,
      "notificationCenterHeader.background": colors.D_BG_SOLID_BASE.value,
      "notificationCenterHeader.foreground": colors.D_FILL_TEXT_PRI.value,
      "notificationLink.foreground": colors.D_FILL_ACCENT_TEXT_PRI.value,
      "notifications.background": colors.D_BG_SOLID_FLYOUT.value,
      "notifications.border": colors.D_STROKE_DIVIDER.value,
      "notifications.foreground": colors.D_FILL_TEXT_PRI.value,
      "notificationsErrorIcon.foreground": colors.D_BASIC_DEF_RED_PRI.value,
      "notificationsInfoIcon.foreground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "notificationsWarningIcon.foreground": colors.D_BASIC_DEF_ORANGE_PRI.value,
      "notificationToast.border": colors.D_STROKE_SURFACE_FLYOUT.value,
      // panel | @{VSCODE}
      "panel.background": colors.D_BG_SOLID_SURFACE.value,
      "panel.border": colors.D_STROKE_DIVIDER.value,
      "panel.dropBorder": colors.D_FILL_ACCENT_PRI.value,
      "panelInput.border": colors.D_STROKE_CONTROL.value,
      "panelSection.border": colors.D_STROKE_FOCUS.value,
      "panelSection.dropBackground": colors.D_BG_SMOKE.value,
      "panelSectionHeader.background": colors.D_BG_LAYER.value,
      "panelSectionHeader.border": colors.D_STROKE_FOCUS.value,
      "panelSectionHeader.foreground": colors.D_FILL_TEXT_SEC.value,
      "panelTitle.activeBorder": colors.D_FILL_ACCENT_PRI.value,
      "panelTitle.activeForeground": colors.D_FILL_TEXT_PRI.value,
      "panelTitle.inactiveForeground": colors.D_FILL_TEXT_SEC.value,
      // peekView | @{VSCODE}
      "peekView.border": colors.D_BASIC_DEF_MINT_PRI.value,
      "peekViewEditor.background": colors.D_BG_SOLID_SURFACE.value,
      "peekViewEditor.matchHighlightBackground": colors.D_BASIC_DEF_MINT_QUA.value,
      "peekViewEditor.matchHighlightBorder": colors.D_STROKE_CONTROL.value,
      "peekViewEditorGutter.background": colors.D_BG_SOLID_CANVAS.value,
      "peekViewEditorStickyScroll.background": colors.D_BG_SOLID_BASE.value,
      "peekViewResult.background": colors.D_BG_SOLID_BASE.value,
      "peekViewResult.fileForeground": colors.D_FILL_TEXT_SEC.value,
      "peekViewResult.lineForeground": colors.D_FILL_TEXT_SEC.value,
      "peekViewResult.matchHighlightBackground": colors.D_BASIC_DEF_MINT_QUA.value,
      "peekViewResult.selectionBackground": colors.D_BASIC_NEU_SEN.value,
      "peekViewResult.selectionForeground": colors.D_FILL_TEXT_PRI.value,
      "peekViewTitle.background": colors.D_BASIC_LC_MINT_PRI.value,
      "peekViewTitleDescription.foreground": colors.D_FILL_TEXT_SEC.value,
      "peekViewTitleLabel.foreground": colors.D_BASIC_ALT_MINT_PRI.value,
      // pickerGroup | @{VSCODE}
      "pickerGroup.border": colors.D_STROKE_DIVIDER.value,
      "pickerGroup.foreground": colors.D_FILL_ACCENT_TEXT_PRI.value,
      // ports | @{VSCODE}
		  "ports.iconRunningProcessForeground": colors.D_BASIC_DEF_GREEN_PRI.value,
      // problems | @{VSCODE}
      "problemsErrorIcon.foreground": colors.D_BASIC_DEF_RED_PRI.value,
      "problemsInfoIcon.foreground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "problemsWarningIcon.foreground": colors.D_BASIC_DEF_ORANGE_PRI.value,
      // progressBar | @{VSCODE}
		  "progressBar.background": colors.D_FILL_ACCENT_PRI.value,
      // profileBadge | @{VSCODE}
      "profileBadge.background": colors.D_FILL_CONTROL_CUSTOM.value,
      "profileBadge.foreground": colors.D_FILL_TEXT_SEC.value,
      // sash | @{VSCODE}
		  "sash.hoverBorder": colors.D_STROKE_FOCUS.value,
      // scm | @{VSCODE}
		  "scm.providerBorder": colors.D_STROKE_FOCUS.value,
      // search | @{VSCODE}
      "search.resultsInfoForeground": colors.D_FILL_TEXT_TER.value,
      "searchEditor.findMatchBackground": colors.D_BASIC_DEF_MINT_QUA.value,
      "searchEditor.findMatchBorder": colors.D_STROKE_CONTROL.value,
      "searchEditor.textInputBorder": colors.D_STROKE_CONTROL.value,
      // selection | @{VSCODE}
		  "selection.background": colors.D_BASIC_NEU_SEN.value,
      // settings | @{VSCODE}
      "settings.checkboxBackground": colors.D_FILL_CONTROL_PRI.value,
      "settings.checkboxBorder": colors.D_STROKE_CONTROL.value,
      "settings.checkboxForeground": colors.D_FILL_TEXT_PRI.value,
      "settings.dropdownBackground": colors.D_FILL_CONTROL_PRI.value,
      "settings.dropdownBorder": colors.D_STROKE_CONTROL.value,
      "settings.dropdownForeground": colors.D_FILL_TEXT_PRI.value,
      "settings.dropdownListBorder": colors.D_STROKE_SURFACE_FLYOUT.value,
      "settings.focusedRowBackground": colors.D_FILL_CONTROL_TER.value,
      "settings.focusedRowBorder": colors.D_BG_CARD_PRI.value,
      "settings.headerBorder": colors.D_STROKE_DIVIDER.value,
      "settings.headerForeground": colors.D_FILL_TEXT_PRI.value,
      "settings.modifiedItemIndicator": colors.D_BASIC_DEF_BLUE_PRI.value,
      "settings.numberInputBackground": colors.D_FILL_CONTROL_PRI.value,
      "settings.numberInputBorder": colors.D_STROKE_CONTROL.value,
      "settings.numberInputForeground": colors.D_FILL_TEXT_PRI.value,
      "settings.rowHoverBackground": colors.D_BG_CARD_PRI.value,
      "settings.sashBorder": colors.D_STROKE_FOCUS.value,
      "settings.settingsHeaderHoverForeground": colors.D_FILL_TEXT_ACT.value,
      "settings.textInputBackground": colors.D_FILL_CONTROL_PRI.value,
      "settings.textInputBorder": colors.D_STROKE_CONTROL.value,
      "settings.textInputForeground": colors.D_FILL_TEXT_PRI.value,
      // sideBar | @{VSCODE}
      "sideBar.background": colors.D_BG_SOLID_SURFACE.value,
      "sideBar.border": colors.D_STROKE_DIVIDER.value,
      "sideBar.dropBackground": colors.D_BG_SMOKE.value,
      "sideBar.foreground": colors.D_FILL_TEXT_SEC.value,
      "sideBarSectionHeader.background": colors.D_BG_LAYER.value,
      "sideBarSectionHeader.border": colors.D_STROKE_FOCUS.value,
      "sideBarSectionHeader.foreground": colors.D_FILL_TEXT_SEC.value,
      "sideBarTitle.foreground": colors.D_FILL_TEXT_PRI.value,
      // sideBySideEditor | @{VSCODE}
      "sideBySideEditor.horizontalBorder": colors.D_STROKE_DIVIDER.value,
      "sideBySideEditor.verticalBorder": colors.D_STROKE_DIVIDER.value,
      // statusBar | @{VSCODE}
      "statusBar.background": colors.D_BG_SOLID_BASE.value,
      "statusBar.border": colors.D_STROKE_CONTROL.value,
      "statusBar.debuggingBackground": colors.D_BASIC_LC_YELLOW_PRI.value,
      "statusBar.debuggingBorder": colors.D_STROKE_CONTROL.value,
      "statusBar.debuggingForeground": colors.D_BASIC_ALT_YELLOW_PRI.value,
      "statusBar.focusBorder": colors.D_STROKE_FOCUS.value,
      "statusBar.foreground": colors.D_FILL_TEXT_PRI.value,
      "statusBar.noFolderBackground": colors.D_BASIC_LC_RED_PRI.value,
      "statusBar.noFolderBorder": colors.D_STROKE_CONTROL.value,
      "statusBar.noFolderForeground": colors.D_BASIC_ALT_RED_PRI.value,
      // statusBarItem | @{VSCODE}
      "statusBarItem.activeBackground": colors.D_FILL_CONTROL_TER.value,
      "statusBarItem.compactHoverBackground": colors.D_FILL_CONTROL_DBL.value,
      "statusBarItem.errorBackground": colors.D_BASIC_LC_RED_PRI.value,
      "statusBarItem.errorForeground": colors.D_BASIC_ALT_RED_PRI.value,
      "statusBarItem.focusBorder": colors.D_STROKE_FOCUS.value,
      "statusBarItem.hoverBackground": colors.D_FILL_CONTROL_PRI.value,
      "statusBarItem.prominentBackground": colors.D_FILL_CONTROL_CUSTOM.value,
      "statusBarItem.prominentForeground": colors.D_FILL_TEXT_PRI.value,
      "statusBarItem.prominentHoverBackground": colors.D_FILL_CONTROL_SEC.value,
      "statusBarItem.remoteBackground": colors.D_BASIC_LC_MINT_PRI.value,
      "statusBarItem.remoteForeground": colors.D_BASIC_ALT_MINT_PRI.value,
      "statusBarItem.warningBackground": colors.D_BASIC_LC_ORANGE_PRI.value,
      "statusBarItem.warningForeground": colors.D_BASIC_ALT_ORANGE_PRI.value,
      // symbolIcon | @{VSCODE}
      "symbolIcon.arrayForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "symbolIcon.booleanForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "symbolIcon.classForeground": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "symbolIcon.colorForeground": colors.D_FILL_TEXT_SEC.value,
      "symbolIcon.constantForeground": colors.D_BASIC_ALT_MINT_PRI.value,
      "symbolIcon.constructorForeground": colors.D_BASIC_DEF_ORANGE_PRI.value,
      "symbolIcon.enumeratorForeground": colors.D_BASIC_DEF_MINT_PRI.value,
      "symbolIcon.enumeratorMemberForeground": colors.D_BASIC_ALT_MINT_PRI.value,
      "symbolIcon.eventForeground": colors.D_BASIC_ALT_RED_PRI.value,
      "symbolIcon.fieldForeground": colors.D_BASIC_ALT_YELLOW_PRI.value,
      "symbolIcon.fileForeground": colors.D_FILL_TEXT_SEC.value,
      "symbolIcon.folderForeground": colors.D_FILL_TEXT_SEC.value,
      "symbolIcon.functionForeground": colors.D_BASIC_DEF_ORANGE_PRI.value,
      "symbolIcon.interfaceForeground": colors.D_BASIC_DEF_MINT_PRI.value,
      "symbolIcon.keyForeground": colors.D_BASIC_ALT_PURPLE_PRI.value,
      "symbolIcon.keywordForeground": colors.D_BASIC_DEF_PINK_PRI.value,
      "symbolIcon.methodForeground": colors.D_BASIC_DEF_ORANGE_PRI.value,
      "symbolIcon.moduleForeground": colors.D_FILL_TEXT_SEC.value,
      "symbolIcon.namespaceForeground": colors.D_FILL_TEXT_SEC.value,
      "symbolIcon.nullForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "symbolIcon.numberForeground": colors.D_BASIC_ALT_GREEN_PRI.value,
      "symbolIcon.objectForeground": colors.D_BASIC_DEF_MINT_PRI.value,
      "symbolIcon.operatorForeground": colors.D_FILL_TEXT_SEC.value,
      "symbolIcon.packageForeground": colors.D_FILL_TEXT_SEC.value,
      "symbolIcon.propertyForeground": colors.D_BASIC_ALT_YELLOW_PRI.value,
      "symbolIcon.referenceForeground": colors.D_BASIC_DEF_PURPLE_PRI.value,
      "symbolIcon.snippetForeground": colors.D_BASIC_ALT_BLUE_PRI.value,
      "symbolIcon.stringForeground": colors.D_BASIC_DEF_BROWN_PRI.value,
      "symbolIcon.structForeground": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "symbolIcon.textForeground": colors.D_FILL_TEXT_SEC.value,
      "symbolIcon.typeParameterForeground": colors.D_BASIC_ALT_MINT_PRI.value,
      "symbolIcon.unitForeground": colors.D_BASIC_ALT_GREEN_PRI.value,
      "symbolIcon.variableForeground": colors.D_BASIC_ALT_ORANGE_PRI.value,
      // tab | @{VSCODE}
      "tab.activeBackground": colors.D_BG_SOLID_ON_CANVAS.value,
      "tab.activeBorder": colors.D_STROKE_CONTROL.value,
      "tab.activeBorderTop": colors.D_STROKE_CONTROL.value,
      "tab.activeForeground": colors.D_FILL_TEXT_PRI.value,
      "tab.activeModifiedBorder": colors.D_BASIC_DEF_BLUE_QUA.value,
      "tab.border": colors.D_STROKE_CONTROL.value,
      "tab.hoverBackground": colors.D_FILL_CONTROL_PRI.value,
      "tab.hoverBorder": colors.D_STROKE_CONTROL.value,
      "tab.hoverForeground": colors.D_FILL_TEXT_PRI.value,
      "tab.inactiveBackground": colors.D_BG_SOLID_CANVAS.value,
      "tab.inactiveForeground": colors.D_FILL_TEXT_SEC.value,
      "tab.inactiveModifiedBorder": colors.D_BASIC_DEF_BLUE_QUA.value,
      "tab.lastPinnedBorder": colors.D_STROKE_FOCUS.value,
      "tab.unfocusedActiveBackground": colors.D_BG_SOLID_CANVAS.value,
      "tab.unfocusedActiveBorder": colors.D_STROKE_CONTROL.value,
      "tab.unfocusedActiveBorderTop": colors.D_STROKE_CONTROL.value,
      "tab.unfocusedActiveForeground": colors.D_FILL_TEXT_SEC.value,
      "tab.unfocusedActiveModifiedBorder": colors.D_BASIC_DEF_BLUE_QUI.value,
      "tab.unfocusedHoverBackground": colors.D_FILL_CONTROL_PRI.value,
      "tab.unfocusedHoverBorder": colors.D_STROKE_CONTROL.value,
      "tab.unfocusedHoverForeground": colors.D_FILL_TEXT_SEC.value,
      "tab.unfocusedInactiveBackground": colors.D_BG_SOLID_SURFACE.value,
      "tab.unfocusedInactiveForeground": colors.D_FILL_TEXT_TER.value,
      "tab.unfocusedInactiveModifiedBorder": colors.D_BASIC_DEF_BLUE_QUI.value,
      // terminal | @{VSCODE}
      "terminal.ansiBlack": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      "terminal.ansiBlue": colors.D_BASIC_DEF_BLUE_PRI.value,
      "terminal.ansiBrightBlack": colors.D_BASIC_NEU_SEN.value,
      "terminal.ansiBrightBlue": colors.D_BASIC_ALT_BLUE_PRI.value,
      "terminal.ansiBrightCyan": colors.D_BASIC_ALT_MINT_PRI.value,
      "terminal.ansiBrightGreen": colors.D_BASIC_ALT_GREEN_PRI.value,
      "terminal.ansiBrightMagenta": colors.D_BASIC_ALT_PINK_PRI.value,
      "terminal.ansiBrightRed": colors.D_BASIC_ALT_RED_PRI.value,
      "terminal.ansiBrightWhite": colors.D_BASIC_NEU_PRI.value,
      "terminal.ansiBrightYellow": colors.D_BASIC_ALT_YELLOW_PRI.value,
      "terminal.ansiCyan": colors.D_BASIC_DEF_MINT_PRI.value,
      "terminal.ansiGreen": colors.D_BASIC_DEF_GREEN_PRI.value,
      "terminal.ansiMagenta": colors.D_BASIC_DEF_PINK_PRI.value,
      "terminal.ansiRed": colors.D_BASIC_DEF_RED_PRI.value,
      "terminal.ansiWhite": colors.D_BASIC_NEU_TER.value,
      "terminal.ansiYellow": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "terminal.background": colors.D_BG_SOLID_CANVAS.value,
      "terminal.border": colors.D_STROKE_DIVIDER.value,
      "terminal.dropBackground": colors.D_BG_SMOKE.value,
      "terminal.findMatchBackground": colors.D_BASIC_DEF_MINT_QUA.value,
      "terminal.findMatchBorder": colors.D_STROKE_CONTROL.value,
      "terminal.findMatchHighlightBackground": colors.D_BASIC_DEF_MINT_QUI.value,
      "terminal.findMatchHighlightBorder": colors.D_STROKE_CONTROL.value,
      "terminal.foreground": colors.D_FILL_TEXT_PRI.value,
      "terminal.hoverHighlightBackground": colors.D_BASIC_NEU_SEP.value,
      "terminal.inactiveSelectionBackground": colors.D_BASIC_NEU_SEP.value,
      "terminal.selectionBackground": colors.D_BASIC_NEU_SEN.value,
      "terminal.selectionForeground": colors.D_FILL_TEXT_PRI.value,
      "terminal.tab.activeBorder": colors.D_FILL_ACCENT_PRI.value,
      "terminalCommandDecoration.defaultBackground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "terminalCommandDecoration.errorBackground": colors.D_BASIC_DEF_RED_PRI.value,
      "terminalCommandDecoration.successBackground": colors.D_BASIC_DEF_GREEN_PRI.value,
      "terminalCursor.background": colors.D_FILL_ACCENT_PRI.value,
      "terminalCursor.foreground": colors.D_FILL_TEXT_ON_COLOR_PRI.value,
      "terminalOverviewRuler.cursorForeground": colors.D_FILL_ACCENT_PRI.value,
      "terminalOverviewRuler.findMatchForeground": colors.D_BASIC_DEF_MINT_SEC.value,
      // testing | @{VSCODE}
      "testing.iconErrored": colors.D_BASIC_DEF_RED_PRI.value,
      "testing.iconFailed": colors.D_BASIC_DEF_RED_PRI.value,
      "testing.iconPassed": colors.D_BASIC_DEF_GREEN_PRI.value,
      "testing.iconQueued": colors.D_BASIC_DEF_YELLOW_PRI.value,
      "testing.iconSkipped": colors.D_BASIC_NEU_TER.value,
      "testing.iconUnset": colors.D_BASIC_NEU_TER.value,
      "testing.message.error.decorationForeground": colors.D_BASIC_DEF_RED_PRI.value,
      "testing.message.error.lineBackground": colors.D_BASIC_DEF_RED_QUA.value,
      "testing.message.info.decorationForeground": colors.D_BASIC_DEF_BLUE_PRI.value,
      "testing.message.info.lineBackground": colors.D_BASIC_DEF_BLUE_QUA.value,
      "testing.peekBorder": colors.D_BASIC_ALT_RED_PRI.value,
      "testing.peekHeaderBackground": colors.D_BASIC_LC_RED_PRI.value,
      "testing.runAction": colors.D_BASIC_DEF_GREEN_PRI.value,
      // text | @{VSCODE}
      "textBlockQuote.background": colors.D_BASIC_NEU_SEP.value,
      "textBlockQuote.border": colors.D_FILL_ACCENT_PRI.value,
      "textCodeBlock.background": colors.D_BASIC_NEU_SEP.value,
      "textLink.activeForeground": colors.D_FILL_ACCENT_SEC.value,
      "textLink.foreground": colors.D_FILL_ACCENT_PRI.value,
      "textPreformat.foreground": colors.D_BASIC_DEF_RED_PRI.value,
      "textSeparator.foreground": colors.D_STROKE_DIVIDER.value,
      // titleBar | @{VSCODE}
      "titleBar.activeBackground": colors.D_BG_SOLID_BASE.value,
      "titleBar.activeForeground": colors.D_FILL_TEXT_PRI.value,
      "titleBar.border": colors.D_STROKE_DIVIDER.value,
      "titleBar.inactiveBackground": colors.D_BG_SOLID_BASE.value,
      "titleBar.inactiveForeground": colors.D_FILL_TEXT_SEC.value,
      // toolbar | @{VSCODE}
      "toolbar.activeBackground": colors.D_FILL_CONTROL_TER.value,
      "toolbar.hoverBackground": colors.D_FILL_CONTROL_PRI.value,
      "toolbar.hoverOutline": colors.D_STROKE_CONTROL.value,
      // tree | @{VSCODE}
      "tree.inactiveIndentGuidesStroke": colors.D_BASIC_NEU_QUI.value,
      "tree.indentGuidesStroke": colors.D_BASIC_NEU_QUA.value,
      "tree.tableColumnsBorder": colors.D_STROKE_DIVIDER.value,
      "tree.tableOddRowsBackground": colors.D_BG_SOLID_ON_CANVAS.value,
      // walkThrough | @{VSCODE}
      "walkThrough.embeddedEditorBackground": colors.D_BG_SOLID_ON_CANVAS.value,
      "walkthrough.stepTitle.foreground": colors.D_FILL_TEXT_PRI.value,
      // welcomePage | @{VSCODE}
      "welcomePage.background": colors.D_BG_SOLID_CANVAS.value,
      "welcomePage.progress.background": colors.D_BASIC_NEU_SEP.value,
      "welcomePage.progress.foreground": colors.D_FILL_ACCENT_PRI.value,
      "welcomePage.tileBackground": colors.D_FILL_CONTROL_PRI.value,
      "welcomePage.tileBorder": colors.D_STROKE_CONTROL.value,
      "welcomePage.tileHoverBackground": colors.D_FILL_CONTROL_SEC.value,
      // widget | @{VSCODE}
      "widget.border": colors.D_STROKE_SURFACE_FLYOUT.value,
      "widget.shadow": colors.D_SHADOW.value,
      // window | @{VSCODE}
      "window.activeBorder": colors.D_STROKE_SURFACE_LAYER.value,
      "window.inactiveBorder": colors.D_STROKE_SURFACE_LAYER.value
    }
  };
  exportObjectAsJsonFile(themeObject, "Codemos Modern (Dark)-color-theme.json");
}


function exportObjectAsJsonFile(objectToExport: any, fileName: string) {
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
