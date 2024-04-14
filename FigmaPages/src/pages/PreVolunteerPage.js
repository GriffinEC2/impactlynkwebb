import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar3 from "../components/TopBar3";
import PicTextCard from "../components/PicTextCard";

const PreVolunteerPage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignInButtonTopBarClick = useCallback(() => {
    navigate("/login-screen");
  }, [navigate]);

  const onSignInButtonTopBar2Click = useCallback(() => {
    navigate("/pre-about-us-page");
  }, [navigate]);

  const onPicTextCardClick = useCallback(() => {
    navigate("/pre-volunteer-page-2");
  }, [navigate]);

  const onVolunteerButtonClick = useCallback(() => {
    navigate("/pre-volunteer-page-2");
  }, [navigate]);

  const onPicTextCard1Click = useCallback(() => {
    navigate("/pre-volunteer-page-2");
  }, [navigate]);

  const onVolunteerButton1Click = useCallback(() => {
    navigate("/pre-volunteer-page-2");
  }, [navigate]);

  const onPicTextCard2Click = useCallback(() => {
    navigate("/pre-volunteer-page-2");
  }, [navigate]);

  const onVolunteerButton2Click = useCallback(() => {
    navigate("/pre-volunteer-page-2");
  }, [navigate]);

  const onPicTextCard3Click = useCallback(() => {
    navigate("/pre-volunteer-page-2");
  }, [navigate]);

  const onVolunteerButton3Click = useCallback(() => {
    navigate("/pre-volunteer-page-2");
  }, [navigate]);

  return (
    <div className="w-full relative bg-lightgray-200 h-[832px] overflow-hidden flex flex-col items-start justify-start gap-[20px]">
      <TopBar3
        frameButtonBoxShadow="0px 10px 10px rgba(0, 0, 0, 0.25)"
        onFrameButtonClick={onFrameButtonClick}
        onSignInButtonTopBarClick={onSignInButtonTopBarClick}
        onSignInButtonTopBar2Click={onSignInButtonTopBar2Click}
      />
      <div className="overflow-hidden flex flex-row items-start justify-start py-5 px-[60px] gap-[60px]">
        <PicTextCard
          onPicTextCardClick={onPicTextCardClick}
          onVolunteerButtonClick={onVolunteerButtonClick}
        />
        <PicTextCard
          onPicTextCardClick={onPicTextCard1Click}
          onVolunteerButtonClick={onVolunteerButton1Click}
        />
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

export default PreVolunteerPage;
