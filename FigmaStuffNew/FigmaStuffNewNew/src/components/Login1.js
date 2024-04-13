const Login1 = ({ label, text }) => {
  return (
    <div className="w-[484px] relative h-[87px] text-left text-sm text-crimson font-poppins">
      <article className="absolute h-[31.03%] w-full top-[0%] right-[0%] bottom-[68.97%] left-[0%] text-left text-base text-dimgray-200 font-poppins">
        <div className="absolute top-[0px] left-[0px]">{label}</div>
        <div className="absolute top-[0px] right-[8.9px] w-[73px] h-[27px] hidden text-right text-lg text-dimgray-400">
          <img
            className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon.svg"
          />
          <div className="absolute top-[0px] right-[0px]">Hide</div>
        </div>
      </article>
      <input
        className="[outline:none] bg-[transparent] absolute h-[64.37%] w-full top-[35.63%] right-[0%] bottom-[0%] left-[0%] rounded-xl box-border overflow-hidden border-[1px] border-solid border-dimgray-500"
        type="text"
      />
      <div className="absolute top-[104.6%] left-[0%] hidden">
        Error message
      </div>
      <div className="absolute h-[65.52%] w-[97.52%] top-[35.63%] left-[1.86%] text-base text-darkslategray-600 flex items-center">
        {text}
      </div>
    </div>
  );
};

export default Login1;
