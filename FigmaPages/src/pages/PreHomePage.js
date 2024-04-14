import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default1 from "../components/Property1Default6";
import HomeTopThing from "../components/HomeTopThing";
import Heading from "../components/Heading";
import PicText1 from "../components/PicText1";
import PicText11 from "../components/PicText1";
import Property1BottomBar from "../components/Property1BottomBar";

const PreHomePage = () => {
  const navigate = useNavigate();

  const onPicTextClick = useCallback(() => {
    navigate("/pre-volunteer-page-1");
  }, [navigate]);

  const onVolunteerButtonClick = useCallback(() => {
    navigate("/pre-volunteer-page-1");
  }, [navigate]);

  const onPicText1Click = useCallback(() => {
    navigate("/pre-volunteer-page-1");
  }, [navigate]);

  const onVolunteerButton2Click = useCallback(() => {
    navigate("/pre-volunteer-page-1");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/contact-page");
  }, [navigate]);

  const onSignInButtonTopBarClick = useCallback(() => {
    navigate("/contact-page");
  }, [navigate]);

  return (
    <div className="relative bg-snow w-full overflow-hidden flex flex-col items-center justify-start">
      <Property1Default1
        property1DefaultWidth="1286px"
        property1DefaultHeight="106px"
        // property1DefaultBorder="3px solid #a97d4e"
        impactLynkFontWeight="unset"
      />
      <div className="w-[1280px] relative h-[2382px]">
        <div className="absolute top-[0px] left-[0px] w-[1280px] overflow-hidden flex flex-col items-center justify-start">
          <HomeTopThing />
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
        <div className="absolute top-[904px] left-[-5px] w-[1285px] overflow-hidden flex flex-col items-center justify-start gap-[24px]">
          <div className="overflow-hidden flex flex-col items-center justify-start py-[5px] px-px">
            <img
              className="w-[889px] relative h-[1.2px] object-contain"
              alt=""
            />
          </div>
          <div className="w-[1285px] overflow-hidden flex flex-col items-start justify-end">
            <PicText1
              austinKehmeierLyiKExA4zQA="/austinkehmeierlyikexa4zqaunsplash-1@2x.png"
              propHeight="unset"
              propMarginRight="unset"
              onPicText2Click={onPicTextClick}
              onVolunteerButtonClick={onVolunteerButtonClick}
            />
            <PicText11
              volunteer="3/21 at 3:00 – Volunteer"
              pastMidnight="13 Past Midnight "
              volunteer1="Volunteer "
              onPicText2Click={onPicText1Click}
              onVolunteerButton1Click={onVolunteerButton2Click}
            />
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
              impactLynkFontWeight="unset"
              impactLynkDisplay="inline-block"
              frameButtonBorder1="unset"
              frameButtonPadding1="unset"
              frameButtonBackgroundColor1="unset"
              signInDisplay="inline-block"
              property1BottomBarWidth="1285px"
              signInButtonTopBarBorder="none"
              signInButtonTopBarBackgroundColor="transparent"
              onFrameButton2Click={onFrameContainerClick}
              onSignInButtonTopBarClick={onSignInButtonTopBarClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreHomePage;
