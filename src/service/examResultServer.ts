import { ErrorMsg } from "@/types/ErrorMsg";
import { ResGetExamResult } from "@/types/ExamResult";
import { cookies } from "next/headers";

export const fetchExamResult = async (
  qid: string
): Promise<ResGetExamResult | ErrorMsg> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/health-check/comprehensive-result?questionnaireID=${qid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies().toString(),
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch Exam Result");
    } else {
      const responseData = await response.json();
      return responseData;
    }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "Failed to fetch Exam Result" };
    }
  }
};
