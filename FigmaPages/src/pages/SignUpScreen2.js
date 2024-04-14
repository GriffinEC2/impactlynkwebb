import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../components/SignUp";
import HeadingTextBackgroundLo from "../components/HeadingTextBackgroundLo";
import { addUserDetails } from "../lib/users";
import UserContext from "../context/userContext"
import Login from "../components/Login2";


const SignUpScreen2 = () => {
  const navigate = useNavigate();


  const [error1, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = useCallback((e) => {
    e.preventDefault();

    const auth = getAuth();
    if (password !== "google") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          const userUID = userCredential.uid;
          setError("0");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      userUID = LoginInfo.userUid
    }
    return { userUID }
  });

  const onButtonClick = useCallback(() => {
    const {
      LoginInfo,
    } = useContext(UserContext);

    setEmail(LoginInfo.setEmail)
    setPassword(LoginInfo.setPassword)
    userUID = handleSignUp()

    addUserDetails(...LoginInfo);

    navigate("/post-home-page");
  }, [navigate]);

  const onByCreatingAnClick = useCallback(() => {
    //TODO: Add terms of use and privacy policy
  }, []);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-1600 h-[832px] overflow-hidden flex flex-row items-center justify-end">
      <div className="w-[1280px] bg-gainsboro-200 flex flex-col items-end justify-center">
        <img
          className="w-[500px] relative h-[832px] object-cover"
          alt=""
          src="/rectangle-7@2x.png"
        />
      </div>
      <div className="flex flex-row items-center justify-center py-0 px-10 gap-[220px] ml-[-1251px]">
        <SignUp
          welcomeToImpactApp="Welcome to Impact App "
          user1="/user@2x.png"
          user2="/user@2x.png"
          label="School/Organization"
          label1="Phone Number"
          hide="Error message"
          signUp="By creating an account, you agree to the "
          prop="Privacy Policy."
          areYouPlanning
          boxes
          showSignUpBoxes={false}
          showPassword={false}
          passwordHideSee
          showHide={false}
          showButton={false}
          icons1
          byCreatingAnContainer
          showSpan={false}
          buttonVisible={false}
          icons2={false}
          signUpGap="20px"
          frameDivAlignSelf="unset"
          welcomeToImpactAppFontSize="40px"
          welcomeToImpactAppMargin="unset"
          welcomeToImpactAppAlignSelf="unset"
          areYouPlanningFontSize="20px"
          areYouPlanningHeight="119px"
          boxesGap="25px"
          iconHeaderBorder="none"
          organizerWidth="221px"
          organizerDisplay="flex"
          organizerHeight="85px"
          organizerAlignSelf="unset"
          iconHeaderBorder1="none"
          organizerWidth1="221px"
          organizerDisplay1="flex"
          organizerHeight1="85px"
          organizerAlignSelf1="unset"
          signUpBoxesWidth="515px"
          labelMargin="unset"
          labelFontWeight="unset"
          passwordMargin="unset"
          passwordPosition="absolute"
          passwordTop="0px"
          passwordRight="8.9px"
          passwordWidth="73px"
          passwordHeight="27px"
          passwordHideSeeRight="0px"
          passwordHideSeeWidth="unset"
          passwordHideSeeHeight="unset"
          passwordHideSeeFontSize="18px"
          passwordHideSeeFontFamily="Poppins"
          passwordHideSeeColor="rgba(102, 102, 102, 0.8)"
          passwordHideSeeTextAlign="right"
          iconTop="35.63%"
          iconRight="0%"
          iconWidth="100%"
          iconHeight="64.37%"
          iconBorder="1px solid rgba(102, 102, 102, 0.35)"
          iconOutline="none"
          iconBackgroundColor="transparent"
          iconBottom="0%"
          iconLeft="0%"
          iconBorderRadius="12px"
          hideTop="104.6%"
          hideRight="unset"
          hideFontSize="14px"
          hideColor="#ee1d52"
          hideTextAlign="left"
          hideLeft="0%"
          textFieldBorder="unset"
          textFieldOutline="unset"
          textFieldBackgroundColor="unset"
          textFieldHeight="65.52%"
          textFieldWidth="97.52%"
          textFieldRight="unset"
          textFieldBottom="unset"
          textFieldLeft="1.86%"
          textFieldBorderRadius="unset"
          textFieldOverflow="unset"
          textFieldFontSize="16px"
          textFieldFontFamily="Poppins"
          textFieldColor="rgba(255, 255, 255, 0)"
          textFieldTextAlign="center"
          textFieldDisplay="inline-block"
          errorMessagePosition="unset"
          errorMessageTop="unset"
          errorMessageLeft="unset"
          errorMessageFontSize="unset"
          errorMessageFontFamily="unset"
          errorMessageColor="unset"
          errorMessageTextAlign="unset"
          errorMessageWidth="484px"
          errorMessageFlexDirection="column"
          textPosition="unset"
          textHeight="unset"
          textWidth="unset"
          textTop="unset"
          textLeft="unset"
          textFontSize="unset"
          textFontFamily="unset"
          textColor="unset"
          textTextAlign="unset"
          textDisplay="flex"
          textFlexDirection="row"
          textGap="18px"
          passwordWidth1="unset"
          frameDivGap="8px"
          frameDivPadding="8px 8px 8px 0px"
          frameDivDisplay="unset"
          frameDivFlexDirection="unset"
          frameDivWidth="8px"
          frameDivPosition="relative"
          frameDivBorderRadius="50%"
          frameDivBackgroundColor="rgba(102, 102, 102, 0.6)"
          frameDivHeight="8px"
          bulletPointDisplay="inline-block"
          bulletPointFlexDirection="unset"
          bulletPointPadding="unset"
          bulletPointGap="unset"
          bulletPointPosition="relative"
          bulletPointFontSize="14px"
          bulletPointFontFamily="Poppins"
          bulletPointColor="rgba(102, 102, 102, 0.6)"
          bulletPointTextAlign="left"
          ellipseDivWidth="unset"
          ellipseDivPosition="unset"
          ellipseDivBorderRadius="unset"
          ellipseDivBackgroundColor="unset"
          ellipseDivHeight="unset"
          ellipseDivDisplay="flex"
          ellipseDivFlexDirection="row"
          ellipseDivPadding="8px 8px 8px 0px"
          ellipseDivGap="8px"
          oneLowercaseCharacterFontSize="unset"
          oneLowercaseCharacterFontFamily="unset"
          oneLowercaseCharacterColor="unset"
          oneLowercaseCharacterTextAlign="unset"
          oneLowercaseCharacterDisplay="unset"
          oneLowercaseCharacterWidth="8px"
          oneLowercaseCharacterBorderRadius="50%"
          oneLowercaseCharacterBackgroundColor="rgba(102, 102, 102, 0.6)"
          oneLowercaseCharacterHeight="8px"
          bulletPointDisplay1="inline-block"
          bulletPointFlexDirection1="unset"
          bulletPointPadding1="unset"
          bulletPointGap1="unset"
          bulletPointPosition1="relative"
          bulletPointFontSize1="14px"
          bulletPointFontFamily1="Poppins"
          bulletPointColor1="rgba(102, 102, 102, 0.6)"
          bulletPointTextAlign1="left"
          ellipseDivWidth1="unset"
          ellipseDivPosition1="unset"
          ellipseDivBorderRadius1="unset"
          ellipseDivBackgroundColor1="unset"
          ellipseDivHeight1="unset"
          ellipseDivDisplay1="flex"
          ellipseDivFlexDirection1="column"
          oneLowercaseCharacterPosition="unset"
          oneLowercaseCharacterFontSize1="unset"
          oneLowercaseCharacterFontFamily1="unset"
          oneLowercaseCharacterColor1="unset"
          oneLowercaseCharacterTextAlign1="unset"
          oneLowercaseCharacterDisplay1="flex"
          oneLowercaseCharacterFlexDirection="row"
          oneLowercaseCharacterPadding="8px 8px 8px 0px"
          oneLowercaseCharacterGap="8px"
          frameDivDisplay1="unset"
          frameDivFlexDirection1="unset"
          frameDivWidth1="8px"
          frameDivPosition1="relative"
          frameDivBorderRadius1="50%"
          frameDivBackgroundColor1="rgba(102, 102, 102, 0.6)"
          frameDivHeight1="8px"
          bulletPointDisplay2="inline-block"
          bulletPointFlexDirection2="unset"
          bulletPointPadding2="unset"
          bulletPointGap2="unset"
          bulletPointPosition2="relative"
          bulletPointFontSize2="14px"
          bulletPointFontFamily2="Poppins"
          bulletPointColor2="rgba(102, 102, 102, 0.6)"
          bulletPointTextAlign2="left"
          ellipseDivWidth2="unset"
          ellipseDivPosition2="unset"
          ellipseDivBorderRadius2="unset"
          ellipseDivBackgroundColor2="unset"
          ellipseDivHeight2="unset"
          ellipseDivDisplay2="flex"
          ellipseDivFlexDirection2="row"
          ellipseDivPadding1="8px 8px 8px 0px"
          ellipseDivGap1="8px"
          oneLowercaseCharacterFontSize2="unset"
          oneLowercaseCharacterFontFamily2="unset"
          oneLowercaseCharacterColor2="unset"
          oneLowercaseCharacterTextAlign2="unset"
          oneLowercaseCharacterDisplay2="unset"
          oneLowercaseCharacterWidth1="8px"
          oneLowercaseCharacterBorderRadius1="50%"
          oneLowercaseCharacterBackgroundColor1="rgba(102, 102, 102, 0.6)"
          oneLowercaseCharacterHeight1="8px"
          bulletPointDisplay3="inline-block"
          bulletPointFlexDirection3="unset"
          bulletPointPadding3="unset"
          bulletPointGap3="unset"
          bulletPointPosition3="relative"
          bulletPointFontSize3="14px"
          bulletPointFontFamily3="Poppins"
          bulletPointColor3="rgba(102, 102, 102, 0.6)"
          bulletPointTextAlign3="left"
          ellipseDivWidth3="515px"
          ellipseDivPosition3="unset"
          ellipseDivBorderRadius3="unset"
          ellipseDivBackgroundColor3="unset"
          ellipseDivHeight3="unset"
          ellipseDivOverflow="hidden"
          ellipseDivDisplay3="flex"
          ellipseDivFlexDirection3="column"
          oneLowercaseCharacterFontSize3="unset"
          oneLowercaseCharacterFontFamily3="unset"
          oneLowercaseCharacterColor3="unset"
          oneLowercaseCharacterTextAlign3="unset"
          oneLowercaseCharacterDisplay3="unset"
          oneLowercaseCharacterBorder="none"
          oneLowercaseCharacterPadding1="0"
          oneLowercaseCharacterBackgroundColor2="#111"
          oneLowercaseCharacterWidth2="484px"
          oneLowercaseCharacterBorderRadius2="32px"
          oneLowercaseCharacterHeight2="64px"
          oneLowercaseCharacterOverflow="hidden"
          googleButtonFrameWidth="unset"
          googleButtonFrameOverflow="unset"
          googleButtonFrameFlexDirection="row"
          googleButtonFramePosition="absolute"
          googleButtonFrameTop="calc(50% - 17px)"
          googleButtonFrameLeft="calc(50% - 45px)"
          googleButtonFrameGap="8px"
          buttonBorder="unset"
          buttonPadding="unset"
          buttonBackgroundColor="unset"
          buttonWidth="24px"
          buttonBorderRadius="unset"
          buttonHeight="24px"
          frameDivPosition2="relative"
          frameDivTop="unset"
          frameDivLeft="unset"
          frameDivDisplay2="inline-block"
          frameDivFlexDirection2="unset"
          frameDivGap1="unset"
          frameDivFontSize="22px"
          frameDivFontWeight="500"
          frameDivFontFamily="Poppins"
          frameDivColor="#666"
          frameDivTextAlign="center"
          iconsWidth="494px"
          iconsHeight="unset"
          iconsOverflow="unset"
          iconsFontSize="16px"
          iconsFontFamily="Poppins"
          iconsTextAlign="left"
          iconsBorder="none"
          iconsPadding="0"
          iconsBackgroundColor="transparent"
          signUpPosition="unset"
          signUpFontSize="unset"
          signUpFontWeight="unset"
          signUpFontFamily="unset"
          signUpColor="#333"
          signUpTextAlign="unset"
          byCreatingAnContainerWidth="unset"
          byCreatingAnContainerPosition="unset"
          byCreatingAnContainerFontSize="unset"
          byCreatingAnContainerFontFamily="unset"
          byCreatingAnContainerTextAlign="unset"
          byCreatingAnContainerTextDecoration="underline"
          byCreatingAnContainerColor="#111"
          spanColor1="#111"
          spanColor2="unset"
          spanWidth="515px"
          spanOverflow="hidden"
          spanFlexDirection="column"
          orMargin="unset"
          orWidth="484px"
          orFontSize="unset"
          orFontWeight="unset"
          orFontFamily="unset"
          orColor="unset"
          orTextAlign="unset"
          orDisplay="unset"
          orBorder="none"
          orPadding="0"
          orBackgroundColor="#111"
          orBorderRadius="32px"
          orHeight="64px"
          orOverflow="hidden"
          orAlignSelf="unset"
          googleButtonFrameWidth1="unset"
          googleButtonFrameOverflow1="unset"
          googleButtonFrameFlexDirection1="row"
          googleButtonFramePosition1="absolute"
          googleButtonFrameTop1="calc(50% - 17px)"
          googleButtonFrameLeft1="calc(50% - 119.5px)"
          googleButtonFrameGap1="8px"
          googleButtonFrameBorder="unset"
          googleButtonFrameOutline="unset"
          googleButtonFrameFontWeight="unset"
          googleButtonFrameFontFamily="unset"
          googleButtonFrameFontSize="unset"
          googleButtonFrameBackgroundColor="unset"
          googleButtonFrameAlignSelf="unset"
          googleButtonFrameBorderRadius="unset"
          googleButtonFramePadding="unset"
          googleButtonFrameColor="unset"
          buttonBorder1="unset"
          buttonPadding1="unset"
          buttonBackgroundColor1="unset"
          buttonWidth1="24px"
          buttonBorderRadius1="unset"
          buttonHeight1="24px"
          buttonPosition="relative"
          buttonOverflow="hidden"
          buttonFlexDirection="unset"
          frameDivPosition3="relative"
          frameDivTop1="unset"
          frameDivLeft1="unset"
          frameDivDisplay3="inline-block"
          frameDivFlexDirection3="unset"
          frameDivGap2="unset"
          frameDivFontSize1="22px"
          frameDivFontWeight1="500"
          frameDivFontFamily1="Poppins"
          frameDivColor1="#fff"
          frameDivTextAlign1="center"
          iconsWidth1="unset"
          iconsPosition="unset"
          iconsHeight1="unset"
          iconsOverflow1="unset"
          iconsBorder1="none"
          iconsPadding1="2px"
          iconsBackgroundColor1="transparent"
          iconsFlexDirection="row"
          signUpFontSize1="16px"
          signUpFontWeight1="unset"
          signUpColor1="unset"
          signUpTextAlign1="left"
          signUpPosition1="relative"
          signUpFontFamily1="Poppins"
          onButtonClick={onButtonClick}
          onByCreatingAnClick={onByCreatingAnClick}
          passwordHideSee1={false}
          showHide1
          errorMessage11={false}
        />
        <HeadingTextBackgroundLo
          headingTextBackgroundLoBorderRadius="unset"
          headingTextBackgroundLoBackdropFilter="unset"
          headingTextBackgroundLoAlignSelf="unset"
          headingTextBackgroundLoPosition="unset"
          headingTextBackgroundLoTop="unset"
          headingTextBackgroundLoLeft="unset"
          logoBorder="unset"
          logoPadding="unset"
          logoBackgroundColor="unset"
          impactLynkMargin="unset"
          impactLynkFontWeight="unset"
          impactLynkColor="#d9d9d9"
          onLogoClick={onLogoContainerClick}
        />
      </div>
    </div>
  );
};

export default SignUpScreen2;
