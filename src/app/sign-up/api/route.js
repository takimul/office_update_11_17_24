import { connectDb } from "@/Services/connectDb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.json();
  console.log(data);
  try {
    const db = await connectDb();
    const usersCollection = db.collection("usersCollection");
    const exist = await usersCollection.findOne({ email: data.email });
    if (!exist) {
      const res = await usersCollection.insertOne(data);
      return NextResponse.json({ message: "successfully created", status: 200 });
    }
    return NextResponse.json({ message: "Email already exists", status: 409 });
  } catch (error) {
    return NextResponse.json(error);
  }
};
export const PATCH = async (request) => {
  const data = await request.json();
  console.log(data);
  try {
    const db = await connectDb();
    const usersCollection = db.collection("usersCollection");
    const filter = { email: data.email };
    const updatedDoc = {
      $set: data,
    };
    const res = await usersCollection.updateOne(filter, updatedDoc, {
      upsert: true,
    });
    return NextResponse.json({ message: "Successfully updated", status: 200 });
  } catch (error) {
    return NextResponse.json(error);
  }
};
