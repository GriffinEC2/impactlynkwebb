import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";

const HomeTopThing = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/pre-volunteer-page-1");
  }, [navigate]);

  return (
    <div className="w-[1280px] h-[735px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[30px] px-[29px] box-border bg-[url('/public/home-top-thing@3x.png')] bg-cover bg-no-repeat bg-[top]">
      <FrameComponent
        frameDivPosition="relative"
        frameDivTop="unset"
        frameDivLeft="unset"
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

export default HomeTopThing;
