"use client";
import Button from "@/app/__components/Button";
import Input from "@/app/__components/Input";
import { iInput } from "@/interfaces";
import { buyInput } from "@/lib/data/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";

const Page = () => {
  const router = useRouter();
  const goBack = () => router.back();
  return (
    <section>
      <div className="flex py-5 items-center gap-3">
        <div
          onClick={goBack}
          className="dark:bg-[#191919] bg-gray-200 text-black dark:text-white rounded-md flex items-center p-4 cursor-pointer justify-center"
        >
          <FaAngleLeft size={18} />
        </div>

        <div className="text-[18px] text-black dark:text-gray-100">
          <p>
            <b>Order Details</b>
          </p>
          <p className="font-light">Complete the form to proceed </p>
        </div>
      </div>

      <form className="md:w-[450px] bg-gray-100 dark:bg-black p-4 rounded-md">
        <div className="space-y-7 text-start">
          {buyInput.map((el: iInput, i: number) => (
            <Input className="h-[40px] md:h-[50px]" {...el} key={i} />
          ))}
          <Link href={"buy/review"} className="w-full mb-4 flex justify-center">
            <Button className="w-full md:h-[50px] md:text-[17px] md:w-full lg:w-full 2xl:w-full">
              {" "}
              Proceed
            </Button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Page;
