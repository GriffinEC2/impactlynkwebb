import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar3 from "../components/TopBar3";
import HeadingText from "../components/HeadingText";
import HeadingTextBackground from "../components/HeadingTextBackground";
import Heading from "../components/Heading";
import PhotoGallery from "../components/PhotoGallery";
import PicText3 from "../components/PicText3";
import PicText from "../components/PicText";
import TopBar1 from "../components/TopBar1";

const PreAboutUsPage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignInButtonTopBarClick = useCallback(() => {
    navigate("/login-screen");
  }, [navigate]);

  const onSignInButtonTopBar1Click = useCallback(() => {
    navigate("/pre-volunteer-page-1");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/contact-page");
  }, [navigate]);

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-end justify-start text-center text-29xl text-black font-poppins">
      <TopBar3
        onFrameButtonClick={onFrameButtonClick}
        onSignInButtonTopBarClick={onSignInButtonTopBarClick}
        onSignInButtonTopBar1Click={onSignInButtonTopBar1Click}
      />
      <img
        className="w-[1280px] relative h-[717px] object-cover"
        alt=""
        src="/ocgsavingtheoceanxch7jxaaqqounsplash-1@2x.png"
      />
      <HeadingText showLineIcon={false} lineIconVisible={false} />
      <div className="w-[1280px] h-[510px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
        <div className="w-[1280px] bg-white h-[152px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[20px]">
          <img className="w-[890px] relative h-0.5 object-contain" alt="" />
          <img
            className="w-[890px] relative h-0.5 object-contain hidden"
            alt=""
          />
          <h1 className="m-0 w-[898px] relative text-inherit font-bold font-inherit flex items-center justify-center h-[148px] shrink-0">
            Stats
          </h1>
        </div>
        <div className="w-[1280px] relative h-[500px] overflow-hidden shrink-0 mt-[-123px]">
          <HeadingTextBackground
            headingTextalarm="/heading--textalarm@2x.png"
            headingTextalarm="/heading--textlayers1@2x.png"
            propTop="118px"
          />
          <div className="absolute top-[0px] left-[60px] box-border w-[1160px] h-[452px] border-[6px] border-solid border-dimgray-200" />
        </div>
      </div>
      <Heading newestOpportunities="Meet our team" />
      <PhotoGallery christopherMaoGriffinItsT="Christopher Mao / Griffin “it’s tomourow” Cooper / Zachary Cummins / Kasra “Pangaea” Panahi" />
      <Heading newestOpportunities="Learn more about us" />
      <PicText3 />
      <PicText
        volunteer="Read"
        volunteer1="Learn More"
        propPosition="unset"
        propHeight="unset"
        propMarginRight="unset"
        propTop="unset"
        propLeft="unset"
        propBoxShadow="0px 0px 200px 10px rgba(0, 0, 0, 0.25)"
        propBackgroundColor="#fff"
        propWidth="391px"
        propWidth1="358px"
        propDisplay="unset"
        propBorder="none"
        propPadding="0"
        propBackgroundColor1="transparent"
        propWidth2="432px"
        propPosition1="relative"
        propHeight1="29px"
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
      <TopBar1 onFrameButton2Click={onFrameButton2Click} />
    </div>
  );
};

export default PreAboutUsPage;
