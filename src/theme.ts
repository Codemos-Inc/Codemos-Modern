/* eslint-disable @typescript-eslint/naming-convention */
import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";
import * as colorsDark from "./colors-dark";
import * as colorsLight from "./colors-light";

export async function createTheme(hex6: string, isDark: boolean) {
  let colors: any = {};
  if (isDark) {
    colors = colorsDark;
    colors.updateAccent(hex6);
  } else {
    colors = colorsLight;
    colors.updateAccent(hex6);
  }
  const themeObject = {
    "$schema": "vscode://schemas/color-theme",
    "semanticHighlighting": true,
    "semanticTokenColors": {
      // GENERAL SEMANTIC TOKENS
      // namespace: For identifiers that declare or reference a namespace, module, or package.
      "namespace": colors.FILL_TEXT_PRI.value,
      // module
      "module": colors.FILL_TEXT_PRI.value,
      // class: For identifiers that declare or reference a class type.
      "class": colors.BASIC_DEF_YELLOW_PRI.value,
      // enum: For identifiers that declare or reference an enumeration type.
      "enum": colors.BASIC_DEF_MINT_PRI.value,
      // interface: For identifiers that declare or reference an interface type.
      "interface": colors.BASIC_DEF_MINT_PRI.value,
      // struct: For identifiers that declare or reference a struct type.
      "struct": colors.BASIC_DEF_YELLOW_PRI.value,
      // typeParameter: For identifiers that declare or reference a type parameter (generics).
      "typeParameter": colors.BASIC_ALT_MINT_PRI.value,
      // type: For identifiers that declare or reference a type that is not covered above.
      "type": colors.BASIC_DEF_MINT_PRI.value,
      // parameter: For identifiers that declare or reference function or method parameters.
      "parameter": colors.BASIC_ALT_ORANGE_PRI.value,
      // variable: For identifiers that declare or reference a local or global variable.
      "variable": { "foreground": colors.BASIC_ALT_ORANGE_PRI.value, "underline": true },
      "variable.readonly": { "underline": false },
      // property: For identifiers that declare or reference a member property, member field, or member variable.
      "property": { "foreground": colors.BASIC_ALT_YELLOW_PRI.value, "underline": true },
      "property.readonly": { "underline": false },
      // enumMember: For identifiers that declare or reference an enumeration property, constant, or member.
      "enumMember": colors.BASIC_ALT_MINT_PRI.value,
      // decorator: For identifiers that declare or reference decorators and annotations.
      "decorator": colors.BASIC_DEF_RED_PRI.value,
      // annotation: For identifiers that declare or reference decorators and annotations.
      "annotation": colors.BASIC_DEF_RED_PRI.value,
      // event: For identifiers that declare an event property.
      "event": colors.BASIC_ALT_RED_PRI.value,
      // function: For identifiers that declare a function.
      "function": colors.BASIC_DEF_ORANGE_PRI.value,
      // method: For identifiers that declare a method.
      "method": colors.BASIC_DEF_ORANGE_PRI.value,
      // macro: For identifiers that declare a macro.
      "macro": colors.BASIC_ALT_PINK_PRI.value,
      // label: For identifiers that declare a label.
      "label": colors.BASIC_ALT_PINK_PRI.value,
      // comment: For tokens that represent a comment.
      "comment": { "foreground": colors.BASIC_DEF_GREEN_PRI.value, "italic": true },
      // string: For tokens that represent a string literal.
      "string": colors.BASIC_DEF_BROWN_PRI.value,
      // keyword: For tokens that represent a language keyword.
      "keyword": colors.BASIC_DEF_PINK_PRI.value,
      // modifier: Style for modifier keywords
      "modifier": colors.BASIC_DEF_BLUE_PRI.value,
      // plainKeyword
      "plainKeyword": colors.BASIC_DEF_BLUE_PRI.value,
      // number: For tokens that represent a number literal.
      "number": colors.BASIC_ALT_GREEN_PRI.value,
      // regexp: For tokens that represent a regular expression literal.
      "regexp": colors.BASIC_DEF_PURPLE_PRI.value,
      // operator: For tokens that represent an operator.
      "operator": colors.FILL_TEXT_SEC.value,
      // builtin: For symbols that are part of the language.
      "*.builtin": colors.BASIC_DEF_BLUE_PRI.value,
      // static: For class members (static members).
      "*.static": { "italic": true },
      // deprecated: For symbols that should no longer be used.
      "*.deprecated": { "strikethrough": true },
      // abstract: For types and member functions that are abstract.
      "*.abstract": { "bold": true },
      // OTHER SEMANTIC TOKENS
      "newOperator": colors.BASIC_DEF_BLUE_PRI.value,
      "stringLiteral": colors.BASIC_DEF_BROWN_PRI.value,
      "customLiteral": colors.BASIC_ALT_BLUE_PRI.value,
      "numberLiteral": colors.BASIC_ALT_GREEN_PRI.value,
      "selfParameter": colors.BASIC_DEF_YELLOW_PRI.value,
      "magicFunction": colors.BASIC_DEF_PURPLE_PRI.value
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
          "foreground": colors.FILL_TEXT_PRI.value,
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
          "foreground": colors.BASIC_DEF_YELLOW_PRI.value,
          "fontStyle": ""
        }
      },
      // enum
      {
        "scope": [
          "entity.name.type.enum"
        ],
        "settings": {
          "foreground": colors.BASIC_DEF_MINT_PRI.value,
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
          "foreground": colors.BASIC_DEF_MINT_PRI.value,
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
          "foreground": colors.BASIC_DEF_MINT_PRI.value,
          "fontStyle": ""
        }
      },
      // typeParameter
      {
        "scope": [
          "storage.type.generic"
        ],
        "settings": {
          "foreground": colors.BASIC_ALT_MINT_PRI.value,
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
          "foreground": colors.BASIC_DEF_MINT_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "storage.type"
        ],
        "settings": {
          "foreground": colors.BASIC_DEF_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      // parameter
      {
        "scope": [
          "variable.parameter"
        ],
        "settings": {
          "foreground": colors.BASIC_ALT_ORANGE_PRI.value,
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
          "foreground": colors.BASIC_ALT_ORANGE_PRI.value,
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
          "foreground": colors.BASIC_ALT_ORANGE_PRI.value,
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
          "entity.name.variable.field",
          "meta.attribute.python"
        ],
        "settings": {
          "foreground": colors.BASIC_ALT_YELLOW_PRI.value,
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
          "entity.name.variable.property.constant",
          "meta.attribute.constant.python"  
        ],
        "settings": {
          "foreground": colors.BASIC_ALT_YELLOW_PRI.value,
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
          "foreground": colors.BASIC_ALT_MINT_PRI.value,
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
          "foreground": colors.BASIC_DEF_RED_PRI.value,
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
          "foreground": colors.BASIC_DEF_RED_PRI.value,
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
          "foreground": colors.BASIC_ALT_RED_PRI.value,
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
          "foreground": colors.BASIC_DEF_ORANGE_PRI.value,
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
          "foreground": colors.BASIC_DEF_ORANGE_PRI.value,
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
          "foreground": colors.BASIC_ALT_PINK_PRI.value,
          "fontStyle": ""
        }
      },
      // label
      {
        "scope": [
          "entity.name.label"
        ],
        "settings": {
          "foreground": colors.BASIC_ALT_PINK_PRI.value,
          "fontStyle": ""
        }
      },
      // comment
      {
        "scope": [
          "comment",
        ],
        "settings": {
          "foreground": colors.BASIC_DEF_GREEN_PRI.value,
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
          "foreground": colors.BASIC_DEF_BROWN_PRI.value,
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
          "foreground": colors.BASIC_ALT_BLUE_PRI.value,
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
          "foreground": colors.BASIC_ALT_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": "constant.character.escape",
        "settings": {
          "foreground": colors.BASIC_DEF_RED_PRI.value,
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
          "foreground": colors.BASIC_DEF_PINK_PRI.value,
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
          "foreground": colors.BASIC_DEF_BLUE_PRI.value,
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
          "foreground": colors.BASIC_ALT_GREEN_PRI.value,
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
          "foreground": colors.BASIC_DEF_PURPLE_PRI.value,
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
          "foreground": colors.BASIC_ALT_PURPLE_PRI.value,
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
          "foreground": colors.BASIC_ALT_PINK_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "keyword.operator.or.regexp",
          "keyword.control.anchor.regexp"
        ],
        "settings": {
          "foreground": colors.BASIC_ALT_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": "keyword.operator.quantifier.regexp",
        "settings": {
          "foreground": colors.BASIC_ALT_GREEN_PRI.value,
          "fontStyle": ""
        }
      },
      // operator
      {
        "scope": [
          "keyword.operator",
          "punctuation.separator.key-value"
        ],
        "settings": {
          "foreground": colors.FILL_TEXT_SEC.value,
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
          "foreground": colors.BASIC_DEF_YELLOW_PRI.value,
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
          "foreground": colors.BASIC_DEF_BLUE_PRI.value,
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
          "foreground": colors.BASIC_DEF_BLUE_PRI.value,
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
          "foreground": colors.BASIC_ALT_MINT_PRI.value,
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
          "foreground": colors.BASIC_DEF_BROWN_PRI.value,
          "fontStyle": ""
        }
      },
      // invalid
      {
        "scope": [
          "invalid"
        ],
        "settings": {
          "foreground": colors.BASIC_DEF_RED_PRI.value,
          "fontStyle": ""
        }
      },
      // id
      {
        "scope": [
          "entity.other.attribute-name.id"
        ],
        "settings": {
          "foreground": colors.BASIC_DEF_PURPLE_PRI.value,
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
          "foreground": colors.BASIC_ALT_BLUE_PRI.value,
          "fontStyle": ""
        }
      },
      // property-name-vendored
      {
        "scope": [
          "support.type.vendored.property-name",
        ],
        "settings": {
          "foreground": colors.BASIC_ALT_BLUE_PRI.value,
          "fontStyle": "underline"
        }
      },
      // psuedo-class
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": colors.BASIC_ALT_YELLOW_PRI.value,
          "fontStyle": ""
        }
      },
      // psuedo-element
      {
        "scope": [
          "entity.other.attribute-name.pseudo-element"
        ],
        "settings": {
          "foreground": colors.BASIC_ALT_PURPLE_PRI.value,
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
          "foreground": colors.BASIC_ALT_PINK_PRI.value,
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
          "foreground": colors.BASIC_DEF_RED_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.2",
          "markup.heading.setext.2"
        ],
        "settings": {
          "foreground": colors.BASIC_DEF_ORANGE_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.3"
        ],
        "settings": {
          "foreground": colors.BASIC_DEF_YELLOW_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.4"
        ],
        "settings": {
          "foreground": colors.BASIC_DEF_GREEN_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.5"
        ],
        "settings": {
          "foreground": colors.BASIC_DEF_MINT_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.6"
        ],
        "settings": {
          "foreground": colors.BASIC_DEF_BLUE_PRI.value,
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
          "foreground": colors.BASIC_ALT_BLUE_PRI.value,
          "fontStyle": "underline"
        }
      },
      {
        "scope": [
          "string.other.link",
          "punctuation.definition.list.begin.markdown"
        ],
        "settings": {
          "foreground": colors.FILL_ACCENT_TEXT_PRI.value,
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
          "foreground": colors.BASIC_DEF_PINK_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": colors.BASIC_DEF_PURPLE_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.tag"
        ],
        "settings": {
          "foreground": colors.FILL_TEXT_SEC.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "meta.separator"
        ],
        "settings": {
          "foreground": colors.BASIC_DEF_BROWN_PRI.value,
          "fontStyle": ""
        }
      },
      {
        "scope": "markup.inserted",
        "settings": {
          "foreground": colors.BASIC_DEF_GREEN_PRI.value
        }
      },
      {
        "scope": "markup.deleted",
        "settings": {
          "foreground": colors.BASIC_DEF_RED_PRI.value
        }
      },
      {
        "scope": "markup.changed",
        "settings": {
          "foreground": colors.BASIC_DEF_BLUE_PRI.value
        }
      },
    ],
    "colors": {
      // @{VSCODE: v1.78.2}
      // activityBar | @{VSCODE}
      "activityBar.activeBackground": colors.FILL_CONTROL_PRI.value,
      "activityBar.activeBorder": colors.FILL_ACCENT_PRI.value,
      "activityBar.activeFocusBorder": colors.BASIC_NEU_PRI.value,
      "activityBar.background": colors.BG_SOLID_BASE.value,
      "activityBar.border": colors.STROKE_DIVIDER.value,
      "activityBar.dropBorder": colors.FILL_ACCENT_PRI.value,
      "activityBar.foreground": colors.FILL_TEXT_PRI.value,
      "activityBar.inactiveForeground": colors.FILL_TEXT_SEC.value,
      "activityBarBadge.background": colors.FILL_ACCENT_PRI.value,
      "activityBarBadge.foreground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      // badge | @{VSCODE}
      "badge.background": colors.FILL_ACCENT_PRI.value,
      "badge.foreground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      // banner | @{VSCODE}
      "banner.background": colors.FILL_ACCENT_PRI.value,
      "banner.foreground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      "banner.iconForeground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      // breadcrumb | @{VSCODE}
      "breadcrumb.activeSelectionForeground": colors.FILL_ACCENT_TEXT_PRI.value,
      "breadcrumb.background": colors.BG_SOLID_BASE.value,
      "breadcrumb.focusForeground": colors.FILL_TEXT_PRI.value,
      "breadcrumb.foreground": colors.FILL_TEXT_SEC.value,
      // breadcrumbPicker | @{VSCODE}
      "breadcrumbPicker.background": colors.BG_SOLID_ON_CANVAS.value,
      // button | @{VSCODE}
      "button.background": colors.FILL_ACCENT_PRI.value,
      "button.border": colors.STROKE_CONTROL.value,
      "button.foreground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      "button.hoverBackground": colors.FILL_ACCENT_SEC.value,
      "button.secondaryBackground": colors.FILL_CONTROL_PRI.value,
      "button.secondaryForeground": colors.FILL_TEXT_PRI.value,
      "button.secondaryHoverBackground": colors.FILL_CONTROL_SEC.value,
      "button.separator": colors.FILL_TEXT_ON_COLOR_PRI.value,
      // charts | @{VSCODE}
      "charts.blue": colors.BASIC_DEF_BLUE_PRI.value,
      "charts.foreground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      "charts.green": colors.BASIC_DEF_GREEN_PRI.value,
      "charts.lines": colors.STROKE_DIVIDER.value,
      "charts.orange": colors.BASIC_DEF_ORANGE_PRI.value,
      "charts.purple": colors.BASIC_DEF_PURPLE_PRI.value,
      "charts.red": colors.BASIC_DEF_RED_PRI.value,
      "charts.yellow": colors.BASIC_DEF_YELLOW_PRI.value,
      // checkbox | @{VSCODE}
      "checkbox.background": colors.FILL_CONTROL_ALT.value,
      "checkbox.border": colors.STROKE_CONTROL_STRONG.value,
      "checkbox.foreground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      "checkbox.selectBackground": colors.FILL_ACCENT_PRI.value,
      // commandCenter | @{VSCODE}
      "commandCenter.activeBackground": colors.FILL_CONTROL_SEC.value,
      "commandCenter.activeBorder": colors.STROKE_CONTROL.value,
      "commandCenter.activeForeground": colors.FILL_TEXT_PRI.value,
      "commandCenter.background": colors.FILL_CONTROL_PRI.value,
      "commandCenter.border": colors.STROKE_CONTROL.value,
      "commandCenter.foreground": colors.FILL_TEXT_SEC.value,
      "commandCenter.inactiveBorder": colors.FILL_CONTROL_SEC.value,
      "commandCenter.inactiveForeground": colors.FILL_TEXT_DIS.value,
      // contrast | @{VSCODE}
      "contrastActiveBorder": colors.TRANSPARENT.value,
      "contrastBorder": colors.TRANSPARENT.value,
      // debugConsole | @{VSCODE}
      "debugConsole.errorForeground": colors.BASIC_DEF_RED_PRI.value,
      "debugConsole.infoForeground": colors.BASIC_DEF_BLUE_PRI.value,
      "debugConsole.sourceForeground": colors.FILL_TEXT_PRI.value,
      "debugConsole.warningForeground": colors.BASIC_DEF_ORANGE_PRI.value,
      "debugConsoleInputIcon.foreground": colors.FILL_ACCENT_PRI.value,
      // debugExceptionWidget | @{VSCODE}
      "debugExceptionWidget.background": colors.BASIC_LC_RED_PRI.value,
      "debugExceptionWidget.border": colors.STROKE_SURFACE_FLYOUT.value,
      // debugIcon | @{VSCODE}
      "debugIcon.breakpointCurrentStackframeForeground": colors.BASIC_DEF_YELLOW_PRI.value,
      "debugIcon.breakpointDisabledForeground": colors.FILL_TEXT_DIS.value,
      "debugIcon.breakpointForeground": colors.BASIC_DEF_RED_PRI.value,
      "debugIcon.breakpointStackframeForeground": colors.BASIC_DEF_YELLOW_TER.value,
      "debugIcon.breakpointUnverifiedForeground": colors.BASIC_DEF_ORANGE_PRI.value,
      "debugIcon.continueForeground": colors.BASIC_DEF_GREEN_PRI.value,
      "debugIcon.disconnectForeground": colors.BASIC_DEF_RED_PRI.value,
      "debugIcon.pauseForeground": colors.BASIC_DEF_YELLOW_PRI.value,
      "debugIcon.restartForeground": colors.BASIC_DEF_GREEN_PRI.value,
      "debugIcon.startForeground": colors.BASIC_DEF_GREEN_PRI.value,
      "debugIcon.stepBackForeground": colors.BASIC_DEF_BLUE_PRI.value,
      "debugIcon.stepIntoForeground": colors.BASIC_DEF_BLUE_PRI.value,
      "debugIcon.stepOutForeground": colors.BASIC_DEF_BLUE_PRI.value,
      "debugIcon.stepOverForeground": colors.BASIC_DEF_BLUE_PRI.value,
      "debugIcon.stopForeground": colors.BASIC_DEF_RED_PRI.value,
      // debugTokenExpression | @{VSCODE}
      "debugTokenExpression.boolean": colors.BASIC_DEF_BLUE_PRI.value,
      "debugTokenExpression.error": colors.BASIC_DEF_RED_PRI.value,
      "debugTokenExpression.name": colors.FILL_ACCENT_TEXT_PRI.value,
      "debugTokenExpression.number": colors.BASIC_ALT_GREEN_PRI.value,
      "debugTokenExpression.string": colors.BASIC_DEF_BROWN_PRI.value,
      "debugTokenExpression.value": colors.BASIC_DEF_MINT_PRI.value,
      // debugView | @{VSCODE}
      "debugView.exceptionLabelBackground": colors.BASIC_DEF_RED_PRI.value,
      "debugView.exceptionLabelForeground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      "debugView.stateLabelBackground": colors.BG_LAYER.value,
      "debugView.stateLabelForeground": colors.FILL_TEXT_PRI.value,
      "debugView.valueChangedHighlight": colors.BASIC_ALT_BLUE_PRI.value,
      // descriptionForeground | @{VSCODE}
      "descriptionForeground": colors.FILL_TEXT_SEC.value,
      // diffEditor | @{VSCODE}
      "diffEditor.border": colors.STROKE_DIVIDER.value,
      "diffEditor.diagonalFill": colors.STROKE_DIVIDER.value,
      "diffEditor.insertedLineBackground": colors.BASIC_DEF_GREEN_QUI.value,
      "diffEditor.insertedTextBackground": colors.BASIC_DEF_GREEN_QUA.value,
      "diffEditor.insertedTextBorder": colors.TRANSPARENT.value,
      "diffEditor.removedLineBackground": colors.BASIC_DEF_RED_QUI.value,
      "diffEditor.removedTextBackground": colors.BASIC_DEF_RED_QUA.value,
      "diffEditor.removedTextBorder": colors.TRANSPARENT.value,
      // disabledForeground | @{VSCODE}
      "disabledForeground": colors.FILL_TEXT_DIS.value,
      // dropdown | @{VSCODE}
      "dropdown.background": colors.FILL_CONTROL_PRI.value,
      "dropdown.border": colors.STROKE_CONTROL.value,
      "dropdown.foreground": colors.FILL_TEXT_PRI.value,
      "dropdown.listBackground": colors.BG_SOLID_FLYOUT.value,
      // editor | @{VSCODE}
      "editor.background": colors.BG_SOLID_CANVAS.value,
      "editor.findMatchBackground": colors.BASIC_DEF_MINT_QUA.value,
      "editor.findMatchBorder": colors.STROKE_CONTROL.value,
      "editor.findMatchHighlightBackground": colors.BASIC_DEF_MINT_QUI.value,
      "editor.findMatchHighlightBorder": colors.STROKE_CONTROL.value,
      "editor.findRangeHighlightBackground": colors.BASIC_NEU_SEP.value,
      "editor.findRangeHighlightBorder": null,
      "editor.focusedStackFrameHighlightBackground": colors.BASIC_DEF_YELLOW_QUI.value,
      "editor.foldBackground": colors.BASIC_NEU_SEP.value,
      "editor.foreground": colors.FILL_TEXT_SEC.value,
      "editor.hoverHighlightBackground": colors.BASIC_NEU_SEP.value,
      "editor.inactiveSelectionBackground": colors.BASIC_NEU_SEP.value,
      "editor.inlineValuesBackground": colors.BASIC_DEF_YELLOW_QUI.value,
      "editor.inlineValuesForeground": colors.BASIC_DEF_YELLOW_PRI.value,
      "editor.lineHighlightBackground": null,
      "editor.lineHighlightBorder": colors.STROKE_CONTROL.value,
      "editor.linkedEditingBackground": colors.BASIC_DEF_BLUE_QUA.value,
      "editor.rangeHighlightBackground": colors.BASIC_NEU_SEP.value,
      "editor.rangeHighlightBorder": null,
      "editor.selectionBackground": colors.BASIC_NEU_SEN.value,
      "editor.selectionForeground": colors.FILL_TEXT_PRI.value,
      "editor.selectionHighlightBackground": colors.BASIC_NEU_SEP.value,
      "editor.selectionHighlightBorder": colors.STROKE_CONTROL.value,
      "editor.snippetFinalTabstopHighlightBackground": null,
      "editor.snippetFinalTabstopHighlightBorder": colors.BASIC_DEF_BLUE_PRI.value,
      "editor.snippetTabstopHighlightBackground": colors.BASIC_DEF_BLUE_QUA.value,
      "editor.snippetTabstopHighlightBorder": colors.STROKE_CONTROL.value,
      "editor.stackFrameHighlightBackground": colors.BASIC_DEF_YELLOW_QUA.value,
      "editor.symbolHighlightBackground": null,
      "editor.symbolHighlightBorder": colors.BASIC_DEF_PURPLE_PRI.value,
      "editor.wordHighlightBackground": colors.BASIC_DEF_PINK_QUA.value,
      "editor.wordHighlightBorder": colors.STROKE_CONTROL.value,
      "editor.wordHighlightStrongBackground": colors.BASIC_DEF_PURPLE_QUA.value,
      "editor.wordHighlightStrongBorder": colors.STROKE_CONTROL.value,
      "editor.wordHighlightTextBackground": colors.BASIC_DEF_PINK_QUA.value,
      "editor.wordHighlightTextBorder": colors.STROKE_CONTROL.value,
      // editorBracketHighlight | @{VSCODE}
      "editorBracketHighlight.foreground1": colors.BASIC_ALT_YELLOW_PRI.value,
      "editorBracketHighlight.foreground2": colors.BASIC_ALT_ORANGE_PRI.value,
      "editorBracketHighlight.foreground3": colors.BASIC_ALT_RED_PRI.value,
      "editorBracketHighlight.foreground4": colors.BASIC_ALT_PURPLE_PRI.value,
      "editorBracketHighlight.foreground5": colors.BASIC_ALT_BLUE_PRI.value,
      "editorBracketHighlight.foreground6": colors.BASIC_ALT_GREEN_PRI.value,
      "editorBracketHighlight.unexpectedBracket.foreground": colors.BASIC_DEF_RED_PRI.value,
      // editorBracketMatch | @{VSCODE}
      "editorBracketMatch.background": colors.BASIC_DEF_PINK_QUA.value,
      "editorBracketMatch.border": colors.STROKE_CONTROL.value,
      // editorCodeLens | @{VSCODE}
      "editorCodeLens.foreground": colors.FILL_TEXT_TER.value,
      // editorCommentsWidget | @{VSCODE}
      "editorCommentsWidget.rangeActiveBackground": colors.BASIC_DEF_BLUE_QUA.value,
      "editorCommentsWidget.rangeActiveBorder": colors.TRANSPARENT.value,
      "editorCommentsWidget.rangeBackground": colors.BASIC_DEF_BLUE_QUI.value,
      "editorCommentsWidget.rangeBorder": colors.TRANSPARENT.value,
      "editorCommentsWidget.resolvedBorder": colors.BASIC_DEF_GREEN_PRI.value,
      "editorCommentsWidget.unresolvedBorder": colors.BASIC_DEF_RED_PRI.value,
      // editorCursor | @{VSCODE}
      "editorCursor.background": colors.FILL_TEXT_ON_COLOR_PRI.value,
      "editorCursor.foreground": colors.FILL_ACCENT_PRI.value,
      // editorError | @{VSCODE}
      "editorError.background": null,
      "editorError.border": null,
      "editorError.foreground": colors.BASIC_DEF_RED_PRI.value,
      // editorGhostText | @{VSCODE}
      "editorGhostText.background": null,
      "editorGhostText.border": null,
      "editorGhostText.foreground": colors.FILL_TEXT_DIS.value,
      // editorGroup | @{VSCODE}
      "editorGroup.border": colors.STROKE_DIVIDER.value,
      "editorGroup.dropBackground": colors.BG_SMOKE.value,
      "editorGroup.dropIntoPromptBackground": colors.BG_SOLID_FLYOUT.value,
      "editorGroup.dropIntoPromptBorder": colors.STROKE_SURFACE_FLYOUT.value,
      "editorGroup.dropIntoPromptForeground": colors.FILL_TEXT_PRI.value,
      "editorGroup.emptyBackground": colors.BG_SOLID_BASE.value,
      "editorGroup.focusedEmptyBorder": null,
      // editorGroupHeader | @{VSCODE}
      "editorGroupHeader.border": colors.STROKE_DIVIDER.value,
      "editorGroupHeader.noTabsBackground": colors.BG_SOLID_BASE.value,
      "editorGroupHeader.tabsBackground": colors.BG_SOLID_BASE.value,
      "editorGroupHeader.tabsBorder": colors.STROKE_DIVIDER.value,
      // editorGutter | @{VSCODE}
      "editorGutter.addedBackground": colors.BASIC_DEF_GREEN_PRI.value,
      "editorGutter.background": colors.BG_SOLID_BASE.value,
      "editorGutter.commentGlyphForeground": colors.BASIC_NEU_QUA.value,
      "editorGutter.commentRangeForeground": colors.BG_SOLID_ON_CANVAS.value,
      "editorGutter.commentUnresolvedGlyphForeground": colors.BASIC_DEF_BLUE_PRI.value,
      "editorGutter.deletedBackground": colors.BASIC_DEF_RED_PRI.value,
      "editorGutter.foldingControlForeground": colors.BASIC_NEU_QUA.value,
      "editorGutter.modifiedBackground": colors.BASIC_DEF_BLUE_PRI.value,
      // editorHint | @{VSCODE}
      "editorHint.border": null,
      "editorHint.foreground": colors.BASIC_NEU_PRI.value,
      // editorHoverWidget | @{VSCODE}
      "editorHoverWidget.background": colors.BG_SOLID_FLYOUT.value,
      "editorHoverWidget.border": colors.STROKE_SURFACE_FLYOUT.value,
      "editorHoverWidget.foreground": colors.FILL_TEXT_PRI.value,
      "editorHoverWidget.highlightForeground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      "editorHoverWidget.statusBarBackground": colors.BG_LAYER.value,
      // editorIndentGuide | @{VSCODE}
      "editorIndentGuide.activeBackground": colors.BASIC_NEU_QUA.value,
      "editorIndentGuide.background": colors.BASIC_NEU_QUI.value,
      // editorInfo | @{VSCODE}
      "editorInfo.background": null,
      "editorInfo.border": null,
      "editorInfo.foreground": colors.BASIC_DEF_BLUE_PRI.value,
      // editorInlayHint | @{VSCODE}
      "editorInlayHint.background": colors.BASIC_NEU_SEN.value,
      "editorInlayHint.foreground": colors.FILL_TEXT_SEC.value,
      "editorInlayHint.parameterBackground": colors.BASIC_LC_ORANGE_PRI.value,
      "editorInlayHint.parameterForeground": colors.BASIC_ALT_ORANGE_PRI.value,
      "editorInlayHint.typeBackground": colors.BASIC_LC_MINT_PRI.value,
      "editorInlayHint.typeForeground": colors.BASIC_DEF_MINT_PRI.value,
      // editorLightBulb | @{VSCODE}
      "editorLightBulb.foreground": colors.BASIC_DEF_YELLOW_PRI.value,
      "editorLightBulbAutoFix.foreground": colors.BASIC_DEF_YELLOW_PRI.value,
      // editorLineNumber | @{VSCODE}
      "editorLineNumber.activeForeground": colors.FILL_TEXT_PRI.value,
      "editorLineNumber.dimmedForeground": colors.FILL_TEXT_DIS.value,
      "editorLineNumber.foreground": colors.FILL_TEXT_TER.value,
      // editorLink | @{VSCODE}
      "editorLink.activeForeground": colors.FILL_ACCENT_TEXT_PRI.value,
      // editorMarkerNavigation | @{VSCODE}
      "editorMarkerNavigation.background": colors.BG_SOLID_FLYOUT.value,
      "editorMarkerNavigationError.background": colors.BASIC_DEF_RED_PRI.value,
      "editorMarkerNavigationError.headerBackground": colors.BASIC_LC_RED_PRI.value,
      "editorMarkerNavigationInfo.background": colors.BASIC_DEF_BLUE_PRI.value,
      "editorMarkerNavigationInfo.headerBackground": colors.BASIC_LC_BLUE_PRI.value,
      "editorMarkerNavigationWarning.background": colors.BASIC_DEF_ORANGE_PRI.value,
      "editorMarkerNavigationWarning.headerBackground": colors.BASIC_LC_ORANGE_PRI.value,
      // editorOverviewRuler | @{VSCODE}
      "editorOverviewRuler.addedForeground": colors.BASIC_DEF_GREEN_SEC.value,
      "editorOverviewRuler.background": colors.BG_SOLID_BASE.value,
      "editorOverviewRuler.border": colors.STROKE_CONTROL.value,
      "editorOverviewRuler.bracketMatchForeground": colors.BASIC_DEF_BROWN_SEC.value,
      "editorOverviewRuler.commonContentForeground": colors.BASIC_NEU_QUA.value,
      "editorOverviewRuler.currentContentForeground": colors.BASIC_DEF_MINT_TER.value,
      "editorOverviewRuler.deletedForeground": colors.BASIC_DEF_RED_SEC.value,
      "editorOverviewRuler.errorForeground": colors.BASIC_DEF_RED_PRI.value,
      "editorOverviewRuler.findMatchForeground": colors.BASIC_DEF_MINT_SEC.value,
      "editorOverviewRuler.incomingContentForeground": colors.BASIC_DEF_BLUE_TER.value,
      "editorOverviewRuler.infoForeground": colors.BASIC_DEF_BLUE_PRI.value,
      "editorOverviewRuler.modifiedForeground": colors.BASIC_DEF_BLUE_SEC.value,
      "editorOverviewRuler.rangeHighlightForeground": colors.BASIC_NEU_SEP.value,
      "editorOverviewRuler.selectionHighlightForeground": colors.BASIC_NEU_SEN.value,
      "editorOverviewRuler.warningForeground": colors.BASIC_DEF_ORANGE_PRI.value,
      "editorOverviewRuler.wordHighlightForeground": colors.BASIC_DEF_PINK_SEC.value,
      "editorOverviewRuler.wordHighlightStrongForeground": colors.BASIC_DEF_PURPLE_SEC.value,
      "editorOverviewRuler.wordHighlightTextForeground": colors.BASIC_DEF_PINK_SEC.value,
      // editorPane | @{VSCODE}
      "editorPane.background": colors.BG_SOLID_BASE.value,
      // editorRuler | @{VSCODE}
      "editorRuler.foreground": colors.STROKE_DIVIDER.value,
      // editorStickyScroll | @{VSCODE}
      "editorStickyScroll.background": colors.BG_SOLID_SURFACE.value,
      "editorStickyScrollHover.background": colors.FILL_CONTROL_PRI.value,
      // editorSuggestWidget | @{VSCODE}
      "editorSuggestWidget.background": colors.BG_SOLID_FLYOUT.value,
      "editorSuggestWidget.border": colors.STROKE_SURFACE_FLYOUT.value,
      "editorSuggestWidget.focusHighlightForeground": colors.FILL_ACCENT_TEXT_PRI.value,
      "editorSuggestWidget.foreground": colors.FILL_TEXT_SEC.value,
      "editorSuggestWidget.highlightForeground": colors.FILL_ACCENT_TEXT_PRI.value,
      "editorSuggestWidget.selectedBackground": colors.FILL_CONTROL_PRI.value,
      "editorSuggestWidget.selectedForeground": colors.FILL_TEXT_PRI.value,
      "editorSuggestWidget.selectedIconForeground": colors.FILL_TEXT_PRI.value,
      "editorSuggestWidgetStatus.foreground": colors.FILL_ACCENT_PRI.value,
      // editorUnicodeHighlight | @{VSCODE}
      "editorUnicodeHighlight.background": null,
      "editorUnicodeHighlight.border": colors.BASIC_DEF_YELLOW_PRI.value,
      // editorUnnecessaryCode | @{VSCODE}
      "editorUnnecessaryCode.border": null,
      "editorUnnecessaryCode.opacity": colors.BASIC_NEU_TER.value,
      // editorWarning | @{VSCODE}
      "editorWarning.background": null,
      "editorWarning.border": null,
      "editorWarning.foreground": colors.BASIC_DEF_ORANGE_PRI.value,
      // editorWhitespace | @{VSCODE}
      "editorWhitespace.foreground": colors.FILL_TEXT_DIS.value,
      // editorWidget | @{VSCODE}
      "editorWidget.background": colors.BG_SOLID_FLYOUT.value,
      "editorWidget.border": colors.STROKE_SURFACE_FLYOUT.value,
      "editorWidget.foreground": colors.FILL_TEXT_PRI.value,
      "editorWidget.resizeBorder": colors.FILL_ACCENT_PRI.value,
      // errorForeground | @{VSCODE}
      "errorForeground": colors.BASIC_DEF_RED_PRI.value,
      // extensionBadge | @{VSCODE}
      "extensionBadge.remoteBackground": colors.BASIC_DEF_BLUE_PRI.value,
      "extensionBadge.remoteForeground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      // extensionButton | @{VSCODE}
      "extensionButton.background": colors.FILL_ACCENT_PRI.value,
      "extensionButton.foreground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      "extensionButton.hoverBackground": colors.FILL_ACCENT_SEC.value,
      "extensionButton.prominentBackground": colors.FILL_ACCENT_PRI.value,
      "extensionButton.prominentForeground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      "extensionButton.prominentHoverBackground": colors.FILL_ACCENT_SEC.value,
      "extensionButton.separator": colors.FILL_TEXT_ON_COLOR_PRI.value,
      // extensionIcon | @{VSCODE}
      "extensionIcon.preReleaseForeground": colors.BASIC_DEF_MINT_PRI.value,
      "extensionIcon.sponsorForeground": colors.BASIC_DEF_RED_PRI.value,
      "extensionIcon.starForeground": colors.BASIC_DEF_YELLOW_PRI.value,
      "extensionIcon.verifiedForeground": colors.BASIC_DEF_BLUE_PRI.value,
      // focusBorder | @{VSCODE}
      "focusBorder": colors.STROKE_FOCUS.value,
      // foreground | @{VSCODE}
      "foreground": colors.FILL_TEXT_PRI.value,
      // gitDecoration | @{VSCODE}
      "gitDecoration.addedResourceForeground": colors.BASIC_DEF_GREEN_PRI.value,
      "gitDecoration.conflictingResourceForeground": colors.BASIC_DEF_ORANGE_PRI.value,
      "gitDecoration.deletedResourceForeground": colors.BASIC_ALT_RED_PRI.value,
      "gitDecoration.ignoredResourceForeground": colors.FILL_TEXT_TER.value,
      "gitDecoration.modifiedResourceForeground": colors.BASIC_ALT_BLUE_PRI.value,
      "gitDecoration.renamedResourceForeground": colors.BASIC_DEF_YELLOW_PRI.value,
      "gitDecoration.stageDeletedResourceForeground": colors.BASIC_DEF_RED_PRI.value,
      "gitDecoration.stageModifiedResourceForeground": colors.BASIC_DEF_BLUE_PRI.value,
      "gitDecoration.submoduleResourceForeground": colors.BASIC_DEF_MINT_PRI.value,
      "gitDecoration.untrackedResourceForeground": colors.BASIC_ALT_GREEN_PRI.value,
      // input | @{VSCODE}
      "input.background": colors.FILL_CONTROL_PRI.value,
      "input.border": colors.STROKE_CONTROL.value,
      "input.foreground": colors.FILL_TEXT_PRI.value,
      "input.placeholderForeground": colors.FILL_TEXT_SEC.value,
      // inputOption | @{VSCODE}
      "inputOption.activeBackground": colors.FILL_ACCENT_PRI.value,
      "inputOption.activeBorder": colors.STROKE_CONTROL.value,
      "inputOption.activeForeground": colors.FILL_TEXT_ON_COLOR_PRI.value,
      "inputOption.hoverBackground": colors.FILL_CONTROL_PRI.value,
      // inputValidation | @{VSCODE}
      "inputValidation.errorBackground": colors.FILL_SYSTEM_BG_CRITICAL.value,
      "inputValidation.errorBorder": colors.BASIC_DEF_RED_QUA.value,
      "inputValidation.errorForeground": colors.FILL_SYSTEM_FG_CRITICAL.value,
      "inputValidation.infoBackground": colors.FILL_SYSTEM_BG_INFO.value,
      "inputValidation.infoBorder": colors.BASIC_DEF_BLUE_QUA.value,
      "inputValidation.infoForeground": colors.FILL_SYSTEM_FG_INFO.value,
      "inputValidation.warningBackground": colors.FILL_SYSTEM_BG_CAUTION.value,
      "inputValidation.warningBorder": colors.BASIC_DEF_ORANGE_QUA.value,
      "inputValidation.warningForeground": colors.FILL_SYSTEM_FG_CAUTION.value,
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
      "issues.closed": colors.BASIC_DEF_PURPLE_PRI.value,
      "issues.newIssueDecoration": colors.FILL_TEXT_DIS.value,
      "issues.open": colors.BASIC_DEF_GREEN_PRI.value,
      // keybindingLabel | @{VSCODE}
      "keybindingLabel.background": colors.FILL_CONTROL_PRI.value,
      "keybindingLabel.border": colors.STROKE_CONTROL.value,
      "keybindingLabel.bottomBorder": colors.FILL_CONTROL_ALT.value,
      "keybindingLabel.foreground": colors.FILL_TEXT_PRI.value,
      "keybindingTable.headerBackground": colors.BG_SOLID_ON_CANVAS.value,
      "keybindingTable.rowsBackground": colors.BG_SOLID_ON_CANVAS.value,
      // list | @{VSCODE}
      "list.activeSelectionBackground": colors.BASIC_NEU_SEN.value,
      "list.activeSelectionForeground": colors.FILL_TEXT_PRI.value,
      "list.activeSelectionIconForeground": colors.FILL_TEXT_PRI.value,
      "list.deemphasizedForeground": colors.FILL_TEXT_TER.value,
      "list.dropBackground": colors.BG_SMOKE.value,
      "list.errorForeground": colors.BASIC_DEF_RED_PRI.value,
      "list.filterMatchBackground": colors.BASIC_DEF_MINT_QUA.value,
      "list.filterMatchBorder": colors.STROKE_CONTROL.value,
      "list.focusAndSelectionOutline": colors.STROKE_FOCUS.value,
      "list.focusBackground": colors.BASIC_NEU_SEP.value,
      "list.focusForeground": colors.FILL_TEXT_PRI.value,
      "list.focusHighlightForeground": colors.FILL_ACCENT_TEXT_PRI.value,
      "list.focusOutline": colors.STROKE_CONTROL.value,
      "list.highlightForeground": colors.FILL_ACCENT_TEXT_PRI.value,
      "list.hoverBackground": colors.BASIC_NEU_SEP.value,
      "list.hoverForeground": colors.FILL_TEXT_PRI.value,
      "list.inactiveFocusBackground": colors.BASIC_NEU_SEP.value,
      "list.inactiveFocusOutline": colors.STROKE_CARD.value,
      "list.inactiveSelectionBackground": colors.BASIC_NEU_SEN.value,
      "list.inactiveSelectionForeground": colors.FILL_TEXT_PRI.value,
      "list.inactiveSelectionIconForeground": colors.FILL_TEXT_PRI.value,
      "list.invalidItemForeground": colors.BASIC_DEF_RED_PRI.value,
      "list.warningForeground": colors.BASIC_DEF_ORANGE_PRI.value,
      // listFilterWidget | @{VSCODE}
      "listFilterWidget.background": colors.BG_SOLID_FLYOUT.value,
      "listFilterWidget.noMatchesOutline": colors.BASIC_DEF_RED_PRI.value,
      "listFilterWidget.outline": colors.STROKE_SURFACE_FLYOUT.value,
      "listFilterWidget.shadow": colors.SHADOW.value,
      // menu | @{VSCODE}
      "menu.background": colors.BG_SOLID_FLYOUT.value,
      "menu.border": colors.STROKE_SURFACE_FLYOUT.value,
      "menu.foreground": colors.FILL_TEXT_PRI.value,
      "menu.selectionBackground": colors.BASIC_NEU_SEP.value,
      "menu.selectionBorder": colors.STROKE_CONTROL.value,
      "menu.selectionForeground": colors.FILL_TEXT_PRI.value,
      "menu.separatorBackground": colors.STROKE_DIVIDER.value,
      // menuBar | @{VSCODE}
      "menubar.selectionBackground": colors.FILL_CONTROL_PRI.value,
      "menubar.selectionBorder": colors.STROKE_CONTROL.value,
      "menubar.selectionForeground": colors.FILL_TEXT_PRI.value,
      // merge | @{VSCODE}
      "merge.border": colors.STROKE_CONTROL.value,
      "merge.commonContentBackground": colors.BASIC_NEU_SEP.value,
      "merge.commonHeaderBackground": colors.BASIC_NEU_QUI.value,
      "merge.currentContentBackground": colors.BASIC_DEF_MINT_QUI.value,
      "merge.currentHeaderBackground": colors.BASIC_DEF_MINT_TER.value,
      "merge.incomingContentBackground": colors.BASIC_DEF_BLUE_QUI.value,
      "merge.incomingHeaderBackground": colors.BASIC_DEF_BLUE_TER.value,
      // mergeEditor | @{VSCODE}
      "mergeEditor.change.background": colors.BASIC_NEU_SEP.value,
      "mergeEditor.change.word.background": colors.BASIC_NEU_SEN.value,
      "mergeEditor.changeBase.background": colors.BASIC_NEU_SEP.value,
      "mergeEditor.changeBase.word.background": colors.BASIC_NEU_SEN.value,
      "mergeEditor.conflict.handled.minimapOverViewRuler": colors.BASIC_DEF_GREEN_TER.value,
      "mergeEditor.conflict.handledFocused.border": colors.BASIC_DEF_GREEN_PRI.value,
      "mergeEditor.conflict.handledUnfocused.border": colors.BASIC_DEF_GREEN_TER.value,
      "mergeEditor.conflict.input1.background": colors.BASIC_DEF_BLUE_TER.value,
      "mergeEditor.conflict.input2.background": colors.BASIC_LC_MINT_TER.value,
      "mergeEditor.conflict.unhandled.minimapOverViewRuler": colors.BASIC_DEF_RED_TER.value,
      "mergeEditor.conflict.unhandledFocused.border": colors.BASIC_DEF_RED_PRI.value,
      "mergeEditor.conflict.unhandledUnfocused.border": colors.BASIC_DEF_RED_TER.value,
      "mergeEditor.conflictingLines.background": colors.BASIC_DEF_ORANGE_QUI.value,
      // minimap | @{VSCODE}
      "minimap.background": colors.BG_SOLID_SURFACE.value,
      "minimap.errorHighlight": colors.BASIC_DEF_RED_QUA.value,
      "minimap.findMatchHighlight": colors.BASIC_DEF_MINT_QUA.value,
      "minimap.foregroundOpacity": colors.OPAQUE.value,
      "minimap.selectionHighlight": colors.BASIC_NEU_QUA.value,
      "minimap.selectionOccurrenceHighlight": colors.BASIC_NEU_QUI.value,
      "minimap.warningHighlight": colors.BASIC_DEF_ORANGE_QUA.value,
      // minimapGutter | @{VSCODE}
      "minimapGutter.addedBackground": colors.BASIC_DEF_GREEN_PRI.value,
      "minimapGutter.deletedBackground": colors.BASIC_DEF_RED_PRI.value,
      "minimapGutter.modifiedBackground": colors.BASIC_DEF_BLUE_PRI.value,
      // minimapSlider | @{VSCODE}
      "minimapSlider.activeBackground": colors.FILL_CONTROL_TER.value,
      "minimapSlider.background": colors.FILL_CONTROL_PRI.value,
      "minimapSlider.hoverBackground": colors.FILL_CONTROL_SEC.value,
      // notebook | @{VSCODE} !{DEPRECATED}
      "notebook.cellBorderColor": colors.STROKE_CONTROL.value,
      "notebook.cellEditorBackground": colors.BG_SOLID_BASE.value,
      "notebook.cellHoverBackground": colors.BG_CARD.value,
      "notebook.cellInsertionIndicator": colors.FILL_ACCENT_PRI.value,
      "notebook.cellStatusBarItemHoverBackground": colors.FILL_CONTROL_PRI.value,
      "notebook.cellToolbarSeparator": colors.STROKE_SURFACE_FLYOUT.value,
      "notebook.editorBackground": colors.BG_SOLID_CANVAS.value,
      "notebook.focusedCellBackground": colors.BG_CARD.value,
      "notebook.focusedCellBorder": colors.FILL_ACCENT_PRI.value,
      "notebook.focusedEditorBorder": colors.STROKE_FOCUS.value,
      "notebook.inactiveFocusedCellBorder": colors.STROKE_CONTROL.value,
      "notebook.inactiveSelectedCellBorder": colors.STROKE_FOCUS.value,
      "notebook.outputContainerBackgroundColor": colors.BG_SOLID_SURFACE.value,
      "notebook.outputContainerBorderColor": colors.STROKE_CONTROL.value,
      "notebook.selectedCellBackground": colors.BG_CARD.value,
      "notebook.selectedCellBorder": colors.FILL_ACCENT_PRI.value,
      "notebook.symbolHighlightBackground": "#ff0000",
      "notebookEditorOverviewRuler.runningCellForeground": colors.BASIC_DEF_YELLOW_PRI.value,
      "notebookScrollbarSlider.activeBackground": colors.FILL_CONTROL_TER.value,
      "notebookScrollbarSlider.background": colors.FILL_CONTROL_PRI.value,
      "notebookScrollbarSlider.hoverBackground": colors.FILL_CONTROL_SEC.value,
      "notebookStatusErrorIcon.foreground": colors.BASIC_DEF_RED_PRI.value,
      "notebookStatusRunningIcon.foreground": colors.BASIC_DEF_YELLOW_PRI.value,
      "notebookStatusSuccessIcon.foreground": colors.BASIC_DEF_GREEN_PRI.value,
      // notifications | @{VSCODE}
      "notificationCenter.border": colors.STROKE_SURFACE_FLYOUT.value,
      "notificationCenterHeader.background": colors.BG_SOLID_BASE.value,
      "notificationCenterHeader.foreground": colors.FILL_TEXT_PRI.value,
      "notificationLink.foreground": colors.FILL_ACCENT_TEXT_PRI.value,
      "notifications.background": colors.BG_SOLID_FLYOUT.value,
      "notifications.border": colors.STROKE_DIVIDER.value,
      "notifications.foreground": colors.FILL_TEXT_PRI.value,
      "notificationsErrorIcon.foreground": colors.BASIC_DEF_RED_PRI.value,
      "notificationsInfoIcon.foreground": colors.BASIC_DEF_BLUE_PRI.value,
      "notificationsWarningIcon.foreground": colors.BASIC_DEF_ORANGE_PRI.value,
      "notificationToast.border": colors.STROKE_SURFACE_FLYOUT.value,
      // panel | @{VSCODE}
      "panel.background": colors.BG_SOLID_SURFACE.value,
      "panel.border": colors.STROKE_DIVIDER.value,
      "panel.dropBorder": colors.FILL_ACCENT_PRI.value,
      "panelInput.border": colors.STROKE_CONTROL.value,
      "panelSection.border": colors.STROKE_FOCUS.value,
      "panelSection.dropBackground": colors.BG_SMOKE.value,
      "panelSectionHeader.background": colors.BG_LAYER.value,
      "panelSectionHeader.border": colors.STROKE_FOCUS.value,
      "panelSectionHeader.foreground": colors.FILL_TEXT_SEC.value,
      "panelTitle.activeBorder": colors.FILL_ACCENT_PRI.value,
      "panelTitle.activeForeground": colors.FILL_TEXT_PRI.value,
      "panelTitle.inactiveForeground": colors.FILL_TEXT_SEC.value,
      // peekView | @{VSCODE}
      "peekView.border": colors.BASIC_DEF_MINT_PRI.value,
      "peekViewEditor.background": colors.BG_SOLID_SURFACE.value,
      "peekViewEditor.matchHighlightBackground": colors.BASIC_DEF_MINT_QUA.value,
      "peekViewEditor.matchHighlightBorder": colors.STROKE_CONTROL.value,
      "peekViewEditorGutter.background": colors.BG_SOLID_CANVAS.value,
      "peekViewEditorStickyScroll.background": colors.BG_SOLID_BASE.value,
      "peekViewResult.background": colors.BG_SOLID_BASE.value,
      "peekViewResult.fileForeground": colors.FILL_TEXT_SEC.value,
      "peekViewResult.lineForeground": colors.FILL_TEXT_SEC.value,
      "peekViewResult.matchHighlightBackground": colors.BASIC_DEF_MINT_QUA.value,
      "peekViewResult.selectionBackground": colors.BASIC_NEU_SEN.value,
      "peekViewResult.selectionForeground": colors.FILL_TEXT_PRI.value,
      "peekViewTitle.background": colors.BASIC_LC_MINT_PRI.value,
      "peekViewTitleDescription.foreground": colors.FILL_TEXT_SEC.value,
      "peekViewTitleLabel.foreground": colors.BASIC_ALT_MINT_PRI.value,
      // pickerGroup | @{VSCODE}
      "pickerGroup.border": colors.STROKE_DIVIDER.value,
      "pickerGroup.foreground": colors.FILL_ACCENT_TEXT_PRI.value,
      // ports | @{VSCODE}
		  "ports.iconRunningProcessForeground": colors.BASIC_DEF_GREEN_PRI.value,
      // problems | @{VSCODE}
      "problemsErrorIcon.foreground": colors.BASIC_DEF_RED_PRI.value,
      "problemsInfoIcon.foreground": colors.BASIC_DEF_BLUE_PRI.value,
      "problemsWarningIcon.foreground": colors.BASIC_DEF_ORANGE_PRI.value,
      // progressBar | @{VSCODE}
		  "progressBar.background": colors.FILL_ACCENT_PRI.value,
      // profileBadge | @{VSCODE}
      "profileBadge.background": colors.FILL_CONTROL_CUSTOM.value,
      "profileBadge.foreground": colors.FILL_TEXT_SEC.value,
      // sash | @{VSCODE}
		  "sash.hoverBorder": colors.STROKE_FOCUS.value,
      // scm | @{VSCODE}
		  "scm.providerBorder": colors.STROKE_FOCUS.value,
      // scrollBar | @{VSCODE}
      "scrollbar.shadow": colors.SHADOW.value,
      "scrollbarSlider.activeBackground": colors.FILL_CONTROL_TER.value,
      "scrollbarSlider.background": colors.FILL_CONTROL_PRI.value,
      "scrollbarSlider.hoverBackground": colors.FILL_CONTROL_SEC.value,
      // search | @{VSCODE}
      "search.resultsInfoForeground": colors.FILL_TEXT_TER.value,
      "searchEditor.findMatchBackground": colors.BASIC_DEF_MINT_QUA.value,
      "searchEditor.findMatchBorder": colors.STROKE_CONTROL.value,
      "searchEditor.textInputBorder": colors.STROKE_CONTROL.value,
      // selection | @{VSCODE}
		  "selection.background": colors.BASIC_NEU_SEN.value,
      // settings | @{VSCODE}
      "settings.checkboxBackground": colors.FILL_CONTROL_PRI.value,
      "settings.checkboxBorder": colors.STROKE_CONTROL.value,
      "settings.checkboxForeground": colors.FILL_TEXT_PRI.value,
      "settings.dropdownBackground": colors.FILL_CONTROL_PRI.value,
      "settings.dropdownBorder": colors.STROKE_CONTROL.value,
      "settings.dropdownForeground": colors.FILL_TEXT_PRI.value,
      "settings.dropdownListBorder": colors.STROKE_SURFACE_FLYOUT.value,
      "settings.focusedRowBackground": colors.FILL_CONTROL_TER.value,
      "settings.focusedRowBorder": colors.BG_CARD.value,
      "settings.headerBorder": colors.STROKE_DIVIDER.value,
      "settings.headerForeground": colors.FILL_TEXT_PRI.value,
      "settings.modifiedItemIndicator": colors.BASIC_DEF_BLUE_PRI.value,
      "settings.numberInputBackground": colors.FILL_CONTROL_PRI.value,
      "settings.numberInputBorder": colors.STROKE_CONTROL.value,
      "settings.numberInputForeground": colors.FILL_TEXT_PRI.value,
      "settings.rowHoverBackground": colors.BG_CARD.value,
      "settings.sashBorder": colors.STROKE_FOCUS.value,
      "settings.settingsHeaderHoverForeground": colors.FILL_TEXT_ACT.value,
      "settings.textInputBackground": colors.FILL_CONTROL_PRI.value,
      "settings.textInputBorder": colors.STROKE_CONTROL.value,
      "settings.textInputForeground": colors.FILL_TEXT_PRI.value,
      // sideBar | @{VSCODE}
      "sideBar.background": colors.BG_SOLID_SURFACE.value,
      "sideBar.border": colors.STROKE_DIVIDER.value,
      "sideBar.dropBackground": colors.BG_SMOKE.value,
      "sideBar.foreground": colors.FILL_TEXT_SEC.value,
      "sideBarSectionHeader.background": colors.BG_LAYER.value,
      "sideBarSectionHeader.border": colors.STROKE_FOCUS.value,
      "sideBarSectionHeader.foreground": colors.FILL_TEXT_SEC.value,
      "sideBarTitle.foreground": colors.FILL_TEXT_PRI.value,
      // sideBySideEditor | @{VSCODE}
      "sideBySideEditor.horizontalBorder": colors.STROKE_DIVIDER.value,
      "sideBySideEditor.verticalBorder": colors.STROKE_DIVIDER.value,
      // statusBar | @{VSCODE}
      "statusBar.background": colors.BG_SOLID_BASE.value,
      "statusBar.border": colors.STROKE_CONTROL.value,
      "statusBar.debuggingBackground": colors.BASIC_LC_YELLOW_PRI.value,
      "statusBar.debuggingBorder": colors.STROKE_CONTROL.value,
      "statusBar.debuggingForeground": colors.BASIC_ALT_YELLOW_PRI.value,
      "statusBar.focusBorder": colors.STROKE_FOCUS.value,
      "statusBar.foreground": colors.FILL_TEXT_PRI.value,
      "statusBar.noFolderBackground": colors.BASIC_LC_RED_PRI.value,
      "statusBar.noFolderBorder": colors.STROKE_CONTROL.value,
      "statusBar.noFolderForeground": colors.BASIC_ALT_RED_PRI.value,
      // statusBarItem | @{VSCODE}
      "statusBarItem.activeBackground": colors.FILL_CONTROL_TER.value,
      "statusBarItem.compactHoverBackground": colors.FILL_CONTROL_DBL.value,
      "statusBarItem.errorBackground": colors.BASIC_LC_RED_PRI.value,
      "statusBarItem.errorForeground": colors.BASIC_ALT_RED_PRI.value,
      "statusBarItem.focusBorder": colors.STROKE_FOCUS.value,
      "statusBarItem.hoverBackground": colors.FILL_CONTROL_PRI.value,
      "statusBarItem.prominentBackground": colors.FILL_CONTROL_CUSTOM.value,
      "statusBarItem.prominentForeground": colors.FILL_TEXT_PRI.value,
      "statusBarItem.prominentHoverBackground": colors.FILL_CONTROL_SEC.value,
      "statusBarItem.remoteBackground": colors.BASIC_LC_MINT_PRI.value,
      "statusBarItem.remoteForeground": colors.BASIC_ALT_MINT_PRI.value,
      "statusBarItem.warningBackground": colors.BASIC_LC_ORANGE_PRI.value,
      "statusBarItem.warningForeground": colors.BASIC_ALT_ORANGE_PRI.value,
      // symbolIcon | @{VSCODE}
      "symbolIcon.arrayForeground": colors.BASIC_DEF_BLUE_PRI.value,
      "symbolIcon.booleanForeground": colors.BASIC_DEF_BLUE_PRI.value,
      "symbolIcon.classForeground": colors.BASIC_DEF_YELLOW_PRI.value,
      "symbolIcon.colorForeground": colors.FILL_TEXT_SEC.value,
      "symbolIcon.constantForeground": colors.BASIC_ALT_MINT_PRI.value,
      "symbolIcon.constructorForeground": colors.BASIC_DEF_ORANGE_PRI.value,
      "symbolIcon.enumeratorForeground": colors.BASIC_DEF_MINT_PRI.value,
      "symbolIcon.enumeratorMemberForeground": colors.BASIC_ALT_MINT_PRI.value,
      "symbolIcon.eventForeground": colors.BASIC_ALT_RED_PRI.value,
      "symbolIcon.fieldForeground": colors.BASIC_ALT_YELLOW_PRI.value,
      "symbolIcon.fileForeground": colors.FILL_TEXT_SEC.value,
      "symbolIcon.folderForeground": colors.FILL_TEXT_SEC.value,
      "symbolIcon.functionForeground": colors.BASIC_DEF_ORANGE_PRI.value,
      "symbolIcon.interfaceForeground": colors.BASIC_DEF_MINT_PRI.value,
      "symbolIcon.keyForeground": colors.BASIC_ALT_PURPLE_PRI.value,
      "symbolIcon.keywordForeground": colors.BASIC_DEF_PINK_PRI.value,
      "symbolIcon.methodForeground": colors.BASIC_DEF_ORANGE_PRI.value,
      "symbolIcon.moduleForeground": colors.FILL_TEXT_SEC.value,
      "symbolIcon.namespaceForeground": colors.FILL_TEXT_SEC.value,
      "symbolIcon.nullForeground": colors.BASIC_DEF_BLUE_PRI.value,
      "symbolIcon.numberForeground": colors.BASIC_ALT_GREEN_PRI.value,
      "symbolIcon.objectForeground": colors.BASIC_DEF_MINT_PRI.value,
      "symbolIcon.operatorForeground": colors.FILL_TEXT_SEC.value,
      "symbolIcon.packageForeground": colors.FILL_TEXT_SEC.value,
      "symbolIcon.propertyForeground": colors.BASIC_ALT_YELLOW_PRI.value,
      "symbolIcon.referenceForeground": colors.BASIC_DEF_PURPLE_PRI.value,
      "symbolIcon.snippetForeground": colors.BASIC_ALT_BLUE_PRI.value,
      "symbolIcon.stringForeground": colors.BASIC_DEF_BROWN_PRI.value,
      "symbolIcon.structForeground": colors.BASIC_DEF_YELLOW_PRI.value,
      "symbolIcon.textForeground": colors.FILL_TEXT_SEC.value,
      "symbolIcon.typeParameterForeground": colors.BASIC_ALT_MINT_PRI.value,
      "symbolIcon.unitForeground": colors.BASIC_ALT_GREEN_PRI.value,
      "symbolIcon.variableForeground": colors.BASIC_ALT_ORANGE_PRI.value,
      // tab | @{VSCODE}
      "tab.activeBackground": colors.BG_SOLID_ON_CANVAS.value,
      "tab.activeBorder": colors.TRANSPARENT.value,
      "tab.activeBorderTop": colors.STROKE_CONTROL.value,
      "tab.activeForeground": colors.FILL_TEXT_PRI.value,
      "tab.activeModifiedBorder": colors.BASIC_DEF_BLUE_QUA.value,
      "tab.border": colors.STROKE_CONTROL.value,
      "tab.hoverBackground": colors.FILL_CONTROL_PRI.value,
      "tab.hoverBorder": colors.TRANSPARENT.value,
      "tab.hoverForeground": colors.FILL_TEXT_PRI.value,
      "tab.inactiveBackground": colors.BG_SOLID_CANVAS.value,
      "tab.inactiveForeground": colors.FILL_TEXT_SEC.value,
      "tab.inactiveModifiedBorder": colors.BASIC_DEF_BLUE_QUA.value,
      "tab.lastPinnedBorder": colors.STROKE_FOCUS.value,
      "tab.unfocusedActiveBackground": colors.BG_SOLID_CANVAS.value,
      "tab.unfocusedActiveBorder": colors.TRANSPARENT.value,
      "tab.unfocusedActiveBorderTop": colors.STROKE_CONTROL.value,
      "tab.unfocusedActiveForeground": colors.FILL_TEXT_SEC.value,
      "tab.unfocusedActiveModifiedBorder": colors.BASIC_DEF_BLUE_QUI.value,
      "tab.unfocusedHoverBackground": colors.FILL_CONTROL_PRI.value,
      "tab.unfocusedHoverBorder": colors.TRANSPARENT.value,
      "tab.unfocusedHoverForeground": colors.FILL_TEXT_SEC.value,
      "tab.unfocusedInactiveBackground": colors.BG_SOLID_SURFACE.value,
      "tab.unfocusedInactiveForeground": colors.FILL_TEXT_TER.value,
      "tab.unfocusedInactiveModifiedBorder": colors.BASIC_DEF_BLUE_QUI.value,
      // terminal | @{VSCODE}
      "terminal.ansiBlack": colors.FILL_TEXT_ON_COLOR_PRI.value,
      "terminal.ansiBlue": colors.BASIC_DEF_BLUE_PRI.value,
      "terminal.ansiBrightBlack": colors.BASIC_NEU_SEN.value,
      "terminal.ansiBrightBlue": colors.BASIC_ALT_BLUE_PRI.value,
      "terminal.ansiBrightCyan": colors.BASIC_ALT_MINT_PRI.value,
      "terminal.ansiBrightGreen": colors.BASIC_ALT_GREEN_PRI.value,
      "terminal.ansiBrightMagenta": colors.BASIC_ALT_PINK_PRI.value,
      "terminal.ansiBrightRed": colors.BASIC_ALT_RED_PRI.value,
      "terminal.ansiBrightWhite": colors.BASIC_NEU_PRI.value,
      "terminal.ansiBrightYellow": colors.BASIC_ALT_YELLOW_PRI.value,
      "terminal.ansiCyan": colors.BASIC_DEF_MINT_PRI.value,
      "terminal.ansiGreen": colors.BASIC_DEF_GREEN_PRI.value,
      "terminal.ansiMagenta": colors.BASIC_DEF_PINK_PRI.value,
      "terminal.ansiRed": colors.BASIC_DEF_RED_PRI.value,
      "terminal.ansiWhite": colors.BASIC_NEU_TER.value,
      "terminal.ansiYellow": colors.BASIC_DEF_YELLOW_PRI.value,
      "terminal.background": colors.BG_SOLID_CANVAS.value,
      "terminal.border": colors.STROKE_DIVIDER.value,
      "terminal.dropBackground": colors.BG_SMOKE.value,
      "terminal.findMatchBackground": colors.BASIC_DEF_MINT_QUA.value,
      "terminal.findMatchBorder": colors.STROKE_CONTROL.value,
      "terminal.findMatchHighlightBackground": colors.BASIC_DEF_MINT_QUI.value,
      "terminal.findMatchHighlightBorder": colors.STROKE_CONTROL.value,
      "terminal.foreground": colors.FILL_TEXT_PRI.value,
      "terminal.hoverHighlightBackground": colors.BASIC_NEU_SEP.value,
      "terminal.inactiveSelectionBackground": colors.BASIC_NEU_SEP.value,
      "terminal.selectionBackground": colors.BASIC_NEU_SEN.value,
      "terminal.selectionForeground": colors.FILL_TEXT_PRI.value,
      "terminal.tab.activeBorder": colors.FILL_ACCENT_PRI.value,
      "terminalCommandDecoration.defaultBackground": colors.BASIC_DEF_BLUE_PRI.value,
      "terminalCommandDecoration.errorBackground": colors.BASIC_DEF_RED_PRI.value,
      "terminalCommandDecoration.successBackground": colors.BASIC_DEF_GREEN_PRI.value,
      "terminalCursor.background": colors.FILL_TEXT_ON_COLOR_PRI.value,
      "terminalCursor.foreground": colors.FILL_ACCENT_PRI.value,
      "terminalOverviewRuler.cursorForeground": colors.FILL_ACCENT_PRI.value,
      "terminalOverviewRuler.findMatchForeground": colors.BASIC_DEF_MINT_SEC.value,
      // testing | @{VSCODE}
      "testing.iconErrored": colors.BASIC_DEF_RED_PRI.value,
      "testing.iconFailed": colors.BASIC_DEF_RED_PRI.value,
      "testing.iconPassed": colors.BASIC_DEF_GREEN_PRI.value,
      "testing.iconQueued": colors.BASIC_DEF_YELLOW_PRI.value,
      "testing.iconSkipped": colors.BASIC_NEU_TER.value,
      "testing.iconUnset": colors.BASIC_NEU_TER.value,
      "testing.message.error.decorationForeground": colors.BASIC_DEF_RED_PRI.value,
      "testing.message.error.lineBackground": colors.BASIC_DEF_RED_QUA.value,
      "testing.message.info.decorationForeground": colors.BASIC_DEF_BLUE_PRI.value,
      "testing.message.info.lineBackground": colors.BASIC_DEF_BLUE_QUA.value,
      "testing.peekBorder": colors.BASIC_ALT_RED_PRI.value,
      "testing.peekHeaderBackground": colors.BASIC_LC_RED_PRI.value,
      "testing.runAction": colors.BASIC_DEF_GREEN_PRI.value,
      // text | @{VSCODE}
      "textBlockQuote.background": colors.BASIC_NEU_SEP.value,
      "textBlockQuote.border": colors.FILL_ACCENT_PRI.value,
      "textCodeBlock.background": colors.BASIC_NEU_SEP.value,
      "textLink.activeForeground": colors.FILL_ACCENT_SEC.value,
      "textLink.foreground": colors.FILL_ACCENT_PRI.value,
      "textPreformat.foreground": colors.BASIC_DEF_PINK_PRI.value,
      "textSeparator.foreground": colors.STROKE_DIVIDER.value,
      // titleBar | @{VSCODE}
      "titleBar.activeBackground": colors.BG_SOLID_BASE.value,
      "titleBar.activeForeground": colors.FILL_TEXT_PRI.value,
      "titleBar.border": colors.STROKE_DIVIDER.value,
      "titleBar.inactiveBackground": colors.BG_SOLID_BASE.value,
      "titleBar.inactiveForeground": colors.FILL_TEXT_SEC.value,
      // toolbar | @{VSCODE}
      "toolbar.activeBackground": colors.FILL_CONTROL_TER.value,
      "toolbar.hoverBackground": colors.FILL_CONTROL_PRI.value,
      "toolbar.hoverOutline": colors.STROKE_CONTROL.value,
      // tree | @{VSCODE}
      "tree.inactiveIndentGuidesStroke": colors.BASIC_NEU_QUI.value,
      "tree.indentGuidesStroke": colors.BASIC_NEU_QUA.value,
      "tree.tableColumnsBorder": colors.STROKE_DIVIDER.value,
      "tree.tableOddRowsBackground": colors.BG_SOLID_ON_CANVAS.value,
      // walkThrough | @{VSCODE}
      "walkThrough.embeddedEditorBackground": colors.BG_SOLID_BASE.value,
      "walkthrough.stepTitle.foreground": colors.FILL_TEXT_PRI.value,
      // welcomePage | @{VSCODE}
      "welcomePage.background": colors.BG_SOLID_CANVAS.value,
      "welcomePage.progress.background": colors.BASIC_NEU_SEP.value,
      "welcomePage.progress.foreground": colors.FILL_ACCENT_PRI.value,
      "welcomePage.tileBackground": colors.FILL_CONTROL_PRI.value,
      "welcomePage.tileBorder": colors.STROKE_CONTROL.value,
      "welcomePage.tileHoverBackground": colors.FILL_CONTROL_SEC.value,
      // widget | @{VSCODE}
      "widget.border": colors.STROKE_SURFACE_FLYOUT.value,
      "widget.shadow": colors.SHADOW.value,
      // window | @{VSCODE}
      "window.activeBorder": colors.STROKE_SURFACE_LAYER.value,
      "window.inactiveBorder": colors.STROKE_SURFACE_LAYER.value
    }
  };
  await exportObjectAsJsonFile(themeObject, `Codemos Modern (${isDark ? "Dark" : "Light"})-color-theme.json`);
}


async function exportObjectAsJsonFile(objectToExport: any, fileName: string) {
  // Convert object to JSON string
  const jsonString = JSON.stringify(objectToExport);

  // Construct the file path
  const filePath = path.join(__dirname, "..", "themes", fileName);

  // Write the JSON string to a file
  await fs.writeFile(filePath, jsonString, "utf8", (err) => {
    if (err) {
      vscode.window.showErrorMessage(err.message);
    }
  });
}
