import { dbConnection } from "@/lib/dbConnection";
import { getBooks, createBook } from "@/controllers/book";
import { NextResponse } from "next/server";

dbConnection();

export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': 'http://localhost:3000', 
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};
export async function GET(req: Request) {
  try {
    return await getBooks(req);
  } catch (error) {
    return NextResponse.json(
      { error: true, message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const result = await createBook(req);

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


export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: CORS_HEADERS,
    }
  );
}
