import { useMemo } from "react";

const Property1ActualButton = ({
  property1ActualButtonPosition,
  volunteerBorder,
  volunteerPadding,
  volunteerBackgroundColor,
  volunteerFontWeight,
  onVolunteerButtonClick,
}) => {
  const property1ActualButtonStyle = useMemo(() => {
    return {
      position: property1ActualButtonPosition,
    };
  }, [property1ActualButtonPosition]);

  const volunteerStyle = useMemo(() => {
    return {
      border: volunteerBorder,
      padding: volunteerPadding,
      backgroundColor: volunteerBackgroundColor,
      fontWeight: volunteerFontWeight,
    };
  }, [
    volunteerBorder,
    volunteerPadding,
    volunteerBackgroundColor,
    volunteerFontWeight,
  ]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] w-[137px] h-[46px]"
      style={property1ActualButtonStyle}
      onClick={onVolunteerButtonClick}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-forestgreen-200 w-[137px] h-[46px]" />
      <b
        className="absolute top-[0px] left-[0px] text-sm flex font-poppins text-white text-center items-center justify-center w-[137px] h-[46px]"
        style={volunteerStyle}
      >
        Volunteer
      </b>
    </button>
  );
};

export default Property1ActualButton;
