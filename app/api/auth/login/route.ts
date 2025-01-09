import { NextResponse } from "next/server";
import { CORS_HEADERS } from "../../books/route";
import { login } from "@/controllers/auth";


export async function POST(req: Request) {
    const receivedData = await req.json()
    console.log("received data for LOGIN===>",receivedData);
  try {
    const result = await login(receivedData);
console.log("result in login===> ",result);
    if (result.status !== 200) {
      return NextResponse.json(
        { error: true, message: "Login failed" },
        { status: result.status, headers: CORS_HEADERS }
      );
    }

     const response = NextResponse.json(result, {
      status: 200,
      headers: CORS_HEADERS,
    });

    response.cookies.set("authToken", result.token, {
      httpOnly: true,
      path: "/",
    });

    return response;

    // return NextResponse.json(result, {
    //   status: 200,
    //   headers: CORS_HEADERS,
    // });
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