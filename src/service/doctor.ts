export async function signup(
  userName: string,
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
        name: userName,
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

export async function emailDuplicateCheck(email: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doctor/email-duplicate-check?email=${email}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to check email duplicate");
  }

  return data;
}

export async function fetchDoctorInfo() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doctor/my-information`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to get my info");
  }

  return data;
}

export async function fetchDoctorsPet() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/doctor/pet`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to get pet info");
  }

  return data;
}
