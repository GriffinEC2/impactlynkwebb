import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import Calendar from "../components/Calendar";
import Button from "../components/Button";

const OrgOrganizeEventPage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/org-home-page");
  }, [navigate]);

  const onSignInButtonTopBar1Click = useCallback(() => {
    navigate("/org-events");
  }, [navigate]);

  const onSignInButtonTopBar2Click = useCallback(() => {
    navigate("/org-about-us-page");
  }, [navigate]);

  const onSignInButtonTopBar3Click = useCallback(() => {
    navigate("/org-profile-page");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(112.9deg,_#bdbdbd_12%,_#808080)] h-[832px] overflow-hidden flex flex-col items-center justify-start gap-[41px] text-center text-21xl text-darkslategray-300 font-poppins">
      <TopBar
        signIn="Organize"
        signIn1="Events"
        signIn2="About Us"
        frameButtonGap="400px"
        onFrameButtonClick={onFrameButtonClick}
        onSignInButtonTopBar1Click={onSignInButtonTopBar1Click}
        onSignInButtonTopBar2Click={onSignInButtonTopBar2Click}
        onSignInButtonTopBar3Click={onSignInButtonTopBar3Click}
      />
      <div className="rounded-mini bg-white shadow-[2px_2px_15px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start p-[30px]">
        <div className="w-[820px] relative font-medium flex items-center justify-center">
          When would you like to have this event?
        </div>
        <div className="h-[62px] overflow-hidden shrink-0 flex flex-row items-center justify-start pt-2.5 pb-0 pr-[52px] pl-0 box-border gap-[205px] text-13xl text-dimgray-100 font-lato">
          <div className="w-[257px] relative leading-[22px] font-medium inline-block h-[35px] shrink-0">
            Start Date
          </div>
          <div className="w-[181px] relative leading-[22px] font-medium inline-block h-9 shrink-0">
            End Date
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start p-2.5 gap-[10px]">
          <Calendar />
          <Calendar dateBoxShadow="unset" dateBorder="unset" />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default OrgOrganizeEventPage;
