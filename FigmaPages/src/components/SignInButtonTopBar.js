import { useMemo } from "react";

const SignInButtonTopBar = ({
  signIn,
  propBorder,
  propBackgroundColor,
  propFontWeight,
  propDisplay,
  onSignInButtonTopBarClick,
}) => {
  const signInButtonTopBar1Style = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  const signIn9Style = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      display: propDisplay,
    };
  }, [propFontWeight, propDisplay]);

  return (
    <button
      className="cursor-pointer [border:none] py-0 px-[30px] bg-[transparent] rounded-61xl shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center"
      style={signInButtonTopBar1Style}
      onClick={onSignInButtonTopBarClick}
    >
      <div
        className="relative text-xl font-poppins text-white text-left"
        style={signIn9Style}
      >
        {signIn}
      </div>
    </button>
  );
};

export default SignInButtonTopBar;
