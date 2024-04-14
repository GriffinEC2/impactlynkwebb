import { useMemo } from "react";

const Login2 = ({ propAlignSelf, propWidth, propWidth1 }) => {
  const login5Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const text8Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className="self-stretch relative h-[87px] text-left text-sm text-crimson font-poppins"
      style={login5Style}
    >
      {frameArticleVisible && (
        <article className="absolute h-[31.03%] w-full top-[0%] right-[0%] bottom-[68.97%] left-[0%] text-left text-base text-dimgray-200 font-poppins">
          <div className="absolute top-[0px] left-[0px]">
            {showPassword && <p className="m-0">Password</p>}
          </div>
          {!passwordHideSee1 && (
            <div className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-400">
              {showIcon && (
                <img
                  className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/icon.svg"
                />
              )}
              {showHide && (
                <div className="absolute top-[0px] right-[0px]">Hide</div>
              )}
            </div>
          )}
        </article>
      )}
      <input
        className="[outline:none] bg-[transparent] absolute h-[64.37%] w-full top-[35.63%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border overflow-hidden border-[1px] border-solid border-dimgray-500"
        type="text"
      />
      {!errorMessage3 && (
        <div className="absolute top-[104.6%] left-[0%] hidden">
          Error message
        </div>
      )}
      {showText && (
        <div
          className="absolute h-[65.52%] w-[97.53%] top-[35.63%] left-[1.86%] text-base text-gray-1600 text-center inline-block"
          style={text8Style}
        >
          Text
        </div>
      )}
    </div>
  );
};

export default Login2;
