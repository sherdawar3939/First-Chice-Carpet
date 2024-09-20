"use client";
import { AreaRugstoAnchorYourSpace } from "@/components/rugspage/AreaRugstoAnchorYourSpace";
import { CustomRugs } from "@/components/rugspage/CustomRugs";
import { RoundRugsWithUniqueDesignElement } from "@/components/rugspage/RoundRugsWithUniqueDesignElement";
import RugsContentSection from "@/components/rugspage/RugsContentSection";
import { RugsDiscount } from "@/components/rugspage/RugsDiscount";
import { RugsWhyChooseUs } from "@/components/rugspage/RugsWhyChooseUs";
import { ShaggyRugs } from "@/components/rugspage/ShaggyRugs";
import { SisalRugsForNaturalEleganceandDurability } from "@/components/rugspage/SisalRugsForNaturalEleganceandDurability";
import React from "react";

const page = () => {
  return (
    <div>
      <RugsContentSection />
      <div className="flex flex-col justify-center items-center text-center text-2xl font-bold px-5">
        <h1 className="text-3xl font-bold mb-6 text-black/90 mt-20 text-justify">
          Experience Style and Functionality With Top-quality Rugs For Luxury
          Interior Design Dubai
        </h1>
      </div>

      <SisalRugsForNaturalEleganceandDurability />
      <AreaRugstoAnchorYourSpace />
      <RoundRugsWithUniqueDesignElement />
      <ShaggyRugs />
      <CustomRugs />
      <RugsWhyChooseUs />
      <RugsDiscount />
    </div>
  );
};

export default page;
