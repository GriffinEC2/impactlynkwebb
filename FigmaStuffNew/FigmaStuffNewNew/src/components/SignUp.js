import { useMemo } from "react";

const SignUp = ({
  welcomeToImpactApp,
  user1,
  user2,
  label,
  label1,
  password,
  hide,
  errorMessage,
  text,
  oneLowercaseCharacter,
  oneLowercaseCharacter1,
  oneLowercaseCharacter2,
  oneLowercaseCharacter3,
  signUp,
  and,
  prop,
  privacyPolicy,
  prop1,
  or,
  signUp1,
  alreadyHaveAnCcount,
  areYouPlanning,
  boxes,
  showSignUpBoxes,
  showPassword,
  passwordHideSee,
  showHide,
  showButton,
  icons1,
  byCreatingAnContainer,
  showSpan,
  buttonVisible,
  icons2,
  signUpGap,
  frameDivAlignSelf,
  welcomeToImpactAppFontSize,
  welcomeToImpactAppMargin,
  welcomeToImpactAppAlignSelf,
  areYouPlanningFontSize,
  areYouPlanningHeight,
  boxesGap,
  iconHeaderBorder,
  organizerWidth,
  organizerDisplay,
  organizerHeight,
  organizerAlignSelf,
  iconHeaderBorder1,
  organizerWidth1,
  organizerDisplay1,
  organizerHeight1,
  organizerAlignSelf1,
  signUpBoxesWidth,
  labelMargin,
  labelFontWeight,
  passwordMargin,
  passwordPosition,
  passwordTop,
  passwordRight,
  passwordWidth,
  passwordHeight,
  passwordHideSeeRight,
  passwordHideSeeWidth,
  passwordHideSeeHeight,
  passwordHideSeeFontSize,
  passwordHideSeeFontFamily,
  passwordHideSeeColor,
  passwordHideSeeTextAlign,
  iconTop,
  iconRight,
  iconWidth,
  iconHeight,
  iconBorder,
  iconOutline,
  iconBackgroundColor,
  iconBottom,
  iconLeft,
  iconBorderRadius,
  hideTop,
  hideRight,
  hideFontSize,
  hideColor,
  hideTextAlign,
  hideLeft,
  textFieldBorder,
  textFieldOutline,
  textFieldBackgroundColor,
  textFieldHeight,
  textFieldWidth,
  textFieldRight,
  textFieldBottom,
  textFieldLeft,
  textFieldBorderRadius,
  textFieldOverflow,
  textFieldFontSize,
  textFieldFontFamily,
  textFieldColor,
  textFieldTextAlign,
  textFieldDisplay,
  errorMessagePosition,
  errorMessageTop,
  errorMessageLeft,
  errorMessageFontSize,
  errorMessageFontFamily,
  errorMessageColor,
  errorMessageTextAlign,
  errorMessageWidth,
  errorMessageFlexDirection,
  textPosition,
  textHeight,
  textWidth,
  textTop,
  textLeft,
  textFontSize,
  textFontFamily,
  textColor,
  textTextAlign,
  textDisplay,
  textFlexDirection,
  textGap,
  passwordWidth1,
  frameDivGap,
  frameDivPadding,
  frameDivDisplay,
  frameDivFlexDirection,
  frameDivWidth,
  frameDivPosition,
  frameDivBorderRadius,
  frameDivBackgroundColor,
  frameDivHeight,
  bulletPointDisplay,
  bulletPointFlexDirection,
  bulletPointPadding,
  bulletPointGap,
  bulletPointPosition,
  bulletPointFontSize,
  bulletPointFontFamily,
  bulletPointColor,
  bulletPointTextAlign,
  ellipseDivWidth,
  ellipseDivPosition,
  ellipseDivBorderRadius,
  ellipseDivBackgroundColor,
  ellipseDivHeight,
  ellipseDivDisplay,
  ellipseDivFlexDirection,
  ellipseDivPadding,
  ellipseDivGap,
  oneLowercaseCharacterFontSize,
  oneLowercaseCharacterFontFamily,
  oneLowercaseCharacterColor,
  oneLowercaseCharacterTextAlign,
  oneLowercaseCharacterDisplay,
  oneLowercaseCharacterWidth,
  oneLowercaseCharacterBorderRadius,
  oneLowercaseCharacterBackgroundColor,
  oneLowercaseCharacterHeight,
  bulletPointDisplay1,
  bulletPointFlexDirection1,
  bulletPointPadding1,
  bulletPointGap1,
  bulletPointPosition1,
  bulletPointFontSize1,
  bulletPointFontFamily1,
  bulletPointColor1,
  bulletPointTextAlign1,
  ellipseDivWidth1,
  ellipseDivPosition1,
  ellipseDivBorderRadius1,
  ellipseDivBackgroundColor1,
  ellipseDivHeight1,
  ellipseDivDisplay1,
  ellipseDivFlexDirection1,
  oneLowercaseCharacterPosition,
  oneLowercaseCharacterFontSize1,
  oneLowercaseCharacterFontFamily1,
  oneLowercaseCharacterColor1,
  oneLowercaseCharacterTextAlign1,
  oneLowercaseCharacterDisplay1,
  oneLowercaseCharacterFlexDirection,
  oneLowercaseCharacterPadding,
  oneLowercaseCharacterGap,
  frameDivDisplay1,
  frameDivFlexDirection1,
  frameDivWidth1,
  frameDivPosition1,
  frameDivBorderRadius1,
  frameDivBackgroundColor1,
  frameDivHeight1,
  bulletPointDisplay2,
  bulletPointFlexDirection2,
  bulletPointPadding2,
  bulletPointGap2,
  bulletPointPosition2,
  bulletPointFontSize2,
  bulletPointFontFamily2,
  bulletPointColor2,
  bulletPointTextAlign2,
  ellipseDivWidth2,
  ellipseDivPosition2,
  ellipseDivBorderRadius2,
  ellipseDivBackgroundColor2,
  ellipseDivHeight2,
  ellipseDivDisplay2,
  ellipseDivFlexDirection2,
  ellipseDivPadding1,
  ellipseDivGap1,
  oneLowercaseCharacterFontSize2,
  oneLowercaseCharacterFontFamily2,
  oneLowercaseCharacterColor2,
  oneLowercaseCharacterTextAlign2,
  oneLowercaseCharacterDisplay2,
  oneLowercaseCharacterWidth1,
  oneLowercaseCharacterBorderRadius1,
  oneLowercaseCharacterBackgroundColor1,
  oneLowercaseCharacterHeight1,
  bulletPointDisplay3,
  bulletPointFlexDirection3,
  bulletPointPadding3,
  bulletPointGap3,
  bulletPointPosition3,
  bulletPointFontSize3,
  bulletPointFontFamily3,
  bulletPointColor3,
  bulletPointTextAlign3,
  ellipseDivWidth3,
  ellipseDivPosition3,
  ellipseDivBorderRadius3,
  ellipseDivBackgroundColor3,
  ellipseDivHeight3,
  ellipseDivOverflow,
  ellipseDivDisplay3,
  ellipseDivFlexDirection3,
  oneLowercaseCharacterFontSize3,
  oneLowercaseCharacterFontFamily3,
  oneLowercaseCharacterColor3,
  oneLowercaseCharacterTextAlign3,
  oneLowercaseCharacterDisplay3,
  oneLowercaseCharacterBorder,
  oneLowercaseCharacterPadding1,
  oneLowercaseCharacterBackgroundColor2,
  oneLowercaseCharacterWidth2,
  oneLowercaseCharacterBorderRadius2,
  oneLowercaseCharacterHeight2,
  oneLowercaseCharacterOverflow,
  googleButtonFrameWidth,
  googleButtonFrameOverflow,
  googleButtonFrameFlexDirection,
  googleButtonFramePosition,
  googleButtonFrameTop,
  googleButtonFrameLeft,
  googleButtonFrameGap,
  buttonBorder,
  buttonPadding,
  buttonBackgroundColor,
  buttonWidth,
  buttonBorderRadius,
  buttonHeight,
  frameDivPosition2,
  frameDivTop,
  frameDivLeft,
  frameDivDisplay2,
  frameDivFlexDirection2,
  frameDivGap1,
  frameDivFontSize,
  frameDivFontWeight,
  frameDivFontFamily,
  frameDivColor,
  frameDivTextAlign,
  iconsWidth,
  iconsHeight,
  iconsOverflow,
  iconsFontSize,
  iconsFontFamily,
  iconsTextAlign,
  iconsBorder,
  iconsPadding,
  iconsBackgroundColor,
  signUpPosition,
  signUpFontSize,
  signUpFontWeight,
  signUpFontFamily,
  signUpColor,
  signUpTextAlign,
  byCreatingAnContainerWidth,
  byCreatingAnContainerPosition,
  byCreatingAnContainerFontSize,
  byCreatingAnContainerFontFamily,
  byCreatingAnContainerTextAlign,
  byCreatingAnContainerTextDecoration,
  byCreatingAnContainerColor,
  byCreatingAnColor,
  termsOfUseTextDecoration,
  termsOfUseColor,
  spanColor,
  andColor,
  spanColor1,
  privacyPolicyTextDecoration,
  privacyPolicyColor,
  spanColor2,
  spanWidth,
  spanOverflow,
  spanFlexDirection,
  orMargin,
  orWidth,
  orFontSize,
  orFontWeight,
  orFontFamily,
  orColor,
  orTextAlign,
  orDisplay,
  orBorder,
  orPadding,
  orBackgroundColor,
  orBorderRadius,
  orHeight,
  orOverflow,
  orAlignSelf,
  googleButtonFrameWidth1,
  googleButtonFrameOverflow1,
  googleButtonFrameFlexDirection1,
  googleButtonFramePosition1,
  googleButtonFrameTop1,
  googleButtonFrameLeft1,
  googleButtonFrameGap1,
  googleButtonFrameBorder,
  googleButtonFrameOutline,
  googleButtonFrameFontWeight,
  googleButtonFrameFontFamily,
  googleButtonFrameFontSize,
  googleButtonFrameBackgroundColor,
  googleButtonFrameAlignSelf,
  googleButtonFrameBorderRadius,
  googleButtonFramePadding,
  googleButtonFrameColor,
  buttonBorder1,
  buttonPadding1,
  buttonBackgroundColor1,
  buttonWidth1,
  buttonBorderRadius1,
  buttonHeight1,
  buttonPosition,
  buttonOverflow,
  buttonFlexDirection,
  frameDivPosition3,
  frameDivTop1,
  frameDivLeft1,
  frameDivDisplay3,
  frameDivFlexDirection3,
  frameDivGap2,
  frameDivFontSize1,
  frameDivFontWeight1,
  frameDivFontFamily1,
  frameDivColor1,
  frameDivTextAlign1,
  iconsWidth1,
  iconsPosition,
  iconsHeight1,
  iconsOverflow1,
  iconsBorder1,
  iconsPadding1,
  iconsBackgroundColor1,
  iconsFlexDirection,
  signUpFontSize1,
  signUpFontWeight1,
  signUpColor1,
  signUpTextAlign1,
  signUpPosition1,
  signUpFontFamily1,
  haveAnAccountLoginBorder,
  haveAnAccountLoginPadding,
  haveAnAccountLoginBackgroundColor,
  haveAnAccountLoginDisplay,
  haveAnAccountLoginFlexDirection,
  alreadyHaveAnContainerPosition,
  alreadyHaveAnContainerFontSize,
  alreadyHaveAnContainerFontFamily,
  alreadyHaveAnContainerTextAlign,
  alreadyHaveAnContainerColor,
  alreadyHaveAnColor,
  onButtonClick,
  onByCreatingAnClick,
  onGoogleButtonFrameClick,
  onHaveAnAccountLoginClick,
  onAlreadyHaveAnClick,
  passwordHideSee1,
  showHide1,
  errorMessage11,
  showPassword1,
  passwordHideSee11,
  showHide11,
  errorMessage111,
}) => {
  const signUpStyle = useMemo(() => {
    return {
      gap: signUpGap,
    };
  }, [signUpGap]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const welcomeToImpactAppStyle = useMemo(() => {
    return {
      fontSize: welcomeToImpactAppFontSize,
      margin: welcomeToImpactAppMargin,
      alignSelf: welcomeToImpactAppAlignSelf,
    };
  }, [
    welcomeToImpactAppFontSize,
    welcomeToImpactAppMargin,
    welcomeToImpactAppAlignSelf,
  ]);

  const areYouPlanningStyle = useMemo(() => {
    return {
      fontSize: areYouPlanningFontSize,
      height: areYouPlanningHeight,
    };
  }, [areYouPlanningFontSize, areYouPlanningHeight]);

  const boxesStyle = useMemo(() => {
    return {
      gap: boxesGap,
    };
  }, [boxesGap]);

  const iconHeaderStyle = useMemo(() => {
    return {
      border: iconHeaderBorder,
    };
  }, [iconHeaderBorder]);

  const organizerStyle = useMemo(() => {
    return {
      width: organizerWidth,
      display: organizerDisplay,
      height: organizerHeight,
      alignSelf: organizerAlignSelf,
    };
  }, [organizerWidth, organizerDisplay, organizerHeight, organizerAlignSelf]);

  const iconHeader1Style = useMemo(() => {
    return {
      border: iconHeaderBorder1,
    };
  }, [iconHeaderBorder1]);

  const organizer1Style = useMemo(() => {
    return {
      width: organizerWidth1,
      display: organizerDisplay1,
      height: organizerHeight1,
      alignSelf: organizerAlignSelf1,
    };
  }, [
    organizerWidth1,
    organizerDisplay1,
    organizerHeight1,
    organizerAlignSelf1,
  ]);

  const signUpBoxesStyle = useMemo(() => {
    return {
      width: signUpBoxesWidth,
    };
  }, [signUpBoxesWidth]);

  const labelStyle = useMemo(() => {
    return {
      margin: labelMargin,
      fontWeight: labelFontWeight,
    };
  }, [labelMargin, labelFontWeight]);

  const passwordStyle = useMemo(() => {
    return {
      margin: passwordMargin,
      position: passwordPosition,
      top: passwordTop,
      right: passwordRight,
      width: passwordWidth,
      height: passwordHeight,
    };
  }, [
    passwordMargin,
    passwordPosition,
    passwordTop,
    passwordRight,
    passwordWidth,
    passwordHeight,
  ]);

  const passwordHideSeeStyle = useMemo(() => {
    return {
      right: passwordHideSeeRight,
      width: passwordHideSeeWidth,
      height: passwordHideSeeHeight,
      fontSize: passwordHideSeeFontSize,
      fontFamily: passwordHideSeeFontFamily,
      color: passwordHideSeeColor,
      textAlign: passwordHideSeeTextAlign,
    };
  }, [
    passwordHideSeeRight,
    passwordHideSeeWidth,
    passwordHideSeeHeight,
    passwordHideSeeFontSize,
    passwordHideSeeFontFamily,
    passwordHideSeeColor,
    passwordHideSeeTextAlign,
  ]);

  const iconStyle = useMemo(() => {
    return {
      top: iconTop,
      right: iconRight,
      width: iconWidth,
      height: iconHeight,
      border: iconBorder,
      outline: iconOutline,
      backgroundColor: iconBackgroundColor,
      bottom: iconBottom,
      left: iconLeft,
      borderRadius: iconBorderRadius,
    };
  }, [
    iconTop,
    iconRight,
    iconWidth,
    iconHeight,
    iconBorder,
    iconOutline,
    iconBackgroundColor,
    iconBottom,
    iconLeft,
    iconBorderRadius,
  ]);

  const hideStyle = useMemo(() => {
    return {
      top: hideTop,
      right: hideRight,
      fontSize: hideFontSize,
      color: hideColor,
      textAlign: hideTextAlign,
      left: hideLeft,
    };
  }, [hideTop, hideRight, hideFontSize, hideColor, hideTextAlign, hideLeft]);

  const textFieldStyle = useMemo(() => {
    return {
      border: textFieldBorder,
      outline: textFieldOutline,
      backgroundColor: textFieldBackgroundColor,
      height: textFieldHeight,
      width: textFieldWidth,
      right: textFieldRight,
      bottom: textFieldBottom,
      left: textFieldLeft,
      borderRadius: textFieldBorderRadius,
      overflow: textFieldOverflow,
      fontSize: textFieldFontSize,
      fontFamily: textFieldFontFamily,
      color: textFieldColor,
      textAlign: textFieldTextAlign,
      display: textFieldDisplay,
    };
  }, [
    textFieldBorder,
    textFieldOutline,
    textFieldBackgroundColor,
    textFieldHeight,
    textFieldWidth,
    textFieldRight,
    textFieldBottom,
    textFieldLeft,
    textFieldBorderRadius,
    textFieldOverflow,
    textFieldFontSize,
    textFieldFontFamily,
    textFieldColor,
    textFieldTextAlign,
    textFieldDisplay,
  ]);

  const errorMessageStyle = useMemo(() => {
    return {
      position: errorMessagePosition,
      top: errorMessageTop,
      left: errorMessageLeft,
      fontSize: errorMessageFontSize,
      fontFamily: errorMessageFontFamily,
      color: errorMessageColor,
      textAlign: errorMessageTextAlign,
      width: errorMessageWidth,
      flexDirection: errorMessageFlexDirection,
    };
  }, [
    errorMessagePosition,
    errorMessageTop,
    errorMessageLeft,
    errorMessageFontSize,
    errorMessageFontFamily,
    errorMessageColor,
    errorMessageTextAlign,
    errorMessageWidth,
    errorMessageFlexDirection,
  ]);

  const text1Style = useMemo(() => {
    return {
      position: textPosition,
      height: textHeight,
      width: textWidth,
      top: textTop,
      left: textLeft,
      fontSize: textFontSize,
      fontFamily: textFontFamily,
      color: textColor,
      textAlign: textTextAlign,
      display: textDisplay,
      flexDirection: textFlexDirection,
      gap: textGap,
    };
  }, [
    textPosition,
    textHeight,
    textWidth,
    textTop,
    textLeft,
    textFontSize,
    textFontFamily,
    textColor,
    textTextAlign,
    textDisplay,
    textFlexDirection,
    textGap,
  ]);

  const password1Style = useMemo(() => {
    return {
      width: passwordWidth1,
    };
  }, [passwordWidth1]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: frameDivGap,
      padding: frameDivPadding,
    };
  }, [frameDivGap, frameDivPadding]);

  const frameDiv2Style = useMemo(() => {
    return {
      display: frameDivDisplay,
      flexDirection: frameDivFlexDirection,
      width: frameDivWidth,
      position: frameDivPosition,
      borderRadius: frameDivBorderRadius,
      backgroundColor: frameDivBackgroundColor,
      height: frameDivHeight,
    };
  }, [
    frameDivDisplay,
    frameDivFlexDirection,
    frameDivWidth,
    frameDivPosition,
    frameDivBorderRadius,
    frameDivBackgroundColor,
    frameDivHeight,
  ]);

  const bulletPointStyle = useMemo(() => {
    return {
      display: bulletPointDisplay,
      flexDirection: bulletPointFlexDirection,
      padding: bulletPointPadding,
      gap: bulletPointGap,
      position: bulletPointPosition,
      fontSize: bulletPointFontSize,
      fontFamily: bulletPointFontFamily,
      color: bulletPointColor,
      textAlign: bulletPointTextAlign,
    };
  }, [
    bulletPointDisplay,
    bulletPointFlexDirection,
    bulletPointPadding,
    bulletPointGap,
    bulletPointPosition,
    bulletPointFontSize,
    bulletPointFontFamily,
    bulletPointColor,
    bulletPointTextAlign,
  ]);

  const ellipseDivStyle = useMemo(() => {
    return {
      width: ellipseDivWidth,
      position: ellipseDivPosition,
      borderRadius: ellipseDivBorderRadius,
      backgroundColor: ellipseDivBackgroundColor,
      height: ellipseDivHeight,
      display: ellipseDivDisplay,
      flexDirection: ellipseDivFlexDirection,
      padding: ellipseDivPadding,
      gap: ellipseDivGap,
    };
  }, [
    ellipseDivWidth,
    ellipseDivPosition,
    ellipseDivBorderRadius,
    ellipseDivBackgroundColor,
    ellipseDivHeight,
    ellipseDivDisplay,
    ellipseDivFlexDirection,
    ellipseDivPadding,
    ellipseDivGap,
  ]);

  const oneLowercaseCharacterStyle = useMemo(() => {
    return {
      fontSize: oneLowercaseCharacterFontSize,
      fontFamily: oneLowercaseCharacterFontFamily,
      color: oneLowercaseCharacterColor,
      textAlign: oneLowercaseCharacterTextAlign,
      display: oneLowercaseCharacterDisplay,
      width: oneLowercaseCharacterWidth,
      borderRadius: oneLowercaseCharacterBorderRadius,
      backgroundColor: oneLowercaseCharacterBackgroundColor,
      height: oneLowercaseCharacterHeight,
    };
  }, [
    oneLowercaseCharacterFontSize,
    oneLowercaseCharacterFontFamily,
    oneLowercaseCharacterColor,
    oneLowercaseCharacterTextAlign,
    oneLowercaseCharacterDisplay,
    oneLowercaseCharacterWidth,
    oneLowercaseCharacterBorderRadius,
    oneLowercaseCharacterBackgroundColor,
    oneLowercaseCharacterHeight,
  ]);

  const bulletPoint1Style = useMemo(() => {
    return {
      display: bulletPointDisplay1,
      flexDirection: bulletPointFlexDirection1,
      padding: bulletPointPadding1,
      gap: bulletPointGap1,
      position: bulletPointPosition1,
      fontSize: bulletPointFontSize1,
      fontFamily: bulletPointFontFamily1,
      color: bulletPointColor1,
      textAlign: bulletPointTextAlign1,
    };
  }, [
    bulletPointDisplay1,
    bulletPointFlexDirection1,
    bulletPointPadding1,
    bulletPointGap1,
    bulletPointPosition1,
    bulletPointFontSize1,
    bulletPointFontFamily1,
    bulletPointColor1,
    bulletPointTextAlign1,
  ]);

  const ellipseDiv1Style = useMemo(() => {
    return {
      width: ellipseDivWidth1,
      position: ellipseDivPosition1,
      borderRadius: ellipseDivBorderRadius1,
      backgroundColor: ellipseDivBackgroundColor1,
      height: ellipseDivHeight1,
      display: ellipseDivDisplay1,
      flexDirection: ellipseDivFlexDirection1,
    };
  }, [
    ellipseDivWidth1,
    ellipseDivPosition1,
    ellipseDivBorderRadius1,
    ellipseDivBackgroundColor1,
    ellipseDivHeight1,
    ellipseDivDisplay1,
    ellipseDivFlexDirection1,
  ]);

  const oneLowercaseCharacter1Style = useMemo(() => {
    return {
      position: oneLowercaseCharacterPosition,
      fontSize: oneLowercaseCharacterFontSize1,
      fontFamily: oneLowercaseCharacterFontFamily1,
      color: oneLowercaseCharacterColor1,
      textAlign: oneLowercaseCharacterTextAlign1,
      display: oneLowercaseCharacterDisplay1,
      flexDirection: oneLowercaseCharacterFlexDirection,
      padding: oneLowercaseCharacterPadding,
      gap: oneLowercaseCharacterGap,
    };
  }, [
    oneLowercaseCharacterPosition,
    oneLowercaseCharacterFontSize1,
    oneLowercaseCharacterFontFamily1,
    oneLowercaseCharacterColor1,
    oneLowercaseCharacterTextAlign1,
    oneLowercaseCharacterDisplay1,
    oneLowercaseCharacterFlexDirection,
    oneLowercaseCharacterPadding,
    oneLowercaseCharacterGap,
  ]);

  const frameDiv3Style = useMemo(() => {
    return {
      display: frameDivDisplay1,
      flexDirection: frameDivFlexDirection1,
      width: frameDivWidth1,
      position: frameDivPosition1,
      borderRadius: frameDivBorderRadius1,
      backgroundColor: frameDivBackgroundColor1,
      height: frameDivHeight1,
    };
  }, [
    frameDivDisplay1,
    frameDivFlexDirection1,
    frameDivWidth1,
    frameDivPosition1,
    frameDivBorderRadius1,
    frameDivBackgroundColor1,
    frameDivHeight1,
  ]);

  const bulletPoint2Style = useMemo(() => {
    return {
      display: bulletPointDisplay2,
      flexDirection: bulletPointFlexDirection2,
      padding: bulletPointPadding2,
      gap: bulletPointGap2,
      position: bulletPointPosition2,
      fontSize: bulletPointFontSize2,
      fontFamily: bulletPointFontFamily2,
      color: bulletPointColor2,
      textAlign: bulletPointTextAlign2,
    };
  }, [
    bulletPointDisplay2,
    bulletPointFlexDirection2,
    bulletPointPadding2,
    bulletPointGap2,
    bulletPointPosition2,
    bulletPointFontSize2,
    bulletPointFontFamily2,
    bulletPointColor2,
    bulletPointTextAlign2,
  ]);

  const ellipseDiv2Style = useMemo(() => {
    return {
      width: ellipseDivWidth2,
      position: ellipseDivPosition2,
      borderRadius: ellipseDivBorderRadius2,
      backgroundColor: ellipseDivBackgroundColor2,
      height: ellipseDivHeight2,
      display: ellipseDivDisplay2,
      flexDirection: ellipseDivFlexDirection2,
      padding: ellipseDivPadding1,
      gap: ellipseDivGap1,
    };
  }, [
    ellipseDivWidth2,
    ellipseDivPosition2,
    ellipseDivBorderRadius2,
    ellipseDivBackgroundColor2,
    ellipseDivHeight2,
    ellipseDivDisplay2,
    ellipseDivFlexDirection2,
    ellipseDivPadding1,
    ellipseDivGap1,
  ]);

  const oneLowercaseCharacter2Style = useMemo(() => {
    return {
      fontSize: oneLowercaseCharacterFontSize2,
      fontFamily: oneLowercaseCharacterFontFamily2,
      color: oneLowercaseCharacterColor2,
      textAlign: oneLowercaseCharacterTextAlign2,
      display: oneLowercaseCharacterDisplay2,
      width: oneLowercaseCharacterWidth1,
      borderRadius: oneLowercaseCharacterBorderRadius1,
      backgroundColor: oneLowercaseCharacterBackgroundColor1,
      height: oneLowercaseCharacterHeight1,
    };
  }, [
    oneLowercaseCharacterFontSize2,
    oneLowercaseCharacterFontFamily2,
    oneLowercaseCharacterColor2,
    oneLowercaseCharacterTextAlign2,
    oneLowercaseCharacterDisplay2,
    oneLowercaseCharacterWidth1,
    oneLowercaseCharacterBorderRadius1,
    oneLowercaseCharacterBackgroundColor1,
    oneLowercaseCharacterHeight1,
  ]);

  const bulletPoint3Style = useMemo(() => {
    return {
      display: bulletPointDisplay3,
      flexDirection: bulletPointFlexDirection3,
      padding: bulletPointPadding3,
      gap: bulletPointGap3,
      position: bulletPointPosition3,
      fontSize: bulletPointFontSize3,
      fontFamily: bulletPointFontFamily3,
      color: bulletPointColor3,
      textAlign: bulletPointTextAlign3,
    };
  }, [
    bulletPointDisplay3,
    bulletPointFlexDirection3,
    bulletPointPadding3,
    bulletPointGap3,
    bulletPointPosition3,
    bulletPointFontSize3,
    bulletPointFontFamily3,
    bulletPointColor3,
    bulletPointTextAlign3,
  ]);

  const ellipseDiv3Style = useMemo(() => {
    return {
      width: ellipseDivWidth3,
      position: ellipseDivPosition3,
      borderRadius: ellipseDivBorderRadius3,
      backgroundColor: ellipseDivBackgroundColor3,
      height: ellipseDivHeight3,
      overflow: ellipseDivOverflow,
      display: ellipseDivDisplay3,
      flexDirection: ellipseDivFlexDirection3,
    };
  }, [
    ellipseDivWidth3,
    ellipseDivPosition3,
    ellipseDivBorderRadius3,
    ellipseDivBackgroundColor3,
    ellipseDivHeight3,
    ellipseDivOverflow,
    ellipseDivDisplay3,
    ellipseDivFlexDirection3,
  ]);

  const oneLowercaseCharacter3Style = useMemo(() => {
    return {
      fontSize: oneLowercaseCharacterFontSize3,
      fontFamily: oneLowercaseCharacterFontFamily3,
      color: oneLowercaseCharacterColor3,
      textAlign: oneLowercaseCharacterTextAlign3,
      display: oneLowercaseCharacterDisplay3,
      border: oneLowercaseCharacterBorder,
      padding: oneLowercaseCharacterPadding1,
      backgroundColor: oneLowercaseCharacterBackgroundColor2,
      width: oneLowercaseCharacterWidth2,
      borderRadius: oneLowercaseCharacterBorderRadius2,
      height: oneLowercaseCharacterHeight2,
      overflow: oneLowercaseCharacterOverflow,
    };
  }, [
    oneLowercaseCharacterFontSize3,
    oneLowercaseCharacterFontFamily3,
    oneLowercaseCharacterColor3,
    oneLowercaseCharacterTextAlign3,
    oneLowercaseCharacterDisplay3,
    oneLowercaseCharacterBorder,
    oneLowercaseCharacterPadding1,
    oneLowercaseCharacterBackgroundColor2,
    oneLowercaseCharacterWidth2,
    oneLowercaseCharacterBorderRadius2,
    oneLowercaseCharacterHeight2,
    oneLowercaseCharacterOverflow,
  ]);

  const googleButtonFrameStyle = useMemo(() => {
    return {
      width: googleButtonFrameWidth,
      overflow: googleButtonFrameOverflow,
      flexDirection: googleButtonFrameFlexDirection,
      position: googleButtonFramePosition,
      top: googleButtonFrameTop,
      left: googleButtonFrameLeft,
      gap: googleButtonFrameGap,
    };
  }, [
    googleButtonFrameWidth,
    googleButtonFrameOverflow,
    googleButtonFrameFlexDirection,
    googleButtonFramePosition,
    googleButtonFrameTop,
    googleButtonFrameLeft,
    googleButtonFrameGap,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      border: buttonBorder,
      padding: buttonPadding,
      backgroundColor: buttonBackgroundColor,
      width: buttonWidth,
      borderRadius: buttonBorderRadius,
      height: buttonHeight,
    };
  }, [
    buttonBorder,
    buttonPadding,
    buttonBackgroundColor,
    buttonWidth,
    buttonBorderRadius,
    buttonHeight,
  ]);

  const frameDiv4Style = useMemo(() => {
    return {
      position: frameDivPosition2,
      top: frameDivTop,
      left: frameDivLeft,
      display: frameDivDisplay2,
      flexDirection: frameDivFlexDirection2,
      gap: frameDivGap1,
      fontSize: frameDivFontSize,
      fontWeight: frameDivFontWeight,
      fontFamily: frameDivFontFamily,
      color: frameDivColor,
      textAlign: frameDivTextAlign,
    };
  }, [
    frameDivPosition2,
    frameDivTop,
    frameDivLeft,
    frameDivDisplay2,
    frameDivFlexDirection2,
    frameDivGap1,
    frameDivFontSize,
    frameDivFontWeight,
    frameDivFontFamily,
    frameDivColor,
    frameDivTextAlign,
  ]);

  const iconsStyle = useMemo(() => {
    return {
      width: iconsWidth,
      height: iconsHeight,
      overflow: iconsOverflow,
      fontSize: iconsFontSize,
      fontFamily: iconsFontFamily,
      textAlign: iconsTextAlign,
      border: iconsBorder,
      padding: iconsPadding,
      backgroundColor: iconsBackgroundColor,
    };
  }, [
    iconsWidth,
    iconsHeight,
    iconsOverflow,
    iconsFontSize,
    iconsFontFamily,
    iconsTextAlign,
    iconsBorder,
    iconsPadding,
    iconsBackgroundColor,
  ]);

  const signUp1Style = useMemo(() => {
    return {
      position: signUpPosition,
      fontSize: signUpFontSize,
      fontWeight: signUpFontWeight,
      fontFamily: signUpFontFamily,
      color: signUpColor,
      textAlign: signUpTextAlign,
    };
  }, [
    signUpPosition,
    signUpFontSize,
    signUpFontWeight,
    signUpFontFamily,
    signUpColor,
    signUpTextAlign,
  ]);

  const byCreatingAnContainerStyle = useMemo(() => {
    return {
      width: byCreatingAnContainerWidth,
      position: byCreatingAnContainerPosition,
      fontSize: byCreatingAnContainerFontSize,
      fontFamily: byCreatingAnContainerFontFamily,
      textAlign: byCreatingAnContainerTextAlign,
      textDecoration: byCreatingAnContainerTextDecoration,
      color: byCreatingAnContainerColor,
    };
  }, [
    byCreatingAnContainerWidth,
    byCreatingAnContainerPosition,
    byCreatingAnContainerFontSize,
    byCreatingAnContainerFontFamily,
    byCreatingAnContainerTextAlign,
    byCreatingAnContainerTextDecoration,
    byCreatingAnContainerColor,
  ]);

  const byCreatingAnStyle = useMemo(() => {
    return {
      color: byCreatingAnColor,
    };
  }, [byCreatingAnColor]);

  const termsOfUseStyle = useMemo(() => {
    return {
      textDecoration: termsOfUseTextDecoration,
      color: termsOfUseColor,
    };
  }, [termsOfUseTextDecoration, termsOfUseColor]);

  const spanStyle = useMemo(() => {
    return {
      color: spanColor1,
    };
  }, [spanColor1]);

  const privacyPolicyStyle = useMemo(() => {
    return {
      textDecoration: privacyPolicyTextDecoration,
    };
  }, [privacyPolicyTextDecoration]);

  const privacyPolicy1Style = useMemo(() => {
    return {
      color: privacyPolicyColor,
    };
  }, [privacyPolicyColor]);

  const span1Style = useMemo(() => {
    return {
      color: spanColor2,
      width: spanWidth,
      overflow: spanOverflow,
      flexDirection: spanFlexDirection,
    };
  }, [spanColor2, spanWidth, spanOverflow, spanFlexDirection]);

  const orStyle = useMemo(() => {
    return {
      margin: orMargin,
      width: orWidth,
      fontSize: orFontSize,
      fontWeight: orFontWeight,
      fontFamily: orFontFamily,
      color: orColor,
      textAlign: orTextAlign,
      display: orDisplay,
      border: orBorder,
      padding: orPadding,
      backgroundColor: orBackgroundColor,
      borderRadius: orBorderRadius,
      height: orHeight,
      overflow: orOverflow,
      alignSelf: orAlignSelf,
    };
  }, [
    orMargin,
    orWidth,
    orFontSize,
    orFontWeight,
    orFontFamily,
    orColor,
    orTextAlign,
    orDisplay,
    orBorder,
    orPadding,
    orBackgroundColor,
    orBorderRadius,
    orHeight,
    orOverflow,
    orAlignSelf,
  ]);

  const googleButtonFrame1Style = useMemo(() => {
    return {
      width: googleButtonFrameWidth1,
      overflow: googleButtonFrameOverflow1,
      flexDirection: googleButtonFrameFlexDirection1,
      position: googleButtonFramePosition1,
      top: googleButtonFrameTop1,
      left: googleButtonFrameLeft1,
      gap: googleButtonFrameGap1,
      border: googleButtonFrameBorder,
      outline: googleButtonFrameOutline,
      fontWeight: googleButtonFrameFontWeight,
      fontFamily: googleButtonFrameFontFamily,
      fontSize: googleButtonFrameFontSize,
      backgroundColor: googleButtonFrameBackgroundColor,
      alignSelf: googleButtonFrameAlignSelf,
      borderRadius: googleButtonFrameBorderRadius,
      padding: googleButtonFramePadding,
      color: googleButtonFrameColor,
    };
  }, [
    googleButtonFrameWidth1,
    googleButtonFrameOverflow1,
    googleButtonFrameFlexDirection1,
    googleButtonFramePosition1,
    googleButtonFrameTop1,
    googleButtonFrameLeft1,
    googleButtonFrameGap1,
    googleButtonFrameBorder,
    googleButtonFrameOutline,
    googleButtonFrameFontWeight,
    googleButtonFrameFontFamily,
    googleButtonFrameFontSize,
    googleButtonFrameBackgroundColor,
    googleButtonFrameAlignSelf,
    googleButtonFrameBorderRadius,
    googleButtonFramePadding,
    googleButtonFrameColor,
  ]);

  const button1Style = useMemo(() => {
    return {
      border: buttonBorder1,
      padding: buttonPadding1,
      backgroundColor: buttonBackgroundColor1,
      width: buttonWidth1,
      borderRadius: buttonBorderRadius1,
      height: buttonHeight1,
      position: buttonPosition,
      overflow: buttonOverflow,
      flexDirection: buttonFlexDirection,
    };
  }, [
    buttonBorder1,
    buttonPadding1,
    buttonBackgroundColor1,
    buttonWidth1,
    buttonBorderRadius1,
    buttonHeight1,
    buttonPosition,
    buttonOverflow,
    buttonFlexDirection,
  ]);

  const frameDiv5Style = useMemo(() => {
    return {
      position: frameDivPosition3,
      top: frameDivTop1,
      left: frameDivLeft1,
      display: frameDivDisplay3,
      flexDirection: frameDivFlexDirection3,
      gap: frameDivGap2,
      fontSize: frameDivFontSize1,
      fontWeight: frameDivFontWeight1,
      fontFamily: frameDivFontFamily1,
      color: frameDivColor1,
      textAlign: frameDivTextAlign1,
    };
  }, [
    frameDivPosition3,
    frameDivTop1,
    frameDivLeft1,
    frameDivDisplay3,
    frameDivFlexDirection3,
    frameDivGap2,
    frameDivFontSize1,
    frameDivFontWeight1,
    frameDivFontFamily1,
    frameDivColor1,
    frameDivTextAlign1,
  ]);

  const icons1Style = useMemo(() => {
    return {
      width: iconsWidth1,
      position: iconsPosition,
      height: iconsHeight1,
      overflow: iconsOverflow1,
      border: iconsBorder1,
      padding: iconsPadding1,
      backgroundColor: iconsBackgroundColor1,
      flexDirection: iconsFlexDirection,
    };
  }, [
    iconsWidth1,
    iconsPosition,
    iconsHeight1,
    iconsOverflow1,
    iconsBorder1,
    iconsPadding1,
    iconsBackgroundColor1,
    iconsFlexDirection,
  ]);

  const signUp2Style = useMemo(() => {
    return {
      fontSize: signUpFontSize1,
      fontWeight: signUpFontWeight1,
      color: signUpColor1,
      textAlign: signUpTextAlign1,
      position: signUpPosition1,
      fontFamily: signUpFontFamily1,
    };
  }, [
    signUpFontSize1,
    signUpFontWeight1,
    signUpColor1,
    signUpTextAlign1,
    signUpPosition1,
    signUpFontFamily1,
  ]);

  const haveAnAccountLoginStyle = useMemo(() => {
    return {
      border: haveAnAccountLoginBorder,
      padding: haveAnAccountLoginPadding,
      backgroundColor: haveAnAccountLoginBackgroundColor,
      display: haveAnAccountLoginDisplay,
      flexDirection: haveAnAccountLoginFlexDirection,
    };
  }, [
    haveAnAccountLoginBorder,
    haveAnAccountLoginPadding,
    haveAnAccountLoginBackgroundColor,
    haveAnAccountLoginDisplay,
    haveAnAccountLoginFlexDirection,
  ]);

  const alreadyHaveAnContainerStyle = useMemo(() => {
    return {
      position: alreadyHaveAnContainerPosition,
      fontSize: alreadyHaveAnContainerFontSize,
      fontFamily: alreadyHaveAnContainerFontFamily,
      textAlign: alreadyHaveAnContainerTextAlign,
      color: alreadyHaveAnContainerColor,
    };
  }, [
    alreadyHaveAnContainerPosition,
    alreadyHaveAnContainerFontSize,
    alreadyHaveAnContainerFontFamily,
    alreadyHaveAnContainerTextAlign,
    alreadyHaveAnContainerColor,
  ]);

  return (
    <div
      className="max-w-full overflow-hidden flex flex-col items-start justify-start gap-[10px] text-left text-13xl text-darkslategray-300 font-poppins"
      style={signUpStyle}
    >
      <div
        className="flex flex-col items-start justify-start"
        style={frameDivStyle}
      >
        <div className="relative font-medium" style={welcomeToImpactAppStyle}>
          {welcomeToImpactApp}
        </div>
      </div>
      {!areYouPlanning && (
        <div
          className="w-[494px] relative font-medium hidden items-center h-[119px] shrink-0"
          style={areYouPlanningStyle}
        >
          Are you planning to be an organizer or Volunteer?
        </div>
      )}
      {!boxes && (
        <div
          className="overflow-hidden hidden flex-row items-start justify-start py-5 px-[5px] gap-[25px] text-center text-5xl text-black"
          style={boxesStyle}
        >
          <div
            className="rounded-3xs bg-gainsboro-200 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start py-[18px] px-2.5"
            style={iconHeaderStyle}
          >
            <img
              className="w-[120px] relative h-[120px] overflow-hidden shrink-0 object-cover"
              alt=""
              src={user1}
            />
            <h2
              className="m-0 w-[221px] relative text-inherit font-normal font-inherit flex items-center justify-center h-[85px] shrink-0"
              style={organizerStyle}
            >
              Organizer
            </h2>
          </div>
          <div
            className="rounded-3xs bg-gainsboro-200 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start py-[18px] px-2.5"
            style={iconHeader1Style}
          >
            <img
              className="w-[120px] relative h-[120px] overflow-hidden shrink-0 object-cover"
              alt=""
              src={user2}
            />
            <h2
              className="m-0 w-[221px] relative text-inherit font-normal font-inherit flex items-center justify-center h-[85px] shrink-0"
              style={organizer1Style}
            >
              Volunteer
            </h2>
          </div>
        </div>
      )}
      {showSignUpBoxes && (
        <div
          className="w-[515px] overflow-hidden flex flex-col items-start justify-center p-2.5 box-border gap-[17px] text-sm text-crimson"
          style={signUpBoxesStyle}
        >
          <div className="w-[484px] relative h-[87px]">
            <article className="absolute h-[31.03%] w-full top-[0%] right-[0%] bottom-[68.97%] left-[0%] text-left text-base text-dimgray-200 font-poppins">
              <div className="absolute top-[0px] left-[0px]" style={labelStyle}>
                {label}
              </div>
              <div className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-400">
                <img
                  className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/icon.svg"
                />
                <div className="absolute top-[0px] right-[0px]">Hide</div>
              </div>
            </article>
            <input
              className="[outline:none] bg-[transparent] absolute h-[64.37%] w-full top-[35.63%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border overflow-hidden border-[1px] border-solid border-dimgray-500"
              type="text"
            />
            <div className="absolute top-[104.6%] left-[0%] hidden">
              Error message
            </div>
            <div className="absolute h-[65.52%] w-[97.52%] top-[35.63%] left-[1.86%] text-base text-gray-1600 text-center inline-block">
              Text
            </div>
          </div>
          <div className="w-[484px] relative h-[87px]">
            <article className="absolute h-[31.03%] w-full top-[0%] right-[0%] bottom-[68.97%] left-[0%] text-left text-base text-dimgray-200 font-poppins">
              <div className="absolute top-[0px] left-[0px]">{label1}</div>
              <div className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-400">
                <img
                  className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/icon.svg"
                />
                <div className="absolute top-[0px] right-[0px]">Hide</div>
              </div>
            </article>
            <input
              className="[outline:none] bg-[transparent] absolute h-[64.37%] w-full top-[35.63%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border overflow-hidden border-[1px] border-solid border-dimgray-500"
              type="text"
            />
            <div className="absolute top-[104.6%] left-[0%] hidden">
              Error message
            </div>
            <div className="absolute h-[65.52%] w-[97.52%] top-[35.63%] left-[1.86%] text-base text-gray-1600 text-center inline-block">
              Text
            </div>
          </div>
          <div className="w-[484px] relative h-[87px]">
            <article className="absolute h-[31.03%] w-full top-[0%] right-[0%] bottom-[68.97%] left-[0%] text-left text-base text-dimgray-200 font-poppins">
              <div className="absolute top-[0px] left-[0px]">
                {showPassword && (
                  <p className="m-0" style={passwordStyle}>
                    {password}
                  </p>
                )}
              </div>
              {!passwordHideSee && (
                <div
                  className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-400"
                  style={passwordHideSeeStyle}
                >
                  <img
                    className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/icon.svg"
                    style={iconStyle}
                  />
                  {showHide && (
                    <div
                      className="absolute top-[0px] right-[0px]"
                      style={hideStyle}
                    >
                      {hide}
                    </div>
                  )}
                </div>
              )}
            </article>
            <input
              className="[outline:none] bg-[transparent] absolute h-[64.37%] w-full top-[35.63%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border overflow-hidden border-[1px] border-solid border-dimgray-500"
              type="text"
              style={textFieldStyle}
            />
            <div
              className="absolute top-[104.6%] left-[0%] hidden"
              style={errorMessageStyle}
            >
              {errorMessage}
            </div>
            <div
              className="absolute h-[65.52%] w-[97.52%] top-[35.63%] left-[1.86%] text-base text-gray-1600 text-center inline-block"
              style={text1Style}
            >
              {text}
            </div>
          </div>
          <article
            className="w-[484px] flex flex-col items-start justify-start text-left text-sm text-dimgray-300 font-poppins"
            style={password1Style}
          >
            <div
              className="flex flex-row items-start justify-start gap-[18px]"
              style={frameDiv1Style}
            >
              <div
                className="flex flex-col items-start justify-start"
                style={frameDiv2Style}
              >
                <div
                  className="flex flex-row items-center justify-center py-2 pr-2 pl-0 gap-[8px]"
                  style={bulletPointStyle}
                >
                  <div
                    className="w-2 relative rounded-[50%] bg-dimgray-300 h-2"
                    style={ellipseDivStyle}
                  />
                  <div className="relative" style={oneLowercaseCharacterStyle}>
                    {oneLowercaseCharacter}
                  </div>
                </div>
                <div
                  className="flex flex-row items-center justify-center py-2 pr-2 pl-0 gap-[8px]"
                  style={bulletPoint1Style}
                >
                  <div
                    className="w-2 relative rounded-[50%] bg-dimgray-300 h-2"
                    style={ellipseDiv1Style}
                  />
                  <div className="relative" style={oneLowercaseCharacter1Style}>
                    {oneLowercaseCharacter1}
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-start justify-start"
                style={frameDiv3Style}
              >
                <div
                  className="flex flex-row items-center justify-center py-2 pr-2 pl-0 gap-[8px]"
                  style={bulletPoint2Style}
                >
                  <div
                    className="w-2 relative rounded-[50%] bg-dimgray-300 h-2"
                    style={ellipseDiv2Style}
                  />
                  <div className="relative" style={oneLowercaseCharacter2Style}>
                    {oneLowercaseCharacter2}
                  </div>
                </div>
                <div
                  className="flex flex-row items-center justify-center py-2 pr-2 pl-0 gap-[8px]"
                  style={bulletPoint3Style}
                >
                  <div
                    className="w-2 relative rounded-[50%] bg-dimgray-300 h-2"
                    style={ellipseDiv3Style}
                  />
                  <div
                    className="relative"
                    style={oneLowercaseCharacter3Style}
                    onClick={onButtonClick}
                  >
                    {oneLowercaseCharacter3}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
      <div
        className="w-[515px] overflow-hidden flex flex-col items-center justify-start"
        style={googleButtonFrameStyle}
      >
        {showButton && (
          <button
            className="cursor-pointer [border:none] p-0 bg-gray-200 w-[484px] relative rounded-13xl h-16 overflow-hidden shrink-0"
            style={buttonStyle}
          >
            <div
              className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_51px)] flex flex-row items-center justify-center gap-[8px]"
              style={frameDiv4Style}
            >
              {!icons1 && (
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icons.svg"
                  style={iconsStyle}
                  onClick={onByCreatingAnClick}
                />
              )}
              <div
                className="relative text-3xl font-medium font-poppins text-dimgray-200 text-center"
                style={signUp1Style}
              >
                {signUp}
              </div>
            </div>
          </button>
        )}
      </div>
      {!byCreatingAnContainer && (
        <div
          className="w-[494px] relative text-base hidden text-gray-200"
          style={byCreatingAnContainerStyle}
        >
          <span
            className="text-darkslategray-300"
            style={byCreatingAnStyle}
          >{`By creating an account, you agree to the `}</span>
          <span className="[text-decoration:underline]" style={termsOfUseStyle}>
            Terms of use
          </span>
          <span className="text-dimgray-200">{` `}</span>
          <span className="text-darkslategray-300">and</span>
          <span className="text-dimgray-200">{` `}</span>
          <span
            className="[text-decoration:underline]"
            style={privacyPolicyStyle}
          >
            <span style={privacyPolicy1Style}>{privacyPolicy}</span>
            <span className="text-dimgray-200">{` `}</span>
          </span>
        </div>
      )}
      <h1
        className="m-0 w-[494px] relative text-inherit font-medium font-inherit text-center flex items-center justify-center"
        style={orStyle}
      >
        {or}
      </h1>
      <div
        className="w-[515px] overflow-hidden flex flex-col items-center justify-start"
        style={googleButtonFrame1Style}
        onClick={onGoogleButtonFrameClick}
      >
        {buttonVisible && (
          <button
            className="cursor-pointer [border:none] p-0 bg-gray-200 w-[484px] relative rounded-13xl h-16 overflow-hidden shrink-0"
            style={button1Style}
            onClick={onHaveAnAccountLoginClick}
          >
            <div
              className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_119.5px)] flex flex-row items-center justify-center gap-[8px]"
              style={frameDiv5Style}
              onClick={onAlreadyHaveAnClick}
            >
              {!icons2 && (
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/icons.svg"
                  style={icons1Style}
                />
              )}
              <div
                className="relative text-3xl font-medium font-poppins text-white text-center"
                style={signUp2Style}
              >
                {signUp1}
              </div>
            </div>
          </button>
        )}
      </div>
      <button
        className="cursor-pointer [border:none] p-0.5 bg-[transparent] flex flex-row items-start justify-start"
        style={haveAnAccountLoginStyle}
      >
        <div
          className="relative text-base font-poppins text-left"
          style={alreadyHaveAnContainerStyle}
        >
          <span className="text-darkslategray-300">
            Already have an ccount?
          </span>
          <span className="text-dimgray-200">{` `}</span>
          <span className="[text-decoration:underline] text-gray-200 whitespace-pre-wrap">{`Log in  `}</span>
        </div>
      </button>
    </div>
  );
};

export default SignUp;
