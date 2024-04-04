import { connectToDB } from "@/database/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";


export async function POST(req) {
  
  
  try {
    await connectToDB();
    
    const { name, email } = await req.json();
    console.log("Email", email);
    console.log("Name", name);
    const newUser = await User.create({ name, email });

    if (newUser) {
      return NextResponse.json({
        success: true,
        message: "User Registered",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to Register",
      });
    }
  } catch (error) {
    console.log("Error", error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong!!!",
    });
  }
}
