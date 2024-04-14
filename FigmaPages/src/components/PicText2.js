import VolunteerButton from "./VolunteerButton";

const PicText2 = () => {
  return (
    <div className="w-[1280px] bg-white shadow-[0px_0px_200px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-start py-[65px] px-[124px] box-border gap-[50px] text-left text-5xl text-dimgray-200 font-inter">
      <div className="w-[391px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-[58px] px-[33px] box-border gap-[32px]">
        <div className="relative">Read</div>
        <b className="w-[358px] relative text-45xl inline-block text-black">
          Impact Tree
        </b>
        <VolunteerButton
          arrow1="/arrow-11.svg"
          volunteer="Learn More"
          propColor="#000"
        />
      </div>
      <img
        className="w-[700px] relative h-[200px] object-cover"
        alt=""
        src="/image-2@2x.png"
      />
    </div>
  );
};

export default PicText2;
