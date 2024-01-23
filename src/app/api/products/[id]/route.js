import { connectToDB } from "@/database/mongodb";
import Products from "@/models/Products";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connectToDB();
    const singleProduct = await Products.findOne({ _id: id });

    if (singleProduct) {
      return NextResponse.json(
        {
          singleProduct,
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Couldn't find the selected product",
        },
        { status: 501 }
      );
    }
  } catch (error) {
    console.log("Error", error);
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  try {
    await connectToDB();
    const {
      newdeviceName: deviceName,
      newMonth: month,
      newPrice: price,
      newSales: sales,
    } = await req.json();
    const updatedData = await Products.findByIdAndUpdate(id, {
      deviceName,
      month,
      price,
      sales,
    });

    if (updatedData) {
      return NextResponse.json({
        success: true,
        message: "Updated Successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Couldn't update",
      });
    }
  } catch (error) {
    console.log("Error", error);
  }
}
