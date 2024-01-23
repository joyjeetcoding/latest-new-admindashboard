import { connectToDB } from "@/database/mongodb";
import Products from "@/models/Products";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function POST(req) {
    try {
        await connectToDB();
        const extractData = await req.json();
        const newlyCreatedData = await Products.create(extractData);

        if(newlyCreatedData) {
            return NextResponse.json({
                success: true,
                message: "Product added Successfully",
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Failed to add product",
            })
        }


    } catch (error) {
        console.log("Error", error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong!!!"
        })
    }
}