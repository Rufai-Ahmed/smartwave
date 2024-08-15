import Button from "@/app/__components/Button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <main className="items-start bg-white text-black dark:text-[#D9D9D9] dark:bg-dark grid grid-cols-2">
      <div className="col-span-1">
        <Image
          className="h-screen hidden fixed w-1/2 lg:block object-cover"
          src={"/assets/images/money_girl.jpg"}
          width={100}
          draggable={false}
          height={100}
          alt="Girl with cash"
          unoptimized
        />
      </div>

      <div className="min-h-screen w-full text-center col-span-2 lg:col-span-1 flex items-center justify-center">
        <div className="flex flex-col justify-center items-center min-h-screen w-[90%]">
          <div className="w-[300px] md:w-[450px] scale-75 md:scale-90 dark:text-[#F2F2F2] bg-gray-300 md:dark:bg-[#191919] h-[600px] justify-center items-center flex-col flex rounded-[8px]">
            <div className="min-w-[300px] bg-gray-200 dark:bg-[#050505] rounded-t-[20px] py-[40px] min-h-[300px] relative flex flex-col items-center justify-center space-y-20 text-[64px]">
              <div className="space-y-2 flex flex-col items-center">
                <div className="rounded-full size-[150px] flex items-center justify-center bg-gray-100 dark:bg-[#191919]">
                  🎉
                </div>

                <p className="text-[25px]">Successful.</p>
                <p className="text-[22px] font-light">
                  <small>Transaction is complete</small>
                </p>
              </div>

              <Link href={"/dashboard"} className="w-full flex justify-center">
                <Button className="w-[80%] md:w-[calc(100%-40px)] lg:w-[calc(100%-40px)] 2xl:w-[calc(100%-40px)] md:text-[20px] md:h-[50px]">
                  Go to dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
