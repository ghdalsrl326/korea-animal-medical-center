import React from "react";
import { fetchReportMeta } from "@/service/pet";
import { getDateByQid } from "@/util/getDateByQid";
import { DataProvider } from "@/app/contexts/DataContext";
import { fetchHealthExam } from "@/service/healthExamServer";
import { fetchMyInfo } from "@/service/doctorServer";

interface Props {
  children: React.ReactNode;
  params: { petid: string; qid: string };
}

const layout = async ({ params, children }: Props) => {
  const { petid, qid } = params;

  const [data, content, myInfo] = await Promise.all([
    fetchReportMeta(petid),
    fetchHealthExam(qid),
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
