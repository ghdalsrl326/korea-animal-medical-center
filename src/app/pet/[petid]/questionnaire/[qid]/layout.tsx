import React from "react";
import Page from "./page";
import { fetchReportMeta } from "@/service/pet";
import getToday from "@/util/getToday";
import { fetchQuestionnaire } from "@/service/questionnaireServer";
import { QuestionnaireProps } from "@/app/data/questionnaireStore";

interface Props {
  params: { petid: string; qid: string };
}

const layout = async ({ params }: Props) => {
  const { petid, qid } = params;

  const data = await fetchReportMeta(petid);
  const content: Partial<QuestionnaireProps> = await fetchQuestionnaire(qid);

  return (
    <div>
      <Page data={data} date={getToday()} />
    </div>
  );
};

export default layout;
