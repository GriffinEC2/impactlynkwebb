import { useMemo } from "react";

const Heading = ({
  newestOpportunities,
  showLineIcon,
  lineIconVisible,
  headingBackgroundColor,
  headingBoxShadow,
  headingHeight,
  headingWidth,
  headingPosition,
  headingTop,
  headingLeft,
  newestOpportunitiesFontWeight,
  newestOpportunitiesColor,
  newestOpportunitiesMargin,
}) => {
  const headingStyle = useMemo(() => {
    return {
      backgroundColor: headingBackgroundColor,
      boxShadow: headingBoxShadow,
      height: headingHeight,
      width: headingWidth,
      position: headingPosition,
      top: headingTop,
      left: headingLeft,
    };
  }, [
    headingBackgroundColor,
    headingBoxShadow,
    headingHeight,
    headingWidth,
    headingPosition,
    headingTop,
    headingLeft,
  ]);

  const newestOpportunitiesStyle = useMemo(() => {
    return {
      fontWeight: newestOpportunitiesFontWeight,
      color: newestOpportunitiesColor,
      margin: newestOpportunitiesMargin,
    };
  }, [
    newestOpportunitiesFontWeight,
    newestOpportunitiesColor,
    newestOpportunitiesMargin,
  ]);

  return (
    <div
      className="w-[1280px] bg-white max-w-full h-[195px] overflow-hidden flex flex-col items-center justify-start gap-[20px] text-center text-29xl text-black font-poppins"
      style={headingStyle}
    >
      {showLineIcon && (
        <img className="w-[890px] relative h-0.5 object-contain" alt="" />
      )}
      {lineIconVisible && (
        <img className="w-[890px] relative h-0.5 object-contain" alt="" />
      )}
      <h1
        className="m-0 w-[898px] relative text-inherit font-normal font-inherit flex items-center justify-center h-[148px] shrink-0"
        style={newestOpportunitiesStyle}
      >
        {newestOpportunities}
      </h1>
    </div>
  );
};

export default Heading;
