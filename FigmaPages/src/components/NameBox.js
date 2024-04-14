import { useMemo } from "react";

const NameBox = ({
  nameName,
  jobTitle,
  nameBoxWidth,
  nameBoxHeight,
  nameBoxPosition,
  nameBoxTop,
  nameBoxRight,
  nameBoxBottom,
  nameBoxLeft,
  nameNameHeight,
  nameNameWidth,
  nameNameFontSize,
  jobTitleHeight,
  jobTitleWidth,
  jobTitleTop,
}) => {
  const nameBoxStyle = useMemo(() => {
    return {
      width: nameBoxWidth,
      height: nameBoxHeight,
      position: nameBoxPosition,
      top: nameBoxTop,
      right: nameBoxRight,
      bottom: nameBoxBottom,
      left: nameBoxLeft,
    };
  }, [
    nameBoxWidth,
    nameBoxHeight,
    nameBoxPosition,
    nameBoxTop,
    nameBoxRight,
    nameBoxBottom,
    nameBoxLeft,
  ]);

  const nameNameStyle = useMemo(() => {
    return {
      height: nameNameHeight,
      width: nameNameWidth,
      fontSize: nameNameFontSize,
    };
  }, [nameNameHeight, nameNameWidth, nameNameFontSize]);

  const jobTitleStyle = useMemo(() => {
    return {
      height: jobTitleHeight,
      width: jobTitleWidth,
      top: jobTitleTop,
    };
  }, [jobTitleHeight, jobTitleWidth, jobTitleTop]);

  return (
    <div
      className="w-[345px] h-[99px] text-left text-5xl text-black font-poppins"
      style={nameBoxStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-300 [backdrop-filter:blur(15px)] box-border border-[1px] border-solid border-gray-400" />
      <h3
        className="m-0 absolute h-[27.27%] w-[86.96%] top-[23.23%] left-[6.67%] text-inherit font-semibold font-inherit flex items-center"
        style={nameNameStyle}
      >
        {nameName}
      </h3>
      <h5
        className="m-0 absolute h-[27.27%] w-[86.96%] top-[50.51%] left-[6.67%] text-base font-normal font-inherit flex items-center"
        style={jobTitleStyle}
      >
        {jobTitle}
      </h5>
    </div>
  );
};

export default NameBox;
