import { useMemo } from "react";

const SignUpBoxes = ({
  label,
  label1,
  password,
  hide,
  errorMessage,
  text,
  oneLowercaseCharacter,
  oneLowercaseCharacter1,
  oneLowercaseCharacter2,
  showPassword,
  passwordHideSee,
  showHide,
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
  passwordHideSee1,
  showHide1,
  errorMessage11,
}) => {
  const signUpBoxes1Style = useMemo(() => {
    return {
      width: signUpBoxesWidth,
    };
  }, [signUpBoxesWidth]);

  const label1Style = useMemo(() => {
    return {
      margin: labelMargin,
      fontWeight: labelFontWeight,
    };
  }, [labelMargin, labelFontWeight]);

  const password2Style = useMemo(() => {
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

  const passwordHideSee1Style = useMemo(() => {
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

  const icon1Style = useMemo(() => {
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

  const hide1Style = useMemo(() => {
    return {
      top: hideTop,
      right: hideRight,
      fontSize: hideFontSize,
      color: hideColor,
      textAlign: hideTextAlign,
      left: hideLeft,
    };
  }, [hideTop, hideRight, hideFontSize, hideColor, hideTextAlign, hideLeft]);

  const textField1Style = useMemo(() => {
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

  const errorMessage1Style = useMemo(() => {
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

  const text2Style = useMemo(() => {
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

  const password3Style = useMemo(() => {
    return {
      width: passwordWidth1,
    };
  }, [passwordWidth1]);

  const frameDiv6Style = useMemo(() => {
    return {
      gap: frameDivGap,
      padding: frameDivPadding,
    };
  }, [frameDivGap, frameDivPadding]);

  const frameDiv7Style = useMemo(() => {
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

  const bulletPoint4Style = useMemo(() => {
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

  const ellipseDiv4Style = useMemo(() => {
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

  const oneLowercaseCharacter4Style = useMemo(() => {
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

  const bulletPoint5Style = useMemo(() => {
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

  const ellipseDiv5Style = useMemo(() => {
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

  const oneLowercaseCharacter5Style = useMemo(() => {
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

  const frameDiv8Style = useMemo(() => {
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

  const bulletPoint6Style = useMemo(() => {
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

  const ellipseDiv6Style = useMemo(() => {
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

  const oneLowercaseCharacter6Style = useMemo(() => {
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

  const bulletPoint7Style = useMemo(() => {
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

  return (
    <div
      className="w-[515px] max-w-full overflow-hidden flex flex-col items-start justify-center p-2.5 box-border gap-[17px] text-left text-sm text-crimson font-poppins"
      style={signUpBoxes1Style}
    >
      <div className="w-[484px] relative h-[87px]">
        <article className="absolute h-[31.03%] w-full top-[0%] right-[0%] bottom-[68.97%] left-[0%] text-left text-base text-dimgray-200 font-poppins">
          <div className="absolute top-[0px] left-[0px]" style={label1Style}>
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
              <p className="m-0" style={password2Style}>
                {password}
              </p>
            )}
          </div>
          {!passwordHideSee && (
            <div
              className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-400"
              style={passwordHideSee1Style}
            >
              <img
                className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
                alt=""
                src="/icon.svg"
                style={icon1Style}
              />
              {showHide && (
                <div
                  className="absolute top-[0px] right-[0px]"
                  style={hide1Style}
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
          style={textField1Style}
        />
        <div
          className="absolute top-[104.6%] left-[0%] hidden"
          style={errorMessage1Style}
        >
          {errorMessage}
        </div>
        <div
          className="absolute h-[65.52%] w-[97.52%] top-[35.63%] left-[1.86%] text-base text-gray-1600 text-center inline-block"
          style={text2Style}
        >
          {text}
        </div>
      </div>
      <article
        className="w-[484px] flex flex-col items-start justify-start text-left text-sm text-dimgray-300 font-poppins"
        style={password3Style}
      >
        <div
          className="flex flex-row items-start justify-start gap-[18px]"
          style={frameDiv6Style}
        >
          <div
            className="flex flex-col items-start justify-start"
            style={frameDiv7Style}
          >
            <div
              className="flex flex-row items-center justify-center py-2 pr-2 pl-0 gap-[8px]"
              style={bulletPoint4Style}
            >
              <div
                className="w-2 relative rounded-[50%] bg-dimgray-300 h-2"
                style={ellipseDiv4Style}
              />
              <div className="relative" style={oneLowercaseCharacter4Style}>
                {oneLowercaseCharacter}
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-center py-2 pr-2 pl-0 gap-[8px]"
              style={bulletPoint5Style}
            >
              <div
                className="w-2 relative rounded-[50%] bg-dimgray-300 h-2"
                style={ellipseDiv5Style}
              />
              <div className="relative" style={oneLowercaseCharacter5Style}>
                {oneLowercaseCharacter1}
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-start"
            style={frameDiv8Style}
          >
            <div
              className="flex flex-row items-center justify-center py-2 pr-2 pl-0 gap-[8px]"
              style={bulletPoint6Style}
            >
              <div
                className="w-2 relative rounded-[50%] bg-dimgray-300 h-2"
                style={ellipseDiv6Style}
              />
              <div className="relative" style={oneLowercaseCharacter6Style}>
                {oneLowercaseCharacter2}
              </div>
            </div>
            <div
              className="flex flex-row items-center justify-center py-2 pr-2 pl-0 gap-[8px]"
              style={bulletPoint7Style}
            >
              <div className="w-2 relative rounded-[50%] bg-dimgray-300 h-2" />
              <div className="relative">One number</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SignUpBoxes;
