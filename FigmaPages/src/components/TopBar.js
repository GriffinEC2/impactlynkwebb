import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Variant from "./Property1Variant7";
import SignInButtonTopBar from "./SignInButtonTopBar";

const TopBar2 = ({
  signIn,
  frameButtonGap,
  onFrameButtonClick,
  // onSignInButtonTopBarClick,
  onSignInButtonTopBar2Click,
  onSignInButtonTopBar3Click,
}) => {
  const topBar1Style = useMemo(() => {
    return {
      gap: frameButtonGap,
    };
  }, [frameButtonGap]);

  const navigate = useNavigate();

  const onSignInButtonTopBarClick = useCallback(() => {
    navigate("/manage-volunteers");
  }, [navigate]);

  return (
    <div
      className="w-[1280px] bg-seagreen shadow-[0px_10px_10px_rgba(0,_0,_0,_0.25)] h-[100px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[50px] px-10 box-border gap-[375px]"
      style={topBar1Style}
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[35px]"
        onClick={onFrameButtonClick}
      >
        <Property1Variant
          property1Variant2Position="relative"
          property1Variant2Border="none"
          property1Variant2Padding="0"
          property1Variant2BackgroundColor="transparent"
        />
        <div className="relative text-17xl font-poppins text-white text-left">
          ImpactLynk
        </div>
      </button>
      <div className="overflow-hidden flex flex-row items-center justify-center gap-[1px]">
        <SignInButtonTopBar
          signIn="Organize"
          propBorder="none"
          propBackgroundColor="transparent"
          propFontWeight="unset"
          propDisplay="inline-block"
        />
        <div className="w-px relative box-border h-[65px] border-r-[1px] border-solid border-gray-600" />
        <SignInButtonTopBar
          signIn="Manage"
          propBorder="none"
          propBackgroundColor="transparent"
          propFontWeight="unset"
          propDisplay="inline-block"
          onSignInButtonTopBarClick={onSignInButtonTopBarClick}
        />
        <div className="w-px relative box-border h-[65px] border-r-[1px] border-solid border-gray-600" />
        <SignInButtonTopBar
          signIn="About Us"
          propBorder="none"
          propBackgroundColor="transparent"
          propFontWeight="unset"
          propDisplay="inline-block"
          onSignInButtonTopBarClick={onSignInButtonTopBar2Click}
        />
        <div className="w-px relative box-border h-[65px] border-r-[1px] border-solid border-gray-600" />
        <SignInButtonTopBar
          signIn="Profile"
          propBorder="none"
          propBackgroundColor="transparent"
          propFontWeight="unset"
          propDisplay="inline-block"
          onSignInButtonTopBarClick={onSignInButtonTopBar3Click}
        />
      </div>
    </div>
  );
};

export default TopBar2;
