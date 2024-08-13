"use client";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";

const ThemeLayout: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme ? JSON.parse(storedTheme) : "dark";
    setTheme(initialTheme);
    !initialTheme && localStorage.setItem("theme", JSON.stringify("dark"))
    document.documentElement.className = initialTheme; 
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="w-full h-screen bg-white flex items-center justify-center dark:bg-dark">
        <div className="loader"></div>
      </div>
    );

  return <main className={`${theme} duration-300`}>{children}</main>;
};

export default ThemeLayout;
