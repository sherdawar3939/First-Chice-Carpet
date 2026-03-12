import { CarpetDiscount } from "@/components/carpetpage/CarpetDiscount";
import HomeCarpet from "@/components/carpetpage/HomeCarpet";
import HotelCarpet from "@/components/carpetpage/HotelCarpet";
import LivingRoomCarpet from "@/components/carpetpage/LivingRoomCarpet";
import MosqueCarpet from "@/components/carpetpage/MosqueCarpet";
import OfficeCarpet from "@/components/carpetpage/OfficeCarpet";
import ResidentialCarpet from "@/components/carpetpage/ResidentialCarpet";
import WalltoWallCarpet from "@/components/carpetpage/WalltoWallCarpet";
import { notFound } from "next/navigation";

type Props = {
  params: { type: string };
};
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
        <OfficeCarpet />
        <CarpetDiscount />
      </>
    );
  if (type === "home-carpet")
    return (
      <>
        <HomeCarpet />
        <CarpetDiscount />
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
        <ResidentialCarpet />
        <CarpetDiscount />
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
