import { connectToDB } from "@/database/mongodb";
import Products from "@/models/Products";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectToDB();
        const getAllProducts = await Products.find({});

        if(getAllProducts) {
            return NextResponse.json({
                success: true,
                data: getAllProducts,
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Couldn't find the Products",
            })
        }

    } catch (error) {
        console.log("Error", error);
    }
}