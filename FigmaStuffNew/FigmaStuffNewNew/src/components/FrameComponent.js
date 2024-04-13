import { useMemo } from "react";

const FrameComponent = ({
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
  onButtonClick,
}) => {
  const frameDiv13Style = useMemo(() => {
    return {
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivPosition, frameDivTop, frameDivLeft]);

  return (
    <div
      className="rounded-sm bg-gray-700 shadow-[0px_0px_20px_2px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(20px)] max-w-full h-[631px] overflow-hidden flex flex-col items-center justify-start pt-0 px-[15px] pb-8 box-border relative gap-[57px] text-center text-29xl text-white font-poppins"
      style={frameDiv13Style}
    >
      <p className="m-0 w-[563px] relative font-bold flex items-center justify-center h-[265px] shrink-0 z-[0]">{`Empowering students and non-profits for a brighter future. `}</p>
      <p className="m-0 w-[530px] relative text-xl flex items-center justify-center opacity-[0.8] z-[1]">
        Our mission is to provide a modern mobile platform enabling non-profits
        and high school teenagers to more easily provide much needed social
        services in their local communities.
      </p>
      <button
        className="cursor-pointer [border:none] p-0 bg-forestgreen-200 w-[324px] rounded-sm h-[90px] flex flex-col items-center justify-end z-[2]"
        onClick={onButtonClick}
      >
        <b className="w-[324px] relative text-13xl flex font-poppins text-white text-center items-center justify-center h-[87px] shrink-0">
          Volunteer
        </b>
      </button>
      <div className="w-[518px] absolute !m-[0] top-[303px] left-[38px] box-border h-1 z-[3] border-t-[4px] border-solid border-forestgreen-200" />
    </div>
  );
};

export default FrameComponent;
