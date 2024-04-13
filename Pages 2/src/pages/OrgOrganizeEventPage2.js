import { useCallback } from "react";
import TopBar from "../components/TopBar";
import Login1 from "../components/Login1";
import ContactScreen from "../components/ContactScreen";
import Login from "../components/Login";

const OrgOrganizeEventPage2 = () => {
  const onFrameContainerClick = useCallback(() => {
    //TODO: Submit form and send to org: home page
  }, []);

  return (
    <div className="w-full relative [background:linear-gradient(112.9deg,_#bdbdbd_12%,_#808080)] h-[832px] overflow-hidden flex flex-col items-center justify-start gap-[40px] text-center text-base text-dimgray-200 font-poppins">
      <TopBar
        signIn="Organize"
        signIn1="Events"
        signIn2="About Us"
        frameButtonGap="400px"
      />
      <div className="overflow-hidden flex flex-row items-center justify-start py-10 px-[65px] gap-[66px]">
        <div className="rounded-mini bg-white shadow-[2px_2px_15px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-center justify-start py-10 px-[26px] gap-[10px]">
          <Login1 label="Start Time" text="XX:XX" />
          <Login1 label="End Time" text="XX:XX" />
          <ContactScreen
            hide="Error message"
            send="Or email us at "
            showFrameDiv={false}
            frameDivVisible
            showFrameArticle={false}
            passwordHideSee
            showHide={false}
            errorMessage1
            showFrameButton={false}
            contactScreenPosition="unset"
            contactScreenTop="unset"
            contactScreenLeft="unset"
            haveQuestionsContactContaFontWeight="400"
            haveQuestionsContactContaFontFamily="Inter"
            haveQuestionsFontFamily="unset"
            haveQuestionsOverflow="hidden"
            haveQuestionsDisplay="flex"
            haveQuestionsFlexDirection="column"
            haveQuestionsPadding="2px 6px"
            contactUsFontWeight="unset"
            contactUsFontFamily="unset"
            contactUsWidth="484px"
            contactUsPosition="relative"
            contactUsHeight="87px"
            frameDivOverflow="unset"
            frameDivFlexDirection="unset"
            frameDivPadding="unset"
            frameDivPosition="absolute"
            frameDivHeight="31.03%"
            frameDivWidth="100%"
            frameDivTop="0%"
            frameDivRight="0%"
            frameDivBottom="68.97%"
            frameDivLeft="0%"
            loginWidth="unset"
            loginPosition="absolute"
            loginHeight="unset"
            loginTop="0px"
            loginLeft="0px"
            loginFontSize="16px"
            loginFontFamily="Poppins"
            loginColor="#666"
            loginTextAlign="left"
            loginDisplay="inline-block"
            frameArticleHeight="27px"
            frameArticleWidth="73px"
            frameArticleTop="0px"
            frameArticleRight="8.9px"
            frameArticleBottom="unset"
            frameArticleLeft="unset"
            labelLeft="unset"
            labelFontSize="unset"
            labelFontFamily="unset"
            labelColor="unset"
            labelTextAlign="unset"
            labelDisplay="unset"
            labelRight="49px"
            labelWidth="24px"
            labelHeight="24px"
            labelOverflow="hidden"
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
            errorMessageAlignSelf="stretch"
            errorMessageOverflow="hidden"
            errorMessageFlexDirection="column"
            errorMessagePadding="2px 0px"
            textPosition="relative"
            textHeight="27px"
            textWidth="484px"
            textTop="unset"
            textLeft="unset"
            textColor="#666"
            textTextAlign="left"
            frameDivAlignSelf="unset"
            frameDivOverflow1="unset"
            frameDivDisplay="unset"
            frameDivFlexDirection1="unset"
            frameDivPadding1="unset"
            frameDivMargin="0"
            typeYourMessageMargin="unset"
            typeYourMessageBorder="1px solid rgba(102, 102, 102, 0.35)"
            typeYourMessageBackgroundColor="transparent"
            typeYourMessageOutline="none"
            typeYourMessageWidth="484px"
            typeYourMessageBorderRadius="12px"
            typeYourMessageHeight="44px"
            typeYourMessageOverflow="hidden"
            typeYourMessageDisplay="flex"
            typeYourMessageFlexDirection="row"
            typeYourMessagePadding="10px"
            textFieldBorder1="unset"
            textFieldBackgroundColor1="unset"
            textFieldOutline1="unset"
            textFieldWidth1="197px"
            textFieldBorderRadius1="unset"
            textFieldHeight1="64px"
            textFieldOverflow1="unset"
            textFieldFlexDirection="unset"
            textFieldPadding="unset"
            textFieldPosition="absolute"
            textFieldTop="calc(50% - 32px)"
            textFieldLeft1="calc(50% - 98.5px)"
            textFieldFontSize1="22px"
            textFieldFontWeight="500"
            textFieldFontFamily1="Poppins"
            textFieldColor1="#666"
            textFieldTextAlign1="center"
            frameButtonBorder="none"
            frameButtonPadding="0"
            frameButtonBackgroundColor="transparent"
            frameButtonWidth="337px"
            frameButtonBorderRadius="unset"
            frameButtonHeight="32px"
            frameButtonOverflow="unset"
            frameButtonFontSize="16px"
            frameButtonFontFamily="Poppins"
            frameButtonTextAlign="left"
            sendColor="#060606"
            sendPosition="unset"
            sendTop="unset"
            sendLeft="unset"
            sendFontSize="unset"
            sendFontWeight="unset"
            sendFontFamily="unset"
            sendTextAlign="unset"
            sendDisplay="unset"
            sendWidth="unset"
            sendHeight="unset"
            orEmailUsContainerBorder="unset"
            orEmailUsContainerPadding="unset"
            orEmailUsContainerBackgroundColor="unset"
            orEmailUsContainerWidth="unset"
            orEmailUsContainerPosition="unset"
            orEmailUsContainerFontSize="unset"
            orEmailUsContainerFontFamily="unset"
            orEmailUsContainerTextAlign="unset"
            orEmailUsContainerDisplay="unset"
            orEmailUsContainerHeight="unset"
            orEmailUsContainerColor="#2f2f2f"
            passwordHideSee1={false}
            showHide1
            errorMessage11={false}
          />
        </div>
        <div className="rounded-mini bg-white shadow-[2px_2px_15px_4px_rgba(0,_0,_0,_0.25)] h-[577px] overflow-hidden flex flex-col items-center justify-start py-10 px-[26px] box-border gap-[10px]">
          <Login label="Any Requirements to come?" />
          <Login label="Number of Volunteers Needed" />
          <Login label="Link to your organization" />
          <Login label="Anything Else?" />
          <div className="w-[481px] h-[88px] overflow-hidden shrink-0 flex flex-col items-start justify-center py-3 px-0 box-border">
            <div
              className="w-[153px] relative rounded-13xl bg-gray-200 h-[50px] overflow-hidden shrink-0 cursor-pointer"
              onClick={onFrameContainerClick}
            >
              <div className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_98.5px)] font-medium flex items-center justify-center w-[197px] h-16">
                Complete
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgOrganizeEventPage2;
