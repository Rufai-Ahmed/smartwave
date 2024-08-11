"use client";
import { iHeading } from "@/interfaces";
import { headingData } from "@/lib/data/data";
import { Hand } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const Heading = () => {
  const path: string = usePathname();

  const mainData: iHeading | undefined = headingData.find(
    (el) => el.path === path
  );

  return (
    <div className="flex p-8 items-center justify-between">
      <div className="text-[18px]">
        <p>
          <b>{mainData?.b}</b>
        </p>
        <p className="font-light">{mainData?.p}</p>
      </div>

      {mainData?.rightComp}
    </div>
  );
};

export default Heading;
