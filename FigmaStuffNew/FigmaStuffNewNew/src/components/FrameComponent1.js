const FrameComponent1 = ({
  organizationsYouHaveVolun,
  someonesName,
  prop,
  prop1,
  prop2,
  prop3,
  prop4,
  prop5,
  onPfpNameHoursClick,
}) => {
  return (
    <div className="overflow-hidden flex flex-col items-start justify-start p-5 gap-[10px] text-left text-base text-black font-poppins">
      <div className="w-[247px] relative text-gray-300 flex items-center h-[60px] shrink-0 opacity-[0.6]">
        {organizationsYouHaveVolun}
      </div>
      <div className="w-[481px] relative h-[50px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
          <img
            className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-2@2x.png"
          />
          <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
            {someonesName}
          </h3>
        </div>
        <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
          <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
            {prop}
          </h3>
        </div>
      </div>
      <div className="w-[481px] relative h-[50px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
          <img
            className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-26@2x.png"
          />
          <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
            Or Another One
          </h3>
        </div>
        <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
          <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
            {prop1}
          </h3>
        </div>
      </div>
      <div className="w-[481px] relative h-[50px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
          <img
            className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-27@2x.png"
          />
          <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
            And Another
          </h3>
        </div>
        <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
          <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
            {prop2}
          </h3>
        </div>
      </div>
      <div className="w-[481px] relative h-[50px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
          <img
            className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-28@2x.png"
          />
          <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
            IDK: I don’t know
          </h3>
        </div>
        <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
          <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
            {prop3}
          </h3>
        </div>
      </div>
      <div className="w-[481px] relative h-[50px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
          <img
            className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-29@2x.png"
          />
          <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
            Or Another one
          </h3>
        </div>
        <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
          <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
            {prop4}
          </h3>
        </div>
      </div>
      <div className="w-[481px] relative h-[50px]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
          <img
            className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/ellipse-210@2x.png"
          />
          <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
            Final One (I think)
          </h3>
        </div>
        <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
          <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
            {prop5}
          </h3>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[481px] relative h-[50px]">
        <div
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] cursor-pointer"
          onClick={onPfpNameHoursClick}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
          <img
            className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover hidden"
            alt=""
            src="/ellipse-210@2x.png"
          />
          <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-base tracking-[1px] font-semibold font-poppins text-black text-center flex items-center justify-center">
            View All
          </h3>
        </div>
        <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
          <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-base tracking-[1px] font-semibold font-poppins text-black text-center flex items-center justify-center">
            2
          </h3>
        </div>
      </button>
    </div>
  );
};

export default FrameComponent1;
