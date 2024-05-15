import { atom } from "jotai";
//TODO: localStorage로 변경
export const configAtom = atom({
  mode: "",
  petId: "",
  date: "",
});
