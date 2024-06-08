import { useSetAtom } from "jotai";
import {
  bloodExamResultAtom,
  initialBloodExamResult,
} from "@/app/data/bloodExamResultStore";
import { examResultAtom, initialExamResult } from "@/app/data/examResultStore";
import {
  healthExamDetailAtom,
  initialHealthExamDetail,
} from "@/app/data/healthExamDetailStore";
import {
  healthExamSummaryAtom,
  initialHealthExamSummary,
} from "@/app/data/healthExamSummaryStore";
import {
  initialQuestionnaire,
  questionnaireAtom,
} from "@/app/data/questionnaireStore";
import {
  initialRadiationExam,
  radiationExamAtom,
} from "@/app/data/radiationExamStore";
import { configAtom, initialConfig } from "@/app/data/configStore";

export function useResetAllStores() {
  const setBloodExamResult = useSetAtom(bloodExamResultAtom);
  const setExamResult = useSetAtom(examResultAtom);
  const setHealthExamDetail = useSetAtom(healthExamDetailAtom);
  const setHealthExamSummary = useSetAtom(healthExamSummaryAtom);
  const setQuestionnaire = useSetAtom(questionnaireAtom);
  const setRadiationExam = useSetAtom(radiationExamAtom);
  const setConfig = useSetAtom(configAtom);

  const resetAllStores = () => {
    setBloodExamResult(initialBloodExamResult);
    setExamResult(initialExamResult);
    setHealthExamDetail(initialHealthExamDetail);
    setHealthExamSummary(initialHealthExamSummary);
    setQuestionnaire(initialQuestionnaire);
    setRadiationExam(initialRadiationExam);
    setConfig(initialConfig);
  };

  return resetAllStores;
}
