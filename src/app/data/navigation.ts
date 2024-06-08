import { URL } from "./url";

export type NavigationItem = {
  name: string;
  path: string;
};

export const navigation: NavigationItem[] = [
  {
    name: "표지",
    path: URL.COVER,
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
    name: "방사선검사",
    path: URL.RADIATION_EXAMINATION,
  },
  {
    name: "방사선검사 결과",
    path: URL.RADIATION_EXAMINATION_RESULT,
  },
  {
    name: "종합검진소견",
    path: URL.EXAMINATION_RESULT,
  },
];
