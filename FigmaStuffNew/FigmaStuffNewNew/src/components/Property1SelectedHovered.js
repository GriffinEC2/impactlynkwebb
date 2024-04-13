import { useMemo } from "react";

const Property1SelectedHovered = ({
  rectangle,
  property1SelectedHoveredHeight,
  property1SelectedHoveredPosition,
  property1SelectedHoveredTop,
  property1SelectedHoveredLeft,
  rectangleTop,
  rectangleBottom,
  textHeight,
  textBottom,
  rectangleIconHeight,
  rectangleIconBottom,
  hoursTop,
}) => {
  const property1SelectedHoveredStyle = useMemo(() => {
    return {
      height: property1SelectedHoveredHeight,
      position: property1SelectedHoveredPosition,
      top: property1SelectedHoveredTop,
      left: property1SelectedHoveredLeft,
    };
  }, [
    property1SelectedHoveredHeight,
    property1SelectedHoveredPosition,
    property1SelectedHoveredTop,
    property1SelectedHoveredLeft,
  ]);

  const rectangleStyle = useMemo(() => {
    return {
      top: rectangleTop,
      bottom: rectangleBottom,
    };
  }, [rectangleTop, rectangleBottom]);

  const textStyle = useMemo(() => {
    return {
      height: textHeight,
      bottom: textBottom,
    };
  }, [textHeight, textBottom]);

  const rectangleIconStyle = useMemo(() => {
    return {
      height: rectangleIconHeight,
      bottom: rectangleIconBottom,
    };
  }, [rectangleIconHeight, rectangleIconBottom]);

  const hoursStyle = useMemo(() => {
    return {
      top: hoursTop,
    };
  }, [hoursTop]);

  return (
    <div
      className="w-[26px] h-[248px] text-center text-xs text-white font-poppins"
      style={property1SelectedHoveredStyle}
    >
      <div
        className="absolute h-full w-full top-[18.95%] right-[0%] bottom-[-18.95%] left-[0%] rounded-t-3xs rounded-b-none bg-forestgreen-200"
        style={rectangleStyle}
      />
      <div
        className="absolute h-[14.92%] w-[292.31%] top-[0%] right-[-96.15%] bottom-[85.08%] left-[-96.15%] overflow-hidden"
        style={textStyle}
      >
        <img
          className="absolute h-[97.57%] w-full top-[0%] right-[0%] bottom-[2.43%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src={rectangle}
          style={rectangleIconStyle}
        />
        <div
          className="absolute top-[calc(50%_-_9.5px)] left-[17.76%] tracking-[1px]"
          style={hoursStyle}
        >
          5 hours
        </div>
      </div>
    </div>
  );
};

export default Property1SelectedHovered;
