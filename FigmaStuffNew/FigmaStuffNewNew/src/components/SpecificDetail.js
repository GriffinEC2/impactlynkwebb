import { useCallback } from "react";
import TextBox from "./TextBox";

const SpecificDetail = () => {
  const onTextBoxClick = useCallback(() => {
    //TODO: Allow for editing of information
  }, []);

  const onTextBox1Click = useCallback(() => {
    //TODO: Delete the account
  }, []);

  return (
    <div className="w-[308px] rounded-mini bg-whitesmoke-200 shadow-[4px_4px_15px_rgba(0,_0,_0,_0.25)] h-[578px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 pr-[18px] pl-2.5 box-border gap-[20px] text-left text-xl text-black font-poppins">
      <div className="overflow-hidden flex flex-row items-start justify-start py-2.5 px-0 gap-[5px]">
        <div className="w-10 relative rounded-[50%] [background:linear-gradient(-90deg,_#835fe7,_#493581)] h-10" />
        <div className="w-[229px] relative tracking-[1px] font-semibold flex items-center h-10 shrink-0">
          Someone’s Name
        </div>
      </div>
      <TextBox
        firstName="First Name"
        somename="Somename"
        showFirstName
        textBoxBorder="unset"
        somenameTextAlign="left"
        somenameMarginTop="-5px"
        textBoxWidth="280px"
        textBoxHeight="unset"
      />
      <TextBox
        firstName="Last Name"
        somename="Somename"
        showFirstName
        textBoxBorder="unset"
        somenameTextAlign="left"
        somenameMarginTop="-5px"
        textBoxWidth="280px"
        textBoxHeight="unset"
      />
      <TextBox
        firstName="Email"
        somename="Somename@gmail.com"
        showFirstName
        textBoxBorder="unset"
        somenameTextAlign="left"
        somenameMarginTop="-5px"
        textBoxWidth="280px"
        textBoxHeight="unset"
      />
      <TextBox
        firstName="Phone Number"
        somename="+1 (415) 123-4567"
        showFirstName
        textBoxBorder="unset"
        somenameTextAlign="left"
        somenameMarginTop="-5px"
        textBoxWidth="280px"
        textBoxHeight="unset"
      />
      <TextBox
        firstName="School"
        somename="The Branson School"
        showFirstName
        textBoxBorder="unset"
        somenameTextAlign="left"
        somenameMarginTop="-5px"
        textBoxWidth="280px"
        textBoxHeight="unset"
      />
      <TextBox
        firstName="Grade"
        somename="10th Grade"
        showFirstName
        textBoxBorder="unset"
        somenameTextAlign="left"
        somenameMarginTop="-5px"
        textBoxWidth="280px"
        textBoxHeight="unset"
      />
      <TextBox
        firstName="Phone Number"
        somename="Edit"
        showFirstName={false}
        textBoxBorder="none"
        somenameTextAlign="center"
        somenameMarginTop="unset"
        textBoxWidth="280px"
        textBoxHeight="unset"
        onTextBoxClick={onTextBoxClick}
      />
      <TextBox
        firstName="Phone Number"
        somename="Delete"
        showFirstName={false}
        textBoxBorder="none"
        somenameTextAlign="center"
        somenameMarginTop="unset"
        textBoxWidth="280px"
        textBoxHeight="unset"
        onTextBoxClick={onTextBox1Click}
      />
    </div>
  );
};

export default SpecificDetail;
