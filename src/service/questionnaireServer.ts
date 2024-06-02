import { ResGetQuestionnaire } from "@/app/data/questionnaireStore";
import { ErrorMsg } from "@/types/ErrorMsg";
import { cookies } from "next/headers";

export const fetchQuestionnaire = async (
  qid: string
): Promise<ResGetQuestionnaire | ErrorMsg> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/health-check/questionnaire?questionnaireID=${qid}`,
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
      throw new Error(errorData.error || "Failed to fetch Questionnaire");
    } else {
      const responseData = await response.json();
      // console.log(responseData);
      return responseData;
    }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "Failed to fetch Questionnaire" };
    }
  }
};
