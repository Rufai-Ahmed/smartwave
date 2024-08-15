"use client"
import Button from "@/app/__components/Button";
import { iReview } from "@/interfaces";
import { reviewData } from "@/lib/data/data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {

  const router = useRouter()
  const goBack: () => void = () => router.back();

  return (
    <section className="w-full min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-120px)] justify-center text-black dark:text-white items-center flex">
      <div className="dark:bg-black bg-gray-200 md:w-[450px] p-5 rounded-md">
        <h3 className="text-[20px]">
          <center>Order Review</center>
        </h3>
        <div className="w-full flex mb-8 justify-between">
          <p>Amount (NGN)</p>
          <p>20,000</p>
        </div>

        <div className="space-y-4 mb-5">
          {reviewData.map((el: iReview, i: number) => (
            <div key={i} className="w-full flex justify-between">
              <p>{el.left}</p>
              <p>{el.right}</p>
            </div>
          ))}
        </div>
        <Link href={"review/success"} className="w-full mb-4 flex justify-center">
            <Button className="w-full md:h-[50px] md:text-[17px] md:w-full lg:w-full 2xl:w-full">
              {" "}
              Proceed
            </Button>
          </Link>
 
            <Button onClick={goBack} className="w-full md:h-[50px] md:text-[17px] md:w-full bg-gray-200 text-black dark:text-white dark:bg-black lg:w-full 2xl:w-full">
              {" "}
              Go Back
            </Button>
      </div>
    </section>
  );
};

export default Page;
