export async function login(userID: string, userPW: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userID, password: userPW }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    let errorMessage = "Failed to login";
    try {
      const errorData = JSON.parse(errorText);
      errorMessage = errorData.message || errorMessage;
    } catch {
      // ignore JSON parsing error and use default error message
    }
    throw new Error(errorMessage);
  }

  const responseText = await response.text();
  if (!responseText) {
    return; // 응답 본문이 없으면 빈 객체 반환
  }

  const data = JSON.parse(responseText);
  return data;
}

export async function logout() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
    {
      method: "POST",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to logout");
  }

  return data;
}
