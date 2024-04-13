import { useMemo } from "react";

const Property1BottomBar = ({
  property1BottomBarBoxShadow,
  property1BottomBarPosition,
  property1BottomBarTop,
  property1BottomBarLeft,
  frameButtonBorder,
  frameButtonPadding,
  frameButtonBackgroundColor,
  logoBorder,
  logoPadding,
  logoBackgroundColor,
  impactLynkFontWeight,
  impactLynkDisplay,
  frameButtonBorder1,
  frameButtonPadding1,
  frameButtonBackgroundColor1,
  signInDisplay,
  property1BottomBarWidth,
  signInButtonTopBarBorder,
  signInButtonTopBarBackgroundColor,
  onFrameButton2Click,
  onSignInButtonTopBarClick,
}) => {
  const property1BottomBarStyle = useMemo(() => {
    return {
      boxShadow: property1BottomBarBoxShadow,
      position: property1BottomBarPosition,
      top: property1BottomBarTop,
      left: property1BottomBarLeft,
      width: property1BottomBarWidth,
    };
  }, [
    property1BottomBarBoxShadow,
    property1BottomBarPosition,
    property1BottomBarTop,
    property1BottomBarLeft,
    property1BottomBarWidth,
  ]);

  const frameButton2Style = useMemo(() => {
    return {
      border: frameButtonBorder,
      padding: frameButtonPadding,
      backgroundColor: frameButtonBackgroundColor,
    };
  }, [frameButtonBorder, frameButtonPadding, frameButtonBackgroundColor]);

  const logo1Style = useMemo(() => {
    return {
      border: logoBorder,
      padding: logoPadding,
      backgroundColor: logoBackgroundColor,
    };
  }, [logoBorder, logoPadding, logoBackgroundColor]);

  const impactLynk4Style = useMemo(() => {
    return {
      fontWeight: impactLynkFontWeight,
      display: impactLynkDisplay,
    };
  }, [impactLynkFontWeight, impactLynkDisplay]);

  const frameButton3Style = useMemo(() => {
    return {
      border: frameButtonBorder1,
      padding: frameButtonPadding1,
      backgroundColor: frameButtonBackgroundColor1,
    };
  }, [frameButtonBorder1, frameButtonPadding1, frameButtonBackgroundColor1]);

  const signIn8Style = useMemo(() => {
    return {
      display: signInDisplay,
    };
  }, [signInDisplay]);

  const signInButtonTopBarStyle = useMemo(() => {
    return {
      border: signInButtonTopBarBorder,
      backgroundColor: signInButtonTopBarBackgroundColor,
    };
  }, [signInButtonTopBarBorder, signInButtonTopBarBackgroundColor]);

  return (
    <div
      className="w-[1280px] bg-seagreen max-w-full h-[100px] overflow-hidden flex flex-row items-center justify-start py-[50px] px-10 box-border gap-[450px]"
      style={property1BottomBarStyle}
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[35px]"
        style={frameButton2Style}
      >
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[43px] relative h-[43px]"
          style={logo1Style}
        >
          <div className="absolute h-[102.33%] w-[102.33%] top-[20.93%] right-[-23.26%] bottom-[-23.26%] left-[20.93%] rounded-8xs box-border border-[10px] border-solid border-darkslategray-200" />
          <div className="absolute h-[102.33%] w-[102.33%] top-[-11.63%] right-[9.3%] bottom-[9.3%] left-[-11.63%] rounded-8xs box-border border-[10px] border-solid border-mediumseagreen" />
          <div className="absolute h-[23.26%] w-[23.26%] top-[20.93%] right-[9.3%] bottom-[55.81%] left-[67.44%] bg-darkslategray-200" />
        </button>
        <div
          className="relative text-17xl font-poppins text-white text-left"
          style={impactLynk4Style}
        >
          ImpactLynk
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-row items-center justify-center"
        style={frameButton3Style}
        onClick={onFrameButton2Click}
      >
        <div
          className="rounded-61xl shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center py-0 px-[30px]"
          style={signInButtonTopBarStyle}
          onClick={onSignInButtonTopBarClick}
        >
          <b
            className="relative text-xl font-poppins text-white text-left"
            style={signIn8Style}
          >
            Any Questions?
          </b>
        </div>
      </button>
    </div>
  );
};

export default Property1BottomBar;
