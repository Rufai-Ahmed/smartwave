"use client";
import { iProduct } from "@/interfaces";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import React from "react";
import { items } from "../page";
import Image from "next/image";
import { Star } from "lucide-react";
import { BsStarFill } from "react-icons/bs";
import Button from "@/app/__components/Button";

const Page = () => {
  const { id }: Params = useParams();
  const product: iProduct = items![+id];

  return (
    <section className="grid font-light grid-cols-2 gap-6 h-full">
      <Image
        src={product?.img!}
        width={100}
        height={100}
        unoptimized
        alt="Product image"
        className="col-span-2 md:col-span-1 w-full h-auto"
      />

      <div className="w-full col-span-2 md:col-span-1 justify-between space-y-3 xl:space-y-0 flex flex-col">
        <p className="text-[18px]">
          Name: <span className="font-medium text-white">{product?.name}</span>
        </p>

        <p className="text-[18px]">
          Description:{" "}
          <span className="font-medium text-white">{product?.desc}</span>
        </p>

        <p className="text-[18px]">
          Price:{" "}
          <span className="font-medium text-white">{product?.price}</span>
        </p>
        <p className="text-[18px]">
          Commission on Payment:{" "}
          <span className="font-medium text-white">{product?.price}</span>
        </p>

        <p className="text-[18px] flex gap-2">
          Review:{" "}
          <span className="font-medium text-white flex items-center gap-1">
            {Array.from({ length: 5 }).map((el: unknown, i: number) => (
              <BsStarFill
                key={i}
                className={`text-[17px] ${
                  product?.star! >= i + 1 ? "text-yellow-400" : "text-[#191919]"
                }`}
              />
            ))}
          </span>
        </p>

        <div className="grid gap-2 grid-cols-2">
          <Button className=" text-[14px] md:text-[14px] h-auto md:h-auto w-full 2xl:w-full md:w-full">
            Lorem, ipsum.
          </Button>
          <Button className="bg-transparent text-[14px] md:text-[15px] h-auto hover:bg-zinc-950 duration-300 md:h-auto w-full 2xl:w-full md:w-full">
            Lorem, ipsum.
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Page;
