"use client";
import OfficeCarpet from "@/components/carpettilespage/OfficeCarpet";
import CarpetCategorySection from "@/components/carpettilespage/CarpetCategorySection";
import CarpetContentSection from "@/components/carpettilespage/CarpetContentSection";
import { CarpetDiscount } from "@/components/carpettilespage/CarpetDiscount";
import { CarpetWhyChooseUs } from "@/components/carpettilespage/CarpetWhyChooseUs";
import WalltoWallCarpet from "@/components/carpettilespage/WalltoWallCarpet";
import HomeCarpet from "@/components/carpettilespage/HomeCarpet";
import LivingRoomCarpet from "@/components/carpettilespage/LivingRoomCarpet";
import MosqueCarpet from "@/components/carpettilespage/MosqueCarpet";
import ResidentialCarpet from "@/components/carpettilespage/ResidentialCarpet";
import HotelCarpet from "@/components/carpettilespage/HotelCarpet";
import { CarpetTileStyles } from "@/components/carpettilespage/CarpetTitleStyle";
import { CarpetDiscountTwo } from "@/components/carpettilespage/CarpetDiscountTwo";

const page = () => {
  return (
    <div>
      <CarpetContentSection />
      <div className="flex flex-col justify-center items-center text-center text-2xl font-bold px-5">
        <h1 className="text-3xl font-bold mb-6 text-black/90 mt-20 text-justify">
          Carpet Tiles
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
      <CarpetTileStyles />
      <CarpetDiscountTwo />
      <CarpetDiscount />
    </div>
  );
};

export default page;
