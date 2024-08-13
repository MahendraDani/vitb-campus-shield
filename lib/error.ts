import { NextResponse } from "next/server";
import { ZodError } from "zod";

export class EApiError extends Error {
  readonly code;
  readonly statusCode;
  constructor({
    message,
    code,
    statusCode,
  }: {
    message: string;
    code: string;
    statusCode: number;
  }) {
    super(message);
    this.code = code;
    this.statusCode = statusCode;
  }
}

export const handleZodError = (error: ZodError) => {
  return NextResponse.json({
    error: error.flatten().fieldErrors,
  });
};
