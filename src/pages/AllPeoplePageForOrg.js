import TopBar from "../components/TopBar";

const AllPeoplePageForOrg = () => {
  return (
    <div className="w-full relative bg-white h-[832px] overflow-hidden flex flex-col items-start justify-start text-center text-5xl text-black font-poppins">
      <TopBar
        signIn="Volunteer"
        signIn1="About Us"
        signIn2="Stats"
        frameButtonGap="400px"
      />
      <div className="w-[507px] relative flex items-end justify-center h-[67px] shrink-0">
        People That Have Worked With You
      </div>
      <div className="w-[1212px] h-[665px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-5 pr-5 pl-[69px] box-border gap-[10px] text-left text-base">
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
  );
};

export default AllPeoplePageForOrg;
