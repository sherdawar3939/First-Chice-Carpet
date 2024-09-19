import Blog from "@/models/Blog";
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
      return new Response("Invalid blog ID", { status: 400 });
    }

    const body = await req.json();

    const { title, slung, description, imageurl, category, subcategory } = body;

    const updateBlog = await Blog.findByIdAndUpdate(
      objectId,
      {
        title,
        slung,
        description,
        imageurl,
        category,
        subcategory,
      },
      { new: true }
    );

    return new Response(JSON.stringify(updateBlog), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to update blog", { status: 500 });
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
    const Blogs = await Blog.deleteOne(objectId);

    return new Response(JSON.stringify(Blogs), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to delete blog", { status: 500 });
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
    const Blogs = await Blog.findById(objectId);

    return new Response(JSON.stringify(Blogs), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to view blog", { status: 404 });
  }
};
