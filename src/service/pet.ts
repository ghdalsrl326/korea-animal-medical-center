import { Setting } from "@/types/Setting";
import { cookies } from "next/headers";

export async function fetchReportMeta(petID: string): Promise<Setting> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pet/questionnaire?petID=${petID}`,
      {
        method: "GET",
        credentials: "include",
        headers: { Cookie: cookies().toString() },
      }
    );

    // 응답이 OK가 아닌 경우 에러를 던지기 전에 응답 본문을 안전하게 처리
    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage;
      try {
        errorMessage = JSON.parse(errorText).message;
      } catch (e) {
        errorMessage = errorText;
      }
      throw new Error(errorMessage || "Failed to fetch report list");
    }

    // 응답이 비어있을 가능성 처리
    const responseText = await response.text();
    const data = responseText ? JSON.parse(responseText) : {};
    console.log("Fetched Data:", data); // 데이터 로그 추가

    return data;
  } catch (error) {
    console.error("Error fetching report meta:", error);
    throw new Error("Failed to fetch report meta");
  }
}
