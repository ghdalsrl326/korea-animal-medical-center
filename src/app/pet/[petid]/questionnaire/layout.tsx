import React from "react";
import Page from "./page";
import { fetchReportMeta } from "@/service/pet";
import getToday from "@/util/getToday";
import { DataProvider } from "@/app/contexts/DataContext";
import { fetchMyInfo } from "@/service/doctorServer";

interface Props {
  children: React.ReactNode;
  params: { petid: string };
}

const layout = async ({ params, children }: Props) => {
  const { petid } = params;

  const [data, myInfo] = await Promise.all([
    fetchReportMeta(petid),
    fetchMyInfo(),
  ]);

  const date = getToday();

  return (
    <div>
      <DataProvider data={data} date={date} myInfo={myInfo}>
        <div>{children}</div>
      </DataProvider>
    </div>
  );
};

export default layout;
