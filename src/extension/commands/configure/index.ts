import { getOnlineAvail, setIsConfiguredFromCmd } from "../../sharedState";
import { checkAvail, getConfig, updateConfig } from "../../utils";
import { applyTheme } from "./helpers";
import { accentView } from "./views/accent";
import { accentInputView } from "./views/accentInput";
import { adaptationView } from "./views/adaptation";
import { adaptationInputView } from "./views/adaptationInput";
import { designView } from "./views/design";
import { extensionView } from "./views/extension";
import { intensityView } from "./views/intensity";
import { intensityInputView } from "./views/intensityInput";
import { themeView } from "./views/theme";
import { variantView } from "./views/variant";

export const configureCommand = async () => {
  await checkAvail();
  const isOnlineAvailable = getOnlineAvail();
  // >----------< Variant selection >----------<
  const variant = await variantView();
  // Dismissed, exit command
  if (!variant) {
    return;
  }
  // >----------< UI aux extension selection >----------<
  const auxUiExtensionId = await extensionView(variant, "ui", isOnlineAvailable);
  // Dismissed, exit command
  if (!auxUiExtensionId) {
    return;
  }
  let auxUiThemeId = null;
  if (auxUiExtensionId !== "_") {
    // >----------< UI aux theme selection >----------<
    const auxUiThemeCandidate = await themeView(variant, auxUiExtensionId, "ui", isOnlineAvailable);
    // Dismissed, exit command
    if (!auxUiThemeCandidate) {
      return;
    }
    auxUiThemeId = auxUiThemeCandidate;
  }
  // >----------< Design selection (IF NOT AUX) >----------<
  const design = !auxUiThemeId ? await designView(variant) : null;
  // Dismissed, exit command
  if (!design && !auxUiThemeId) {
    return;
  }
  // >----------< Accent color selection (IF NOT AUX) >----------<
  const accentColorSelect = !auxUiThemeId ? await accentView(variant) : null;
  // Dismissed, exit command
  if (!accentColorSelect && !auxUiThemeId) {
    return;
  }
  let accentColor: string | null;
  if (accentColorSelect !== "_") {
    accentColor = accentColorSelect;
  } else {
    // >----------< Custom accent color selection (IF NOT AUX) >----------<
    accentColor = !auxUiThemeId ? await accentInputView(variant) : null;
    // Dismissed, exit command
    if (!accentColor && !auxUiThemeId) {
      return;
    }
  }
  // >----------< Adaptation color selection (IF NOT AUX) >----------<
  const adaptationColorSelect = !auxUiThemeId ? await adaptationView(variant, accentColor!) : null;
  // Dismissed, exit command
  if (!adaptationColorSelect && !auxUiThemeId) {
    return;
  }
  let adaptationColor: string | null;
  if (adaptationColorSelect !== "_") {
    // Adaptation color is accent color
    if (adaptationColorSelect === "accent") {
      adaptationColor = accentColor;
    } else {
      adaptationColor = adaptationColorSelect;
    }
  } else {
    // >----------< Custom adaptation color selection (IF NOT AUX) >----------<
    adaptationColor = !auxUiThemeId ? await adaptationInputView(variant) : null;
    // Dismissed, exit command
    if (!adaptationColor && !auxUiThemeId) {
      return;
    }
  }
  // >----------< Adaptation intensity selection (IF NOT AUX) >----------<
  const intensitySelect = !auxUiThemeId ? await intensityView(variant, adaptationColor!) : null;
  // Dismissed, exit command
  if (!intensitySelect && !auxUiThemeId) {
    return;
  }
  let intensityNumber: number | null;
  if (intensitySelect !== -1) {
    intensityNumber = intensitySelect;
  } else {
    // >----------< Custom adaptation intensity selection (IF NOT AUX) >----------<
    intensityNumber = !auxUiThemeId ? await intensityInputView(variant) : null;
    // Dismissed, exit command
    if (!intensityNumber && !auxUiThemeId) {
      return;
    }
  }
  // >----------< Code aux extension selection >----------<
  const auxCodeThemeExtId = await extensionView(variant, "code", isOnlineAvailable);
  // Dismissed, exit command
  if (!auxCodeThemeExtId) {
    return;
  }
  let auxCodeThemeId = null;
  if (auxCodeThemeExtId !== "_") {
    // >----------< Code aux theme selection >----------<
    const auxCodeThemeCandidate = await themeView(
      variant,
      auxCodeThemeExtId,
      "code",
      isOnlineAvailable,
    );
    // Dismissed, exit command
    if (!auxCodeThemeCandidate) {
      return;
    }
    auxCodeThemeId = auxCodeThemeCandidate;
  }
  // >----------< Update configuration >----------<
  setIsConfiguredFromCmd(true);
  await updateConfig(
    variant,
    auxUiThemeId,
    !design ? getConfig()[variant].design : design,
    !accentColor ? getConfig()[variant].accentColor : accentColor,
    !adaptationColor ? getConfig()[variant].adaptationColor : adaptationColor,
    !intensityNumber ? getConfig()[variant].adaptationIntensity : intensityNumber,
    auxCodeThemeId,
  );
  await applyTheme(variant);
};
