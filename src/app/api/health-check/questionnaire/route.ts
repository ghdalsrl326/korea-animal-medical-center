import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const petID = searchParams.get("petID");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/health-check/questionnaire?petID=${petID}`,
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
      : { message: "POST Questionnaire successful" };
  });

  if (!response.ok) {
    throw new Error(data.message || "Failed to post Questionnaire");
  }

  return NextResponse.json(data);
}
