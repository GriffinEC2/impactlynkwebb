import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginScreen1 from "../components/LoginScreen1";
import HeadingTextBackgroundLo from "../components/HeadingTextBackgroundLo";

const LoginScreen = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    //TODO: Verify email and login then send to home age
  }, []);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/sign-up-screen");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-1600 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-center gap-[10px]">
      <main
        className="self-stretch relative bg-gainsboro-200 [filter:blur(3px)] h-[832px] z-[0]"
        id="Login Background"
      >
        <img
          className="absolute top-[0px] left-[0px] w-[470px] h-[832px] object-cover"
          alt=""
          src="/Fern Background@2x.png"
        />
      </main>
      <div className="w-[918px] absolute !m-[0] top-[86px] left-[181px] h-[660px] z-[1]">
        <div className="absolute top-[0px] left-[0px] rounded-sm bg-whitesmoke-100 shadow-[0px_0px_75px_2px_rgba(0,_0,_0,_0.25)] w-[918px] flex flex-col items-start justify-center">
          <div className="w-[322px] relative rounded-sm bg-darkslategray-500 h-[660px]" />
        </div>
        <LoginScreen1
          welcomeBack="Welcome back"
          wereSoExcitedToSeeYouAgai="We’re so excited to see you again!"
          label="Email "
          hide="Hide"
          errorMessage="Error message"
          text="Text"
          password="Password"
          hide1="Hide"
          errorMessage2="Error message"
          text1="Text"
          forgetYourPassword="Forget your password?"
          logIn="Log in"
          dontHaveAnAcount="Don’t have an acount? "
          signUp="Sign up  "
          showFrameArticle
          passwordHideSee={false}
          showTextField
          errorMessage1={false}
          frameArticleVisible
          passwordHideSee1={false}
          showIcon
          errorMessage3={false}
          showText
          showFrameButton
          showDontHaveAn
          loginScreenHeight="unset"
          loginScreenBorderRadius="2px"
          loginScreenBackgroundColor="unset"
          loginScreenBoxShadow="unset"
          loginScreenPadding="unset"
          loginScreenPosition="absolute"
          loginScreenTop="27px"
          loginScreenLeft="379px"
          loginScreenWidth="485px"
          frameDivAlignSelf="stretch"
          wereSoExcitedMargin="0"
          wereSoExcitedPosition="relative"
          wereSoExcitedFontSize="24px"
          wereSoExcitedFontWeight="400"
          wereSoExcitedFontFamily="Poppins"
          wereSoExcitedColor="#666"
          wereSoExcitedTextAlign="center"
          wereSoExcitedDisplay="inline-block"
          wereSoExcitedAlignSelf="stretch"
          loginBoxesDisplay="flex"
          loginBoxesFlexDirection="column"
          loginBoxesGap="32px"
          loginBoxesAlignSelf="stretch"
          loginWidth="unset"
          loginPosition="relative"
          loginHeight="87px"
          loginMargin="unset"
          loginAlignSelf="stretch"
          frameArticlePosition="absolute"
          frameArticleHeight="31.03%"
          frameArticleWidth="100%"
          frameArticleTop="0%"
          frameArticleRight="0%"
          frameArticleBottom="68.97%"
          frameArticleLeft="0%"
          frameArticleMargin="unset"
          frameArticleFontSize="unset"
          frameArticleFontWeight="unset"
          frameArticleFontFamily="unset"
          frameArticleColor="unset"
          frameArticleTextAlign="unset"
          labelPosition="absolute"
          labelTop="0px"
          labelLeft="0px"
          labelFontSize="16px"
          labelFontFamily="Poppins"
          labelColor="#666"
          labelTextAlign="left"
          labelDisplay="inline-block"
          labelFlexDirection="unset"
          labelGap="unset"
          passwordHideSeePosition="absolute"
          passwordHideSeeTop="0px"
          passwordHideSeeRight="8.9px"
          passwordHideSeeWidth="73px"
          passwordHideSeeHeight="27px"
          iconTop="3px"
          iconRight="49px"
          iconWidth="24px"
          iconHeight="24px"
          iconOverflow="hidden"
          iconBottom="unset"
          iconLeft="unset"
          hideRight="0px"
          hideColor="rgba(102, 102, 102, 0.8)"
          hideTextAlign="right"
          hideLeft="unset"
          textFieldBorder="1px solid rgba(102, 102, 102, 0.35)"
          textFieldOutline="none"
          textFieldBackgroundColor="transparent"
          textFieldHeight="64.37%"
          textFieldWidth="100%"
          textFieldTop="35.63%"
          textFieldRight="0%"
          textFieldBottom="0%"
          textFieldLeft="0%"
          textFieldBorderRadius="12px"
          textFieldOverflow="hidden"
          errorMessageTop="104.6%"
          errorMessageLeft="0%"
          errorMessageFontSize="14px"
          errorMessageFontFamily="Poppins"
          errorMessageColor="#ee1d52"
          errorMessageTextAlign="left"
          errorMessageRight="unset"
          errorMessageWidth="unset"
          errorMessageHeight="unset"
          errorMessageOverflow="unset"
          textHeight="65.52%"
          textWidth="97.53%"
          textTop="35.63%"
          textLeft="1.86%"
          textColor="rgba(255, 255, 255, 0)"
          textTextAlign="center"
          textRight="unset"
          loginWidth1="unset"
          loginPosition1="relative"
          loginHeight1="87px"
          loginBorder="unset"
          loginOutline="unset"
          loginBackgroundColor="unset"
          loginTop="unset"
          loginRight="unset"
          loginBottom="unset"
          loginLeft="unset"
          loginBorderRadius="unset"
          loginOverflow="unset"
          loginAlignSelf1="stretch"
          frameArticleHeight1="31.03%"
          frameArticleWidth1="100%"
          frameArticleTop1="0%"
          frameArticleRight1="0%"
          frameArticleBottom1="68.97%"
          frameArticleFontSize1="unset"
          frameArticleFontFamily1="unset"
          frameArticleColor1="unset"
          frameArticleTextAlign1="unset"
          labelTop1="0px"
          labelLeft1="0px"
          labelColor1="#666"
          labelTextAlign1="left"
          labelHeight="unset"
          labelWidth="unset"
          passwordWidth="unset"
          passwordPosition="unset"
          passwordHeight="unset"
          passwordHideSeeRight1="8.9px"
          passwordHideSeeWidth1="73px"
          passwordHideSeeHeight1="27px"
          passwordHideSeeLeft="unset"
          passwordHideSeeFontSize="unset"
          passwordHideSeeFontFamily="unset"
          passwordHideSeeColor="unset"
          passwordHideSeeTextAlign="unset"
          iconRight1="49px"
          iconWidth1="24px"
          iconOverflow1="hidden"
          hideRight1="0px"
          hideFontSize="18px"
          hideFontFamily="Poppins"
          hideColor1="rgba(102, 102, 102, 0.8)"
          hideTextAlign1="right"
          hideDisplay="inline-block"
          hideWidth="unset"
          hideHeight="unset"
          hideOverflow="unset"
          textFieldBorder1="1px solid rgba(102, 102, 102, 0.35)"
          textFieldOutline1="none"
          textFieldBackgroundColor1="transparent"
          textFieldHeight1="64.37%"
          textFieldWidth1="100%"
          textFieldTop1="35.63%"
          textFieldRight1="0%"
          textFieldBottom1="0%"
          textFieldLeft1="0%"
          textFieldBorderRadius1="12px"
          textFieldOverflow1="hidden"
          textFieldFontSize="unset"
          textFieldFontFamily="unset"
          textFieldColor="unset"
          textFieldTextAlign="unset"
          textFieldDisplay="unset"
          errorMessageTop1="104.6%"
          errorMessageFontSize1="14px"
          errorMessageFontFamily1="Poppins"
          errorMessageColor1="#ee1d52"
          errorMessageTextAlign1="left"
          errorMessageBorder="unset"
          errorMessageOutline="unset"
          errorMessageBackgroundColor="unset"
          errorMessageHeight1="unset"
          errorMessageWidth1="unset"
          errorMessageRight1="unset"
          errorMessageBottom="unset"
          errorMessageBorderRadius="unset"
          errorMessageOverflow1="unset"
          textHeight1="65.52%"
          textWidth1="97.53%"
          textTop1="35.63%"
          textLeft1="1.86%"
          textColor1="rgba(255, 255, 255, 0)"
          textTextAlign1="center"
          forgetYourPasswordBorder="none"
          forgetYourPasswordPadding="0"
          forgetYourPasswordBackgroundColor="transparent"
          forgetYourPasswordPosition="relative"
          forgetYourPasswordTextDecoration="underline"
          forgetYourPasswordFontWeight="500"
          forgetYourPasswordColor="#111"
          forgetYourPasswordTextAlign="left"
          forgetYourPasswordHeight="unset"
          forgetYourPasswordWidth="unset"
          forgetYourPasswordTop="unset"
          forgetYourPasswordLeft="unset"
          frameButtonBackgroundColor="#111"
          frameButtonWidth="unset"
          frameButtonBorderRadius="32px"
          frameButtonHeight="64px"
          frameButtonOverflow="hidden"
          frameButtonFontSize="unset"
          frameButtonTextDecoration="unset"
          frameButtonFontWeight="unset"
          frameButtonFontFamily="unset"
          frameButtonColor="unset"
          frameButtonTextAlign="unset"
          frameButtonAlignSelf="stretch"
          logInPosition="absolute"
          logInTop="calc(50% - 32px)"
          logInLeft="calc(50% - 241.5px)"
          logInFontSize="22px"
          logInFontWeight="500"
          logInFontFamily="Poppins"
          logInColor="#666"
          logInTextAlign="center"
          logInDisplay="flex"
          logInBorder="unset"
          logInPadding="unset"
          logInBackgroundColor="unset"
          logInBorderRadius="unset"
          logInOverflow="unset"
          alreadyHaveAnContainerBorder="none"
          alreadyHaveAnContainerPadding="0"
          alreadyHaveAnContainerBackgroundColor="transparent"
          alreadyHaveAnContainerPosition="relative"
          alreadyHaveAnContainerFontSize="16px"
          alreadyHaveAnContainerTextAlign="left"
          alreadyHaveAnContainerDisplay="inline-block"
          alreadyHaveAnContainerTop="unset"
          alreadyHaveAnContainerLeft="unset"
          alreadyHaveAnContainerFontWeight="unset"
          alreadyHaveAnContainerFontFamily="unset"
          alreadyHaveAnContainerColor="unset"
          alreadyHaveAnContainerWidth="unset"
          alreadyHaveAnContainerHeight="unset"
          dontHaveAnFontFamily="Poppins"
          dontHaveAnColor="#666"
          dontHaveAnBorder="unset"
          dontHaveAnPadding="unset"
          dontHaveAnBackgroundColor="unset"
          dontHaveAnWidth="unset"
          dontHaveAnPosition="unset"
          dontHaveAnFontSize="unset"
          dontHaveAnTextAlign="unset"
          signUpTextDecoration="underline"
          signUpFontWeight="500"
          signUpColor="#111"
          onFrameButtonClick={onFrameButtonClick}
          onAlreadyHaveAnClick={onAlreadyHaveAnClick}
          showPassword
          passwordHideSee2={false}
          showHide
          errorMessage11={false}
          passwordHideSee11={false}
          showHide1
          errorMessage111={false}
        />
        <div className="absolute top-[41px] left-[43px] rounded-sm w-[247px] overflow-hidden flex flex-col items-center justify-center py-[35px] px-0 box-border">
          <HeadingTextBackgroundLo
            headingTextBackgroundLoBorderRadius="unset"
            headingTextBackgroundLoBackdropFilter="unset"
            headingTextBackgroundLoAlignSelf="stretch"
            headingTextBackgroundLoPosition="unset"
            headingTextBackgroundLoTop="unset"
            headingTextBackgroundLoLeft="unset"
            logoBorder="unset"
            logoPadding="unset"
            logoBackgroundColor="unset"
            impactLynkMargin="0"
            impactLynkFontWeight="700"
            impactLynkColor="#000"
            onLogoClick={onLogoContainerClick}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;