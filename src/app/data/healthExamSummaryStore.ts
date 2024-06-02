import { atom } from "jotai";

export const healthExamSummaryAtom = atom({
  vitalSigns: "",
  superficialLymphNodes: "",
  auscultationHeartLung: "",
  nasalPharyngealCervical: "",
  bcsNMCS: "",
  musculoskeletalSystem: "",
  reproductiveSystem: "",
  neutered: "",
});
