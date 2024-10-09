import dbConnect from "@/lib/functions/dbConnect";
import sendResponse from "@/lib/functions/sendResponse";
import AlertModel from "@/models/Alert";
import { Alert } from "@/types/types";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    await dbConnect();
    try {
        const data = await request.json() as Alert;
        const response = await AlertModel.create(data);
        return sendResponse(true, 'new alert data posted successfully', 200, response);

    } catch (error) {
        console.log("🚀 ~ POST ~ error: /api/signup - error signing up user", error);
        return sendResponse(false, 'error signing up user', 400, error);
    }
}
export async function GET() {
    await dbConnect();
    try {
        const alerts = await AlertModel.find({}) as Alert[];
        return sendResponse(true, `alerts sent successfully , count : ${alerts.length}`, 200, alerts);

    } catch (error) {
        console.log("🚀 ~ POST ~ error: /api/signup - error signing up user", error);
        return sendResponse(false, 'error signing up user', 400, error);
    }
}