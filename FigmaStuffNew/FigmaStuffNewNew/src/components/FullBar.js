import { useMemo } from "react";

const FullBar = ({ month, propMarginLeft }) => {
  const fullBarStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  return (
    <div
      className="w-[95px] relative h-[359px] overflow-hidden shrink-0 ml-[-45px] text-center text-xs text-darkslategray-100 font-poppins"
      style={fullBarStyle}
    >
      <div className="absolute w-[168.53%] top-[calc(50%_+_160.5px)] left-[-34.32%] tracking-[1px] inline-block h-3.5">
        {month}
      </div>
      <div className="absolute top-[121px] left-[35px] w-[26px] h-[198px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-3xs rounded-b-none bg-gainsboro-100" />
      </div>
    </div>
  );
};

export default FullBar;
