import { Hand } from "lucide-react";
import React from "react";

const Homescreen = () => {
  return (
    <section className="w-full p-8">
      <div className="flex items-center justify-between">
        <div className="text-[18px]">
          <p>
            <b>Overview</b>
          </p>
          <p className="font-light">Winners Mike</p>
        </div>

        <div className="px-4 font-light py-2 bg-[#191919] flex items-center gap-3 rounded-md cursor-pointer">
          <Hand size={18} />

          <p>View in Light Mode</p>
        </div>
      </div>
    </section>
  );
};

export default Homescreen;
