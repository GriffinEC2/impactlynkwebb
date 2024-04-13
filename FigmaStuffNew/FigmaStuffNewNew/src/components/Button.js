import { useMemo } from "react";

const Button = ({
  icons,
  signUp,
  buttonWidth,
  buttonBorderRadius,
  buttonBackgroundColor,
  buttonBorder,
  buttonPadding,
  buttonPosition,
  frameDivLeft,
  signUpDisplay,
  signUpColor,
  onButtonClick,
}) => {
  const button2Style = useMemo(() => {
    return {
      width: buttonWidth,
      borderRadius: buttonBorderRadius,
      backgroundColor: buttonBackgroundColor,
      border: buttonBorder,
      padding: buttonPadding,
      position: buttonPosition,
    };
  }, [
    buttonWidth,
    buttonBorderRadius,
    buttonBackgroundColor,
    buttonBorder,
    buttonPadding,
    buttonPosition,
  ]);

  const frameDiv9Style = useMemo(() => {
    return {
      left: frameDivLeft,
    };
  }, [frameDivLeft]);

  const signUp3Style = useMemo(() => {
    return {
      display: signUpDisplay,
      color: signUpColor,
    };
  }, [signUpDisplay, signUpColor]);

  return (
    <div
      className="w-[168px] rounded-2xl bg-gray-200 h-16 overflow-hidden text-center text-3xl text-white font-poppins"
      style={button2Style}
      onClick={onButtonClick}
    >
      <div
        className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_42px)] flex flex-row items-center justify-center gap-[8px]"
        style={frameDiv9Style}
      >
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src={icons}
        />
        <div className="relative font-medium" style={signUp3Style}>
          {signUp}
        </div>
      </div>
    </div>
  );
};

export default Button;
