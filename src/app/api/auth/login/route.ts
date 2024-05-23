import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { userEmail, userPW } = await request.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, password: userPW }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json({ error: errorText }, { status: response.status });
  }

  const loginToken = response.headers.get("set-cookie");
  let data = {};

  try {
    data = await response.json();
  } catch {
    // 응답 본문이 JSON 형식이 아닌 경우 빈 객체 반환
  }

  const res = NextResponse.json(data);
  if (loginToken) {
    res.headers.set("Set-Cookie", loginToken);
  }

  return res;
}
