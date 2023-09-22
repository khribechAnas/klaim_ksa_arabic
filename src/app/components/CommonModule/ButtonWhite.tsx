import React, { FC } from "react";

interface ButtonWhiteProps {
  className?: string;
  title?: string;
}

const ButtonWhite: FC<ButtonWhiteProps> = ({ className, title }) => {
  return (
    <a
      className={`bg-[#F5F7FB] text-[#6135FB] rounded-lg py-4 px-6 text-sm md:text-lg font-bold leading-4 tracking-[0.0225rem] ${className}`}
    >
      {title}
    </a>
  );
};

export default ButtonWhite;
