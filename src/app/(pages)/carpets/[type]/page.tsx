import { SEO } from "@/app/seo";
import { CarpetDiscount } from "@/components/carpetpage/CarpetDiscount";
import HotelCarpet from "@/components/carpetpage/HotelCarpet";
import LivingRoomCarpet from "@/components/carpetpage/LivingRoomCarpet";
import MosqueCarpet from "@/components/carpetpage/MosqueCarpet";
import ResidentialCarpet from "@/components/carpetpage/ResidentialCarpet";
import WalltoWallCarpet from "@/components/carpetpage/WalltoWallCarpet";
import HomeCarpetContent from "@/components/HomeCarpetContent";
import OfficeCarpetContent from "@/components/OfficeCarpetContent";
import ResidentialCarpetContent from "@/components/ResidentialCarpetContent";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { type: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const type = params.type;
  const seoData =
    SEO.carpets.subcategories?.[type as keyof typeof SEO.carpets.subcategories];

  if (!seoData) return SEO.carpets;
  return seoData;
}

const page = ({ params }: Props) => {
  const type = params.type;

  if (type === "wall-to-wall-carpet")
    return (
      <>
        <WalltoWallCarpet />
        <CarpetDiscount />
      </>
    );
  if (type === "office-carpet")
    return (
      <>
        <OfficeCarpetContent></OfficeCarpetContent>
      </>
    );
  if (type === "home-carpet")
    return (
      <>
        <HomeCarpetContent></HomeCarpetContent>
      </>
    );
  if (type === "living-room-carpet")
    return (
      <>
        <LivingRoomCarpet />
        <CarpetDiscount />
      </>
    );
  if (type === "mosque-carpet")
    return (
      <>
        <MosqueCarpet />
        <CarpetDiscount />
      </>
    );
  if (type === "residential-carpet")
    return (
      <>
        <ResidentialCarpetContent></ResidentialCarpetContent>
      </>
    );
  if (type === "hotel-carpet")
    return (
      <>
        <HotelCarpet />
        <CarpetDiscount />
      </>
    );

  return notFound();
};

export default page;
