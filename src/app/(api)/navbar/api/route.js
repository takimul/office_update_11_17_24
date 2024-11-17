import { connectDb } from "@/Services/connectDb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.json();
  console.log(data);
  try {
    const db = await connectDb();
    const logoCollection = db.collection("logoCollection");
    const filter = {};
    const updatedDoc = {
      $set: {
        image: data.image,
      },
    };
    const res = await logoCollection.updateOne(filter, updatedDoc, {
      upsert: true,
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};

export const GET = async (request) => {
  try {
    const db = await connectDb();
    const logoCollection = db.collection("logoCollection");
    const res = await logoCollection.find().toArray();

    return NextResponse.json({ message: "success", data: res });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};
