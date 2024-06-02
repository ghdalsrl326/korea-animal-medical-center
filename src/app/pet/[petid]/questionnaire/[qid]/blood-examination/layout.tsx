import React from "react";
import Page from "./page";
import { fetchReportMeta } from "@/service/pet";

interface Props {
  params: { petid: string; date: string };
}

const layout = async ({ params }: Props) => {
  const { petid, date } = params;

  const data = await fetchReportMeta(petid);
  return (
    <div>
      <Page data={data} date={date} />
    </div>
  );
};

export default layout;
