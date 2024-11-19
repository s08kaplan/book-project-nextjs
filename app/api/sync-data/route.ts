import { primaryDataSamples } from "@/src/helpers/sync";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await primaryDataSamples();
    return NextResponse.json({ message: "Sample data populated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error populating data:", error);
    return NextResponse.json({ error: true, message: "Failed to populate sample data" }, { status: 500 });
  }
}