import { useMemo } from "react";

const DateLine = ({
  divDisplay,
  divDisplay1,
  divDisplay2,
  divDisplay3,
  divDisplay4,
  divDisplay5,
  divDisplay6,
}) => {
  const div36Style = useMemo(() => {
    return {
      display: divDisplay,
    };
  }, [divDisplay]);

  const div37Style = useMemo(() => {
    return {
      display: divDisplay1,
    };
  }, [divDisplay1]);

  const div38Style = useMemo(() => {
    return {
      display: divDisplay2,
    };
  }, [divDisplay2]);

  const div39Style = useMemo(() => {
    return {
      display: divDisplay3,
    };
  }, [divDisplay3]);

  const div40Style = useMemo(() => {
    return {
      display: divDisplay4,
    };
  }, [divDisplay4]);

  const div41Style = useMemo(() => {
    return {
      display: divDisplay5,
    };
  }, [divDisplay5]);

  const div42Style = useMemo(() => {
    return {
      display: divDisplay6,
    };
  }, [divDisplay6]);

  return (
    <div className="max-w-full flex flex-row items-center justify-center py-1 px-8 box-border gap-[10px] self-stretch">
      <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] w-[42px] h-[42px] flex flex-col items-center justify-center box-border">
        <div
          className="relative text-lg leading-[22px] font-medium font-lato text-black text-center"
          style={div36Style}
        >
          1
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] w-[42px] h-[42px] flex flex-col items-center justify-center box-border">
        <div
          className="relative text-lg leading-[22px] font-medium font-lato text-black text-center"
          style={div37Style}
        >
          1
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] w-[42px] h-[42px] flex flex-col items-center justify-center box-border">
        <div
          className="relative text-lg leading-[22px] font-medium font-lato text-black text-center"
          style={div38Style}
        >
          1
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] w-[42px] h-[42px] flex flex-col items-center justify-center box-border">
        <div
          className="relative text-lg leading-[22px] font-medium font-lato text-black text-center"
          style={div39Style}
        >
          1
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] w-[42px] h-[42px] flex flex-col items-center justify-center box-border">
        <div
          className="relative text-lg leading-[22px] font-medium font-lato text-black text-center"
          style={div40Style}
        >
          1
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] w-[42px] h-[42px] flex flex-col items-center justify-center box-border">
        <div
          className="relative text-lg leading-[22px] font-medium font-lato text-black text-center"
          style={div41Style}
        >
          1
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] w-[42px] h-[42px] flex flex-col items-center justify-center box-border">
        <div
          className="relative text-lg leading-[22px] font-medium font-lato text-black text-center"
          style={div42Style}
        >
          1
        </div>
      </button>
    </div>
  );
};

export default DateLine;
