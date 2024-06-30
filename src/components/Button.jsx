import React from "react";

const Button = ({
  bgColor,
  textColor,
  hoverBg,
  hoverText,
  text,
  fontW,
  func,
  disable,
}) => {
  return (
    <button
      type="submit"
      className={`${bgColor} ${textColor} ${hoverBg} ${hoverText} ${fontW}  px-6 py-2`}
      onClick={func}
      disabled={disable}
    >
      {text}
    </button>
  );
};

export default Button;
