import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const qid = searchParams.get("questionnaireID");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/questionnaire?questionnaireID=${qid}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    }
  );

  const data = await response.text().then((text) => {
    return text
      ? JSON.parse(text)
      : { message: "DELETE Questionnaire successful" };
  });

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete Questionnaire");
  }

  return NextResponse.json(data);
}
