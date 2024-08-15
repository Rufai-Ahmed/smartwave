import Button from "@/app/__components/Button";
import { benefitsData } from "@/lib/data/data";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import React from "react";

const page = () => {
  return (
    <main className="items-start bg-white text-[#D9D9D9] dark:bg-dark grid grid-cols-2">
      <div className="col-span-1">
        <Image
          className="h-screen hidden fixed w-1/2 lg:block object-cover"
          src={"/assets/images/money_girl.jpg"}
          width={100}
          height={100}
          alt="Girl with cash"
          unoptimized
        />
      </div>

      <div className="min-h-screen w-full text-center col-span-2 lg:col-span-1 flex items-center justify-center">
        <div className="space-y-8 flex flex-col justify-center items-center min-h-screen w-[90%]">
          <div className="w-full p-5 bg-gray-200 text-black dark:text-white dark:bg-[#191919] h-[70%] rounded-[8px]">
            <div className="w-full text-[20px] py-4 bg-gradient-to-r from-[#892DFC] text-white border-[2px] rounded-[10px] to-[#A668F4] text-center">
              <p>
                A sign up subscription is required to complete registration.
              </p>
              <h1 className="text-[64px] font-bold">N10,000</h1>
            </div>

            <p className="text-[30px] text-start my-[30px]">
              <b>Benefits of joining Smartwave Affiliates</b>
            </p>

            <div className="space-y-2 w-full">
              {benefitsData.map((el: string, i: number) => (
                <div key={i} className="flex items-center gap-5">
                  <BsStarFill size={20} color="#F29F05" />

                  <p className="text-[19px] text-start dark:text-[#F2F2F2]"> {el}</p>
                </div>
              ))}
            </div>
          </div>

          <Button className="w-full md:w-full lg:w-full 2xl:w-full md:text-[20px] md:h-[50px]">
            Continue to Pay
          </Button>
        </div>
      </div>
    </main>
  );
};

export default page;
