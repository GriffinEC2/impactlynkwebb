import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import VolunteerButton1 from "./VolunteerButton1";

const PicText11 = ({
  volunteer,
  pastMidnight,
  volunteer1,
  propPosition,
  propTop,
  propLeft,
  propHeight,
  propMarginRight,
  propBoxShadow,
  propBackgroundColor,
  propWidth,
  propMargin,
  propFontWeight,
  propMargin1,
  propFontWeight1,
  propWidth1,
  propMargin2,
  propDisplay,
  propBorder,
  propPadding,
  propBackgroundColor1,
  propWidth2,
  propPosition1,
  propHeight1,
  propMargin3,
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
  propMargin4,
  propDisplay2,
  picTextBorder,
  picTextPadding,
  picTextBackgroundColor,
  onPicText2Click,
  onVolunteerButton1Click,
}) => {
  const picText2Style = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      height: propHeight,
      marginRight: propMarginRight,
      boxShadow: propBoxShadow,
      backgroundColor: propBackgroundColor,
    };
  }, [
    propPosition,
    propTop,
    propLeft,
    propHeight,
    propMarginRight,
    propBoxShadow,
    propBackgroundColor,
  ]);

  const frameDiv17Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const volunteer4Style = useMemo(() => {
    return {
      margin: propMargin,
      fontWeight: propFontWeight,
    };
  }, [propMargin, propFontWeight]);

  const bestBuddiesSomethingContainer1Style = useMemo(() => {
    return {
      margin: propMargin1,
      fontWeight: propFontWeight1,
      width: propWidth1,
    };
  }, [propMargin1, propFontWeight1, propWidth1]);

  const pastMidnight1Style = useMemo(() => {
    return {
      margin: propMargin2,
      display: propDisplay,
      border: propBorder,
      padding: propPadding,
      backgroundColor: propBackgroundColor1,
      width: propWidth2,
      position: propPosition1,
      height: propHeight1,
    };
  }, [
    propMargin2,
    propDisplay,
    propBorder,
    propPadding,
    propBackgroundColor1,
    propWidth2,
    propPosition1,
    propHeight1,
  ]);

  const volunteer5Style = useMemo(() => {
    return {
      margin: propMargin3,
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
    propMargin3,
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

  const opportunityStyle = useMemo(() => {
    return {
      margin: propMargin4,
      display: propDisplay2,
    };
  }, [propMargin4, propDisplay2]);

  const volunteerButtonStyle = useMemo(() => {
    return {
      border: picTextBorder,
      padding: picTextPadding,
      backgroundColor: picTextBackgroundColor,
    };
  }, [picTextBorder, picTextPadding, picTextBackgroundColor]);

  const navigate = useNavigate();

  const onVolunteerButtonClick = useCallback(() => {
    navigate("/pre-volunteer-page-1");
  }, [navigate]);

  return (
    <div
      className="w-[1280px] shadow-[0px_-10px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-start py-[65px] px-[124px] box-border gap-[50px] cursor-pointer text-left text-5xl text-dimgray-200 font-inter"
      onClick={onPicText2Click}
      style={picText2Style}
    >
      <div
        className="overflow-hidden flex flex-col items-start justify-center py-[58px] px-[33px] gap-[32px]"
        style={frameDiv17Style}
      >
        <h1
          className="m-0 relative text-inherit font-normal font-inherit"
          style={volunteer4Style}
        >
          {volunteer}
        </h1>
        <p
          className="m-0 w-[480px] relative text-45xl font-bold text-black inline-block"
          style={bestBuddiesSomethingContainer1Style}
        >
          <span className="block" style={pastMidnight1Style}>
            {pastMidnight}
          </span>
          <span className="block" style={volunteer5Style}>
            {volunteer1}
          </span>
          <span className="block" style={opportunityStyle}>
            Opportunity
          </span>
        </p>
        <VolunteerButton1
          arrow1="/arrow-1.svg"
          volunteer="Volunteer"
          propColor="#666"
          onVolunteerButtonClick={onVolunteerButton2Click}
        />
      </div>
      <img
        className="w-[393px] relative h-[440px] object-cover"
        alt=""
        src="/austinkehmeierlyikexa4zqaunsplash-1@2x.png"
      />
    </div>
  );
};

export default PicText11;
