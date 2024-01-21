import { URL } from "./url";

export type NavigationItem = {
  name: string;
  path: string;
};

export const navigation: NavigationItem[] = [
  {
    name: "세팅",
    path: URL.SETTING,
  },
  {
    name: "건강검진 문진표",
    path: URL.QUESTIONNAIRE,
  },
  {
    name: "신체검사 결과",
    path: URL.HEALTH_EXAMINATION,
  },
  {
    name: "혈액검사",
    path: URL.BLOOD_EXAMINATION,
  },
  {
    name: "혈액검사 결과",
    path: URL.BLOOD_EXAMINATION_RESULT,
  },
  {
    name: "혈액검사 결과2",
    path: URL.BLOOD_EXAMINATION_RESULT2,
  },
  {
    name: "혈액검사 결과3",
    path: URL.BLOOD_EXAMINATION_RESULT3,
  },
  {
    name: "혈액검사 결과4",
    path: URL.BLOOD_EXAMINATION_RESULT4,
  },
  {
    name: "C반응성단백/항체가검사",
    path: URL.C_REACTIVE_PROTEIN_EXAMINATION,
  },
];
