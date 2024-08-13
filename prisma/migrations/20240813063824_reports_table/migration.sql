-- CreateEnum
CREATE TYPE "ReportStatus" AS ENUM ('FILLED', 'IN_PROGRESS', 'COMPLETED');

-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "Parties" AS ENUM ('STUDENTS', 'FACULTIES', 'STAFF', 'WORKERS');

-- CreateEnum
CREATE TYPE "AbuseType" AS ENUM ('VERBEL', 'PHYSICAL', 'CYBER', 'HARASSMENT', 'INTIMIDATION', 'OTHER');

-- CreateEnum
CREATE TYPE "PreferredAction" AS ENUM ('JUST_REPORT', 'IMMIDIATE_ATTENTION', 'DISCUSS_FACULTY');

-- CreateTable
CREATE TABLE "Reports" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "incidentTime" TIMESTAMP(3) NOT NULL,
    "evidenceLink" TEXT NOT NULL,
    "status" "ReportStatus" NOT NULL,
    "severity" "Severity" NOT NULL,
    "parties" "Parties" NOT NULL,
    "abuse" "AbuseType" NOT NULL,
    "action" "PreferredAction" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reports_pkey" PRIMARY KEY ("id")
);
