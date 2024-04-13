import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/org-organize-event-page-2");
  }, [navigate]);

  return (
    <div
      className="w-[168px] relative rounded-2xl bg-gray-200 h-16 overflow-hidden shrink-0 cursor-pointer text-center text-3xl text-dimgray-200 font-poppins"
      onClick={onButtonContainerClick}
    >
      <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_51px)] flex flex-row items-center justify-center gap-[8px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/icons.svg"
        />
        <div className="relative font-medium">Continue</div>
      </div>
    </div>
  );
};

export default Button;
