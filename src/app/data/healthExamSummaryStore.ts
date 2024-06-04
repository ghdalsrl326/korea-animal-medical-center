import { HealthExam, HealthExamSummary } from "@/types/HealthExam";
import { atom } from "jotai";

export const healthExamSummaryAtom = atom<HealthExamSummary>({
  vitalSigns: "",
  superficialLymphNodes: "",
  auscultationHeartLung: "",
  nasalPharyngealCervical: "",
  bcsNMCS: "",
  musculoskeletalSystem: "",
  reproductiveSystem: "",
  neutered: "",
});
