import Button from "@/app/__components/Button";
import Image from "next/image";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

const BestSelling: FC<{ heading?: boolean; className?: string }> = ({
  heading,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "col-span-4 sm:col-span-2 lg:col-span-1 cursor-pointer xl:col-span-1",
        className
      )}
      {...props}
    >
      <h3 className="text-[18px] font-bold mb-5">
        {heading && "Best Selling"}
      </h3>
      <section
        className={`w-full border rounded-[10px] p-3 flex flex-col justify-between border-gray-500 min-h-[270px] `}
      >
        <div className="flex text-[14px] items-center gap-3">
          <Image
            src={"/assets/images/diff_winter.jpg"}
            width={100}
            height={100}
            alt="Book called Diff winter"
            className="w-[80px] rounded-md h-auto"
          />

          <div className="h-full flex flex-col justify-between">
            <div>
              <p>
                <b>Unknown Bold Long</b>
              </p>
              <p>Unknown Short</p>
            </div>

            <div>Lorem ipsum dolor sit.</div>
          </div>
        </div>

        <div className="space-y-1 text-[14px]">
          <p>
            <b>Lorem, ipsum.</b>
          </p>

          <p className="font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            expedita laudantium officiis?
          </p>

          <p className="text-orange-500">Lorem ipsum dolor sit.</p>
        </div>

        <div className="grid gap-2 grid-cols-2">
          <Button className=" text-[14px] md:text-[14px] h-auto md:h-auto w-full 2xl:w-full md:w-full">
            Lorem, ipsum.
          </Button>
          <Button className="bg-transparent text-[14px] md:text-[15px] h-auto md:h-auto w-full 2xl:w-full md:w-full">
            Lorem, ipsum.
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BestSelling;
