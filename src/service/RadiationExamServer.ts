import { ErrorMsg } from "@/types/ErrorMsg";
import { ResGetRadiationExam } from "@/types/RadiationExam";
import { cookies } from "next/headers";

export const fetchRadiationExam = async (
  qid: string
): Promise<ResGetRadiationExam | ErrorMsg> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/health-check/imaging-result?questionnaireID=${qid}`,
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
      throw new Error(errorData.error || "Failed to fetch Radiation Exam");
    } else {
      const responseData = await response.json();
      return responseData;
    }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "Failed to fetch Radiation Exam" };
    }
  }
};
