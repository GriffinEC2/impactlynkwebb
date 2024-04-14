import Logo from "./Logo";
import SignInButtonTopBar1 from "./SignInButtonTopBar1";

const TopBar1 = ({ onFrameButton1Click, onFrameButton2Click }) => {
  return (
    <div className="w-[1280px] bg-seagreen shadow-[0px_0px_200px_10px_rgba(0,_0,_0,_0.25)] h-[100px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-[50px] px-10 box-border gap-[450px]">
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[35px]"
        onClick={onFrameButton1Click}
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
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-row items-center justify-center"
        onClick={onFrameButton2Click}
      >
        <SignInButtonTopBar1
          signIn="Any Questions?"
          propBorder="unset"
          propBackgroundColor="unset"
          propFontWeight="unset"
          propDisplay="inline-block"
        />
      </button>
    </div>
  );
};

export default TopBar1;
