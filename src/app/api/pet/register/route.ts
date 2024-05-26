import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pet/register`,
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
    return text ? JSON.parse(text) : { message: "Pet registration successful" };
  });

  if (!response.ok) {
    throw new Error(data.message || "Failed to register pet");
  }

  return NextResponse.json(data);
}
