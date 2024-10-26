import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.variantConfig.codeColors;
  const styles = themeContext.styles;
  return {
    "symbolIcon.arrayForeground": colors.scope06,
    "symbolIcon.booleanForeground": colors.scope06,
    "symbolIcon.classForeground": colors.scope03,
    "symbolIcon.colorForeground": styles.fill.text.sec,
    "symbolIcon.constantForeground": colors.scope13,
    "symbolIcon.constructorForeground": colors.scope02,
    "symbolIcon.enumeratorForeground": colors.scope03,
    "symbolIcon.enumeratorMemberForeground": colors.scope13,
    "symbolIcon.eventForeground": colors.scope09,
    "symbolIcon.fieldForeground": colors.scope11,
    "symbolIcon.fileForeground": styles.fill.accentText.pri,
    "symbolIcon.folderForeground": styles.fill.accentText.pri,
    "symbolIcon.functionForeground": colors.scope02,
    "symbolIcon.interfaceForeground": colors.scope03,
    "symbolIcon.keyForeground": colors.scope15,
    "symbolIcon.keywordForeground": colors.scope08,
    "symbolIcon.methodForeground": colors.scope02,
    "symbolIcon.moduleForeground": colors.scope05,
    "symbolIcon.namespaceForeground": colors.scope05,
    "symbolIcon.nullForeground": colors.scope06,
    "symbolIcon.numberForeground": colors.scope12,
    "symbolIcon.objectForeground": colors.scope13,
    "symbolIcon.operatorForeground": colors.scope17,
    "symbolIcon.packageForeground": colors.scope05,
    "symbolIcon.propertyForeground": colors.scope11,
    "symbolIcon.referenceForeground": colors.scope07,
    "symbolIcon.snippetForeground": colors.scope14,
    "symbolIcon.stringForeground": colors.scope00,
    "symbolIcon.structForeground": colors.scope03,
    "symbolIcon.textForeground": colors.scope17,
    "symbolIcon.typeParameterForeground": colors.scope13,
    "symbolIcon.unitForeground": colors.scope12,
    "symbolIcon.variableForeground": colors.scope10,
  };
};
