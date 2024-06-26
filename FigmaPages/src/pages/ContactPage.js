import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContactScreen from "../components/ContactScreen";
import HeadingTextBackgroundLo from "../components/HeadingTextBackgroundLo";

const ContactPage = () => {
  const navigate = useNavigate();

  const onFrameContainer3Click = useCallback(() => {
    //TODO: Send email to person
  }, []);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gray-1600 h-[832px] overflow-hidden">
      <div className="absolute top-[0px] left-[0px] bg-gainsboro-200 w-[1280px] flex flex-col items-start justify-center">
        <img
          className="w-[500px] relative h-[832px] object-cover"
          alt=""
          src="/rectangle-7@2x.png"
        />
      </div>
      <ContactScreen
        haveQuestions="Have Questions? "
        contactUs="Contact Us!"
        label="Email "
        hide="Hide"
        errorMessage="Error message"
        text="Text"
        typeYourMessageHere="Type your message here"
        send="Send"
        showFrameDiv
        frameDivVisible
        showFrameArticle
        passwordHideSee={false}
        showHide
        errorMessage1={false}
        showFrameButton
        contactScreenPosition="absolute"
        contactScreenTop="133px"
        contactScreenLeft="650px"
        haveQuestionsContactContaFontWeight="unset"
        haveQuestionsContactContaFontFamily="unset"
        haveQuestionsFontFamily="Inter"
        haveQuestionsOverflow="unset"
        haveQuestionsDisplay="unset"
        haveQuestionsFlexDirection="unset"
        haveQuestionsPadding="unset"
        contactUsFontWeight="600"
        contactUsFontFamily="Inter"
        contactUsWidth="unset"
        contactUsPosition="unset"
        contactUsHeight="unset"
        frameDivOverflow="hidden"
        frameDivFlexDirection="column"
        frameDivPadding="2px 6px"
        frameDivPosition="unset"
        frameDivHeight="unset"
        frameDivWidth="unset"
        frameDivTop="unset"
        frameDivRight="unset"
        frameDivBottom="unset"
        frameDivLeft="unset"
        loginWidth="484px"
        loginPosition="relative"
        loginHeight="87px"
        loginTop="unset"
        loginLeft="unset"
        loginFontSize="unset"
        loginFontFamily="unset"
        loginColor="unset"
        loginTextAlign="unset"
        loginDisplay="unset"
        frameArticleHeight="31.03%"
        frameArticleWidth="100%"
        frameArticleTop="0%"
        frameArticleRight="0%"
        frameArticleBottom="68.97%"
        frameArticleLeft="0%"
        labelLeft="0px"
        labelFontSize="16px"
        labelFontFamily="Poppins"
        labelColor="#666"
        labelTextAlign="left"
        labelDisplay="inline-block"
        labelRight="unset"
        labelWidth="unset"
        labelHeight="unset"
        labelOverflow="unset"
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
        errorMessageAlignSelf="unset"
        errorMessageOverflow="unset"
        errorMessageFlexDirection="unset"
        errorMessagePadding="unset"
        textPosition="absolute"
        textHeight="65.52%"
        textWidth="97.52%"
        textTop="35.63%"
        textLeft="1.86%"
        textColor="rgba(255, 255, 255, 0)"
        textTextAlign="center"
        frameDivAlignSelf="stretch"
        frameDivOverflow1="hidden"
        frameDivDisplay="flex"
        frameDivFlexDirection1="column"
        frameDivPadding1="2px 0px"
        frameDivMargin="unset"
        labelWidth1="484px"
        labelPosition="relative"
        labelFontSize1="16px"
        labelFontFamily1="Poppins"
        labelColor1="#666"
        labelTextAlign1="left"
        labelDisplay1="inline-block"
        labelHeight1="27px"
        typeYourMessageBorder="unset"
        typeYourMessageBackgroundColor="unset"
        typeYourMessageOutline="unset"
        typeYourMessageWidth="unset"
        typeYourMessageBorderRadius="unset"
        typeYourMessageHeight="unset"
        typeYourMessageOverflow="unset"
        typeYourMessageDisplay="unset"
        typeYourMessageFlexDirection="unset"
        typeYourMessagePadding="unset"
        textFieldBorder1="1px solid rgba(102, 102, 102, 0.35)"
        textFieldBackgroundColor1="transparent"
        textFieldOutline1="none"
        textFieldWidth1="484px"
        textFieldBorderRadius1="12px"
        textFieldHeight1="44px"
        textFieldOverflow1="hidden"
        textFieldFlexDirection="row"
        textFieldPadding="10px"
        textFieldPosition="unset"
        textFieldTop="unset"
        textFieldLeft1="unset"
        textFieldFontSize1="unset"
        textFieldFontWeight="unset"
        textFieldFontFamily1="unset"
        textFieldColor1="unset"
        textFieldTextAlign1="unset"
        frameButtonBorder="unset"
        frameButtonPadding="unset"
        frameButtonBackgroundColor="#111"
        frameButtonWidth="197px"
        frameButtonBorderRadius="32px"
        frameButtonHeight="64px"
        frameButtonOverflow="hidden"
        frameButtonFontSize="unset"
        frameButtonFontFamily="unset"
        frameButtonTextAlign="unset"
        sendColor="#8f8c8c"
        sendPosition="absolute"
        sendTop="calc(50% - 32px)"
        sendLeft="calc(50% - 98.5px)"
        sendFontSize="22px"
        sendFontWeight="500"
        sendFontFamily="Poppins"
        sendTextAlign="center"
        sendDisplay="flex"
        sendWidth="197px"
        sendHeight="64px"
        orEmailUsContainerBorder="none"
        orEmailUsContainerPadding="0"
        orEmailUsContainerBackgroundColor="transparent"
        orEmailUsContainerWidth="337px"
        orEmailUsContainerPosition="relative"
        orEmailUsContainerFontSize="16px"
        orEmailUsContainerFontFamily="Poppins"
        orEmailUsContainerTextAlign="left"
        orEmailUsContainerDisplay="inline-block"
        orEmailUsContainerHeight="32px"
        orEmailUsContainerColor="unset"
        onFrameContainer3Click={onFrameContainer3Click}
        passwordHideSee1={false}
        showHide1
        errorMessage11={false}
      />
      <HeadingTextBackgroundLo
        headingTextBackgroundLoBorderRadius="unset"
        headingTextBackgroundLoBackdropFilter="unset"
        headingTextBackgroundLoAlignSelf="unset"
        headingTextBackgroundLoPosition="absolute"
        headingTextBackgroundLoTop="173px"
        headingTextBackgroundLoLeft="38px"
        logoBorder="unset"
        logoPadding="unset"
        logoBackgroundColor="unset"
        impactLynkMargin="unset"
        impactLynkFontWeight="unset"
        impactLynkColor="#d9d9d9"
        onLogoClick={onLogoContainerClick}
      />
    </div>
  );
};

export default ContactPage;
