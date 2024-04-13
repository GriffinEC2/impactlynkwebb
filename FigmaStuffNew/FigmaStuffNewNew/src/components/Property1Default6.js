import { useMemo } from "react";

const Property1Default1 = ({
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultBorder,
  impactLynkFontWeight,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      border: property1DefaultBorder,
    };
  }, [property1DefaultWidth, property1DefaultHeight, property1DefaultBorder]);

  const impactLynk3Style = useMemo(() => {
    return {
      fontWeight: impactLynkFontWeight,
    };
  }, [impactLynkFontWeight]);

  return (
    <div
      className="w-[1280px] bg-seagreen max-w-full h-[100px] overflow-hidden flex flex-row items-center justify-start py-[50px] px-10 box-border gap-[450px]"
      style={property1DefaultStyle}
    >
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[35px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[43px] relative h-[43px]">
          <div className="absolute h-[102.33%] w-[102.33%] top-[20.93%] right-[-23.26%] bottom-[-23.26%] left-[20.93%] rounded-8xs box-border border-[10px] border-solid border-darkslategray-200" />
          <div className="absolute h-[102.33%] w-[102.33%] top-[-11.63%] right-[9.3%] bottom-[9.3%] left-[-11.63%] rounded-8xs box-border border-[10px] border-solid border-mediumseagreen" />
          <div className="absolute h-[23.26%] w-[23.26%] top-[20.93%] right-[9.3%] bottom-[55.81%] left-[67.44%] bg-darkslategray-200" />
        </button>
        <div
          className="relative text-17xl font-poppins text-white text-left"
          style={impactLynk3Style}
        >
          ImpactLynk
        </div>
      </button>
      <div className="overflow-hidden flex flex-row items-center justify-center gap-[1px]">
        <button className="cursor-pointer [border:none] py-0 px-[30px] bg-[transparent] rounded-61xl shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center">
          <div className="relative text-xl font-poppins text-white text-left">
            Sign in
          </div>
        </button>
        <div className="w-px relative box-border h-[65px] border-r-[1px] border-solid border-gray-600" />
        <button className="cursor-pointer [border:none] py-0 px-[30px] bg-[transparent] rounded-61xl shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center">
          <div className="relative text-xl font-poppins text-white text-left">
            Volunteer
          </div>
        </button>
        <div className="w-px relative box-border h-[65px] border-r-[1px] border-solid border-gray-600" />
        <button className="cursor-pointer [border:none] py-0 px-[30px] bg-[transparent] rounded-61xl shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center">
          <div className="relative text-xl font-poppins text-white text-left">
            About Us
          </div>
        </button>
      </div>
    </div>
  );
};

export default Property1Default1;
