import { atom } from "jotai";

export type QuestionnaireProps = {
  healthCheckCycle: string;
  hasDiagnosedDiseases: boolean | null;
  diagnosedDiseasesName: string;
  diagnosedDiseasesStartDay: string;
  isTakingCareDiagnosedDiseases: string;
  isMedicationTaken: boolean | null;
  medicationTakenDetail: string;
  hasMedicalHistory: boolean | null;
  medicalHistoryDetail: string;
  hasMedicationSideEffects: boolean | null;
  medicationSideEffectsDetail: string;
  hasOtherPets: boolean | null;
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
  eatsSnacks: boolean | null;
  snackType: string;
  treatFrequency: string;
  eatsSuppliements: boolean | null;
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

export const questionnaireAtom = atom<QuestionnaireProps>({
  healthCheckCycle: "",
  hasDiagnosedDiseases: null,
  diagnosedDiseasesName: "",
  diagnosedDiseasesStartDay: "",
  isTakingCareDiagnosedDiseases: "",
  isMedicationTaken: null,
  medicationTakenDetail: "",
  hasMedicalHistory: null,
  medicalHistoryDetail: "",
  hasMedicationSideEffects: null,
  medicationSideEffectsDetail: "",
  hasOtherPets: null,
  numberOfDogs: 0,
  numberOfCats: 0,
  respiratorySymptoms: [],
  frequencyOfWalksPerWeek: "",
  walkingHour: "",
  vaccinationInjection: "",
  heartwormVaccinationInjection: "",
  ExternalParasitesVaccinationInjection: "",
  drinkingHabit: "",
  cupsPerDay: "",
  appetiteLevel: "",
  appetiteChange: "",
  foodType: "",
  feedingType: "",
  restrictedFeedingDetail: "",
  forcedFeedingDetail: "",
  foodName: "",
  dailyAmount: "",
  eatsSnacks: null,
  snackType: "",
  treatFrequency: "",
  eatsSuppliements: null,
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
