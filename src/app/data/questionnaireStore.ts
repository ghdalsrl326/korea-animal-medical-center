import { atom } from "jotai";

export type QuestionnaireProps = {
  healthCheckCycle: string;
  hasDiagnosedDiseases: boolean;
  diagnosedDiseasesName: string;
  diagnosedDiseasesStartDay: string;
  isTakingCareDiagnosedDiseases: string;
  isMedicationTaken: boolean;
  medicationTakenDetail: string;
  hasMedicalHistory: boolean;
  medicalHistoryDetail: string;
  hasMedicationSideEffects: boolean;
  medicationSideEffectsDetail: string;
  hasOtherPets: boolean;
  numberOfDogs: number;
  numberOfCats: number;
  respiratorySymptoms: string[];
  frequencyOfWalksPerWeek: string;
  walkingHour: string;
  vaccinationInjection: string;
  heartwormVaccinationInjection: string;
  ExternalParasitesVaccinationInjection: string;
  drinkingHabit: string;
  cupsPerDay: string;
  appetiteLevel: string;
  appetiteChange: string;
  foodType: string;
  feedingType: string;
  restrictedFeedingDetail: string;
  forcedFeedingDetail: string;
  foodName: string;
  dailyAmount: string;
  eatsSnacks: boolean;
  snackType: string;
  treatFrequency: string;
  eatsSuppliements: boolean;
  supplements: string;
  vomitingFrequency: string;
  teethCleaningFrequency: string;
  urineTexture: string;
  urinationFrequency: string;
  stoolTexture: string;
  defecationFrequency: string;
  wantsBloodTypeTest: boolean;
  additionalExamRequests: string;
};

export const questionnaireAtom = atom({
  healthCheckCycle: "없음",
  hasDiagnosedDiseases: false,
  diagnosedDiseasesName: "",
  diagnosedDiseasesStartDay: "",
  isTakingCareDiagnosedDiseases: "",
  isMedicationTaken: false,
  medicationTakenDetail: "",
  hasMedicalHistory: false,
  medicalHistoryDetail: "",
  hasMedicationSideEffects: false,
  medicationSideEffectsDetail: "",
  hasOtherPets: false,
  numberOfDogs: 0,
  numberOfCats: 0,
  respiratorySymptoms: ["없음"],
  frequencyOfWalksPerWeek: "",
  walkingHour: "",
  vaccinationInjection: "한적없음",
  heartwormVaccinationInjection: "한적없음",
  ExternalParasitesVaccinationInjection: "한적없음",
  drinkingHabit: "잘 안 마시는 편",
  cupsPerDay: "",
  appetiteLevel: "원래 입이 짧음",
  appetiteChange: "",
  foodType: "",
  feedingType: "",
  restrictedFeedingDetail: "",
  forcedFeedingDetail: "",
  foodName: "",
  dailyAmount: "",
  eatsSnacks: false,
  snackType: "",
  treatFrequency: "2주 이상에 한 번",
  eatsSuppliements: false,
  supplements: "",
  vomitingFrequency: "",
  teethCleaningFrequency: "",
  urineTexture: "",
  urinationFrequency: "",
  stoolTexture: "",
  defecationFrequency: "",
  wantsBloodTypeTest: false,
  additionalExamRequests: "",
});
