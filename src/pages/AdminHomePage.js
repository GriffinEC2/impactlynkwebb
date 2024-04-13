import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1PostSignIn from "../components/Property1PostSignIn";
import PicText1 from "../components/PicText1";
import PicText from "../components/PicText";
import FrameComponent from "../components/FrameComponent";
import Property1BottomBar from "../components/Property1BottomBar";

const AdminHomePage = () => {
  const navigate = useNavigate();

  const onSignInButtonTopBarClick = useCallback(() => {
    navigate("/admin-organize-event-page-1");
  }, [navigate]);

  const onSignInButtonTopBar1Click = useCallback(() => {
    navigate("/manage-volunteers");
  }, [navigate]);

  const onSignInButtonTopBar2Click = useCallback(() => {
    navigate("/admin-about-us-page");
  }, [navigate]);

  const onSignInButtonTopBar3Click = useCallback(() => {
    navigate("/admin-profile-page");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/pre-volunteer-page-1");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/post-contact-page");
  }, [navigate]);

  return (
    <div className="relative bg-snow w-full h-[2482px] overflow-hidden flex flex-col items-center justify-start text-center text-29xl text-black font-poppins">
      <Property1PostSignIn
        signIn="Organize"
        signIn1="Manage"
        signIn2="About Us"
        property1PostSignInWidth="1286px"
        property1PostSignInHeight="106px"
        property1PostSignInBorder="3px solid #a97d4e"
        property1PostSignInGap="375px"
        property1PostSignInBoxShadow="unset"
        impactLynkFontWeight="600"
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
        <div className="absolute top-[930px] left-[-5px] w-[1290px] h-[1352px] overflow-hidden" />
        <div className="absolute top-[0px] left-[0px] w-[1280px] h-[2382px] overflow-hidden" />
        <div className="absolute top-[930px] left-[-5px] w-[1290px] overflow-hidden flex flex-col items-start justify-end">
          <PicText1 austinKehmeierLyiKExA4zQA="/austinkehmeierlyikexa4zqaunsplash-1@2x.png" />
          <PicText
            volunteer="3/21 at 3:00 – Volunteer"
            pastMidnight="13 Past Midnight "
            volunteer1="Volunteer "
          />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1280px] h-[2382px] overflow-hidden flex flex-col items-center justify-start gap-[1352px]">
          <div className="w-[1280px] h-[930px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
            <div className="w-[1280px] overflow-hidden flex flex-col items-center justify-start">
              <div className="w-[1280px] h-[735px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[30px] px-[29px] box-border bg-[url('/public/home-top-thing@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <FrameComponent
                  frameDivPosition="relative"
                  frameDivTop="unset"
                  frameDivLeft="unset"
                  onButtonClick={onButtonClick}
                />
              </div>
              <div className="w-[1280px] shadow-[0px_-10px_10px_rgba(0,_0,_0,_0.25)_inset] h-[195px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[20px]">
                <img
                  className="w-[890px] relative h-0.5 object-contain"
                  alt=""
                />
                <img
                  className="w-[890px] relative h-0.5 object-contain hidden"
                  alt=""
                />
                <h1 className="m-0 w-[898px] relative text-inherit font-bold font-inherit flex items-center justify-center h-[148px] shrink-0">
                  Newest Opportunities
                </h1>
              </div>
            </div>
            <div className="overflow-hidden flex flex-col items-center justify-start p-[5px] mt-[-26px]">
              <img
                className="w-[889px] relative h-[1.2px] object-contain"
                alt=""
              />
            </div>
          </div>
          <Property1BottomBar
            property1BottomBarBoxShadow="0px 10px 250px rgba(0, 0, 0, 0.25)"
            property1BottomBarPosition="unset"
            property1BottomBarTop="unset"
            property1BottomBarLeft="unset"
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
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
