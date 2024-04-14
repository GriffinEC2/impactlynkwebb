const Heading = ({ newestOpportunities }) => {
  return (
    <div className="w-[1280px] bg-seagreen shadow-[0px_-3px_10px_rgba(0,_0,_0,_0.25)] h-[195px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[20px] text-center text-29xl text-white font-poppins">
      <img className="w-[890px] relative h-0.5 object-contain" alt="" />
      <img className="w-[890px] relative h-0.5 object-contain hidden" alt="" />
      <h1 className="m-0 w-[898px] relative text-inherit font-bold font-inherit flex items-center justify-center h-[148px] shrink-0">
        {newestOpportunities}
      </h1>
    </div>
  );
};

export default Heading;
