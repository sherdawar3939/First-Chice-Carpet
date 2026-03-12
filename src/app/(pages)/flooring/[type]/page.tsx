import { FlooringDiscount } from "@/components/flooringpage/FlooringDiscount";
import { LVTFlooring } from "@/components/flooringpage/LVTFlooring";
import { ParquetFlooring } from "@/components/flooringpage/ParquetFlooring";
import { VinylFlooring } from "@/components/flooringpage/VinylFlooring";
import { notFound } from "next/navigation";

type Props = {
  params: { type: string };
};
const page = ({ params }: Props) => {
  const type = params.type;

  if (type === "vinyl-flooring")
    return (
      <>
        <VinylFlooring />
        <FlooringDiscount />
      </>
    );
  if (type === "parquet-flooring")
    return (
      <>
        <ParquetFlooring />
        <FlooringDiscount />
      </>
    );
  if (type === "lvt-flooring")
    return (
      <>
        <LVTFlooring />
        <FlooringDiscount />
      </>
    );

  return notFound();
};

export default page;
