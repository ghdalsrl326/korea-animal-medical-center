import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const qid = searchParams.get("questionnaireID");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/health-check/comprehensiveResult?questionnaireID=${qid}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      body: JSON.stringify(await request.json()),
    }
  );

  const data = await response.text().then((text) => {
    return text
      ? JSON.parse(text)
      : { message: "POST comprehensiveResult successful" };
  });

  if (!response.ok) {
    throw new Error(data.message || "Failed to post comprehensiveResult");
  }

  return NextResponse.json(data);
}
