import React, { FC } from "react";

interface ButtonSecondaryProps {
  title: string;
  className?: string;
}

const ButtonSecondary: FC<ButtonSecondaryProps> = ({ title, className }) => {
  return (
    <div className={`flex items-center py-4 px-4 md:px-6 ml-2 ${className}`}>
      <a className="rounded-lg  text-[#6135FB] text-sm md:text-lg font-bold leading-4 tracking-tighter">
        {title}
      </a>
      <img src="assets/images/Vector1.svg" className="ml-2" />
    </div>
  );
};

export default ButtonSecondary;
