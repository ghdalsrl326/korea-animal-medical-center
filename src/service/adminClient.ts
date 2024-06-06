export const deleteQuestionnaire = async (qid: string) => {
  try {
    const response = await fetch(
      `/api/admin/questionnaire?questionnaireID=${qid}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to delete Questionnaire");
    } else {
      const responseData = await response.json();
      return responseData;
    }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "Failed to delete Questionnaire" };
    }
  }
};
