import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar2 from "../components/TopBar";
import PicTextCard from "../components/PicTextCard";

const PostVolunteerPage1 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/post-home-page");
  }, [navigate]);

  const onSignInButtonTopBarClick = useCallback(() => {
    navigate("/post-about-us-page");
  }, [navigate]);

  const onSignInButtonTopBar2Click = useCallback(() => {
    navigate("/stats-page");
  }, [navigate]);

  const onSignInButtonTopBar3Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onPicTextCardClick = useCallback(() => {
    navigate("/post-volunteer-page-2");
  }, [navigate]);

  const onVolunteerButtonClick = useCallback(() => {
    navigate("/post-volunteer-page-2");
  }, [navigate]);

  const onPicTextCard1Click = useCallback(() => {
    navigate("/post-volunteer-page-2");
  }, [navigate]);

  const onPicTextCard2Click = useCallback(() => {
    navigate("/post-volunteer-page-2");
  }, [navigate]);

  const onVolunteerButton2Click = useCallback(() => {
    navigate("/post-volunteer-page-2");
  }, [navigate]);

  const onPicTextCard3Click = useCallback(() => {
    navigate("/post-volunteer-page-2");
  }, [navigate]);

  const onVolunteerButton3Click = useCallback(() => {
    navigate("/post-volunteer-page-2");
  }, [navigate]);

  return (
    <div className="w-full relative bg-lightgray-200 h-[832px] overflow-hidden flex flex-col items-start justify-start gap-[20px]">
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
      <div className="overflow-hidden flex flex-row items-start justify-start py-5 px-[60px] gap-[60px]">
        <PicTextCard
          onPicTextCardClick={onPicTextCardClick}
          onVolunteerButtonClick={onVolunteerButtonClick}
        />
        <PicTextCard onPicTextCardClick={onPicTextCard1Click} />
      </div>
      <div className="overflow-hidden flex flex-row items-start justify-start py-5 px-[60px] gap-[60px]">
        <PicTextCard
          onPicTextCardClick={onPicTextCard2Click}
          onVolunteerButtonClick={onVolunteerButton2Click}
        />
        <PicTextCard
          onPicTextCardClick={onPicTextCard3Click}
          onVolunteerButtonClick={onVolunteerButton3Click}
        />
      </div>
    </div>
  );
};

export default PostVolunteerPage1;
