import { useMemo } from "react";

const HaveAnAccountLogin = ({
  alreadyHaveAnCcount,
  haveAnAccountLoginBorder,
  haveAnAccountLoginBackgroundColor,
  alreadyHaveAnContainerDisplay,
  onHaveAnAccountLoginClick,
  onAlreadyHaveAnClick,
}) => {
  const haveAnAccountLogin1Style = useMemo(() => {
    return {
      border: haveAnAccountLoginBorder,
      backgroundColor: haveAnAccountLoginBackgroundColor,
    };
  }, [haveAnAccountLoginBorder, haveAnAccountLoginBackgroundColor]);

  const alreadyHaveAnContainer1Style = useMemo(() => {
    return {
      display: alreadyHaveAnContainerDisplay,
    };
  }, [alreadyHaveAnContainerDisplay]);

  return (
    <div
      className="flex flex-row items-start justify-start p-0.5 text-left text-base text-gray-200 font-poppins"
      style={haveAnAccountLogin1Style}
      onClick={onHaveAnAccountLoginClick}
    >
      <div
        className="relative"
        style={alreadyHaveAnContainer1Style}
        onClick={onAlreadyHaveAnClick}
      >
        <span className="text-darkslategray-300">Already have an ccount?</span>
        <span className="text-dimgray-200">{` `}</span>
        <span className="[text-decoration:underline] whitespace-pre-wrap">{`Log in  `}</span>
      </div>
    </div>
  );
};

export default HaveAnAccountLogin;
