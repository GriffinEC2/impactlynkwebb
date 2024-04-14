import { useMemo } from "react";

const BulletPoint = ({
  oneLowercaseCharacter,
  bulletPointGap,
  oneLowercaseCharacterTextAlign,
  oneLowercaseCharacterWidth,
}) => {
  const bulletPoint8Style = useMemo(() => {
    return {
      gap: bulletPointGap,
    };
  }, [bulletPointGap]);

  const oneLowercaseCharacter7Style = useMemo(() => {
    return {
      textAlign: oneLowercaseCharacterTextAlign,
      width: oneLowercaseCharacterWidth,
    };
  }, [oneLowercaseCharacterTextAlign, oneLowercaseCharacterWidth]);

  return (
    <div
      className="flex flex-row items-center justify-center py-2 pr-2 pl-0 gap-[8px] text-left text-sm text-dimgray-300 font-poppins"
      style={bulletPoint8Style}
    >
      <div className="w-2 relative rounded-[50%] bg-dimgray-300 h-2" />
      <div className="relative" style={oneLowercaseCharacter7Style}>
        {oneLowercaseCharacter}
      </div>
    </div>
  );
};

export default BulletPoint;
