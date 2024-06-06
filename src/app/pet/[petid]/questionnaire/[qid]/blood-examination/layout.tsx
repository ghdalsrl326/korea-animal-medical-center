import React from "react";
import { fetchReportMeta } from "@/service/pet";
import { getDateByQid } from "@/util/getDateByQid";
import { DataProvider } from "@/app/contexts/DataContext";
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
  console.log("petid:", petid);
  console.log("qid:", qid);
  console.log("data:", data);
  console.log("date:", date);
  return (
    <div>
      <DataProvider data={data} date={date} myInfo={myInfo}>
        {children}
      </DataProvider>
    </div>
  );
};

export default layout;
