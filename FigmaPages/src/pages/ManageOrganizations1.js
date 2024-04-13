import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import Heading1 from "../components/Heading1";
import TextBox from "../components/TextBox";

const ManageOrganizations1 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/manage-volunteers");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/manage-events");
  }, [navigate]);

  const onTextBoxClick = useCallback(() => {
    navigate("/manage-events");
  }, [navigate]);

  const onTextBox1Click = useCallback(() => {
    //TODO: Allow for editing of information
  }, []);

  const onTextBox2Click = useCallback(() => {
    //TODO: Delete the organization
  }, []);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-5 box-border gap-[20px] text-left text-13xl text-black font-poppins">
      <TopBar
        signIn="Organize"
        signIn1="Manage"
        signIn2="About Us"
        frameButtonGap="375px"
      />
      <div className="overflow-hidden flex flex-row items-center justify-start py-2.5 px-0 gap-[9px]">
        <div className="w-[915px] overflow-hidden shrink-0 flex flex-col items-start justify-start p-5 box-border gap-[34px]">
          <b className="w-[507px] relative flex items-end h-[67px] shrink-0">
            Dashboard
          </b>
          <div className="w-[881px] rounded-mini bg-whitesmoke-200 shadow-[4px_4px_15px_2px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start p-5 box-border gap-[20px] text-base">
            <Heading1
              propFontWeight="unset"
              propFontWeight1="bold"
              propFontWeight2="unset"
              onButtonClick={onButtonClick}
              onButton2Click={onButton2Click}
            />
            <div className="rounded-xl flex flex-row items-center justify-start py-[5px] px-3.5 gap-[15px]">
              <div className="flex flex-row items-center justify-start gap-[15px]">
                <div className="w-10 relative rounded-[50%] h-10" />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Name
                </h3>
                <h3 className="m-0 w-[270px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Email
                </h3>
                <h3 className="m-0 w-[180px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Phone Number
                </h3>
                <h3 className="m-0 w-[131px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Volunteers
                </h3>
              </div>
              <div className="w-[59px] relative h-[25px] text-center">
                <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[1px] font-semibold flex items-center justify-center">
                  Hours
                </div>
              </div>
            </div>
            <div className="w-[1129px] relative rounded-xl bg-gainsboro-200 h-[50px]">
              <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1129px] h-[50px]" />
              <div className="absolute top-[5px] left-[14px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Some Organization
                </h3>
                <a className="[text-decoration:underline] w-[270px] relative tracking-[1px] font-semibold text-[inherit] flex items-center h-[35px] shrink-0">
                  example@gmail.com
                </a>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  +1 (415) 123-4567
                </h3>
                <h3 className="m-0 w-36 relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  184
                </h3>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  12,023
                </h3>
              </div>
            </div>
            <div className="w-[1161px] relative rounded-xl bg-darkgray-400 h-[50px]">
              <button className="cursor-pointer [border:none] p-0 bg-darkgray-400 absolute top-[0px] left-[0px] rounded-xl w-[1161px] h-[50px]" />
              <div className="absolute top-[5px] left-[14px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Some Organization
                </h3>
                <a className="[text-decoration:underline] w-[270px] relative tracking-[1px] font-semibold text-[inherit] flex items-center h-[35px] shrink-0">
                  example@gmail.com
                </a>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  +1 (415) 123-4567
                </h3>
                <h3 className="m-0 w-36 relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  184
                </h3>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  12,023
                </h3>
              </div>
            </div>
            <div className="w-[1129px] relative rounded-xl bg-gainsboro-200 h-[50px]">
              <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1129px] h-[50px]" />
              <div className="absolute top-[5px] left-[14px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Some Organization
                </h3>
                <a className="[text-decoration:underline] w-[270px] relative tracking-[1px] font-semibold text-[inherit] flex items-center h-[35px] shrink-0">
                  example@gmail.com
                </a>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  +1 (415) 123-4567
                </h3>
                <h3 className="m-0 w-36 relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  184
                </h3>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  12,023
                </h3>
              </div>
            </div>
            <div className="w-[1129px] relative rounded-xl bg-gainsboro-200 h-[50px]">
              <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1129px] h-[50px]" />
              <div className="absolute top-[5px] left-[14px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Some Organization
                </h3>
                <a className="[text-decoration:underline] w-[270px] relative tracking-[1px] font-semibold text-[inherit] flex items-center h-[35px] shrink-0">
                  example@gmail.com
                </a>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  +1 (415) 123-4567
                </h3>
                <h3 className="m-0 w-36 relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  184
                </h3>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  12,023
                </h3>
              </div>
            </div>
            <div className="w-[1129px] relative rounded-xl bg-gainsboro-200 h-[50px]">
              <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1129px] h-[50px]" />
              <div className="absolute top-[5px] left-[14px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Some Organization
                </h3>
                <a className="[text-decoration:underline] w-[270px] relative tracking-[1px] font-semibold text-[inherit] flex items-center h-[35px] shrink-0">
                  example@gmail.com
                </a>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  +1 (415) 123-4567
                </h3>
                <h3 className="m-0 w-36 relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  184
                </h3>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  12,023
                </h3>
              </div>
            </div>
            <div className="w-[1129px] relative rounded-xl bg-gainsboro-200 h-[50px]">
              <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1129px] h-[50px]" />
              <div className="absolute top-[5px] left-[14px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Some Organization
                </h3>
                <a className="[text-decoration:underline] w-[270px] relative tracking-[1px] font-semibold text-[inherit] flex items-center h-[35px] shrink-0">
                  example@gmail.com
                </a>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  +1 (415) 123-4567
                </h3>
                <h3 className="m-0 w-36 relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  184
                </h3>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  12,023
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[664px] overflow-hidden flex flex-col items-start justify-center pt-32 px-5 pb-[78px] box-border text-xl">
          <div className="rounded-mini bg-whitesmoke-200 shadow-[4px_4px_15px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-center py-[17px] px-3.5 gap-[29px]">
            <div className="overflow-hidden flex flex-row items-start justify-start py-2.5 px-0 gap-[5px]">
              <div className="w-10 relative rounded-[50%] [background:linear-gradient(-90deg,_#835fe7,_#493581)] h-10" />
              <div className="w-[229px] relative tracking-[1px] font-semibold flex items-center h-10 shrink-0">
                Someone Organization
              </div>
            </div>
            <TextBox
              firstName="Phone Number"
              somename="Events"
              showFirstName={false}
              textBoxBorder="none"
              somenameTextAlign="center"
              somenameMarginTop="unset"
              textBoxWidth="280px"
              textBoxHeight="unset"
              onTextBoxClick={onTextBoxClick}
            />
            <TextBox
              firstName="Organization Name"
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
              firstName="Organizations they work with"
              showFirstName
              textBoxBorder="unset"
              somenameTextAlign="left"
              somenameMarginTop="-5px"
              textBoxWidth="280px"
              textBoxHeight="73px"
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
              onTextBoxClick={onTextBox1Click}
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
              onTextBoxClick={onTextBox2Click}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrganizations1;
