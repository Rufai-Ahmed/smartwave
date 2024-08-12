import Button from "@/app/__components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="items-start bg-white text-[#D9D9D9] dark:bg-dark grid grid-cols-2">
      <Image
        className="h-screen hidden lg:block w-full object-cover"
        src={"/assets/images/money_girl.jpg"}
        width={100}
        height={100}
        draggable={false}
        alt="Girl with cash"
        unoptimized
      />

      <div className="h-screen text-center col-span-2 lg:col-span-1 py-[10%] flex flex-col space-y-2 lg:space-y-0 justify-between items-center">
        <div className="flex flex-col space-y-5 md:space-y-0 items-center">
          <div className="flex items-center gap-3">
            <Image
              className="md:h-[73px] h-[40px] w-auto "
              src={"/assets/images/logo.png"}
              width={100}
              height={100}
              alt="Girl with cash"
              unoptimized
            />
            <p className="text-[30px] text-[#F2F2F2] md:text-[60px]">
              Smartwave
            </p>
          </div>

          <p className="text-[20px] md:text-[24px] w-[90%] md:w-auto text-center">
            Unlock your earning potential with Smartwave.
            <br className="hidden md:block" /> The Ultimate Earning Portal
          </p>
        </div>

        <Image
          className="lg:hidden w-full object-cover"
          src={"/assets/images/money_girl.jpg"}
          width={100}
          height={100}
          draggable={false}
          alt="Girl with cash"
          unoptimized
        />

        <div className="space-y-3 w-full flex flex-col items-center text-[20px] pb-2 md:pb-0 md:text-[24px]">
          <p>
            Don&apos;t have an account? <br className="md:hidden" />{" "}
            <Link href={"/register"} className="text-[#8C29E4]">
              Create an account
            </Link>{" "}
          </p>

          <p>Or</p>

          <Link href={"/login"} className="w-full flex justify-center">
            <Button className="text-[18px]">
              {" "}
              Sign in into an existing account
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default page;
