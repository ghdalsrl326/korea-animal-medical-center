import { atom } from "jotai";
export const questionnaireAtom = atom({
  sex: "",
  neutered: "",
  childBirth: "",
  healthCheck: "",
  diagnosedDisease: "",
  diagnosedDiseaseName: "",
  diagnosedDiseaseDate: "",
  diagnosedDiseaseManagement: "",
  prescriptionMedicine: "",
  prescriptionMedicineName: "",
  surgeryHistory: "",
  surgeryHistoryName: "",
  sideEffect: "",
  sideEffectName: "",
  otherAnimal: "",
  otherAnimalName: "",
  respiratorySymptoms: [""],
  walkingFrequency: "",
  walkingTime: "",
  vaccination: "",
  heartworm: "",
  externalParasite: "",
  waterIntake: "",
  waterIntakeAmount: "",
  appetite: "",
  appetiteChange: "",
  foodTypeAndAmount: "",
  restrictFeeding: "",
  forceFeeding: "",
  foodName: "",
  foodAmount: "",
  snackType: "",
  snackAmount: "",
  supplements: "",
  vomiting: "",
  toothbrushing: "",
  urineState: "",
  urineFrequency: "",
  defecationState: "",
  defecationFrequency: "",
  bloodTypeTestInterest: "",
  additional: "",
});