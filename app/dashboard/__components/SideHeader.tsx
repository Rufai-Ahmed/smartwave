"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { iDropdown, iSidebar, SideHeaderProps } from "@/interfaces";
import { dropData, sidebarData } from "@/lib/data/data";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Menu, Moon, Search, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const SideHeader: React.FC<SideHeaderProps> = ({ theme, setTheme }) => {
  const path = usePathname();
  const isActive: (name: string) => boolean = (name: string) => name === path;

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <header className="h-[60px] sticky top-0 bg-white z-30 dark:bg-[#0C0C0C] md:h-[90px] px-8 w-full border-b-[1px] dark:border-b-[2px] dark:border-[rgb(35,35,35)] border-gray-500 flex items-center justify-between">
      <div className="lg:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Menu
              size={25}
              className="lg:hidden text-black dark:text-gray-200"
            />
          </SheetTrigger>
          <SheetContent
            className="text-[#c0bcbc] overflow-y-auto"
            side={"left"}
          >
            <SheetHeader>
              <SheetTitle>Smartwave</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            <SheetFooter className="space-y-3 flex-col flex  w-full">
              {sidebarData.reverse().map((el: iSidebar, i: number) => (
                <SheetClose key={i} className="w-full" asChild>
                  <Link
                    href={el.path!}
                    className={`w-full  relative flex items-center font-light pl-8 text-[15px] cursor-pointer duration-300 gap-4 h-[50px] ${
                      isActive(el.path!)
                        ? "bg-[#6E18BB] text-white"
                        : "dark:text-[#B5B5B5] text-black hover:text-white hover:bg-[#6E18BB]"
                    }`}
                  >
                    {isActive(el.path!) && (
                      <div className="absolute w-2 rounded-r-lg bg-[#F29F05] h-full left-0" />
                    )}
                    {el.icon} <p className="capitalize">{el.name}</p>
                    {el.drop && <FaAngleDown size={15} />}
                  </Link>
                </SheetClose>
              ))}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="sm:flex items-center gap-3 px-3 h-[45px] hidden  md:w-[400px] bg-gray-200 dark:bg-[#191919] text-black dark:text-gray-300 rounded-lg">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search..."
          className=" flex-[0.2] md:flex-grow h-full bg-transparent placeholder:text- outline-none"
          name=""
          id=""
        />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center z-50 gap-2 cursor-pointer md:gap-5">
            <Image
              src={"/assets/images/avatar.png"}
              width={100}
              height={100}
              unoptimized
              alt="User's avatar"
              className="size-10 md:size-11 object-center object-cover rounded-full border-[2px] border-[#9969C2]"
            />

            <div className="dark:text-gray-300 text-black text-[14px] hidden md:block">
              <p>
                <b>Mike Dean</b>
              </p>
              <p className="font-light">Vendor</p>
            </div>

            <FaAngleDown className="text-black dark:text-gray-200" size={18} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 p-2 rounded-[10px] z-20 border bg-gray-200 text-black dark:text-white dark:border-none mt-2 border-gray-400 dark:bg-[#191919]">
          <DropdownMenuGroup>
            {dropData.map((el: iDropdown, i: number) => (
              <DropdownMenuItem
                key={i}
                className="flex items-center py-2 px-2 cursor-pointer text-[14px] font-light hover:bg-[#6E18BB]  rounded-[10px] duration-300 gap-3"
              >
                {el.icon}
                {el.label}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem
              onClick={changeTheme}
              className="flex items-center py-2 px-2 cursor-pointer text-[14px] font-light hover:bg-[#6E18BB]  rounded-[10px] duration-300 gap-3"
            >
              {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
              Switch Mode
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default SideHeader;
