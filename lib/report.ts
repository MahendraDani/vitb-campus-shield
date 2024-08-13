import { Reports } from "@prisma/client";
import prisma from "./prisma";
import { EApiError } from "./error";

interface ICreateReportProps {
  abuse: string;
  action: string;
  evidenceLink: string;
  description: string;
  location: string;
  parties: string;
  severity: string;
  title: string;
}

// Pick<
//     Reports,
//     | "abuse"
//     | "action"
//     | "evidenceLink"
//     | "description"
//     | "location"
//     | "parties"
//     | "severity"
//     | "title"
//   >
export const createReport = async (props: ICreateReportProps) => {
  try {
    const report = await prisma.reports.create({
      data: {
        status: "FILLED",
        ...props,
      },
    });
    return { report };
  } catch (error) {
    throw new EApiError({
      message: "Error filing report",
      code: "database_error",
      statusCode: 500,
    });
  }
};

export const getReportById = async ({ id }: Pick<Reports, "id">) => {
  const report = await prisma.reports.findUnique({ where: { id } });
  return { report };
};

export const getAllReports = async () => {
  const reports = await prisma.reports.findMany();
  return { reports };
};
