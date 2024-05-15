import { UploadFile } from "antd/es/upload";
import { atom } from "jotai";

//TODO: localStorage로 변경
export type settingType = {
  id: string;
  name: string;
  breed: string;
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
  ownerName: "",
  sex: null,
  neutered: null,
  childBirth: null,
  age: "",
});
