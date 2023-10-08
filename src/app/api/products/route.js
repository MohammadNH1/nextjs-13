import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { products } from "@/utils/model";

export async function GET() {
  
  try {
    mongoose
      .connect(process.env.databaseConnection)
      .then(() => console.log("Connected!"));
    const data = await products.find();
    return NextResponse.json(
      {
        message: "hello from product route",
        status: 200,
        success: true,
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
        status: 500,
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function POST(request, content) {
  const payload = await request.json();
  // console.log('payload',payload)

  try {
    mongoose
      .connect(process.env.databaseConnection)
      .then(() => console.log("Connected!"));
    const response = new products({
      ...payload,
    });
    const data = await response.save();
    return NextResponse.json({
      message: "product created successfully!",
      success: true,
      status: "201",
      data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
        success: false,
        status: "404",
      },
      { status: 404 }
    );
  }

  // console.log(data)
}
