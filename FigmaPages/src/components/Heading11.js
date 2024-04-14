import { useMemo } from "react";

const Heading1 = ({
  propFontWeight,
  propFontWeight1,
  propFontWeight2,
  onButtonClick,
  onButton1Click,
  onButton2Click,
}) => {
  const volunteersStyle = useMemo(() => {
    return {
      fontWeight: propFontWeight,
    };
  }, [propFontWeight]);

  const volunteers1Style = useMemo(() => {
    return {
      fontWeight: propFontWeight1,
    };
  }, [propFontWeight1]);

  const volunteers2Style = useMemo(() => {
    return {
      fontWeight: propFontWeight2,
    };
  }, [propFontWeight2]);

  return (
    <div className="w-[1164px] h-[106px] overflow-hidden shrink-0 flex flex-row items-end justify-start py-[17px] pr-[464px] pl-2.5 box-border">
      <div className="h-[70px] overflow-hidden flex flex-row items-center justify-start">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-row items-center justify-center">
          <b
            className="w-[230px] relative text-5xl flex font-poppins text-black text-center items-center justify-center h-[70px] shrink-0"
            style={volunteersStyle}
          >
            Volunteers
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-row items-center justify-center"
          onClick={onButton1Click}
        >
          <div
            className="w-[230px] relative text-5xl font-poppins text-black text-center flex items-center justify-center h-[70px] shrink-0"
            style={volunteers1Style}
          >
            Organizations
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-row items-center justify-center"
          onClick={onButton2Click}
        >
          <div
            className="w-[230px] relative text-5xl font-poppins text-black text-center flex items-center justify-center h-[70px] shrink-0"
            style={volunteers2Style}
          >
            Events
          </div>
        </button>
      </div>
      <div className="w-[1151px] relative box-border h-px ml-[-693px] border-t-[1px] border-solid border-black" />
    </div>
  );
};

export default Heading1;
