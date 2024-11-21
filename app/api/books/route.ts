import { dbConnection } from "@/lib/dbConnection";
import { getBooks, createBook } from "@/controllers/book";
import { NextResponse } from "next/server";

dbConnection();

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
      return await createBook(req);
    } catch (error) {
      return NextResponse.json(
        { error: true, message: (error as Error).message },
        { status: 500 }
      );
    }
  }