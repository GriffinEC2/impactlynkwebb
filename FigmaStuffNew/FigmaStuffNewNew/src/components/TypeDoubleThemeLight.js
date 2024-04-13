import { useMemo } from "react";

const TypeDoubleThemeLight = ({
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  prop5,
  prop6,
  prop7,
  prop8,
  prop9,
  prop10,
  prop11,
  prop12,
  prop13,
  prop14,
  prop15,
  prop16,
  prop17,
  prop18,
  prop19,
  prop20,
  prop21,
  prop22,
  prop23,
  prop24,
  prop25,
  prop26,
  prop27,
  prop28,
  prop29,
  prop30,
  prop31,
  prop32,
  prop33,
  prop34,
  prop35,
  prop36,
  prop37,
  prop38,
  prop39,
  prop40,
  prop41,
  prop42,
  prop43,
  prop44,
  prop45,
  prop46,
  prop47,
  prop48,
  prop49,
  prop50,
  prop51,
  prop52,
  prop53,
  prop54,
  prop55,
  prop56,
  prop57,
  prop58,
  prop59,
  prop60,
  prop61,
  prop62,
  prop63,
  prop64,
  prop65,
  typeDoubleThemeLightBorderRadius,
  typeDoubleThemeLightBoxShadow,
  typeDoubleThemeLightBorder,
  dateBorder,
  dateBackgroundColor,
  dateBorder1,
  dateBackgroundColor1,
  dateBorder2,
  dateBackgroundColor2,
  dateBorder3,
  dateBackgroundColor3,
  dateBorder4,
  dateBackgroundColor4,
  dateBorder5,
  dateBackgroundColor5,
  dateBorder6,
  dateBackgroundColor6,
  dateBorder7,
  dateBackgroundColor7,
  divOpacity,
}) => {
  const typeDoubleThemeLightStyle = useMemo(() => {
    return {
      borderRadius: typeDoubleThemeLightBorderRadius,
      boxShadow: typeDoubleThemeLightBoxShadow,
      border: typeDoubleThemeLightBorder,
    };
  }, [
    typeDoubleThemeLightBorderRadius,
    typeDoubleThemeLightBoxShadow,
    typeDoubleThemeLightBorder,
  ]);

  const dateStyle = useMemo(() => {
    return {
      border: dateBorder,
      backgroundColor: dateBackgroundColor,
    };
  }, [dateBorder, dateBackgroundColor]);

  const date1Style = useMemo(() => {
    return {
      border: dateBorder1,
      backgroundColor: dateBackgroundColor1,
    };
  }, [dateBorder1, dateBackgroundColor1]);

  const date2Style = useMemo(() => {
    return {
      border: dateBorder2,
      backgroundColor: dateBackgroundColor2,
    };
  }, [dateBorder2, dateBackgroundColor2]);

  const date3Style = useMemo(() => {
    return {
      border: dateBorder3,
      backgroundColor: dateBackgroundColor3,
    };
  }, [dateBorder3, dateBackgroundColor3]);

  const date4Style = useMemo(() => {
    return {
      border: dateBorder4,
      backgroundColor: dateBackgroundColor4,
    };
  }, [dateBorder4, dateBackgroundColor4]);

  const date5Style = useMemo(() => {
    return {
      border: dateBorder5,
      backgroundColor: dateBackgroundColor5,
    };
  }, [dateBorder5, dateBackgroundColor5]);

  const date6Style = useMemo(() => {
    return {
      border: dateBorder6,
      backgroundColor: dateBackgroundColor6,
    };
  }, [dateBorder6, dateBackgroundColor6]);

  const date7Style = useMemo(() => {
    return {
      border: dateBorder7,
      backgroundColor: dateBackgroundColor7,
    };
  }, [dateBorder7, dateBackgroundColor7]);

  const divStyle = useMemo(() => {
    return {
      opacity: divOpacity,
    };
  }, [divOpacity]);

  return (
    <div
      className="bg-white max-w-full flex flex-col items-center justify-start py-2 px-4 box-border gap-[16px] text-left text-xl text-gray-3 font-lato"
      style={typeDoubleThemeLightStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-start py-4 px-8 gap-[10px]">
        <div className="relative font-semibold">Start date</div>
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/arrowright.svg"
        />
        <div className="relative font-semibold">End date</div>
      </div>
      <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-gray-4" />
      <div className="self-stretch flex flex-row items-start justify-start text-center">
        <div className="w-[427px] bg-white flex flex-col items-center justify-center p-1 box-border gap-[8px]">
          <div className="self-stretch flex flex-row items-center justify-center py-4 px-8 gap-[10px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/chevronleft.svg"
            />
            <div className="flex-1 relative font-semibold">Month year</div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0]"
              alt=""
            />
          </div>
          <div className="w-[356px] relative box-border h-px border-t-[1px] border-solid border-gray-4" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-left text-xs text-black">
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
            <div className="self-stretch flex flex-col items-start justify-start text-center text-lg">
              <div className="self-stretch flex flex-row items-center justify-center py-1 px-8 gap-[10px]">
                <div
                  className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border"
                  style={dateStyle}
                >
                  <div className="relative leading-[22px] font-medium">1</div>
                </div>
                <div
                  className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border"
                  style={date1Style}
                >
                  <div className="relative leading-[22px] font-medium">
                    {prop}
                  </div>
                </div>
                <div
                  className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border"
                  style={date2Style}
                >
                  <div className="relative leading-[22px] font-medium">
                    {prop1}
                  </div>
                </div>
                <div
                  className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border"
                  style={date3Style}
                >
                  <div className="relative leading-[22px] font-medium">
                    {prop2}
                  </div>
                </div>
                <div
                  className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border"
                  style={date4Style}
                >
                  <div className="relative leading-[22px] font-medium">
                    {prop3}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop4}
                  </div>
                </div>
                <div
                  className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border"
                  style={date5Style}
                >
                  <div className="relative leading-[22px] font-medium">
                    {prop5}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-1 px-8 gap-[10px]">
                <div
                  className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border"
                  style={date6Style}
                >
                  <div className="relative leading-[22px] font-medium">
                    {prop6}
                  </div>
                </div>
                <div
                  className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border"
                  style={date7Style}
                >
                  <div className="relative leading-[22px] font-medium">
                    {prop7}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop8}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop9}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop10}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop11}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop12}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-1 px-8 gap-[10px]">
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop13}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop14}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop15}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop16}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop17}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop18}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop19}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-1 px-8 gap-[10px]">
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop20}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop21}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop22}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop23}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop24}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop25}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop26}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-1 px-8 gap-[10px]">
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop27}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop28}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop29}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">1</div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop30}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop31}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop32}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[427px] bg-white flex flex-col items-center justify-center p-1 box-border gap-[8px]">
          <div className="self-stretch flex flex-row items-center justify-center py-4 px-8 gap-[10px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0]"
              alt=""
            />
            <div className="flex-1 relative font-semibold">Month year</div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/chevronright.svg"
            />
          </div>
          <div className="w-[356px] relative box-border h-px border-t-[1px] border-solid border-gray-4" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-left text-xs text-black">
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
            <div className="self-stretch flex flex-col items-start justify-start text-center text-lg">
              <div className="self-stretch flex flex-row items-center justify-center py-1 px-8 gap-[10px]">
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop33}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop34}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop35}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">1</div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop36}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop37}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop38}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-1 px-8 gap-[10px]">
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop39}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop40}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop41}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop42}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop43}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop44}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop45}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-1 px-8 gap-[10px]">
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop46}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop47}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div
                    className="relative leading-[22px] font-medium"
                    style={divStyle}
                  >
                    {prop48}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop49}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop50}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop51}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop52}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-1 px-8 gap-[10px]">
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop53}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop54}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop55}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop56}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop57}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop58}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop59}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center py-1 px-8 gap-[10px]">
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop60}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop61}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop62}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop63}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop64}
                  </div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">1</div>
                </div>
                <div className="flex-1 h-[42px] flex flex-col items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[22px] font-medium">
                    {prop65}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeDoubleThemeLight;
