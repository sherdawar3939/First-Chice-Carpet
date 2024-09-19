import React from "react";
import { ShoppingFilled } from "@ant-design/icons";

export const CurtainDiscount = () => {
  return (
    <div className="flex justify-center items-center py-8 bg-gray-200/20">
      <div className="rounded-lg w-full max-w-4xl">
        <div className="flex flex-col items-center mb-6">
          <div className="text-[#14B1E7] text-4xl">
            <ShoppingFilled style={{ color: "#fa8c16", fontSize: "40px" }} />
          </div>
          <h1 className="text-black/70 font-bold text-xl text-center py-5 tracking-widest">
            Order Exclusive Custom Made Curtains in Dubai
          </h1>
        </div>
        <div className="text-center mb-6">
          <h1 className="text-sm font-normal text-black/70">
            Whether you&apos;re upgrading your living room, office, or exploring
            smart, motorized solutions, First Choice General Trading LLC offers
            a wide selection of curtains to suit your needs. Enhance your home
            with our exquisite curtain collection and enjoy the perfect blend of
            style and functionality. Contact us today for more details!
          </h1>
        </div>
      </div>
    </div>
  );
};
