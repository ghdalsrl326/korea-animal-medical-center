"use client";
import React, { createContext, useContext } from "react";
import { ResGetMyInfo } from "@/types/Doctor";
import { ResGetAdminView } from "@/types/Admin";

interface DataContextType {
  data: ResGetAdminView;
  myInfo: ResGetMyInfo;
}

const AdminDataContext = createContext<DataContextType | undefined>(undefined);

export const AdminDataProvider = ({ children, data, myInfo }: any) => {
  return (
    <AdminDataContext.Provider value={{ data, myInfo }}>
      {children}
    </AdminDataContext.Provider>
  );
};

export const useAdminData = () => {
  const context = useContext(AdminDataContext);
  if (context === undefined) {
    throw new Error("useAdminData must be used within a DataProvider");
  }
  return context;
};
