import Blog from "@/models/Blog";
import { connectToDB } from "../../../../lib/mongodb";

export const POST = async (req: Request) => {
  try {
    await connectToDB();

    const body = await req.json();

    const { title, slung, description, imageurl, category, subcategory } = body;

    const newBlog = await Blog.create({
      title,
      slung,
      description,
      imageurl,
      category,
      subcategory,
    });

    return new Response(JSON.stringify(newBlog), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to create new blog", { status: 500 });
  }
};

export const GET = async (req: Request) => {
  try {
    await connectToDB();

    const Blogs = await Blog.find();

    return new Response(JSON.stringify(Blogs), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to view blog", { status: 500 });
  }
};
