import { useMemo } from "react";
import BulletPoint from "./BulletPoint";

const Password = ({
  showPassword,
  propGap,
  propWidth,
  propWidth1,
  propTextAlign,
  propGap1,
  propWidth2,
  propTextAlign1,
}) => {
  const frameDiv15Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv16Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const oneLowercaseCharacter7Style = useMemo(() => {
    return {
      width: propWidth1,
      textAlign: propTextAlign,
    };
  }, [propWidth1, propTextAlign]);

  const bulletPoint8Style = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const oneLowercaseCharacter7Style1 = useMemo(() => {
    return {
      width: propWidth2,
      textAlign: propTextAlign1,
    };
  }, [propWidth2, propTextAlign1]);

  return (
    showPassword && (
      <article className="w-[484px] flex flex-col items-start justify-start">
        <div
          className="flex flex-row items-start justify-between"
          style={frameDiv15Style}
        >
          <div
            className="w-[202px] flex flex-col items-start justify-start"
            style={frameDiv16Style}
          >
            <BulletPoint
              oneLowercaseCharacter="One lowercase character"
              bulletPointGap="8px"
              oneLowercaseCharacterTextAlign="center"
              oneLowercaseCharacterWidth="177px"
            />
            <BulletPoint
              oneLowercaseCharacter="Use 8 or more characters"
              bulletPointGap="unset"
              oneLowercaseCharacterTextAlign="left"
              oneLowercaseCharacterWidth="unset"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <BulletPoint
              oneLowercaseCharacter="One Uppercase character"
              bulletPointGap="8px"
              oneLowercaseCharacterTextAlign="center"
              oneLowercaseCharacterWidth="182px"
            />
            <BulletPoint
              oneLowercaseCharacter="One number"
              bulletPointGap="8px"
              oneLowercaseCharacterTextAlign="left"
              oneLowercaseCharacterWidth="unset"
            />
          </div>
        </div>
      </article>
    )
  );
};

export default Password;
