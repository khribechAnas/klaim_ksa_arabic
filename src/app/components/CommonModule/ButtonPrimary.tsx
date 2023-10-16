import React, { FC } from "react";

interface ButtonPrimaryProps {
  title: string;
  className?: string;
  href?: string;
  target?: string;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  title,
  className,
  href,
  target,
}) => {
  return (
    <a
      href={href}
      className={`bg-[#6135FB] text-white rounded-lg py-4 px-6 text-sm md:text-lg font-bold leading-4 tracking-[0.0225rem] ${className}`}
      target={target}
    >
      {title}
    </a>
  );
};

export default ButtonPrimary;
