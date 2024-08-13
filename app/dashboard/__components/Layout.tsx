"use client";
import Sidebar from "@/app/__components/static/Sidebar";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";
import SideHeader from "./SideHeader";
import Heading from "./Heading";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    } else {
      localStorage.setItem("theme", JSON.stringify("dark"));
      setTheme("dark");
    }
    setLoading(false);

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme" && e.newValue) {
        setTheme(JSON.parse(e.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  if (loading)
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white dark:bg-dark">
        <div className="loader"></div>
      </div>
    );

  return (
    <div
      className={`flex w-full items-start duration-300 justify-end ${theme}`}
    >
      <Sidebar />

      <div className="w-full lg:w-[calc(100%-260px)] min-h-screen text-[#F2F2F2] bg-white dark:bg-[#0C0C0C]">
        <SideHeader theme={theme} setTheme={setTheme} />
        <Heading />
        <div className="px-8 pb-5">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
