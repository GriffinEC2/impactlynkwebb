import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Admin from "../components/Property1Admin";
import PicText1 from "../components/PicText1";
import PicText11 from "../components/PicText1";
import Heading from "../components/Heading";
import Property1BottomBar from "../components/Property1BottomBar";

const PostHomePage = () => {
  const navigate = useNavigate();

  const onSignInButtonTopBarClick = useCallback(() => {
    navigate("/pre-volunteer-page-1");
  }, [navigate]);

  const onSignInButtonTopBar2Click = useCallback(() => {
    navigate("/post-about-us-page");
  }, [navigate]);

  const onSignInButtonTopBar3Click = useCallback(() => {
    navigate("/stats-page");
  }, [navigate]);

  const onSignInButtonTopBar4Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onPicTextClick = useCallback(() => {
    navigate("/post-volunteer-page-1");
  }, [navigate]);

  const onVolunteerButtonClick = useCallback(() => {
    navigate("/post-volunteer-page-1");
  }, [navigate]);

  const onPicText2Click = useCallback(() => {
    navigate("/post-volunteer-page-1");
  }, [navigate]);

  const onVolunteerButton2Click = useCallback(() => {
    navigate("/post-volunteer-page-1");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/post-contact-page");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/post-volunteer-page-1");
  }, [navigate]);

  const onVolunteerTextClick = useCallback(() => {
    navigate("/post-volunteer-page-1");
  }, [navigate]);

  return (
    <div className="relative bg-snow w-full h-[2482px] overflow-hidden flex flex-col items-center justify-start text-center text-29xl text-white font-poppins">
      <Property1Admin
        signIn="Volunteer"
        signIn1="About Us"
        signIn2="Stats"
        property1AdminWidth="1286px"
        property1AdminHeight="106px"
        property1AdminGap="400px"
        property1AdminBorder="3px solid #a97d4e"
        impactLynkFontWeight="600"
        signInDisplay="inline-block"
        signInDisplay1="inline-block"
        signInDisplay2="inline-block"
        signInDisplay3="inline-block"
        onSignInButtonTopBarClick={onSignInButtonTopBarClick}
        onSignInButtonTopBar1Click={onSignInButtonTopBar2Click}
        onSignInButtonTopBar2Click={onSignInButtonTopBar3Click}
        onSignInButtonTopBar3Click={onSignInButtonTopBar4Click}
      />
      <div className="w-[1280px] relative h-[2382px]">
        <div className="absolute top-[930px] left-[-5px] w-[1290px] overflow-hidden flex flex-col items-start justify-end">
          <PicText1
            austinKehmeierLyiKExA4zQA="/austinkehmeierlyikexa4zqaunsplash-1@2x.png"
            propHeight="676px"
            propMarginRight="3px"
            onPicText2Click={onPicTextClick}
            onVolunteerButtonClick={onVolunteerButtonClick}
          />
          <PicText11
            volunteer="3/21 at 3:00 – Volunteer"
            pastMidnight="13 Past Midnight "
            volunteer1="Volunteer "
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
            propHeight="676px"
            propMarginRight="10px"
            propBoxShadow="0px -10px 10px rgba(0, 0, 0, 0.25)"
            propBackgroundColor="unset"
            propWidth="unset"
            propMargin="0"
            propFontWeight="400"
            propMargin1="0"
            propFontWeight1="700"
            propWidth1="480px"
            propMargin2="unset"
            propDisplay="block"
            propBorder="unset"
            propPadding="unset"
            propBackgroundColor1="unset"
            propWidth2="unset"
            propPosition1="unset"
            propHeight1="unset"
            propMargin3="unset"
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
            propMargin4="unset"
            propDisplay2="block"
            picTextBorder="none"
            picTextPadding="0"
            picTextBackgroundColor="transparent"
            onPicText2Click={onPicText2Click}
            onVolunteerButton1Click={onVolunteerButton2Click}
          />
        </div>
        <div className="absolute top-[0px] left-[0px] w-[1280px] h-[2382px] overflow-hidden flex flex-col items-center justify-start gap-[1352px]">
          <div className="w-[1280px] h-[930px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
            <div className="w-[1280px] overflow-hidden flex flex-col items-center justify-start">
              <div className="w-[1280px] h-[735px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[30px] px-[29px] box-border bg-[url('/public/home-top-thing@3x.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="rounded-sm bg-gray-700 shadow-[0px_0px_20px_2px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(20px)] h-[631px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-0 px-[15px] pb-8 box-border relative gap-[57px]">
                  <b className="w-[563px] relative flex items-center justify-center h-[265px] shrink-0 z-[0]">
                    Empowering students and non-profits for a brighter future.
                  </b>
                  <div className="w-[530px] relative text-xl flex items-center justify-center opacity-[0.8] z-[1]">
                    Our mission is to provide a modern mobile platform enabling
                    non-profits and high school teenagers to more easily provide
                    much needed social services in their local communities.
                  </div>
                  <button
                    className="cursor-pointer [border:none] p-0 bg-forestgreen-200 w-[324px] rounded-sm h-[90px] flex flex-col items-center justify-end z-[2]"
                    onClick={onButtonClick}
                  >
                    <b
                      className="w-[324px] relative text-13xl flex font-poppins text-white text-center items-center justify-center h-[87px] shrink-0 cursor-pointer"
                      onClick={onVolunteerTextClick}
                    >
                      Volunteer
                    </b>
                  </button>
                  <div className="w-[518px] absolute !m-[0] top-[303px] left-[38px] box-border h-1 z-[3] border-t-[4px] border-solid border-forestgreen-200" />
                </div>
              </div>
              <Heading
                newestOpportunities="Newest Opportunities"
                showLineIcon
                lineIconVisible={false}
                headingBackgroundColor="unset"
                headingBoxShadow="0px -10px 10px rgba(0, 0, 0, 0.25) inset"
                headingHeight="195px"
                headingWidth="1280px"
                headingPosition="unset"
                headingTop="unset"
                headingLeft="unset"
                newestOpportunitiesFontWeight="700"
                newestOpportunitiesColor="#000"
                newestOpportunitiesMargin="0"
              />
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

export default PostHomePage;
