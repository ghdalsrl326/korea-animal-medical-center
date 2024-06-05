import React from "react";
import { fetchReportMeta } from "@/service/pet";
import { getDateByQid } from "@/util/getDateByQid";
import { DataProvider } from "@/app/contexts/DataContext";
import { fetchExamResult } from "@/service/examResultServer";
import { fetchMyInfo } from "@/service/doctorServer";

interface Props {
  params: { petid: string; qid: string };
  children: React.ReactNode;
}

const layout = async ({ params, children }: Props) => {
  const { petid, qid } = params;

  const data = await fetchReportMeta(petid);
  const date = getDateByQid(qid, data.questionnaire);
  const content = await fetchExamResult(qid);
  const myInfo = await fetchMyInfo();

  return (
    <div>
      <DataProvider data={data} date={date} content={content} myInfo={myInfo}>
        {children}
      </DataProvider>
    </div>
  );
};

export default layout;
