"use client";
import React, { createContext, useContext } from "react";
import { ResGetMyInfo, ResGetMyPets } from "@/types/Doctor";

interface DataContextType {
  data: ResGetMyPets;
  myInfo: ResGetMyInfo;
}

const MyReportsDataContext = createContext<DataContextType | undefined>(
  undefined
);

export const MyReportsDataProvider = ({ children, data, myInfo }: any) => {
  return (
    <MyReportsDataContext.Provider value={{ data, myInfo }}>
      {children}
    </MyReportsDataContext.Provider>
  );
};

export const useMyReportsData = () => {
  const context = useContext(MyReportsDataContext);
  if (context === undefined) {
    throw new Error(
      "useMyReportsData must be used within a MyReportsDataProvider"
    );
  }
  return context;
};
