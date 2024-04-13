import { useMemo } from "react";

const Property1Variant = ({
  property1Variant2Position,
  property1Variant2Border,
  property1Variant2Padding,
  property1Variant2BackgroundColor,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      position: property1Variant2Position,
      border: property1Variant2Border,
      padding: property1Variant2Padding,
      backgroundColor: property1Variant2BackgroundColor,
    };
  }, [
    property1Variant2Position,
    property1Variant2Border,
    property1Variant2Padding,
    property1Variant2BackgroundColor,
  ]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] w-[43px] h-[43px]"
      style={property1Variant2Style}
    >
      <div className="absolute h-[102.33%] w-[102.33%] top-[20.93%] right-[-23.26%] bottom-[-23.26%] left-[20.93%] rounded-8xs box-border border-[10px] border-solid border-darkslategray-200" />
      <div className="absolute h-[102.33%] w-[102.33%] top-[-11.63%] right-[9.3%] bottom-[9.3%] left-[-11.63%] rounded-8xs box-border border-[10px] border-solid border-mediumseagreen" />
      <div className="absolute h-[23.26%] w-[23.26%] top-[20.93%] right-[9.3%] bottom-[55.81%] left-[67.44%] bg-darkslategray-200" />
    </button>
  );
};

export default Property1Variant;
