import { MyReportsDataProvider } from "@/app/contexts/MyReportsContext";
import { fetchMyInfo, fetchMyPets } from "@/service/doctorServer";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const layout = async ({ children }: Props) => {
  const data = await fetchMyPets();
  const myInfo = await fetchMyInfo();

  return (
    <MyReportsDataProvider data={data} myInfo={myInfo}>
      <div>{children}</div>
    </MyReportsDataProvider>
  );
};

export default layout;
