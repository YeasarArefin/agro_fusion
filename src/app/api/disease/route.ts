import dbConnect from "@/lib/functions/dbConnect";
import sendResponse from "@/lib/functions/sendResponse";
import DiseaseModel from "@/models/Disease";
import { Disease } from "@/types/types";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    await dbConnect();
    try {
        const data = await request.json() as Disease;
        const response = await DiseaseModel.create(data);
        return sendResponse(true, 'new disease data posted successfully', 200, response);

    } catch (error) {
        console.log("🚀 ~ POST ~ error: /api/signup - error signing up user", error);
        return sendResponse(false, 'error signing up user', 400, error);
    }
}
export async function GET() {
    await dbConnect();
    try {
        const diseases = await DiseaseModel.find({}) as Disease[];
        return sendResponse(true, `diseases sent successfully , count : ${diseases.length}`, 200, diseases);

    } catch (error) {
        console.log("🚀 ~ POST ~ error: /api/signup - error signing up user", error);
        return sendResponse(false, 'error signing up user', 400, error);
    }
}