"use client";
import React, { FC, PropsWithChildren, useEffect, useState } from "react";

const ThemeLayout: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("theme")!);
    // console.log("sacved", JSON.parse(localStorage.getItem("theme")!));
    if (stored) {
      setTheme(JSON.parse(localStorage.getItem("theme")!));
    }
    setLoading(true);
  }, []);
  console.log(theme);

  if (!loading)
    return (
      <div className="w-full h-screen bg-white flex items-center justify-center dark:bg-dark">
        <div className="loader"></div>
      </div>
    );

  return <main className={`${theme}`}>{children}</main>;
};

export default ThemeLayout;
