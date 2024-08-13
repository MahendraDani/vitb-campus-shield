import { getReportById } from "@/lib/report";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const id = req.nextUrl.pathname.split("report/")[1];
  const report = await getReportById({ id: parseInt(id) });
  return NextResponse.json({ data: report });
};
