import { useMemo } from "react";
import VolunteerButton from "./VolunteerButton";

const PicText = ({
  volunteer,
  pastMidnight,
  volunteer1,
  propPosition,
  propHeight,
  propMarginRight,
  propTop,
  propLeft,
  propBoxShadow,
  propBackgroundColor,
  propWidth,
  propWidth1,
  propDisplay,
  propBorder,
  propPadding,
  propBackgroundColor1,
  propWidth2,
  propPosition1,
  propHeight1,
  propDisplay1,
  propPosition2,
  propHeight2,
  propWidth3,
  propTop1,
  propLeft1,
  propFontSize,
  propFontFamily,
  propColor,
  propTextAlign,
}) => {
  const picText1Style = useMemo(() => {
    return {
      position: propPosition,
      height: propHeight,
      marginRight: propMarginRight,
      top: propTop,
      left: propLeft,
      boxShadow: propBoxShadow,
      backgroundColor: propBackgroundColor,
    };
  }, [
    propPosition,
    propHeight,
    propMarginRight,
    propTop,
    propLeft,
    propBoxShadow,
    propBackgroundColor,
  ]);

  const frameDiv14Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const bestBuddiesSomethingContainerStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const pastMidnightStyle = useMemo(() => {
    return {
      display: propDisplay,
      border: propBorder,
      padding: propPadding,
      backgroundColor: propBackgroundColor1,
      width: propWidth2,
      position: propPosition1,
      height: propHeight1,
    };
  }, [
    propDisplay,
    propBorder,
    propPadding,
    propBackgroundColor1,
    propWidth2,
    propPosition1,
    propHeight1,
  ]);

  const volunteer2Style = useMemo(() => {
    return {
      display: propDisplay1,
      position: propPosition2,
      height: propHeight2,
      width: propWidth3,
      top: propTop1,
      left: propLeft1,
      fontSize: propFontSize,
      fontFamily: propFontFamily,
      color: propColor,
      textAlign: propTextAlign,
    };
  }, [
    propDisplay1,
    propPosition2,
    propHeight2,
    propWidth3,
    propTop1,
    propLeft1,
    propFontSize,
    propFontFamily,
    propColor,
    propTextAlign,
  ]);

  return (
    <div
      className="w-[1280px] shadow-[0px_-10px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-start py-[65px] px-[124px] box-border gap-[50px] h-[676px] mr-2.5 text-left text-5xl text-dimgray-200 font-inter"
      style={picText1Style}
    >
      <div
        className="overflow-hidden flex flex-col items-start justify-center py-[58px] px-[33px] gap-[32px]"
        style={frameDiv14Style}
      >
        <h1 className="m-0 relative text-inherit font-normal font-inherit">
          {volunteer}
        </h1>
        <p
          className="m-0 w-[480px] relative text-45xl font-bold text-black inline-block"
          style={bestBuddiesSomethingContainerStyle}
        >
          <span className="block" style={pastMidnightStyle}>
            {pastMidnight}
          </span>
          <span className="block" style={volunteer2Style}>
            {volunteer1}
          </span>
          <span className="block">Opportunity</span>
        </p>
        <VolunteerButton arrow1="/arrow-1.svg" volunteer="Volunteer" />
      </div>
      <img
        className="w-[393px] relative h-[440px] object-cover"
        alt=""
        src="/austinkehmeierlyikexa4zqaunsplash-11@2x.png"
      />
    </div>
  );
};

export default PicText;
