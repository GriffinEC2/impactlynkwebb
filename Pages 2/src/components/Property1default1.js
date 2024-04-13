import { useMemo } from "react";

const Property1default = ({
  carNumber,
  property1defaultBorder,
  property1defaultBackgroundColor,
  divDisplay,
  divOpacity,
}) => {
  const property1defaultStyle = useMemo(() => {
    return {
      border: property1defaultBorder,
      backgroundColor: property1defaultBackgroundColor,
    };
  }, [property1defaultBorder, property1defaultBackgroundColor]);

  const div1Style = useMemo(() => {
    return {
      display: divDisplay,
      opacity: divOpacity,
    };
  }, [divDisplay, divOpacity]);

  return (
    <div
      className="h-[42px] flex flex-col items-center justify-center p-2.5 box-border text-center text-lg text-black font-lato flex-1"
      style={property1defaultStyle}
    >
      <div className="relative leading-[22px] font-medium" style={div1Style}>
        {carNumber}
      </div>
    </div>
  );
};

export default Property1default;
