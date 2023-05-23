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
      "namespace": colors.D_FILL_TEXT_SEC.value,
      // module
      "module": colors.D_FILL_TEXT_SEC.value,
      // class: For identifiers that declare or reference a class type.
      "class": colors.D_BASIC_PRI_YELLOW.value,
      // enum: For identifiers that declare or reference an enumeration type.
      "enum": colors.D_BASIC_PRI_MINT.value,
      // interface: For identifiers that declare or reference an interface type.
      "interface": colors.D_BASIC_PRI_MINT.value,
      // struct: For identifiers that declare or reference a struct type.
      "struct": colors.D_BASIC_PRI_YELLOW.value,
      // typeParameter: For identifiers that declare or reference a type parameter (generics).
      "typeParameter": colors.D_BASIC_SEC_MINT.value,
      // type: For identifiers that declare or reference a type that is not covered above.
      "type": colors.D_BASIC_PRI_MINT.value,
      // parameter: For identifiers that declare or reference function or method parameters.
      "parameter": colors.D_BASIC_SEC_ORANGE.value,
      // variable: For identifiers that declare or reference a local or global variable.
      "variable": { "foreground": colors.D_BASIC_SEC_ORANGE.value, "underline": true },
      "variable.readonly": { "underline": false },
      // property: For identifiers that declare or reference a member property, member field, or member variable.
      "property": { "foreground": colors.D_BASIC_SEC_YELLOW.value, "underline": true },
      "property.readonly": { "underline": false },
      // enumMember: For identifiers that declare or reference an enumeration property, constant, or member.
      "enumMember": colors.D_BASIC_SEC_MINT.value,
      // decorator: For identifiers that declare or reference decorators and annotations.
      "decorator": colors.D_BASIC_PRI_RED.value,
      // annotation: For identifiers that declare or reference decorators and annotations.
      "annotation": colors.D_BASIC_PRI_RED.value,
      // event: For identifiers that declare an event property.
      "event": colors.D_BASIC_SEC_RED.value,
      // function: For identifiers that declare a function.
      "function": colors.D_BASIC_PRI_ORANGE.value,
      // method: For identifiers that declare a method.
      "method": colors.D_BASIC_PRI_ORANGE.value,
      // macro: For identifiers that declare a macro.
      "macro": colors.D_BASIC_SEC_PINK.value,
      // label: For identifiers that declare a label.
      "label": colors.D_BASIC_SEC_PINK.value,
      // comment: For tokens that represent a comment.
      "comment": { "foreground": colors.D_BASIC_PRI_GREEN.value, "italic": true },
      // string: For tokens that represent a string literal.
      "string": colors.D_BASIC_PRI_BROWN.value,
      // keyword: For tokens that represent a language keyword.
      "keyword": colors.D_BASIC_PRI_PINK.value,
      // modifier: Style for modifier keywords
      "modifier": colors.D_BASIC_PRI_BLUE.value,
      // plainKeyword
      "plainKeyword": colors.D_BASIC_PRI_BLUE.value,
      // number: For tokens that represent a number literal.
      "number": colors.D_BASIC_SEC_GREEN.value,
      // regexp: For tokens that represent a regular expression literal.
      "regexp": colors.D_BASIC_PRI_PURPLE.value,
      // operator: For tokens that represent an operator.
      "operator": colors.D_FILL_TEXT_SEC.value,
      // builtin: For symbols that are part of the language.
      "*.builtin": colors.D_BASIC_PRI_BLUE.value,
      // static: For class members (static members).
      "*.static": { "italic": true },
      // deprecated: For symbols that should no longer be used.
      "*.deprecated": { "strikethrough": true },
      // abstract: For types and member functions that are abstract.
      "*.abstract": { "bold": true },

      // OTHER SEMANTIC TOKENS

      "newOperator": colors.D_BASIC_PRI_BLUE.value,
      "stringLiteral": colors.D_BASIC_PRI_BROWN.value,
      "customLiteral": colors.D_BASIC_SEC_BLUE.value,
      "numberLiteral": colors.D_BASIC_SEC_GREEN.value,
      "selfParameter": colors.D_BASIC_PRI_YELLOW.value,
      "magicFunction": colors.D_BASIC_PRI_PURPLE.value
    },
    "tokenColors": [
      // GENERAL TEXTMATE TOKENS

      // namespace
      {
        "scope": [
          "entity.name.type.namespace",
          "entity.name.namespace",
          "entity.name.type.module",
          "storage.modifier.import",
          "storage.modifier.package",
          "variable.language.wildcard.java",
          "entity.name.scope-resolution"
        ],
        "settings": {
				  "foreground": colors.D_FILL_TEXT_SEC.value,
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
				  "foreground": colors.D_BASIC_PRI_YELLOW.value,
          "fontStyle": ""
			  }
      },
      // enum
      {
        "scope": [
          "entity.name.type.enum"
        ],
        "settings": {
				  "foreground": colors.D_BASIC_PRI_MINT.value,
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
				  "foreground": colors.D_BASIC_PRI_MINT.value,
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
				  "foreground": colors.D_BASIC_PRI_MINT.value,
          "fontStyle": ""
			  }
      },
      // typeParameter
      {
        "scope": [
          "storage.type.generic"
        ],
        "settings": {
				  "foreground": colors.D_BASIC_SEC_MINT.value,
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
				  "foreground": colors.D_BASIC_PRI_MINT.value,
          "fontStyle": ""
			  }
      },
      {
        "scope": [
          "storage.type"
        ],
        "settings": {
				  "foreground": colors.D_BASIC_PRI_BLUE.value,
          "fontStyle": ""
			  }
      },
      // parameter
      {
        "scope": [
          "variable.parameter"
        ],
        "settings": {
				  "foreground": colors.D_BASIC_SEC_ORANGE.value,
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
          "foreground": colors.D_BASIC_SEC_ORANGE.value,
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
          "foreground": colors.D_BASIC_SEC_ORANGE.value,
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
          "foreground": colors.D_BASIC_SEC_YELLOW.value,
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
          "foreground": colors.D_BASIC_SEC_YELLOW.value,
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
          "foreground": colors.D_BASIC_SEC_MINT.value,
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
          "foreground": colors.D_BASIC_PRI_RED.value,
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
          "foreground": colors.D_BASIC_PRI_RED.value,
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
          "foreground": colors.D_BASIC_SEC_RED.value,
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
          "foreground": colors.D_BASIC_PRI_ORANGE.value,
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
          "foreground": colors.D_BASIC_PRI_ORANGE.value,
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
          "foreground": colors.D_BASIC_SEC_PINK.value,
          "fontStyle": ""
			  }
      },
      // label
      {
        "scope": [
          "entity.name.label"
        ],
        "settings": {
          "foreground": colors.D_BASIC_SEC_PINK.value,
          "fontStyle": ""
			  }
      },
      // comment
      {
        "scope": [
          "comment",
        ],
        "settings": {
          "foreground": colors.D_BASIC_PRI_GREEN.value,
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
          "foreground": colors.D_BASIC_PRI_BROWN.value,
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
          "foreground": colors.D_BASIC_SEC_BLUE.value,
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
          "foreground": colors.D_BASIC_SEC_BLUE.value,
          "fontStyle": ""
			  }
      },
      {
        "scope": "constant.character.escape",
        "settings": {
          "foreground": colors.D_BASIC_PRI_RED.value,
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
          "foreground": colors.D_BASIC_PRI_PINK.value,
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
          "foreground": colors.D_BASIC_PRI_BLUE.value,
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
          "foreground": colors.D_BASIC_SEC_GREEN.value,
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
          "foreground": colors.D_BASIC_PRI_PURPLE.value,
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
          "foreground": colors.D_BASIC_SEC_PURPLE.value,
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
          "foreground": colors.D_BASIC_SEC_PINK.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "keyword.operator.or.regexp",
          "keyword.control.anchor.regexp"
        ],
        "settings": {
          "foreground": colors.D_BASIC_SEC_BLUE.value,
          "fontStyle": ""
        }
      },
      {
        "scope": "keyword.operator.quantifier.regexp",
        "settings": {
          "foreground": colors.D_BASIC_SEC_GREEN.value,
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
          "foreground": colors.D_BASIC_PRI_YELLOW.value,
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
          "foreground": colors.D_BASIC_PRI_BLUE.value,
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
          "foreground": colors.D_BASIC_PRI_BLUE.value,
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
          "foreground": colors.D_BASIC_SEC_MINT.value,
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
          "foreground": colors.D_BASIC_PRI_BROWN.value,
          "fontStyle": ""
        }
      },
      // invalid
      {
        "scope": [
          "invalid"
        ],
        "settings": {
          "foreground": colors.D_BASIC_PRI_RED.value,
          "fontStyle": ""
        }
      },
      // id
      {
        "scope": [
          "entity.other.attribute-name.id"
        ],
        "settings": {
          "foreground": colors.D_BASIC_PRI_PURPLE.value,
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
          "foreground": colors.D_BASIC_SEC_BLUE.value,
          "fontStyle": ""
        }
      },
      // property-name-vendored
      {
        "scope": [
          "support.type.vendored.property-name",
        ],
        "settings": {
          "foreground": colors.D_BASIC_SEC_BLUE.value,
          "fontStyle": "underline"
        }
      },
      // psuedo-class
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": colors.D_BASIC_SEC_YELLOW.value,
          "fontStyle": ""
        }
      },
      // psuedo-element
      {
        "scope": [
          "entity.other.attribute-name.pseudo-element"
        ],
        "settings": {
          "foreground": colors.D_BASIC_SEC_PURPLE.value,
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
          "foreground": colors.D_BASIC_SEC_PINK.value,
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
          "foreground": colors.D_BASIC_PRI_RED.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.2",
          "markup.heading.setext.2"
        ],
        "settings": {
          "foreground": colors.D_BASIC_PRI_ORANGE.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.3"
        ],
        "settings": {
          "foreground": colors.D_BASIC_PRI_YELLOW.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.4"
        ],
        "settings": {
          "foreground": colors.D_BASIC_PRI_GREEN.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.5"
        ],
        "settings": {
          "foreground": colors.D_BASIC_PRI_MINT.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "heading.6"
        ],
        "settings": {
          "foreground": colors.D_BASIC_PRI_BLUE.value,
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
          "foreground": colors.D_BASIC_SEC_BLUE.value,
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
          "foreground": colors.D_BASIC_PRI_PINK.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": colors.D_BASIC_PRI_PURPLE.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.tag"
        ],
        "settings": {
          "foreground": colors.D_FILL_TEXT_TER.value,
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "meta.separator"
        ],
        "settings": {
          "foreground": colors.D_BASIC_PRI_BROWN.value,
          "fontStyle": ""
        }
      },
      {
        "scope": "markup.inserted",
        "settings": {
          "foreground": colors.D_BASIC_PRI_GREEN.value
        }
      },
      {
        "scope": "markup.deleted",
        "settings": {
          "foreground": colors.D_BASIC_PRI_RED.value
        }
      },
      {
        "scope": "markup.changed",
        "settings": {
          "foreground": colors.D_BASIC_PRI_BLUE.value
        }
      },
    ],
    "colors": {
      // Unknown
      "mergeEditor.conflict.input1.background": "#000000",
      "mergeEditor.conflict.input2.background": "#000000",
      "mergeEditor.conflictingLines.background": "#000000",
      "widget.border": "#000000",
      "profileBadge.foreground": "#000000",
      "editor.wordHighlightTextBackground": "#000000",
      "editor.wordHighlightTextBorder": "#000000",
      "editorGutter.commentGlyphForeground": "#000000",
      "editorGutter.commentUnresolvedGlyphForeground": "#000000",
      "editorLineNumber.dimmedForeground": "#000000",
      "editorOverviewRuler.wordHighlightTextForeground": "#000000",
      "interactive.requestBackground": "#000000",
      "interactive.requestBorder": "#000000",
      "interactiveEditor.border": "#000000",
      "interactiveEditor.regionHighlight": "#000000",
      "interactiveEditor.shadow": "#000000",
      "interactiveEditorDiff.inserted": "#000000",
      "interactiveEditorDiff.removed": "#000000",
      "interactiveEditorInput.background": "#000000",
      "interactiveEditorInput.border": "#000000",
      "interactiveEditorInput.focusBorder": "#000000",
      "interactiveEditorInput.placeholderForeground": "#000000",
      "notebookEditorOverviewRuler.runningCellForeground": "#000000",
      "peekViewEditorStickyScroll.background": "#000000",
      "profileBadge.background": "#000000",
      "search.resultsInfoForeground": "#000000",
      "settings.settingsHeaderHoverForeground": "#000000",
      "terminal.hoverHighlightBackground": "#000000",
      "tree.inactiveIndentGuidesStroke": "#000000",
      //
      "contrastActiveBorder": "#000000",
      "contrastBorder": "#000000",
      //
      "foreground": "#000000",
      "descriptionForeground": "#000000",
      "errorForeground": "#000000",
      "focusBorder": "#000000",
      "disabledForeground": "#000000",
      "widget.shadow": "#000000",
      "icon.foreground": "#000000",
      "sash.hoverBorder": "#000000",
      "selection.background": "#000000",
      //
      "window.activeBorder": "#000000",
      "window.inactiveBorder": "#000000",
      //
      "textBlockQuote.background": "#000000",
      "textBlockQuote.border": "#000000",
      "textPreformat.foreground": "#000000",
      "textSeparator.foreground": "#000000",
      "textCodeBlock.background": "#000000",
      //
      "toolbar.hoverBackground": "#000000",
      "toolbar.hoverOutline": "#000000",
      "toolbar.activeBackground": "#000000",
      //
      "scrollbar.shadow": "#000000",
      "scrollbarSlider.background": "#000000",
      "scrollbarSlider.hoverBackground": "#000000",
      "scrollbarSlider.activeBackground": "#000000",
      //
      "badge.foreground": "#000000",
      "badge.background": "#000000",
      //
      "progressBar.background": "#000000",
      //
      "activityBar.foreground": "#000000",
      "activityBar.background": "#000000",
      "activityBar.inactiveForeground": "#000000",
      "activityBarBadge.foreground": "#000000",
      "activityBarBadge.background": "#000000",
      "activityBar.border": "#000000",
      "activityBar.activeBackground": "#000000",
      "activityBar.activeBorder": "#000000",
      "activityBar.dropBorder": "#000000",
      "activityBar.activeFocusBorder": "#000000",
      //
      "sideBar.background": "#000000",
      "sideBar.foreground": "#000000",
      "sideBarSectionHeader.background": "#000000",
      "sideBarSectionHeader.foreground": "#000000",
      "sideBarSectionHeader.border": "#000000",
      "sideBarTitle.foreground": "#000000",
      "sideBar.border": "#000000",
      "sideBar.dropBackground": "#000000",
      "list.inactiveSelectionBackground": "#000000",
      "list.inactiveSelectionForeground": "#000000",
      "list.hoverBackground": "#000000",
      "list.hoverForeground": "#000000",
      "list.activeSelectionBackground": "#000000",
      "list.activeSelectionForeground": "#000000",
      "list.activeSelectionIconForeground": "#000000",
      //
      "tree.tableColumnsBorder": "#000000",
      "tree.tableOddRowsBackground": "#000000",
      "tree.indentGuidesStroke": "#000000",
      "list.dropBackground": "#000000",
      "list.highlightForeground": "#000000",
      "list.focusBackground": "#000000",
      "list.focusForeground": "#000000",
      "list.focusOutline": "#000000",
      "list.deemphasizedForeground": "#000000",
      "list.errorForeground": "#000000",
      "list.warningForeground": "#000000",
      "list.filterMatchBackground": "#000000",
      "list.filterMatchBorder": "#000000",
      "list.focusAndSelectionOutline": "#000000",
      "list.inactiveFocusBackground": "#000000",
      "list.inactiveFocusOutline": "#000000",
      "list.focusHighlightForeground": "#000000",
      "list.inactiveSelectionIconForeground": "#000000",
      "list.invalidItemForeground": "#000000",
      
      //
      "listFilterWidget.background": "#000000",
      "listFilterWidget.outline": "#000000",
      "listFilterWidget.noMatchesOutline": "#000000",
      "listFilterWidget.shadow": "#000000",
      //
      "statusBar.foreground": "#000000",
      "statusBar.background": "#000000",
      "statusBar.border": "#000000",
      "statusBarItem.hoverBackground": "#000000",
      "statusBar.debuggingBackground": "#000000",
      "statusBar.debuggingBorder": "#000000",
      "statusBar.debuggingForeground": "#000000",
      "statusBar.noFolderBackground": "#000000",
      "statusBar.noFolderForeground": "#000000",
      "statusBar.noFolderBorder": "#000000",
      "statusBarItem.remoteBackground": "#000000",
      "statusBarItem.remoteForeground": "#000000",
      "statusBarItem.errorBackground": "#000000",
      "statusBarItem.errorForeground": "#000000",
      "statusBarItem.warningBackground": "#000000",
      "statusBarItem.warningForeground": "#000000",
      "statusBarItem.prominentBackground": "#000000",
      "statusBarItem.prominentHoverBackground": "#000000",
      "statusBarItem.prominentForeground": "#000000",
      "statusBarItem.focusBorder": "#000000",
      "statusBarItem.activeBackground": "#000000",
      "statusBarItem.compactHoverBackground": "#000000",
      "statusBar.focusBorder": "#000000",
      //
      "titleBar.activeBackground": "#000000",
      "titleBar.activeForeground": "#000000",
      "titleBar.inactiveBackground": "#000000",
      "titleBar.inactiveForeground": "#000000",
      "titleBar.border": "#000000",
      //
      "menubar.selectionForeground": "#000000",
      "menubar.selectionBackground": "#000000",
      "menu.foreground": "#000000",
      "menu.background": "#000000",
      "menu.selectionForeground": "#000000",
      "menu.selectionBackground": "#000000",
      "menu.selectionBorder": "#000000",
      "menu.separatorBackground": "#000000",
      "menu.border": "#000000",
      "menubar.selectionBorder": "#000000",
      //
      "button.background": "#000000",
      "button.foreground": "#000000",
      "button.hoverBackground": "#000000",
      "button.secondaryForeground": "#000000",
      "button.secondaryBackground": "#000000",
      "button.secondaryHoverBackground": "#000000",
      "button.border": "#000000",
      "button.separator": "#000000",
      //
      "textLink.foreground": "#000000",
      "textLink.activeForeground": "#000000",
      //
      "extensionButton.prominentBackground": "#000000",
      "extensionButton.prominentHoverBackground": "#000000",
      "extensionButton.prominentForeground": "#000000",
      "extensionButton.background": "#000000",
      "extensionButton.hoverBackground": "#000000",
      "extensionButton.foreground": "#000000",
      "extensionButton.separator": "#000000",
      "extensionBadge.remoteBackground": "#000000",
      "extensionBadge.remoteForeground": "#000000",
      "extensionIcon.preReleaseForeground": "#000000",
      "extensionIcon.verifiedForeground": "#000000",
      "extensionIcon.sponsorForeground": "#000000",
      "extensionIcon.starForeground": "#000000",
      //
      "input.background": "#000000",
      "input.border": "#000000",
      "input.foreground": "#000000",
      "input.placeholderForeground": "#000000",
      //
      "inputOption.hoverBackground": "#000000",
      "inputOption.activeBackground": "#000000",
      "inputOption.activeBorder": "#000000",
      "inputOption.activeForeground": "#000000",
      //
      "inputValidation.errorBackground": "#000000",
      "inputValidation.errorBorder": "#000000",
      "inputValidation.errorForeground": "#000000",
      "inputValidation.warningBackground": "#000000",
      "inputValidation.warningBorder": "#000000",
      "inputValidation.warningForeground": "#000000",
      "inputValidation.infoBackground": "#000000",
      "inputValidation.infoBorder": "#000000",
      "inputValidation.infoForeground": "#000000",
      //
      "pickerGroup.foreground": "#000000",
      "pickerGroup.border": "#000000",
      "quickInputTitle.background": "#000000",
      "quickInput.background": "#000000",
      "quickInput.foreground": "#000000",
      "quickInputList.focusBackground": "#000000",
      "quickInputList.focusForeground": "#000000",
      "quickInputList.focusIconForeground": "#000000",
      //
      "checkbox.background": "#000000",
      "checkbox.foreground": "#000000",
      "checkbox.border": "#000000",
      "checkbox.selectBorder": "#000000",
      "checkbox.selectBackground": "#000000",
      //
      "dropdown.background": "#000000",
      "dropdown.listBackground": "#000000",
      "dropdown.foreground": "#000000",
      "dropdown.border": "#000000",
      //
      "keybindingLabel.border": "#000000",
      "keybindingLabel.bottomBorder": "#000000",
      "keybindingLabel.background": "#000000",
      "keybindingLabel.foreground": "#000000",
      "keybindingTable.headerBackground": "#000000",
      "keybindingTable.rowsBackground": "#000000",
      //
      "minimapGutter.addedBackground": "#000000",
      "minimapGutter.modifiedBackground": "#000000",
      "minimapGutter.deletedBackground": "#000000",
      //
      "minimap.foregroundOpacity": "#000000",
      "minimap.findMatchHighlight": "#000000",
      "minimap.selectionHighlight": "#000000",
      "minimap.errorHighlight": "#000000",
      "minimap.warningHighlight": "#000000",
      "minimap.background": "#000000",
      "minimap.selectionOccurrenceHighlight": "#000000",
      //
      "minimapSlider.activeBackground": "#000000",
      "minimapSlider.background": "#000000",
      "minimapSlider.hoverBackground": "#000000",
      //
      "editorGroup.border": "#000000",
      "editorGroup.dropBackground": "#000000",
      "editorGroupHeader.noTabsBackground": "#000000",
      "editorGroupHeader.tabsBackground": "#000000",
      "editorGroupHeader.tabsBorder": "#000000",
      "editorGroupHeader.border": "#000000",
      "editorGroup.emptyBackground": "#000000",
      "editorGroup.focusedEmptyBorder": "#000000",
      "editorGroup.dropIntoPromptForeground": "#000000",
      "editorGroup.dropIntoPromptBackground": "#000000",
      "editorGroup.dropIntoPromptBorder": "#000000",
      //
      "tab.border": "#000000",
      "tab.lastPinnedBorder": "#000000",
      "tab.hoverForeground": "#000000",
      "tab.hoverBackground": "#000000",
      "tab.hoverBorder": "#000000",
      "tab.unfocusedHoverForeground": "#000000",
      "tab.unfocusedHoverBackground": "#000000",
      "tab.unfocusedHoverBorder": "#000000",
      "tab.activeForeground": "#000000",
      "tab.activeBackground": "#000000",
      "tab.activeBorder": "#000000",
      "tab.activeBorderTop": "#000000",
      "tab.activeModifiedBorder": "#000000",
      "tab.unfocusedActiveForeground": "#000000",
      "tab.unfocusedActiveBackground": "#000000",
      "tab.unfocusedActiveBorder": "#000000",
      "tab.unfocusedActiveBorderTop": "#000000",
      "tab.unfocusedActiveModifiedBorder": "#000000",
      "tab.inactiveForeground": "#000000",
      "tab.inactiveBackground": "#000000",
      "tab.inactiveModifiedBorder": "#000000",
      "tab.unfocusedInactiveForeground": "#000000",
      "tab.unfocusedInactiveBackground": "#000000",
      "tab.unfocusedInactiveModifiedBorder": "#000000",
      "editorPane.background": "#000000",
      "sideBySideEditor.horizontalBorder": "#000000",
      "sideBySideEditor.verticalBorder": "#000000",
      //
      "searchEditor.findMatchBackground": "#000000",
      "searchEditor.findMatchBorder": "#000000",
      "searchEditor.textInputBorder": "#000000",
      //
      "editor.background": "#000000",
      "editor.foreground": "#000000",
      "editorLineNumber.foreground": "#000000",
      "editorLineNumber.activeForeground": "#000000",
      "editorCursor.foreground": "#000000",
      "editorCursor.background": "#000000",
      //
      "editor.selectionBackground": "#000000",
      "editor.selectionForeground": "#000000",
      "editor.inactiveSelectionBackground": "#000000",
      "editor.selectionHighlightBackground": "#000000",
      "editor.selectionHighlightBorder": "#000000",
      "editor.wordHighlightBackground": "#000000",
      "editor.wordHighlightBorder": "#000000",
      "editor.wordHighlightStrongBackground": "#000000",
      "editor.wordHighlightStrongBorder": "#000000",
      "editor.findMatchBackground": "#000000",
      "editor.findMatchBorder": "#000000",
      "editor.findMatchHighlightBackground": "#000000",
      "editor.findMatchHighlightBorder": "#000000",
      "editor.findRangeHighlightBackground": "#000000",
      "editor.findRangeHighlightBorder": "#000000",
      "editor.hoverHighlightBackground": "#000000",
      "editor.lineHighlightBackground": "#000000",
      "editor.lineHighlightBorder": "#000000",
      "editorUnicodeHighlight.border": "#000000",
      "editorUnicodeHighlight.background": "#000000",
      "editorLink.activeForeground": "#000000",
      "editor.rangeHighlightBackground": "#000000",
      "editor.rangeHighlightBorder": "#000000",
      "editorWhitespace.foreground": "#000000",
      "editor.symbolHighlightBackground": "#000000",
      "editor.symbolHighlightBorder": "#000000",
      "editorIndentGuide.background": "#000000",
      "editorIndentGuide.activeBackground": "#000000",
      "editorInlayHint.background": "#000000",
      "editorInlayHint.foreground": "#000000",
      "editorInlayHint.typeBackground": "#000000",
      "editorInlayHint.typeForeground": "#000000",
      "editorInlayHint.parameterBackground": "#000000",
      "editorInlayHint.parameterForeground": "#000000",
      "editorRuler.foreground": "#000000",
      "editor.linkedEditingBackground": "#000000",
      "editorCodeLens.foreground": "#000000",
      "editorLightBulb.foreground": "#000000",
      "editorLightBulbAutoFix.foreground": "#000000",
      //
      "editorBracketMatch.background": "#000000",
      "editorBracketMatch.border": "#000000",
      "editorBracketHighlight.foreground1": "#000000",
      "editorBracketHighlight.foreground2": "#000000",
      "editorBracketHighlight.foreground3": "#000000",
      "editorBracketHighlight.foreground4": "#000000",
      "editorBracketHighlight.foreground5": "#000000",
      "editorBracketHighlight.foreground6": "#000000",
      "editorBracketHighlight.unexpectedBracket.foreground": "#000000",
      "editorBracketPairGuide.activeBackground1": "#000000",
      "editorBracketPairGuide.background1": "#000000",
      "editorBracketPairGuide.activeBackground2": "#000000",
      "editorBracketPairGuide.background2": "#000000",
      "editorBracketPairGuide.activeBackground3": "#000000",
      "editorBracketPairGuide.background3": "#000000",
      "editorBracketPairGuide.activeBackground4": "#000000",
      "editorBracketPairGuide.background4": "#000000",
      "editorBracketPairGuide.activeBackground5": "#000000",
      "editorBracketPairGuide.background5": "#000000",
      "editorBracketPairGuide.activeBackground6": "#000000",
      "editorBracketPairGuide.background6": "#000000",
      //
      "editor.foldBackground": "#000000",
      "editorOverviewRuler.background": "#000000",
      "editorOverviewRuler.border": "#000000",
      "editorOverviewRuler.findMatchForeground": "#000000",
      "editorOverviewRuler.rangeHighlightForeground": "#000000",
      "editorOverviewRuler.selectionHighlightForeground": "#000000",
      "editorOverviewRuler.wordHighlightForeground": "#000000",
      "editorOverviewRuler.wordHighlightStrongForeground": "#000000",
      "editorOverviewRuler.modifiedForeground": "#000000",
      "editorOverviewRuler.addedForeground": "#000000",
      "editorOverviewRuler.deletedForeground": "#000000",
      "editorOverviewRuler.errorForeground": "#000000",
      "editorOverviewRuler.warningForeground": "#000000",
      "editorOverviewRuler.infoForeground": "#000000",
      "editorOverviewRuler.bracketMatchForeground": "#000000",
      //
      "editorError.foreground": "#000000",
      "editorError.background": "#000000",
      "editorError.border": "#000000",
      "editorWarning.foreground": "#000000",
      "editorWarning.background": "#000000",
      "editorWarning.border": "#000000",
      "editorInfo.foreground": "#000000",
      "editorInfo.background": "#000000",
      "editorInfo.border": "#000000",
      "editorHint.foreground": "#000000",
      "editorHint.border": "#000000",
      "problemsErrorIcon.foreground": "#000000",
      "problemsWarningIcon.foreground": "#000000",
      "problemsInfoIcon.foreground": "#000000",
      "editorUnnecessaryCode.border": "#000000",
      "editorUnnecessaryCode.opacity": "#000000",
      //
      "editorGutter.background": "#000000",
      "editorGutter.modifiedBackground": "#000000",
      "editorGutter.addedBackground": "#000000",
      "editorGutter.deletedBackground": "#000000",
      "editorGutter.foldingControlForeground": "#000000",
      //
      "editorGutter.commentRangeForeground": "#000000",
      "editorCommentsWidget.resolvedBorder": "#000000",
      "editorCommentsWidget.unresolvedBorder": "#000000",
      "editorCommentsWidget.rangeBackground": "#000000",
      "editorCommentsWidget.rangeBorder": "#000000",
      "editorCommentsWidget.rangeActiveBackground": "#000000",
      "editorCommentsWidget.rangeActiveBorder": "#000000",
      //
      "diffEditor.insertedTextBackground": "#000000",
      "diffEditor.insertedTextBorder": "#000000",
      "diffEditor.removedTextBackground": "#000000",
      "diffEditor.removedTextBorder": "#000000",
      "diffEditor.border": "#000000",
      "diffEditor.diagonalFill": "#000000",
      "diffEditor.insertedLineBackground": "#000000",
      "diffEditor.removedLineBackground": "#000000",
      "diffEditorGutter.insertedLineBackground": "#000000",
      "diffEditorGutter.removedLineBackground": "#000000",
      "diffEditorOverview.insertedForeground": "#000000",
      "diffEditorOverview.removedForeground": "#000000",
      //
      "editorWidget.foreground": "#000000",
      "editorWidget.background": "#000000",
      "editorWidget.border": "#000000",
      "editorWidget.resizeBorder": "#000000",
      "editorSuggestWidget.background": "#000000",
      "editorSuggestWidget.border": "#000000",
      "editorSuggestWidget.foreground": "#000000",
      "editorSuggestWidget.focusHighlightForeground": "#000000",
      "editorSuggestWidget.highlightForeground": "#000000",
      "editorSuggestWidget.selectedBackground": "#000000",
      "editorSuggestWidget.selectedForeground": "#000000",
      "editorSuggestWidget.selectedIconForeground": "#000000",
      "editorSuggestWidgetStatus.foreground": "#000000",
      "editorHoverWidget.background": "#000000",
      "editorHoverWidget.border": "#000000",
      "editorHoverWidget.foreground": "#000000",
      "editorHoverWidget.statusBarBackground": "#000000",
      "editorHoverWidget.highlightForeground": "#000000",
      "editorGhostText.background": "#000000",
      "editorGhostText.border": "#000000",
      "editorGhostText.foreground": "#000000",
      "editorStickyScroll.background": "#000000",
      "editorStickyScrollHover.background": "#000000",
      "debugExceptionWidget.background": "#000000",
      "debugExceptionWidget.border": "#000000",
      "editorMarkerNavigation.background": "#000000",
      "editorMarkerNavigationError.background": "#000000",
      "editorMarkerNavigationError.headerBackground": "#000000",
      "editorMarkerNavigationWarning.background": "#000000",
      "editorMarkerNavigationWarning.headerBackground": "#000000",
      "editorMarkerNavigationInfo.background": "#000000",
      "editorMarkerNavigationInfo.headerBackground": "#000000",
      "peekView.border": "#000000",
      "peekViewEditor.background": "#000000",
      "peekViewEditor.matchHighlightBackground": "#000000",
      "peekViewEditorGutter.background": "#000000",
      "peekViewEditor.matchHighlightBorder": "#000000",
      "peekViewResult.background": "#000000",
      "peekViewResult.fileForeground": "#000000",
      "peekViewResult.lineForeground": "#000000",
      "peekViewResult.matchHighlightBackground": "#000000",
      "peekViewResult.selectionBackground": "#000000",
      "peekViewResult.selectionForeground": "#000000",
      "peekViewTitle.background": "#000000",
      "peekViewTitleLabel.foreground": "#000000",
      "peekViewTitleDescription.foreground": "#000000",
      //
      "merge.currentHeaderBackground": "#000000",
      "merge.currentContentBackground": "#000000",
      "merge.incomingHeaderBackground": "#000000",
      "merge.incomingContentBackground": "#000000",
      "merge.border": "#000000",
      "merge.commonContentBackground": "#000000",
      "merge.commonHeaderBackground": "#000000",
      //
      "editorOverviewRuler.currentContentForeground": "#000000",
      "editorOverviewRuler.incomingContentForeground": "#000000",
      "editorOverviewRuler.commonContentForeground": "#000000",
      //
      "mergeEditor.change.background": "#000000",
      "mergeEditor.change.word.background": "#000000",
      "mergeEditor.conflict.unhandledUnfocused.border": "#000000",
      "mergeEditor.conflict.unhandledFocused.border": "#000000",
      "mergeEditor.conflict.handledUnfocused.border": "#000000",
      "mergeEditor.conflict.handledFocused.border": "#000000",
      "mergeEditor.conflict.handled.minimapOverViewRuler": "#000000",
      "mergeEditor.conflict.unhandled.minimapOverViewRuler": "#000000",
      "mergeEditor.changeBase.background": "#000000",
      "mergeEditor.changeBase.word.background": "#000000",
      //
      "panel.background": "#000000",
      "panel.border": "#000000",
      "panel.dropBorder": "#000000",
      "panelTitle.activeForeground": "#000000",
      "panelTitle.activeBorder": "#000000",
      "panelTitle.inactiveForeground": "#000000",
      "panelInput.border": "#000000",
      "panelSection.border": "#000000",
      "panelSection.dropBackground": "#000000",
      "panelSectionHeader.background": "#000000",
      "panelSectionHeader.foreground": "#000000",
      "panelSectionHeader.border": "#000000",
      //
      "commandCenter.foreground": "#000000",
      "commandCenter.background": "#000000",
      "commandCenter.border": "#000000",
      "commandCenter.activeForeground": "#000000",
      "commandCenter.activeBackground": "#000000",
      "commandCenter.activeBorder": "#000000",
      "commandCenter.inactiveForeground": "#000000",
      "commandCenter.inactiveBorder": "#000000",
      //
      "notificationCenter.border": "#000000",
      "notificationCenterHeader.background": "#000000",
      "notificationCenterHeader.foreground": "#000000",
      "notificationToast.border": "#000000",
      "notifications.foreground": "#000000",
      "notifications.background": "#000000",
      "notifications.border": "#000000",
      "notificationLink.foreground": "#000000",
      "notificationsErrorIcon.foreground": "#000000",
      "notificationsWarningIcon.foreground": "#000000",
      "notificationsInfoIcon.foreground": "#000000",
      //
      "banner.background": "#000000",
      "banner.foreground": "#000000",
      "banner.iconForeground": "#000000",
      //
      "terminal.background": "#000000",
      "terminal.border": "#000000",
      "terminal.foreground": "#000000",
      //
      "terminal.ansiBlack": "#000000",
      "terminal.ansiBrightBlack": "#000000",
      "terminal.ansiWhite": "#000000",
      "terminal.ansiBrightWhite": "#000000",
      "terminal.ansiRed": "#000000",
      "terminal.ansiBrightRed": "#000000",
      "terminal.ansiYellow": "#000000",
      "terminal.ansiBrightYellow": "#000000",
      "terminal.ansiGreen": "#000000",
      "terminal.ansiBrightGreen": "#000000",
      "terminal.ansiCyan": "#000000",
      "terminal.ansiBrightCyan": "#000000",
      "terminal.ansiBlue": "#000000",
      "terminal.ansiBrightBlue": "#000000",
      "terminal.ansiMagenta": "#000000",
      "terminal.ansiBrightMagenta": "#000000",
      //
      "terminal.selectionBackground": "#000000",
      "terminal.selectionForeground": null,
      "terminal.inactiveSelectionBackground": "#000000",
      "terminal.findMatchBackground": "#000000",
      "terminal.findMatchBorder": "#000000",
      "terminal.findMatchHighlightBackground": "#000000",
      "terminal.findMatchHighlightBorder": "#000000",
      "terminalCursor.background": "#000000",
      "terminalCursor.foreground": "#000000",
      "terminal.dropBackground": "#000000",
      "terminal.tab.activeBorder": "#000000",
      "terminalCommandDecoration.defaultBackground": "#000000",
      "terminalCommandDecoration.errorBackground": "#000000",
      "terminalCommandDecoration.successBackground": "#000000",
      "terminalOverviewRuler.cursorForeground": "#000000",
      "terminalOverviewRuler.findMatchForeground": "#000000",
      //
      "debugToolBar.background": "#000000",
      "debugToolBar.border": "#000000",
      "editor.stackFrameHighlightBackground": "#000000",
      "editor.focusedStackFrameHighlightBackground": "#000000",
      "editor.inlineValuesBackground": "#000000",
      "editor.inlineValuesForeground": "#000000",
      "debugView.exceptionLabelBackground": "#000000",
      "debugView.exceptionLabelForeground": "#000000",
      "debugView.stateLabelBackground": "#000000",
      "debugView.stateLabelForeground": "#000000",
      "debugView.valueChangedHighlight": "#000000",
      "debugTokenExpression.name": "#000000",
      "debugTokenExpression.value": "#000000",
      "debugTokenExpression.boolean": "#000000",
      "debugTokenExpression.error": "#000000",
      "debugTokenExpression.number": "#000000",
      "debugTokenExpression.string": "#000000",
      //
      "testing.iconFailed": "#000000",
      "testing.iconErrored": "#000000",
      "testing.iconPassed": "#000000",
      "testing.iconQueued": "#000000",
      "testing.iconSkipped": "#000000",
      "testing.iconUnset": "#000000",
      "testing.runAction": "#000000",
      "testing.peekBorder": "#000000",
      "testing.peekHeaderBackground": "#000000",
      "testing.message.error.decorationForeground": "#000000",
      "testing.message.error.lineBackground": "#000000",
      "testing.message.info.decorationForeground": "#000000",
      "testing.message.info.lineBackground": "#000000",
      //
      "welcomePage.background": "#000000",
      "welcomePage.tileBackground": "#000000",
      "welcomePage.tileHoverBackground": "#000000",
      "welcomePage.tileBorder": "#000000",
      "welcomePage.progress.background": "#000000",
      "welcomePage.progress.foreground": "#000000",
      "walkThrough.embeddedEditorBackground": "#000000",
      "walkthrough.stepTitle.foreground": "#000000",
      //
      "scm.providerBorder": "#000000",
      //
      "gitDecoration.addedResourceForeground": "#000000",
      "gitDecoration.modifiedResourceForeground": "#000000",
      "gitDecoration.deletedResourceForeground": "#000000",
      "gitDecoration.conflictingResourceForeground": "#000000",
      "gitDecoration.ignoredResourceForeground": "#000000",
      "gitDecoration.renamedResourceForeground": "#000000",
      "gitDecoration.stageDeletedResourceForeground": "#000000",
      "gitDecoration.stageModifiedResourceForeground": "#000000",
      "gitDecoration.submoduleResourceForeground": "#000000",
      "gitDecoration.untrackedResourceForeground": "#000000",
      //
      "settings.headerForeground": "#000000",
      "settings.modifiedItemIndicator": "#000000",
      "settings.dropdownBackground": "#000000",
      "settings.dropdownForeground": "#000000",
      "settings.dropdownBorder": "#000000",
      "settings.dropdownListBorder": "#000000",
      "settings.checkboxBackground": "#000000",
      "settings.checkboxBorder": "#000000",
      "settings.checkboxForeground": "#000000",
      "settings.rowHoverBackground": "#000000",
      "settings.textInputBackground": "#000000",
      "settings.textInputForeground": "#000000",
      "settings.textInputBorder": "#000000",
      "settings.numberInputBackground": "#000000",
      "settings.numberInputForeground": "#000000",
      "settings.numberInputBorder": "#000000",
      "settings.focusedRowBackground": "#000000",
      "settings.focusedRowBorder": "#000000",
      "settings.headerBorder": "#000000",
      "settings.sashBorder": "#000000",
      //
      "breadcrumb.background": "#000000",
      "breadcrumb.foreground": "#000000",
      "breadcrumb.activeSelectionForeground": "#000000",
      "breadcrumb.focusForeground": "#000000",
      "breadcrumbPicker.background": "#000000",
      //
      "editor.snippetFinalTabstopHighlightBackground": "#000000",
      "editor.snippetFinalTabstopHighlightBorder": "#000000",
      "editor.snippetTabstopHighlightBackground": "#000000",
      "editor.snippetTabstopHighlightBorder": "#000000",
      //
      "symbolIcon.constantForeground": "#000000",
      "symbolIcon.colorForeground": "#000000",
      "symbolIcon.enumeratorForeground": "#000000",
      "symbolIcon.enumeratorMemberForeground": "#000000",
      "symbolIcon.eventForeground": "#000000",
      "symbolIcon.functionForeground": "#000000",
      "symbolIcon.fieldForeground": "#000000",
      "symbolIcon.fileForeground": "#000000",
      "symbolIcon.folderForeground": "#000000",
      "symbolIcon.interfaceForeground": "#000000",
      "symbolIcon.variableForeground": "#000000",
      "symbolIcon.moduleForeground": "#000000",
      "symbolIcon.arrayForeground": "#000000",
      "symbolIcon.booleanForeground": "#000000",
      "symbolIcon.operatorForeground": "#000000",
      "symbolIcon.propertyForeground": "#000000",
      "symbolIcon.referenceForeground": "#000000",
      "symbolIcon.snippetForeground": "#000000",
      "symbolIcon.structForeground": "#000000",
      "symbolIcon.textForeground": "#000000",
      "symbolIcon.typeParameterForeground": "#000000",
      "symbolIcon.unitForeground": "#000000",
      "symbolIcon.nullForeground": "#000000",
      "symbolIcon.classForeground": "#000000",
      "symbolIcon.methodForeground": "#000000",
      "symbolIcon.stringForeground": "#000000",
      "symbolIcon.constructorForeground": "#000000",
      "symbolIcon.numberForeground": "#000000",
      "symbolIcon.objectForeground": "#000000",
      "symbolIcon.keyForeground": "#000000",
      "symbolIcon.keywordForeground": "#000000",
      "symbolIcon.namespaceForeground": "#000000",
      "symbolIcon.packageForeground": "#000000",
      //
      "debugIcon.breakpointForeground": "#000000",
      "debugIcon.breakpointDisabledForeground": "#000000",
      "debugIcon.breakpointUnverifiedForeground": "#000000",
      "debugIcon.breakpointCurrentStackframeForeground": "#000000",
      "debugIcon.breakpointStackframeForeground": "#000000",
      "debugIcon.continueForeground": "#000000",
      "debugIcon.startForeground": "#000000",
      "debugIcon.pauseForeground": "#000000",
      "debugIcon.stopForeground": "#000000",
      "debugIcon.disconnectForeground": "#000000",
      "debugIcon.restartForeground": "#000000",
      "debugIcon.stepOverForeground": "#000000",
      "debugIcon.stepIntoForeground": "#000000",
      "debugIcon.stepOutForeground": "#000000",
      "debugIcon.stepBackForeground": "#000000",
      "debugConsole.infoForeground": "#000000",
      "debugConsole.warningForeground": "#000000",
      "debugConsole.errorForeground": "#000000",
      "debugConsole.sourceForeground": "#000000",
      "debugConsoleInputIcon.foreground": "#000000",
      //
      "interactive.activeCodeBorder": "#000000",
      "interactive.inactiveCodeBorder": "#000000",
      //
      "notebook.editorBackground": "#000000",
      "notebook.cellBorderColor": "#000000",
      "notebook.cellEditorBackground": "#000000",
      "notebook.cellHoverBackground": "#000000",
      "notebook.cellInsertionIndicator": "#000000",
      "notebook.cellStatusBarItemHoverBackground": "#000000",
      "notebook.cellToolbarSeparator": "#000000",
      "notebook.focusedCellBackground": "#000000",
      "notebook.focusedCellBorder": "#000000",
      "notebook.focusedEditorBorder": "#000000",
      "notebook.inactiveFocusedCellBorder": "#000000",
      "notebook.selectedCellBackground": "#000000",
      "notebook.outputContainerBackgroundColor": "#000000",
      "notebook.outputContainerBorderColor": "#000000",
      "notebook.inactiveSelectedCellBorder": "#000000",
      "notebook.selectedCellBorder": "#000000",
      "notebookStatusErrorIcon.foreground": "#000000",
      "notebookStatusRunningIcon.foreground": "#000000",
      "notebookStatusSuccessIcon.foreground": "#000000",
      "notebookScrollbarSlider.hoverBackground": "#000000",
      "notebookScrollbarSlider.activeBackground": "#000000",
      "notebookScrollbarSlider.background": "#000000",
      "notebook.symbolHighlightBackground": "#000000",
      //
      "charts.foreground": "#000000",
      "charts.blue": "#000000",
      "charts.green": "#000000",
      "charts.lines": "#000000",
      "charts.orange": "#000000",
      "charts.purple": "#000000",
      "charts.red": "#000000",
      "charts.yellow": "#000000",
      //
      "ports.iconRunningProcessForeground": "#000000"
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
 