import axiosInstance from "@/utils/axiosInstance";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axiosInstance.get("/products");

    if (response.status !== 200) {
      return NextResponse.json(
        { message: "Couldn't get products" },
        { status: response.status }
      );
    }

    return NextResponse.json(response.data);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
