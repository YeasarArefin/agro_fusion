import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function sendResponse(success: boolean, message: string, status: number, data?: any) {
    return NextResponse.json({ success, message, data }, { status });
}