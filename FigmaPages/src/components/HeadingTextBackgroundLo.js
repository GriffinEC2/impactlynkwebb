import { useMemo } from "react";

const HeadingTextBackgroundLo = ({
  headingTextBackgroundLoBorderRadius,
  headingTextBackgroundLoBackdropFilter,
  headingTextBackgroundLoAlignSelf,
  headingTextBackgroundLoPosition,
  headingTextBackgroundLoTop,
  headingTextBackgroundLoLeft,
  logoBorder,
  logoPadding,
  logoBackgroundColor,
  impactLynkMargin,
  impactLynkFontWeight,
  impactLynkColor,
  onLogoClick,
}) => {
  const headingTextBackgroundLoStyle = useMemo(() => {
    return {
      borderRadius: headingTextBackgroundLoBorderRadius,
      backdropFilter: headingTextBackgroundLoBackdropFilter,
      alignSelf: headingTextBackgroundLoAlignSelf,
      position: headingTextBackgroundLoPosition,
      top: headingTextBackgroundLoTop,
      left: headingTextBackgroundLoLeft,
    };
  }, [
    headingTextBackgroundLoBorderRadius,
    headingTextBackgroundLoBackdropFilter,
    headingTextBackgroundLoAlignSelf,
    headingTextBackgroundLoPosition,
    headingTextBackgroundLoTop,
    headingTextBackgroundLoLeft,
  ]);

  const logoStyle = useMemo(() => {
    return {
      border: logoBorder,
      padding: logoPadding,
      backgroundColor: logoBackgroundColor,
    };
  }, [logoBorder, logoPadding, logoBackgroundColor]);

  const impactLynk2Style = useMemo(() => {
    return {
      margin: impactLynkMargin,
      fontWeight: impactLynkFontWeight,
      color: impactLynkColor,
    };
  }, [impactLynkMargin, impactLynkFontWeight, impactLynkColor]);

  return (
    <div
      className="max-w-full overflow-hidden flex flex-col items-center justify-center py-[105px] px-[58px] box-border gap-[80px] text-center text-21xl text-gainsboro-200 font-poppins"
      style={headingTextBackgroundLoStyle}
    >
      <div
        className="w-[125.4px] relative shadow-[15px_15px_4px_rgba(0,_0,_0,_0.25)] h-[125.4px]"
        style={logoStyle}
        onClick={onLogoClick}
      >
        <div className="absolute h-[102.39%] w-[102.39%] top-[20.89%] right-[-23.29%] bottom-[-23.29%] left-[20.89%] rounded-8xs box-border border-[29.2px] border-solid border-darkslategray-200" />
        <div className="absolute h-[102.39%] w-[102.39%] top-[-11.64%] right-[9.25%] bottom-[9.25%] left-[-11.64%] rounded-8xs box-border border-[29.2px] border-solid border-forestgreen-100" />
        <div className="absolute h-[23.29%] w-[23.29%] top-[20.97%] right-[9.25%] bottom-[55.74%] left-[67.46%] bg-darkslategray-200" />
      </div>
      <b
        className="w-[308px] relative flex items-center justify-center h-[45px] shrink-0"
        style={impactLynk2Style}
      >
        ImpactLynk
      </b>
    </div>
  );
};

export default HeadingTextBackgroundLo;
