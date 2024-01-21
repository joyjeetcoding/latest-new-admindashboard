import { connectToDB } from "@/database/mongodb";
import Visitors from "@/models/Visitors";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
    const {id} = params;
    try {
        await connectToDB();
        const newData = await req.json();
        const updatedData = await Visitors.findByIdAndUpdate(id, newData);

        if(updatedData) {
            return NextResponse.json({
                success: true,
                message: "Updated Successfully",
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Unable to update. Please try again later",
            })
        }

    } catch (error) {
        console.log("Error" , error);
        return NextResponse.json({
            success: false,
            message: "Something went wrong!!!"
        })
    }   
}


export async function GET(req, {params}) {
    const {id} = params;
    try {
        await connectToDB();
        const singleElement = await Visitors.findOne({_id: id});
        if(singleElement) {
            return NextResponse.json({
                success: true,
                message: "We got the single User",
            })
        } else {
            return NextResponse.json({
                success: false,
                message: "Something went wrong... Please trye again later"
            })
        }
        
    } catch (error) {
        console.log("Error", error);
    }
}
