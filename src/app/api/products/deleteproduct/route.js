import { connectToDB } from "@/database/mongodb";
import Products from "@/models/Products";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectToDB();
        const deleteProduct = await Products.findByIdAndDelete(id);
        
        if(deleteProduct) {
            return NextResponse.json({
                success: true,
                message: "Product Deleted Successfully",
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Failed to delete the Product",
            })
        }

    } catch (error) {
        console.log("Error", error);
        return NextResponse.json({
            success: false,
            message: "Something went Wrong!!!"
        })
    }
}