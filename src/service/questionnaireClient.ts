import { QuestionnaireProps } from "@/app/data/questionnaireStore";
import { ResSaveReport } from "@/types/Report";

export const saveQuestionnaire = async (
  content: QuestionnaireProps,
  petID: string
): Promise<Partial<ResSaveReport>> => {
  try {
    const response = await fetch(
      `/api/health-check/questionnaire?petID=${petID}`,
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
      throw new Error(errorData.error || "Failed to post Questionnaire");
    } else {
      const responseData = await response.json();
      return responseData;
    }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "Failed to post Questionnaire" };
    }
  }
};
