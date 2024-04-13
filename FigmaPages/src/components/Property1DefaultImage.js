import { useMemo } from "react";

const Property1DefaultImage = ({
  property1DefaultImageProp,
  property1DefaultIconPosition,
}) => {
  const property1DefaultIconStyle = useMemo(() => {
    return {
      position: property1DefaultIconPosition,
    };
  }, [property1DefaultIconPosition]);

  return (
    <img
      className="w-[120px] max-w-full overflow-hidden h-[120px] object-cover"
      alt=""
      src={property1DefaultImageProp}
      style={property1DefaultIconStyle}
    />
  );
};

export default Property1DefaultImage;
