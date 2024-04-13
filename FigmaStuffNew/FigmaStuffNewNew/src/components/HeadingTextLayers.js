import { useMemo } from "react";

const HeadingTextLayers = ({
  headingTextLayersHeadingT,
  headingTextLayersWidth,
  headingTextLayersOverflow,
  headingTextLayersHeight,
  headingTextLayersPosition,
  headingTextLayersTop,
  headingTextLayersLeft,
}) => {
  const headingTextLayersStyle = useMemo(() => {
    return {
      width: headingTextLayersWidth,
      overflow: headingTextLayersOverflow,
      height: headingTextLayersHeight,
      position: headingTextLayersPosition,
      top: headingTextLayersTop,
      left: headingTextLayersLeft,
    };
  }, [
    headingTextLayersWidth,
    headingTextLayersOverflow,
    headingTextLayersHeight,
    headingTextLayersPosition,
    headingTextLayersTop,
    headingTextLayersLeft,
  ]);

  return (
    <img
      className="w-[120px] max-w-full overflow-hidden h-[120px] object-cover"
      alt=""
      src={headingTextLayersHeadingT}
      style={headingTextLayersStyle}
    />
  );
};

export default HeadingTextLayers;
