"use client";
import React from "react";
import CategorySection from "@/components/homepageui/CategorySection";
import HeroSection from "@/components/homepageui/HeroSection";
import CarpetsProduct from "@/components/homepageui/CarpetsProduct";
import FAQ from "@/components/homepageui/FAQ";
import WhyChooseUs from "@/components/homepageui/WhyChooseUs";
import DiscountShipping from "@/components/homepageui/DiscountShipping";
import ContentSection from "@/components/homepageui/ContentSection";
import ContentSectionTwo from "@/components/homepageui/ContentSectionTwo";
import CurtainProduct from "@/components/homepageui/CurtainProduc";
import RugsProduct from "@/components/homepageui/RugsProduct";
import FlooringProduct from "@/components/homepageui/FlooringProduct";
import CarpetsTilesProduct from "@/components/homepageui/CarpetsTilesProduct";

const page = () => {
  return (
    <>
      <HeroSection />
      <ContentSectionTwo />
      <div className="container mx-auto p-8 text-center justify-center items-center">
        <h1 className="text-3xl font-bold mb-6 text-black/90">
          Appointy can serve almost any industry segment
        </h1>
        <h1 className="text-sm font-normal mb-6 text-black/80">
          Our appointment booking system is fit for all service-based local
          businesses, multi-location enterprises, franchises, and more.
        </h1>
        <CategorySection />
      </div>

      <ContentSection />
      <div className="text-center text-2xl font-bold my-4">
        <h1 className="text-3xl font-bold mb-6 text-black/90 mt-20">
          Our Exclusive Product Collection For Interior Design Dubai
        </h1>
        <CarpetsProduct />
        <CurtainProduct />
        <RugsProduct />
        <FlooringProduct />
        <CarpetsTilesProduct />
      </div>
      <WhyChooseUs />
      <DiscountShipping />
    </>
  );
};

export default page;
