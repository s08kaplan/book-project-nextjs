import { dbConnection } from "@/lib/dbConnection";
import { NextResponse } from "next/server";
import { CORS_HEADERS } from "../books/route";
import { createComment, getComments } from "@/controllers/comments";

dbConnection();

export async function GET(req: Request) {
  try {
    return await getComments(req);
  } catch (error) {
    return NextResponse.json(
      { error: true, message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const result = await createComment(req);

    return NextResponse.json(result, {
      status: 201,
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


export function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: CORS_HEADERS,
    }
  );
}
