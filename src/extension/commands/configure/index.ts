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
  if (variant === null) {
    return;
  }
  // >----------< UI aux extension selection >----------<
  const auxUiExtensionId = await extensionView(variant, "ui", isOnlineAvailable);
  // Dismissed, exit command
  if (auxUiExtensionId === null) {
    return;
  }
  let auxUiThemeId = null;
  if (auxUiExtensionId !== "_") {
    // >----------< UI aux theme selection >----------<
    const auxUiThemeCandidate = await themeView(variant, auxUiExtensionId, "ui", isOnlineAvailable);
    // Dismissed, exit command
    if (auxUiThemeCandidate === null) {
      return;
    }
    auxUiThemeId = auxUiThemeCandidate;
  }
  // >----------< Design selection (IF NOT AUX) >----------<
  const design = auxUiThemeId === null ? await designView(variant) : null;
  // Dismissed, exit command
  if (design === null && auxUiThemeId === null) {
    return;
  }
  // >----------< Accent color selection (IF NOT AUX) >----------<
  const accentColorSelect = auxUiThemeId === null ? await accentView(variant) : null;
  // Dismissed, exit command
  if (accentColorSelect === null && auxUiThemeId === null) {
    return;
  }
  let accentColor: string | null;
  if (accentColorSelect !== "_") {
    accentColor = accentColorSelect;
  } else {
    // >----------< Custom accent color selection (IF NOT AUX) >----------<
    accentColor = auxUiThemeId === null ? await accentInputView(variant) : null;
    // Dismissed, exit command
    if (accentColor === null && auxUiThemeId === null) {
      return;
    }
  }
  // >----------< Adaptation color selection (IF NOT AUX) >----------<
  const adaptationColorSelect =
    auxUiThemeId === null ? await adaptationView(variant, accentColor!) : null;
  // Dismissed, exit command
  if (adaptationColorSelect === null && auxUiThemeId === null) {
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
    adaptationColor = auxUiThemeId === null ? await adaptationInputView(variant) : null;
    // Dismissed, exit command
    if (adaptationColor === null && auxUiThemeId === null) {
      return;
    }
  }
  // >----------< Adaptation intensity selection (IF NOT AUX) >----------<
  const intensitySelect =
    auxUiThemeId === null ? await intensityView(variant, adaptationColor!) : null;
  // Dismissed, exit command
  if (intensitySelect === null && auxUiThemeId === null) {
    return;
  }
  let intensityNumber: number | null;
  if (intensitySelect !== -1) {
    intensityNumber = intensitySelect;
  } else {
    // >----------< Custom adaptation intensity selection (IF NOT AUX) >----------<
    intensityNumber = auxUiThemeId === null ? await intensityInputView(variant) : null;
    // Dismissed, exit command
    if (intensityNumber === null && auxUiThemeId === null) {
      return;
    }
  }
  // >----------< Code aux extension selection >----------<
  const auxCodeThemeExtId = await extensionView(variant, "code", isOnlineAvailable);
  // Dismissed, exit command
  if (auxCodeThemeExtId === null) {
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
    if (auxCodeThemeCandidate === null) {
      return;
    }
    auxCodeThemeId = auxCodeThemeCandidate;
  }
  // >----------< Update configuration >----------<
  setIsConfiguredFromCmd(true);
  await updateConfig(
    variant,
    auxUiThemeId,
    design === null ? getConfig()[variant].design : design,
    accentColor === null ? getConfig()[variant].accentColor : accentColor,
    adaptationColor === null ? getConfig()[variant].adaptationColor : adaptationColor,
    intensityNumber === null ? getConfig()[variant].adaptationIntensity : intensityNumber,
    auxCodeThemeId,
  );
  await applyTheme(variant);
};
