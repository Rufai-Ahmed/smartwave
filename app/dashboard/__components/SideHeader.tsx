"use client";
import Sidebar from "@/app/__components/static/Sidebar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { iSidebar } from "@/interfaces";
import { sidebarData } from "@/lib/data/data";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const SideHeader = () => {
  const path = usePathname();
  const isActive: (name: string) => boolean = (name: string) => name === path;

  return (
    <header className="h-[60px] md:h-[90px] px-8 w-full border-b-[2px] border-[rgb(35,35,35)] flex items-center justify-between">
      <div className="lg:hidden flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Menu size={25} className="lg:hidden" />
          </SheetTrigger>
          <SheetContent
            className="text-[#c0bcbc] overflow-y-auto"
            side={"left"}
          >
            <SheetHeader>
              <SheetTitle>Smartwave</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            <div className="space-y-3 w-full">
              {sidebarData.map((el: iSidebar, i: number) => (
                <Link
                  href={el.path!}
                  key={i}
                  className={`w-full  relative flex items-center font-light pl-8 text-[15px] cursor-pointer duration-300 gap-4 h-[50px] ${
                    isActive(el.path!)
                      ? "bg-[#6E18BB] text-white"
                      : "text-[#B5B5B5] hover:text-white hover:bg-[#6E18BB]"
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
          </SheetContent>
        </Sheet>
      </div>

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
