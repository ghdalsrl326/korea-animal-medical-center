export async function signup(
  userID: string,
  userPW: string,
  email: string,
  signature: string
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doctor/sign-up`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userID,
        password: userPW,
        email,
        signature,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to sign up");
  }

  return data;
}
