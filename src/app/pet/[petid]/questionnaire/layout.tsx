import React from "react";
import Page from "./page";
import { fetchReportMeta } from "@/service/pet";
import getToday from "@/util/getToday";
import { DataProvider } from "@/app/contexts/DataContext";

interface Props {
  children: React.ReactNode;
  params: { petid: string };
}

const layout = async ({ params, children }: Props) => {
  const { petid } = params;

  const data = await fetchReportMeta(petid);
  const date = getToday();

  return (
    <div>
      <DataProvider data={data} date={date}>
        <div>{children}</div>
      </DataProvider>
    </div>
  );
};

export default layout;
