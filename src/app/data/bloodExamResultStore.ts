import { BloodExamAtom } from "@/types/BloodExam";
import { atom } from "jotai";

export const bloodExamResultAtom = atom<BloodExamAtom>({
  firstDate: "",
  secondDate: "",
  pHFirst: "",
  pHSecond: "",
  pCO2First: "",
  pCO2Second: "",
  pO2First: "",
  pO2Second: "",
  sodiumFirst: "",
  sodiumSecond: "",
  potassiumFirst: "",
  potassiumSecond: "",
  chlorideFirst: "",
  chlorideSecond: "",
  iCaFirst: "",
  iCaSecond: "",
  hctFirst: "",
  hctSecond: "",
  glucoseFirst: "",
  glucoseSecond: "",
  lactateFirst: "",
  lactateSecond: "",
  anionGapFirst: "",
  anionGapSecond: "",
  bicarbonateFirst: "",
  bicarbonateSecond: "",
});

export const initialBloodExamResult = {
  firstDate: "",
  secondDate: "",
  pHFirst: "",
  pHSecond: "",
  pCO2First: "",
  pCO2Second: "",
  pO2First: "",
  pO2Second: "",
  sodiumFirst: "",
  sodiumSecond: "",
  potassiumFirst: "",
  potassiumSecond: "",
  chlorideFirst: "",
  chlorideSecond: "",
  iCaFirst: "",
  iCaSecond: "",
  hctFirst: "",
  hctSecond: "",
  glucoseFirst: "",
  glucoseSecond: "",
  lactateFirst: "",
  lactateSecond: "",
  anionGapFirst: "",
  anionGapSecond: "",
  bicarbonateFirst: "",
  bicarbonateSecond: "",
};
