import React from "react";
import CoverPage from "./page";
import { fetchReports } from "@/service/pet";

interface Props {
  params: { petid: string; date: string };
}

const layout = async ({ params }: Props) => {
  const { petid, date } = params;

  const data = await fetchReports(petid);
  return (
    <div>
      <CoverPage data={data} date={date} />
    </div>
  );
};

export default layout;
