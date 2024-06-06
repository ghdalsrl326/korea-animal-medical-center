import React from "react";
import { fetchReportMeta } from "@/service/pet";
import { fetchQuestionnaire } from "@/service/questionnaireServer";
import { getDateByQid } from "@/util/getDateByQid";
import { DataProvider } from "@/app/contexts/DataContext";
import { fetchMyInfo } from "@/service/doctorServer";

interface Props {
  children: React.ReactNode;
  params: { petid: string; qid: string };
}

const layout = async ({ params, children }: Props) => {
  const { petid, qid } = params;

  const [data, content, myInfo] = await Promise.all([
    fetchReportMeta(petid),
    fetchQuestionnaire(qid),
    fetchMyInfo(),
  ]);

  const date = getDateByQid(qid, data.questionnaire);

  return (
    <div>
      <DataProvider data={data} date={date} content={content} myInfo={myInfo}>
        {children}
      </DataProvider>
    </div>
  );
};

export default layout;
