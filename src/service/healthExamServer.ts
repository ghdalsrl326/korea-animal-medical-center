import { ErrorMsg } from "@/types/ErrorMsg";
import { ResGetHealthExam } from "@/types/HealthExam";
import { cookies } from "next/headers";

export const fetchHealthExam = async (
  qid: string
): Promise<ResGetHealthExam | ErrorMsg> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/health-check/physical-result?questionnaireID=${qid}`,
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
      throw new Error(errorData.error || "Failed to fetch Health Exam");
    } else {
      const responseData = await response.json();
      return responseData;
    }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "Failed to fetch Health Exam" };
    }
  }
};
