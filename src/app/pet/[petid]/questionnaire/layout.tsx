import React from "react";
import Page from "./page";
import { fetchReportMeta } from "@/service/pet";
import getToday from "@/util/getToday";

interface Props {
  params: { petid: string };
}

const layout = async ({ params }: Props) => {
  const { petid } = params;

  const data = await fetchReportMeta(petid);
  return (
    <div>
      <Page data={data} date={getToday()} />
    </div>
  );
};

export default layout;
