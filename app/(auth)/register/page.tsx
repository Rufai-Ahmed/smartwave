"use client";
import Button from "@/app/__components/Button";
import Input from "@/app/__components/Input";
import { iInput } from "@/interfaces";
import { registerInput } from "@/lib/data/data";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [state, setState] = useState<string>("Affiliate");
  const handleCategoryToggle = (category: string) => setState(category);

  return (
    <main className="items-start text-[24px] bg-white  dark:bg-dark grid grid-cols-2">
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

      <div className="flex flex-col items-center w-[100%] col-span-2 lg:col-span-1 py-[10%] min-h-screen text-center ">
        <div className="w-[90%] flex-col space-y-[4%] items-center">
          <div className="text-[#D9D9D9] text-start">
            <h2 className="font-bold text-[30px] text-[#F2F2F2]">
              Create an account
            </h2>

            <p>Fill in these details to get started</p>
          </div>

          <div className="rounded-[8px] w-full p-2 bg-[#191919] items-center grid grid-cols-2">
            {["Affiliate", "Vendor"].map((el: string, i: number) => (
              <div
                onClick={() => handleCategoryToggle(el)}
                className={`${
                  el === state
                    ? "bg-[#F2F2F2] text-[#191919] py-2 rounded-[6px]"
                    : "text-white"
                }  cursor-pointer`}
                key={i}
              >
                {el}
              </div>
            ))}
          </div>

          <div className="space-y-7 text-[#D9D9D9] text-start">
            {registerInput.map((el: iInput, i: number) => (
              <Input {...el} key={i} />
            ))}
            <div className="flex items-start mt-4 text-[#B5B5B5] font-light gap-x-3">
              <input
                type="checkbox"
                name="policy"
                className="accent-[#8C29E4] mt-3 p-4 w-[40px]"
              />

              <p>
                By signing up, you agree to our{" "}
                <span className="font-bold text-white">
                  Terms and Conditions
                </span>{" "}
                and <span className="font-bold text-white">Privacy Policy</span>
                . Please read them carefully.
              </p>
            </div>
          </div>

          <div className="space-y-3 w-full flex flex-col items-center text-[#D9D9D9] text-[24px]">
            <Link href={"/login"} className="w-full flex justify-center">
              <Button className="w-full md:w-full lg:w-full 2xl:w-full">
                {" "}
                Create Account
              </Button>
            </Link>
            <p>
              Already have an account?{" "}
              <Link href={"/login"} className="text-[#8C29E4]">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
