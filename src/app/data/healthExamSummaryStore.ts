import { atom } from "jotai";

export const healthExamSummaryAtom = atom({
  vitalSign: "",
  bcsMcs: "",
  lymphNode: "",
  musculoskeletal: "",
  auscultation: "",
  reproductive: "",
  nasal: "",
  neutered: "",
});
