import { ThemeContext } from "../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  return [
    ...(<[]>getDefaultRules(themeContext)),
    ...(<[]>getExtraRules(themeContext)),
  ];
};

const getDefaultRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return [
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
        foreground: colors.fill.text.sec,
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
        foreground: colors.basic.def.yellow.pri,
        fontStyle: "",
      },
    },
    // enum
    {
      scope: ["entity.name.type.enum"],
      settings: {
        foreground: colors.basic.def.mint.pri,
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
        foreground: colors.basic.def.mint.pri,
        fontStyle: "",
      },
    },
    // struct
    {
      scope: ["entity.name.type.struct", "storage.type.struct"],
      settings: {
        foreground: colors.basic.def.mint.pri,
        fontStyle: "",
      },
    },
    // typeParameter
    {
      scope: ["storage.type.generic"],
      settings: {
        foreground: colors.basic.alt.mint.pri,
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
        foreground: colors.basic.def.mint.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["storage.type"],
      settings: {
        foreground: colors.basic.def.blue.pri,
        fontStyle: "",
      },
    },
    // parameter
    {
      scope: ["variable.parameter"],
      settings: {
        foreground: colors.basic.alt.orange.pri,
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
        foreground: colors.basic.alt.orange.pri,
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
        foreground: colors.basic.alt.orange.pri,
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
        foreground: colors.basic.alt.yellow.pri,
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
        foreground: colors.basic.alt.yellow.pri,
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
        foreground: colors.basic.alt.mint.pri,
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
        foreground: colors.basic.def.red.pri,
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
        foreground: colors.basic.def.red.pri,
        fontStyle: "",
      },
    },
    // event
    {
      scope: ["keyword.other.event", "variable.other.event"],
      settings: {
        foreground: colors.basic.alt.red.pri,
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
        foreground: colors.basic.def.orange.pri,
        fontStyle: "",
      },
    },
    // method
    {
      scope: ["entity.name.method", "entity.name.function.member"],
      settings: {
        foreground: colors.basic.def.orange.pri,
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
        foreground: colors.basic.alt.pink.pri,
        fontStyle: "",
      },
    },
    // label
    {
      scope: ["entity.name.label"],
      settings: {
        foreground: colors.basic.alt.pink.pri,
        fontStyle: "",
      },
    },
    // comment
    {
      scope: ["comment"],
      settings: {
        foreground: colors.basic.def.green.pri,
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
        foreground: colors.basic.def.brown.pri,
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
        foreground: colors.basic.alt.blue.pri,
        fontStyle: "",
      },
    },
    // special string
    {
      scope: ["constant.character", "constant.other.unicode-range"],
      settings: {
        foreground: colors.basic.alt.blue.pri,
        fontStyle: "",
      },
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: colors.basic.def.red.pri,
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
        foreground: colors.basic.def.pink.pri,
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
        foreground: colors.basic.def.blue.pri,
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
        foreground: colors.basic.alt.green.pri,
        fontStyle: "",
      },
    },
    // regexp
    {
      scope: ["string.regexp", "constant.regexp"],
      settings: {
        foreground: colors.basic.def.purple.pri,
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
        foreground: colors.basic.alt.purple.pri,
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
        foreground: colors.basic.alt.pink.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
      settings: {
        foreground: colors.basic.alt.blue.pri,
        fontStyle: "",
      },
    },
    {
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: colors.basic.alt.green.pri,
        fontStyle: "",
      },
    },
    // operator
    {
      scope: ["keyword.operator", "punctuation.separator.key-value"],
      settings: {
        foreground: colors.fill.text.sec,
        fontStyle: "",
      },
    },
  ];
};

const getExtraRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return [
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
        foreground: colors.basic.def.yellow.pri,
        fontStyle: "",
      },
    },
    // primitive
    {
      scope: [
        "storage.type.primitive",
        "storage.type.built-in",
        "storage.type.builtin",
        "support.type.primitive",
        "support.type.built-in",
        "support.type.builtin",
        "keyword.type",
      ],
      settings: {
        foreground: colors.basic.def.blue.pri,
        fontStyle: "",
      },
    },
    // new operator
    {
      scope: ["keyword.operator.new", "keyword.control.new"],
      settings: {
        foreground: colors.basic.def.blue.pri,
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
        foreground: colors.basic.alt.mint.pri,
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
        foreground: colors.basic.def.brown.pri,
        fontStyle: "",
      },
    },
    // invalid
    {
      scope: ["invalid"],
      settings: {
        foreground: colors.basic.def.red.pri,
        fontStyle: "",
      },
    },
    // id
    {
      scope: ["entity.other.attribute-name.id"],
      settings: {
        foreground: colors.basic.def.purple.pri,
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
        foreground: colors.basic.alt.blue.pri,
        fontStyle: "",
      },
    },
    // property-name-vendored
    {
      scope: ["support.type.vendored.property-name"],
      settings: {
        foreground: colors.basic.alt.blue.pri,
        fontStyle: "underline",
      },
    },
    // pseudo-class
    {
      scope: ["entity.other.attribute-name.pseudo-class"],
      settings: {
        foreground: colors.basic.alt.yellow.pri,
        fontStyle: "",
      },
    },
    // pseudo-element
    {
      scope: ["entity.other.attribute-name.pseudo-element"],
      settings: {
        foreground: colors.basic.alt.purple.pri,
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
        foreground: colors.basic.alt.pink.pri,
        fontStyle: "",
      },
    },
    // markdown
    {
      scope: ["heading.1", "markup.heading.setext.1"],
      settings: {
        foreground: colors.basic.def.red.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["heading.2", "markup.heading.setext.2"],
      settings: {
        foreground: colors.basic.def.orange.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["heading.3", "markup.heading.setext.3"],
      settings: {
        foreground: colors.basic.def.yellow.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["heading.4", "markup.heading.setext.4"],
      settings: {
        foreground: colors.basic.def.green.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["heading.5", "markup.heading.setext.5"],
      settings: {
        foreground: colors.basic.def.mint.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["heading.6", "markup.heading.setext.6"],
      settings: {
        foreground: colors.basic.def.blue.pri,
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
        foreground: colors.basic.alt.blue.pri,
        fontStyle: "underline",
      },
    },
    {
      scope: [
        "string.other.link",
        "punctuation.definition.list.begin.markdown",
      ],
      settings: {
        foreground: colors.fill.accentText.pri,
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
        foreground: colors.basic.def.pink.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["punctuation.definition.quote.begin"],
      settings: {
        foreground: colors.basic.def.purple.pri,
        fontStyle: "",
      },
    },
    {
      scope: ["punctuation.definition.tag"],
      settings: {
        foreground: colors.fill.text.sec,
        fontStyle: "",
      },
    },
    {
      scope: ["meta.separator"],
      settings: {
        foreground: colors.basic.def.brown.pri,
        fontStyle: "",
      },
    },
    {
      scope: "markup.inserted",
      settings: {
        foreground: colors.basic.def.green.pri,
      },
    },
    {
      scope: "markup.deleted",
      settings: {
        foreground: colors.basic.def.red.pri,
      },
    },
    {
      scope: "markup.changed",
      settings: {
        foreground: colors.basic.def.blue.pri,
      },
    },
    // magicFunction
    {
      scope: "support.function.magic.python",
      settings: {
        foreground: colors.basic.def.purple.pri,
      },
    },
  ];
};
