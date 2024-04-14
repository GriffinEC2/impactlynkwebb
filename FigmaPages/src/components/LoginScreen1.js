import { useMemo } from "react";

const LoginScreen1 = ({
  welcomeBack,
  wereSoExcitedToSeeYouAgai,
  label,
  hide,
  errorMessage,
  text,
  password,
  hide1,
  errorMessage2,
  text1,
  forgetYourPassword,
  logIn,
  dontHaveAnAcount,
  signUp,
  showFrameArticle,
  passwordHideSee,
  showTextField,
  errorMessage1,
  frameArticleVisible,
  passwordHideSee1,
  showIcon,
  errorMessage3,
  showText,
  showFrameButton,
  showDontHaveAn,
  loginScreenHeight,
  loginScreenBorderRadius,
  loginScreenBackgroundColor,
  loginScreenBoxShadow,
  loginScreenPadding,
  loginScreenPosition,
  loginScreenTop,
  loginScreenLeft,
  loginScreenWidth,
  frameDivAlignSelf,
  wereSoExcitedMargin,
  wereSoExcitedPosition,
  wereSoExcitedFontSize,
  wereSoExcitedFontWeight,
  wereSoExcitedFontFamily,
  wereSoExcitedColor,
  wereSoExcitedTextAlign,
  wereSoExcitedDisplay,
  wereSoExcitedAlignSelf,
  loginBoxesDisplay,
  loginBoxesFlexDirection,
  loginBoxesGap,
  loginBoxesAlignSelf,
  loginWidth,
  loginPosition,
  loginHeight,
  loginMargin,
  loginAlignSelf,
  frameArticlePosition,
  frameArticleHeight,
  frameArticleWidth,
  frameArticleTop,
  frameArticleRight,
  frameArticleBottom,
  frameArticleLeft,
  frameArticleMargin,
  frameArticleFontSize,
  frameArticleFontWeight,
  frameArticleFontFamily,
  frameArticleColor,
  frameArticleTextAlign,
  labelPosition,
  labelTop,
  labelLeft,
  labelFontSize,
  labelFontFamily,
  labelColor,
  labelTextAlign,
  labelDisplay,
  labelFlexDirection,
  labelGap,
  passwordHideSeePosition,
  passwordHideSeeTop,
  passwordHideSeeRight,
  passwordHideSeeWidth,
  passwordHideSeeHeight,
  iconTop,
  iconRight,
  iconWidth,
  iconHeight,
  iconOverflow,
  iconBottom,
  iconLeft,
  hideRight,
  hideColor,
  hideTextAlign,
  hideLeft,
  textFieldBorder,
  textFieldOutline,
  textFieldBackgroundColor,
  textFieldHeight,
  textFieldWidth,
  textFieldTop,
  textFieldRight,
  textFieldBottom,
  textFieldLeft,
  textFieldBorderRadius,
  textFieldOverflow,
  errorMessageTop,
  errorMessageLeft,
  errorMessageFontSize,
  errorMessageFontFamily,
  errorMessageColor,
  errorMessageTextAlign,
  errorMessageRight,
  errorMessageWidth,
  errorMessageHeight,
  errorMessageOverflow,
  textHeight,
  textWidth,
  textTop,
  textLeft,
  textColor,
  textTextAlign,
  textRight,
  loginWidth1,
  loginPosition1,
  loginHeight1,
  loginBorder,
  loginOutline,
  loginBackgroundColor,
  loginTop,
  loginRight,
  loginBottom,
  loginLeft,
  loginBorderRadius,
  loginOverflow,
  loginAlignSelf1,
  frameArticleHeight1,
  frameArticleWidth1,
  frameArticleTop1,
  frameArticleRight1,
  frameArticleBottom1,
  frameArticleFontSize1,
  frameArticleFontFamily1,
  frameArticleColor1,
  frameArticleTextAlign1,
  labelTop1,
  labelLeft1,
  labelColor1,
  labelTextAlign1,
  labelHeight,
  labelWidth,
  passwordMargin,
  passwordWidth,
  passwordPosition,
  passwordHeight,
  passwordHideSeeRight1,
  passwordHideSeeWidth1,
  passwordHideSeeHeight1,
  passwordHideSeeLeft,
  passwordHideSeeFontSize,
  passwordHideSeeFontFamily,
  passwordHideSeeColor,
  passwordHideSeeTextAlign,
  iconRight1,
  iconWidth1,
  iconOverflow1,
  hideRight1,
  hideFontSize,
  hideFontFamily,
  hideColor1,
  hideTextAlign1,
  hideDisplay,
  hideWidth,
  hideHeight,
  hideOverflow,
  textFieldBorder1,
  textFieldOutline1,
  textFieldBackgroundColor1,
  textFieldHeight1,
  textFieldWidth1,
  textFieldTop1,
  textFieldRight1,
  textFieldBottom1,
  textFieldLeft1,
  textFieldBorderRadius1,
  textFieldOverflow1,
  textFieldFontSize,
  textFieldFontFamily,
  textFieldColor,
  textFieldTextAlign,
  textFieldDisplay,
  errorMessageTop1,
  errorMessageFontSize1,
  errorMessageFontFamily1,
  errorMessageColor1,
  errorMessageTextAlign1,
  errorMessageBorder,
  errorMessageOutline,
  errorMessageBackgroundColor,
  errorMessageHeight1,
  errorMessageWidth1,
  errorMessageRight1,
  errorMessageBottom,
  errorMessageBorderRadius,
  errorMessageOverflow1,
  textHeight1,
  textWidth1,
  textTop1,
  textLeft1,
  textColor1,
  textTextAlign1,
  forgetYourPasswordBorder,
  forgetYourPasswordPadding,
  forgetYourPasswordBackgroundColor,
  forgetYourPasswordPosition,
  forgetYourPasswordTextDecoration,
  forgetYourPasswordFontWeight,
  forgetYourPasswordColor,
  forgetYourPasswordTextAlign,
  forgetYourPasswordHeight,
  forgetYourPasswordWidth,
  forgetYourPasswordTop,
  forgetYourPasswordLeft,
  frameButtonBackgroundColor,
  frameButtonWidth,
  frameButtonBorderRadius,
  frameButtonHeight,
  frameButtonOverflow,
  frameButtonFontSize,
  frameButtonTextDecoration,
  frameButtonFontWeight,
  frameButtonFontFamily,
  frameButtonColor,
  frameButtonTextAlign,
  frameButtonAlignSelf,
  logInPosition,
  logInTop,
  logInLeft,
  logInFontSize,
  logInFontWeight,
  logInFontFamily,
  logInColor,
  logInTextAlign,
  logInDisplay,
  logInBorder,
  logInPadding,
  logInBackgroundColor,
  logInBorderRadius,
  logInOverflow,
  alreadyHaveAnContainerBorder,
  alreadyHaveAnContainerPadding,
  alreadyHaveAnContainerBackgroundColor,
  alreadyHaveAnContainerPosition,
  alreadyHaveAnContainerFontSize,
  alreadyHaveAnContainerTextAlign,
  alreadyHaveAnContainerDisplay,
  alreadyHaveAnContainerTop,
  alreadyHaveAnContainerLeft,
  alreadyHaveAnContainerFontWeight,
  alreadyHaveAnContainerFontFamily,
  alreadyHaveAnContainerColor,
  alreadyHaveAnContainerWidth,
  alreadyHaveAnContainerHeight,
  dontHaveAnFontFamily,
  dontHaveAnColor,
  dontHaveAnBorder,
  dontHaveAnPadding,
  dontHaveAnBackgroundColor,
  dontHaveAnWidth,
  dontHaveAnPosition,
  dontHaveAnFontSize,
  dontHaveAnTextAlign,
  signUpTextDecoration,
  signUpFontWeight,
  signUpColor,
  onFrameButtonClick,
  onFrameButton1Click,
  onAlreadyHaveAnClick,
  showPassword,
  passwordHideSee2,
  showHide,
  errorMessage11,
  passwordHideSee11,
  showHide1,
  errorMessage111,
}) => {
  const loginScreenStyle = useMemo(() => {
    return {
      height: loginScreenHeight,
      borderRadius: loginScreenBorderRadius,
      backgroundColor: loginScreenBackgroundColor,
      boxShadow: loginScreenBoxShadow,
      padding: loginScreenPadding,
      position: loginScreenPosition,
      top: loginScreenTop,
      left: loginScreenLeft,
      width: loginScreenWidth,
    };
  }, [
    loginScreenHeight,
    loginScreenBorderRadius,
    loginScreenBackgroundColor,
    loginScreenBoxShadow,
    loginScreenPadding,
    loginScreenPosition,
    loginScreenTop,
    loginScreenLeft,
    loginScreenWidth,
  ]);

  const frameDiv10Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const wereSoExcitedStyle = useMemo(() => {
    return {
      margin: wereSoExcitedMargin,
      position: wereSoExcitedPosition,
      fontSize: wereSoExcitedFontSize,
      fontWeight: wereSoExcitedFontWeight,
      fontFamily: wereSoExcitedFontFamily,
      color: wereSoExcitedColor,
      textAlign: wereSoExcitedTextAlign,
      display: wereSoExcitedDisplay,
      alignSelf: wereSoExcitedAlignSelf,
    };
  }, [
    wereSoExcitedMargin,
    wereSoExcitedPosition,
    wereSoExcitedFontSize,
    wereSoExcitedFontWeight,
    wereSoExcitedFontFamily,
    wereSoExcitedColor,
    wereSoExcitedTextAlign,
    wereSoExcitedDisplay,
    wereSoExcitedAlignSelf,
  ]);

  const loginBoxesStyle = useMemo(() => {
    return {
      display: loginBoxesDisplay,
      flexDirection: loginBoxesFlexDirection,
      gap: loginBoxesGap,
      alignSelf: loginBoxesAlignSelf,
    };
  }, [
    loginBoxesDisplay,
    loginBoxesFlexDirection,
    loginBoxesGap,
    loginBoxesAlignSelf,
  ]);

  const loginStyle = useMemo(() => {
    return {
      width: loginWidth,
      position: loginPosition,
      height: loginHeight,
      margin: loginMargin,
      alignSelf: loginAlignSelf,
    };
  }, [loginWidth, loginPosition, loginHeight, loginMargin, loginAlignSelf]);

  const frameArticleStyle = useMemo(() => {
    return {
      position: frameArticlePosition,
      height: frameArticleHeight,
      width: frameArticleWidth,
      top: frameArticleTop,
      right: frameArticleRight,
      bottom: frameArticleBottom,
      left: frameArticleLeft,
      margin: frameArticleMargin,
      fontSize: frameArticleFontSize,
      fontWeight: frameArticleFontWeight,
      fontFamily: frameArticleFontFamily,
      color: frameArticleColor,
      textAlign: frameArticleTextAlign,
    };
  }, [
    frameArticlePosition,
    frameArticleHeight,
    frameArticleWidth,
    frameArticleTop,
    frameArticleRight,
    frameArticleBottom,
    frameArticleLeft,
    frameArticleMargin,
    frameArticleFontSize,
    frameArticleFontWeight,
    frameArticleFontFamily,
    frameArticleColor,
    frameArticleTextAlign,
  ]);

  const label2Style = useMemo(() => {
    return {
      position: labelPosition,
      top: labelTop,
      left: labelLeft,
      fontSize: labelFontSize,
      fontFamily: labelFontFamily,
      color: labelColor,
      textAlign: labelTextAlign,
      display: labelDisplay,
      flexDirection: labelFlexDirection,
      gap: labelGap,
    };
  }, [
    labelPosition,
    labelTop,
    labelLeft,
    labelFontSize,
    labelFontFamily,
    labelColor,
    labelTextAlign,
    labelDisplay,
    labelFlexDirection,
    labelGap,
  ]);

  const passwordHideSee2Style = useMemo(() => {
    return {
      position: passwordHideSeePosition,
      top: passwordHideSeeTop,
      right: passwordHideSeeRight,
      width: passwordHideSeeWidth,
      height: passwordHideSeeHeight,
    };
  }, [
    passwordHideSeePosition,
    passwordHideSeeTop,
    passwordHideSeeRight,
    passwordHideSeeWidth,
    passwordHideSeeHeight,
  ]);

  const icon2Style = useMemo(() => {
    return {
      top: iconTop,
      right: iconRight,
      width: iconWidth,
      height: iconHeight,
      overflow: iconOverflow,
      bottom: iconBottom,
      left: iconLeft,
    };
  }, [
    iconTop,
    iconRight,
    iconWidth,
    iconHeight,
    iconOverflow,
    iconBottom,
    iconLeft,
  ]);

  const hide2Style = useMemo(() => {
    return {
      right: hideRight,
      color: hideColor,
      textAlign: hideTextAlign,
      left: hideLeft,
    };
  }, [hideRight, hideColor, hideTextAlign, hideLeft]);

  const textField2Style = useMemo(() => {
    return {
      border: textFieldBorder,
      outline: textFieldOutline,
      backgroundColor: textFieldBackgroundColor,
      height: textFieldHeight,
      width: textFieldWidth,
      top: textFieldTop,
      right: textFieldRight,
      bottom: textFieldBottom,
      left: textFieldLeft,
      borderRadius: textFieldBorderRadius,
      overflow: textFieldOverflow,
      fontFamily: 'Inter',
      fontSize: 20
    };
  }, [
    textFieldBorder,
    textFieldOutline,
    textFieldBackgroundColor,
    textFieldHeight,
    textFieldWidth,
    textFieldTop,
    textFieldRight,
    textFieldBottom,
    textFieldLeft,
    textFieldBorderRadius,
    textFieldOverflow,
  ]);

  const errorMessage2Style = useMemo(() => {
    return {
      top: errorMessageTop,
      left: errorMessageLeft,
      fontSize: errorMessageFontSize,
      fontFamily: errorMessageFontFamily,
      color: errorMessageColor,
      textAlign: errorMessageTextAlign,
      right: errorMessageRight,
      width: errorMessageWidth,
      height: errorMessageHeight,
      overflow: errorMessageOverflow,
    };
  }, [
    errorMessageTop,
    errorMessageLeft,
    errorMessageFontSize,
    errorMessageFontFamily,
    errorMessageColor,
    errorMessageTextAlign,
    errorMessageRight,
    errorMessageWidth,
    errorMessageHeight,
    errorMessageOverflow,
  ]);

  const text3Style = useMemo(() => {
    return {
      height: textHeight,
      width: textWidth,
      top: textTop,
      left: textLeft,
      color: textColor,
      textAlign: textTextAlign,
      right: textRight,
    };
  }, [
    textHeight,
    textWidth,
    textTop,
    textLeft,
    textColor,
    textTextAlign,
    textRight,
  ]);

  const login1Style = useMemo(() => {
    return {
      width: loginWidth1,
      position: loginPosition1,
      height: loginHeight1,
      border: loginBorder,
      outline: loginOutline,
      backgroundColor: loginBackgroundColor,
      top: loginTop,
      right: loginRight,
      bottom: loginBottom,
      left: loginLeft,
      borderRadius: loginBorderRadius,
      overflow: loginOverflow,
      alignSelf: loginAlignSelf1,
    };
  }, [
    loginWidth1,
    loginPosition1,
    loginHeight1,
    loginBorder,
    loginOutline,
    loginBackgroundColor,
    loginTop,
    loginRight,
    loginBottom,
    loginLeft,
    loginBorderRadius,
    loginOverflow,
    loginAlignSelf1,
  ]);

  const frameArticle1Style = useMemo(() => {
    return {
      height: frameArticleHeight1,
      width: frameArticleWidth1,
      top: frameArticleTop1,
      right: frameArticleRight1,
      bottom: frameArticleBottom1,
      fontSize: frameArticleFontSize1,
      fontFamily: frameArticleFontFamily1,
      color: frameArticleColor1,
      textAlign: frameArticleTextAlign1,
    };
  }, [
    frameArticleHeight1,
    frameArticleWidth1,
    frameArticleTop1,
    frameArticleRight1,
    frameArticleBottom1,
    frameArticleFontSize1,
    frameArticleFontFamily1,
    frameArticleColor1,
    frameArticleTextAlign1,
  ]);

  const label3Style = useMemo(() => {
    return {
      top: labelTop1,
      left: labelLeft1,
      color: labelColor1,
      textAlign: labelTextAlign1,
      height: labelHeight,
      width: labelWidth,
    };
  }, [
    labelTop1,
    labelLeft1,
    labelColor1,
    labelTextAlign1,
    labelHeight,
    labelWidth,
  ]);

  const password4Style = useMemo(() => {
    return {
      margin: passwordMargin,
      width: passwordWidth,
      position: passwordPosition,
      height: passwordHeight,
    };
  }, [passwordMargin, passwordWidth, passwordPosition, passwordHeight]);

  const passwordHideSee3Style = useMemo(() => {
    return {
      right: passwordHideSeeRight1,
      width: passwordHideSeeWidth1,
      height: passwordHideSeeHeight1,
      left: passwordHideSeeLeft,
      fontSize: passwordHideSeeFontSize,
      fontFamily: passwordHideSeeFontFamily,
      color: passwordHideSeeColor,
      textAlign: passwordHideSeeTextAlign,
    };
  }, [
    passwordHideSeeRight1,
    passwordHideSeeWidth1,
    passwordHideSeeHeight1,
    passwordHideSeeLeft,
    passwordHideSeeFontSize,
    passwordHideSeeFontFamily,
    passwordHideSeeColor,
    passwordHideSeeTextAlign,
  ]);

  const icon3Style = useMemo(() => {
    return {
      right: iconRight1,
      width: iconWidth1,
      overflow: iconOverflow1,
    };
  }, [iconRight1, iconWidth1, iconOverflow1]);

  const hide3Style = useMemo(() => {
    return {
      right: hideRight1,
      fontSize: hideFontSize,
      fontFamily: hideFontFamily,
      color: hideColor1,
      textAlign: hideTextAlign1,
      display: hideDisplay,
      width: hideWidth,
      height: hideHeight,
      overflow: hideOverflow,
    };
  }, [
    hideRight1,
    hideFontSize,
    hideFontFamily,
    hideColor1,
    hideTextAlign1,
    hideDisplay,
    hideWidth,
    hideHeight,
    hideOverflow,
  ]);

  const textField3Style = useMemo(() => {
    return {
      border: textFieldBorder1,
      outline: textFieldOutline1,
      backgroundColor: textFieldBackgroundColor1,
      height: textFieldHeight1,
      width: textFieldWidth1,
      top: textFieldTop1,
      right: textFieldRight1,
      bottom: textFieldBottom1,
      left: textFieldLeft1,
      borderRadius: textFieldBorderRadius1,
      overflow: textFieldOverflow1,
      fontSize: textFieldFontSize,
      fontFamily: textFieldFontFamily,
      color: textFieldColor,
      textAlign: textFieldTextAlign,
      display: textFieldDisplay,
    };
  }, [
    textFieldBorder1,
    textFieldOutline1,
    textFieldBackgroundColor1,
    textFieldHeight1,
    textFieldWidth1,
    textFieldTop1,
    textFieldRight1,
    textFieldBottom1,
    textFieldLeft1,
    textFieldBorderRadius1,
    textFieldOverflow1,
    textFieldFontSize,
    textFieldFontFamily,
    textFieldColor,
    textFieldTextAlign,
    textFieldDisplay,
  ]);

  const errorMessage3Style = useMemo(() => {
    return {
      top: errorMessageTop1,
      fontSize: errorMessageFontSize1,
      fontFamily: errorMessageFontFamily1,
      color: errorMessageColor1,
      textAlign: errorMessageTextAlign1,
      border: errorMessageBorder,
      outline: errorMessageOutline,
      backgroundColor: errorMessageBackgroundColor,
      height: errorMessageHeight1,
      width: errorMessageWidth1,
      right: errorMessageRight1,
      bottom: errorMessageBottom,
      borderRadius: errorMessageBorderRadius,
      overflow: errorMessageOverflow1,
    };
  }, [
    errorMessageTop1,
    errorMessageFontSize1,
    errorMessageFontFamily1,
    errorMessageColor1,
    errorMessageTextAlign1,
    errorMessageBorder,
    errorMessageOutline,
    errorMessageBackgroundColor,
    errorMessageHeight1,
    errorMessageWidth1,
    errorMessageRight1,
    errorMessageBottom,
    errorMessageBorderRadius,
    errorMessageOverflow1,
  ]);

  const text4Style = useMemo(() => {
    return {
      height: textHeight1,
      width: textWidth1,
      top: textTop1,
      left: textLeft1,
      color: textColor1,
      textAlign: textTextAlign1,
    };
  }, [
    textHeight1,
    textWidth1,
    textTop1,
    textLeft1,
    textColor1,
    textTextAlign1,
  ]);

  const forgetYourPasswordStyle = useMemo(() => {
    return {
      border: forgetYourPasswordBorder,
      padding: forgetYourPasswordPadding,
      backgroundColor: forgetYourPasswordBackgroundColor,
      position: forgetYourPasswordPosition,
      textDecoration: forgetYourPasswordTextDecoration,
      fontWeight: forgetYourPasswordFontWeight,
      color: forgetYourPasswordColor,
      textAlign: forgetYourPasswordTextAlign,
      height: forgetYourPasswordHeight,
      width: forgetYourPasswordWidth,
      top: forgetYourPasswordTop,
      left: forgetYourPasswordLeft,
    };
  }, [
    forgetYourPasswordBorder,
    forgetYourPasswordPadding,
    forgetYourPasswordBackgroundColor,
    forgetYourPasswordPosition,
    forgetYourPasswordTextDecoration,
    forgetYourPasswordFontWeight,
    forgetYourPasswordColor,
    forgetYourPasswordTextAlign,
    forgetYourPasswordHeight,
    forgetYourPasswordWidth,
    forgetYourPasswordTop,
    forgetYourPasswordLeft,
  ]);

  const frameButtonStyle = useMemo(() => {
    return {
      backgroundColor: frameButtonBackgroundColor,
      width: frameButtonWidth,
      borderRadius: frameButtonBorderRadius,
      height: frameButtonHeight,
      overflow: frameButtonOverflow,
      fontSize: frameButtonFontSize,
      textDecoration: frameButtonTextDecoration,
      fontWeight: frameButtonFontWeight,
      fontFamily: frameButtonFontFamily,
      color: frameButtonColor,
      textAlign: frameButtonTextAlign,
      alignSelf: frameButtonAlignSelf,
    };
  }, [
    frameButtonBackgroundColor,
    frameButtonWidth,
    frameButtonBorderRadius,
    frameButtonHeight,
    frameButtonOverflow,
    frameButtonFontSize,
    frameButtonTextDecoration,
    frameButtonFontWeight,
    frameButtonFontFamily,
    frameButtonColor,
    frameButtonTextAlign,
    frameButtonAlignSelf,
  ]);

  const logInStyle = useMemo(() => {
    return {
      position: logInPosition,
      top: logInTop,
      left: logInLeft,
      fontSize: logInFontSize,
      fontWeight: logInFontWeight,
      fontFamily: logInFontFamily,
      color: logInColor,
      textAlign: logInTextAlign,
      display: logInDisplay,
      border: logInBorder,
      padding: logInPadding,
      backgroundColor: logInBackgroundColor,
      borderRadius: logInBorderRadius,
      overflow: logInOverflow,
    };
  }, [
    logInPosition,
    logInTop,
    logInLeft,
    logInFontSize,
    logInFontWeight,
    logInFontFamily,
    logInColor,
    logInTextAlign,
    logInDisplay,
    logInBorder,
    logInPadding,
    logInBackgroundColor,
    logInBorderRadius,
    logInOverflow,
  ]);

  const alreadyHaveAnContainer2Style = useMemo(() => {
    return {
      border: alreadyHaveAnContainerBorder,
      padding: alreadyHaveAnContainerPadding,
      backgroundColor: alreadyHaveAnContainerBackgroundColor,
      position: alreadyHaveAnContainerPosition,
      fontSize: alreadyHaveAnContainerFontSize,
      textAlign: alreadyHaveAnContainerTextAlign,
      display: alreadyHaveAnContainerDisplay,
      top: alreadyHaveAnContainerTop,
      left: alreadyHaveAnContainerLeft,
      fontWeight: alreadyHaveAnContainerFontWeight,
      fontFamily: alreadyHaveAnContainerFontFamily,
      color: alreadyHaveAnContainerColor,
      width: alreadyHaveAnContainerWidth,
      height: alreadyHaveAnContainerHeight,
    };
  }, [
    alreadyHaveAnContainerBorder,
    alreadyHaveAnContainerPadding,
    alreadyHaveAnContainerBackgroundColor,
    alreadyHaveAnContainerPosition,
    alreadyHaveAnContainerFontSize,
    alreadyHaveAnContainerTextAlign,
    alreadyHaveAnContainerDisplay,
    alreadyHaveAnContainerTop,
    alreadyHaveAnContainerLeft,
    alreadyHaveAnContainerFontWeight,
    alreadyHaveAnContainerFontFamily,
    alreadyHaveAnContainerColor,
    alreadyHaveAnContainerWidth,
    alreadyHaveAnContainerHeight,
  ]);

  const dontHaveAnStyle = useMemo(() => {
    return {
      fontFamily: dontHaveAnFontFamily,
      color: dontHaveAnColor,
      border: dontHaveAnBorder,
      padding: dontHaveAnPadding,
      backgroundColor: dontHaveAnBackgroundColor,
      width: dontHaveAnWidth,
      position: dontHaveAnPosition,
      fontSize: dontHaveAnFontSize,
      textAlign: dontHaveAnTextAlign,
    };
  }, [
    dontHaveAnFontFamily,
    dontHaveAnColor,
    dontHaveAnBorder,
    dontHaveAnPadding,
    dontHaveAnBackgroundColor,
    dontHaveAnWidth,
    dontHaveAnPosition,
    dontHaveAnFontSize,
    dontHaveAnTextAlign,
  ]);

  const signUp4Style = useMemo(() => {
    return {
      textDecoration: signUpTextDecoration,
      fontWeight: signUpFontWeight,
      color: signUpColor,
    };
  }, [signUpTextDecoration, signUpFontWeight, signUpColor]);

  return (
    <div
      className="max-w-full h-[605px] flex flex-col items-center justify-center gap-[32px] text-center text-21xl text-darkslategray-300 font-poppins"
      style={loginScreenStyle}
    >
      <div
        className="flex flex-col items-center justify-center gap-[2px]"
        style={frameDiv10Style}
      >
        <h1 className="m-0 relative text-inherit font-medium font-inherit">
          {welcomeBack}
        </h1>
        <h3
          className="m-0 relative text-5xl font-normal font-inherit text-dimgray-200"
          style={wereSoExcitedStyle}
        >
          {wereSoExcitedToSeeYouAgai}
        </h3>
      </div>
      <div
        className="flex flex-col items-start justify-center gap-[32px] text-left text-sm text-crimson"
        style={loginBoxesStyle}
      >
        <div className="w-[484px] relative h-[87px]" style={loginStyle}>
          {showFrameArticle && (
            <article
              className="absolute h-[31.03%] w-full top-[0%] right-[0%] bottom-[68.97%] left-[0%] text-left text-base text-dimgray-200 font-poppins"
              style={frameArticleStyle}
            >
              <div
                className="absolute top-[0px] left-[0px]"
                style={label2Style}
              >
                {label}

              </div>

              {!passwordHideSee && (
                <div
                  className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-400"
                  style={passwordHideSee2Style}
                >
                  <img
                    className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/icon.svg"
                    style={icon2Style}
                  />
                  <div
                    className="absolute top-[0px] right-[0px]"
                    style={hide2Style}
                  >
                    {hide}
                  </div>
                </div>
              )}
            </article>
          )}
          {showTextField && (
            <div>
              <input
                className="[outline:none] bg-[transparent] absolute h-[64.37%] w-full top-[35.63%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border overflow-hidden border-[1px] border-solid border-dimgray-500"
                type="text"
                style={textField2Style}
              />
            </div>
          )}
          {!errorMessage1 && (
            <div
              className="absolute top-[104.6%] left-[0%] hidden"
              style={errorMessage2Style}
            >
              {errorMessage}
            </div>
          )}
          <div
            className="absolute h-[65.52%] w-[97.52%] top-[35.63%] left-[1.86%] text-base text-gray-1600 text-center inline-block"
            style={text3Style}
          >
            {text}
          </div>
        </div>
        <div className="w-[484px] relative h-[87px]" style={login1Style}>
          {frameArticleVisible && (
            <article
              className="absolute h-[31.03%] w-full top-[0%] right-[0%] bottom-[68.97%] left-[0%] text-left text-base text-dimgray-200 font-poppins"
              style={frameArticle1Style}
            >
              <div
                className="absolute top-[0px] left-[0px]"
                style={label3Style}
              >
                <p className="m-0" style={password4Style}>
                  {password}
                </p>
              </div>
              {!passwordHideSee1 && (
                <div
                  className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-400"
                  style={passwordHideSee3Style}
                >
                  {showIcon && (
                    <img
                      className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
                      alt=""
                      src="/icon.svg"
                      style={icon3Style}
                    />
                  )}
                  <div
                    className="absolute top-[0px] right-[0px]"
                    style={hide3Style}
                  >
                    {hide1}
                  </div>
                </div>
              )}
            </article>
          )}
          <input
            className="[outline:none] bg-[transparent] absolute h-[64.37%] w-full top-[35.63%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border overflow-hidden border-[1px] border-solid border-dimgray-500"
            type="text"
            style={textField3Style}
          />
          {!errorMessage3 && (
            <div
              className="absolute top-[104.6%] left-[0%] hidden"
              style={errorMessage3Style}
            >
              {errorMessage2}
            </div>
          )}
          {showText && (
            <div
              className="absolute h-[65.52%] w-[97.52%] top-[35.63%] left-[1.86%] text-base text-gray-1600 text-center inline-block"
              style={text4Style}
            >
              {text1}
            </div>
          )}
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base [text-decoration:underline] font-medium font-poppins text-gray-200 text-left inline-block"
          style={forgetYourPasswordStyle}
        >
          {forgetYourPassword}
        </button>
      </div>
      {showFrameButton && (
        <button
          className="cursor-pointer [border:none] p-0 bg-gray-200 w-[484px] relative rounded-13xl h-16 overflow-hidden shrink-0"
          style={frameButtonStyle}
          onClick={onFrameButtonClick}
        >
          <div
            className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_242px)] text-3xl font-medium font-poppins text-dimgray-200 text-center flex items-center justify-center w-[484px] h-16"
            style={logInStyle}
            onClick={onFrameButton1Click}
          >
            {logIn}
          </div>
        </button>
      )}
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base text-left inline-block"
        style={alreadyHaveAnContainer2Style}
        onClick={onAlreadyHaveAnClick}
      >
        {showDontHaveAn && (
          <span
            className="font-poppins text-dimgray-200"
            style={dontHaveAnStyle}
          >
            {dontHaveAnAcount}
          </span>
        )}
        <span
          className="[text-decoration:underline] font-medium font-poppins text-gray-200 whitespace-pre-wrap"
          style={signUp4Style}
        >
          {signUp}
        </span>
      </button>
    </div>
  );
};

export default LoginScreen1;
