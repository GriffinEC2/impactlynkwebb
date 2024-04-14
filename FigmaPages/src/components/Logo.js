import { useMemo } from "react";

const Logo = ({
  rectangleDivBorder,
  rectangleDivPadding,
  rectangleDivBackgroundColor,
  rectangleDivWidth,
  rectangleDivHeight,
  rectangleDivBoxShadow,
  rectangleDivHeight1,
  rectangleDivWidth1,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivLeft,
  rectangleDivBorder1,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propBorder,
  propHeight1,
  propWidth1,
  propTop1,
  propRight1,
  propBottom1,
  propLeft1,
  onLogoClick,
}) => {
  const logo2Style = useMemo(() => {
    return {
      border: rectangleDivBorder,
      padding: rectangleDivPadding,
      backgroundColor: rectangleDivBackgroundColor,
      width: rectangleDivWidth,
      height: rectangleDivHeight,
      boxShadow: rectangleDivBoxShadow,
    };
  }, [
    rectangleDivBorder,
    rectangleDivPadding,
    rectangleDivBackgroundColor,
    rectangleDivWidth,
    rectangleDivHeight,
    rectangleDivBoxShadow,
  ]);

  const rectangleDiv3Style = useMemo(() => {
    return {
      height: rectangleDivHeight1,
      width: rectangleDivWidth1,
      top: rectangleDivTop,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      left: rectangleDivLeft,
      border: rectangleDivBorder1,
    };
  }, [
    rectangleDivHeight1,
    rectangleDivWidth1,
    rectangleDivTop,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivLeft,
    rectangleDivBorder1,
  ]);

  const rectangleDiv4Style = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
      border: propBorder,
    };
  }, [
    propHeight,
    propWidth,
    propTop,
    propRight,
    propBottom,
    propLeft,
    propBorder,
  ]);

  const rectangleDiv5Style = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth1,
      top: propTop1,
      right: propRight1,
      bottom: propBottom1,
      left: propLeft1,
    };
  }, [propHeight1, propWidth1, propTop1, propRight1, propBottom1, propLeft1]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] w-[43px] relative h-[43px]"
      style={logo2Style}
      onClick={onLogoClick}
    >
      <div
        className="absolute h-[102.33%] w-[102.33%] top-[20.93%] right-[-23.26%] bottom-[-23.26%] left-[20.93%] rounded-8xs box-border border-[10px] border-solid border-darkslategray-200"
        style={rectangleDiv3Style}
      />
      <div
        className="absolute h-[102.33%] w-[102.33%] top-[-11.63%] right-[9.3%] bottom-[9.3%] left-[-11.63%] rounded-8xs box-border border-[10px] border-solid border-mediumseagreen"
        style={rectangleDiv4Style}
      />
      <div
        className="absolute h-[23.26%] w-[23.26%] top-[20.93%] right-[9.3%] bottom-[55.81%] left-[67.44%] bg-darkslategray-200"
        style={rectangleDiv5Style}
      />
    </button>
  );
};

export default Logo;
