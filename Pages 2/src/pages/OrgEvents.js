import { useCallback } from "react";
import TopBar from "../components/TopBar";
import NameBar from "../components/NameBar";

const OrgEvents = () => {
  const onRectangleClick1 = useCallback(() => {
    //TODO: Cancel Event
  }, []);

  const onHours1Click1 = useCallback(() => {
    //TODO: Cancel Event
  }, []);

  const onHours2Click = useCallback(() => {
    //TODO: Cancel Event
  }, []);

  const onHours3Click = useCallback(() => {
    //TODO: Cancel Event
  }, []);

  return (
    <div className="w-full relative bg-white h-[832px] overflow-hidden flex flex-col items-center justify-start gap-[30px] text-left text-13xl text-black font-poppins">
      <TopBar
        signIn="Organize"
        signIn1="Events"
        signIn2="About Us"
        frameButtonGap="400px"
      />
      <div className="overflow-hidden flex flex-col items-start justify-start p-5 gap-[34px]">
        <b className="w-[581px] relative flex items-end h-[67px] shrink-0">
          Dashboard: Some Organization
        </b>
        <div className="w-[1120px] rounded-mini bg-whitesmoke-200 shadow-[4px_4px_15px_2px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start p-5 box-border gap-[20px] text-base">
          <div className="w-[1164px] relative h-[106px] overflow-hidden shrink-0">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[17px] left-[10px] overflow-hidden flex flex-row items-center justify-center">
              <div className="w-[230px] relative text-5xl font-poppins text-black text-center flex items-center justify-center h-[70px] shrink-0">
                Events
              </div>
            </button>
            <div className="absolute top-[88.5px] left-[6.5px] box-border w-[1151px] h-px border-t-[1px] border-solid border-black" />
          </div>
          <div className="rounded-xl flex flex-row items-center justify-start py-[5px] px-3.5">
            <div className="flex flex-row items-center justify-start gap-[15px]">
              <h3 className="m-0 w-[316px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                Some Event
              </h3>
              <h3 className="m-0 w-[270px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                Date
              </h3>
              <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                Start Time
              </h3>
              <h3 className="m-0 w-[225px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                End Time
              </h3>
            </div>
          </div>
          <NameBar onRectangleClick={onRectangleClick1} />
          <NameBar onHours1Click={onHours1Click1} />
          <NameBar onHours1Click={onHours2Click} />
          <NameBar onHours1Click={onHours3Click} />
        </div>
      </div>
    </div>
  );
};

export default OrgEvents;
