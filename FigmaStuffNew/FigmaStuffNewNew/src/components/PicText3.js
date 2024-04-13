import VolunteerButton from "./VolunteerButton";

const PicText3 = () => {
  return (
    <div className="w-[1280px] bg-white shadow-[0px_3px_10px_rgba(0,_0,_0,_0.25)_inset] overflow-hidden flex flex-row items-center justify-start py-[65px] px-[124px] box-border gap-[50px] text-left text-5xl text-dimgray-200 font-inter">
      <img
        className="w-[393px] relative h-[440px] object-cover"
        alt=""
        src="/austinkehmeierlyikexa4zqaunsplash-12@2x.png"
      />
      <div className="overflow-hidden flex flex-col items-start justify-center py-[58px] px-[33px] gap-[32px]">
        <h6 className="m-0 relative text-inherit font-normal font-inherit">
          Read
        </h6>
        <p className="m-0 w-[616px] relative text-45xl font-bold text-black inline-block">
          Read an article featured on the Marin Independent Journal
        </p>
        <VolunteerButton
          arrow1="/arrow-11.svg"
          volunteer="Learn More"
          propColor="#000"
        />
      </div>
    </div>
  );
};

export default PicText3;
