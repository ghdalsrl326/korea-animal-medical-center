import { RadiationExam } from "@/types/RadiationExam";
import { atom } from "jotai";

export const radiationExamAtom = atom<RadiationExam>({
  radiographyImage1: null,
  radiographyImage2: null,
  radiographyImage3: null,
  radiographyImage4: null,
  radiographyImage5: null,

  thoraxAbdomenRadiologyResult: "",
  radiologyComment: "",
});

export const initialRadiationExam = {
  radiographyImage1: null,
  radiographyImage2: null,
  radiographyImage3: null,
  radiographyImage4: null,
  radiographyImage5: null,
  thoraxAbdomenRadiologyResult: "",
  radiologyComment: "",
};
