import Contact from "@/models/Contact";
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
      return new Response("Invalid contact ID", { status: 400 });
    }

    const body = await req.json();

    const { firstname, lastname, phone, email, requirement, message } = body;

    const updateContact = await Contact.findByIdAndUpdate(
      objectId,
      {
        firstname,
        lastname,
        phone,
        email,
        requirement,
        message,
      },
      { new: true }
    );

    return new Response(JSON.stringify(updateContact), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to update contact", { status: 500 });
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
    const Contacts = await Contact.deleteOne(objectId);

    return new Response(JSON.stringify(Contacts), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to delete contact", { status: 500 });
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
    const Blogs = await Contact.findById(objectId);

    return new Response(JSON.stringify(Blogs), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to view contact", { status: 404 });
  }
};
