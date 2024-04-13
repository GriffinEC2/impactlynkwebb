import { useMemo } from "react";

const SignInButtonTopBar1 = ({
  signIn,
  propBorder,
  propBackgroundColor,
  propFontWeight,
  propDisplay,
  onSignInButtonTopBar1Click,
}) => {
  const signInButtonTopBar2Style = useMemo(() => {
    return {
      border: propBorder,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorder, propBackgroundColor]);

  const signIn10Style = useMemo(() => {
    return {
      fontWeight: propFontWeight,
      display: propDisplay,
    };
  }, [propFontWeight, propDisplay]);

  return (
    <div
      className="rounded-61xl shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center py-0 px-[30px] text-left text-xl text-white font-poppins"
      style={signInButtonTopBar2Style}
      onClick={onSignInButtonTopBar1Click}
    >
      <b className="relative" style={signIn10Style}>
        {signIn}
      </b>
    </div>
  );
};

export default SignInButtonTopBar1;
