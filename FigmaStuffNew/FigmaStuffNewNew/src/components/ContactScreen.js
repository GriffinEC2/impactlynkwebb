import { useMemo } from "react";

const ContactScreen = ({
  haveQuestions,
  contactUs,
  label,
  hide,
  errorMessage,
  text,
  typeYourMessageHere,
  send,
  showFrameDiv,
  frameDivVisible,
  showFrameArticle,
  passwordHideSee,
  showHide,
  errorMessage1,
  showFrameButton,
  contactScreenPosition,
  contactScreenTop,
  contactScreenLeft,
  haveQuestionsContactContaFontWeight,
  haveQuestionsContactContaFontFamily,
  haveQuestionsFontFamily,
  haveQuestionsOverflow,
  haveQuestionsDisplay,
  haveQuestionsFlexDirection,
  haveQuestionsPadding,
  contactUsFontWeight,
  contactUsFontFamily,
  contactUsWidth,
  contactUsPosition,
  contactUsHeight,
  frameDivOverflow,
  frameDivFlexDirection,
  frameDivPadding,
  frameDivPosition,
  frameDivHeight,
  frameDivWidth,
  frameDivTop,
  frameDivRight,
  frameDivBottom,
  frameDivLeft,
  loginWidth,
  loginPosition,
  loginHeight,
  loginTop,
  loginLeft,
  loginFontSize,
  loginFontFamily,
  loginColor,
  loginTextAlign,
  loginDisplay,
  frameArticleHeight,
  frameArticleWidth,
  frameArticleTop,
  frameArticleRight,
  frameArticleBottom,
  frameArticleLeft,
  labelLeft,
  labelFontSize,
  labelFontFamily,
  labelColor,
  labelTextAlign,
  labelDisplay,
  labelRight,
  labelWidth,
  labelHeight,
  labelOverflow,
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
  errorMessageAlignSelf,
  errorMessageOverflow,
  errorMessageFlexDirection,
  errorMessagePadding,
  textPosition,
  textHeight,
  textWidth,
  textTop,
  textLeft,
  textColor,
  textTextAlign,
  frameDivAlignSelf,
  frameDivOverflow1,
  frameDivDisplay,
  frameDivFlexDirection1,
  frameDivPadding1,
  frameDivMargin,
  labelWidth1,
  labelPosition,
  labelFontSize1,
  labelFontFamily1,
  labelColor1,
  labelTextAlign1,
  labelDisplay1,
  labelHeight1,
  typeYourMessageMargin,
  typeYourMessageBorder,
  typeYourMessageBackgroundColor,
  typeYourMessageOutline,
  typeYourMessageWidth,
  typeYourMessageBorderRadius,
  typeYourMessageHeight,
  typeYourMessageOverflow,
  typeYourMessageDisplay,
  typeYourMessageFlexDirection,
  typeYourMessagePadding,
  textFieldBorder1,
  textFieldBackgroundColor1,
  textFieldOutline1,
  textFieldWidth1,
  textFieldBorderRadius1,
  textFieldHeight1,
  textFieldOverflow1,
  textFieldFlexDirection,
  textFieldPadding,
  textFieldPosition,
  textFieldTop,
  textFieldLeft1,
  textFieldFontSize1,
  textFieldFontWeight,
  textFieldFontFamily1,
  textFieldColor1,
  textFieldTextAlign1,
  frameButtonBorder,
  frameButtonPadding,
  frameButtonBackgroundColor,
  frameButtonWidth,
  frameButtonBorderRadius,
  frameButtonHeight,
  frameButtonOverflow,
  frameButtonFontSize,
  frameButtonFontFamily,
  frameButtonTextAlign,
  sendColor,
  sendPosition,
  sendTop,
  sendLeft,
  sendFontSize,
  sendFontWeight,
  sendFontFamily,
  sendTextAlign,
  sendDisplay,
  sendWidth,
  sendHeight,
  orEmailUsContainerBorder,
  orEmailUsContainerPadding,
  orEmailUsContainerBackgroundColor,
  orEmailUsContainerWidth,
  orEmailUsContainerPosition,
  orEmailUsContainerFontSize,
  orEmailUsContainerFontFamily,
  orEmailUsContainerTextAlign,
  orEmailUsContainerDisplay,
  orEmailUsContainerHeight,
  orEmailUsContainerColor,
  onFrameContainer3Click,
  passwordHideSee1,
  showHide1,
  errorMessage11,
}) => {
  const contactScreenStyle = useMemo(() => {
    return {
      position: contactScreenPosition,
      top: contactScreenTop,
      left: contactScreenLeft,
    };
  }, [contactScreenPosition, contactScreenTop, contactScreenLeft]);

  const haveQuestionsContactContainerStyle = useMemo(() => {
    return {
      fontWeight: haveQuestionsContactContaFontWeight,
      fontFamily: haveQuestionsContactContaFontFamily,
    };
  }, [
    haveQuestionsContactContaFontWeight,
    haveQuestionsContactContaFontFamily,
  ]);

  const haveQuestionsStyle = useMemo(() => {
    return {
      fontFamily: haveQuestionsFontFamily,
      overflow: haveQuestionsOverflow,
      display: haveQuestionsDisplay,
      flexDirection: haveQuestionsFlexDirection,
      padding: haveQuestionsPadding,
    };
  }, [
    haveQuestionsFontFamily,
    haveQuestionsOverflow,
    haveQuestionsDisplay,
    haveQuestionsFlexDirection,
    haveQuestionsPadding,
  ]);

  const contactUsStyle = useMemo(() => {
    return {
      fontWeight: contactUsFontWeight,
      fontFamily: contactUsFontFamily,
      width: contactUsWidth,
      position: contactUsPosition,
      height: contactUsHeight,
    };
  }, [
    contactUsFontWeight,
    contactUsFontFamily,
    contactUsWidth,
    contactUsPosition,
    contactUsHeight,
  ]);

  const frameDiv11Style = useMemo(() => {
    return {
      overflow: frameDivOverflow,
      flexDirection: frameDivFlexDirection,
      padding: frameDivPadding,
      position: frameDivPosition,
      height: frameDivHeight,
      width: frameDivWidth,
      top: frameDivTop,
      right: frameDivRight,
      bottom: frameDivBottom,
      left: frameDivLeft,
    };
  }, [
    frameDivOverflow,
    frameDivFlexDirection,
    frameDivPadding,
    frameDivPosition,
    frameDivHeight,
    frameDivWidth,
    frameDivTop,
    frameDivRight,
    frameDivBottom,
    frameDivLeft,
  ]);

  const login4Style = useMemo(() => {
    return {
      width: loginWidth,
      position: loginPosition,
      height: loginHeight,
      top: loginTop,
      left: loginLeft,
      fontSize: loginFontSize,
      fontFamily: loginFontFamily,
      color: loginColor,
      textAlign: loginTextAlign,
      display: loginDisplay,
    };
  }, [
    loginWidth,
    loginPosition,
    loginHeight,
    loginTop,
    loginLeft,
    loginFontSize,
    loginFontFamily,
    loginColor,
    loginTextAlign,
    loginDisplay,
  ]);

  const frameArticle2Style = useMemo(() => {
    return {
      height: frameArticleHeight,
      width: frameArticleWidth,
      top: frameArticleTop,
      right: frameArticleRight,
      bottom: frameArticleBottom,
      left: frameArticleLeft,
    };
  }, [
    frameArticleHeight,
    frameArticleWidth,
    frameArticleTop,
    frameArticleRight,
    frameArticleBottom,
    frameArticleLeft,
  ]);

  const label4Style = useMemo(() => {
    return {
      left: labelLeft,
      fontSize: labelFontSize,
      fontFamily: labelFontFamily,
      color: labelColor,
      textAlign: labelTextAlign,
      display: labelDisplay,
      right: labelRight,
      width: labelWidth,
      height: labelHeight,
      overflow: labelOverflow,
    };
  }, [
    labelLeft,
    labelFontSize,
    labelFontFamily,
    labelColor,
    labelTextAlign,
    labelDisplay,
    labelRight,
    labelWidth,
    labelHeight,
    labelOverflow,
  ]);

  const passwordHideSee5Style = useMemo(() => {
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

  const icon5Style = useMemo(() => {
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

  const hide5Style = useMemo(() => {
    return {
      top: hideTop,
      right: hideRight,
      fontSize: hideFontSize,
      color: hideColor,
      textAlign: hideTextAlign,
      left: hideLeft,
    };
  }, [hideTop, hideRight, hideFontSize, hideColor, hideTextAlign, hideLeft]);

  const textField5Style = useMemo(() => {
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

  const errorMessage5Style = useMemo(() => {
    return {
      position: errorMessagePosition,
      top: errorMessageTop,
      left: errorMessageLeft,
      fontSize: errorMessageFontSize,
      fontFamily: errorMessageFontFamily,
      color: errorMessageColor,
      textAlign: errorMessageTextAlign,
      alignSelf: errorMessageAlignSelf,
      overflow: errorMessageOverflow,
      flexDirection: errorMessageFlexDirection,
      padding: errorMessagePadding,
    };
  }, [
    errorMessagePosition,
    errorMessageTop,
    errorMessageLeft,
    errorMessageFontSize,
    errorMessageFontFamily,
    errorMessageColor,
    errorMessageTextAlign,
    errorMessageAlignSelf,
    errorMessageOverflow,
    errorMessageFlexDirection,
    errorMessagePadding,
  ]);

  const text7Style = useMemo(() => {
    return {
      position: textPosition,
      height: textHeight,
      width: textWidth,
      top: textTop,
      left: textLeft,
      color: textColor,
      textAlign: textTextAlign,
    };
  }, [
    textPosition,
    textHeight,
    textWidth,
    textTop,
    textLeft,
    textColor,
    textTextAlign,
  ]);

  const frameDiv12Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      overflow: frameDivOverflow1,
      display: frameDivDisplay,
      flexDirection: frameDivFlexDirection1,
      padding: frameDivPadding1,
      margin: frameDivMargin,
    };
  }, [
    frameDivAlignSelf,
    frameDivOverflow1,
    frameDivDisplay,
    frameDivFlexDirection1,
    frameDivPadding1,
    frameDivMargin,
  ]);

  const label5Style = useMemo(() => {
    return {
      width: labelWidth1,
      position: labelPosition,
      fontSize: labelFontSize1,
      fontFamily: labelFontFamily1,
      color: labelColor1,
      textAlign: labelTextAlign1,
      display: labelDisplay1,
      height: labelHeight1,
    };
  }, [
    labelWidth1,
    labelPosition,
    labelFontSize1,
    labelFontFamily1,
    labelColor1,
    labelTextAlign1,
    labelDisplay1,
    labelHeight1,
  ]);

  const typeYourMessageStyle = useMemo(() => {
    return {
      margin: typeYourMessageMargin,
      border: typeYourMessageBorder,
      backgroundColor: typeYourMessageBackgroundColor,
      outline: typeYourMessageOutline,
      width: typeYourMessageWidth,
      borderRadius: typeYourMessageBorderRadius,
      height: typeYourMessageHeight,
      overflow: typeYourMessageOverflow,
      display: typeYourMessageDisplay,
      flexDirection: typeYourMessageFlexDirection,
      padding: typeYourMessagePadding,
    };
  }, [
    typeYourMessageMargin,
    typeYourMessageBorder,
    typeYourMessageBackgroundColor,
    typeYourMessageOutline,
    typeYourMessageWidth,
    typeYourMessageBorderRadius,
    typeYourMessageHeight,
    typeYourMessageOverflow,
    typeYourMessageDisplay,
    typeYourMessageFlexDirection,
    typeYourMessagePadding,
  ]);

  const textField6Style = useMemo(() => {
    return {
      border: textFieldBorder1,
      backgroundColor: textFieldBackgroundColor1,
      outline: textFieldOutline1,
      width: textFieldWidth1,
      borderRadius: textFieldBorderRadius1,
      height: textFieldHeight1,
      overflow: textFieldOverflow1,
      flexDirection: textFieldFlexDirection,
      padding: textFieldPadding,
      position: textFieldPosition,
      top: textFieldTop,
      left: textFieldLeft1,
      fontSize: textFieldFontSize1,
      fontWeight: textFieldFontWeight,
      fontFamily: textFieldFontFamily1,
      color: textFieldColor1,
      textAlign: textFieldTextAlign1,
    };
  }, [
    textFieldBorder1,
    textFieldBackgroundColor1,
    textFieldOutline1,
    textFieldWidth1,
    textFieldBorderRadius1,
    textFieldHeight1,
    textFieldOverflow1,
    textFieldFlexDirection,
    textFieldPadding,
    textFieldPosition,
    textFieldTop,
    textFieldLeft1,
    textFieldFontSize1,
    textFieldFontWeight,
    textFieldFontFamily1,
    textFieldColor1,
    textFieldTextAlign1,
  ]);

  const frameButton1Style = useMemo(() => {
    return {
      border: frameButtonBorder,
      padding: frameButtonPadding,
      backgroundColor: frameButtonBackgroundColor,
      width: frameButtonWidth,
      borderRadius: frameButtonBorderRadius,
      height: frameButtonHeight,
      overflow: frameButtonOverflow,
      fontSize: frameButtonFontSize,
      fontFamily: frameButtonFontFamily,
      textAlign: frameButtonTextAlign,
    };
  }, [
    frameButtonBorder,
    frameButtonPadding,
    frameButtonBackgroundColor,
    frameButtonWidth,
    frameButtonBorderRadius,
    frameButtonHeight,
    frameButtonOverflow,
    frameButtonFontSize,
    frameButtonFontFamily,
    frameButtonTextAlign,
  ]);

  const sendStyle = useMemo(() => {
    return {
      color: sendColor,
      position: sendPosition,
      top: sendTop,
      left: sendLeft,
      fontSize: sendFontSize,
      fontWeight: sendFontWeight,
      fontFamily: sendFontFamily,
      textAlign: sendTextAlign,
      display: sendDisplay,
      width: sendWidth,
      height: sendHeight,
    };
  }, [
    sendColor,
    sendPosition,
    sendTop,
    sendLeft,
    sendFontSize,
    sendFontWeight,
    sendFontFamily,
    sendTextAlign,
    sendDisplay,
    sendWidth,
    sendHeight,
  ]);

  const orEmailUsContainerStyle = useMemo(() => {
    return {
      border: orEmailUsContainerBorder,
      padding: orEmailUsContainerPadding,
      backgroundColor: orEmailUsContainerBackgroundColor,
      width: orEmailUsContainerWidth,
      position: orEmailUsContainerPosition,
      fontSize: orEmailUsContainerFontSize,
      fontFamily: orEmailUsContainerFontFamily,
      textAlign: orEmailUsContainerTextAlign,
      display: orEmailUsContainerDisplay,
      height: orEmailUsContainerHeight,
      color: orEmailUsContainerColor,
    };
  }, [
    orEmailUsContainerBorder,
    orEmailUsContainerPadding,
    orEmailUsContainerBackgroundColor,
    orEmailUsContainerWidth,
    orEmailUsContainerPosition,
    orEmailUsContainerFontSize,
    orEmailUsContainerFontFamily,
    orEmailUsContainerTextAlign,
    orEmailUsContainerDisplay,
    orEmailUsContainerHeight,
    orEmailUsContainerColor,
  ]);

  return (
    <div
      className="bg-gray-1600 max-w-full overflow-hidden flex flex-col items-center justify-start gap-[14px] text-left text-17xl text-black font-poppins"
      style={contactScreenStyle}
    >
      {showFrameDiv && (
        <div className="bg-gray-1600 overflow-hidden flex flex-row items-center justify-center py-[27px] px-[75px] text-center font-inter">
          <h1
            className="m-0 w-[333px] relative text-inherit inline-block h-[95px] shrink-0 font-inherit"
            style={haveQuestionsContactContainerStyle}
          >
            <span style={haveQuestionsStyle}>{haveQuestions}</span>
            <span className="font-semibold" style={contactUsStyle}>
              {contactUs}
            </span>
          </h1>
        </div>
      )}
      {frameDivVisible && (
        <div
          className="overflow-hidden flex flex-col items-center justify-start py-0.5 px-1.5 text-sm text-crimson"
          style={frameDiv11Style}
        >
          <div className="w-[484px] relative h-[87px]" style={login4Style}>
            {showFrameArticle && (
              <article
                className="absolute h-[31.03%] w-full top-[0%] right-[0%] bottom-[68.97%] left-[0%] text-left text-base text-dimgray-200 font-poppins"
                style={frameArticle2Style}
              >
                <div
                  className="absolute top-[0px] left-[0px]"
                  style={label4Style}
                >
                  {label}
                </div>
                {!passwordHideSee && (
                  <div
                    className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-400"
                    style={passwordHideSee5Style}
                  >
                    <img
                      className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
                      alt=""
                      src="/icon.svg"
                      style={icon5Style}
                    />
                    {showHide && (
                      <div
                        className="absolute top-[0px] right-[0px]"
                        style={hide5Style}
                      >
                        {hide}
                      </div>
                    )}
                  </div>
                )}
              </article>
            )}
            <input
              className="[outline:none] bg-[transparent] absolute h-[64.37%] w-full top-[35.63%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border overflow-hidden border-[1px] border-solid border-dimgray-500"
              type="text"
              style={textField5Style}
            />
            {!errorMessage1 && (
              <div
                className="absolute top-[104.6%] left-[0%] hidden"
                style={errorMessage5Style}
              >
                {errorMessage}
              </div>
            )}
            <div
              className="absolute h-[65.52%] w-[97.52%] top-[35.63%] left-[1.86%] text-base text-gray-1600 text-center inline-block"
              style={text7Style}
            >
              {text}
            </div>
          </div>
        </div>
      )}
      <div
        className="self-stretch overflow-hidden flex flex-col items-center justify-center py-0.5 px-0 text-base text-dimgray-200"
        style={frameDiv12Style}
      >
        <div
          className="w-[484px] relative inline-block h-[27px] shrink-0"
          style={label5Style}
        >
          <p className="m-0" style={typeYourMessageStyle}>
            {typeYourMessageHere}
          </p>
        </div>
        <textarea
          className="bg-[transparent] [outline:none] w-[484px] rounded-xl box-border h-11 overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 border-[1px] border-solid border-dimgray-500"
          style={textField6Style}
        />
      </div>
      {showFrameButton && (
        <button
          className="cursor-pointer [border:none] p-0 bg-gray-200 w-[197px] relative rounded-13xl h-16 overflow-hidden shrink-0"
          style={frameButton1Style}
          onClick={onFrameContainer3Click}
        >
          <div
            className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_98.5px)] text-3xl font-medium font-poppins text-dimgray-200 text-center flex items-center justify-center w-[197px] h-16"
            style={sendStyle}
          >
            {send}
          </div>
        </button>
      )}
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[337px] relative text-base font-poppins text-left inline-block h-8 shrink-0"
        style={orEmailUsContainerStyle}
      >
        <span className="text-gray-1100">{`Or email us at `}</span>
        <span className="text-darkslategray-400">
          thingemail@willbelink.com
        </span>
      </button>
    </div>
  );
};

export default ContactScreen;
