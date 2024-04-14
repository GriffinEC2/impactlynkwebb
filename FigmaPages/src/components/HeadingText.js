const HeadingText = ({ rectangle28 }) => {
  return (
    <div className="rounded-3xs bg-white max-w-full overflow-hidden flex flex-col items-center justify-start py-10 px-[33px] box-border gap-[20px] text-left text-51xl text-black font-poppins">
      <img
        className="w-[548px] relative rounded-8xs h-[250px] object-cover"
        alt=""
        src={rectangle28}
      />
      <h1 className="m-0 w-[558px] relative text-inherit font-semibold font-inherit inline-block h-[77px] shrink-0">
        Best Buddies
      </h1>
      <article className="overflow-hidden flex flex-row items-center justify-start gap-[10px] text-left text-xl text-black font-poppins">
        <div className="w-[230px] relative inline-block h-[59px] shrink-0">
          <p className="m-0">Time: 9:00 to 12:00</p>
          <p className="m-0">Requirments: None</p>
        </div>
        <div className="w-[300px] relative inline-block h-[57px] shrink-0">
          <p className="m-0">Number of Volunteers: 5 of 8</p>
          <p className="m-0">Location: The Branson School</p>
        </div>
      </article>
      <p className="m-0 w-[561px] relative text-9xl inline-block h-[252px] shrink-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis convallis lorem, sit amet fringilla nulla. Cras dolor ex, mollis id mollis a, egestas quis orci. Maecenas vestibulum pulvinar ipsum. `}</p>
    </div>
  );
};

export default HeadingText;
