import User from "@/models/User";
import { connectToDB } from "../../../../lib/mongodb";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    await connectToDB();

    const body = await req.json();

    const { name, email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);
    // const existingUser = await User.findOne({ email })
    // if (existingUser) {
    //   return new Response("Email already exist", { status: 409 });
    // }
    // }

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      resetPasswordToken: null,
      resetPasswordExpires: null,
    });

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response("Failed to create new user", { status: 500 });
  }
};
