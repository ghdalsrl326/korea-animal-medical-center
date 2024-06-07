import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const qid = searchParams.get("questionnaireID");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/signature?questionnaireID=${qid}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    }
  );

  const text = await response.text();

  if (!response.ok) {
    throw new Error("Failed to get Signature");
  }

  return NextResponse.json({ signatureUrl: text });
}
