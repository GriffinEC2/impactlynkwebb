import TopBar2 from "../components/TopBar";
import ProgressBox from "../components/ProgressBox";
import LeaderBoard from "../components/LeaderBoard";
import ProfileView from "../components/ProfileView";
import FullBar from "../components/FullBar";
import FullBar1 from "../components/FullBar1";

const StatsPage = () => {
  return (
    <div className="w-full relative bg-lightgray-100 h-[1049px] overflow-hidden flex flex-col items-center justify-start gap-[20px] text-left text-xs text-gray-100 font-poppins">
      <TopBar2
        signIn="Volunteer"
        signIn="About Us"
        signIn="Stats"
        frameButtonGap="400px"
      />
      <div className="h-[1032px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
        <div className="overflow-hidden flex flex-col items-center justify-start py-[65px] px-20 gap-[65px]">
          <ProgressBox
            progressBoxPosition="relative"
            rectangleDivBoxShadow="2px 2px 10px rgba(0, 0, 0, 0.25)"
            rectangleDivBackgroundColor="#27a049"
            supportFontWeight="unset"
            rectangleDivBackgroundColor1="#27a049"
          />
          <LeaderBoard
            prop="29"
            leaderBoardBoxShadow="2px 2px 10px rgba(0, 0, 0, 0.25)"
          />
        </div>
        <div className="overflow-hidden flex flex-col items-start justify-start py-[65px] px-20 gap-[65px] ml-[-90px]">
          <ProfileView
            ellipse3="/ellipse-3@2x.png"
            profileViewBoxShadow="2px 2px 10px rgba(0, 0, 0, 0.25)"
          />
          <div className="rounded-xl bg-white shadow-[2px_2px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-start py-2.5 px-5">
            <div className="w-[499px] relative h-[376px]">
              <div className="absolute top-[60.5px] left-[0px] w-[499px] h-[266px] overflow-hidden">
                <div className="absolute w-[84.01%] top-[calc(50%_-_133px)] right-[15.99%] left-[0%] h-[270px]">
                  <div className="absolute w-[38.1%] top-[calc(50%_+_117px)] left-[0%] tracking-[1px] inline-block">
                    0
                  </div>
                  <div className="absolute w-[61.9%] top-[calc(50%_+_81px)] left-[0%] tracking-[1px] inline-block">
                    1
                  </div>
                  <div className="absolute w-[76.19%] top-[calc(50%_+_45px)] left-[0%] tracking-[1px] inline-block">
                    2
                  </div>
                  <div className="absolute w-[80.94%] top-[calc(50%_+_9px)] left-[0%] tracking-[1px] inline-block">
                    3
                  </div>
                  <div className="absolute w-[76.19%] top-[calc(50%_-_27px)] left-[0%] tracking-[1px] inline-block">
                    4
                  </div>
                  <div className="absolute w-[80.94%] top-[calc(50%_-_63px)] left-[0%] tracking-[1px] inline-block">
                    5
                  </div>
                  <div className="absolute w-full top-[calc(50%_-_99px)] left-[0%] tracking-[1px] inline-block">
                    6
                  </div>
                  <div className="absolute w-full top-[calc(50%_-_135px)] left-[0%] tracking-[1px] inline-block">
                    7
                  </div>
                </div>
                <img
                  className="absolute top-[9px] left-[75px] w-[385px] h-[252px]"
                  alt=""
                  src="/lines.svg"
                />
              </div>
              <div className="absolute top-[0px] left-[74.5px] w-[386px] h-[376px] overflow-hidden text-base text-darkslategray-100">
                <div className="absolute top-[calc(50%_-_179px)] left-[0%] tracking-[1px] font-semibold">
                  Number of hours Completed
                </div>
                <div className="absolute top-[-34px] left-[1px] h-[410px] flex flex-row items-start justify-start">
                  <div className="overflow-hidden flex flex-row items-start justify-center">
                    <FullBar month="Jan" propMarginLeft="unset" />
                    <FullBar month="Feb" propMarginLeft="-45px" />
                    <FullBar1 />
                    <FullBar month="Apr" propMarginLeft="-45px" />
                    <FullBar month="May" propMarginLeft="-45px" />
                    <FullBar month="Jun" propMarginLeft="-45px" />
                    <FullBar month="Jul" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
