import React from "react";
import { ShoppingFilled } from "@ant-design/icons";

const DiscountShipping: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-gray-200/20">
      <div className="rounded-lg w-full max-w-4xl">
        <div className="flex flex-col items-center mb-6">
          <div className="text-[#14B1E7] text-4xl">
            <ShoppingFilled style={{ color: "#fa8c16", fontSize: "40px" }} />
          </div>
          <h1 className="text-black/70 font-bold text-xl text-center py-5 tracking-widest">
            Start Shopping with Maximum Discounts
          </h1>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-sm font-normal text-black/70">
            Explore our exclusive range of products and give your home or office
            a fresh, elegant look with First Choice General Trading LLC. Contact
            our interior consultants in Dubai for expert advice and start your
            journey to creating stunning interiors.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DiscountShipping;
