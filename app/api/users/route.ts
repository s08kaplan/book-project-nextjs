import { dbConnection } from "@/lib/dbConnection";
import { getUsers, createUser } from "@/controllers/user";
import { errorHandler } from "@/middlewares/errorHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


dbConnection();

export async function GET(req: Request) {
  return errorHandler(getUsers)(req);
}

export async function POST(req: Request) {
  return errorHandler(createUser)(req);
}