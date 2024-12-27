import { NextResponse } from "next/server";
import { CORS_HEADERS } from "../../books/route";
import { login } from "@/controllers/auth";


export async function POST(req: Request) {
    const receivedData = await req.json()
    // console.log("received data for LOGIN===>",receivedData);
  try {
    const result = await login(receivedData);

    return NextResponse.json(result, {
      status: 200,
      headers: CORS_HEADERS,
    });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: (error as Error).message },
      {
        status: 500,
        headers: CORS_HEADERS,
      }
    );
  }
}