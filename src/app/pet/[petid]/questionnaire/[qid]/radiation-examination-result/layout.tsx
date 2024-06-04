import React from "react";
import Page from "./page";
import { fetchReportMeta } from "@/service/pet";
import getToday from "@/util/getToday";
import { getDateByQid } from "@/util/getDateByQid";
import { DataProvider } from "@/app/contexts/DataContext";
import { fetchRadiationExam } from "@/service/RadiationExamServer";

interface Props {
  params: { petid: string; qid: string };
  children: React.ReactNode;
}

const layout = async ({ params, children }: Props) => {
  const { petid, qid } = params;

  const data = await fetchReportMeta(petid);
  const date = getDateByQid(qid, data.questionnaire);
  const content = await fetchRadiationExam(qid);

  return (
    <div>
      <DataProvider data={data} date={date} content={content}>
        {children}
      </DataProvider>
      {/* <Page data={data} date={getToday()} /> */}
    </div>
  );
};

export default layout;
