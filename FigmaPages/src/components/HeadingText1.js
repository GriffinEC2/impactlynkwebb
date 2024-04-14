import Heading from "./Heading";

const HeadingText1 = () => {
  return (
    <div className="w-[1280px] bg-white h-[350px] flex flex-row items-start justify-start p-10 box-border gap-[100px] text-left text-13xl text-black font-poppins">
      <Heading
        newestOpportunities="Our Story"
        showLineIcon={false}
        lineIconVisible={false}
        headingBackgroundColor="unset"
        headingBoxShadow="unset"
        headingHeight="195px"
        headingWidth="364px"
        headingPosition="unset"
        headingTop="unset"
        headingLeft="unset"
        newestOpportunitiesFontWeight="700"
        newestOpportunitiesColor="#000"
        newestOpportunitiesMargin="0"
      />
      <p className="m-0 w-[697px] relative inline-block h-[239px] shrink-0">
        <span className="block">&nbsp;</span>
        <span className="block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis convallis lorem, sit amet fringilla nulla. Cras dolor ex, mollis id mollis a, egestas quis orci. `}</span>
      </p>
    </div>
  );
};

export default HeadingText1;
