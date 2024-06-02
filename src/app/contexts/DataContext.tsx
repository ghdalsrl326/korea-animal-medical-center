"use client";
import React, { createContext, useContext } from "react";
import { ResGetQuestionnaire } from "@/types/Questionnaire";
import { ResGetHealthExam } from "@/types/HealthExam";

type ApiResponse = ResGetQuestionnaire | ResGetHealthExam;

export function isResGetQuestionnaire(
  content: ApiResponse
): content is ResGetQuestionnaire {
  return (content as ResGetQuestionnaire).result.id !== undefined;
}

export function isResGetHealthExam(
  content: ApiResponse
): content is ResGetHealthExam {
  return (content as ResGetHealthExam).result.id !== undefined;
}

interface DataContextType {
  data: any;
  date: string;
  content?: ApiResponse;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children, data, date, content }: any) => {
  return (
    <DataContext.Provider value={{ data, date, content }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
