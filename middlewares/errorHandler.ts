import { NextResponse } from "next/server";

type HandlerFunction = (req: Request) => Promise<NextResponse>;

export const errorHandler = (handler: HandlerFunction) => async (req: Request): Promise<NextResponse> => {
  try {
    return await handler(req);
  } catch (error) {
    console.error("Error in request:", error);
    return NextResponse.json(
      {
        error: true,
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
};