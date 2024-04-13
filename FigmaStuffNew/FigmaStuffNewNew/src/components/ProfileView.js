import { useMemo } from "react";

const ProfileView = ({ ellipse3, profileViewBoxShadow }) => {
  const profileViewStyle = useMemo(() => {
    return {
      boxShadow: profileViewBoxShadow,
    };
  }, [profileViewBoxShadow]);

  return (
    <div
      className="rounded-xl bg-white shadow-[10px_10px_10px_10px_rgba(0,_0,_0,_0.25)] max-w-full overflow-hidden flex flex-col items-center justify-start py-5 px-[133px] box-border text-center text-base text-black font-poppins"
      style={profileViewStyle}
    >
      <img
        className="w-20 relative rounded-[50%] h-20 object-cover"
        alt=""
        src={ellipse3}
      />
      <h3 className="m-0 w-[263px] relative text-inherit tracking-[1px] font-semibold font-inherit flex items-center justify-center h-[42px] shrink-0">
        Someone’s Name
      </h3>
      <h3 className="m-0 w-[263px] relative text-sm tracking-[1px] font-normal font-inherit flex items-center justify-center h-[42px] shrink-0">
        someone_name@gmail.com
      </h3>
      <h1 className="m-0 relative text-17xl tracking-[1px] font-bold font-inherit">
        1st Place
      </h1>
    </div>
  );
};

export default ProfileView;
