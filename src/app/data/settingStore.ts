import { UploadFile } from "antd/es/upload";
import { atom } from "jotai";

export type settingType = {
  name: string;
  breed: string;
  ownerName: string;
  age: string;
  date: string;
  examinationType: "first" | "second" | null;
  signature: UploadFile[];
};

export const settingAtom = atom<settingType>({
  name: "",
  breed: "",
  ownerName: "",
  age: "",
  date: "",
  examinationType: null,
  signature: [],
});
