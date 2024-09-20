"use client";
import FlooringContentSection from "@/components/flooringpage/FlooringContentSection";
import { FlooringDiscount } from "@/components/flooringpage/FlooringDiscount";
import { FlooringWhyChooseUs } from "@/components/flooringpage/FlooringWhyChooseUs";
import { LVTFlooring } from "@/components/flooringpage/LVTFlooring";
import { ParquetFlooring } from "@/components/flooringpage/ParquetFlooring";
import { VinylFlooring } from "@/components/flooringpage/VinylFlooring";
import React from "react";

const page = () => {
  return (
    <div>
      <FlooringContentSection />

      <div className="flex flex-col justify-center items-center text-center text-2xl font-bold px-5">
        <h1 className="text-3xl font-bold mb-6 text-black/90 mt-20 text-center">
          We are the Best Supplier of Flooring Materials
        </h1>
      </div>
      <VinylFlooring />
      <ParquetFlooring />
      <LVTFlooring />
      <FlooringWhyChooseUs />
      <FlooringDiscount />
    </div>
  );
};

export default page;
