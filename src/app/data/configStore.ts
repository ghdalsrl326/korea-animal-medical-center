import { atomWithStorage } from "jotai/utils";

export const configAtom = atomWithStorage("configAtom", {
  mode: "",
  petId: "",
  qid: "",
  date: "",
});
