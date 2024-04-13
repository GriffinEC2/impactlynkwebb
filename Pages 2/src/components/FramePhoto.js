import { useMemo } from "react";

const FramePhoto = ({ propBackgroundColor }) => {
  const framePhotoStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="bg-white flex flex-col items-center justify-start pt-0 px-0 pb-2.5 gap-[20px] text-left text-xl text-black font-poppins"
      style={framePhotoStyle}
    >
      <img
        className="w-[1280px] relative h-[500px] object-cover"
        alt=""
        src="/rectangle-25@2x.png"
      />
      <div className="overflow-hidden flex flex-col items-start justify-start">
        <h3 className="m-0 w-[1200px] relative text-inherit font-semibold font-inherit flex items-center h-[21px] shrink-0">
          Christopher Mao / Griffin “it’s tomourow” Cooper / Zachary Cummins /
          Kasra “Pangaea” Panahi
        </h3>
        <h3 className="m-0 w-[1200px] relative text-base font-normal font-inherit flex items-center h-[21px] shrink-0">
          Website Development Team
        </h3>
      </div>
    </div>
  );
};

export default FramePhoto;
