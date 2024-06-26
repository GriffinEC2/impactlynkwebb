import { useCallback, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../components/SignUp";
import HeadingTextBackgroundLo from "../components/HeadingTextBackgroundLo";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";

import app from "../lib/firebase";
import UserContext from "../context/userContext"

const SignUpScreen = () => {
  const navigate = useNavigate();

  const [error1, setError] = useState(null);

  const onGoogleButtonFrameClick = useCallback((e) => {
    e.preventDefault();

    const provider = new GoogleAuthProvider();

    signInWithPopup(getAuth(app), provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential =
          GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setError("0");


        const {
          loginInfo,
          setLoginInfo,
        } = useContext(UserContext)

        setLoginInfo({
          ...loginInfo, userEmail: user.email, userPassword: "google",
          userUsername: user.displayName, userUid: user.uid
        })

        console.log("user", user);
        console.log("userUID", user.uid)
        console.log("token", token);
        console.log("credential", credential);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential =
          GoogleAuthProvider.credentialFromError(error);
        setError("errorMessage")

        console.log(errorMessage, errorCode, email, credential);
      });


  }, [setError]);

  useEffect(() => {
    if (error1 === "0") {
      navigate("/sign-up-screen-2");
      console.log("Routing to Sign Up Screen 2")
    }
    console.log("error1:", error1)
  }, [error1]);

  const onHaveAnAccountLoginClick = useCallback(() => {
    // navigate("/login-screen");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    // navigate("/login-screen");
  }, [navigate]);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-1600 overflow-hidden flex flex-row items-center justify-end">
      <main className="w-[1280px] bg-gainsboro-200 flex flex-col items-end justify-center">
        <img
          className="w-[460px] relative h-[832px] object-cover"
          alt=""
          src="/rectangle-7@2x.png"
        />
      </main>
      <main className="flex-1 flex flex-row items-center justify-between ml-[-1187px]">
        <SignUp
          welcomeToImpactApp="Welcome to ImpactLynk"
          user1="/user@2x.png"
          user2="/user@2x.png"
          label="Email "
          label1="Name"
          password="Password"
          hide="Hide"
          errorMessage="Error message"
          text="Text"
          oneLowercaseCharacter="One lowercase character"
          oneLowercaseCharacter1="Use 8 or more characters"
          oneLowercaseCharacter2="One Uppercase character"
          oneLowercaseCharacter3="One number"
          signUp="Continue"
          privacyPolicy="Privacy Policy."
          or="Or"
          areYouPlanning={false}
          boxes={false}
          showSignUpBoxes
          showPassword
          passwordHideSee={false}
          showHide
          showButton
          icons1={false}
          byCreatingAnContainer={false}
          buttonVisible
          signUpGap="10px"
          frameDivAlignSelf="stretch"
          welcomeToImpactAppFontSize="40px"
          welcomeToImpactAppMargin="0"
          welcomeToImpactAppAlignSelf="stretch"
          areYouPlanningFontSize="32px"
          areYouPlanningHeight="unset"
          boxesGap="unset"
          iconHeaderBorder="unset"
          organizerWidth="unset"
          organizerDisplay="inline-block"
          organizerHeight="unset"
          organizerAlignSelf="stretch"
          iconHeaderBorder1="unset"
          organizerWidth1="unset"
          organizerDisplay1="inline-block"
          organizerHeight1="unset"
          organizerAlignSelf1="stretch"
          signUpBoxesWidth="unset"
          labelMargin="0"
          labelFontWeight="400"
          passwordPosition="unset"
          passwordTop="unset"
          passwordRight="unset"
          passwordWidth="unset"
          passwordHeight="unset"
          passwordHideSeeRight="8.9px"
          passwordHideSeeWidth="73px"
          passwordHideSeeHeight="27px"
          passwordHideSeeFontSize="unset"
          passwordHideSeeFontFamily="unset"
          passwordHideSeeColor="unset"
          passwordHideSeeTextAlign="unset"
          iconTop="3px"
          iconRight="49px"
          iconWidth="24px"
          iconHeight="24px"
          iconBorder="unset"
          iconOutline="unset"
          iconBackgroundColor="unset"
          iconBottom="unset"
          iconLeft="unset"
          iconBorderRadius="unset"
          hideTop="0px"
          hideRight="0px"
          hideFontSize="18px"
          hideColor="rgba(102, 102, 102, 0.8)"
          hideTextAlign="right"
          hideLeft="unset"
          textFieldBorder="1px solid rgba(102, 102, 102, 0.35)"
          textFieldOutline="none"
          textFieldBackgroundColor="transparent"
          textFieldHeight="64.37%"
          textFieldWidth="100%"
          textFieldRight="0%"
          textFieldBottom="0%"
          textFieldLeft="0%"
          textFieldBorderRadius="12px"
          textFieldOverflow="hidden"
          textFieldFontSize="unset"
          textFieldFontFamily="unset"
          textFieldColor="unset"
          textFieldTextAlign="unset"
          textFieldDisplay="unset"
          errorMessagePosition="absolute"
          errorMessageTop="104.6%"
          errorMessageLeft="0%"
          errorMessageFontSize="14px"
          errorMessageFontFamily="Poppins"
          errorMessageColor="#ee1d52"
          errorMessageTextAlign="left"
          errorMessageWidth="unset"
          errorMessageFlexDirection="unset"
          textPosition="absolute"
          textHeight="65.52%"
          textWidth="97.52%"
          textTop="35.63%"
          textLeft="1.86%"
          textFontSize="16px"
          textFontFamily="Poppins"
          textColor="rgba(255, 255, 255, 0)"
          textTextAlign="center"
          textDisplay="inline-block"
          textFlexDirection="unset"
          textGap="unset"
          passwordWidth1="484px"
          frameDivGap="unset"
          frameDivPadding="unset"
          frameDivDisplay="flex"
          frameDivFlexDirection="column"
          frameDivWidth="202px"
          frameDivPosition="unset"
          frameDivBorderRadius="unset"
          frameDivBackgroundColor="unset"
          frameDivHeight="unset"
          bulletPointDisplay="flex"
          bulletPointFlexDirection="row"
          bulletPointPadding="8px 8px 8px 0px"
          bulletPointGap="8px"
          bulletPointPosition="unset"
          bulletPointFontSize="unset"
          bulletPointFontFamily="unset"
          bulletPointColor="unset"
          bulletPointTextAlign="unset"
          ellipseDivWidth="8px"
          ellipseDivPosition="relative"
          ellipseDivBorderRadius="50%"
          ellipseDivBackgroundColor="rgba(102, 102, 102, 0.6)"
          ellipseDivHeight="8px"
          ellipseDivDisplay="unset"
          ellipseDivFlexDirection="unset"
          ellipseDivPadding="unset"
          ellipseDivGap="unset"
          oneLowercaseCharacterFontSize="14px"
          oneLowercaseCharacterFontFamily="Poppins"
          oneLowercaseCharacterColor="rgba(102, 102, 102, 0.6)"
          oneLowercaseCharacterTextAlign="center"
          oneLowercaseCharacterDisplay="inline-block"
          oneLowercaseCharacterWidth="177px"
          oneLowercaseCharacterBorderRadius="unset"
          oneLowercaseCharacterBackgroundColor="unset"
          oneLowercaseCharacterHeight="unset"
          bulletPointDisplay1="flex"
          bulletPointFlexDirection1="row"
          bulletPointPadding1="8px 8px 8px 0px"
          bulletPointGap1="unset"
          bulletPointPosition1="unset"
          bulletPointFontSize1="unset"
          bulletPointFontFamily1="unset"
          bulletPointColor1="unset"
          bulletPointTextAlign1="unset"
          ellipseDivWidth1="8px"
          ellipseDivPosition1="relative"
          ellipseDivBorderRadius1="50%"
          ellipseDivBackgroundColor1="rgba(102, 102, 102, 0.6)"
          ellipseDivHeight1="8px"
          ellipseDivDisplay1="unset"
          ellipseDivFlexDirection1="unset"
          oneLowercaseCharacterPosition="relative"
          oneLowercaseCharacterFontSize1="14px"
          oneLowercaseCharacterFontFamily1="Poppins"
          oneLowercaseCharacterColor1="rgba(102, 102, 102, 0.6)"
          oneLowercaseCharacterTextAlign1="left"
          oneLowercaseCharacterDisplay1="inline-block"
          oneLowercaseCharacterFlexDirection="unset"
          oneLowercaseCharacterPadding="unset"
          oneLowercaseCharacterGap="unset"
          frameDivDisplay1="flex"
          frameDivFlexDirection1="column"
          frameDivWidth1="unset"
          frameDivPosition1="unset"
          frameDivBorderRadius1="unset"
          frameDivBackgroundColor1="unset"
          frameDivHeight1="unset"
          bulletPointDisplay2="flex"
          bulletPointFlexDirection2="row"
          bulletPointPadding2="8px 8px 8px 0px"
          bulletPointGap2="8px"
          bulletPointPosition2="unset"
          bulletPointFontSize2="unset"
          bulletPointFontFamily2="unset"
          bulletPointColor2="unset"
          bulletPointTextAlign2="unset"
          ellipseDivWidth2="8px"
          ellipseDivPosition2="relative"
          ellipseDivBorderRadius2="50%"
          ellipseDivBackgroundColor2="rgba(102, 102, 102, 0.6)"
          ellipseDivHeight2="8px"
          ellipseDivDisplay2="unset"
          ellipseDivFlexDirection2="unset"
          ellipseDivPadding1="unset"
          ellipseDivGap1="unset"
          oneLowercaseCharacterFontSize2="14px"
          oneLowercaseCharacterFontFamily2="Poppins"
          oneLowercaseCharacterColor2="rgba(102, 102, 102, 0.6)"
          oneLowercaseCharacterTextAlign2="center"
          oneLowercaseCharacterDisplay2="inline-block"
          oneLowercaseCharacterWidth1="182px"
          oneLowercaseCharacterBorderRadius1="unset"
          oneLowercaseCharacterBackgroundColor1="unset"
          oneLowercaseCharacterHeight1="unset"
          bulletPointDisplay3="flex"
          bulletPointFlexDirection3="row"
          bulletPointPadding3="8px 8px 8px 0px"
          bulletPointGap3="8px"
          bulletPointPosition3="unset"
          bulletPointFontSize3="unset"
          bulletPointFontFamily3="unset"
          bulletPointColor3="unset"
          bulletPointTextAlign3="unset"
          ellipseDivWidth3="8px"
          ellipseDivPosition3="relative"
          ellipseDivBorderRadius3="50%"
          ellipseDivBackgroundColor3="rgba(102, 102, 102, 0.6)"
          ellipseDivHeight3="8px"
          ellipseDivOverflow="unset"
          ellipseDivDisplay3="unset"
          ellipseDivFlexDirection3="unset"
          oneLowercaseCharacterFontSize3="14px"
          oneLowercaseCharacterFontFamily3="Poppins"
          oneLowercaseCharacterColor3="rgba(102, 102, 102, 0.6)"
          oneLowercaseCharacterTextAlign3="left"
          oneLowercaseCharacterDisplay3="inline-block"
          oneLowercaseCharacterBorder="unset"
          oneLowercaseCharacterPadding1="unset"
          oneLowercaseCharacterBackgroundColor2="unset"
          oneLowercaseCharacterWidth2="unset"
          oneLowercaseCharacterBorderRadius2="unset"
          oneLowercaseCharacterHeight2="unset"
          oneLowercaseCharacterOverflow="unset"
          googleButtonFrameWidth="515px"
          googleButtonFrameOverflow="hidden"
          googleButtonFrameFlexDirection="column"
          googleButtonFramePosition="unset"
          googleButtonFrameTop="unset"
          googleButtonFrameLeft="unset"
          googleButtonFrameGap="unset"
          buttonBorder="none"
          buttonPadding="0"
          buttonBackgroundColor="#111"
          buttonWidth="484px"
          buttonBorderRadius="32px"
          buttonHeight="64px"
          frameDivPosition2="absolute"
          frameDivTop="calc(50% - 17px)"
          frameDivLeft="calc(50% - 51px)"
          frameDivDisplay2="flex"
          frameDivFlexDirection2="row"
          frameDivGap1="8px"
          frameDivFontSize="unset"
          frameDivFontWeight="unset"
          frameDivFontFamily="unset"
          frameDivColor="unset"
          frameDivTextAlign="unset"
          iconsWidth="24px"
          iconsHeight="24px"
          iconsOverflow="hidden"
          iconsFontSize="unset"
          iconsFontFamily="unset"
          iconsTextAlign="unset"
          iconsBorder="unset"
          iconsPadding="unset"
          iconsBackgroundColor="unset"
          signUpPosition="relative"
          signUpFontSize="22px"
          signUpFontWeight="500"
          signUpFontFamily="Poppins"
          signUpColor="#666"
          signUpTextAlign="center"
          byCreatingAnContainerWidth="494px"
          byCreatingAnContainerPosition="relative"
          byCreatingAnContainerFontSize="16px"
          byCreatingAnContainerFontFamily="Poppins"
          byCreatingAnContainerTextAlign="left"
          byCreatingAnContainerTextDecoration="unset"
          byCreatingAnContainerColor="unset"
          byCreatingAnColor="#333"
          termsOfUseTextDecoration="underline"
          termsOfUseColor="#111"
          privacyPolicyTextDecoration="underline"
          privacyPolicyColor="#111"
          orMargin="0"
          orWidth="unset"
          orFontSize="32px"
          orFontWeight="500"
          orFontFamily="Poppins"
          orColor="#333"
          orTextAlign="center"
          orDisplay="inline-block"
          orBorder="unset"
          orPadding="unset"
          orBackgroundColor="unset"
          orBorderRadius="unset"
          orHeight="unset"
          orOverflow="unset"
          orAlignSelf="stretch"
          googleButtonFrameWidth1="unset"
          googleButtonFrameOverflow1="hidden"
          googleButtonFrameFlexDirection1="column"
          googleButtonFramePosition1="unset"
          googleButtonFrameTop1="unset"
          googleButtonFrameLeft1="unset"
          googleButtonFrameGap1="unset"
          googleButtonFrameBorder="none"
          googleButtonFrameOutline="none"
          googleButtonFrameFontWeight="500"
          googleButtonFrameFontFamily="Poppins"
          googleButtonFrameFontSize="22px"
          googleButtonFrameBackgroundColor="#111"
          googleButtonFrameAlignSelf="stretch"
          googleButtonFrameBorderRadius="32px"
          googleButtonFramePadding="15px 138.5px 16px"
          googleButtonFrameColor="#fff"
          buttonBorder1="none"
          buttonPadding1="2px"
          buttonBackgroundColor1="transparent"
          buttonWidth1="unset"
          buttonBorderRadius1="unset"
          buttonHeight1="unset"
          buttonPosition="unset"
          buttonOverflow="unset"
          buttonFlexDirection="row"
          frameDivPosition3="relative"
          frameDivTop1="unset"
          frameDivLeft1="unset"
          frameDivDisplay3="inline-block"
          frameDivFlexDirection3="unset"
          frameDivGap2="unset"
          frameDivFontSize1="16px"
          frameDivFontWeight1="unset"
          frameDivFontFamily1="Poppins"
          frameDivColor1="unset"
          frameDivTextAlign1="left"
          onGoogleButtonFrameClick={onGoogleButtonFrameClick}
          onHaveAnAccountLoginClick={onHaveAnAccountLoginClick}
          onAlreadyHaveAnClick={onAlreadyHaveAnClick}
          onButtonClick1={onAlreadyHaveAnClick}
          passwordHideSee1={false}
          showHide1
          errorMessage11={false}
          showPassword1
          passwordHideSee11={false}
          showHide11
          errorMessage111={false}
          signUp1="Signup with Google"
        />
        <div className="w-[424px] rounded-xl [filter:drop-shadow(0px_0px_10px_rgba(0,_0,_0,_0.45))] [backdrop-filter:blur(20px)] flex flex-col items-center justify-center">
          <HeadingTextBackgroundLo
            headingTextBackgroundLoBorderRadius="20px"
            headingTextBackgroundLoBackdropFilter="blur(4px)"
            headingTextBackgroundLoAlignSelf="unset"
            headingTextBackgroundLoPosition="unset"
            headingTextBackgroundLoTop="unset"
            headingTextBackgroundLoLeft="unset"
            logoBorder="none"
            logoPadding="0"
            logoBackgroundColor="transparent"
            impactLynkMargin="0"
            impactLynkFontWeight="700"
            impactLynkColor="#d9d9d9"
            onLogoClick={onLogoClick}
          />
        </div>
      </main>
    </div>
  );
};

export default SignUpScreen;
