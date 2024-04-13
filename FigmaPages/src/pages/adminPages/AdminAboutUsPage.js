import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import HeadingText from "../components/HeadingText";
import HeadingTextBackground from "../components/HeadingTextBackground";
import Heading from "../components/Heading";
import PhotoGallery from "../components/PhotoGallery";
import PicText3 from "../components/PicText3";
import PicText2 from "../components/PicText2";
import TopBar1 from "../components/TopBar1";

const AdminAboutUsPage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/admin-home-page");
  }, [navigate]);

  const onSignInButtonTopBarClick = useCallback(() => {
    navigate("/admin-organize-event-page-1");
  }, [navigate]);

  const onSignInButtonTopBar1Click = useCallback(() => {
    navigate("/manage-volunteers");
  }, [navigate]);

  const onSignInButtonTopBar3Click = useCallback(() => {
    navigate("/admin-profile-page");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='topBarContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameButton2Click = useCallback(() => {
    navigate("/post-contact-page");
  }, [navigate]);

  return (
    <div className="relative w-full overflow-hidden flex flex-col items-start justify-start text-center text-29xl text-black font-poppins">
      <TopBar
        signIn="Organize"
        signIn1="Manage"
        signIn2="About Us"
        frameButtonGap="375px"
        onFrameButtonClick={onFrameButtonClick}
        onSignInButtonTopBarClick={onSignInButtonTopBarClick}
        onSignInButtonTopBar1Click={onSignInButtonTopBar1Click}
        onSignInButtonTopBar3Click={onSignInButtonTopBar3Click}
      />
      <img
        className="w-[1280px] relative h-[717px] object-cover"
        alt=""
        src="/ocgsavingtheoceanxch7jxaaqqounsplash-1@2x.png"
      />
      <HeadingText showLineIcon={false} lineIconVisible={false} />
      <div className="w-[1280px] relative h-[510px] overflow-hidden shrink-0">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1280px] h-[152px] overflow-hidden flex flex-col items-center justify-start gap-[20px]">
          <img className="w-[890px] relative h-0.5 object-contain" alt="" />
          <img
            className="w-[890px] relative h-0.5 object-contain hidden"
            alt=""
          />
          <h1 className="m-0 w-[898px] relative text-inherit font-bold font-inherit flex items-center justify-center h-[148px] shrink-0">
            Stats
          </h1>
        </div>
        <HeadingTextBackground
          headingTextalarm="/heading--textalarm@2x.png"
          headingTextalarm="/heading--textlayers@2x.png"
        />
        <div className="absolute top-[29px] left-[60px] box-border w-[1160px] h-[452px] border-[6px] border-solid border-dimgray-200" />
      </div>
      <Heading newestOpportunities="Meet our team" />
      <PhotoGallery christopherMaoGriffinItsT="Christopher Mao / Griffin “it’s tomourow” Cooper / Zachary Cummins / Kasra “Pangaea” Panahi" />
      <Heading newestOpportunities="Learn more about us" />
      <PicText3 />
      <PicText2 />
      <TopBar1
        onFrameButton1Click={onFrameButton1Click}
        onFrameButton2Click={onFrameButton2Click}
      />
    </div>
  );
};

export default AdminAboutUsPage;
