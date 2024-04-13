import { useMemo } from "react";

const Property1PostSignIn = ({
  signIn,
  signIn1,
  signIn2,
  property1PostSignInWidth,
  property1PostSignInHeight,
  property1PostSignInBorder,
  property1PostSignInGap,
  property1PostSignInBoxShadow,
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
  const property1PostSignInStyle = useMemo(() => {
    return {
      width: property1PostSignInWidth,
      height: property1PostSignInHeight,
      border: property1PostSignInBorder,
      gap: property1PostSignInGap,
      boxShadow: property1PostSignInBoxShadow,
    };
  }, [
    property1PostSignInWidth,
    property1PostSignInHeight,
    property1PostSignInBorder,
    property1PostSignInGap,
    property1PostSignInBoxShadow,
  ]);

  const impactLynkStyle = useMemo(() => {
    return {
      fontWeight: impactLynkFontWeight,
    };
  }, [impactLynkFontWeight]);

  const signInStyle = useMemo(() => {
    return {
      display: signInDisplay,
    };
  }, [signInDisplay]);

  const signIn1Style = useMemo(() => {
    return {
      display: signInDisplay1,
    };
  }, [signInDisplay1]);

  const signIn2Style = useMemo(() => {
    return {
      display: signInDisplay2,
    };
  }, [signInDisplay2]);

  const signIn3Style = useMemo(() => {
    return {
      display: signInDisplay3,
    };
  }, [signInDisplay3]);

  return (
    <div
      className="w-[1280px] bg-seagreen max-w-full h-[100px] overflow-hidden flex flex-row items-center justify-start py-[50px] px-10 box-border gap-[400px]"
      style={property1PostSignInStyle}
    >
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[35px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[43px] relative h-[43px]">
          <div className="absolute h-[102.33%] w-[102.33%] top-[20.93%] right-[-23.26%] bottom-[-23.26%] left-[20.93%] rounded-8xs box-border border-[10px] border-solid border-darkslategray-200" />
          <div className="absolute h-[102.33%] w-[102.33%] top-[-11.63%] right-[9.3%] bottom-[9.3%] left-[-11.63%] rounded-8xs box-border border-[10px] border-solid border-mediumseagreen" />
          <div className="absolute h-[23.26%] w-[23.26%] top-[20.93%] right-[9.3%] bottom-[55.81%] left-[67.44%] bg-darkslategray-200" />
        </button>
        <div
          className="relative text-17xl font-poppins text-white text-left"
          style={impactLynkStyle}
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
            style={signInStyle}
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
            style={signIn1Style}
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
            style={signIn2Style}
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
            style={signIn3Style}
          >
            Profile
          </div>
        </button>
      </div>
    </div>
  );
};

export default Property1PostSignIn;
