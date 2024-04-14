import { useMemo } from "react";

const ProgressBox = ({
  progressBoxPosition,
  rectangleDivBoxShadow,
  rectangleDivBackgroundColor,
  supportFontWeight,
  rectangleDivBackgroundColor1,
}) => {
  const progressBoxStyle = useMemo(() => {
    return {
      position: progressBoxPosition,
    };
  }, [progressBoxPosition]);

  const rectangleDivStyle = useMemo(() => {
    return {
      boxShadow: rectangleDivBoxShadow,
    };
  }, [rectangleDivBoxShadow]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const supportStyle = useMemo(() => {
    return {
      fontWeight: supportFontWeight,
    };
  }, [supportFontWeight]);

  const rectangleDiv2Style = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor1,
    };
  }, [rectangleDivBackgroundColor1]);

  return (
    <div
      className="w-[540px] max-w-full h-[221px] text-left text-base text-black font-poppins"
      style={progressBoxStyle}
    >
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white shadow-[10px_10px_10px_10px_rgba(0,_0,_0,_0.25)]"
        style={rectangleDivStyle}
      />
      <div className="absolute h-[11.31%] w-[35.57%] top-[7.69%] left-[4.28%] tracking-[1px] font-semibold inline-block">
        Progress
      </div>
      <div className="absolute h-[23.53%] w-[91.43%] top-[23.98%] right-[4.3%] bottom-[52.49%] left-[4.28%]">
        <div className="absolute h-[48.08%] w-[38.91%] top-[0%] left-[3.67%] tracking-[1px] inline-block">
          Core
        </div>
        <div className="absolute h-3/6 w-full top-[50%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-[96.15%] w-[10.39%] top-[0%] left-[89.63%] tracking-[1px] font-semibold inline-block">
            40%
          </div>
          <div className="absolute h-full w-[86.57%] top-[0%] right-[13.43%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-100" />
          <div
            className="absolute h-full w-[46.65%] top-[0%] right-[53.35%] bottom-[0%] left-[0%] rounded-xl bg-mediumslateblue shadow-[5px_0px_10px_rgba(0,_0,_0,_0.25)]"
            style={rectangleDiv1Style}
          />
        </div>
      </div>
      <div className="absolute h-[23.53%] w-[91.43%] top-[64.25%] right-[4.3%] bottom-[12.22%] left-[4.28%]">
        <div
          className="absolute h-[48.08%] w-[38.91%] top-[0%] left-[3.67%] tracking-[1px] font-thin inline-block"
          style={supportStyle}
        >
          Support
        </div>
        <div className="absolute h-3/6 w-full top-[50%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-[96.15%] w-[10.39%] top-[0%] left-[89.63%] tracking-[1px] font-semibold inline-block">
            70%
          </div>
          <div className="absolute h-full w-[86.57%] top-[0%] right-[13.43%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-100" />
          <div
            className="absolute h-full w-[69.05%] top-[0%] right-[30.95%] bottom-[0%] left-[0%] rounded-xl bg-mediumslateblue shadow-[5px_0px_10px_rgba(0,_0,_0,_0.25)]"
            style={rectangleDiv2Style}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBox;
