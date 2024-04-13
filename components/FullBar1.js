import Property1SelectedHovered from "./Property1SelectedHovered";

const FullBar1 = () => {
  return (
    <div className="w-[95px] relative h-[359px] overflow-hidden shrink-0 ml-[-45px] text-center text-xs text-darkslategray-100 font-poppins">
      <div className="absolute w-[168.53%] top-[calc(50%_+_160.5px)] left-[-34.32%] tracking-[1px] inline-block h-3.5">
        Mar
      </div>
      <Property1SelectedHovered
        rectangle="/rectangle.svg"
        property1SelectedHoveredHeight="198px"
        property1SelectedHoveredPosition="absolute"
        property1SelectedHoveredTop="81px"
        property1SelectedHoveredLeft="35px"
        rectangleTop="18.94%"
        rectangleBottom="-18.94%"
        textHeight="14.9%"
        textBottom="85.1%"
        rectangleIconHeight="97.63%"
        rectangleIconBottom="2.37%"
        hoursTop="calc(50% - 9.75px)"
      />
    </div>
  );
};

export default FullBar1;
