import React from "react";
import { SiMarketo } from "react-icons/si";

const QuickAction = () => {
  return (
    <div className="col-span-3 xl:col-span-1 text-black dark:text-gray-200">
      <h3 className="text-[18px] font-bold">Quick Actions</h3>
      <section className="w-full mt-5 border rounded-[10px] p-6 grid justify-center items-center gap-7 grid-cols-2 md:grid-cols-3 md:grid-rows-2 border-gray-500 min-h-[270px]">
        {Array.from({ length: 6 }).map((el: unknown, i: number) => (
          <div
            key={i}
            className="space-y-2 col-span-1 flex flex-col items-center"
          >
            <div className="size-14 rounded-full flex items-center justify-center bg-gray-200 dark:bg-[#191919]">
              <SiMarketo size={20} />
            </div>
            <p>MarketPlace</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default QuickAction;
