import { connectToDB } from "@/database/mongodb";
import User from "@/models/User";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  await connectToDB();

  const { name, email, password } = await req.json();

  console.log("Name", name);
  console.log("Email", email);
  console.log("Password", password);

  try {
    const isUserAlreadyExists = await User.findOne({ email });

    if (isUserAlreadyExists) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 401
        }
      );
    } else {
      const hashPassword = await hash(password, 12);
      const newUser = await User.create({
        name,
        email,
        password: hashPassword,
      });

      if (newUser) {
        return NextResponse.json(
          {
            message: "Account created Successfully",
          },
          {
            status: 201
          }
        );
      }
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occured during account creation",
      },
      {
        status: 500
      }
    );
  }
}
