import { useMemo } from "react";

const Property1Admin = ({
  signIn,
  signIn1,
  signIn2,
  property1AdminWidth,
  property1AdminHeight,
  property1AdminGap,
  property1AdminBorder,
  impactLynkFontWeight,
  signInDisplay,
  signInDisplay1,
  signInDisplay2,
  signInDisplay3,
  onSignInButtonTopBarClick,
  onSignInButtonTopBar1Click,
  onSignInButtonTopBar2Click,
  onSignInButtonTopBar3Click,
}) => {
  const property1AdminStyle = useMemo(() => {
    return {
      width: property1AdminWidth,
      height: property1AdminHeight,
      gap: property1AdminGap,
      border: property1AdminBorder,
    };
  }, [
    property1AdminWidth,
    property1AdminHeight,
    property1AdminGap,
    property1AdminBorder,
  ]);

  const impactLynk1Style = useMemo(() => {
    return {
      fontWeight: impactLynkFontWeight,
    };
  }, [impactLynkFontWeight]);

  const signIn4Style = useMemo(() => {
    return {
      display: signInDisplay,
    };
  }, [signInDisplay]);

  const signIn5Style = useMemo(() => {
    return {
      display: signInDisplay1,
    };
  }, [signInDisplay1]);

  const signIn6Style = useMemo(() => {
    return {
      display: signInDisplay2,
    };
  }, [signInDisplay2]);

  const signIn7Style = useMemo(() => {
    return {
      display: signInDisplay3,
    };
  }, [signInDisplay3]);

  return (
    <div
      className="w-[1280px] bg-seagreen max-w-full h-[100px] overflow-hidden flex flex-row items-center justify-start py-[50px] px-10 box-border gap-[375px]"
      style={property1AdminStyle}
    >
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[35px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[43px] relative h-[43px]">
          <div className="absolute h-[102.33%] w-[102.33%] top-[20.93%] right-[-23.26%] bottom-[-23.26%] left-[20.93%] rounded-8xs box-border border-[10px] border-solid border-darkslategray-200" />
          <div className="absolute h-[102.33%] w-[102.33%] top-[-11.63%] right-[9.3%] bottom-[9.3%] left-[-11.63%] rounded-8xs box-border border-[10px] border-solid border-mediumseagreen" />
          <div className="absolute h-[23.26%] w-[23.26%] top-[20.93%] right-[9.3%] bottom-[55.81%] left-[67.44%] bg-darkslategray-200" />
        </button>
        <div
          className="relative text-17xl font-poppins text-white text-left"
          style={impactLynk1Style}
        >
          ImpactLynk
        </div>
      </button>
      <div className="overflow-hidden flex flex-row items-center justify-center gap-[1px]">
        <button
          className="cursor-pointer [border:none] py-0 px-[30px] bg-[transparent] rounded-61xl shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center"
          onClick={onSignInButtonTopBarClick}
        >
          <div
            className="relative text-xl font-poppins text-white text-left"
            style={signIn4Style}
          >
            {signIn}
          </div>
        </button>
        <div className="w-px relative box-border h-[65px] border-r-[1px] border-solid border-gray-600" />
        <button
          className="cursor-pointer [border:none] py-0 px-[30px] bg-[transparent] rounded-61xl shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center"
          onClick={onSignInButtonTopBar1Click}
        >
          <div
            className="relative text-xl font-poppins text-white text-left"
            style={signIn5Style}
          >
            {signIn1}
          </div>
        </button>
        <div className="w-px relative box-border h-[65px] border-r-[1px] border-solid border-gray-600" />
        <button
          className="cursor-pointer [border:none] py-0 px-[30px] bg-[transparent] rounded-61xl shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center"
          onClick={onSignInButtonTopBar2Click}
        >
          <div
            className="relative text-xl font-poppins text-white text-left"
            style={signIn6Style}
          >
            {signIn2}
          </div>
        </button>
        <div className="w-px relative box-border h-[65px] border-r-[1px] border-solid border-gray-600" />
        <button
          className="cursor-pointer [border:none] py-0 px-[30px] bg-[transparent] rounded-61xl shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center"
          onClick={onSignInButtonTopBar3Click}
        >
          <div
            className="relative text-xl font-poppins text-white text-left"
            style={signIn7Style}
          >
            Profile
          </div>
        </button>
      </div>
    </div>
  );
};

export default Property1Admin;
