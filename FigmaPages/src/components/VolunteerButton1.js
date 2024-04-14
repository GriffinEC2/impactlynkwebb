import { useMemo } from "react";

const VolunteerButton1 = ({
  arrow1,
  volunteer,
  propColor,
  onVolunteerButtonClick,
}) => {
  const volunteer3Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] w-[432px] relative h-[29px]"
      onClick={onVolunteerButtonClick}
    >
      <img
        className="absolute h-[76.21%] w-[17.36%] top-[51.72%] right-[82.64%] bottom-[-27.93%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={arrow1}
      />
      <div
        className="absolute h-full w-[74.77%] top-[0%] left-[25.23%] text-5xl font-inter text-dimgray-200 text-left inline-block"
        style={volunteer3Style}
      >
        {volunteer}
      </div>
    </button>
  );
};

export default VolunteerButton1;
