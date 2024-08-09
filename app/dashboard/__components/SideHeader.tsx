import { Menu, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const SideHeader = () => {
  return (
    <header className="h-[90px] px-8 w-full border-b-[2px] border-[#232323] flex items-center justify-between">
      <Menu size={20} className="lg:hidden" />

      <div className="sm:flex items-center gap-3 px-3 h-[45px] hidden  md:w-[400px] bg-[#191919] rounded-lg">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search..."
          className=" flex-[0.2] md:flex-grow h-full bg-transparent placeholder:text- outline-none"
          name=""
          id=""
        />
      </div>

      <div className="flex items-center gap-2 md:gap-5">
        <Image
          src={"/assets/images/avatar.png"}
          width={100}
          height={100}
          unoptimized
          alt="User's avatar"
          className="size-10 md:size-14 object-center object-cover rounded-full border-[2px] border-[#9969C2]"
        />

        <div className="space-y- hidden md:block">
          <p>
            <b>Mike Dean</b>
          </p>
          <p className="font-light">Vendor</p>
        </div>

        <FaAngleDown size={18} />
      </div>
    </header>
  );
};

export default SideHeader;
