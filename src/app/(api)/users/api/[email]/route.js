import { connectDb } from "@/Services/connectDb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  console.log("params", request);
  try {
    const db = await connectDb();
    const usersCollection = db.collection("usersCollection");

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
};
