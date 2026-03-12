import { CarpetDiscount } from "@/components/carpettilespage/CarpetDiscount";
import { CarpetDiscountTwo } from "@/components/carpettilespage/CarpetDiscountTwo";
import HomeCarpet from "@/components/carpettilespage/HomeCarpet";
import HotelCarpet from "@/components/carpettilespage/HotelCarpet";
import LivingRoomCarpet from "@/components/carpettilespage/LivingRoomCarpet";
import MosqueCarpet from "@/components/carpettilespage/MosqueCarpet";
import WalltoWallCarpet from "@/components/carpettilespage/WalltoWallCarpet";
import { notFound } from "next/navigation";

type Props = {
  params: { type: string };
};
const page = ({ params }: Props) => {
  const type = params.type;

  if (type === "interlocking-carpet-tiles")
    return (
      <>
        <WalltoWallCarpet />
        <CarpetDiscountTwo />
        <CarpetDiscount />
      </>
    );
  if (type === "peel-and-stick-carpet-tiles")
    return (
      <>
        <HotelCarpet />
        <CarpetDiscountTwo />
        <CarpetDiscount />
      </>
    );
  if (type === "commercial-carpet-tiles")
    return (
      <>
        <HomeCarpet />
        <CarpetDiscountTwo />
        <CarpetDiscount />
      </>
    );
  if (type === "residential-carpet-tiles")
    return (
      <>
        <LivingRoomCarpet />
        <CarpetDiscountTwo />
        <CarpetDiscount />
      </>
    );
  if (type === "basement-carpet-tiles")
    return (
      <>
        <MosqueCarpet />
        <CarpetDiscountTwo />
        <CarpetDiscount />
      </>
    );

  return notFound();
};

export default page;
