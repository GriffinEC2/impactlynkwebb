import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import Heading1 from "../components/Heading1";

const ManageEvents = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/manage-volunteers");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/manage-organizations");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-5 box-border gap-[20px] text-left text-13xl text-black font-poppins">
      <TopBar
        signIn="Organize"
        signIn1="Manage"
        signIn2="About Us"
        frameButtonGap="375px"
      />
      <div className="overflow-hidden flex flex-col items-start justify-start p-5 gap-[34px]">
        <b className="w-[507px] relative flex items-end h-[67px] shrink-0">
          Dashboard
        </b>
        <div className="w-[1120px] rounded-mini bg-whitesmoke-200 shadow-[4px_4px_15px_2px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start p-5 box-border gap-[20px] text-base">
          <Heading1
            propFontWeight="unset"
            propFontWeight1="unset"
            propFontWeight2="bold"
            onButtonClick={onButtonClick}
            onButton1Click={onButton1Click}
          />
          <div className="rounded-xl flex flex-row items-center justify-start py-[5px] px-3.5">
            <div className="flex flex-row items-center justify-start gap-[15px]">
              <h3 className="m-0 w-[316px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                Some Event
              </h3>
              <h3 className="m-0 w-[270px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                Date
              </h3>
              <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                Start Time
              </h3>
              <h3 className="m-0 w-[225px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                End Time
              </h3>
            </div>
          </div>
          <div className="w-[1074px] relative rounded-xl bg-gainsboro-200 h-[50px]">
            <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1074px] h-[50px]" />
            <div className="absolute top-[5px] left-[14px] w-[1046px] h-10">
              <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Some Event
                </h3>
                <h3 className="m-0 w-[270px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  04/14
                </h3>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  12:00
                </h3>
                <h3 className="m-0 w-[131px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  15:15
                </h3>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[87.5%] w-[9.37%] top-[6.25%] right-[0%] bottom-[6.25%] left-[90.63%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
                <h3 className="m-0 absolute h-[71.43%] w-[75.51%] top-[17.14%] left-[10.2%] text-base tracking-[1px] font-semibold font-poppins text-black text-center flex items-center justify-center">
                  Cancel
                </h3>
              </button>
            </div>
          </div>
          <div className="w-[1074px] relative rounded-xl bg-gainsboro-200 h-[50px]">
            <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1074px] h-[50px]" />
            <div className="absolute top-[5px] left-[14px] w-[1046px] h-10">
              <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Some Event
                </h3>
                <h3 className="m-0 w-[270px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  04/14
                </h3>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  12:00
                </h3>
                <h3 className="m-0 w-[131px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  15:15
                </h3>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[87.5%] w-[9.37%] top-[6.25%] right-[0%] bottom-[6.25%] left-[90.63%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
                <h3 className="m-0 absolute h-[71.43%] w-[75.51%] top-[17.14%] left-[10.2%] text-base tracking-[1px] font-semibold font-poppins text-black text-center flex items-center justify-center">
                  Cancel
                </h3>
              </button>
            </div>
          </div>
          <div className="w-[1074px] relative rounded-xl bg-gainsboro-200 h-[50px]">
            <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1074px] h-[50px]" />
            <div className="absolute top-[5px] left-[14px] w-[1046px] h-10">
              <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Some Event
                </h3>
                <h3 className="m-0 w-[270px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  04/14
                </h3>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  12:00
                </h3>
                <h3 className="m-0 w-[131px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  15:15
                </h3>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[87.5%] w-[9.37%] top-[6.25%] right-[0%] bottom-[6.25%] left-[90.63%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
                <h3 className="m-0 absolute h-[71.43%] w-[75.51%] top-[17.14%] left-[10.2%] text-base tracking-[1px] font-semibold font-poppins text-black text-center flex items-center justify-center">
                  Cancel
                </h3>
              </button>
            </div>
          </div>
          <div className="w-[1074px] relative rounded-xl bg-gainsboro-200 h-[50px]">
            <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1074px] h-[50px]" />
            <div className="absolute top-[5px] left-[14px] w-[1046px] h-10">
              <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Some Event
                </h3>
                <h3 className="m-0 w-[270px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  04/14
                </h3>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  12:00
                </h3>
                <h3 className="m-0 w-[131px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  15:15
                </h3>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[87.5%] w-[9.37%] top-[6.25%] right-[0%] bottom-[6.25%] left-[90.63%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
                <h3 className="m-0 absolute h-[71.43%] w-[75.51%] top-[17.14%] left-[10.2%] text-base tracking-[1px] font-semibold font-poppins text-black text-center flex items-center justify-center">
                  Cancel
                </h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEvents;
