import React from "react";
import { ShoppingFilled } from "@ant-design/icons";

export const RugsDiscount = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-gray-200/20">
      <div className="rounded-lg w-full max-w-4xl">
        <div className="flex flex-col items-center mb-6">
          <div className="text-[#14B1E7] text-4xl">
            <ShoppingFilled style={{ color: "#fa8c16", fontSize: "40px" }} />
          </div>
          <h1 className="text-black/70 font-bold text-xl text-center py-5 tracking-widest px-5">
            Buy Classic and Modern Rugs From us
          </h1>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-sm font-normal text-black/70 text-justify px-5">
            The rugs we offer are designed by the best interior designers in
            Dubai. Let First Choice General Trading LLC transform your Dubai
            space with elegance, comfort, and style. Start shopping now
          </h1>
        </div>
      </div>
    </div>
  );
};
