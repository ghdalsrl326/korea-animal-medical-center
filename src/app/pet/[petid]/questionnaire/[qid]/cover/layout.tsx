import React from "react";
import { fetchReportMeta } from "@/service/pet";
import { DataProvider } from "@/app/contexts/DataContext";
import { getDateByQid } from "@/util/getDateByQid";
import { fetchMyInfo } from "@/service/doctorServer";

interface Props {
  children: React.ReactNode;
  params: { petid: string; qid: string };
}

const layout = async ({ params, children }: Props) => {
  const { petid, qid } = params;

  const [data, myInfo] = await Promise.all([
    fetchReportMeta(petid),
    fetchMyInfo(),
  ]);

  const date = getDateByQid(qid, data.questionnaire);

  return (
    <div>
      <DataProvider data={data} date={date} myInfo={myInfo}>
        {children}
      </DataProvider>
    </div>
  );
};

export default layout;
