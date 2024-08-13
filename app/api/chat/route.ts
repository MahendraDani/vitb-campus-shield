import { chat } from "@/lib/chatbot";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.searchParams.get("query");
  if (!query) {
    return NextResponse.json({ message: "Please enter promt" });
  }
  const ai = await chat({ query });
  return NextResponse.json({ message: query, chat: ai });
};
