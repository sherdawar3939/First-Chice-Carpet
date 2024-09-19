import Product from "@/models/Product";
import { connectToDB } from "../../../../lib/mongodb";

export const POST = async (req: Request) => {
  try {
    await connectToDB();

    const body = await req.json();

    const { title, isAvailable, description, imageurl, category, subcategory } =
      body;

    const newProduct = await Product.create({
      title,
      isAvailable,
      description,
      imageurl,
      category,
      subcategory,
    });

    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to create new product", { status: 500 });
  }
};

export const GET = async (req: Request) => {
  try {
    await connectToDB();
    const url = new URL(req.url);
    const category = url.searchParams.get("category");
    const subcategory = url.searchParams.get("subcategory");
    const searchQuery = url.searchParams.get("q");
    let query: any = {};
    if (category) {
      query.category = category;
    }
    if (subcategory) {
      query.subcategory = subcategory;
    }
    if (searchQuery) {
      query.title = { $regex: searchQuery, $options: "i" }; // Case-insensitive partial match
    }

    const Products = await Product.find(query);

    return new Response(JSON.stringify(Products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to view product", { status: 500 });
  }
};
