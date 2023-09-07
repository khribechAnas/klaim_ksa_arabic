import React, { FC } from "react";

interface ButtonWhiteProps {
  className?: string;
}

const ButtonWhite: FC<ButtonWhiteProps> = ({ className }) => {
  return (
    <a
      className={`bg-[#F5F7FB] text-[#6135FB] rounded-lg py-4 px-6 text-sm md:text-lg font-bold leading-4 tracking-[0.0225rem] ${className}`}
    >
      I&#39;m interested
    </a>
  );
};

export default ButtonWhite;
