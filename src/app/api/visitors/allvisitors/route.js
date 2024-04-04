import { connectToDB } from "@/database/mongodb";
import Visitors from "@/models/Visitors";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        await connectToDB();
        const getAllVisitors = await Visitors.find({});
        
        if(getAllVisitors) {
            return NextResponse.json({
                success: true,
                data: getAllVisitors,
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Failed to fetch the visitors. Please trye again !!!"
            })
        }
        
    } catch (error) {
        console.log("Error", error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong !!!",
        })
    }
}   