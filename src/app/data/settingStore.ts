export type settingType = {
  id: string;
  name: string;
  breed: string;
  species?: "강아지" | "고양이";
  parentName: string;
  gender: "남" | "여" | null;
  isNeutered: "예" | "아니오" | boolean;
  hasGivenBirth: "예" | "아니오" | boolean;
  age: string;
};
