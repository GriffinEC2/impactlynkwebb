import { useMemo } from "react";

const LoginBoxes = ({
  label,
  password,
  hide,
  errorMessage,
  showPassword,
  passwordHideSee,
  showHide,
  loginBoxesAlignSelf,
  loginWidth,
  loginAlignSelf,
  textWidth,
  loginWidth1,
  loginAlignSelf1,
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
  errorMessageColor,
  errorMessageBorder,
  errorMessagePadding,
  errorMessageBackgroundColor,
  errorMessageWidth,
  errorMessageTextDecoration,
  errorMessageFontWeight,
  textWidth1,
  passwordHideSee1,
  showHide1,
  errorMessage11,
}) => {
  const loginBoxes1Style = useMemo(() => {
    return {
      alignSelf: loginBoxesAlignSelf,
    };
  }, [loginBoxesAlignSelf]);

  const login2Style = useMemo(() => {
    return {
      width: loginWidth,
      alignSelf: loginAlignSelf,
    };
  }, [loginWidth, loginAlignSelf]);

  const text5Style = useMemo(() => {
    return {
      width: textWidth,
    };
  }, [textWidth]);

  const login3Style = useMemo(() => {
    return {
      width: loginWidth1,
      alignSelf: loginAlignSelf1,
    };
  }, [loginWidth1, loginAlignSelf1]);

  const password5Style = useMemo(() => {
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

  const passwordHideSee4Style = useMemo(() => {
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

  const icon4Style = useMemo(() => {
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

  const hide4Style = useMemo(() => {
    return {
      top: hideTop,
      right: hideRight,
      fontSize: hideFontSize,
      color: hideColor,
      textAlign: hideTextAlign,
      left: hideLeft,
    };
  }, [hideTop, hideRight, hideFontSize, hideColor, hideTextAlign, hideLeft]);

  const textField4Style = useMemo(() => {
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

  const errorMessage4Style = useMemo(() => {
    return {
      position: errorMessagePosition,
      top: errorMessageTop,
      left: errorMessageLeft,
      color: errorMessageColor,
      border: errorMessageBorder,
      padding: errorMessagePadding,
      backgroundColor: errorMessageBackgroundColor,
      width: errorMessageWidth,
      textDecoration: errorMessageTextDecoration,
      fontWeight: errorMessageFontWeight,
    };
  }, [
    errorMessagePosition,
    errorMessageTop,
    errorMessageLeft,
    errorMessageColor,
    errorMessageBorder,
    errorMessagePadding,
    errorMessageBackgroundColor,
    errorMessageWidth,
    errorMessageTextDecoration,
    errorMessageFontWeight,
  ]);

  const text6Style = useMemo(() => {
    return {
      width: textWidth1,
    };
  }, [textWidth1]);

  return (
    <div
      className="max-w-full flex flex-col items-start justify-center gap-[32px] text-left text-sm text-crimson font-poppins"
      style={loginBoxes1Style}
    >
      <div className="w-[484px] relative h-[87px]" style={login2Style}>
        <article className="absolute h-[31.03%] w-full top-[0%] right-[0%] bottom-[68.97%] left-[0%] text-left text-base text-dimgray-200 font-poppins">
          <div className="absolute top-[0px] left-[0px]">{label}</div>
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
        <div
          className="absolute h-[65.52%] w-[97.52%] top-[35.63%] left-[1.86%] text-base text-gray-1600 text-center inline-block"
          style={text5Style}
        >
          Text
        </div>
      </div>
      <div className="w-[484px] relative h-[87px]" style={login3Style}>
        <article className="absolute h-[31.03%] w-full top-[0%] right-[0%] bottom-[68.97%] left-[0%] text-left text-base text-dimgray-200 font-poppins">
          <div className="absolute top-[0px] left-[0px]">
            {showPassword && (
              <p className="m-0" style={password5Style}>
                {password}
              </p>
            )}
          </div>
          {!passwordHideSee && (
            <div
              className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-400"
              style={passwordHideSee4Style}
            >
              <img
                className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
                alt=""
                src="/icon.svg"
                style={icon4Style}
              />
              {showHide && (
                <div
                  className="absolute top-[0px] right-[0px]"
                  style={hide4Style}
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
          style={textField4Style}
        />
        <div
          className="absolute top-[104.6%] left-[0%] hidden"
          style={errorMessage4Style}
        >
          {errorMessage}
        </div>
        <div
          className="absolute h-[65.52%] w-[97.52%] top-[35.63%] left-[1.86%] text-base text-gray-1600 text-center inline-block"
          style={text6Style}
        >
          Text
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base [text-decoration:underline] font-medium font-poppins text-gray-200 text-left inline-block">
        Forget your password?
      </button>
    </div>
  );
};

export default LoginBoxes;
