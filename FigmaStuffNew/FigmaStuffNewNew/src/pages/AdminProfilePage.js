import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import TextBox from "../components/TextBox";

const AdminProfilePage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/admin-home-page");
  }, [navigate]);

  const onSignInButtonTopBarClick = useCallback(() => {
    navigate("/admin-organize-event-page-1");
  }, [navigate]);

  const onSignInButtonTopBar1Click = useCallback(() => {
    navigate("/manage-volunteers");
  }, [navigate]);

  const onSignInButtonTopBar2Click = useCallback(() => {
    navigate("/admin-about-us-page");
  }, [navigate]);

  const onTextBoxClick = useCallback(() => {
    //TODO: Allow edit to profile
  }, []);

  const onNameBarClick = useCallback(() => {
    navigate("/admin-view-all-orgs");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[832px] overflow-hidden flex flex-col items-start justify-start gap-[30px] text-center text-5xl text-black font-poppins">
      <TopBar
        signIn="Organize"
        signIn1="Manage"
        signIn2="About Us"
        frameButtonGap="375px"
        onFrameButtonClick={onFrameButtonClick}
        onSignInButtonTopBarClick={onSignInButtonTopBarClick}
        onSignInButtonTopBar1Click={onSignInButtonTopBar1Click}
        onSignInButtonTopBar2Click={onSignInButtonTopBar2Click}
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
        <div className="overflow-hidden flex flex-col items-start justify-start p-5 gap-[10px] text-black">
          <div className="w-[247px] relative text-gray-300 flex items-center h-[60px] shrink-0 opacity-[0.6]">
            Organization’s you have volunteered for and # of hours
          </div>
          <div className="w-[481px] relative h-[50px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
              <img
                className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/ellipse-2@2x.png"
              />
              <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
                Some Organization
              </h3>
            </div>
            <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
              <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
                12
              </h3>
            </div>
          </div>
          <div className="w-[481px] relative h-[50px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
              <img
                className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/ellipse-26@2x.png"
              />
              <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
                Or Another One
              </h3>
            </div>
            <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
              <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
                8
              </h3>
            </div>
          </div>
          <div className="w-[481px] relative h-[50px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
              <img
                className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/ellipse-27@2x.png"
              />
              <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
                And Another
              </h3>
            </div>
            <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
              <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
                5
              </h3>
            </div>
          </div>
          <div className="w-[481px] relative h-[50px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
              <img
                className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/ellipse-28@2x.png"
              />
              <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
                IDK: I don’t know
              </h3>
            </div>
            <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
              <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
                3
              </h3>
            </div>
          </div>
          <div className="w-[481px] relative h-[50px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
              <img
                className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/ellipse-29@2x.png"
              />
              <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
                Or Another one
              </h3>
            </div>
            <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
              <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
                2
              </h3>
            </div>
          </div>
          <div className="w-[481px] relative h-[50px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
              <img
                className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/ellipse-210@2x.png"
              />
              <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center">
                Final One (I think)
              </h3>
            </div>
            <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] text-center">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
              <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
                2
              </h3>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[481px] relative h-[50px]"
            onClick={onNameBarClick}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-200" />
              <img
                className="absolute h-4/5 w-[8.32%] top-[10%] right-[89.6%] bottom-[10%] left-[2.08%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover hidden"
                alt=""
                src="/ellipse-210@2x.png"
              />
              <h3 className="m-0 absolute h-[70%] w-[62.37%] top-[14%] left-[14.35%] text-base tracking-[1px] font-semibold font-poppins text-black text-center flex items-center justify-center">
                View All
              </h3>
            </div>
            <div className="absolute h-[70%] w-[14.55%] top-[14%] right-[2.29%] bottom-[16%] left-[83.16%] hidden">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
              <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-base tracking-[1px] font-semibold font-poppins text-black text-center flex items-center justify-center">
                2
              </h3>
            </div>
          </button>
        </div>
      </div>
      <div className="w-[892px] relative text-white flex items-center justify-center h-[437px] shrink-0">
        whats your middle name
      </div>
    </div>
  );
};

export default AdminProfilePage;
