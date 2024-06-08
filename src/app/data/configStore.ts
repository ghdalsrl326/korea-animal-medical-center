import { atomWithStorage } from "jotai/utils";

export const configAtom = atomWithStorage("configAtom", {
  mode: "",
  petId: "",
  qid: "",
  isFirstTime: true,
  date: "",
});

export const initialConfig = {
  mode: "",
  petId: "",
  qid: "",
  isFirstTime: true,
  date: "",
};
