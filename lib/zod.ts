import { z } from "zod";
export const ZReportSchema = z.object({
  abuse: z.string().min(1),
  action: z.string().min(1),
  evidenceLink: z.string().min(1),
  description: z.string().min(1),
  title: z.string().min(1),
  location: z.string().min(1),
  parties: z.string().min(1),
  severity: z.string().min(1),
});
