"use client";
import { iSidebar } from "@/interfaces";
import { sidebarData } from "@/lib/data/data";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const Sidebar: FC<iSidebar> = () => {
  const [currentTheme, setCurrentTheme] = useState<string>("light");

  useEffect(() => {
    if (localStorage.getItem("theme"))
      setCurrentTheme(JSON.parse(localStorage.getItem("theme")!));
  }, []);

  const path = usePathname();

  const isActive: (name: string) => boolean = (name: string) => {
    const normalizedPath = path.replace("/dashboard", "").split("/")[1];
    const normalizedName = name.replace("/dashboard", "").split("/")[1];

    return normalizedPath === normalizedName;
  };

  return (
    <aside
      className={`w-[260px] lg:block border-r dark:border-r-0 fixed h-screen duration-300 overflow-y-auto pb-5 left-0 hidden bg-white text-gray-800 dark:bg-[#050505]`}
    >
      <div className="w-full font-bold dark:font-normal dark:text-white h-[100px] flex items-center justify-center text-[24px] mb-4">
        Smartwave
      </div>

      <div className="space-y-3">
        {sidebarData.map((el: iSidebar, i: number) => (
          <Link
            href={el.path!}
            key={i}
            className={`w-full  relative flex items-center font-light pl-8 text-[15px] cursor-pointer duration-300 gap-4 h-[50px] ${
              isActive(el.path!)
                ? "bg-[#6E18BB] text-white"
                : "dark:text-[#B5B5B5] hover:text-white hover:bg-[#6E18BB]"
            }`}
          >
            {isActive(el.path!) && (
              <div className="absolute w-2 rounded-r-lg bg-[#F29F05] h-full left-0" />
            )}
            {el.icon} <p className="capitalize">{el.name}</p>
            {el.drop && <FaAngleDown size={15} />}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
