import { ResGetMyInfo } from "@/types/Doctor";
import { ErrorMsg } from "@/types/ErrorMsg";
import { cookies } from "next/headers";

export const fetchMyInfo = async (): Promise<ResGetMyInfo | ErrorMsg> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/doctor/my-information`,
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
      throw new Error(errorData.error || "Failed to fetch My Info");
    } else {
      const responseData = await response.json();
      return responseData;
    }
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else {
      return { error: "Failed to fetch Exam My Info" };
    }
  }
};
