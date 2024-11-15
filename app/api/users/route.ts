import { dbConnection } from "@/lib/dbConnection";
import { getUsers, createUser } from "@/controllers/user";
import { errorHandler } from "@/middlewares/errorHandler";
import { NextApiRequest, NextApiResponse } from "next";

dbConnection();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return errorHandler(getUsers)(req, res);
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return errorHandler(createUser)(req, res);
}