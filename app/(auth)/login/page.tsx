"use client";
import Button from "@/app/__components/Button";
import Input from "@/app/__components/Input";
import { iInput } from "@/interfaces";
import { loginInput } from "@/lib/data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [state, setState] = useState<string>("Affliate");
  const handleCategoryToggle = (category: string) => setState(category);

  return (
    <main className="items-start text-[24px] bg-white text-[#D9D9D9] dark:bg-dark grid grid-cols-2">
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
          <div className="space-y- text-start">
            <h2 className="font-bold text-[30px] text-[#F2F2F2]">Login</h2>

            <p>Log in to your account to continue</p>
          </div>

          <div className="rounded-[8px] w-full p-2 bg-[#191919] items-center grid grid-cols-2">
            {["Affliate", "Vendor"].map((el: string, i: number) => (
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

          <div className="space-y-7 text-start">
            {loginInput.map((el: iInput, i: number) => (
              <Input {...el} key={i} />
            ))}
          </div>

          <div className="space-y-3 w-full flex flex-col items-center text-[24px]">
            <Link href={"/login"} className="w-full mb-4 flex justify-center">
              <Button className="w-full md:w-full lg:w-full 2xl:w-full">
                {" "}
                Login
              </Button>
            </Link>
            <p>
              <Link href={"/register"}>
                Don&apos;t have an account?
                <br className="md:hidden" />
                <span className="text-[#8C29E4]">Create an account</span>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
