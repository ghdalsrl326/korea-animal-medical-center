// service/questionnaire.ts
import { QuestionnaireProps } from "@/app/data/questionnaireStore";
import dayjs from "dayjs";

export const onSave = async (
  content: QuestionnaireProps,
  petID: string
): Promise<{
  questionnaireId: number;
  isFirstTime: boolean;
  error?: string;
}> => {
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
      return {
        questionnaireId: responseData.questionnaireId,
        isFirstTime: responseData.isFirstTime,
      };
    }
  } catch (error) {
    if (error instanceof Error) {
      return { questionnaireId: 0, isFirstTime: false, error: error.message };
    } else {
      return {
        questionnaireId: 0,
        isFirstTime: false,
      };
    }
  }
};
