import { handleZodError } from "@/lib/error";
import { createReport, getAllReports } from "@/lib/report";
import { ZReportSchema } from "@/lib/zod";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

// file a new report
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const parsed = ZReportSchema.parse(body);
    console.log(parsed);
    const report = await createReport(parsed);
    return NextResponse.json(
      { message: "Report filled successfully", report },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return handleZodError(error);
    }
    return NextResponse.json({ error: "internal_server_error" });
  }
};

// get all reports
export const GET = async () => {
  const reports = await getAllReports();
  return NextResponse.json({ data: reports });
};
