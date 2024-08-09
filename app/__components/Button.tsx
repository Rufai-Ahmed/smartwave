import { iButton } from "@/interfaces";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

const Button: FC<iButton> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "2xl:w-[70%] md:w-[80%] w-[90%] flex items-center justify-center bg-[#8C29E4] text-white py-2 md:h-[70px] rounded-[10px] text-[20px] md:text-[24px]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
