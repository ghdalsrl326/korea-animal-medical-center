import React from "react";
import { fetchReportMeta } from "@/service/pet";
import { getDateByQid } from "@/util/getDateByQid";
import { DataProvider } from "@/app/contexts/DataContext";

interface Props {
  children: React.ReactNode;
  params: { petid: string; qid: string };
}

const layout = async ({ params, children }: Props) => {
  const { petid, qid } = params;

  const data = await fetchReportMeta(petid);
  const date = getDateByQid(qid, data.questionnaire);

  return (
    <div>
      <DataProvider data={data} date={date}>
        {children}
      </DataProvider>
    </div>
  );
};

export default layout;
