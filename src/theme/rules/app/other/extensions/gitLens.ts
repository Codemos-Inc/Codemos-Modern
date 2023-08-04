import { ThemeContext } from "../../../../../@types";
import { TRANSPARENT } from "../../../../../color/constants";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "gitlens.closedAutolinkedIssueIconColor": colors.basic.def.purple.pri,
    "gitlens.closedPullRequestIconColor": colors.basic.def.red.pri,
    "gitlens.decorations.addedForegroundColor": colors.basic.def.green.pri,
    "gitlens.decorations.branchAheadForegroundColor":
      colors.basic.def.green.pri,
    "gitlens.decorations.branchBehindForegroundColor":
      colors.basic.def.orange.pri,
    "gitlens.decorations.branchDivergedForegroundColor":
      colors.basic.def.yellow.pri,
    "gitlens.decorations.branchMissingUpstreamForegroundColor":
      colors.basic.def.orange.pri,
    "gitlens.decorations.branchUnpublishedForegroundColor":
      colors.basic.def.blue.pri,
    "gitlens.decorations.branchUpToDateForegroundColor": colors.fill.text.sec,
    "gitlens.decorations.copiedForegroundColor": colors.basic.def.yellow.pri,
    "gitlens.decorations.deletedForegroundColor": colors.basic.alt.red.pri,
    "gitlens.decorations.ignoredForegroundColor": colors.fill.text.disabled,
    "gitlens.decorations.modifiedForegroundColor": colors.basic.def.blue.pri,
    "gitlens.decorations.renamedForegroundColor": colors.basic.def.yellow.pri,
    "gitlens.decorations.untrackedForegroundColor": colors.basic.alt.green.pri,
    "gitlens.decorations.workspaceCurrentForegroundColor":
      colors.basic.def.green.pri,
    "gitlens.decorations.workspaceRepoMissingForegroundColor":
      colors.fill.text.disabled,
    "gitlens.decorations.workspaceRepoOpenForegroundColor":
      colors.basic.def.green.pri,
    "gitlens.decorations.worktreeView.hasUncommittedChangesForegroundColor":
      colors.basic.alt.blue.pri,
    "gitlens.graphChangesColumnAddedColor": colors.basic.def.green.pri,
    "gitlens.graphChangesColumnDeletedColor": colors.basic.def.red.pri,
    "gitlens.graphLane10Color": colors.basic.def.orange.pri,
    "gitlens.graphLane1Color": colors.basic.def.red.pri,
    "gitlens.graphLane2Color": colors.basic.def.orange.pri,
    "gitlens.graphLane3Color": colors.basic.def.yellow.pri,
    "gitlens.graphLane4Color": colors.basic.def.green.pri,
    "gitlens.graphLane5Color": colors.basic.def.mint.pri,
    "gitlens.graphLane6Color": colors.basic.def.blue.pri,
    "gitlens.graphLane7Color": colors.basic.def.purple.pri,
    "gitlens.graphLane8Color": colors.basic.def.pink.pri,
    "gitlens.graphLane9Color": colors.basic.def.red.pri,
    "gitlens.graphMinimapMarkerHeadColor": colors.basic.def.green.pri,
    "gitlens.graphMinimapMarkerHighlightsColor": colors.basic.def.mint.pri,
    "gitlens.graphMinimapMarkerLocalBranchesColor": colors.basic.def.purple.pri,
    "gitlens.graphMinimapMarkerRemoteBranchesColor": colors.basic.alt.mint.pri,
    "gitlens.graphMinimapMarkerStashesColor": colors.basic.def.pink.pri,
    "gitlens.graphMinimapMarkerTagsColor": colors.basic.def.yellow.pri,
    "gitlens.graphMinimapMarkerUpstreamColor": colors.basic.alt.green.pri,
    "gitlens.graphScrollMarkerHeadColor": colors.basic.def.green.sec,
    "gitlens.graphScrollMarkerHighlightsColor": colors.basic.def.mint.sec,
    "gitlens.graphScrollMarkerLocalBranchesColor": colors.basic.def.purple.sec,
    "gitlens.graphScrollMarkerRemoteBranchesColor": colors.basic.alt.mint.sec,
    "gitlens.graphScrollMarkerStashesColor": colors.basic.def.pink.sec,
    "gitlens.graphScrollMarkerTagsColor": colors.basic.def.yellow.sec,
    "gitlens.graphScrollMarkerUpstreamColor": colors.basic.alt.green.sec,
    "gitlens.gutterBackgroundColor": colors.bg.solid.surface,
    "gitlens.gutterForegroundColor": colors.fill.text.sec,
    "gitlens.gutterUncommittedForegroundColor": colors.basic.alt.blue.pri,
    "gitlens.lineHighlightBackgroundColor": colors.basic.neutral.sep,
    "gitlens.lineHighlightOverviewRulerColor": colors.basic.neutral.sep,
    "gitlens.mergedPullRequestIconColor": colors.basic.def.purple.pri,
    "gitlens.openPullRequestIconColor": colors.basic.def.green.pri,
    "gitlens.openAutolinkedIssueIconColor": colors.basic.def.green.pri,
    "gitlens.trailingLineBackgroundColor": TRANSPARENT,
    "gitlens.trailingLineForegroundColor": colors.fill.text.ghost,
    "gitlens.unpublishedChangesIconColor": colors.basic.alt.green.pri,
    "gitlens.unpublishedCommitIconColor": colors.basic.def.green.pri,
    "gitlens.unpulledChangesIconColor": colors.basic.def.orange.pri,
  };
};
