import { HealthExam } from "@/types/HealthExam";
import { atom } from "jotai";

export const healthExamSummaryAtom = atom<Partial<HealthExam>>({
  vitalSigns: "",
  superficialLymphNodes: "",
  auscultationHeartLung: "",
  nasalPharyngealCervical: "",
  bcsNMCS: "",
  musculoskeletalSystem: "",
  reproductiveSystem: "",
  neutered: "",
});
