"use client";
import { iInput } from "@/interfaces";
import { Eye, EyeOff } from "lucide-react";
import React, { FC, useState } from "react";

const Input: FC<iInput> = ({
  label,
  name,
  placeholder,
  bottomAction,
  type,
}) => {
  const [state, setState] = useState<boolean>(true);
  const handleToggleShow = () => setState(!state);

  return (
    <div className="space-y-2">
      <label>{label}</label>
      <div className="relative flex items-center w-full border-[2px] rounded-[8px] border-[#232323] bg-[#191919] font-light pr-3 gap-3">
        <input
          type={name === "password" && !state ? "text" : type}
          name={name}
          placeholder={placeholder}
          className="bg-transparent flex-grow outline-none pl-5 placeholder:text-[#D9D9D9] h-[60px] md:h-[90px]"
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
