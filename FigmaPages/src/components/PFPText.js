import NameBox from "./NameBox";

const PFPText = ({ pfp1, nameName }) => {
  return (
    <div className="w-[350px] relative h-[350px]">
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={pfp1}
      />
      <NameBox
        nameName="Hudson Blechman"
        jobTitle="Co-Founder"
        nameBoxWidth="77.51%"
        nameBoxHeight="22.26%"
        nameBoxPosition="absolute"
        nameBoxTop="73.26%"
        nameBoxRight="11.26%"
        nameBoxBottom="4.49%"
        nameBoxLeft="11.23%"
        nameNameHeight="27.21%"
        nameNameWidth="86.99%"
        nameNameFontSize="20px"
        jobTitleHeight="27.21%"
        jobTitleWidth="86.99%"
        jobTitleTop="50.45%"
      />
    </div>
  );
};

export default PFPText;
