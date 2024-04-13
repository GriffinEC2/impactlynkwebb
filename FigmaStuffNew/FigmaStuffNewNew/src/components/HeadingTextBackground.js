import Property1PicTextPropert from "./Property1PicTextPropert";

const HeadingTextBackground1 = () => {
  return (
    <div className="absolute top-[118px] left-[0px] bg-white h-[382px] overflow-hidden flex flex-row items-center justify-start pt-2.5 px-[95px] pb-20 box-border gap-[118px]">
      <Property1PicTextPropert
        headingTextalarm="/heading--textalarm2@2x.png"
        totalHoursHelpingOrganiza="Total Hours helping organizations"
        prop="1054"
        property1PicTextPropertPosition="relative"
        property1PicTextPropertBoxShadow="unset"
        property1PicTextPropertBorder="unset"
        headingTextalarmOverflow="hidden"
        totalHoursHelpingLeft="172px"
      />
      <Property1PicTextPropert
        headingTextalarm="/heading--textlayers3@2x.png"
        totalHoursHelpingOrganiza="Number of Organizations we’ve worked with"
        prop="34"
        property1PicTextPropertPosition="relative"
        property1PicTextPropertBoxShadow="unset"
        property1PicTextPropertBorder="unset"
        headingTextalarmOverflow="unset"
        totalHoursHelpingLeft="176px"
      />
    </div>
  );
};

export default HeadingTextBackground1;
