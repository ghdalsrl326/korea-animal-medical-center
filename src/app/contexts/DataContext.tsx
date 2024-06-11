"use client";
import React, { createContext, useContext } from "react";
import { ResGetQuestionnaire } from "@/types/Questionnaire";
import { ResGetHealthExam } from "@/types/HealthExam";
import { ResGetBloodExam } from "@/types/BloodExam";
import { ResGetRadiationExam } from "@/types/RadiationExam";
import { ResGetExamResult } from "@/types/ExamResult";
import { ResGetMyInfo } from "@/types/Doctor";
import { ReportMeta } from "@/types/ReportMeta";
import { Setting } from "@/types/Setting";

type ApiResponse =
  | ResGetQuestionnaire
  | ResGetHealthExam
  | ResGetBloodExam
  | ResGetRadiationExam
  | ResGetExamResult;

export function isResGetQuestionnaire(
  content: ApiResponse
): content is ResGetQuestionnaire {
  return (
    content &&
    "result" in content &&
    content.result &&
    content.result.id !== undefined
  );
}

export function isResGetHealthExam(
  content: ApiResponse
): content is ResGetHealthExam {
  return (
    content &&
    "result" in content &&
    content.result &&
    content.result.id !== undefined
  );
}

export function isResGetBloodExam(
  content: ApiResponse
): content is ResGetBloodExam {
  return (
    content &&
    "result" in content &&
    content.result &&
    content.result.id !== undefined
  );
}

export function isResGetRadiationExam(
  content: ApiResponse
): content is ResGetRadiationExam {
  return (
    content &&
    "result" in content &&
    content.result &&
    content.result.id !== undefined
  );
}

export function isResGetExamResult(
  content: ApiResponse
): content is ResGetExamResult {
  return (
    content &&
    "result" in content &&
    content.result &&
    content.result.id !== undefined
  );
}

interface DataContextType {
  data: Partial<Setting>;
  date: string;
  content?: ApiResponse;
  myInfo?: ResGetMyInfo;
  additionalData?: ApiResponse;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({
  children,
  data,
  date,
  content,
  myInfo,
  additionalData,
}: any) => {
  return (
    <DataContext.Provider
      value={{ data, date, content, myInfo, additionalData }}
    >
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
