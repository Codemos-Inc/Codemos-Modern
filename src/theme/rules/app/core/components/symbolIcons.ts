import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles.code;
  const styles = themeContext.styles;
  return {
    "symbolIcon.arrayForeground": colors.s06,
    "symbolIcon.booleanForeground": colors.s06,
    "symbolIcon.classForeground": colors.s03,
    "symbolIcon.colorForeground": styles.fill.text.sec,
    "symbolIcon.constantForeground": colors.s13,
    "symbolIcon.constructorForeground": colors.s02,
    "symbolIcon.enumeratorForeground": colors.s03,
    "symbolIcon.enumeratorMemberForeground": colors.s13,
    "symbolIcon.eventForeground": colors.s09,
    "symbolIcon.fieldForeground": colors.s11,
    "symbolIcon.fileForeground": styles.fill.accentText.pri,
    "symbolIcon.folderForeground": styles.fill.accentText.pri,
    "symbolIcon.functionForeground": colors.s02,
    "symbolIcon.interfaceForeground": colors.s03,
    "symbolIcon.keyForeground": colors.s15,
    "symbolIcon.keywordForeground": colors.s08,
    "symbolIcon.methodForeground": colors.s02,
    "symbolIcon.moduleForeground": colors.s05,
    "symbolIcon.namespaceForeground": colors.s05,
    "symbolIcon.nullForeground": colors.s06,
    "symbolIcon.numberForeground": colors.s12,
    "symbolIcon.objectForeground": colors.s13,
    "symbolIcon.operatorForeground": colors.sxx,
    "symbolIcon.packageForeground": colors.s05,
    "symbolIcon.propertyForeground": colors.s11,
    "symbolIcon.referenceForeground": colors.s07,
    "symbolIcon.snippetForeground": colors.s14,
    "symbolIcon.stringForeground": colors.s00,
    "symbolIcon.structForeground": colors.s03,
    "symbolIcon.textForeground": colors.sxx,
    "symbolIcon.typeParameterForeground": colors.s13,
    "symbolIcon.unitForeground": colors.s12,
    "symbolIcon.variableForeground": colors.s10,
  };
};
