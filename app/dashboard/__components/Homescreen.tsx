import Button from "@/app/__components/Button";
import { EllipsisVertical, Hand, Plus, Upload } from "lucide-react";
import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GiGrowth } from "react-icons/gi";
import { RiCurrencyFill } from "react-icons/ri";
import { TbGrowth } from "react-icons/tb";
import QuickAction from "./QuickAction";
import BestSelling from "./BestSelling";

const Homescreen = () => {
  return (
    <section className="w-full">
      <div className="w-full grid text-white grid-cols-12 gap-5">
        <div className="min-h-[270px] bg-[#6E18BB] rounded-[20px] xl:col-span-4 col-span-12 p-5 flex flex-col justify-center overflow-hidden relative">
          <div className="absolute rounded-full size-96 scale-110 -left-24 bg-[#a567da]" />

          <div className="z-10 w-full h-full flex flex-col justify-between">
            <div className="size-10 rounded-xl border-white border flex items-center justify-center">
              <Plus size={18} />
            </div>

            <div className="capitalize -space-y-2">
              <p>
                <small>Your current savings</small>
              </p>
              <p className="text-[40px] text-white font-bold">
                <big>₦500,000</big>
              </p>
            </div>

            <Button className="w-full md:w-full lg:w-full xl:w-full 2xl:w-full h-auto py-2 bg-gradient-to-r from-[#6E18BB] to-[#912dea] md:h-auto border-[2px] gap-2 text-[16px]  md:text-[16px] border-[#ddb7ff]">
              <Upload size={20} />
              Withdraw
            </Button>
          </div>
        </div>
        <div className="min-h-[270px] grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 col-span-12 text-black dark:text-gray-200 xl:col-span-8 gap-5">
          {Array.from({ length: 6 }).map((el: unknown, i: number) => (
            <div
              key={i}
              className="border h-[100px] flex flex-col justify-between md:h-auto p-3 border-gray-500 rounded-[10px]"
            >
              <div className="w-full flex justify-between">
                <p className="font-light">Unknown Text</p>

                <EllipsisVertical size={16} />
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <RiCurrencyFill className="text-yellow-500 text-[18px]" />
                    <p className="font-bold">₦100,000</p>
                  </div>
                </div>

                <div className="flex items-center text-[15px] text-emerald-400 font-light ">
                  <GiGrowth className="" size={18} />
                  48%
                </div>
              </div>

              <p className="font-light">
                <small>Unknown Long Text</small>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid mt-5 items-end grid-cols-1 gap-5 lg:grid-cols-3">
        <QuickAction />
        <div className="col-span-3 xl:col-span-2 gap-4 items-end grid grid-cols-4 lg:grid-cols-2">
          <BestSelling
            className="xl:col-span-1 md:col-span-2 col-span-4"
            heading={true}
          />
          <BestSelling className="xl:col-span-1 md:col-span-2 col-span-4" />
        </div>
      </div>
    </section>
  );
};

export default Homescreen;
