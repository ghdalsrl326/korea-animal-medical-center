"use client";
import React, { createContext, useContext } from "react";
import {
  QuestionnaireProps,
  ResGetQuestionnaire,
} from "../data/questionnaireStore";

interface DataContextType {
  data: any;
  date: string;
  content?: ResGetQuestionnaire;
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
