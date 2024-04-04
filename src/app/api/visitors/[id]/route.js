import { connectToDB } from "@/database/mongodb";
import Visitors from "@/models/Visitors";
import { NextResponse } from "next/server";

export async function PUT(req, {params}) {
    const {id} = params;
    try {
        await connectToDB();
        const {newName: name, newEmail: email, newLocation: location, newStatus:status} = await req.json();
        const updatedData = await Visitors.findByIdAndUpdate(id, {name, email, location, status});

        if(updatedData) {
            return NextResponse.json({
                success: true,
                message: "Updated successfully"
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
        const singleVisitor = await Visitors.findOne({_id: id});
        if(singleVisitor) {
            return NextResponse.json({
                singleVisitor,
            }, {status: 201})
        } else {
            return NextResponse.json({
                message: "Something went wrong... Please trye again later"
            }, {status: 501})
        }
        
    } catch (error) {
        console.log("Error", error);
    }
}
