import { useMemo } from "react";

const Boxes = ({ user1, user2, iconHeaderBorder, iconHeaderBorder1 }) => {
  const iconHeader2Style = useMemo(() => {
    return {
      border: iconHeaderBorder,
    };
  }, [iconHeaderBorder]);

  const iconHeader3Style = useMemo(() => {
    return {
      border: iconHeaderBorder1,
    };
  }, [iconHeaderBorder1]);

  return (
    <div className="max-w-full overflow-hidden flex flex-row items-start justify-start py-5 px-[5px] box-border gap-[25px] text-center text-5xl text-black font-poppins">
      <div
        className="rounded-3xs bg-gainsboro-200 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start py-[18px] px-2.5"
        style={iconHeader2Style}
      >
        <img
          className="w-[120px] relative h-[120px] overflow-hidden shrink-0 object-cover"
          alt=""
          src={user1}
        />
        <h2 className="m-0 w-[221px] relative text-inherit font-normal font-inherit flex items-center justify-center h-[85px] shrink-0">
          Organizer
        </h2>
      </div>
      <div
        className="rounded-3xs bg-gainsboro-200 shadow-[4px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start py-[18px] px-2.5"
        style={iconHeader3Style}
      >
        <img
          className="w-[120px] relative h-[120px] overflow-hidden shrink-0 object-cover"
          alt=""
          src={user2}
        />
        <h2 className="m-0 w-[221px] relative text-inherit font-normal font-inherit flex items-center justify-center h-[85px] shrink-0">
          Volunteer
        </h2>
      </div>
    </div>
  );
};

export default Boxes;
