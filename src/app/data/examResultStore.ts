import { ExamResult } from "@/types/ExamResult";
import { atom } from "jotai";

export const examResultAtom = atom<ExamResult>({
  generalComment: "",
});

export const initialExamResult = {
  generalComment: "",
};
