import { CurtainDiscount } from "@/components/curtainpage/CurtainDiscount";
import { LivingRoomCurtain } from "@/components/curtainpage/LivingRoomCurtain";
import { MasterRoomCurtain } from "@/components/curtainpage/MasterRoomCurtain";
import { MotorizedCurtain } from "@/components/curtainpage/MotorizedCurtain";
import { RomanBlinds } from "@/components/curtainpage/RomanBlinds";
import { SheerCurtain } from "@/components/curtainpage/SheerCurtain";
import { notFound } from "next/navigation";

type Props = {
  params: { type: string };
};
const page = ({ params }: Props) => {
  const type = params.type;

  if (type === "living-room-curtain")
    return (
      <>
        <LivingRoomCurtain />
        <CurtainDiscount />
      </>
    );
  if (type === "sheer-curtain")
    return (
      <>
        <SheerCurtain />
        <CurtainDiscount />
      </>
    );
  if (type === "master-room-curtain")
    return (
      <>
        <MasterRoomCurtain />
        <CurtainDiscount />
      </>
    );
  if (type === "motorized-curtain")
    return (
      <>
        <MotorizedCurtain />
        <CurtainDiscount />
      </>
    );
  if (type === "roller-blinds")
    return (
      <>
        <RomanBlinds />
        <CurtainDiscount />
      </>
    );

  return notFound();
};

export default page;
