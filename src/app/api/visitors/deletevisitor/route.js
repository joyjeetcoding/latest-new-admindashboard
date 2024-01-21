import { connectToDB } from "@/database/mongodb";
import Visitors from "@/models/Visitors";
import { NextResponse } from "next/server";

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id");
    try {
        await connectToDB();
        const deleteVisitor = await Visitors.findByIdAndDelete(id);
        if(deleteVisitor) {
            return NextResponse.json({
                success: true,
                message: "Deleted Successfully",
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Unable to delete. Please try again later"
            })
        }
    } catch (error) {
        console.log("Error", error);
        return NextResponse.json({
            success: false,
            message: "Soething went wrong. Please try again later"
        })
    }
}