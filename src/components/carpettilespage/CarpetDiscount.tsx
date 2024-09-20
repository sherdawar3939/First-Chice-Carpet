import React from "react";
import { ShoppingFilled } from "@ant-design/icons";

export const CarpetDiscount = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-gray-200/20">
      <div className="rounded-lg w-full max-w-4xl">
        <div className="flex flex-col items-center mb-6">
          <div className="text-[#14B1E7] text-4xl">
            <ShoppingFilled style={{ color: "#fa8c16", fontSize: "40px" }} />
          </div>
          <h1 className="text-black/70 font-bold text-xl text-center py-5 tracking-widest">
            Why Buy Carpet Tiles in Dubai?
          </h1>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-sm font-normal text-black/70 text-justify px-5">
            Dubai is home to a wide range of carpet tile suppliers, offering
            both local and international brands. Shopping for carpet tiles in
            Dubai means access to premium materials, expert installation
            services, and competitive prices. Whether you&apos;re looking for
            high-end, luxurious options or affordable, budget-friendly
            solutions, Dubai&apos;s carpet tile market has something to suit
            every need.
          </h1>
        </div>
      </div>
    </div>
  );
};
