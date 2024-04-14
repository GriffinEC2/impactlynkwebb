import { useCallback } from "react";
import TopBar from "../components/TopBar";
import TextBox from "../components/TextBox";
import FrameComponent1 from "../components/FrameComponent1";

const OrgProfilePage = () => {
  const onTextBoxClick = useCallback(() => {
    /* TODO: Edit details
       
    */
  }, []);

  return (
    <div className="w-full relative bg-white h-[832px] overflow-hidden flex flex-col items-start justify-start gap-[30px] text-center text-5xl text-black font-poppins">
      <TopBar
        signIn="Organize"
        signIn1="Events"
        signIn2="About Us"
        frameButtonGap="400px"
      />
      <div className="w-[507px] relative flex items-end justify-center h-[67px] shrink-0">
        Organization Name
      </div>
      <div className="overflow-hidden flex flex-row items-start justify-start py-0 px-[50px] gap-[35px] text-xs text-deepskyblue">
        <div className="overflow-hidden flex flex-col items-center justify-start p-5 gap-[10px]">
          <div className="w-[220px] relative h-[257px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-3xs w-[220px] h-[220px] object-cover"
              alt=""
              src="/josephgonzalezifgrcqhznqgunsplash-1@2x.png"
            />
            <div className="absolute top-[229px] left-[0px] w-[220px] h-7">
              <div className="absolute top-[9px] left-[0px] rounded-3xs bg-gainsboro-200 w-[220px] h-[42px] hidden" />
              <b className="absolute top-[0px] left-[0px] flex items-center justify-center w-[220px] h-7 opacity-[0.6]">
                Change Organization Image
              </b>
            </div>
          </div>
          <TextBox
            firstName="Date Joined"
            somename="03/25/2024"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="Total Hours"
            somename="12,503"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="Total Volunteers"
            somename="502"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start p-5 gap-[10px] text-left text-base text-gray-300">
          <div className="w-[247px] relative flex items-center h-[60px] shrink-0 opacity-[0.6]">
            Account Details
          </div>
          <TextBox
            firstName="Organization Name"
            somename="Somename"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="Organizer or Volunteer"
            somename="Organizer"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="School/Organization"
            somename="Example Organization"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="Organization Email"
            somename="Somename@organization.com"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="Organization Phone Number"
            somename="+1 (415) 123-4567"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="Phone Number"
            somename="Edit"
            showFirstName={false}
            textBoxBorder="none"
            somenameTextAlign="center"
            somenameMarginTop="unset"
            textBoxWidth="unset"
            textBoxHeight="unset"
            onTextBoxClick={onTextBoxClick}
          />
        </div>
        <FrameComponent1
          organizationsYouHaveVolun="People that have volunteered with you"
          someonesName="Some Name"
          prop="65"
          prop1="62"
          prop2="53"
          prop3="34"
          prop4="32"
          prop5="31"
        />
      </div>
    </div>
  );
};

export default OrgProfilePage;
