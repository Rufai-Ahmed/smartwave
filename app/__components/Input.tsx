"use client";
import { iInput } from "@/interfaces";
import { Eye, EyeOff } from "lucide-react";
import React, { FC, useState } from "react";
import { twMerge } from "tailwind-merge";

const Input: FC<iInput> = ({
  label,
  name,
  placeholder,
  bottomAction,
  type,
  className,
}) => {
  const [state, setState] = useState<boolean>(true);
  const handleToggleShow = () => setState(!state);

  return (
    <div className="space-y-2">
      <label className="text-gray-800 dark:text-gray-200">{label}</label>
      <div className="relative flex items-center w-full border-[2px] rounded-[8px] border-gray-400 dark:border-[#232323] bg-gray-200 dark:bg-[#191919] font-light pr-3 gap-3">
        <input
          type={name === "password" && !state ? "text" : type}
          name={name}
          placeholder={placeholder}
          className={twMerge(
            "bg-transparent flex-grow outline-none pl-5 placeholder:text-[#191919] dark:placeholder:text-[#D9D9D9] h-[60px] md:h-[70px]",
            className
          )}
        />

        {name === "password" && !state ? (
          <Eye
            size={30}
            className={`cursor-pointer ${name !== "password" && "hidden"}`}
            onClick={handleToggleShow}
          />
        ) : (
          <EyeOff
            size={30}
            className={`cursor-pointer ${name !== "password" && "hidden"}`}
            onClick={handleToggleShow}
          />
        )}
      </div>
      <p className="text-[#8C29E4]">{bottomAction}</p>
    </div>
  );
};

export default Input;
