import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const qid = searchParams.get("questionnaireID");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/health-check/blood-result?questionnaireID=${qid}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    }
  );

  const data = await response.text().then((text) => {
    return text ? JSON.parse(text) : { message: "GET BloodResult successful" };
  });

  // console.log("data:", data);

  if (!response.ok) {
    throw new Error(data.message || "Failed to GET BloodResult");
  }

  return NextResponse.json(data);
}
