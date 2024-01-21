export type NavigationItem = {
  name: string;
  path: string;
};

export const navigation: NavigationItem[] = [
  {
    name: "세팅",
    path: "/setting",
  },
  {
    name: "건강검진 문진표",
    path: "/questionnaire",
  },
  {
    name: "신체검사 결과",
    path: "/health-examination",
  },
  {
    name: "혈액검사",
    path: "/blood-examination",
  },
  {
    name: "혈액검사 결과",
    path: "/blood-examination-result",
  },
  {
    name: "혈액검사 결과2",
    path: "/blood-examination-result2",
  },
  {
    name: "혈액검사 결과3",
    path: "/blood-examination-result3",
  },
  {
    name: "혈액검사 결과4",
    path: "/blood-examination-result4",
  },
  {
    name: "C반응성단백/항체가검사",
    path: "/c-reactive-protein-examination",
  },
];
