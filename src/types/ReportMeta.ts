import { Setting } from "./Setting";

export type ReportMeta = {
  data?: Partial<Setting>;
  date?: string;
  petid?: string;
  qid?: string;
};
