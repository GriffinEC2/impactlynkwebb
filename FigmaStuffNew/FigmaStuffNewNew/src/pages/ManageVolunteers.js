import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import Heading1 from "../components/Heading1";

const ManageVolunteers = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/manage-organizations");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/manage-events");
  }, [navigate]);

  const onNameBarContainer1Click = useCallback(() => {
    navigate("/manage-volunteers-2");
  }, [navigate]);

  const onNameBarContainer2Click = useCallback(() => {
    navigate("/manage-volunteers-2");
  }, [navigate]);

  const onNameBarContainer3Click = useCallback(() => {
    navigate("/manage-volunteers-2");
  }, [navigate]);

  const onNameBarContainer4Click = useCallback(() => {
    navigate("/manage-volunteers-2");
  }, [navigate]);

  const onNameBarContainer5Click = useCallback(() => {
    navigate("/manage-volunteers-2");
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
        <div className="rounded-mini bg-whitesmoke-200 shadow-[4px_4px_15px_2px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col items-start justify-start p-5 gap-[20px] text-base">
          <Heading1
            onButton1Click={onButton1Click}
            onButton2Click={onButton2Click}
          />
          <div className="rounded-xl flex flex-row items-center justify-start py-[5px] px-3.5 gap-[15px]">
            <div className="flex flex-row items-center justify-start gap-[15px]">
              <div className="w-10 relative rounded-[50%] h-10" />
              <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                Name
              </h3>
              <h3 className="m-0 w-[270px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                Email
              </h3>
              <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                Phone Number
              </h3>
              <h3 className="m-0 w-[225px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                School
              </h3>
            </div>
            <div className="w-[59px] relative h-[25px] text-center">
              <div className="absolute h-full w-full top-[0%] left-[0%] tracking-[1px] font-semibold flex items-center justify-center">
                Grade
              </div>
            </div>
          </div>
          <div
            className="w-[1129px] relative rounded-xl bg-gainsboro-200 h-[50px] cursor-pointer"
            onClick={onNameBarContainer1Click}
          >
            <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1129px] h-[50px]" />
            <div className="absolute top-[5px] left-[14px] overflow-hidden flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Someone’s Name
                </h3>
                <a className="[text-decoration:underline] w-[270px] relative tracking-[1px] font-semibold text-[inherit] flex items-center h-[35px] shrink-0">
                  example@gmail.com
                </a>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  +1 (415) 123-4567
                </h3>
                <h3 className="m-0 w-[225px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  The Branson School
                </h3>
              </div>
              <div className="w-[70px] relative h-[35px] text-center">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
                <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
                  10
                </h3>
              </div>
            </div>
          </div>
          <div
            className="w-[1129px] relative rounded-xl bg-gainsboro-200 h-[50px] cursor-pointer"
            onClick={onNameBarContainer2Click}
          >
            <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1129px] h-[50px]" />
            <div className="absolute top-[5px] left-[14px] overflow-hidden flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Someone’s Name
                </h3>
                <a className="[text-decoration:underline] w-[270px] relative tracking-[1px] font-semibold text-[inherit] flex items-center h-[35px] shrink-0">
                  example@gmail.com
                </a>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  +1 (415) 123-4567
                </h3>
                <h3 className="m-0 w-[225px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  The Branson School
                </h3>
              </div>
              <div className="w-[70px] relative h-[35px] text-center">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
                <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
                  10
                </h3>
              </div>
            </div>
          </div>
          <div
            className="w-[1129px] relative rounded-xl bg-gainsboro-200 h-[50px] cursor-pointer"
            onClick={onNameBarContainer3Click}
          >
            <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1129px] h-[50px]" />
            <div className="absolute top-[5px] left-[14px] overflow-hidden flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Someone’s Name
                </h3>
                <a className="[text-decoration:underline] w-[270px] relative tracking-[1px] font-semibold text-[inherit] flex items-center h-[35px] shrink-0">
                  example@gmail.com
                </a>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  +1 (415) 123-4567
                </h3>
                <h3 className="m-0 w-[225px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  The Branson School
                </h3>
              </div>
              <div className="w-[70px] relative h-[35px] text-center">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
                <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
                  10
                </h3>
              </div>
            </div>
          </div>
          <div
            className="w-[1129px] relative rounded-xl bg-gainsboro-200 h-[50px] cursor-pointer"
            onClick={onNameBarContainer4Click}
          >
            <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1129px] h-[50px]" />
            <div className="absolute top-[5px] left-[14px] overflow-hidden flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Someone’s Name
                </h3>
                <a className="[text-decoration:underline] w-[270px] relative tracking-[1px] font-semibold text-[inherit] flex items-center h-[35px] shrink-0">
                  example@gmail.com
                </a>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  +1 (415) 123-4567
                </h3>
                <h3 className="m-0 w-[225px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  The Branson School
                </h3>
              </div>
              <div className="w-[70px] relative h-[35px] text-center">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
                <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
                  10
                </h3>
              </div>
            </div>
          </div>
          <div
            className="w-[1129px] relative rounded-xl bg-gainsboro-200 h-[50px] cursor-pointer"
            onClick={onNameBarContainer5Click}
          >
            <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1129px] h-[50px]" />
            <div className="absolute top-[5px] left-[14px] overflow-hidden flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Someone’s Name
                </h3>
                <a className="[text-decoration:underline] w-[270px] relative tracking-[1px] font-semibold text-[inherit] flex items-center h-[35px] shrink-0">
                  example@gmail.com
                </a>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  +1 (415) 123-4567
                </h3>
                <h3 className="m-0 w-[225px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  The Branson School
                </h3>
              </div>
              <div className="w-[70px] relative h-[35px] text-center">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
                <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
                  10
                </h3>
              </div>
            </div>
          </div>
          <div className="w-[1129px] relative rounded-xl bg-gainsboro-200 h-[50px]">
            <button className="cursor-pointer [border:none] p-0 bg-gainsboro-200 absolute top-[0px] left-[0px] rounded-xl w-[1129px] h-[50px]" />
            <div className="absolute top-[5px] left-[14px] overflow-hidden flex flex-row items-center justify-start">
              <div className="flex flex-row items-center justify-start gap-[15px]">
                <img
                  className="w-10 relative rounded-[50%] h-10 object-cover"
                  alt=""
                  src="/ellipse-2@2x.png"
                />
                <h3 className="m-0 w-[260px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  Someone’s Name
                </h3>
                <a className="[text-decoration:underline] w-[270px] relative tracking-[1px] font-semibold text-[inherit] flex items-center h-[35px] shrink-0">
                  example@gmail.com
                </a>
                <h3 className="m-0 w-[172px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  +1 (415) 123-4567
                </h3>
                <h3 className="m-0 w-[225px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center h-[35px] shrink-0">
                  The Branson School
                </h3>
              </div>
              <div className="w-[70px] relative h-[35px] text-center">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-darkgray-100" />
                <h3 className="m-0 absolute h-[71.43%] w-[71.43%] top-[14.29%] left-[14.29%] text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center">
                  10
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageVolunteers;
