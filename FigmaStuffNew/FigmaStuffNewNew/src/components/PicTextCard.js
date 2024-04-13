const PicTextCard = ({ onPicTextCardClick, onVolunteerButtonClick }) => {
  return (
    <button
      className="cursor-pointer [border:none] p-4 bg-white rounded-8xs max-w-full overflow-hidden flex flex-row items-start justify-start box-border gap-[20px]"
      onClick={onPicTextCardClick}
    >
      <img
        className="w-[216px] relative rounded-8xs h-72 object-cover"
        alt=""
        src="/austinkehmeierlyikexa4zqaunsplash-13@2x.png"
      />
      <div className="w-[282px] rounded-8xs shadow-[2px_2px_5.6px_2px_rgba(0,_0,_0,_0.25)] h-72 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15px] px-5 pb-[69px] box-border gap-[10px]">
        <h1 className="m-0 w-[235px] relative text-11xl tracking-[0.1em] font-bold font-poppins text-black text-center flex items-center justify-center h-[31px] shrink-0">
          Best Buddies
        </h1>
        <div className="w-[237px] relative box-border h-0.5 border-t-[2px] border-solid border-black" />
        <p className="m-0 w-[250px] relative text-sm font-poppins text-black text-left inline-block h-[150px] shrink-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis convallis lorem, sit amet fringilla nulla. Cras dolor ex, mollis id mollis a, egestas quis orci. `}</p>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[137px] relative h-[46px]"
          onClick={onVolunteerButtonClick}
        >
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-forestgreen-200 w-[137px] h-[46px]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-sm font-bold font-poppins text-white text-center flex items-center justify-center w-[137px] h-[46px]">
            Volunteer
          </button>
        </button>
      </div>
    </button>
  );
};

export default PicTextCard;
