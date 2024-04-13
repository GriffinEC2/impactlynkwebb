import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1PostSignIn from "../components/Property1PostSignIn";
import Property1BottomBar from "../components/Property1BottomBar";
import PicText from "../components/PicText";
import PicText5 from "../components/PicText5";
import FrameComponent from "../components/FrameComponent";

const OrgHomePage = () => {
  const navigate = useNavigate();

  const onSignInButtonTopBarClick = useCallback(() => {
    navigate("/org-organize-event-page-1");
  }, [navigate]);

  const onSignInButtonTopBar1Click = useCallback(() => {
    navigate("/org-events");
  }, [navigate]);

  const onSignInButtonTopBar2Click = useCallback(() => {
    navigate("/pre-about-us-page");
  }, [navigate]);

  const onSignInButtonTopBar3Click = useCallback(() => {
    navigate("/org-profile-page");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/post-contact-page");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/pre-volunteer-page-1");
  }, [navigate]);

  return (
    <div className="relative bg-snow w-full h-[2482px] overflow-hidden flex flex-col items-center justify-start text-center text-29xl text-black font-poppins">
      <Property1PostSignIn
        signIn="Organize"
        signIn1="Events"
        signIn2="About Us"
        property1PostSignInWidth="1286px"
        property1PostSignInHeight="106px"
        property1PostSignInBorder="3px solid #a97d4e"
        property1PostSignInGap="400px"
        property1PostSignInBoxShadow="unset"
        impactLynkFontWeight="unset"
        signInDisplay="inline-block"
        signInDisplay1="inline-block"
        signInDisplay2="inline-block"
        signInDisplay3="inline-block"
        onSignInButtonTopBarClick={onSignInButtonTopBarClick}
        onSignInButtonTopBar1Click={onSignInButtonTopBar1Click}
        onSignInButtonTopBar2Click={onSignInButtonTopBar2Click}
        onSignInButtonTopBar3Click={onSignInButtonTopBar3Click}
      />
      <div className="w-[1280px] relative h-[2382px]">
        <Property1BottomBar
          property1BottomBarBoxShadow="0px 10px 250px rgba(0, 0, 0, 0.25)"
          property1BottomBarPosition="absolute"
          property1BottomBarTop="2282px"
          property1BottomBarLeft="0px"
          frameButtonBorder="none"
          frameButtonPadding="0"
          frameButtonBackgroundColor="transparent"
          logoBorder="none"
          logoPadding="0"
          logoBackgroundColor="transparent"
          impactLynkFontWeight="600"
          impactLynkDisplay="inline-block"
          frameButtonBorder1="none"
          frameButtonPadding1="0"
          frameButtonBackgroundColor1="transparent"
          signInDisplay="inline-block"
          property1BottomBarWidth="1280px"
          signInButtonTopBarBorder="unset"
          signInButtonTopBarBackgroundColor="unset"
          onFrameButton2Click={onFrameButton2Click}
        />
        <PicText
          volunteer="3/21 at 3:00 – Volunteer"
          pastMidnight="13 Past Midnight "
          volunteer1="Volunteer "
          propPosition="absolute"
          propHeight="unset"
          propMarginRight="unset"
          propTop="1606px"
          propLeft="-5px"
          propBoxShadow="0px -10px 10px rgba(0, 0, 0, 0.25)"
          propBackgroundColor="unset"
          propWidth="unset"
          propWidth1="480px"
          propDisplay="block"
          propBorder="unset"
          propPadding="unset"
          propBackgroundColor1="unset"
          propWidth2="unset"
          propPosition1="unset"
          propHeight1="unset"
          propDisplay1="block"
          propPosition2="unset"
          propHeight2="unset"
          propWidth3="unset"
          propTop1="unset"
          propLeft1="unset"
          propFontSize="unset"
          propFontFamily="unset"
          propColor="unset"
          propTextAlign="unset"
        />
        <PicText5 />
        <img
          className="absolute top-[904px] left-[200px] w-[889px] h-[1.2px] object-contain"
          alt=""
        />
        <div className="absolute top-[735px] left-[0px] shadow-[0px_-10px_10px_rgba(0,_0,_0,_0.25)_inset] w-[1280px] h-[195px] overflow-hidden flex flex-col items-center justify-start gap-[20px]">
          <img className="w-[890px] relative h-0.5 object-contain" alt="" />
          <img
            className="w-[890px] relative h-0.5 object-contain hidden"
            alt=""
          />
          <h1 className="m-0 w-[898px] relative text-inherit font-bold font-inherit flex items-center justify-center h-[148px] shrink-0">
            Newest Opportunities
          </h1>
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1280px] h-[735px] overflow-hidden bg-[url('/public/home-top-thing@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <FrameComponent
            frameDivPosition="absolute"
            frameDivTop="52px"
            frameDivLeft="47px"
            onButtonClick={onButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default OrgHomePage;
