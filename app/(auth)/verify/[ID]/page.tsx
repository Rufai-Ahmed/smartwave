"use client";
import Button from "@/app/__components/Button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
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
        alt="Girl with cash"
        unoptimized
      />

      <div className="min-h-screen text-center col-span-2 lg:col-span-1 py-[5%] md:py-[10%] flex flex-col justify-between items-center">
        <div className="">
          <p className="text-[30px] text-[#F2F2F2] md:text-[30px]">
            Verify Your Account
          </p>
        </div>

        <div className="gap-y-7 text-center flex flex-col items-center">
          <p>A 6 digit-code has been sent to your email for verification</p>

          <InputOTP pattern={REGEXP_ONLY_DIGITS_AND_CHARS} maxLength={6}>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />

            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTP>
        </div>

        <div className="space-y-7 w-full flex flex-col items-center text-[24px]">
          <Link href={"/login"} className="w-full flex justify-center">
            <Button className="h-[66px]">Verify</Button>
          </Link>

          <p className="leading-[1]">
            I didn&apos;t receive email. <br className="md:hidden" />
            <span className="text-[#8C29E4] text-[20px]">Resend email</span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
