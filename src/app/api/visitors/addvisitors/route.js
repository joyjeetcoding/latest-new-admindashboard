import { connectToDB } from "@/database/mongodb";
import Visitors from "@/models/Visitors";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic"

export async function POST(req) {
    try {
        await connectToDB();
        const extractData = await req.json();
        const newlyCreatedData = await Visitors.create(extractData);
        
        if(newlyCreatedData) {
            return NextResponse.json({
                success: true,
                message: "Visitors added Successfully",
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Failed to add a Visitor. Please trye again after some time",
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