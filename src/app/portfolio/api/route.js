import { connectDb } from "@/Services/connectDb";
import { NextResponse } from "next/server";

export const POST = async(request)=> {
    const data = await request.json();
    console.log(data)
    try {
        const db = await connectDb();
        const projectCollection = db.collection("projectCollection")
        const res = await projectCollection.insertOne(data);
        return NextResponse.json({message: "success"})
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const GET = async(request)=> {
    try {
        const db = await connectDb();
        const projectCollection = db.collection("projectCollection")
        const res = await projectCollection.find().toArray();
        return NextResponse.json({message: "success",data: res});
    } catch (error) {
        return NextResponse.json(error)
    }
}