import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar2 from "../components/TopBar";
import TextBox from "../components/TextBox";
import FrameComponent1 from "../components/FrameComponent1";

const ProfilePage = () => {
  const navigate = useNavigate();

  const onTextBoxClick = useCallback(() => {
    //TODO: allow to edit stats
  }, []);

  const onPfpNameHoursClick = useCallback(() => {
    navigate("/all-orgs-page");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[832px] overflow-hidden flex flex-col items-start justify-start gap-[30px] text-center text-5xl text-black font-poppins">
      <TopBar2
        signIn="Volunteer"
        signIn="About Us"
        signIn="Stats"
        frameButtonGap="400px"
      />
      <div className="w-[507px] relative flex items-end justify-center h-[67px] shrink-0">
        Nameing Name
      </div>
      <div className="overflow-hidden flex flex-row items-start justify-start py-0 px-[50px] gap-[35px] text-left text-base text-gray-300">
        <div className="overflow-hidden flex flex-col items-center justify-start p-5 gap-[10px]">
          <div className="w-[247px] relative inline-block h-[23px] shrink-0 opacity-[0.6]">
            Profile Image
          </div>
          <div className="w-[220px] h-[257px] flex flex-col items-center justify-start gap-[9px] text-center text-xs text-deepskyblue">
            <img
              className="w-[220px] relative rounded-3xs h-[220px] object-cover"
              alt=""
              src="/josephgonzalezifgrcqhznqgunsplash-1@2x.png"
            />
            <div className="w-[220px] relative h-7">
              <div className="absolute top-[9px] left-[0px] rounded-3xs bg-gainsboro-200 w-[220px] h-[42px] hidden" />
              <b className="absolute top-[0px] left-[0px] flex items-center justify-center w-[220px] h-7 opacity-[0.6]">
                Change profile image
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
            somename="34"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="Total Core Hours"
            somename="12"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="Total Support Hours"
            somename="22"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start p-5 gap-[10px]">
          <div className="w-[247px] relative flex items-center h-[60px] shrink-0 opacity-[0.6]">
            Account Details
          </div>
          <TextBox
            firstName="Name"
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
            somename="Volunteer"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="Grade"
            somename="10th Grade"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="School/Organization"
            somename="The Branson School"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="Email"
            somename="Somename@gmail.com"
            showFirstName
            textBoxBorder="unset"
            somenameTextAlign="left"
            somenameMarginTop="-5px"
            textBoxWidth="unset"
            textBoxHeight="unset"
          />
          <TextBox
            firstName="Phone Number"
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
          organizationsYouHaveVolun="Organization’s you have volunteered for and # of hours"
          someonesName="Some Organization"
          prop="12"
          prop1="8"
          prop2="5"
          prop3="3"
          prop4="2"
          prop5="2"
          onPfpNameHoursClick={onPfpNameHoursClick}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
