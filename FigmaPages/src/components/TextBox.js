import { useMemo } from "react";

const TextBox = ({
  firstName,
  somename,
  showFirstName,
  textBoxBorder,
  somenameTextAlign,
  somenameMarginTop,
  textBoxWidth,
  textBoxHeight,
  onTextBoxClick,
}) => {
  const textBoxStyle = useMemo(() => {
    return {
      border: textBoxBorder,
      width: textBoxWidth,
      height: textBoxHeight,
    };
  }, [textBoxBorder, textBoxWidth, textBoxHeight]);

  const somenameStyle = useMemo(() => {
    return {
      textAlign: somenameTextAlign,
      marginTop: somenameMarginTop,
    };
  }, [somenameTextAlign, somenameMarginTop]);

  return (
    <div
      className="rounded-8xs bg-gainsboro-200 flex flex-col items-start justify-start py-0.5 px-2.5 text-left text-smi text-gray-300 font-poppins"
      style={textBoxStyle}
      onClick={onTextBoxClick}
    >
      {showFirstName && (
        <div className="w-[239px] relative inline-block h-[23px] shrink-0 opacity-[0.6]">
          {firstName}
        </div>
      )}
      <div
        className="w-[239px] relative text-mini text-black inline-block h-[23px] shrink-0 opacity-[0.6] mt-[-5px]"
        style={somenameStyle}
      >
        {somename}
      </div>
    </div>
  );
};

export default TextBox;
