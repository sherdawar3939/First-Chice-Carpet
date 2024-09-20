import React from "react";
import { ShoppingFilled, BgColorsOutlined } from "@ant-design/icons";

export const CarpetDiscountTwo = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-gray-200/20">
      <div className="rounded-lg w-full max-w-4xl">
        <div className="flex flex-col items-center mb-6">
          <div className="text-[#14B1E7] text-4xl">
            <BgColorsOutlined style={{ color: "#fa8c16", fontSize: "40px" }} />
          </div>
          <h1 className="text-black/70 font-bold text-xl text-center py-5 tracking-widest">
            Sustainability and Environmental Impact
          </h1>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-sm font-normal text-black/70">
            Carpet tiles are an eco-friendly flooring option, particularly when
            sourced from manufacturers that use recycled materials. Many brands
            offer tiles made from sustainable fibers, contributing to reducing
            waste. Additionally, the modular design of carpet tiles results in
            less wastage during installation compared to traditional wall-towall
            carpeting.
          </h1>
        </div>
      </div>
    </div>
  );
};
