import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error((errorData && errorData.message) || "Failed to logout");
  }

  // Ensure the response is JSON, even if it's empty
  const data = await response
    .json()
    .catch(() => ({ message: "Logout successful" }));

  return NextResponse.json(data);
}
