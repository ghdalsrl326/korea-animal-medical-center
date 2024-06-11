import { ErrorMsg } from "@/types/ErrorMsg";
import { BloodExamWrapper, ResGetBloodExam } from "@/types/BloodExam";
import { ResSaveReport } from "@/types/Report";

export const saveBloodExam = async (
  content: BloodExamWrapper,
  qid: string
): Promise<ResSaveReport | ErrorMsg> => {
  try {
    const response = await fetch(
      `/api/health-check/bloodResult?questionnaireID=${qid}`,
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
      throw new Error(errorData.error || "Failed to post BloodExam");
    } else {
      const responseData = await response.json();
      return responseData;
    }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "Failed to post BloodExam" };
    }
  }
};

export const fetchLastBloodExam = async (
  qid: string
): Promise<ResGetBloodExam> => {
  const response = await fetch(
    `/api/health-check/blood-result?questionnaireID=${qid}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to fetch BloodExam");
  } else {
    const responseData = await response.json();
    return responseData;
  }
};
