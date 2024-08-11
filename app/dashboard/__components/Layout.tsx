"use client";
import Sidebar from "@/app/__components/static/Sidebar";
import React, { FC, PropsWithChildren } from "react";
import SideHeader from "./SideHeader";
import Heading from "./Heading";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-full items-start justify-end">
      <Sidebar />

      <div className="w-full lg:w-[calc(100%-260px)] min-h-screen text-[#F2F2F2] bg-[#0C0C0C]">
        <SideHeader />
        <Heading />
        <div className="px-8 pb-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
