import FramePhoto from "./FramePhoto";
import PFPText1 from "./PFPText1";

const PhotoGallery1 = () => {
  return (
    <div className="bg-white overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-10 gap-[30px] text-left text-xl text-black font-poppins">
      <FramePhoto />
      <div className="overflow-hidden flex flex-row items-start justify-start py-0 px-2.5 gap-[85px]">
        <PFPText1 pfp1="/pfp-1@2x.png" nameName="Hudson Blechman" />
        <PFPText1 pfp1="/pfp-11@2x.png" nameName="Julian Wyman" />
        <PFPText1 pfp1="/pfp-12@2x.png" nameName="Grayson Roberts" />
      </div>
    </div>
  );
};

export default PhotoGallery1;
