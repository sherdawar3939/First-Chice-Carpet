"use client";
import OfficeCarpet from "@/components/carpetpage/OfficeCarpet";
import CarpetCategorySection from "@/components/carpetpage/CarpetCategorySection";
import CarpetContentSection from "@/components/carpetpage/CarpetContentSection";
import { CarpetDiscount } from "@/components/carpetpage/CarpetDiscount";
import { CarpetWhyChooseUs } from "@/components/carpetpage/CarpetWhyChooseUs";
import WalltoWallCarpet from "@/components/carpetpage/WalltoWallCarpet";
import HomeCarpet from "@/components/carpetpage/HomeCarpet";
import LivingRoomCarpet from "@/components/carpetpage/LivingRoomCarpet";
import MosqueCarpet from "@/components/carpetpage/MosqueCarpet";
import ResidentialCarpet from "@/components/carpetpage/ResidentialCarpet";
import HotelCarpet from "@/components/carpetpage/HotelCarpet";

const page = () => {
  return (
    <div>
      <CarpetContentSection />
      <div className="flex flex-col justify-center items-center text-center text-2xl font-bold px-5">
        <h1 className="text-3xl font-bold mb-6 text-black/90 mt-20 text-center">
          We Sell a Vast and Diverse Custom Carpets For Interior Design in
          Dubai.
        </h1>
      </div>

      <WalltoWallCarpet />
      <OfficeCarpet />
      <HomeCarpet />
      <LivingRoomCarpet />
      <MosqueCarpet />
      <ResidentialCarpet />
      <HotelCarpet />
      <CarpetWhyChooseUs />
      <CarpetDiscount />
    </div>
  );
};

export default page;
