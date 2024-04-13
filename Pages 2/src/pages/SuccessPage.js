import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopBar2 from "../components/TopBar";
import Button from "../components/Button";

const SuccessPage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/post-home-page");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[832px] overflow-hidden flex flex-col items-center justify-start gap-[50px] text-center text-77xl text-black font-poppins">
      <TopBar2
        signIn="Volunteer"
        signIn="About Us"
        signIn="Stats"
        frameButtonGap="400px"
      />
      <h1 className="m-0 w-[698px] relative text-inherit font-bold font-inherit flex items-center justify-center h-[199px] shrink-0">{`Success! `}</h1>
      <p className="m-0 w-[698px] relative text-17xl text-left inline-block h-[205px] shrink-0">
        You have been registered to volunteer for Best Buddies during lunch at
        12:00 on 4/2 on the field. We can’t wait to see you there!
      </p>
      <Button
        icons="/icons.svg"
        signUp="Back to Home"
        buttonWidth="256px"
        buttonBorderRadius="32px"
        buttonBackgroundColor="#2b6f3a"
        buttonBorder="none"
        buttonPadding="0"
        buttonPosition="relative"
        frameDivLeft="calc(50% - 77px)"
        signUpDisplay="inline-block"
        signUpColor="#fff"
        onButtonClick={onButtonClick}
      />
    </div>
  );
};

export default SuccessPage;
