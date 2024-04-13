import { useMemo } from "react";

const Date11 = ({ propDisplay }) => {
  const div44Style = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] w-[42px] h-[42px] flex flex-col items-center justify-center box-border">
      <div
        className="relative text-lg leading-[22px] font-medium font-lato text-black text-center"
        style={div44Style}
      >
        1
      </div>
    </button>
  );
};

export default Date11;
