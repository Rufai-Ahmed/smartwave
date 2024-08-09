"use client";
import Sidebar from "@/app/__components/static/Sidebar";
import React, { FC, PropsWithChildren, useState } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<boolean>(false);

  const handleClick = () => setState(!state);

  return (
    <div className="flex w-full items-start justify-end">
      <Sidebar state={state} handleClick={handleClick} />

      <div className="w-full lg:w-[calc(100%-260px)] min-h-screen text-[#F2F2F2] bg-[#0C0C0C]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
