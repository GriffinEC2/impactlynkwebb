import { useMemo } from "react";

const HeadingTextalarm = ({
  headingTextalarmHeadingTe,
  headingTextalarmWidth,
  headingTextalarmHeight,
  headingTextalarmPosition,
  headingTextalarmTop,
  headingTextalarmLeft,
}) => {
  const headingTextalarm1Style = useMemo(() => {
    return {
      width: headingTextalarmWidth,
      height: headingTextalarmHeight,
      position: headingTextalarmPosition,
      top: headingTextalarmTop,
      left: headingTextalarmLeft,
    };
  }, [
    headingTextalarmWidth,
    headingTextalarmHeight,
    headingTextalarmPosition,
    headingTextalarmTop,
    headingTextalarmLeft,
  ]);

  return (
    <img
      className="w-28 max-w-full overflow-hidden h-28 object-cover"
      alt=""
      src={headingTextalarmHeadingTe}
      style={headingTextalarm1Style}
    />
  );
};

export default HeadingTextalarm;
