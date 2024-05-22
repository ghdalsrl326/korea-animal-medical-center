import { UploadFile } from "antd/es/upload";
import { atom } from "jotai";

//TODO: localStorage로 변경
export type settingType = {
  id: string;
  name: string;
  breed: string;
  species: "강아지" | "고양이";
  ownerName: string;
  sex: "남" | "여" | null;
  neutered: "예" | "아니오" | null;
  childBirth: "예" | "아니오" | null;
  age: string;
};

export const settingAtom = atom<settingType>({
  id: "",
  name: "",
  breed: "",
  species: "강아지",
  ownerName: "",
  sex: null,
  neutered: null,
  childBirth: null,
  age: "",
});
