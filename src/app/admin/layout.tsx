import React from "react";
import { fetchAdminView } from "@/service/adminServer";
import { fetchMyInfo } from "@/service/doctorServer";
import { AdminDataProvider } from "@/app/contexts/AdminContext";

interface Props {
  children: React.ReactNode;
}

const layout = async ({ children }: Props) => {
  const [adminView, myInfo] = await Promise.all([
    fetchAdminView(),
    fetchMyInfo(),
  ]);

  return (
    <div>
      <AdminDataProvider data={adminView} myInfo={myInfo}>
        <div>{children}</div>
      </AdminDataProvider>
    </div>
  );
};

export default layout;
