import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar2 from "../components/TopBar";
import HeadingText1 from "../components/HeadingText1";
import Heading from "../components/Heading";
import HeadingTextBackground1 from "../components/HeadingTextBackground";
import PhotoGallery1 from "../components/PhotoGallery";
import Property1PicTextPropert from "../components/Property1PicTextPropert";
import PicText4 from "../components/PicText4";
import PicText11 from "../components/PicText1";
import Property1BottomBar from "../components/Property1BottomBar";

const PostAboutUsPage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/post-home-page");
  }, [navigate]);

  const onSignInButtonTopBarClick = useCallback(() => {
    navigate("/post-volunteer-page-1");
  }, [navigate]);

  const onSignInButtonTopBar2Click = useCallback(() => {
    navigate("/stats-page");
  }, [navigate]);

  const onSignInButtonTopBar3Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/post-contact-page");
  }, [navigate]);

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-end justify-start text-center text-29xl text-black font-poppins">
      <TopBar2
        signIn="Volunteer"
        signIn="About Us"
        signIn="Stats"
        frameButtonGap="400px"
        onFrameButtonClick={onFrameButtonClick}
        onSignInButtonTopBarClick={onSignInButtonTopBarClick}
        onSignInButtonTopBar2Click={onSignInButtonTopBar2Click}
        onSignInButtonTopBar3Click={onSignInButtonTopBar3Click}
      />
      <img
        className="w-[1280px] relative h-[717px] object-cover"
        alt=""
        src="/ocgsavingtheoceanxch7jxaaqqounsplash-1@2x.png"
      />
      <HeadingText1 />
      <div className="w-[1280px] h-[510px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
        <Heading
          newestOpportunities="Stats"
          showLineIcon
          lineIconVisible={false}
          headingBackgroundColor="#fff"
          headingBoxShadow="unset"
          headingHeight="152px"
          headingWidth="1280px"
          headingPosition="unset"
          headingTop="unset"
          headingLeft="unset"
          newestOpportunitiesFontWeight="700"
          newestOpportunitiesColor="#000"
          newestOpportunitiesMargin="0"
        />
        <div className="w-[1280px] relative h-[500px] overflow-hidden shrink-0 mt-[-123px]">
          <HeadingTextBackground1 />
          <div className="absolute top-[0px] left-[60px] box-border w-[1160px] h-[452px] border-[6px] border-solid border-dimgray-200" />
        </div>
      </div>
      <Heading
        newestOpportunities="Meet our team"
        showLineIcon
        lineIconVisible={false}
        headingBackgroundColor="#2b6f3a"
        headingBoxShadow="0px -3px 10px rgba(0, 0, 0, 0.25)"
        headingHeight="195px"
        headingWidth="1280px"
        headingPosition="unset"
        headingTop="unset"
        headingLeft="unset"
        newestOpportunitiesFontWeight="700"
        newestOpportunitiesColor="#fff"
        newestOpportunitiesMargin="0"
      />
      <PhotoGallery1 />
      <div className="w-[1280px] bg-white h-[152px] overflow-hidden shrink-0 hidden flex-col items-center justify-start gap-[20px]">
        <img className="w-[890px] relative h-0.5 object-contain" alt="" />
        <img className="w-[890px] relative h-0.5 object-contain" alt="" />
        <h1 className="m-0 w-[898px] relative text-inherit font-bold font-inherit flex items-center justify-center h-[148px] shrink-0">
          Stats
        </h1>
      </div>
      <div className="bg-white h-[382px] overflow-hidden shrink-0 hidden flex-row items-center justify-start pt-2.5 px-[95px] pb-20 box-border gap-[118px]">
        <Property1PicTextPropert
          headingTextalarm="/heading--textalarm2@2x.png"
          totalHoursHelpingOrganiza="Total Hours helping organizations"
          prop="1054"
          property1PicTextPropertPosition="relative"
          property1PicTextPropertBoxShadow="unset"
          property1PicTextPropertBorder="unset"
          headingTextalarmOverflow="hidden"
          totalHoursHelpingLeft="172px"
        />
        <Property1PicTextPropert
          headingTextalarm="/heading--textlayers3@2x.png"
          totalHoursHelpingOrganiza="Number of Organizations we’ve worked with"
          prop="34"
          property1PicTextPropertPosition="relative"
          property1PicTextPropertBoxShadow="unset"
          property1PicTextPropertBorder="unset"
          headingTextalarmOverflow="unset"
          totalHoursHelpingLeft="176px"
        />
      </div>
      <Heading
        newestOpportunities="Learn more about us"
        showLineIcon
        lineIconVisible={false}
        headingBackgroundColor="#2b6f3a"
        headingBoxShadow="0px -3px 10px rgba(0, 0, 0, 0.25)"
        headingHeight="195px"
        headingWidth="1280px"
        headingPosition="unset"
        headingTop="unset"
        headingLeft="unset"
        newestOpportunitiesFontWeight="700"
        newestOpportunitiesColor="#fff"
        newestOpportunitiesMargin="0"
      />
      <PicText4 />
      <PicText11
        volunteer="Read"
        volunteer1="Learn More"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propHeight="unset"
        propMarginRight="unset"
        propBoxShadow="0px 0px 200px 10px rgba(0, 0, 0, 0.25)"
        propBackgroundColor="#fff"
        propWidth="391px"
        propMargin="unset"
        propFontWeight="unset"
        propMargin1="unset"
        propFontWeight1="bold"
        propWidth1="358px"
        propMargin2="unset"
        propDisplay="unset"
        propBorder="none"
        propPadding="0"
        propBackgroundColor1="transparent"
        propWidth2="432px"
        propPosition1="relative"
        propHeight1="29px"
        propMargin3="unset"
        propDisplay1="inline-block"
        propPosition2="absolute"
        propHeight2="100%"
        propWidth3="74.77%"
        propTop1="0%"
        propLeft1="25.23%"
        propFontSize="24px"
        propFontFamily="Inter"
        propColor="#000"
        propTextAlign="left"
      />
      <Property1BottomBar
        property1BottomBarBoxShadow="0px 0px 200px 10px rgba(0, 0, 0, 0.25)"
        property1BottomBarPosition="unset"
        property1BottomBarTop="unset"
        property1BottomBarLeft="unset"
        frameButtonBorder="none"
        frameButtonPadding="0"
        frameButtonBackgroundColor="transparent"
        logoBorder="none"
        logoPadding="0"
        logoBackgroundColor="transparent"
        impactLynkFontWeight="unset"
        impactLynkDisplay="inline-block"
        frameButtonBorder1="none"
        frameButtonPadding1="0"
        frameButtonBackgroundColor1="transparent"
        signInDisplay="inline-block"
        property1BottomBarWidth="1280px"
        signInButtonTopBarBorder="unset"
        signInButtonTopBarBackgroundColor="unset"
        onFrameButton2Click={onFrameButton1Click}
      />
    </div>
  );
};

export default PostAboutUsPage;
