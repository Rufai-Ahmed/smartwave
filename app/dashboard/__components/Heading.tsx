"use client";
import { iHeading } from "@/interfaces";
import { headingData } from "@/lib/data/data";
import { usePathname } from "next/navigation";
import React from "react";

const matchPath = (path: string, headingPath: string) => {
  const normalizedPath = path.replace(/\/\d+$/, "0");
  const normalizedHeadingPath = headingPath.replace(/\/\d+$/, "0");

  return normalizedPath === normalizedHeadingPath;
};

const Heading = () => {
  const path: string = usePathname();

  const mainData: iHeading | undefined = headingData.find((el: iHeading) => {
    return matchPath(path, el?.path!);
  });

  return (
    <div>
      {mainData && (
        <div className="flex p-8 items-center justify-between">
          <div className="text-[18px]">
            <p>
              <b>{mainData?.b}</b>
            </p>
            <p className="font-light">{mainData?.p}</p>
          </div>

          {mainData?.rightComp}
        </div>
      )}
    </div>
  );
};

export default Heading;
