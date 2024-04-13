import { useCallback } from "react";
import TopBar2 from "../components/TopBar";
import HeadingText from "../components/HeadingText";
import TypeSingleThemeLight from "../components/TypeSingleThemeLight";

const PostVolunteerPage = () => {
  const onButtonClick = useCallback(() => {
    //TODO: Send to suc page and add them to event rosteress
  }, []);

  return (
    <div className="w-full relative bg-lightgray-300 h-[971px] overflow-hidden flex flex-col items-center justify-start text-center text-29xl text-white font-poppins">
      <TopBar2
        signIn="Volunteer"
        signIn="About Us"
        signIn="Stats"
        frameButtonGap="400px"
      />
      <div className="w-[1274px] h-[871px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-5 box-border gap-[10px]">
        <HeadingText rectangle28="/rectangle-28@2x.png" />
        <div className="h-[744px] overflow-hidden flex flex-col items-center justify-start p-[30px] box-border gap-[40px]">
          <div className="rounded-8xs bg-white overflow-hidden flex flex-col items-start justify-start p-5 gap-[60px]">
            <div className="w-[430px] bg-seagreen shadow-[4px_4px_4px_rgba(0,_0,_0,_0.25)] h-[86.4px] flex flex-col items-start justify-start py-[8.3px] px-[49px] box-border">
              <b className="w-[331px] relative flex items-center justify-center h-[69.2px] shrink-0">
                March 12th
              </b>
            </div>
            <TypeSingleThemeLight
              typeSingleThemeLightBoxShadow="4px 4px 4px rgba(0, 0, 0, 0.25)"
              typeSingleThemeLightBorder="2px solid #bdbdbd"
              divDisplay="inline-block"
              divDisplay1="inline-block"
              divDisplay2="inline-block"
              divDisplay3="inline-block"
              divDisplay4="inline-block"
              divDisplay5="inline-block"
              divDisplay6="inline-block"
              divDisplay7="inline-block"
              divDisplay8="inline-block"
              divDisplay9="inline-block"
              divDisplay10="inline-block"
              divDisplay11="inline-block"
              divDisplay12="inline-block"
              divDisplay13="inline-block"
              divDisplay14="inline-block"
              divDisplay15="inline-block"
              divDisplay16="inline-block"
              divDisplay17="inline-block"
              divDisplay18="inline-block"
              divDisplay19="inline-block"
              divDisplay20="inline-block"
              divDisplay21="inline-block"
              divDisplay22="inline-block"
              divDisplay23="inline-block"
              divDisplay24="inline-block"
              divDisplay25="inline-block"
              divDisplay26="inline-block"
              divDisplay27="inline-block"
              divDisplay28="inline-block"
              divDisplay29="inline-block"
              divDisplay30="inline-block"
              divDisplay31="inline-block"
              divDisplay32="inline-block"
              divDisplay33="inline-block"
            />
          </div>
          <button
            className="cursor-pointer [border:none] py-1 px-0 bg-seagreen w-[469.5px] rounded-3xs h-[123px] flex flex-col items-end justify-end box-border"
            onClick={onButtonClick}
          >
            <b className="w-[469.5px] relative text-21xl flex font-poppins text-darkgray-200 text-center items-center justify-center h-[113px] shrink-0">
              Volunteer
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostVolunteerPage;
