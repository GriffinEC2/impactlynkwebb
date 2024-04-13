const NameBar = ({ onHours1Click, onRectangleClick }) => {
  return (
    <div className="w-[2218px] relative rounded-xl bg-gainsboro-200 h-[60px] text-left text-base text-black font-poppins">
      <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1074px] h-[50px]" />
      <div className="absolute top-[5px] left-[14px] w-[2175.1px] h-[46px]">
        <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[15px]">
          <img
            className="w-10 relative rounded-[50%] h-10 object-cover"
            alt=""
            src="/ellipse-2@2x.png"
          />
          <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
            Some Event
          </h3>
          <h3 className="m-0 w-[270px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
            04/14
          </h3>
          <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
            12:00
          </h3>
          <h3 className="m-0 w-[131px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
            15:15
          </h3>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[91.3%] w-[9.31%] top-[8.7%] right-[0%] bottom-[0%] left-[90.69%]"
          onClick={onHours1Click}
        >
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100 cursor-pointer"
            onClick={onRectangleClick}
          />
          <h3 className="m-0 absolute h-[71.43%] w-[75.49%] top-[17.14%] left-[10.23%] text-base tracking-[1px] font-semibold font-poppins text-black text-center flex items-center justify-center">
            Cancel
          </h3>
        </button>
      </div>
    </div>
  );
};

export default NameBar;
