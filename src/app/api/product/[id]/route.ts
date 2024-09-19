import Product from "@/models/Product";
import { connectToDB } from "../../../../../lib/mongodb";
import { ObjectId } from "mongodb";

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    await connectToDB();
    const objectId = new ObjectId(id);

    if (!objectId) {
      return new Response("Invalid product ID", { status: 400 });
    }

    const body = await req.json();

    const { title, isAvailable, description, imageurl, category, subcategory } =
      body;

    const updateProduct = await Product.findByIdAndUpdate(
      objectId,
      {
        title,
        isAvailable,
        description,
        imageurl,
        category,
        subcategory,
      },
      { new: true }
    );

    return new Response(JSON.stringify(updateProduct), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to update product", { status: 500 });
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    await connectToDB();
    const objectId = new ObjectId(id);
    const Products = await Product.deleteOne(objectId);

    return new Response(JSON.stringify(Products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to delete product", { status: 500 });
  }
};

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    await connectToDB();

    const objectId = new ObjectId(id);
    const Products = await Product.findById(objectId);

    return new Response(JSON.stringify(Products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to view product", { status: 404 });
  }
};
