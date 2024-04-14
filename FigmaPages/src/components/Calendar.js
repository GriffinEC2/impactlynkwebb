import { useMemo } from "react";
import DateLine from "./DateLine";

const Calendar = ({ dateBoxShadow, dateBorder }) => {
  const calendarStyle = useMemo(() => {
    return {
      boxShadow: dateBoxShadow,
      border: dateBorder,
    };
  }, [dateBoxShadow, dateBorder]);

  return (
    <div
      className="w-[427px] bg-white flex flex-col items-center justify-center p-1 box-border gap-[8px] text-center text-xl text-gray-3 font-lato"
      style={calendarStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-center py-4 px-8 gap-[10px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 relative h-6 overflow-hidden shrink-0">
          <img
            className="absolute h-3/6 w-3/12 top-[25%] right-[37.5%] bottom-[25%] left-[37.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
        </button>
        <h3 className="m-0 flex-1 relative text-inherit font-semibold font-inherit">
          Month year
        </h3>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 relative h-6 overflow-hidden shrink-0">
          <img
            className="absolute h-3/6 w-3/12 top-[25%] right-[37.5%] bottom-[25%] left-[37.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector1.svg"
          />
        </button>
      </div>
      <div className="w-[356px] relative box-border h-px border-t-[1px] border-solid border-gray-4" />
      <div className="self-stretch flex flex-col items-start justify-start text-left text-xs text-black">
        <div className="self-stretch flex flex-row items-center justify-center py-2 px-8 gap-[11px]">
          <div className="flex-1 flex flex-row items-center justify-center py-0.5 px-2">
            <div className="relative tracking-[0.03em] leading-[12px] uppercase font-medium">
              Day
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center py-0.5 px-2">
            <div className="relative tracking-[0.03em] leading-[12px] uppercase font-medium">
              Day
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center py-0.5 px-2">
            <div className="relative tracking-[0.03em] leading-[12px] uppercase font-medium">
              Day
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center py-0.5 px-2">
            <div className="relative tracking-[0.03em] leading-[12px] uppercase font-medium">
              Day
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center py-0.5 px-2">
            <div className="relative tracking-[0.03em] leading-[12px] uppercase font-medium">
              Day
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center py-0.5 px-2">
            <div className="relative tracking-[0.03em] leading-[12px] uppercase font-medium">
              Day
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center justify-center py-0.5 px-2">
            <div className="relative tracking-[0.03em] leading-[12px] uppercase font-medium">
              Day
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <DateLine
            divDisplay="inline-block"
            divDisplay1="inline-block"
            divDisplay2="inline-block"
            divDisplay3="inline-block"
            divDisplay4="inline-block"
            divDisplay5="inline-block"
            divDisplay6="inline-block"
          />
        </div>
        <DateLine
          divDisplay="inline-block"
          divDisplay1="inline-block"
          divDisplay2="inline-block"
          divDisplay3="inline-block"
          divDisplay4="inline-block"
          divDisplay5="inline-block"
          divDisplay6="inline-block"
        />
        <DateLine
          divDisplay="inline-block"
          divDisplay1="inline-block"
          divDisplay2="inline-block"
          divDisplay3="inline-block"
          divDisplay4="inline-block"
          divDisplay5="inline-block"
          divDisplay6="inline-block"
        />
        <DateLine
          divDisplay="inline-block"
          divDisplay1="inline-block"
          divDisplay2="inline-block"
          divDisplay3="inline-block"
          divDisplay4="inline-block"
          divDisplay5="inline-block"
          divDisplay6="inline-block"
        />
        <DateLine
          divDisplay="inline-block"
          divDisplay1="inline-block"
          divDisplay2="inline-block"
          divDisplay3="inline-block"
          divDisplay4="inline-block"
          divDisplay5="inline-block"
          divDisplay6="inline-block"
        />
      </div>
    </div>
  );
};

export default Calendar;
