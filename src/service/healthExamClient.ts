import { ErrorMsg } from "@/types/ErrorMsg";
import { HealthExam } from "@/types/HealthExam";
import { ResSaveReport } from "@/types/Report";

export const saveHealthExam = async (
  content: Partial<HealthExam>,
  qid: string
): Promise<ResSaveReport | ErrorMsg> => {
  try {
    const response = await fetch(
      `/api/health-check/physicalResult?questionnaireID=${qid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...content,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to post Health Exam");
    } else {
      const responseData = await response.json();
      return responseData;
    }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "Failed to post Health Exam" };
    }
  }
};