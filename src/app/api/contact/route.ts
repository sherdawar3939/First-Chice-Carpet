import Contact from "@/models/Contact";
import { connectToDB } from "../../../../lib/mongodb";

export const POST = async (req: Request) => {
  try {
    await connectToDB();

    const body = await req.json();

    const { firstname, lastname, phone, email, requirement, message } = body;

    const newContact = await Contact.create({
      firstname,
      lastname,
      phone,
      email,
      requirement,
      message,
    });

    return new Response(JSON.stringify(newContact), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to create new contact", { status: 500 });
  }
};

export const GET = async (req: Request) => {
  try {
    await connectToDB();

    const Contacts = await Contact.find();

    return new Response(JSON.stringify(Contacts), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to view contact", { status: 500 });
  }
};
