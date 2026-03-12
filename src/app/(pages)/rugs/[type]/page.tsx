import { AreaRugstoAnchorYourSpace } from "@/components/rugspage/AreaRugstoAnchorYourSpace";
import { CustomRugs } from "@/components/rugspage/CustomRugs";
import { RoundRugsWithUniqueDesignElement } from "@/components/rugspage/RoundRugsWithUniqueDesignElement";
import { RugsDiscount } from "@/components/rugspage/RugsDiscount";
import { ShaggyRugs } from "@/components/rugspage/ShaggyRugs";
import { SisalRugsForNaturalEleganceandDurability } from "@/components/rugspage/SisalRugsForNaturalEleganceandDurability";
import { notFound } from "next/navigation";

type Props = {
  params: { type: string };
};
const page = ({ params }: Props) => {
  const type = params.type;

  if (type === "sisal-rugs")
    return (
      <>
        <SisalRugsForNaturalEleganceandDurability />
        <RugsDiscount />
      </>
    );
  if (type === "area-rugs")
    return (
      <>
        <AreaRugstoAnchorYourSpace />
        <RugsDiscount />
      </>
    );
  if (type === "round-rugs")
    return (
      <>
        <RoundRugsWithUniqueDesignElement />
        <RugsDiscount />
      </>
    );
  if (type === "shaggy-rugs")
    return (
      <>
        <ShaggyRugs />
        <RugsDiscount />
      </>
    );
  if (type === "custom-rugs")
    return (
      <>
        <CustomRugs />
        <RugsDiscount />
      </>
    );

  return notFound();
};

export default page;
