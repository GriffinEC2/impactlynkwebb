import { useMemo } from "react";

const IconHeader = ({
  user1,
  organizer,
  iconHeaderBorder,
  organizerWidth,
  organizerDisplay,
  organizerHeight,
  organizerAlignSelf,
}) => {
  const iconHeader4Style = useMemo(() => {
    return {
      border: iconHeaderBorder,
    };
  }, [iconHeaderBorder]);

  const organizer2Style = useMemo(() => {
    return {
      width: organizerWidth,
      display: organizerDisplay,
      height: organizerHeight,
      alignSelf: organizerAlignSelf,
    };
  }, [organizerWidth, organizerDisplay, organizerHeight, organizerAlignSelf]);

  return (
    <div
      className="rounded-3xs bg-gainsboro-200 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start py-[18px] px-2.5 text-center text-5xl text-black font-poppins"
      style={iconHeader4Style}
    >
      <img
        className="w-[120px] relative h-[120px] overflow-hidden shrink-0 object-cover"
        alt=""
        src={user1}
      />
      <h2
        className="m-0 w-[221px] relative text-inherit font-normal font-inherit flex items-center justify-center h-[85px] shrink-0"
        style={organizer2Style}
      >
        {organizer}
      </h2>
    </div>
  );
};

export default IconHeader;
