import { useMemo } from "react";

const LeaderBoard = ({ prop, leaderBoardBoxShadow }) => {
  const leaderBoardStyle = useMemo(() => {
    return {
      boxShadow: leaderBoardBoxShadow,
    };
  }, [leaderBoardBoxShadow]);

  return (
    <div
      className="rounded-xl bg-white shadow-[10px_10px_10px_10px_rgba(0,_0,_0,_0.25)] max-w-full h-[484px] overflow-hidden flex flex-col items-start justify-center p-5 box-border gap-[30px] text-left text-base text-black font-poppins"
      style={leaderBoardStyle}
    >
      <h1 className="m-0 w-[191px] relative text-inherit tracking-[1px] font-semibold font-inherit inline-block h-[25px] shrink-0">
        LeaderBoard
      </h1>
      <div className="w-[481px] relative h-[50px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
          <img
            className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-211@2x.png"
          />
          <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
            Someone’s Name
          </h3>
        </div>
        <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
          <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
            52
          </h3>
        </div>
      </div>
      <div className="w-[481px] relative h-[50px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
          <img
            className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-22@2x.png"
          />
          <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
            Someone’s Name
          </h3>
        </div>
        <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
          <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
            46
          </h3>
        </div>
      </div>
      <div className="w-[481px] relative h-[50px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
          <img
            className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-23@2x.png"
          />
          <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
            Someone’s Name
          </h3>
        </div>
        <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
          <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
            32
          </h3>
        </div>
      </div>
      <div className="w-[481px] relative h-[50px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
          <img
            className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-24@2x.png"
          />
          <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
            Someone’s Name
          </h3>
        </div>
        <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
          <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
            30
          </h3>
        </div>
      </div>
      <div className="w-[481px] relative h-[50px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
          <img
            className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-25@2x.png"
          />
          <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
            Someone’s Name
          </h3>
        </div>
        <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
          <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
            {prop}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
