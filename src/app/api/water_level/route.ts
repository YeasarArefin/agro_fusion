import dbConnect from "@/lib/functions/dbConnect";
import sendResponse from "@/lib/functions/sendResponse";
import WaterLevelModel from "@/models/WaterLevel";
import { WaterLevel } from "@/types/types";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    await dbConnect();
    try {
        const data = await request.json() as WaterLevel;
        const response = await WaterLevelModel.create(data);
        return sendResponse(true, 'new water level data posted successfully', 200, response);

    } catch (error) {
        console.log("🚀 ~ POST ~ error: /api/signup - error signing up user", error);
        return sendResponse(false, 'error signing up user', 400, error);
    }
}

export async function GET() {
    await dbConnect();
    try {
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        const waterLevel = await WaterLevelModel.find({
            createdAt: {
                $gte: startOfDay,
                $lte: endOfDay,
            },
        }) as WaterLevel[];

        return sendResponse(true, `Today's water levels sent successfully, count: ${waterLevel.length}`, 200, waterLevel);

    } catch (error) {
        console.log("🚀 ~ GET ~ error: /api/water level - error fetching today's water levels", error);
        return sendResponse(false, 'Error fetching water levels', 400, error);
    }
}