"use client";
import { CurtainCategorySection } from "@/components/curtainpage/CurtainCategorySection";
import { CurtainContentSection } from "@/components/curtainpage/CurtainContentSection";
import { CurtainDiscount } from "@/components/curtainpage/CurtainDiscount";
import { CurtainWhyChooseUs } from "@/components/curtainpage/CurtainWhyChooseUs";
import { LivingRoomCurtain } from "@/components/curtainpage/LivingRoomCurtain";
import { MasterRoomCurtain } from "@/components/curtainpage/MasterRoomCurtain";
import { MotorizedCurtain } from "@/components/curtainpage/MotorizedCurtain";
import { RomanBlinds } from "@/components/curtainpage/RomanBlinds";
import { SheerCurtain } from "@/components/curtainpage/SheerCurtain";
import React from "react";

const page = () => {
  return (
    <div>
      <CurtainContentSection />
      <div className="flex flex-col justify-center items-center text-center text-2xl font-bold px-5">
        <h1 className="text-3xl font-bold mb-6 text-black/90 mt-20 text-center">
          Discover the Best Curtains in Dubai
        </h1>
      </div>

      <LivingRoomCurtain />
      <SheerCurtain />
      <MasterRoomCurtain />
      <MotorizedCurtain />
      <RomanBlinds />
      <CurtainWhyChooseUs />
      <CurtainDiscount />
    </div>
  );
};

export default page;
