import React, { FC } from "react";

interface ButtonPrimaryProps {
  title: string;
  className?: string;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ title, className }) => {
  return (
    <a
      className={`bg-[#6135FB] text-white rounded-lg py-4 px-6 text-sm md:text-lg font-bold leading-4 tracking-tighter ${className}`}
    >
      {title}
    </a>
  );
};

export default ButtonPrimary;
