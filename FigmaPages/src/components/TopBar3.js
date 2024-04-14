import { useMemo } from "react";
import Logo from "./Logo";
import SignInButtonTopBar1 from "./SignInButtonTopBar1";

const TopBar3 = ({
  frameButtonBoxShadow,
  onFrameButtonClick,
  onSignInButtonTopBarClick,
  onSignInButtonTopBar1Click,
  onSignInButtonTopBar2Click,
}) => {
  const topBar2Style = useMemo(() => {
    return {
      boxShadow: frameButtonBoxShadow,
    };
  }, [frameButtonBoxShadow]);

  return (
    <div
      className="w-[1280px] bg-seagreen shadow-[0px_100px_11.1px_rgba(0,_0,_0,_0.25)] h-[100px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[50px] px-10 box-border gap-[450px]"
      style={topBar2Style}
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[35px]"
        onClick={onFrameButtonClick}
      >
        <Logo
          rectangleDivBorder="none"
          rectangleDivPadding="0"
          rectangleDivBackgroundColor="transparent"
          rectangleDivWidth="43px"
          rectangleDivHeight="43px"
          rectangleDivBoxShadow="unset"
          rectangleDivHeight1="102.33%"
          rectangleDivWidth1="102.33%"
          rectangleDivTop="20.93%"
          rectangleDivRight="-23.26%"
          rectangleDivBottom="-23.26%"
          rectangleDivLeft="20.93%"
          rectangleDivBorder1="10px solid #21462e"
          propHeight="102.33%"
          propWidth="102.33%"
          propTop="-11.63%"
          propRight="9.3%"
          propBottom="9.3%"
          propLeft="-11.63%"
          propBorder="10px solid #56c16d"
          propHeight1="23.26%"
          propWidth1="23.26%"
          propTop1="20.93%"
          propRight1="9.3%"
          propBottom1="55.81%"
          propLeft1="67.44%"
        />
        <div className="relative text-17xl font-poppins text-white text-left">
          ImpactLynk
        </div>
      </button>
      <div className="overflow-hidden flex flex-row items-center justify-center gap-[1px]">
        <SignInButtonTopBar1
          signIn="Sign in"
          propBorder="none"
          propBackgroundColor="transparent"
          propFontWeight="unset"
          propDisplay="inline-block"
          onSignInButtonTopBar1Click={onSignInButtonTopBarClick}
        />
        <div className="w-px relative box-border h-[65px] border-r-[1px] border-solid border-gray-600" />
        <SignInButtonTopBar1
          signIn="Volunteer"
          propBorder="none"
          propBackgroundColor="transparent"
          propFontWeight="unset"
          propDisplay="inline-block"
          onSignInButtonTopBar1Click={onSignInButtonTopBar1Click}
        />
        <div className="w-px relative box-border h-[65px] border-r-[1px] border-solid border-gray-600" />
        <SignInButtonTopBar1
          signIn="About Us"
          propBorder="none"
          propBackgroundColor="transparent"
          propFontWeight="unset"
          propDisplay="inline-block"
        />
      </div>
    </div>
  );
};

export default TopBar3;
