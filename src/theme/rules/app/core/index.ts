import { ThemeContext } from "../../../../@types";
import { getRules as getActionRules } from "./components/action";
import { getRules as getActionBarRules } from "./components/actionBar";
import { getRules as getActivityBarRules } from "./components/activityBar";
import { getRules as getBadgeRules } from "./components/badge";
import { getRules as getBannerRules } from "./components/banner";
import { getRules as getBaseRules } from "./components/base";
import { getRules as getBreadcrumbsRules } from "./components/breadcrumbs";
import { getRules as getButtonControlRules } from "./components/buttonControl";
import { getRules as getChartRules } from "./components/chart";
import { getRules as getChatRules } from "./components/chat";
import { getRules as getCommandCenterRules } from "./components/commandCenter";
import { getRules as getCommentsViewRules } from "./components/commentsView";
import { getRules as getContrastRules } from "./components/contrast";
import { getRules as getDebugRules } from "./components/debug";
import { getRules as getDebugIconsRules } from "./components/debugIcons";
import { getRules as getDiffEditorRules } from "./components/diffEditor";
import { getRules as getDropdownControlRules } from "./components/dropdownControl";
import { getRules as getEditorRules } from "./components/editor";
import { getRules as getEditorGroupsAndTabsRules } from "./components/editorGroupsAndTabs";
import { getRules as getEditorWidgetRules } from "./components/editorWidget";
import { getRules as getExtensionsRules } from "./components/extensions";
import { getRules as getGitRules } from "./components/git";
import { getRules as getInputControlRules } from "./components/inputControl";
import { getRules as getIntegratedTerminalRules } from "./components/integratedTerminal";
import { getRules as getInteractiveEditorRules } from "./components/inlineChat";
import { getRules as getKeybindingLabelRules } from "./components/keybindingLabel";
import { getRules as getKeyboardShortcutTableRules } from "./components/keyboardShortcutTable";
import { getRules as getListsAndTreesRules } from "./components/listsAndTrees";
import { getRules as getMenuBarRules } from "./components/menuBar";
import { getRules as getMergeConflictsRules } from "./components/mergeConflicts";
import { getRules as getMinimapRules } from "./components/minimap";
import { getRules as getNotebookRules } from "./components/notebook";
import { getRules as getNotificationRules } from "./components/notification";
import { getRules as getPanelRules } from "./components/panel";
import { getRules as getPeekViewRules } from "./components/peekView";
import { getRules as getPortsRules } from "./components/ports";
import { getRules as getProfilesRules } from "./components/profiles";
import { getRules as getProgressBarRules } from "./components/progressBar";
import { getRules as getQuickPickerRules } from "./components/quickPicker";
import { getRules as getScmRules } from "./components/scm";
import { getRules as getScrollbarControlRules } from "./components/scrollbarControl";
import { getRules as getSettingsEditorRules } from "./components/settingsEditor";
import { getRules as getSideBarRules } from "./components/sideBar";
import { getRules as getSimpleFindWidgetRules } from "./components/simpleFindWidget";
import { getRules as getSnippetsRules } from "./components/snippets";
import { getRules as getStatusBarRules } from "./components/statusBar";
import { getRules as getSymbolIconsRules } from "./components/symbolIcons";
import { getRules as getTestingRules } from "./components/testing";
import { getRules as getTextRules } from "./components/text";
import { getRules as getTitleBarRules } from "./components/titleBar";
import { getRules as getWelcomePageRules } from "./components/welcomePage";
import { getRules as getWindowBorderRules } from "./components/windowBorder";

export const getRules = (themeContext: ThemeContext): object => {
  return {
    ...getActionRules(themeContext),
    ...getActionBarRules(),
    ...getActivityBarRules(themeContext),
    ...getBadgeRules(themeContext),
    ...getBannerRules(themeContext),
    ...getBaseRules(themeContext),
    ...getBreadcrumbsRules(themeContext),
    ...getButtonControlRules(themeContext),
    ...getChartRules(themeContext),
    ...getChatRules(themeContext),
    ...getCommandCenterRules(themeContext),
    ...getCommentsViewRules(themeContext),
    ...getContrastRules(),
    ...getDebugRules(themeContext),
    ...getDebugIconsRules(themeContext),
    ...getDiffEditorRules(themeContext),
    ...getDropdownControlRules(themeContext),
    ...getEditorRules(themeContext),
    ...getEditorGroupsAndTabsRules(themeContext),
    ...getEditorWidgetRules(themeContext),
    ...getExtensionsRules(themeContext),
    ...getGitRules(themeContext),
    ...getInputControlRules(themeContext),
    ...getIntegratedTerminalRules(themeContext),
    ...getInteractiveEditorRules(themeContext),
    ...getKeybindingLabelRules(themeContext),
    ...getKeyboardShortcutTableRules(themeContext),
    ...getListsAndTreesRules(themeContext),
    ...getMenuBarRules(themeContext),
    ...getMergeConflictsRules(themeContext),
    ...getMinimapRules(themeContext),
    ...getNotebookRules(themeContext),
    ...getNotificationRules(themeContext),
    ...getPanelRules(themeContext),
    ...getPeekViewRules(themeContext),
    ...getPortsRules(themeContext),
    ...getProfilesRules(themeContext),
    ...getProgressBarRules(themeContext),
    ...getQuickPickerRules(themeContext),
    ...getScmRules(),
    ...getScrollbarControlRules(themeContext),
    ...getSettingsEditorRules(themeContext),
    ...getSideBarRules(themeContext),
    ...getSimpleFindWidgetRules(),
    ...getSnippetsRules(themeContext),
    ...getStatusBarRules(themeContext),
    ...getSymbolIconsRules(themeContext),
    ...getTestingRules(themeContext),
    ...getTextRules(themeContext),
    ...getTitleBarRules(themeContext),
    ...getWelcomePageRules(themeContext),
    ...getWindowBorderRules(),
  };
};
