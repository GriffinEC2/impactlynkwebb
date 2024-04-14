import VolunteerButton from "./VolunteerButton";

const PicText5 = () => {
  return (
    <div className="absolute top-[930px] left-[-3px] shadow-[0px_-10px_10px_rgba(0,_0,_0,_0.25)] w-[1283px] overflow-hidden flex flex-row items-center justify-start py-[65px] px-[124px] box-border gap-[50px] text-left text-5xl text-dimgray-200 font-inter">
      <img
        className="w-[393px] relative h-[440px] object-cover"
        alt=""
        src="/austinkehmeierlyikexa4zqaunsplash-1@2x.png"
      />
      <div className="overflow-hidden flex flex-col items-start justify-center py-[58px] px-[33px] gap-[32px]">
        <h6 className="m-0 relative text-inherit font-normal font-inherit">
          4/2 at 12:00 – Volunteer
        </h6>
        <p className="m-0 w-[616px] relative text-45xl font-bold text-black inline-block">
          <span className="block">{`Best Buddies: `}</span>
          <span className="block">something somthing some some</span>
        </p>
        <VolunteerButton
          arrow1="/arrow-1.svg"
          volunteer="Volunteer"
          propColor="#666"
        />
      </div>
    </div>
  );
};

export default PicText5;
