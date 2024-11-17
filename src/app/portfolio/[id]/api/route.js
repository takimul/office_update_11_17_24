import { connectDb } from "@/Services/connectDb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    const db = await connectDb();
    const query = { _id: new ObjectId(id) };
    const projectCollection = db.collection("projectCollection");
    const res = await projectCollection.findOne(query);
    return NextResponse.json({ message: "success", data: res });
  } catch (error) {
    return NextResponse.json(error);
  }
};
