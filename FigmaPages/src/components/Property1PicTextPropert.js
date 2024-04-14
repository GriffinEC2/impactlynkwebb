import { useMemo } from "react";

const Property1PicTextPropert = ({
  headingTextalarm,
  totalHoursHelpingOrganiza,
  prop,
  property1PicTextPropertPosition,
  property1PicTextPropertBoxShadow,
  property1PicTextPropertBorder,
  headingTextalarmOverflow,
  totalHoursHelpingLeft,
}) => {
  const property1PicTextPropertStyle = useMemo(() => {
    return {
      position: property1PicTextPropertPosition,
      boxShadow: property1PicTextPropertBoxShadow,
      border: property1PicTextPropertBorder,
    };
  }, [
    property1PicTextPropertPosition,
    property1PicTextPropertBoxShadow,
    property1PicTextPropertBorder,
  ]);

  const headingTextalarmStyle = useMemo(() => {
    return {
      overflow: headingTextalarmOverflow,
    };
  }, [headingTextalarmOverflow]);

  const totalHoursHelpingStyle = useMemo(() => {
    return {
      left: totalHoursHelpingLeft,
    };
  }, [totalHoursHelpingLeft]);

  return (
    <div
      className="w-[486px] rounded-3xs bg-white shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] box-border max-w-full h-[300px] overflow-hidden text-left text-5xl text-black font-poppins border-[1px] border-solid border-gray-500"
      style={property1PicTextPropertStyle}
    >
      <img
        className="absolute top-[38px] left-[19px] w-[125px] h-[125px] overflow-hidden object-cover"
        alt=""
        src={headingTextalarm}
        style={headingTextalarmStyle}
      />
      <p
        className="m-0 absolute top-[31px] left-[172px] flex items-center w-[310px] h-[140px]"
        style={totalHoursHelpingStyle}
      >
        {totalHoursHelpingOrganiza}
      </p>
      <h1 className="m-0 absolute top-[183px] left-[-21px] text-77xl font-bold font-inherit text-center flex items-center justify-center w-[376px] h-20">
        {prop}
      </h1>
    </div>
  );
};

export default Property1PicTextPropert;
