import React from "react";
import { ShoppingFilled } from "@ant-design/icons";

export const FlooringDiscount = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-gray-200/20">
      <div className="rounded-lg w-full max-w-4xl">
        <div className="flex flex-col items-center mb-6">
          <div className="text-[#14B1E7] text-4xl">
            <ShoppingFilled style={{ color: "#fa8c16", fontSize: "40px" }} />
          </div>
          <h1 className="text-black/70 font-bold text-xl text-center py-5 tracking-widest">
            Get No.1 Flooring Dubai
          </h1>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-sm font-normal text-black/70">
            With our trendy flooring options, you can transform your space with
            our interior design company in Dubai. Contact us today to explore
            our selection and discover how we can help you achieve the perfect
            look for your interior design project in Dubai
          </h1>
        </div>
      </div>
    </div>
  );
};
