import VolunteerButton1 from "./VolunteerButton1";

const FrameComponent2 = () => {
  return (
    <div className="w-[391px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-[58px] px-[33px] box-border gap-[32px] text-left text-5xl text-dimgray-200 font-inter">
      <div className="relative">Read</div>
      <b className="w-[358px] relative text-45xl inline-block text-black">
        Impact Tree
      </b>
      <VolunteerButton1
        arrow1="/arrow-11.svg"
        volunteer="Learn More"
        propColor="#000"
      />
    </div>
  );
};

export default FrameComponent2;
