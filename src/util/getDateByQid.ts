import { QuestionnaireMeta } from "@/types/QuestionnaireMeta";
import dayjs from "dayjs";
export const getDateByQid = (qid: string, qarray: QuestionnaireMeta[]) => {
  const q = qarray.find((q) => q.id.toString() === qid.toString());
  if (!q) {
    return "";
  }
  const date = dayjs(q.createdAt).format("YYYY-MM-DD");
  return date;
};
