import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar2 from "../components/TopBar";
import TypeDoubleThemeLight from "../../components/TypeDoubleThemeLight";
import Button from "../components/Button";

const AdminOrganizeEventPage2 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/admin-home-page");
  }, [navigate]);

  const onSignInButtonTopBarClick = useCallback(() => {
    navigate("/manage-volunteers");
  }, [navigate]);

  const onSignInButtonTopBar2Click = useCallback(() => {
    navigate("/admin-about-us-page");
  }, [navigate]);

  const onSignInButtonTopBar3Click = useCallback(() => {
    navigate("/admin-profile-page");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/admin-organize-event-page-2");
  }, [navigate]);

  return (
    <div className="w-full relative [background:linear-gradient(112.9deg,_#bdbdbd_12%,_#808080)] h-[832px] overflow-hidden flex flex-col items-center justify-start gap-[20px] text-center text-21xl text-darkslategray-300 font-poppins">
      <TopBar2
        signIn="Organize"
        signIn="Manage"
        signIn="About Us"
        onFrameButtonClick={onFrameButtonClick}
        onSignInButtonTopBarClick={onSignInButtonTopBarClick}
        onSignInButtonTopBar2Click={onSignInButtonTopBar2Click}
        onSignInButtonTopBar3Click={onSignInButtonTopBar3Click}
      />
      <div className="rounded-mini bg-white shadow-[2px_2px_15px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start p-[30px] gap-[20px]">
        <div className="w-[820px] relative font-medium flex items-center justify-center">
          When would you like to have this event?
        </div>
        <TypeDoubleThemeLight
          prop="2"
          prop1="3"
          prop2="4"
          prop3="5"
          prop4="6"
          prop5="7"
          prop6="8"
          prop7="9"
          prop8="10"
          prop9="11"
          prop10="12"
          prop11="13"
          prop12="14"
          prop13="15"
          prop14="16"
          prop15="17"
          prop16="18"
          prop17="19"
          prop18="20"
          prop19="21"
          prop20="22"
          prop21="23"
          prop22="24"
          prop23="25"
          prop24="26"
          prop25="27"
          prop26="28"
          prop27="29"
          prop28="30"
          prop29="31"
          prop30="2"
          prop31="3"
          prop32="4"
          prop33="29"
          prop34="30"
          prop35="31"
          prop36="2"
          prop37="3"
          prop38="4"
          prop39="5"
          prop40="6"
          prop41="7"
          prop42="8"
          prop43="9"
          prop44="10"
          prop45="11"
          prop46="12"
          prop47="13"
          prop48="14"
          prop49="15"
          prop50="16"
          prop51="17"
          prop52="18"
          prop53="19"
          prop54="20"
          prop55="21"
          prop56="22"
          prop57="23"
          prop58="24"
          prop59="25"
          prop60="26"
          prop61="27"
          prop62="28"
          prop63="29"
          prop64="30"
          prop65="2"
          typeDoubleThemeLightBorderRadius="2px"
          typeDoubleThemeLightBoxShadow="4px 4px 4px rgba(0, 0, 0, 0.25)"
          typeDoubleThemeLightBorder="2px solid #bdbdbd"
          dateBorder="none"
          dateBackgroundColor="transparent"
          dateBorder1="none"
          dateBackgroundColor1="transparent"
          dateBorder2="none"
          dateBackgroundColor2="transparent"
          dateBorder3="none"
          dateBackgroundColor3="transparent"
          dateBorder4="none"
          dateBackgroundColor4="transparent"
          dateBorder5="none"
          dateBackgroundColor5="transparent"
          dateBorder6="none"
          dateBackgroundColor6="transparent"
          dateBorder7="none"
          dateBackgroundColor7="transparent"
          divOpacity="0.4"
        />
        <Button
          icons="/icons.svg"
          signUp="Continue"
          buttonWidth="168px"
          buttonBorderRadius="16px"
          buttonBackgroundColor="#111"
          buttonBorder="unset"
          buttonPadding="unset"
          buttonPosition="relative"
          frameDivLeft="calc(50% - 51px)"
          signUpDisplay="inline-block"
          signUpColor="#666"
          onButtonClick={onButtonContainerClick}
        />
      </div>
    </div>
  );
};

export default AdminOrganizeEventPage2;
